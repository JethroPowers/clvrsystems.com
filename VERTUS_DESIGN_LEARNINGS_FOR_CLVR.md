# VERTUS DESIGN LEARNINGS FOR CLVR

Audit date: 2026-06-18  
Reference inspected: `https://www.vertus.ai`  
CLVR project path: `/Users/Jethr/CLVR/Clvr-main-site`

This report records design lessons from Vertus for CLVR Systems. Vertus is used only as a structural and quality reference. CLVR should not copy Vertus copy, assets, claims, colour system, imagery, or page layouts.

## Pages Inspected

- `/`
- `/investment`
- `/superintelligence`
- `/company`
- Also checked visible `/contact` and `/mission` routes for navigation/footer/context patterns.
- Mobile check at approximately `390x844`.

## Implementation Lessons to Apply

### Hero Lessons

- Vertus relies on a near-full viewport hero where the cinematic visual carries the first impression.
- Hero copy is bottom-weighted rather than centered in a generic SaaS block.
- The visual is dominant, while navigation, copy, and CTAs stay compact.
- Desktop H1 sizing is controlled. It feels confident without becoming oversized.
- Mobile H1 sizing drops materially so the first viewport is not dominated by text.
- Premium feeling comes from the art direction, spacing, and restraint, not extra interface chrome.

Apply this to CLVR by keeping the hero cinematic, calm, and clear. The CLVR hero should use the existing green abstract visual, bottom-weighted copy, compact CTAs, and a controlled H1 scale on desktop and mobile.

### Sizing Lessons

- Desktop H1s should feel large but not theatrical.
- Mobile H1s should remain readable and should leave room for the visual field.
- Paragraphs should stay narrow, usually under a comfortable reading width.
- Major sections need generous height and breathing room.
- Content should sit inside controlled max-widths rather than stretching across the full viewport.
- Buttons should be compact pill CTAs.
- Footer layout should feel spacious and intentional.
- Large visual panels are more premium than many small cards.

Apply this to CLVR by making the page feel spacious without becoming empty. Do not make headings comically large, do not make sections cramped, and do not make the mobile hero dominated by text.

### Spacing and Rhythm Lessons

Vertus follows a deliberate rhythm:

- Cinematic hero.
- Spacious thesis section.
- Explanatory platform/core section.
- Problem or comparison section.
- Proof or credibility section.
- FAQ.
- Final CTA.
- Serious footer.

Apply this to CLVR with this rhythm:

- Hero.
- Thesis.
- Core.
- Systems preview.
- Difference / why CLVR exists.
- Verified.
- Principles.
- FAQ.
- Contact.
- Footer.

The page should feel sequenced, not stacked randomly.

### Typography Lessons

- Headlines work best when they are short and direct.
- Paragraphs should be narrow and restrained.
- Body copy should explain, not perform.
- Hierarchy should be obvious from size, spacing, and placement.
- Labels should be minimal and useful.
- Emphasis should come from spacing and structure, not decoration.

Apply this to CLVR by making copy easier to read. Use plain English. Avoid long abstract paragraphs and avoid overusing terms like "autonomous," "decisioning," "enforcement," and "workflow state."

### CTA Lessons

- Vertus uses compact pill CTAs.
- CTAs repeat, but they do not dominate the page.
- CTA language matches the page purpose.
- The site avoids aggressive SaaS-style conversion blocks.

Apply this to CLVR with:

- `Explore Systems`
- `Start a Conversation`
- `Contact CLVR`

Do not use:

- `Start Trial`
- `Apply for Emilia Pilot`
- `Book Clinic Review`
- `Open Operator`

### Page-Depth Lessons

- Vertus feels more serious because it has deeper parent-company and platform pages.
- The deeper pages support the core hierarchy rather than creating thin product sales pages.
- Page depth should make the company feel more substantial, not bloated.

Apply this to CLVR by creating deeper parent-company pages:

- `/`
- `/systems`
- `/verified`
- `/company`

Do not create:

- `/emilia`
- `/marginflow`
- `/supplierops`
- `/blog`
- `/pricing`
- `/careers`

### Systems Hierarchy Lessons

- Vertus explains multiple platforms under one core idea.
- The strongest transferable lesson is the relationship between a parent company, a shared core, and applied systems.

Apply this to CLVR with:

- CLVR Systems as the parent company.
- CLVR Core as the shared operating model.
- Emilia, MarginFlow, and SupplierOps as applied systems.
- CLVR Verified as the record/proof layer.

The user should understand: different systems, same operating model. Emilia should appear as the first applied system but should not dominate the homepage.

### Diagram Lessons

- Good diagrams explain the architecture without asking the user to decode a technical map.
- Simple flow, layer, comparison, and record visuals are enough.

Good CLVR diagrams:

- `Understand -> Decide -> Execute -> Record`
- `Applied Systems -> CLVR Core -> Verified Records`
- Scattered tools vs controlled workflow.
- One clean proof-record visual.

Avoid:

- Random node maps.
- Excessive connector lines.
- Complex architecture diagrams.
- Fake dashboards.
- Sci-fi visuals.
- Tiny technical labels.
- Numbered labels.

### FAQ Lessons

- Vertus uses a serious FAQ layout with a large heading on one side and calm accordion questions on the other.
- The FAQ handles objections without becoming a support page.

Apply this to CLVR with questions that answer:

- What CLVR builds.
- Whether CLVR is an agency.
- How Emilia fits.
- What CLVR Verified is.
- Why records matter.
- Who CLVR is for.

### Footer Lessons

- Vertus's footer feels intentional because it has real structure and no broken placeholder links.
- The footer gives the site institutional closure.

Apply this to CLVR by creating a real footer with links only to pages that exist:

- Home.
- Systems.
- Verified.
- Company.
- Contact.

Do not add Blog, Careers, Pricing, Privacy, Terms, or Security unless those routes actually exist.

### What Not to Borrow

CLVR should borrow the quality of structure, not Vertus's identity.

- No Vertus copy.
- No Vertus imagery.
- No pink colour system.
- No "superintelligence" language.
- No consciousness claims.
- No founder/team section.
- No founder portraits.
- No fake metrics.
- No fake proof.
- No finance-specific claims.
- No over-the-top language.

## Home Page

### Route and Purpose

Route: `/`  
Purpose: Parent/product-platform homepage introducing Vertus, its superintelligence positioning, platform hierarchy, and institutional AI thesis.

### Hero Structure

- Full-viewport cinematic video/image hero.
- Fixed header overlays the hero with a white logo, centered nav, and a small pill CTA.
- Hero copy sits low in the viewport rather than centered.
- H1 is relatively controlled on desktop: about `45px` in the inspected viewport, not oversized despite the dramatic hero.
- Supporting copy and a showreel CTA sit around the bottom of the hero.
- Visual asset does most of the premium work; copy is short.

### Section Order

- Cinematic hero.
- Thesis/proof framing: built AI for markets, then extended the system.
- Problem/advantage section around "Intelligence That Decides."
- Platform/system hierarchy: multiple platforms under one cognitive core.
- Audience/use-case panels.
- Final CTA.
- FAQ and large footer treatment.

### CTA Strategy

- Main repeated CTA: `Join Now`.
- Secondary CTAs route toward platform pages such as Superintelligence and Investment.
- CTA styling is small and pill-shaped, usually black-on-white or white-on-dark.
- CTA quantity is restrained. The site does not use giant buttons or aggressive conversion blocks.

### Footer Treatment

- Footer is serious and extensive, with columns for company, platform, legal, social, and back-to-top.
- Legal links point to real routes.
- Footer spacing is large and gives the site institutional closure.

### Visual Style

- Full-screen pink/pale abstract media, strong contrast overlays, and sparse white sections.
- The hero is more image-led than component-led.
- Mid-page sections use white space and restrained cards/panels.
- The site often uses visual panels or diagrams as large supporting objects rather than small repeated cards.

