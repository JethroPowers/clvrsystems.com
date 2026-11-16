import assert from "node:assert/strict";
import { test } from "node:test";
import { reconciliationConfig, reconciliationIsIndexable } from "../lib/reconciliation/config";
import { submitMeetingRequest } from "../lib/reconciliation/enquiry";
import { reconciliationUrl } from "../lib/reconciliation/site";

const apiUrl = "https://www.clvrsystems.com/api/reconciliation-enquiries";
const payload = {
  submissionId: "277540eb-1f0a-492e-b00c-a9a722768d45",
  website: "",
  fullName: "  Test Finance Manager ",
  email: "finance@example.com",
  company: "Example Distribution",
  role: "Controller",
};

const env = {
  RECONCILIATION_PRIVACY_URL: "https://clvrsystems.com/example-notice",
  RECONCILIATION_ENQUIRY_FROM: "enquiries@example.com",
  RECONCILIATION_ENQUIRY_TO: "finance-team@example.com",
  RESEND_API_KEY: "example-key",
  UPSTASH_REDIS_REST_URL: "https://redis.example.com",
  UPSTASH_REDIS_REST_TOKEN: "example-token",
  VERCEL: "1",
};

const timestamp = "2026-11-20T10:11:12.000Z";

function request(body: string, headers: HeadersInit = {}) {
  return new Request(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body,
  });
}

const unexpectedFetch: typeof fetch = async () => {
  assert.fail("Invalid or unconfigured requests must make no provider calls");
};

test("configuration requires an HTTPS privacy notice, sender, recipient and both providers", () => {
  assert.equal(reconciliationConfig({}), null);
  for (const key of [
    "RECONCILIATION_PRIVACY_URL", "RECONCILIATION_ENQUIRY_FROM", "RECONCILIATION_ENQUIRY_TO",
    "RESEND_API_KEY", "UPSTASH_REDIS_REST_URL", "UPSTASH_REDIS_REST_TOKEN",
  ]) {
    assert.equal(reconciliationConfig({ ...env, [key]: "" }), null, key);
  }
  assert.equal(reconciliationConfig({ ...env, RECONCILIATION_PRIVACY_URL: "javascript:alert(1)" }), null);
  assert.equal(reconciliationIsIndexable({ ...env, VERCEL_ENV: "preview" }), false);
  assert.equal(reconciliationIsIndexable({ ...env, VERCEL_ENV: "production" }), true);
});

test("rejects malformed, incomplete, spam and oversized submissions before reaching providers", async () => {
  const invalid = [
    "not json",
    JSON.stringify({ ...payload, fullName: " " }),
    JSON.stringify({ ...payload, email: "test" }),
    JSON.stringify({ ...payload, email: "test@example.com\nBCC: abuse@example.com" }),
    JSON.stringify({ ...payload, role: "" }),
    JSON.stringify({ ...payload, phone: "------" }),
    JSON.stringify({ ...payload, format: "A meeting format that isn't offered" }),
    JSON.stringify({ ...payload, website: "bot.example.com" }),
    JSON.stringify({ ...payload, bankCredentials: "never accepted" }),
  ];
  for (const body of invalid) {
    assert.equal((await submitMeetingRequest(request(body), env, unexpectedFetch)).status, 400);
  }
  assert.equal((await submitMeetingRequest(request("x".repeat(13000)), env, unexpectedFetch)).status, 413);
  assert.equal((await submitMeetingRequest(request("{}", { "Content-Type": "text/plain" }), env, unexpectedFetch)).status, 415);
  assert.equal((await submitMeetingRequest(request("{}", { Origin: "https://example.com" }), env, unexpectedFetch)).status, 403);
  assert.equal((await submitMeetingRequest(request("{}", {
    Origin: "https://preview.clvrsystems.com",
    "x-forwarded-host": "preview.clvrsystems.com",
  }), env, unexpectedFetch)).status, 400);
});

