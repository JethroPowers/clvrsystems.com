# CLVR CURRENT STATE AND REUSE AUDIT

Audit date: 2026-06-18  
Project path: `/Users/Jethr/CLVR/Clvr-main-site`  
Local preview inspected: `http://localhost:3000/`

This is an inspection-only report for deciding what to reuse, rewrite, move, or leave alone before any redesign. No app behavior, routes, copy, styling, metadata, backend logic, auth, database logic, providers, tests, or external apps were changed.

## 1. Executive Summary

The current live site is a single-page CLVR Systems homepage. It is trying to communicate that CLVR is a systems/infrastructure company building autonomous operating infrastructure for real-world operations. The strongest live ideas are: workflow state, decisioning, enforcement paths, proof records, operating architecture, and a portfolio of applied systems.

It currently feels closest to a parent-company / infrastructure-company site, with some venture portfolio language. It does not primarily feel like an Emilia landing page. It also does not feel like a generic AI agency in the live homepage, although dormant components still include consulting, v0 SaaS, The4Five, and "live operator endpoint" language that could pull it in that direction if reused without discipline.

Emilia is under-focused for a product conversion page but correctly not dominant for a parent-company homepage. On the live page, Emilia appears as one applied system in a four-card portfolio beside MarginFlow, SupplierOps, and CLVR Verified. That is directionally aligned with the strategic hierarchy, but Emilia's copy is currently too thin to make the system credible.

What already works:

- The live hero is cinematic, serious, and institutional.
- CLVR already reads as a systems company rather than a simple SaaS app.
- The active homepage has a coherent parent-company narrative: hero, directive, systems, operating console, process, infrastructure thesis, principles, company, FAQ, CTA.
- The visual identity is distinctive: off-white, black, forest green, glassy panels, soft shadows, and abstract system imagery.
- The strongest reusable strategic language is already present: "not another dashboard", "operating layer", "workflow state", "decision logic", "enforcement paths", "proof records".

What feels weak:

- The homepage is abstract enough that a buyer may not know what CLVR actually sells or how systems are engaged.
- "CLVR Operating Core" does not exist as a named concept yet, even though the underlying content exists.
- CLVR Verified is present as a system, but the relationship between Verified and the shared proof/control layer is not clearly explained.
- SupplierOps feels early compared with Emilia, MarginFlow, and Verified.
- The CTA path is generic: `View Systems`, `Get in Touch`, `Contact CLVR`, `Start the Conversation`.
- Legal footer links are placeholders.
- README/package metadata are still v0 boilerplate.

What should probably be preserved:

- Parent-company first positioning.
- Cinematic abstract hero direction.
- Warm off-white / black / forest green palette.
- The idea that CLVR builds operating infrastructure, not dashboards.
- The ingest / understand / decide / enforce / prove operating loop.
- The systems portfolio concept, but with clearer hierarchy.
- Emilia as the first applied system, not the whole homepage.

## 2. Current Route Inventory

Only one app route exists in `app/`.

| Route path | File location | Page purpose | Current headline/title | CTA text | Status |
|---|---|---|---|---|---|
| `/` | `app/page.tsx` -> `components/sections/clvr-homepage.tsx` | Main public CLVR Systems homepage | `Autonomous Infrastructure for Real-World Operations` | `View Systems`, `Get in Touch`, `Contact CLVR`, `Start the Conversation` | Active, visually polished, strategically usable, needs copy/structure refinement |
| `/_not-found` | Next generated route | Default not-found page | Framework default | None | Internal/default |

In-page anchors on `/`:

| Anchor | Source | Purpose | Status |
|---|---|---|---|
| `#home` | `HeroSection` in `components/sections/clvr-homepage.tsx` | Hero / top of page | Active |
| `#systems` | `SystemsSection` in `components/sections/clvr-homepage.tsx` | Applied systems portfolio | Active |
| `#operations` | `ProcessSection` in `components/sections/clvr-homepage.tsx` | Operating loop | Active |
| `#infrastructure` | `InfrastructureSection` in `components/sections/clvr-homepage.tsx` | Infrastructure thesis and pillars | Active |
| `#principles` | `PrinciplesSection` in `components/sections/clvr-homepage.tsx` | Doctrine/principles | Active |
| `#company` | `CompanySection` in `components/sections/clvr-homepage.tsx` | Company story | Active |
| `#contact` | `CTASection` in `components/sections/clvr-homepage.tsx` | Final mailto CTA | Active |

Requested route existence check:

| Route | Exists? | Notes |
|---|---:|---|
| `/` | Yes | Only live public page |
| `/emilia` | No | Emilia appears only on homepage and dormant components |
| `/systems` | No | Systems is an in-page anchor only |
| `/verified` | No | CLVR Verified appears only in systems card/dormant components |
| `/pilot` | No | No pilot route or application route |
| `/contact` | No | Contact is an in-page anchor only |
| `/privacy` | No | Footer has placeholder `#` link |
| `/terms` | No | Footer has placeholder `#` link |
| `/security` | No | Footer has placeholder `#` link, dormant `Security` component exists |

## 3. Current Homepage Readout