### Motion/Scroll Behaviour

- Hero media has cinematic movement.
- Reveals and transitions are subtle.
- No aggressive scroll hijacking observed.
- Some Webflow/modal/cookie behavior creates hidden DOM noise, but visible motion is restrained.

### What Feels Premium

- Near-full viewport hero with strong art direction.
- Small, calm CTAs.
- Large sections with narrow text blocks.
- Limited colour per section.
- Strong page rhythm: visual moment, thesis, explanation, proof, CTA.

### Weak or Not Worth Borrowing

- Pink identity and foam-like assets are Vertus-specific and should not be borrowed.
- "Superintelligence" and consciousness claims are not right for CLVR.
- Founder/team storytelling appears on Vertus; CLVR should not add a founder/team section.
- Some copy is overclaimed for CLVR's current proof level.
- Cookie overlay blocked some first-view content during inspection; CLVR should avoid intrusive overlays.

### CLVR Lessons

- Preserve cinematic hero quality but use CLVR's green/off-white identity.
- Keep the hero headline short and bottom-weighted.
- Use the homepage to establish parent-company thesis before product detail.
- Keep CTAs small, direct, and company-oriented.
- Use white space to create seriousness instead of adding more cards.

## Investment Page

### Route and Purpose

Route: `/investment`  
Purpose: Institutional product/business page positioning Vertus as AI investment/trading infrastructure.

### Hero Structure

- Full-height pink cinematic hero.
- H1 sits at lower left: "Superintelligence Driving Trading Advantage."
- Supporting copy and CTA sit lower right, creating a controlled two-column hero.
- Header/nav remain consistent with the homepage.

### Section Order

- Cinematic product hero.
- Origin/thesis explanation.
- Ecosystem/platform framing.
- Proof/credibility language.
- Stacked explanation sections.
- FAQ/final CTA/footer.

### CTA Strategy

- Primary CTA remains `Join Now`.
- CTA appears as a small pill inside hero and repeated after major explanations.
- Secondary links route back into company/platform context.

### Footer Treatment

- Same serious footer pattern as homepage.
- Legal links are real, not placeholders.

### Visual Style

- Strong dark hero followed by white explanatory sections.
- Frequent use of two-column copy and visual/object blocks.
- Uses institutional finance language and proof claims.

### Motion/Scroll Behaviour

- Smooth, restrained reveal/scroll feel.
- No noisy motion observed.

### What Feels Premium

- Product page still feels tied to parent-company platform.
- Sections explain the problem and advantage before asking for conversion.
- The page does not look like a generic SaaS feature page.

### Weak or Not Worth Borrowing

- Finance-specific claims and audited-result framing do not fit CLVR unless CLVR has proof.
- Some copy is too grandiose for CLVR's current positioning.
- Do not borrow the investment-specific trust language.

### CLVR Lessons

- `/systems` should be a systems overview, not a sales page.
- Use comparison/problem sections to explain why CLVR exists.
- Keep product/system rows tied back to one shared core.
- Avoid fake proof; use proof/records language, not fake metrics.

## Superintelligence Page

### Route and Purpose

Route: `/superintelligence`  
Purpose: Platform/product page explaining the core AI platform, how it works, and where it applies.

### Hero Structure

- Full-height cinematic hero.
- H1: "Introducing: Superintelligence."
- Supporting copy and CTA cluster on the lower right.
- Primary CTA and secondary API-style CTA appear as compact pills.

### Section Order

- Hero.
- Platform introduction.
- "How it works" / core capability explanation.
- Platform/application sections.
- Comparison/advantage sections.
- FAQ.
- Final CTA.

### CTA Strategy

- Two-button hero CTA: one primary, one secondary.
- Repeated lower-page CTA remains compact.

### Footer Treatment

- Same serious footer structure.

### Visual Style

- Very cinematic hero.
- White sections with large typography and sparse panels.
- Diagrams are simple and confidence-building, not dense technical architecture maps.

### Motion/Scroll Behaviour

