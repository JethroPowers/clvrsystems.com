# CLVR website redesign and build plan

Prepared 2 October 2026. Implementation was subsequently requested by the user, with copy explicitly provisional. The first build is recorded in [the delivery notes](clvr-redesign-delivery.md). Publication remains outside this task.

Build CLVR into a distinctive company website that introduces its products, demonstrates its approach and directs visitors to the right business. The intended result is a confident company showcase with three signature experiences: an expressive opening, an interactive portfolio and a concrete workflow demonstration.

This plan is grounded in the existing repository, the local portfolio review and source inspection of the Alex Foster ecosystem. No browser or screenshots were used. Rendered appearance and animation playback have not been verified. The existing instruction to avoid browsers and screenshots remains in force.

## 1 Purpose and scope

The primary audience is a potential customer evaluating CLVR or looking for a relevant product. Secondary audiences are partners, collaborators and people checking the company after encountering the founder or a product.

The website should help visitors answer four questions: what does CLVR build, which system is relevant to me, what demonstrates its capability, and how do I take the next step?

The proposed portfolio structure is:

| Surface | Responsibility |
| --- | --- |
| Jethro Xavier | Founder perspective, writing and the wider body of work |
| CLVR | Company identity, selected products, shared approach and evidence |
| Product websites | Audience-specific offer, detailed capabilities and commercial conversion |

This structure is a proposal, not a verified statement of ownership across every local project. Start with the four products already named on CLVR. Include additional ventures only after establishing their public relationship to the company.

Version one covers the existing homepage, Systems, Verified and Company routes, shared navigation and footer, content, assets, responsive layouts and motion. Retain existing route addresses and useful section anchors. Keep contact on the homepage. Publishing is a separate action.

## 2 Positioning and content decisions

Before final copy or product artwork, create one content registry with each product's name, audience, customer problem, supported capabilities, availability, primary URL, brand assets and relationship to CLVR. Distinguish descriptions found in source code from confirmed current capabilities.

| Decision | Evidence today | Build treatment until resolved |
| --- | --- | --- |
| Emilia and Clvr Loyalty naming | Several local sites use different names and identities | Retain Emilia in the parent-site draft; choose one canonical public identity before final product artwork |
| Verified positioning | The parent site describes a shared record layer; its separate site describes payment control | Retain the route, but resolve its promise before finalising its page or describing cross-product integration |
| Product availability | Existing labels include first applied system, in development and emerging system | Treat these as provisional; do not substitute Live or Available without confirmation |
| Wider ventures | Juris, PortAtlas and others exist locally | Keep them outside the first public portfolio until their inclusion is settled |
| Evidence and outcomes | Product source and illustrative workflows are available | Use labelled examples; include customer results only when supported and suitable for public use |

These decisions constrain product-specific content. They do not prevent building the shared layout, typography or interaction structure once implementation is requested.

Use short statements, concrete customer problems and explicit actions. Reduce repeated terms such as operating layer, applied systems and recorded outcomes. Explain technical architecture only where it helps someone evaluate the offering.

Working homepage copy, subject to the product registry:

| Placement | Proposed copy |
| --- | --- |
| Hero headline | We build the systems behind better-run businesses. |
| Hero support | CLVR develops software for the work businesses depend on—from client follow-up and payment approvals to operational coordination. |
| Primary action | Explore our systems |
| Secondary action | Talk to CLVR |
| Portfolio heading | Built around the work. |
| Approach heading | From the next action to the final outcome. |
| Evidence heading | See the work in practice. |
| Company introduction | The company behind the systems. |
| Contact heading | Where does work get stuck in your business? |

Write all four pages before polishing animation. Product descriptions, metadata and footer references must agree with the registry. Avoid unsourced scale claims, results, partnerships and statements of shared infrastructure.

## 3 Page structure

### Homepage