| Section | File/component location | Current headline | Body copy summary | CTA | Visual treatment | Parent-company support | Emilia balance | Recommendation |
|---|---|---|---|---|---|---|---|---|
| Header | `components/layout/header.tsx` | Brand text: `CLVR Systems` | Nav items: Systems, Infrastructure, Doctrine, Company, Contact | `Explore Systems` | Fixed transparent header, blurred/scrolled background, pill nav at xl, hamburger below xl | Supports parent-company structure | Does not over-focus Emilia | Keep structure; rewrite nav labels around Operating Core / Systems / Verified / Company / Contact |
| Hero | `HeroSection` in `clvr-homepage.tsx` | `Autonomous Infrastructure for Real-World Operations` | Operator-grade systems turn workflow state into decisions, enforcement paths, and proof records | `View Systems`, `Get in Touch` | Full-screen abstract green/cream image, dark overlays, large white display type | Strong support; cinematic and institutional | Emilia absent, which is acceptable for parent first | Preserve visual direction; sharpen above-fold architecture and CTA |
| Directive | `DirectiveSection` | `Intelligence becomes infrastructure when it can operate.` | CLVR converts operational context into routing, decision integrity, workflow enforcement, and proof | None | Centered large editorial statement on off-white background | Strong support | Emilia absent, acceptable | Keep/rewrite lightly; strong parent-company thesis |
| Systems | `SystemsSection`, `SystemCard`, `SystemArt` | `CLVR systems in motion` | Portfolio around retention, pricing control, supplier reliability, and verifiable trust | Entire cards link to `#contact` | Desktop horizontal rail, mobile stacked cards, abstract green card art | Supports systems portfolio | Emilia is one of four, not dominant | Keep concept; rewrite hierarchy and make Applied Systems + Verified roles clearer |
| Operating Console | `ConsoleSection` | `One visual layer for data, decisions, execution, and proof.` | Signals enter, logic resolves, workflows execute, proof remains attached to record | None | Green glass panel with four module cards: Ingest, Decide, Enforce, Prove | Strong candidate for CLVR Operating Core | Emilia absent, acceptable | Reuse as Operating Core section; add missing Understand or explain loop |
| Process | `ProcessSection` | `How CLVR engineers operations` | Control loop: Ingest, Understand, Decide, Enforce, Prove | None | Vertical list of clean cards | Very strong for Operating Core | Emilia absent, acceptable | Preserve core; likely move near top under thesis |
| Infrastructure | `InfrastructureSection` | `Operating architecture for decisions, workflows, and proof.` | Pillars: Decision Systems, Operational Infrastructure, Verification Layer | None | Off-white band, three pillar cards with icons | Strong support | Emilia absent, acceptable | Preserve/rewrite into named CLVR Operating Core architecture |
| Principles | `PrinciplesSection` | `Operational principles` | Operator-first, real-world enforcement, decision integrity, proof, felt absence | None | Desktop horizontal rail, mobile stacked cards | Good institutional doctrine | Emilia absent, acceptable | Keep but likely move lower or compress |
| Company | `CompanySection` | `Built at the intersection of operations, automation, and trust.` | CLVR is systems company and portfolio builder; not another dashboard; operating layer becomes painful to remove | None | Split editorial card and green abstract proof/decision visual | Strong parent-company support | Emilia absent, acceptable | Preserve strongest copy; refine role of portfolio builder |
| FAQ | `FAQSection` | `Answers for operators building with control.` | Explains CLVR builds infrastructure, is a systems company, supports workflows, AI decisioning, proof/control | `Contact CLVR` | Native details/summary accordion cards | Useful but generic | Emilia absent, acceptable | Keep/rewrite for parent-company buyer questions |
| Final CTA | `CTASection` | `Build the operator layer behind decisions, enforcement, and proof.` | Partner with CLVR to design infrastructure for real-world execution, not interface-level automation | `Start the Conversation` -> `mailto:hello@clvrsystems.com` | Large rounded CTA panel with subtle green plume | Supports parent company but weak conversion | Emilia absent, acceptable | Rewrite CTA hierarchy; keep serious tone |

Overall: the current homepage already supports the parent-company strategy more than an Emilia-first strategy. The key improvement is to make the parent hierarchy explicit: CLVR Systems -> CLVR Operating Core -> Applied Systems -> Verified layer -> company/contact.

## 4. Current Copy Inventory

### Hero Copy

- Eyebrow: `Systems Company`
- H1: `Autonomous Infrastructure for Real-World Operations`
- Body: `Operator-grade systems that turn workflow state into decisions, enforcement paths, and proof records.`
- CTAs: `View Systems`, `Get in Touch`

Strong for parent company: yes.  
Needs rewriting: modestly. The phrase is strong but could better introduce the hierarchy and Operating Core.

### Thesis Statements

- `Intelligence becomes infrastructure when it can operate.`
- `CLVR Systems converts operational context into routing, decision integrity, workflow enforcement, and proof.`
- `CLVR systems are built as infrastructure: composed, enforceable, observable, and accountable under real operating constraints.`
- `Infrastructure is intelligence that keeps operating.`
- `The work is not another dashboard. It is the operating layer: workflow state, decision logic, enforcement paths, and proof records that become painful to remove.`

Strong for parent company: very strong.  
Needs rewriting: mostly tightening and sequencing. These are among the best reusable lines.

### System/Product Descriptions

Live system descriptions:

- Emilia: `Retention and referral infrastructure for clinics.`
- Emilia detail: `Coordinates recall, referral, rebooking, and follow-up workflows so patient demand returns through structured operational loops.`
- MarginFlow: `Quote-to-cash and pricing intelligence for trades.`
- MarginFlow detail: `Structures estimating, pricing logic, approvals, invoicing, and cash realization into one controlled operating sequence.`
- SupplierOps: `Supplier performance, returns, and B2B operational control.`
- SupplierOps detail: `Monitors supplier reliability, exceptions, returns, and handoff performance through structured operational checkpoints.`
- CLVR Verified: `Verification, proof, and trust infrastructure for high-stakes workflows.`
- CLVR Verified detail: `Creates traceable records for identity, decisions, execution, and auditability where proof cannot be optional.`

Strong for parent company: Emilia, MarginFlow, and Verified are useful. SupplierOps is more generic and less substantiated.

### CLVR Infrastructure Language

Reusable phrases:

- `workflow state`
- `decision integrity`
- `enforcement paths`
- `proof records`
- `routing`
- `handoffs`
- `escalation logic`
- `review rules`
- `operator constraints`
- `observable`
- `accountable`
- `under real operating constraints`