test("only accepts a configured request after Resend confirms the structured notification", async () => {
  const calls: Array<{ url: string; init?: RequestInit }> = [];
  const send: typeof fetch = async (input, init) => {
    calls.push({ url: String(input), init });
    return Response.json(calls.length === 1 ? { result: timestamp } : { id: "message-id" });
  };

  const response = await submitMeetingRequest(request(JSON.stringify({
    ...payload,
    phone: "+256 700 000 000",
    format: "Video call",
    availability: "Tuesday afternoon",
    challenge: "Matching collections\nacross branches.",
  }), {
    Origin: "https://www.clvrsystems.com",
    "x-vercel-forwarded-for": "203.0.113.2",
  }), env, send);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { ok: true });
  assert.equal(response.headers.get("cache-control"), "no-store");
  assert.equal(calls[0].url, env.UPSTASH_REDIS_REST_URL);
  const rateCommand = JSON.parse(String(calls[0].init?.body));
  assert.equal(rateCommand[0], "EVAL");
  assert.match(rateCommand[3], /^\{clvr-reconcile\}:network:[a-f0-9]{64}$/);
  assert.doesNotMatch(String(calls[0].init?.body), /203\.0\.113\.2|finance@example\.com/);
  assert.equal(calls[1].url, "https://api.resend.com/emails");
  const notification = JSON.parse(String(calls[1].init?.body));
  assert.deepEqual(notification.to, [env.RECONCILIATION_ENQUIRY_TO]);
  assert.equal(notification.from, env.RECONCILIATION_ENQUIRY_FROM);
  assert.equal(notification.reply_to, payload.email);
  for (const value of [reconciliationUrl, timestamp, "Test Finance Manager", "Example Distribution", "+256 700 000 000", "Video call", "Tuesday afternoon", "Matching collections\nacross branches."]) {
    assert.ok(notification.text.includes(value), value);
  }
});

test("rejects unconfigured, rate-limited and failed deliveries", async () => {
  const valid = () => request(JSON.stringify(payload));
  assert.equal((await submitMeetingRequest(valid(), {}, unexpectedFetch)).status, 503);
  const blocked = await submitMeetingRequest(valid(), env, async (input) => {
    assert.equal(input, env.UPSTASH_REDIS_REST_URL);
    return Response.json({ result: null });
  });
  assert.equal(blocked.status, 429);
  assert.equal(blocked.headers.get("retry-after"), "900");
  const failedLimiter = await submitMeetingRequest(valid(), env, async (input) => {
    assert.equal(input, env.UPSTASH_REDIS_REST_URL);
    return Response.json({ error: "Unavailable" }, { status: 503 });
  });
  assert.equal(failedLimiter.status, 503);

  for (const providerResponse of [
    () => Response.json({ message: "Rejected" }, { status: 400 }),
    () => Response.json({}),
    () => { throw new Error("Provider timeout"); },
  ]) {
    const failedDelivery = await submitMeetingRequest(valid(), env, async (input) => (
      input === env.UPSTASH_REDIS_REST_URL ? Response.json({ result: timestamp }) : providerResponse()
    ));
    assert.equal(failedDelivery.status, 502);
    assert.equal((await failedDelivery.json()).ok, false);
  }
});

test("retries preserve notification body and idempotency key", async () => {
  const outgoing: Array<{ key: string | null; body: unknown }> = [];
  const send: typeof fetch = async (input, init) => {
    if (input === env.UPSTASH_REDIS_REST_URL) return Response.json({ result: timestamp });
    outgoing.push({ key: new Headers(init?.headers).get("idempotency-key"), body: init?.body });
    if (outgoing.length === 1) throw new Error("Interrupted after sending");
    return Response.json({ id: "message-id" });
  };
  const response = () => submitMeetingRequest(request(JSON.stringify(payload)), env, send);
  assert.equal((await response()).status, 502);
  assert.equal((await response()).status, 200);
  assert.match(outgoing[0].key ?? "", /^clvr-reconcile\/[a-f0-9]{64}$/);
  assert.deepEqual(outgoing[0], outgoing[1]);
});