| Order | Content and composition | Visitor action |
| --- | --- | --- |
| 1 Opening | Deep green opening, large headline, concise support and one substantial visual composition using approved product material | Explore systems or contact |
| 2 Selected systems | Product selector beside a large presentation area; each product has its own image, accent, problem, audience and status | Select a product and follow its explicit link |
| 3 Shared approach | One clearly labelled example progresses through context, review, action and outcome | Scroll through or directly select a stage |
| 4 Evidence | One substantial case study or build walkthrough, including constraints and human review | Understand what was actually built |
| 5 Company | Brief company explanation, responsible people and two or three specific working principles | Read Company |
| 6 Contact | A focused prompt, relevant product links and direct contact details | Begin a useful conversation |

Consolidate the current thesis, difference and principles material. Put products ahead of the detailed operating model. Include FAQs only where they answer a material buying question; avoid repeating the page in question form.

### Systems

Provide a readable product index followed by substantial product features. Each includes audience, problem, representative visual, supported workflow, availability and a specific destination. Keep emerging work in a compact secondary area. Preserve the existing product anchors. Do not make a visitor pass through another generic company explanation to reach a product.

### Verified

Resolve the identity conflict first. If payment control is the agreed offer, explain the payment workflow and link to its specialist site. If a shared record capability is the agreed offer, demonstrate what it records and where that capability exists. Explicitly explain both roles if both are real. Do not imply universal integration from a visual diagram.

### Company

Cover purpose, who is responsible, how products are selected and how CLVR works. Use a real founder portrait or approved existing material where useful. Link to the personal site as a separate perspective. Avoid another copy of the homepage's workflow sections.

## 4 Visual system

The art direction is precise, spacious and expressive. Retain forest green and warm ivory as the parent identity; allow products to preserve their own identities inside a consistent CLVR presentation.

Use ivory for most reading surfaces, deep green for the opening and workflow centrepiece, dark ink for body copy and mint sparingly for emphasis. Reduce repeated glass panels, decorative gradients and oversized rounded containers. Use one consistent family of borders, surfaces and controls.

Keep Manrope and Space Grotesk initially. Judge them in actual compositions before considering a font change. Starting values at a normal browser text size:

| Element | Desktop | Mobile |
| --- | --- | --- |
| Main headline | Fluid 64–88px with a deliberate line break | Fluid 36–46px |
| Section headings | 40–56px | 28–36px |
| Body text | 17–18px, around 1.6 line height | 16–18px |
| Major section padding per side | 96–128px | 56–80px |
| Internal composition gaps | 40–64px | 24–32px |
| Panel padding | 24–40px | 20–24px |

Use fluid type and spacing tokens rather than per-section overrides. Keep prose near 55–65 characters per line. Permit a wider product stage than the text column. Use moderate panel radii, compact status badges and consistent action shapes. Adjust values where real content requires it.

Set the navigation breakpoint from content fit. Start by evaluating full navigation at 1024px rather than the current 1280px. The header should stay geometrically stable as its background changes. The mobile menu must communicate expanded state, support Escape and return focus to its trigger when closed.

## 5 Motion storyboard

### Opening sequence

The hero must work as a complete static composition. At normal motion settings, reveal the headline in two or three line groups, then supporting copy and actions, while the approved hero visual settles subtly into place. Complete the initial sequence in approximately 0.9–1.3 seconds. Do not delay links or wait for video before showing the message.

Use native animation around real product fragments and an approved brand asset for version one. A commissioned or separately produced film can replace part of that composition later. The implementation must not depend on an unavailable video asset.

On the first scroll, reduce the visual's scale slightly and bring the ivory portfolio surface into view. Keep text in the normal document flow. Use this large transition once, and keep its travel modest enough to avoid clipping or disorientation.

### Interactive portfolio

On wide screens, place a short vertical product list beside one large visual stage. A selection updates its visual, accent, title, description, status and link together. Use a 250–400ms crossfade and a small image movement. Reserve the stage's dimensions so selections do not shift the surrounding page.

Selection is explicit through buttons or accessible tabs. Pointer hover may provide a small affordance, but must not be the only way to reveal information or change the link target unexpectedly. Keyboard focus remains on the selected control. Do not auto-cycle the products.