Strong for parent company: yes.  
Needs rewriting: not conceptually; it needs packaging under "CLVR Operating Core".

### CLVR Verified Language

Live:

- `Proof layer`
- `Verification, proof, and trust infrastructure for high-stakes workflows.`
- `Creates traceable records for identity, decisions, execution, and auditability where proof cannot be optional.`

Dormant:

- `Operator for money movement workflows that enforces sign-off, documentation, reconciliation, and proof before funds move.`
- `Approval and payment-control system for workflows where documentation, proof, and sign-off have to stay clean.`
- Modules: `Gate`, `Proof`, `Recon`

Strong for parent company: yes, but should be positioned as proof/control/audit layer rather than just one equal product card.

### Emilia Language

Live:

- `Clinical retention`
- `Retention and referral infrastructure for clinics.`
- `Coordinates recall, referral, rebooking, and follow-up workflows so patient demand returns through structured operational loops.`

Dormant:

- `Retention and loyalty operator for aesthetic clinics. Manages wallet credits, tracked referrals, and reactivation flows.`
- `Retention, referral, and reactivation system for clinics that need tighter control after the initial sale.`
- Modules: `Wallet`, `Referrals`, `Reactivation`

Strong for parent company: live copy is balanced.  
Strong for future Emilia page: dormant copy is stronger and more specific.

### MarginFlow Language

Live:

- `Pricing control`
- `Quote-to-cash and pricing intelligence for trades.`
- `Structures estimating, pricing logic, approvals, invoicing, and cash realization into one controlled operating sequence.`

Dormant:

- `Quote-to-cash enforcement for trades. Same-day quotes, signed change orders, automated invoicing, and collections.`
- Modules: `Quote Speed`, `Change Orders`, `Collections`

Strong for parent company: yes, as a secondary applied system.

### SupplierOps Language

Live only:

- `Supplier logic`
- `Supplier performance, returns, and B2B operational control.`
- `Monitors supplier reliability, exceptions, returns, and handoff performance through structured operational checkpoints.`

Strong for parent company: maybe.  
Needs rewriting: yes. It feels early and less backed by dormant detail.

### CTA Language

Live:

- `Explore Systems`
- `View Systems`
- `Get in Touch`
- `Contact CLVR`
- `Start the Conversation`

Dormant:

- `Book a Systems Review`
- `Start a consulting inquiry`
- `Open Operator`
- `View System`
- `Portfolio overview`

Strong for parent company: `Explore Systems` and `Start the Conversation` fit tone, but conversion clarity is low. `Open Operator` is too product-app-specific for the parent homepage.

### Footer Copy

- `Autonomous infrastructure for real-world operations. Built for operators. Designed for scale and decision integrity.`
- Footer labels: Systems, Infrastructure, Company, Legal.
- Legal links: `Privacy`, `Terms`, `Security` all point to `#`.

Strong for parent company: yes.  
Needs rewriting/fixing: legal link placeholders.

### Metadata/SEO Copy

From `app/layout.tsx`:

- Title: `CLVR Systems | Autonomous Infrastructure for Real-World Operations`
- Description: `CLVR Systems builds operator-grade AI infrastructure that automates decisions, enforces workflows, and creates verifiable control across real-world operations.`
- OpenGraph description: `Operator-grade AI infrastructure for workflow enforcement, operational decisioning, automation, and verification.`
- Twitter description: `Autonomous infrastructure for real-world operations.`

Strong for parent company: yes.  
Needs rewriting: only after final hierarchy is set; no product-specific route metadata exists.

## 5. Emilia Presence Audit

Where Emilia is mentioned:

- Live `systems` data in `components/sections/clvr-homepage.tsx`.
- Footer systems column in `components/layout/footer.tsx`.
- Dormant `components/sections/products.tsx`.
- Dormant `components/sections/vision.tsx`.
- Dormant `components/sections/selected-systems.tsx`.
- Dormant `components/sections/portfolio.tsx`.

Prominence:

- On the live homepage, Emilia is the first system card in the portfolio.
- It does not appear in the hero, directive, Operating Console, Process, Infrastructure, Principles, Company, FAQ, or final CTA.
- The footer lists Emilia as one of four systems.

Does Emilia feel like the whole company or one applied system?

- On the live site, Emilia feels like one applied system.
- This is aligned with the stated parent-company direction.

Is the current Emilia copy too much, too little, or correctly balanced?

- For a parent-company homepage: close to correctly balanced, but too underdeveloped to be credible.
- For a product landing page: far too little.

Existing Emilia-specific dormant copy:

- `Retention and loyalty operator for aesthetic clinics. Manages wallet credits, tracked referrals, and reactivation flows.`
- `Retention, referral, and reactivation system for clinics that need tighter control after the initial sale.`
- `Wallet`, `Referrals`, `Reactivation`.

Emilia copy to preserve for possible future `/emilia` page:

- Aesthetic clinics.
- Retention and loyalty operator.
- Wallet credits.
- Tracked referrals.
- Reactivation flows.
- Recall, referral, rebooking, follow-up.

Emilia copy that should not dominate the parent homepage:

- Detailed clinic workflows.
- Wallet-credit specifics.
- Patient-demand language.
- Product-module deep dives.
- External operator links.

Parent homepage balance recommendation:

- Emilia should appear as the first applied system and proof that CLVR's infrastructure becomes concrete systems.
- It should not become the homepage thesis.
- It should have enough specificity to be credible, then link to a future `/emilia` route or applied-system detail when that exists.

## 6. Systems Portfolio Audit

