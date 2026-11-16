import { z } from "zod";

const httpsUrl = z.string().trim().refine((value) => {
  if (!URL.canParse(value)) return false;
  const url = new URL(value);
  return url.protocol === "https:" && !url.username && !url.password;
});

const configuration = z.object({
  RECONCILIATION_PRIVACY_URL: httpsUrl,
  RECONCILIATION_ENQUIRY_FROM: z.string().trim().email(),
  RECONCILIATION_ENQUIRY_TO: z.string().trim().email(),
  RESEND_API_KEY: z.string().trim().min(1),
  UPSTASH_REDIS_REST_URL: httpsUrl,
  UPSTASH_REDIS_REST_TOKEN: z.string().trim().min(1),
});

export function reconciliationConfig(env: Record<string, string | undefined> = process.env) {
  const parsed = configuration.safeParse(env);
  if (!parsed.success) return null;

  const config = parsed.data;
  return {
    privacyUrl: config.RECONCILIATION_PRIVACY_URL,
    from: config.RECONCILIATION_ENQUIRY_FROM,
    to: config.RECONCILIATION_ENQUIRY_TO,
    resendKey: config.RESEND_API_KEY,
    redisUrl: config.UPSTASH_REDIS_REST_URL,
    redisToken: config.UPSTASH_REDIS_REST_TOKEN,
  };
}

export function reconciliationIsIndexable(env: Record<string, string | undefined> = process.env) {
  return (!env.VERCEL_ENV || env.VERCEL_ENV === "production") &&
    reconciliationConfig(env) !== null;
}
