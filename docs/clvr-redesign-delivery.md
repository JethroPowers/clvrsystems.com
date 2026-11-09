# CLVR redesign — first build

Built 2 October 2026 following the user's request to implement the proposed direction and revisit the copy later. This is a local implementation; nothing was published. Browsers and screenshots were not used.

## Follow-up revision

The user's subsequent corrections are implemented: Juris Global replaces SupplierOps; the homepage portfolio now advances through native scrolling; Emilia and Juris both have case-study features; and navigation points to a dedicated `/approach` page with detailed stories for all four systems. The earlier first-build description below is retained as delivery history. Current source references and validation are in [System stories: source references](system-content-sources.md).

## Insights opening articles — 3 October 2026

Added the public Insights index and three local articles, one for each editorial strand. All are attributed to CLVR and dated 3 October 2026. The writing uses the reviewed product studies and company perspective, with no invented customer metrics or personal founder anecdotes.

- How work works: `/insights/when-the-situation-changes`, explaining how a booking, reply or changed information affects a follow-up.
- Inside the build: `/insights/four-decisions-behind-four-products`, examining the review, reminder, approval and source-reference decisions in Emilia, MarginFlow, Verified and Juris.
- Company notes: `/insights/what-we-mean-by-an-operating-system`, explaining the CLVR positioning through the task, decision, system and record.

Each article has a distinct native HTML/SVG diagram with four scroll-led stages. The diagram follows normal document scrolling on wide, tall screens, including reverse scrolling and large jumps. Smaller screens, reduced motion and the no-JavaScript view retain the complete diagram and all explanations in normal flow. Progress lines, stage highlighting, the company cycle trace and once-only heading entrances provide the motion. No required diagram clicks, timers or wheel interception were added.

The index includes a featured article, the other two stories and an introduction to the three strands. Navigation and the footer link to Insights. Article pages include a table of contents, related products, further reading, metadata and Article structured data. `/insights/feed.xml` and `/sitemap.xml` share the existing publication filter. Markdown renders on the server, ignores raw HTML and restricts links. There is no CMS, admin endpoint or external deployment.

Validation: independent TypeScript check and production build passed; all three articles were statically generated. Thirteen repository tests passed for publication rules, content structure, Markdown safety and draft creation. Temporary JSDOM checks passed for all three diagrams across four stages, backward/fast scrolling, focus preservation and mobile/reduced-motion fallback. HTTP checks passed for nine HTML pages, RSS, sitemap, 243 internal links/anchors, 24 assets, correct article metadata, unique IDs, one H1/main per page, complete server-rendered diagrams and 404 handling. Visual layout and animation timing were not inspected with a browser or screenshots. The updated production preview runs at `http://localhost:4317`.

Article files are in `content/insights`; diagram data is in `lib/insights/diagrams.ts`. The maintained workflow is documented in [Insights publishing](insights-publishing.md).

## Positioning refinement — 3 October 2026

The user's preferred core message is now “Operating systems for real-world business workflows.” It leads both the homepage and Company page, appears in the footer and informs homepage/company search and sharing descriptions. “Ideas worth building.” remains the expressive hero accent. The longer three-line hero uses fluid type and a content-driven height so the supporting text and actions have room. Product scope, availability wording, case studies and the corrections below are retained.

## Copy and product clarity — 2 October 2026

Implemented the approved direct, confident and expressive voice on 2 October 2026. The opening now states “An independent software company.”, supported by “Ideas worth building.” and a concrete description of the four areas of work. The hero's fluid type sizes accommodate the longer heading; a secondary action leads to Approach. The existing visual direction and portfolio scroll behaviour are retained.

- Rewrote the five pages, four product summaries and deep dives, case studies, interface illustrations, navigation details, contact section and search/social metadata.
- Made CLVR Verified consistently about payment controls. Its dedicated example uses Request, Approve, Check and Record, with the same desktop scroll-led progression as the homepage workflow. The text identifies the product's design intent and illustrative data.
- Narrowed MarginFlow to the evidenced enquiry, quote and follow-up scope. Kept its development label and removed subject/category labels that had been presented as availability statuses for the other products.
- Corrected the Emilia sequence to Identify, Prepare, Review and Record. The example holds a draft because the client has already booked; it makes no claim that a clinic-portal review sends a message. The first history count now uses “ENTRY”.
- Framed Emilia and Juris as product case studies with illustrative scenarios and specific design decisions. Added locally sourced founder information and described Jethro's co-founder relationship with Juris without asserting CLVR ownership of it.
- Changed the contact action to “Email CLVR”, clarified product enquiries, corrected “Back to home” and made the motion labels “Reduced motion” and “Full motion”.
- Consolidated page metadata in `lib/site-metadata.ts` so each route's search, Open Graph and Twitter descriptions agree.

Validation for this revision: independent TypeScript check and production build passed; all five content routes prerendered. DOM checks passed for portfolio scrolling, reverse/fast movement, focus preservation, mobile/reduced-motion fallback, both workflow sequences, saved motion preference, device precedence, cleanup and mobile navigation. HTTP checks passed for five routes, 107 internal links/anchors, 18 referenced assets, matching social descriptions, unique IDs, one H1/main per page and 404 handling. `git diff --check` passed. No application dependencies were added. The existing lint script still lacks its ESLint dependency.