| System | Current description | Source | Visual treatment | Current status | Credible? | Too early? | Recommended prominence |
|---|---|---|---|---|---|---|---|
| Emilia | `Retention and referral infrastructure for clinics`; recall/referral/rebooking/follow-up loops | Live `clvr-homepage.tsx`; dormant `products.tsx`, `vision.tsx`, `selected-systems.tsx`, `portfolio.tsx` | Green abstract "loops" card with clinical retention label | Active homepage system, dormant external app references | Yes, with more copy | No | Prominent first applied system, but not whole homepage |
| MarginFlow | Quote-to-cash and pricing intelligence for trades; estimating, approvals, invoicing, cash realization | Live `clvr-homepage.tsx`; dormant components | Green abstract bar/quote-flow card | Active homepage system, dormant external app references | Moderately | No, if framed as applied system | Secondary applied system |
| SupplierOps | Supplier performance, returns, B2B operational control | Live `clvr-homepage.tsx` only | Green abstract chain card | Active homepage system | Less credible due to thin detail | Yes / feels earliest | Defer or show lightly |
| CLVR Verified | Verification, proof, trust infrastructure; identity, decisions, auditability | Live `clvr-homepage.tsx`; dormant `products.tsx`, `vision.tsx`, `selected-systems.tsx`, `portfolio.tsx` | Green abstract seal card with Identity/Audit/Provenance labels | Active homepage system, dormant external app references | Yes | No | Prominent as proof/control/audit layer, not just an equal applied vertical |

Portfolio coherence:

- The portfolio is conceptually coherent around operating systems.
- It is strategically under-explained: Applied Systems and CLVR Verified are mixed as equal cards.
- SupplierOps lacks enough supporting copy to feel as real as Emilia, MarginFlow, or Verified.
- The current portfolio would be stronger if separated into:
  - CLVR Operating Core
  - Applied Systems: Emilia, MarginFlow, SupplierOps
  - Proof/control layer: CLVR Verified

## 7. CLVR Operating Core Audit

No component or copy block currently uses the exact name `CLVR Operating Core`. The underlying material already exists and can be reused.

| Existing content/component | Source | Relevant concepts | Reuse assessment |
|---|---|---|---|
| Hero body | `HeroSection` in `clvr-homepage.tsx` | Workflow state, decisions, enforcement paths, proof records | Strong; can become concise Operating Core intro |
| Directive | `DirectiveSection` | Operational context, routing, decision integrity, workflow enforcement, proof | Strong; keep high in page |
| Operating Console | `ConsoleSection` | Ingest, Decide, Enforce, Prove; workflow state, proof records | Very strong; rename/reframe as Operating Core visual |
| Process | `ProcessSection` | Ingest, Understand, Decide, Enforce, Prove | Strongest direct operating-loop block |
| Infrastructure pillars | `InfrastructureSection` | Decision Systems, Operational Infrastructure, Verification Layer | Strong; maps well to Operating Core architecture |
| Company visual chips | `CompanySection` | Workflow state, Decisions, Proof | Strong visual motif; reusable |
| FAQ | `FAQSection` in `clvr-homepage.tsx` | Decisioning, proof/control, systems company | Useful with rewrite |
| What We Do | Dormant `components/sections/what-we-do.tsx` | Orchestration, Decision Automation, Enforcement, Proof + Auditability | Useful for deeper Operating Core content, but visually/tonally more SaaS/agency |
| Application | Dormant `components/sections/application.tsx` | Fragmented operations vs structured system layer; ownership, approval, proof points | Strong concept for explaining where CLVR is applied |
| Areas of Operation | Dormant `components/sections/areas-of-operation.tsx` | AI Operations, Workflow Infrastructure, Verification, Systems Design, Venture Creation | Useful but too broad for main homepage unless tightened |
| Operating Model | Dormant `components/sections/operating-model.tsx` | Consulting -> Infrastructure -> Ventures | Useful if parent-company model remains; risks consulting brochure feel |
| Security | Dormant `components/sections/security.tsx` | Audit logging, retention, deletion, vetted integrations | Useful for trust/security page or lower section |

Best reusable Operating Core language:

- Ingest / Understand / Decide / Enforce / Prove.
- Decision Systems.
- Operational Infrastructure.
- Verification Layer.
- Workflow state.
- Decision integrity.
- Enforcement paths.
- Proof records.
- Operator control.

## 8. Visual Design Audit

Colour palette:

- Warm off-white background: HSL `42 24% 96%`, plus `#f7f6f1`, `#f8f7f2`, `#efede8`.
- Deep black / near black text: HSL `0 0% 7%`, plus black opacity layers.
- Forest green primary: HSL `151 76% 20%`, Tailwind token `forest-green: #064E3B`.
- Mint green accent: `#A7F3D0`, plus softer green glows and panels.
- The palette is premium and institutional. It should be preserved.

Typography:

- Manrope for body via `--font-manrope`.
- Space Grotesk for display via `--font-space-grotesk`.
- Large, tight headings with zero letter spacing.
- Uppercase micro-labels/eyebrows with tracking.
- Typography feels serious and modern, not playful.

Spacing and section rhythm:

- Large vertical spacing: many sections use `py-28`, `py-32`, `md:py-40`, `md:py-44`.
- The site uses an editorial/cinematic rhythm rather than dense SaaS scanning.
- This supports parent-company positioning but can slow comprehension.

Card style:

- Large rounded cards (`1.45rem` to `2rem`).
- Soft borders at low black opacity.
- Off-white/white translucent panels.
- Long soft shadows with large negative spreads.
- Abstract green visual panels inside cards.

Buttons:

- Pill CTAs.
- Primary: black or white depending on background.
- Secondary: transparent/glass with border.
- Buttons look premium but CTA language is generic.

Borders/shadows:

- Subtle black borders, `border-black/[0.05]` through `border-black/[0.12]`.
- Large cinematic shadows.
- Good for institutional feel; may need more restraint in operational sections.

Animations:

- Framer Motion reveal wrappers.
- Scroll-linked transforms for hero, Operating Console, Company, CTA.
- Horizontal rail sections for Systems and Principles.
- Global reduced-motion CSS is present.
- Fresh desktop browser check showed no console warnings; earlier checks did see Framer Motion positioning warnings from scroll containers. Keep an eye on scroll-linked sections.

