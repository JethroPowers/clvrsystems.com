# Deploy CLVR Reconcile

The landing page is at `/solutions/reconciliation` in the CLVR Systems site. The form posts to `/api/reconciliation-enquiries`. The production canonical and the source in notifications use the live `www.clvrsystems.com` host.

## Production configuration

Publish or identify an approved CLVR privacy notice that covers this enquiry flow, including the purpose of the collection, email delivery and abuse prevention. No applicable notice was found in this repository or on the live CLVR site. Confirm the notice URL and company inbox before outreach.

Set these server-side variables in the CLVR Systems Vercel project. Use separate provider credentials and a test inbox for previews. Locally, use the shell or an ignored `.env.local` file.

| Variable | Value |
| --- | --- |
| `RECONCILIATION_PRIVACY_URL` | Public HTTPS URL of the approved, applicable CLVR privacy notice. |
| `RECONCILIATION_ENQUIRY_FROM` | Sender email at a domain verified in Resend. |
| `RECONCILIATION_ENQUIRY_TO` | Confirmed company inbox for discovery enquiries. The site publishes `hello@clvrsystems.com` for general contact. Confirm the monitored recipient before configuring it. |
| `RESEND_API_KEY` | Resend sending key scoped to the verified domain. |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis HTTPS REST endpoint. |
| `UPSTASH_REDIS_REST_TOKEN` | Redis REST token with permissions to execute the rate-limiting script and write expiring keys. |

A fresh deployment applies changes to the pre-rendered page, metadata and sitemap. With incomplete or invalid configuration, the page shows the published CLVR email link, the submission endpoint fails closed, and the route is excluded from the sitemap and marked `noindex`. Vercel previews also remain `noindex`.

## Verify before outreach

1. Run `pnpm lint`, `pnpm typecheck`, `pnpm test:insights`, `pnpm test:enquiries`, `node --import tsx --test tests/reconciliation-enquiries.test.ts` and `pnpm build`.
2. Deploy the CLVR Systems site with the approved notice and provider configuration. Open the landing page and notice on a phone and confirm that the public route renders the form.
3. Use clearly labelled test details to submit a request. Check the confirmation, the Resend delivery event and receipt in the configured inbox. The notification should include the source URL, UTC timestamp, all submitted fields and the sender’s work email as its reply-to address. Keep the Resend delivery dashboard available to check for delayed delivery or bounces.
4. Verify the deployed canonical and the branded link preview using the production URL. Open Graph and Twitter use the same 1200 × 630 PNG.

The form displays a receipt acknowledgement after Resend returns a message ID. Delivery to the receiving mail server happens asynchronously. The application keeps no enquiry database. Redis holds keyed hashes, expiring rate-limit counters and the request's original timestamp for retry deduplication. A honeypot blocks automated submissions. The limiter permits eight attempts per edge IP and 60 overall per 15 minutes. Outside Vercel, requests share the fallback IP bucket. Resend receives the enquiry contents by design.

Edit the dated Kampala availability note and expiry together in `app/solutions/reconciliation/content.ts`. The page revalidates hourly, and the dated wording drops off when the visit expires. The site has no active analytics implementation for this route.