- Motion supports atmosphere rather than distraction.
- Hero image movement is the main cinematic signal.

### What Feels Premium

- Platform is explained as a core with multiple downstream uses.
- Strong distinction between hero atmosphere and explanatory white sections.
- "How it works" remains simple and visually digestible.

### Weak or Not Worth Borrowing

- "Superintelligence" framing is not appropriate for CLVR.
- API positioning should not be copied unless CLVR actually offers API access.
- Avoid claims about consciousness, brain-like systems, or AI supremacy.

### CLVR Lessons

- CLVR Core should be presented as one shared operating model.
- The flow should stay simple: Understand -> Decide -> Execute -> Record.
- Use one relationship diagram and one proof-record visual, not complex technical maps.

## Company Page

### Route and Purpose

Route: `/company`  
Purpose: Parent-company story, thesis, ecosystem, founder/team narrative, principles, FAQ, CTA, footer.

### Hero Structure

- Full-height cinematic hero.
- Bottom-aligned H1 and supporting copy.
- Uses the same visual family as the other pages.
- Small nav and CTA remain consistent.

### Section Order

- Hero.
- Origin/thesis.
- Ecosystem section.
- Founder/team section.
- Multidisciplinary origin section.
- Capability/principles sections.
- FAQ with large heading left and accordion right.
- Final CTA and footer.

### CTA Strategy

- `Join Now` and `Contact Us` appear in lower sections.
- FAQ includes a compact contact CTA.

### Footer Treatment

- Big final closure with company links, platform links, legal links, social icons, and back-to-top.

### Visual Style

- Similar cinematic hero.
- White sections are highly spaced.
- FAQ uses large left heading and right accordion stack.
- Final CTA pairs large heading with a sculptural visual.

### Motion/Scroll Behaviour

- Smooth reveals and hero motion.
- No intrusive animation observed.

### What Feels Premium

- Consistent parent-company tone across pages.
- Strong FAQ layout.
- Serious footer.
- Clear, sparse final CTA.

### Weak or Not Worth Borrowing

- Do not borrow founder/team section, founder portraits, or team cards.
- Do not borrow consciousness/superintelligence claims.
- Do not borrow pink sculptural visual identity.

### CLVR Lessons

- CLVR needs a parent-company company section, not a founder section.
- FAQ should use the strong two-column pattern: large heading left, calm accordions right.
- Footer should feel intentional and should not include broken placeholder legal links.

## Design System Lessons

### Layout and Sizing

- Hero height: near full viewport, roughly `90-100vh`.
- Desktop hero H1: inspected around `45px` at `1103px` viewport; large enough to feel confident, not enormous.
- Mobile hero H1: inspected around `29px` at `390px`; mobile hero relies more on image and spacing than oversized type.
- Section vertical spacing: major sections often occupy `600-1100px`, with generous vertical padding.
- Content max-width: headings often sit around `300-620px`; paragraphs are narrow and controlled.
- Paragraph width: usually `360-620px`, rarely full-width.
- Cards/panels: large and sparse; visual panels are often `300-700px` wide, not many small tiles.
- Buttons: compact pill buttons around `25-32px` high in the inspected desktop viewport, with high border radius.
- Border radius: pills are fully rounded; panels use soft rounded corners, usually less important than spacing.
- Footer spacing: large, multi-column, serious, and separated from CTA.
- Mobile: nav collapses to a compact menu icon, H1 scale drops materially, and hero imagery remains the dominant first impression.

### Typography

- Headings are tight and short.
- H1/H2 line heights are close, often near `1.08`.
- Desktop H2s inspected around `37px`; H3s around `16-22px`.
- Body text is comparatively small and narrow.
- Eyebrows are sparse and often paired with small icon marks.
- Some negative letter spacing is used in Vertus; CLVR should keep letter spacing at `0` per project design rules.
- Large text moments are used selectively.

### Colour and Contrast