Hero treatment:

- Active hero uses `public/clvr-hero-reference.png`.
- Full-screen image with dark green overlays and huge white headline.
- Strongest visual asset and likely worth preserving.

Responsive behavior:

- Browser inspection at 1280px: no horizontal overflow.
- Browser inspection at 390px: no horizontal overflow.
- Mobile hero H1 is readable but very large and consumes most of first screen.
- Header desktop nav appears only at `xl`; many laptop/tablet widths see hamburger.

Premium/institutional fit:

- Visual maturity is high.
- It feels serious, cinematic, and parent-company appropriate.
- The main issue is not visual maturity; it is information hierarchy and strategic specificity.

Visuals likely worth preserving:

- `clvr-hero-reference.png`.
- Forest green / warm off-white palette.
- Space Grotesk + Manrope combination.
- Abstract proof/decision chips.
- Operating console green glass panel style.
- System card art direction, with refined hierarchy.

## 9. Asset Inventory

| Asset filename | Type | Where used | Active/unused | Visual description | Parent-company fit | Future Emilia/product fit |
|---|---|---|---|---|---|---|
| `clvr-hero-reference.png` | PNG 1254x1254, 1.5M | `components/sections/clvr-homepage.tsx` | Active | Abstract glass/loop green architectural form | Strong | Could support CLVR parent more than Emilia |
| `icon.svg` | SVG | `app/layout.tsx` | Active | Site icon | Fits if brand mark is intentional | General |
| `application-fragmented.svg` | SVG | `components/sections/application.tsx` | Dormant | Abstract fragmented operations visual | Strong for Operating Core | Could support product before/after pages |
| `application-structured.svg` | SVG | `components/sections/application.tsx` | Dormant | Abstract structured system state visual | Strong for Operating Core | Could support product before/after pages |
| `placeholder.svg` | SVG | `components/sections/tech-stack.tsx` fallback | Dormant | Placeholder | Weak | Avoid in final public design |
| `apple-icon.png` | PNG 180x180 | Not referenced | Unused | App icon | Maybe | General |
| `icon-dark-32x32.png` | PNG | Not referenced | Unused | Small icon | Maybe | General |
| `icon-light-32x32.png` | PNG | Not referenced | Unused | Small icon | Maybe | General |
| `abstract-encryption-shield.png` | PNG | Not referenced | Unused | Security/abstract shield | Good for Verified/security | Good for trust/security |
| `abstract-zero-trust.png` | PNG | Not referenced | Unused | Zero-trust abstract | Good for security if not generic | Maybe |
| `data-shield.png` | PNG | Not referenced | Unused | Data/security shield | Good for Verified/security | Maybe |
| `secure-access-icon.png` | PNG | Not referenced | Unused | Access/security visual | Good for security | Maybe |
| `abstract-healthcare-symbol.png` | PNG | Not referenced | Unused | Healthcare abstract | Less parent-company, more Emilia | Strong for Emilia if quality fits |
| `messaging-app-icon.png` | PNG | Not referenced | Unused | Messaging app icon | Weak for parent | Possible Emilia communications |
| `diverse-professional-headshots.png` | PNG | Not referenced | Unused | Professional headshots | Weak/generic | Maybe testimonials, but likely stock-like |
| `confident-professional.png` | PNG | Not referenced | Unused | Professional portrait | Weak/generic | Maybe, but likely avoid |
| `confident-executive.png` | PNG | Not referenced | Unused | Executive portrait | Weak/generic | Maybe, but likely avoid |
| `sleek-data-overview.png` | PNG | Not referenced | Unused | Data/dashboard abstract | Moderate | Could support product UI if not too stock-like |
| `interconnected-nodes.png` | PNG | Not referenced | Unused | Network/nodes | Moderate but generic | Maybe |
| `abstract-neural-network.png` | PNG | Not referenced | Unused | Neural network abstract | Generic AI | Avoid unless specific |
| `abstract-vector-network.png` | PNG | Not referenced | Unused | Vector/network abstract | Generic | Maybe background, likely not needed |
| `abstract-shopping-cart.png` | PNG | Not referenced | Unused | Commerce abstract | Low | Maybe MarginFlow only |
| `abstract-hr-symbol.png` | PNG | Not referenced | Unused | HR abstract | Low | No obvious fit |
| `generic-letter-logo.png` | PNG | Not referenced | Unused | Generic logo | Low | Avoid |
| `placeholder-logo.png` | PNG | Not referenced | Unused | Placeholder logo | Low | Avoid |
| `placeholder-logo.svg` | SVG | Not referenced | Unused | Placeholder logo | Low | Avoid |
| `placeholder-user.jpg` | JPG | Not referenced | Unused | Placeholder user | Low | Avoid |
| `placeholder.jpg` | JPG 1x1 | Not referenced | Unused | Placeholder | Low | Avoid |
| `nextjs-logo-minimal.png` | PNG | Not referenced | Unused | Next.js logo | Low on public site | Maybe tech stack only |
| `tailwind-css-abstract.png` | PNG | Not referenced | Unused | Tailwind logo | Low on public site | Maybe tech stack only |
| `supabase-logo-abstract.png` | PNG | Not referenced | Unused | Supabase logo | Low unless tech/security section | Maybe tech stack |
| `twilio-logo-abstract.png` | PNG | Not referenced | Unused | Twilio logo | Low unless integrations | Emilia communications if needed |
| `posthog-logo-abstract.png` | PNG | Not referenced | Unused | PostHog logo | Low unless tech stack | Maybe internal |
| `sanity-io-logo-display.png` | PNG | Not referenced | Unused | Sanity logo | Low | No immediate fit |
| `botpress-logo-abstract.png` | PNG | Not referenced | Unused | Botpress logo | Low | No immediate fit |
| `langchain-abstract-logo.png` | PNG | Not referenced | Unused | LangChain logo | Low unless technical credibility | Maybe technical page |
| `datadog-logo-display.png` | PNG | Not referenced | Unused | Datadog logo | Low unless monitoring proof | Maybe technical/security |
| `vercel-logo-minimalist.png` | PNG | Not referenced | Unused | Vercel logo | Low | No need on homepage |

