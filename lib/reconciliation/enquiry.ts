import { createHmac } from "node:crypto";
import { isIP } from "node:net";
import { z } from "zod";
import { reconciliationConfig } from "./config";
import {
  meetingFields,
  meetingFormats,
  meetingPhonePattern,
  reconciliationUrl,
} from "./site";

const maxBodyBytes = 12 * 1024;
const windowSeconds = 15 * 60;
const perNetworkLimit = 8;
const totalLimit = 60;
const requestLifetimeSeconds = 24 * 60 * 60;

const singleLine = (limit: number) =>
  z.string().trim().max(limit).regex(/^[^\u0000-\u001F\u007F]*$/u);
const requestSchema = z.object({
  submissionId: z.string().uuid(),
  website: z.literal(""),
  fullName: singleLine(meetingFields.fullName.limit).min(1),
  email: singleLine(meetingFields.email.limit).email(),
  company: singleLine(meetingFields.company.limit).min(1),
  role: singleLine(meetingFields.role.limit).min(1),
  phone: singleLine(meetingFields.phone.limit)
    .regex(new RegExp(`^(?:${meetingPhonePattern})?$`, "u")).default(""),
  industry: singleLine(meetingFields.industry.limit).default(""),
  challenge: z.string().trim().max(meetingFields.challenge.limit)
    .regex(/^[^\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]*$/u).default(""),
  format: z.union([z.enum(meetingFormats), z.literal("")]).default(""),
  availability: singleLine(meetingFields.availability.limit).default(""),
}).strict();

const sendFailure =
  "We couldn’t confirm your request was sent. Please try again or contact CLVR Systems.";

const unavailable =
  "The meeting form is temporarily unavailable. Please try again later or contact CLVR Systems.";

function reply(status: number, error?: string, retryAfter?: number) {
  const headers = new Headers({ "Cache-Control": "no-store" });
  if (retryAfter) headers.set("Retry-After", String(retryAfter));
  return Response.json(error ? { ok: false, error } : { ok: true }, { status, headers });
}

async function readBody(request: Request): Promise<string | null> {
  const reader = request.body?.getReader();
  if (!reader) return "";
  const decoder = new TextDecoder("utf-8", { fatal: true });
  let bytes = 0;
  let body = "";
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) return body + decoder.decode();
      bytes += value.byteLength;
      if (bytes > maxBodyBytes) {
        await reader.cancel();
        return null;
      }
      body += decoder.decode(value, { stream: true });
    }
  } finally {
    reader.releaseLock();
  }
}

// Apply both limits and remember the original server timestamp in one atomic call.
// The short-lived keys contain counters, keyed hashes and a timestamp only.
const reserveSubmission = `
  for i = 1, 2 do
    if tonumber(redis.call("GET", KEYS[i]) or "0") >= tonumber(ARGV[i]) then
      return false
    end
  end
  for i = 1, 2 do
    if redis.call("INCR", KEYS[i]) == 1 then
      redis.call("EXPIRE", KEYS[i], ARGV[3])
    end
  end
  local receivedAt = redis.call("GET", KEYS[3])
  if not receivedAt then
    receivedAt = ARGV[4]
    redis.call("SET", KEYS[3], receivedAt, "EX", ARGV[5])
  end
  return receivedAt
`;

type Configuration = NonNullable<ReturnType<typeof reconciliationConfig>>;

async function checkRateLimit(
  config: Configuration,
  network: string,
  requestKey: string,
  send: typeof fetch,
): Promise<string | null> {
  const response = await send(config.redisUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${config.redisToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify([
      "EVAL", reserveSubmission, 3,
      `{clvr-reconcile}:network:${network}`, "{clvr-reconcile}:total",
      `{clvr-reconcile}:request:${requestKey}`,
      perNetworkLimit, totalLimit, windowSeconds,
      new Date().toISOString(), requestLifetimeSeconds,
    ]),
    cache: "no-store",
    redirect: "error",
    signal: AbortSignal.timeout(4000),
  });
  if (!response.ok) throw new Error("Rate limiter unavailable");
  const result = await response.json();
  if (result.result === null) return null;
  if (typeof result.result !== "string" || Number.isNaN(Date.parse(result.result))) {
    throw new Error("Unexpected rate limiter response");
  }
  return result.result;
}

export async function submitMeetingRequest(
  request: Request,
  env: Record<string, string | undefined> = process.env,
  send: typeof fetch = fetch,
) {
  const origin = request.headers.get("origin");
  const url = new URL(request.url);
  const vercelHost = env.VERCEL === "1" ? request.headers.get("x-forwarded-host") : null;
  const host = request.headers.get("host") || url.host;
  const expectedOrigin = vercelHost ? `https://${vercelHost}` : `${url.protocol}//${host}`;
  if ((origin && origin !== expectedOrigin) ||
      request.headers.get("sec-fetch-site") === "cross-site") {
    return reply(403, "Submit your meeting request from the CLVR Reconcile page.");
  }

  const contentType = request.headers.get("content-type")?.split(";")[0].trim().toLowerCase();
  if (contentType !== "application/json") {
    return reply(415, "This form needs JavaScript to send a request. You can also contact CLVR Systems by email.");
  }

  if (Number(request.headers.get("content-length")) > maxBodyBytes) {
    return reply(413, "Your message is too long. Please shorten it and try again.");
  }

  let payload: unknown;
  try {
    const body = await readBody(request);
    if (body === null) return reply(413, "Your message is too long. Please shorten it and try again.");
    payload = JSON.parse(body);
  } catch {
    return reply(400, "We couldn’t read your request. Please try again.");
  }

  const parsed = requestSchema.safeParse(payload);
  if (!parsed.success) {
    const field = parsed.error.issues[0]?.path[0];
    const label = typeof field === "string" && Object.hasOwn(meetingFields, field)
      ? meetingFields[field as keyof typeof meetingFields].label
      : null;
    return reply(400, label ? `Check the ${label.toLowerCase()} field and try again.` : "Please check your details and try again.");
  }

  const config = reconciliationConfig(env);
  if (!config) return reply(503, unavailable);

  const { submissionId, website: _website, ...details } = parsed.data;
  // Vercel supplies this header at the edge. Other environments share the fallback bucket.
  const ip = env.VERCEL === "1" ? request.headers.get("x-vercel-forwarded-for")?.trim() : null;
  const digest = (value: string) => createHmac("sha256", config.redisToken).update(value).digest("hex");
  const network = digest(ip && isIP(ip) ? ip : "unknown");
  const requestKey = digest(JSON.stringify([submissionId, details]));

  let receivedAt: string | null;
  try {
    receivedAt = await checkRateLimit(config, network, requestKey, send);
  } catch {
    return reply(503, unavailable);
  }
  if (!receivedAt) return reply(429, "Too many meeting requests. Please try again in 15 minutes.", windowSeconds);

  const lines = Object.entries(meetingFields).map(([field, { label }]) => {
    const value = details[field as keyof typeof details];
    return `${label}: ${value || "Not provided"}`;
  });
  try {
    const response = await send("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.resendKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": `clvr-reconcile/${requestKey}`,
      },
      body: JSON.stringify({
        from: config.from,
        to: [config.to],
        reply_to: details.email,
        subject: "CLVR Reconcile meeting request",
        text: [`Source: ${reconciliationUrl}`, `Received (UTC): ${receivedAt}`, "", ...lines].join("\n"),
      }),
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) return reply(502, sendFailure);
    const result = await response.json();
    return typeof result?.id === "string" && result.id.trim() ? reply(200) : reply(502, sendFailure);
  } catch {
    return reply(502, sendFailure);
  }
}