- Vertus uses white/black with a strong pink visual identity.
- Colour is concentrated in cinematic visuals, not every component.
- Explanatory sections often return to white backgrounds and black text.
- Accent colour is used sparingly in labels and emphasis.
- CLVR should translate this into forest green/mint visuals with warm off-white sections.

### Components and Sections

Reusable structural patterns:

- Cinematic hero with bottom-aligned headline.
- Editorial thesis block.
- Problem/advantage comparison section.
- Simple core/platform explanation.
- Row-based system/platform index.
- FAQ with left heading and right accordion.
- Serious footer.
- Final CTA that feels like an inquiry, not a trial signup.

### Motion and Scrolling

- Motion is atmospheric, mostly in hero media and soft reveals.
- No typewriter effects, particle storms, or aggressive parallax observed.
- No scroll hijacking observed.
- CLVR should keep hero image drift slow and reveal animations restrained.

### Visual Hierarchy

- First impression is image, brand, nav, then headline.
- Sections guide attention through large visual changes: dark hero -> white thesis -> sparse visual panels -> FAQ/footer.
- CTAs are visible but not loud.
- The site avoids density by using narrow copy, not by shrinking everything.
- Vertus occasionally becomes claim-heavy; CLVR should stay more concrete and plain-English.

## What CLVR Should Borrow

### Borrow Directly as a Principle

- Parent-company first posture.
- Cinematic first viewport.
- Large whitespace and slower page rhythm.
- Small, calm CTA hierarchy.
- One shared core/platform hierarchy.
- Row-based system explanation.
- Strong FAQ layout.
- Intentional footer with no placeholder links.
- Final CTA that feels like a serious inquiry.

### Borrow With Adaptation

- Vertus uses pink abstract media; CLVR should use the existing green/off-white `clvr-hero-reference.png`.
- Vertus uses "superintelligence"; CLVR should use "operating systems" and "workflow control."
- Vertus uses finance/institutional proof; CLVR should use workflow control, records, and outcomes.
- Vertus uses deeper platform and company pages; CLVR should use `/systems`, `/verified`, and `/company` as parent-company pages rather than thin product sales pages.
- Vertus uses FAQ as a serious objection-handling section; CLVR should answer parent-company buyer questions.

### Do Not Borrow

- No Vertus copy.
- No Vertus assets.
- No pink colour system.
- No founders section.
- No founder/team headshots.
- No over-the-top claims.
- No fake metrics.
- No fake proof.
- No sci-fi language.
- No "superintelligence" positioning.
- No generic AI particles.
- No random technical labels.
- No numbered section labels in the CLVR UI.

## CLVR Gap Analysis

### What CLVR Already Does Well

- CLVR already reads as a parent-company / systems site, not an Emilia landing page.
- The hero asset is distinctive and cinematic.
- The main hierarchy exists: CLVR Core, applied systems, CLVR Verified, company/contact.
- Copy is already more plain-English than the prior infrastructure-heavy version.
- System rows are not card-grid dependent.
- The FAQ structure is close to the desired Vertus-like two-column accordion pattern.

### What CLVR Should Preserve

- Warm off-white, black, deep forest green, and mint accents.
- Space Grotesk and Manrope.
- `clvr-hero-reference.png`.
- The row-based systems index.
- The proof-record visual.
- Footer core/system/company grouping.
- Header labels: Core, Systems, Verified, Company, Contact.

### Where CLVR Feels Weaker

- It needs a stronger "why CLVR exists" section between Systems and Verified.
- The homepage currently moves from systems into Verified without a clear problem/advantage comparison.
- Principles are missing from the current homepage even though the requested structure requires them.
- Company section is too short and currently uses a diagram in place of the second paragraph.
- Contact is useful but could feel more like a serious inquiry section.
- Footer currently includes Blog, which conflicts with the latest prompt.

### Where CLVR Is Too Abstract

- "Control important workflows" is clear, but the page needs one concrete before/after explanation of scattered work versus controlled workflow.
- CLVR Core is visually clear but could be less technical if framed as "how work stops disappearing."
- Verified needs to stay practical: what was recommended, reviewed, completed, and recorded.