## 10. Component Inventory

### Active Live Components

| Component/file | Purpose | Used by | Keep/reuse/rewrite later | Notes |
|---|---|---|---|---|
| `app/page.tsx` | Composes live route | `/` | Keep | Simple and clean |
| `app/layout.tsx` | Global metadata, fonts, theme | All pages | Keep/rewrite metadata later | Strong metadata but build config separate |
| `components/sections/clvr-homepage.tsx` | Entire live homepage | `app/page.tsx` | Reuse with major content restructure | Main redesign target |
| `components/layout/header.tsx` | Fixed nav and mobile menu | `app/page.tsx` | Reuse with edits | Nav hierarchy needs update |
| `components/layout/footer.tsx` | Footer links and brand summary | `app/page.tsx` | Reuse with edits | Legal placeholders need decision |
| `components/ui-custom/reveal.tsx` | Motion reveal wrapper | Live homepage | Reuse | Good if kept restrained |
| `components/theme-provider.tsx` | Theme provider wrapper | `app/layout.tsx` | Keep | Forced light in layout |
| `hooks/use-scroll-spy.tsx` | Header active section tracking | Header | Reuse with caution | Inline options object causes effect churn |
| `lib/utils.ts` | `cn` utility | Many components | Keep | Standard |

### Dormant But Useful Components

| Component/file | Current purpose | Where used | Recommendation | Notes |
|---|---|---|---|---|
| `components/sections/products.tsx` | Live operator cards with product modules and external links | Not active | Reuse copy selectively | Contains strong Emilia/Verified/MarginFlow specifics but too app-endpoint oriented |
| `components/sections/vision.tsx` | Operator modules by product | Not active | Reuse module taxonomy | Gate/Proof/Recon and Wallet/Referrals/Reactivation are useful |
| `components/sections/application.tsx` | Before/after infrastructure comparison | Not active | Reuse concept | Good for fragmented operations -> structured system layer |
| `components/sections/portfolio.tsx` | Parent company and ventures orbital map | Not active | Reuse strategic idea, maybe not component | Good parent-company copy, visual may be too complex |
| `components/sections/operating-model.tsx` | Consulting -> Infrastructure -> Ventures model | Not active | Reuse carefully | Risks consulting brochure feel |
| `components/sections/areas-of-operation.tsx` | Five domains of operation | Not active | Reuse selectively | Maps well to parent-company thesis |
| `components/sections/thesis.tsx` | Parent-company thesis | Not active | Reuse copy selectively | Good thesis, includes consulting/venture framing |
| `components/sections/what-we-do.tsx` | Capability carousel/sections | Not active | Reuse copy selectively | Strong Operating Core capabilities, visually heavier |
| `components/sections/security.tsx` | Security controls | Not active | Reuse for trust/security | Useful for future security/legal detail |
| `components/sections/final-cta.tsx` | Systems review CTA via Tally | Not active | Reuse CTA pattern, not exact framing | External Tally link exists |
| `components/sections/what-we-fix.tsx` | Operational breakage/problem cards | Not active | Reuse below fold or product pages | More consulting/problem language |
| `components/sections/what-we-build.tsx` | Installed systems list | Not active | Reuse with edits | Good plain-English systems categories |
| `components/sections/selected-systems.tsx` | Product cards under The4Five | Not active | Reuse copy only | The4Five framing may conflict with CLVR |

### Likely Obsolete Or Misaligned Components

| Component/file | Reason |
|---|---|
| `components/sections/blog-teaser.tsx` | Newsletter/blog capture is not needed before parent-company positioning is clear |
| `components/sections/comparison.tsx` | Agency vs SaaS comparison may make site feel like consulting/agency alternative |
| `components/sections/consulting.tsx` | Direct consulting channel may dilute parent infrastructure posture if prominent |
| `components/sections/company.tsx` | Dormant company component references The4Five/infrastructure studio; useful only if brand strategy includes it |
| `components/ui/demo.tsx` | Demo wrapper for particles, not site-specific |
| `components/ui-custom/theme-toggle.tsx` | Theme toggle unused; site is forced light |

### Shared UI Primitives

| Component/file | Purpose | Recommendation |
|---|---|---|
| `components/ui/button.tsx` | shadcn-style button | Keep |
| `components/ui/badge.tsx` | Badge primitive | Keep |
| `components/ui/card.tsx` | Card primitive | Keep |
| `components/ui/input.tsx` | Input primitive | Keep if future forms are added |
| `components/ui/tooltip.tsx` | Tooltip primitive | Keep if used |

### Animation/Visual Components

| Component/file | Purpose | Recommendation |
|---|---|---|
| `components/ui/feature-with-image-comparison.tsx` | Draggable before/after comparison | Useful, but use sparingly |
| `components/ui/radial-orbital-timeline.tsx` | Orbital venture/product map | High complexity; defer unless portfolio is central |
| `components/ui/particles.tsx` | Particle background | Use sparingly; not active |
| `components/ui/text-reveal.tsx` | Scroll text reveal | Use sparingly |
| `components/ui/timeline.tsx` | Timeline layout | Potentially useful |
| `components/ui/in-view.tsx` | In-view animation wrapper | Keep if needed |

## 11. Technical State

Framework:

- Next.js `14.2.35`.
- App Router.
- React `^19`.
- TypeScript `5.9.3`.

Styling:

- Tailwind CSS `3.4.x`.
- CSS variables in `app/globals.css`.
- `tailwindcss-animate` plugin.
- `next-themes` installed and used, but layout forces light theme.