On mobile, stack concise product features or use explicit tabs with a stable content area. No sideways scroll trap or hover-dependent information. All product destinations remain directly reachable.

### Workflow demonstration

Choose one supported workflow, likely clinic follow-up, after content review. Use a labelled illustrative record unless public evidence permits a real example. The record keeps the same identity through four states: context visible, operator review, action completed and outcome recorded. Each stage adds information while retaining the prior history.

On wide screens, a sticky visual sits beside four short narrative blocks. Allow roughly 1.5–2 viewport heights for the sequence as an initial layout target. Native scrolling determines the active stage; stage controls provide direct access. Do not capture the wheel or require completion before leaving the section.

On mobile and for reduced motion, show all four stages in normal document flow. Preserve the message and fields without pinning or animated lines.

### Supporting transitions

Use a shared timing and easing vocabulary: 150–200ms for control feedback, 200–300ms for menus and disclosures, 450–650ms for grouped section entrances. Text entrances should travel only 12–20px. Static cards remain still on hover. Give buttons a restrained colour change and, where appropriate, a 2–3px arrow movement.

Keep route navigation immediate in version one. Shared-element page transitions are optional follow-up work after the pages and navigation are stable; do not delay an external product-site handoff with an exit animation.

Provide a visible reduced-motion choice in addition to the operating-system preference. The effective reduced state wins whenever the operating system requests it. Stop offscreen decorative motion, pause media when the page is hidden and avoid continuous animation in reading sections.

## 6 Asset production

Create an asset inventory before production. Record source, intended use, dimensions, crop, alt text and whether the content is real or illustrative. Existing local assets may be reused; this plan does not authorise taking new screenshots.

| Asset | Deliverable | Fallback |
| --- | --- | --- |
| Hero composition | Wide and narrow layouts using approved brand imagery and product fragments | Static composition with all essential content visible |
| Product presentations | One consistent composition per featured system using available assets or accurately reconstructed illustrative interface components | Text-led feature with an honest availability label |
| Workflow record | Native interface with four documented states | Static ordered sequence |
| Evidence feature | One factual story with an appropriate artefact | Labelled build walkthrough with no invented results |
| Company imagery | Approved portrait or existing company material | Strong typographic composition |

If bespoke raster art is needed, produce it through the available image-generation workflow and inspect it before use. Resolve the art direction with representative desktop and mobile concepts before implementing the full page. Use separate compositions where the narrow viewport requires them; do not simply crop away the meaningful part of the image.

## 7 Implementation approach

Work within the current Next.js application and existing routes. Use the installed Framer Motion for the planned interface choreography, with CSS sticky positioning and native scrolling. Add a second animation engine only if an implemented requirement demonstrates a clear need. Keep marketing content server-rendered and confine client code to interactive scenes.

| Existing area | Planned change |
| --- | --- |
| `app/globals.css` and `tailwind.config.ts` | Consolidate typography, spacing, surface and motion tokens |
| `components/layout/header.tsx` and `footer.tsx` | Refine navigation, responsive behaviour, focus handling, portfolio links and motion preference |
| `components/sections/clvr-homepage.tsx` | Compose the six-section narrative from smaller section components |
| `components/sections/core-operating-loop.tsx` | Evolve the abstract diagram into the documented example workflow |
| `components/sections/systems-page.tsx` | Use the central product registry and substantial product features |
| `components/sections/verified-page.tsx` | Implement the resolved Verified positioning |
| `components/sections/company-page.tsx` | Establish company purpose, people and working approach |
| `components/ui-custom/reveal.tsx` | Make motion progressive, restrained and safe when JavaScript is unavailable |
| Proposed `lib/site-content.ts` | Centralise products, statuses, destinations and shared copy |
| Proposed motion and scene components | Isolate portfolio selection, workflow stages and shared motion preferences |
| Route metadata | Align titles and descriptions with the final copy |

Check the project's baseline before visual work. The package file mixes Next.js 14, React 19 and React 18 type packages; investigate actual install and build behaviour rather than assuming compatibility. The current Next configuration suppresses TypeScript and lint failures during builds, so a successful build alone is insufficient verification. Confirm the lint command is runnable before using it as a gate.