### Where CLVR Is Too Card-Dependent

- CLVR is not heavily card-dependent after the recent refactor.
- The remaining risk is CoreFlow and proof visuals becoming too panel-heavy if additional grids are added.
- The next iteration should use editorial split sections and row-based sections, not more card grids.

### Where CLVR Needs Better Sizing

- Hero typography is close but should remain controlled on mobile.
- Large panels should be slightly less shadowed and more spacious.
- The systems rows are good but can be slightly slimmer.
- Final CTA can be smaller and more editorial.

### Where CLVR Needs Better Page Rhythm

- Add Difference section after Systems preview.
- Add Principles before FAQ.
- Keep alternating bands: cinematic hero, editorial thesis, core split, systems rows, difference, dark Verified, white how/principles/company, FAQ, CTA.

### Where CLVR Needs Stronger CTA Structure

- Primary global CTA: `Start a Conversation`.
- Homepage hero primary: `Explore Systems`.
- Contact primary: `Contact CLVR`.
- Avoid trial, pilot, clinic review, and operator-app CTAs.

### Where CLVR Needs Better Footer/Contact Treatment

- Remove Blog from footer for this sprint.
- Keep legal links absent until real legal routes exist.
- Keep footer serious and sparse.
- Contact should read like an inquiry, not a newsletter or signup form.

### Where CLVR Needs Clearer System Hierarchy

- Applied Systems should be Emilia, MarginFlow, SupplierOps.
- CLVR Verified should be named as record/proof layer.
- `/systems` should keep the layer diagram: Applied Systems / CLVR Core / Verified Records.

## Implementation Plan

### Files to Edit

- `components/sections/clvr-homepage.tsx`
- `components/sections/systems-page.tsx`
- `components/sections/verified-page.tsx`
- `components/sections/company-page.tsx`
- `components/layout/footer.tsx`
- `components/layout/header.tsx`
- `app/verified/page.tsx`
- `app/company/page.tsx`
- Potentially `app/layout.tsx` only if metadata has drifted.

### Routes to Add

- `/verified`
- `/company`

### Routes to Remove/Defer

- Remove or defer `/blog` because the latest prompt explicitly says not to create `/blog` in this sprint.

### Sections to Rewrite/Add

- Add Difference section after Systems preview:
  - `Most tools show the gap. CLVR helps close it.`
  - Scattered tools vs controlled workflow.
- Add Principles section:
  - Workflows before dashboards.
  - Control before autonomy.
  - Records over memory.
  - Systems over scattered tools.
- Expand Company section with the requested second paragraph.
- Keep FAQ structure but align heading to requested direction.
- Keep Contact as serious inquiry.

### Layout Patterns to Use

- Bottom-weighted cinematic hero.
- Spacious editorial thesis.
- Split Core section.
- Row-based Systems section.
- Before/after Difference section using calm panels, not complex diagrams.
- Dark Verified section with one proof-record visual.
- Two-column FAQ.
- Intentional footer.

### Diagrams or Visuals to Add

- Add a simple scattered-vs-controlled visual.
- Prefer text panels over importing extra assets unless needed.
- Preserve the current CLVR Core flow and Verified record visual.

### What to Avoid

- No numbered section labels.
- No founder/team section.
- No founder/team headshots.
- No fake metrics or fake proof.
- No generic AI particles.
- No random labels or complex maps.
- No `/blog` in this sprint.
- No backend/auth/database/provider changes.

### Expected Final Structure

Homepage:

- Hero
- Thesis
- Core
- Systems preview
- Difference / why CLVR exists
- Verified
- Principles
- FAQ
- Contact
- Footer

Systems page:

- Hero
- Core section
- Systems index with anchors
- Relationship section
- CTA
- Footer

Verified page:

- Cinematic hero
- Record/proof explanation
- Proof-record visual
- Layer relationship
- FAQ
- CTA
- Footer

Company page:

- Cinematic hero
- Parent-company thesis
- Company structure
- Operating principles
- FAQ
- CTA
- Footer