Framer Motion:

- Used heavily in active homepage for reveal, parallax, horizontal rails, and scroll transforms.
- Current fresh browser render had no console warnings, but earlier checks in this thread saw a Framer Motion warning about static-position containers for scroll offsets. Scroll-linked sections should be reviewed during redesign.

Safe check results:

- `pnpm build`: passes.
- Build output reports: `Skipping validation of types` and `Skipping linting`.
- `pnpm exec tsc --noEmit`: passes when run after `.next/types` are generated.
- `pnpm lint`: fails because `eslint` is not installed, despite the script `"lint": "eslint ."`.

Build output:

- `/` route: 71.4 kB, 159 kB first-load JS.
- `/_not-found`: 872 B, 88.2 kB first-load JS.
- Build warning: Tailwind config TS is loaded through CommonJS and Node reports an experimental warning.

Metadata:

- Root metadata exists in `app/layout.tsx`.
- Good parent-company title/description.
- No product route metadata exists.

SEO gaps:

- No `/robots.txt` found.
- No sitemap found.
- No OpenGraph image file found.
- No legal pages.
- No structured data.

Accessibility issues:

- Whole product cards are links with very long accessible text.
- Footer legal links are `#`.
- Desktop nav is hidden until `xl`, so many desktop-width users see hamburger.
- Hero image uses empty alt, acceptable only if intentionally decorative.
- Native `details/summary` FAQ is reasonable.

Responsive issues:

- No horizontal overflow at 1280px or 390px in browser inspection.
- Mobile hero H1 is very large and abstract.
- Systems/principles sections duplicate desktop and mobile versions in DOM with CSS visibility.

Package/README boilerplate:

- `package.json` name is `my-v0-project`.
- `README.md` is generic v0 "SaaS landing page" boilerplate.
- README points to v0/Vercel project links rather than CLVR documentation.

Technical debt that may affect redesign:

- Build skips TS/lint validation in `next.config.mjs`.
- ESLint is not installed.
- Next image optimization is disabled via `images.unoptimized = true`.
- React runtime is 19 while `@types/react` and `@types/react-dom` are 18.
- Many dormant components/assets/dependencies create noise.
- Existing working tree has many uncommitted changes and untracked files.

## 12. Parent-Company Fit Assessment

Desired direction:

> CLVR Systems builds autonomous operating infrastructure for real-world operations.

Scores:

| Dimension | Score | Explanation |
|---|---:|---|
| Parent-company feel | 7/10 | Live homepage already feels like a systems company / portfolio builder, not an Emilia page. Needs clearer hierarchy and less vague portfolio framing. |
| Infrastructure clarity | 8/10 | Strong repeated language around workflow state, decisions, enforcement, proof. Missing named CLVR Operating Core. |
| Systems coherence | 6/10 | Systems are listed coherently, but Applied Systems and Verified layer are mixed together; SupplierOps is thin. |
| Visual maturity | 8/10 | Cinematic, serious, premium, green/off-white identity. Hero is strong. Some cards/animations could be more restrained. |
| Copy clarity | 6/10 | Strong thesis lines, but high abstraction and low concrete explanation. |
| Conversion clarity | 4/10 | CTAs are generic and mailto-based; no clear engagement path, inquiry framing, or route. |
| Emilia balance | 7/10 | Emilia does not dominate, which is right for parent-company direction. It needs a little more credibility without taking over. |
| Technical readiness | 6/10 | Build passes and route is simple. Lint missing, build skips validation, README/package boilerplate, many dormant files. |

It should not feel like:

- Emilia landing page: currently it does not.
- AI agency: live site mostly avoids this, dormant consulting components risk it.
- Generic SaaS page: live site mostly avoids this, older products/tech-stack components risk it.
- Scattered venture portfolio: current systems section is close to this risk but not severe.
- Consulting brochure: dormant components create risk if reused.

## 13. Reuse / Rewrite / Remove Recommendations

### Preserve

- `clvr-hero-reference.png` hero direction.
- Parent-company first hero strategy.
- Warm off-white / black / forest green palette.
- Space Grotesk + Manrope typography.
- `Intelligence becomes infrastructure when it can operate.`
- The not-another-dashboard / operating layer copy.
- Ingest / Understand / Decide / Enforce / Prove loop.
- Decision Systems / Operational Infrastructure / Verification Layer pillars.
- Systems portfolio as a concept.
- Emilia as first applied system.
- CLVR Verified as proof/control/audit layer.
- Header/footer structural simplicity.

### Reuse With Edits

- `components/sections/clvr-homepage.tsx`: keep as primary redesign surface, but restructure.
- `SystemsSection`: keep the concept, rewrite hierarchy and card copy.
- `ConsoleSection`: reuse as CLVR Operating Core.
- `ProcessSection`: reuse near the top.
- `InfrastructureSection`: rewrite around Operating Core architecture.
- `CompanySection`: preserve strongest copy, sharpen parent-company role.
- `FAQSection`: rewrite questions for parent-company trust and system adoption.
- `products.tsx`: mine product module copy, do not reuse external operator-link framing unchanged.
- `vision.tsx`: mine module taxonomy.
- `application.tsx`: potentially reuse before/after idea.
- `portfolio.tsx`: mine parent-company/venture relationship language, probably avoid orbital visual initially.
- Security/Verified copy from `security.tsx` and dormant product components.

### Rewrite Or Remove Later

- Generic CTA language.
- SupplierOps copy if no stronger detail exists.
- Footer legal placeholders.
- The4Five wording unless intentionally part of brand architecture.
- v0 README/package naming.
- Consulting-first sections if parent-company posture is primary.
- Blog/newsletter teaser.
- Tech-stack/logo showcase on homepage.
- Full "Open Operator" external links unless the public strategy intentionally exposes live apps.
- Duplicate horizontal rail sections if they harm scanability.