Do not introduce a framework migration as part of the design work. Address a dependency issue only when it blocks a supported build or the scoped implementation.

Contact remains a direct email link in the first version. A structured enquiry form is a later enhancement requiring a real delivery endpoint, validation and honest success/error behaviour. Do not ship a form that only simulates sending.

## 8 Build sequence and completion criteria

| Stage | Work | Completion criterion |
| --- | --- | --- |
| 1 Content foundation | Resolve product registry, rewrite four pages and choose evidence | No contradictory names, promises or destinations; every product has a supported status |
| 2 Visual direction and assets | Create representative hero and product compositions for desktop and mobile; define tokens and asset treatment | One selected direction specifies actual hierarchy, imagery and controls, not just a palette |
| 3 Static website | Build all four pages, navigation, product content and contact path | The complete story and every essential action work without animation |
| 4 Signature motion | Implement hero, portfolio selection and workflow progression | Every scene has explicit states, predictable controls and reduced-motion/mobile equivalents |
| 5 Responsive refinement | Refine density, text wrapping, spacing, focus, media loading and smaller controls | Layout and interaction checks cover narrow mobile through large desktop |
| 6 Verification and handoff | Run code checks, content/link review and document remaining visual checks | Evidence-backed handoff distinguishes passing checks from unverified appearance; publication remains separate |

Build one representative vertical slice first: header, hero, first product presentation and the transition between them. Establish its quality before propagating the design through the remaining pages. This avoids polishing several sections around an unresolved visual direction.

## 9 Verification and measurement

Source and automated checks include an explicit TypeScript check, the configured lint command once available, a production build, local route and asset resolution, content consistency and external link destinations. Cover interactive state logic where it can fail meaningfully: product selection, workflow controls, menu state and motion preferences. Do not create tests that merely assert copy or class names.

Planned rendered checks cover widths of 320, 390, 768, 1024 and 1440px, keyboard operation, text zoom, reduced motion, slow asset loading and missing media. Check headline wrapping, overflow, sticky behaviour, focus visibility and fixed-header contrast. Target WCAG AA text contrast, approximately 44px primary touch targets and no focus loss during transitions.

The no-browser/no-screenshot constraint means agent-operated visual checks and playback verification cannot currently be completed. Source checks do not establish visual quality. Keep rendered acceptance pending a user review or a later change to that constraint; do not label it visually verified.

Performance targets, to measure when runtime measurement is permitted, are LCP at or below 2.5 seconds, INP at or below 200ms and CLS at or below 0.1. Use lightweight static hero delivery first, reserve media dimensions, load secondary scenes on demand and prevent autoplay media from blocking content. These are targets, not measured results.

Once analytics is configured appropriately, measure product destination clicks, contact starts and the relevance of resulting enquiries. Optional interaction events can show whether portfolio selection and workflow stages are useful. Collect no enquiry text in analytics. Establish a baseline before setting conversion targets.

## 10 Reference interpretation

The reference is a level of ambition and portfolio organisation. Its brand assets, exact layouts and commercial claims are not part of the CLVR specification.

- [Alex Foster](https://alexwfoster.com/) connects a personal story with four company destinations.
- [Vertus](https://www.vertus.ai/) uses a technology-company narrative with dedicated video and animated assets in its source.
- [Vanquish](https://www.vanquish.so/) combines a distinct commercial offer with platform, process and application sections.
- [Alexander William](https://www.alexanderwilliam.im/) presents a separate private-network identity and audience.
- [AlphaLedger](https://www.alphaledger.ai/) combines product outcomes, feature presentations, plans and an application entry point.

These observations come from public content and source inspection on 2 October 2026. Runtime motion quality and the businesses' substantive claims were not independently verified.

The finished CLVR site should make the company understandable in its opening, make the portfolio tangible immediately afterwards, demonstrate its approach through one memorable interaction and give visitors an honest next step.
