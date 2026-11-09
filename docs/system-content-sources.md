# System stories: source references

Updated 2 October 2026 for the Juris, scroll showcase, Approach page and subsequent copy revision. Research used local source and existing assets. No browser, live product session, new screenshot, customer database or environment file was used.

The public deep dives live in `lib/system-studies.ts`. They explain product workflows and design choices, rather than claiming measured customer results. The homepage case studies link directly to the Emilia and Juris sections on `/approach`.

## Emilia

Project: `/Users/Jethr/Documents/Emilia-loyalty`

- `docs/backend/backend_flow_walkthroughs.md`: valid/invalid imports, rebooking gates, retention windows, message preparation and the records connecting them.
- `src/lib/workflows/outreach-guard.ts`: consent, suppression, opt-out, channel, template and workflow-stop checks.
- `src/lib/clinic/message-workflow.ts`: internal review, hold and do-not-contact actions; the clinic portal does not enable live sending.

The story preserves the distinction between review and live dispatch. No retention uplift or commercial outcome is asserted. The existing demonstration image remains labelled as sample data.

## MarginFlow

Working application: `/Users/Jethr/CLVR/Marginflow/marginflow`

- `app/api/quotes/generate/route.ts`: quotes linked to leads, description, line items, pricing, timeline and scheduled follow-ups.
- `app/api/cron/send-followups/route.ts`: pending follow-ups, won/lost checks, reply checks and conversation records.
- `README.md`: wider application context, including qualification, conversations, booking and contractor notifications. Marketing claims such as guaranteed autonomy are not carried into CLVR's story.

Broader offer: `/Users/Jethr/CLVR/maginFlow-landing-page/components/workflow-diagram.tsx` and `components/sections/features-section.tsx` describe the quote-to-cash direction. The editorial revision narrows all CLVR summaries, capabilities, illustrations and the deep dive to the evidenced enquiry/quote/follow-up scope. It retains the existing in-development status and removes invoicing and collections from current feature descriptions.

## CLVR Verified

Project: `/Users/Jethr/CLVR/CLVR-Verfied-Page`

- `src/lib/siteContent.ts`: request, approval, payment, verification and proof chain.

The inspected source is a marketing application, not evidence that every payment integration is operational. The Approach page therefore describes the offering and design intent. It does not reproduce the source's legal-admissibility, cryptographic-proof or performance claims. CLVR OS's separate qualification backend was not treated as a payment backend or evidence of cross-product integration.

The same payment-control identity now applies to the registry, Verified page, metadata and illustrative payment workflow. The clinic example on the homepage is explicitly branded Emilia.

## Juris Global

Project: `/Users/Jethr/CLVR/Sovereignty Atlas n landing`

- `packages/domain/src/site.ts`: canonical destination `https://jurisglobal.org`.
- `apps/site/components/atlas/atlas-home.tsx`: regional and jurisdiction exploration, country selection and programme paths.
- `apps/site/components/atlas/compare-client.tsx`: comparison of up to three programmes, saved shortlist, exported research and advisory handoff.
- `apps/site/lib/assistant-answer.ts`: answers assembled from selected evidence, original field values and source references.
- `README.md`: shared Ask JURIS conversation, evidence-based research, publication checks and mode-dependent availability.

The story describes research tools and the path to advisory review. It makes no new claims about particular countries, costs, eligibility or legal outcomes, and does not claim that a live assistant session was tested.

The existing globe artwork was copied from `/Users/Jethr/CLVR/Jethro-xavier/Personal-website/Personal-website/public/ventures/juris-globe-poster.svg` to `public/images/juris-globe.svg`. Its accompanying `scripts/generate-juris-poster.cjs` constructs the globe from geographic geometry. This is an existing graphic, not a screenshot. The surrounding Juris interface is an explicitly labelled illustration.

## Company and founder

Project: `/Users/Jethr/CLVR/Jethro-xavier/Personal-website/Personal-website`

- `app/layout.tsx`: Jethro Xavier's name and founder/engineer description.
- `app/home-experience.tsx`: CLVR Systems venture entry lists the role “Founder”; the Juris entry lists “Co-founder”.

The Company page uses those existing public-facing source statements. It distinguishes CLVR's products from the featured Juris project, with no new claims about legal ownership, company scale, location or founding date. Unconfirmed availability labels are omitted; category labels do not imply that a product is live.

## Interaction and validation

The portfolio uses normal vertical scrolling to select the current product. On sufficiently wide and tall screens with full motion, a sticky artwork changes as the corresponding product chapter crosses the reading position. It also handles reverse scrolling, large jumps and restored scroll positions. There is no autoplay timer, wheel capture or required product-selection click.

Smaller screens, short viewports, reduced-motion settings and the server-rendered/no-JavaScript view present all four products and their illustrations in normal flow. Product links remain ordinary links. Scroll changes do not move keyboard focus.

Validation passed:

- Independent TypeScript check and production build; all five content routes prerendered.
- DOM checks for every product state, reverse scrolling, large jumps, focus retention and compact/reduced-motion fallback state.
- Corrected clinic workflow and separate payment workflow, saved motion preference, device precedence and mobile dialog checks.
- HTTP checks for all five routes, 107 internal links/anchors, 18 referenced assets, canonical metadata, matching search/social descriptions, copy corrections, unique IDs, one main/H1 per page and a genuine 404 response.
- No SupplierOps names or identifiers in app, component or content source, or the served pages.
- `git diff --check`.

Temporary DOM/HTTP harnesses remain in `/tmp/clvr-ui-checks`. No dependencies were added. The repository's pre-existing missing ESLint dependency remains unchanged. Rendered layout and animation playback have not been visually verified.