## 14. Best Next Redesign Direction

Recommended homepage structure:

1. Hero: CLVR Systems as autonomous operating infrastructure for real-world operations.
2. Infrastructure thesis: intelligence only matters when it operates.
3. CLVR Operating Core: shared architecture for decisioning, enforcement, and proof.
4. Operating loop: Ingest / Understand / Decide / Enforce / Prove.
5. Applied Systems: Emilia, MarginFlow, SupplierOps with hierarchy and maturity signals.
6. CLVR Verified: proof/control/audit layer, separated from applied systems.
7. Company posture: parent company / systems company / portfolio builder.
8. Principles or trust: operator control, decision integrity, proof, accountability.
9. Contact CTA: serious partnership/inquiry path.

Recommended nav:

- `Operating Core`
- `Systems`
- `Verified`
- `Company`
- `Contact`

Alternative if keeping current anchor shape:

- `Infrastructure`
- `Operating Core`
- `Applied Systems`
- `Verified`
- `Company`

Recommended CTA hierarchy:

- Primary: `Discuss Infrastructure` or `Start a Systems Conversation`.
- Secondary: `Explore Systems`.
- Avoid making `Emilia` the primary CTA on the parent homepage.
- Avoid `Open Operator` on the homepage unless public app access is intended.

Recommended systems hierarchy:

1. Emilia: first applied system, active/first commercial system.
2. MarginFlow: second applied system, revenue/quote-to-cash.
3. SupplierOps: future/emerging applied system, lighter treatment unless more proof exists.
4. CLVR Verified: proof/control/audit layer, visually adjacent but conceptually separate.

Above the fold:

- CLVR Systems brand.
- Infrastructure-company H1.
- One sentence that says what the operating infrastructure does.
- Primary CTA to contact/discuss infrastructure.
- Secondary CTA to systems/Operating Core.
- No detailed Emilia content above the fold.

Where Emilia should appear:

- In Applied Systems section, first card.
- Enough copy to show credibility: clinical retention, recall, rebooking, referrals, follow-up.
- Link or future route can invite deeper exploration later.

Where CLVR Verified should appear:

- After or beside Operating Core, as the proof/control/audit layer.
- It should not be buried only as the fourth system card.

Should `/emilia` be added now or later?

- Later, unless the next sprint explicitly includes product-route creation.
- For the parent-company redesign, first make Emilia legible in the homepage portfolio.
- Add `/emilia` when there is enough copy/visual/product proof to justify a dedicated page.

Should `/systems` be added now or later?

- Later or as a second step.
- Current site can use in-page systems first.
- A `/systems` route makes sense once Applied Systems and Verified have distinct detail pages or sections.

Legal pages:

- Either create `/privacy`, `/terms`, `/security`, or remove/disable footer legal links until real pages exist.
- Current `#` placeholders should not remain in a production redesign.

## Context ChatGPT Needs for the Next Prompt

Files that control the live site:

- `app/page.tsx`: composes live route.
- `app/layout.tsx`: metadata, fonts, theme provider.
- `app/globals.css`: global design tokens/classes/animations.
- `tailwind.config.ts`: Tailwind tokens, fonts, colors, container.
- `components/layout/header.tsx`: nav and mobile menu.
- `components/layout/footer.tsx`: footer links and brand summary.
- `components/sections/clvr-homepage.tsx`: active homepage and live copy.

Reusable components:

- `Reveal`.
- `Header`.
- `Footer`.
- `ClvrHomepage` section patterns.
- `ConsoleSection` / Operating Console concept.
- `ProcessSection`.
- `InfrastructureSection`.
- `SystemCard` / `SystemArt` with hierarchy edits.
- Dormant `Application` comparison concept.
- Dormant product/module copy from `Products` and `Vision`.

Useful assets:

- `public/clvr-hero-reference.png`.
- `public/icon.svg`.
- `public/application-fragmented.svg`.
- `public/application-structured.svg`.
- Security-themed assets may support future Verified/security pages.

Strongest copy:

- `Autonomous Infrastructure for Real-World Operations`.
- `Intelligence becomes infrastructure when it can operate.`
- `Operator-grade systems that turn workflow state into decisions, enforcement paths, and proof records.`
- `The work is not another dashboard. It is the operating layer...`
- `Ingest / Understand / Decide / Enforce / Prove`.
- `Decision Systems / Operational Infrastructure / Verification Layer`.

Weakest copy:

- Generic CTAs.
- SupplierOps detail.
- Footer legal placeholders.
- Product descriptions that are too short to be credible.
- Dormant The4Five / consulting / v0 boilerplate if reused without cleanup.

What should not be touched in the implementation prompt:

- Backend logic.
- Auth.
- Database logic.
- Mutations.
- Provider integrations.
- Tests unless explicitly requested.
- External operator apps.
- Production data.

What can be redesigned freely:

- Homepage section order.
- Homepage copy.
- Header nav labels.
- CTA hierarchy.
- Systems section hierarchy.
- Treatment of CLVR Verified.
- Use/repositioning of dormant components.
- Visual layout inside public homepage sections.
- Footer link strategy.

Technical risks:

- Build skips TS/lint validation in `next.config.mjs`.
- `pnpm lint` currently fails due to missing ESLint.
- React 19 runtime with React 18 type packages.
- Image optimization disabled.
- Many dormant files/assets create ambiguity.
- The current working tree is dirty with many untracked files.
- Scroll-linked Framer Motion sections need regression checks after layout changes.

Next Codex implementation prompt should focus on:

- Redesigning the public homepage as a parent-company / infrastructure-company site.
- Naming and explaining `CLVR Operating Core`.
- Reframing systems as Applied Systems plus CLVR Verified layer.
- Keeping Emilia visible but not dominant.
- Preserving cinematic institutional visual identity.
- Improving CTA clarity without turning the site into a product landing page.
- Avoiding backend/provider/test/auth changes.