The production preview was refreshed at `http://localhost:4317`. No browser or screenshot was used; rendered layout and animation playback were not visually verified. The sections below describe the first build and should be read as history.

## What changed

The four existing routes now share a forest, ivory and mint visual system, larger editorial typography, consistent gutters and section spacing, a fixed navigation bar and a full-width typographic footer. The homepage introduces the company through a bespoke sculptural opening, an interactive product portfolio, a persistent workflow record, existing Emilia demonstration material, company context and contact.

The Systems page gives each existing product a distinct presentation and retains its section anchor. Verified explains the record concept and separately links to the specialist payment-control site. Company has its own editorial composition and principles. Product availability language remains cautious, and interface demonstrations are identified as illustrative.

The primary copy and product registry are in `lib/site-content.ts`. Additional page-specific prose remains beside its composition in `components/sections/`. The writing is provisional. This build does not establish new claims about product maturity or integration.

## Motion and interaction

- Hero: masked line entrances, supporting-copy entrance and a modest scroll-linked movement of the sculpture.
- Portfolio: explicit four-product selection, layered crossfades, intrinsic shared panel space to prevent the surrounding page shifting, arrow/Home/End keyboard controls and direct destinations. Inactive panels are excluded from keyboard navigation and assistive-technology reading.
- Workflow: one record remains visible while the narrative advances through Understand, Decide, Execute and Record. History accumulates with each stage. Desktop scroll observation and direct stage controls share the same state.
- Supporting surfaces: once-only section entrances, navigation feedback, page reading progress and a mobile dialog with focus management.
- Reduced motion: device preference takes precedence; a footer control also saves the user's preference. Narrow screens and reduced-motion layouts use normal document flow for the workflow. Content is present in server-rendered HTML.

## Assets

| Asset | Origin and use |
| --- | --- |
| `public/images/clvr-continuity.png` | Original generated artwork, 1536 × 1024. Generated for this task with the built-in image-generation tool. |
| `public/images/clvr-continuity.jpg` | Optimized derivative, approximately 254 KB. Used for the hero, interior mastheads, company artwork and sharing metadata. |
| `public/images/emilia-dashboard.png` | Existing local demo asset from `/Users/Jethr/Documents/clvrloyalty-landin-page/public/assets/clvr-dashboard-screen.png`. Used as labelled sample material; no new screenshot was taken. |

The generated sculpture is brand artwork. It is not a photograph of a physical product. Product presentation interfaces are native HTML/CSS concepts, labelled with illustrative data.

### Image-generation prompt

Use case: stylized-concept. Asset type: bespoke photographic 3D hero artwork for CLVR, a premium technology company website. Create one exquisitely art-directed sculptural object: a continuous folded ribbon forming a monumental open loop, partially twisted, like a machined glass-and-metal Möbius sculpture. The outside is polished dark emerald translucent optical glass; the inner edge is pale brushed silver, fine manufacturing details, believable thickness, exquisite specular highlights and caustic light. The form suggests continuity and connected systems, no logos, no letters. Rich almost-black forest green studio void, subtle volumetric light, museum-grade product photography, visually restrained, not neon sci-fi. Wide landscape 1536x1024 composition: sculpture occupies right 60 percent of image, cropped subtly at right edge, left 40 percent is deep nearly uniform forest-black negative space for web typography. Floating slightly above a dark reflective plane with very restrained soft reflection. Precise, expensive, tactile, architectural. Pale mint key light from upper left, deep shadows, exceptionally detailed photorealistic octane/cinema 4d aesthetic. No text, no UI, no watermarks, no people, no particles, no stars, no extra objects. Deliver a finished high-resolution website background asset.

## Verification

| Check | Result |
| --- | --- |
| `pnpm exec tsc --noEmit` | Passed independently of Next's configured typecheck skip. |
| `pnpm build` | Passed. All four content routes prerendered successfully. |
| DOM interaction checks | Passed product selection, keyboard focus and wraparound, active destinations, panel relationships, all workflow stages, history progression, saved motion preference, device preference precedence and provider cleanup. |
| Mobile menu DOM checks | Passed open/expanded state, initial focus inside dialog, Escape dismissal and focus restoration. |
| HTTP checks against production server | Four routes returned 200; 76 internal links/anchors and 16 referenced assets passed; unknown route returned 404. |
| Document checks | Each page has one main region, one H1, unique IDs, image alt attributes and its expected canonical URL. |
| `git diff --check` | Passed. |
| `pnpm lint` | Could not run: the existing script calls ESLint, which is not installed in this repository. |

DOM tests used an isolated temporary JSDOM/tsx installation in `/tmp/clvr-ui-checks`; no test dependencies were added to the application. These checks establish behaviour and document structure, not visual quality or complete accessibility compliance.

Rendered composition, responsive appearance, scroll timing and animation playback have **not** been inspected, in accordance with the instruction to avoid browsers and screenshots. The reference sites informed the design direction through source inspection; visual parity with them has not been verified.

## Local review

The production preview was started on `http://localhost:4317`. To restart it, run `pnpm build` followed by `pnpm start --port 4317` from the project root. The next editorial pass can begin with the hero, product descriptions, company introduction and contact prompt.
