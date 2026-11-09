# CLVR website copy review

This review covered the homepage, Systems, Approach, Verified and Company pages before the editorial rewrite, plus navigation, contact, footer, interface illustrations, workflow states, accessibility labels and page metadata. It is based on the local source and the product evidence recorded in [System content sources](/Users/Jethr/CLVR/Clvr-main-site/docs/system-content-sources.md). No website wording was changed during the review itself.

**Implementation update — 2 October 2026:** The subsequent direct, confident and expressive direction is now implemented across all five pages. The hero reads “An independent software company.” with “Ideas worth building.” as its accent. Verified consistently describes payment controls and has a separate payment illustration; MarginFlow describes enquiries, quotes and follow-ups; the clinic example is labelled Emilia and shows a held draft. Product case studies, founder information, contact actions and metadata have been rewritten. Unconfirmed availability badges were removed; MarginFlow retains “In development.” See the latest section of [the delivery notes](clvr-redesign-delivery.md) for validation. The findings below remain as the original review record.

The draft needs a substantial editorial pass. It repeatedly describes a philosophy of connected work while leaving the reader to infer what CLVR is, what each product does and what they can use today. The strongest passages are the concrete explanations of product behaviour. Those should carry more of the story.

## Corrections to make first

| Priority | Finding | Required correction |
| --- | --- | --- |
| First | Verified has two identities. The portfolio and its own page describe a general record capability and show a clinic example; Approach describes payment controls. | Lead with the payment-control offering consistently, following the inspected Verified source. Use a payment example on its page and in its illustration. |
| First | MarginFlow's overview presents invoicing and collections alongside current features, while Approach identifies them as the broader product direction. Its illustration also shows an invoice workflow. | Bring the overview, capabilities and illustration into line with the evidenced enquiry, quote and follow-up application. Preserve the in-development status. Describe broader scope separately when confirmed. |
| First | The clinic illustration is branded “CLVR CORE,” although the reviewed CLVR Core backend is a separate qualification system. | Label the scene as an illustrative clinic follow-up. A shared design approach should not imply that all products run on an established common platform. |
| Next | The product status field mixes chronology, availability and subject matter. | Separate category from availability. “First applied system,” “Proof & records” and “Research & comparison” do not tell a visitor whether a product is available. Confirm availability before assigning labels. |
| Next | The company and contact copy leave the commercial relationship unclear. | State what CLVR builds, who is responsible and what a visitor should contact the company about. Avoid implying a bespoke services offer without establishing it. |

The relevant source is in [the product registry](/Users/Jethr/CLVR/Clvr-main-site/lib/site-content.ts), [system stories](/Users/Jethr/CLVR/Clvr-main-site/lib/system-studies.ts), [Verified page](/Users/Jethr/CLVR/Clvr-main-site/components/sections/verified-page.tsx), [product illustrations](/Users/Jethr/CLVR/Clvr-main-site/components/sections/product-preview.tsx) and [workflow scene](/Users/Jethr/CLVR/Clvr-main-site/components/sections/workflow-scene.tsx).

## The voice

The recurring vocabulary is “connected,” “context,” “work,” “clear,” “next step,” “outcome” and “record.” These words are useful when attached to something specific. Repeating them as the central message makes four different products sound interchangeable.

The sentence rhythm is also unusually uniform: “Independent thinking. Connected systems.” “Different systems. Connected thinking.” “Independent minds. Common ground.” The pattern gives headings a consistent shape but does little to explain the company. Retain occasional short statements and write the supporting paragraphs in natural sentences.

The proposed voice is direct and informed, with enough personality to express a point of view. Use the language of each customer's work: a client who has replied, a quote awaiting a response, a payment that needs approval, a programme with a source to inspect. Confidence should come from those details.

“Built around the work” can remain as a company principle. “A useful answer should leave a clear path back to its evidence” is a strong Juris line. “A follow-up system should know when to stop as clearly as it knows when to act” also expresses a specific Emilia design choice. These lines earn their place through the explanation that follows.

## Homepage

| Area | Assessment | Recommendation |
| --- | --- | --- |
| Hero headline | “Business, in better flow” is broad enough to describe many consultancies or workflow tools. It gives little indication that CLVR builds a portfolio of products. | Establish the company category and what it builds before settling the final headline. The supporting sentence should identify the actual areas of work. |
| Hero description | “Connect the people, decisions and work behind a business” remains abstract. The business-only framing also fits Juris's individual research journey less naturally. | Describe the portfolio directly and allow it to include research as well as business operations. |
| Hero label and caption | “Independent thinking,” “systems in continuity” and “one approach” repeat the same idea before the reader reaches the products. | Keep one identity statement. Remove captions that add no information. |
| Introduction | “Important work should never get lost in between” leaves the reader to imagine what gets lost. | Name a few real situations, then introduce the products addressing them. |
| Portfolio | “Built around the work” is usable. The description repeats the parent philosophy instead of helping readers choose a product. | Let categories, audience and product descriptions do the explanatory work. |
| Workflow section | “The thinking underneath” is a useful editorial label. “From a loose end. To a clear outcome” and the four abstract stage descriptions obscure the actual example. | State that the sequence follows one clinic follow-up. Use concrete information in each state. |
| Emilia case study | “A clearer picture. A better next step” could describe any product. The paragraph below is much more informative. | Put the clinic problem in the headline, such as “Knowing who needs a follow-up.” |
| Juris case study | The shortlist headline is closer to a real user task. “A visitor can explore the landscape” describes the website from outside. | Address the reader directly and explain how research carries into comparison and adviser questions. |
| Company teaser | “Independent minds. Common ground” and “what happens after the next click” add little company information. | Introduce an actual company fact or working principle. Make the destination of “Meet CLVR” fulfil that expectation. |
| Contact | “What could work better?” can stay as an invitation. “The friction” and “We’ll take it from there” leave the offer and next step vague. | Say what kinds of enquiry are welcome and that the action opens an email. Avoid promising a process that has not been defined. |

A proposed supporting sentence for the hero is: “CLVR builds software for clinic follow-up, commercial operations, payment control and global mobility research.” This is a positioning foundation, not a final creative headline.

## Product descriptions and Systems page

The Systems page should help someone identify the relevant product and understand its scope. Its current opening, “Different systems. Connected thinking,” repeats the homepage without adding useful orientation. A more useful introduction would name the portfolio and explain that each product serves a distinct area of work.

The following are proposed directions for the product summaries, subject to a final availability check:

| Product | Proposed description |
| --- | --- |
| Emilia | Client follow-up software for aesthetic clinics. Review who needs attention, prepare messages and keep booking outcomes with the client record. |
| MarginFlow | Enquiries, quotes and follow-ups for trades and service teams. Currently in development. |
| CLVR Verified | Payment-control software designed to connect requests, approvals and verification in one record. |
| Juris Global | Explore and compare residency and citizenship programmes, with source references and research tools to support an informed next step. |

Emilia's “a little follow-through” undersells the detailed operational work. “Client relationships” is also broader than the specific clinic follow-up capability. “Clinic follow-up” would identify its purpose faster.

MarginFlow's “All the way to payment” should wait until that end-to-end scope is supported by the product being presented. The current page needs the same distinction between initial scope and broader ambition already present on Approach.

Verified's category should identify payment controls. “Decisions & records” and “Proof & records” leave the visitor without a recognisable use case.

Juris is currently the clearest description. “Keep the sources close” can become “check the sources” or “inspect source references.” The latter describes an action the visitor can understand.

Use “View system” or a similarly clear label for internal overviews, “How it works” for the Approach section, and “Visit [product]” for external product sites. Keep naming consistent: CLVR for the company in prose, CLVR Systems where the full brand is needed, CLVR Verified for the product, and Juris Global on first reference.

## Approach page

This page contains the strongest substance on the site. The useful details include consent and stop conditions in Emilia, reply-aware follow-ups in MarginFlow, matching payments to approvals in Verified's offering, and source references and three-programme comparison in Juris.

The repeated framing dilutes that substance. Each story currently has a summary, problem, response, four stages, example, lesson and outcome, with several sections saying similar things. Keep the deep dives and shorten the repeated preambles. Let the most important design decision in each product lead the story.

| Story | Keep | Refine |
| --- | --- | --- |
| Emilia | The distinction between approaching a return window and having already booked, replied or opted out. The importance of stopping outreach. | “Approve it for internal review” is accurate to the source's state names but awkward for a buyer. Explain what the team can do and preserve the fact that review approval does not enable live sending in the clinic portal. |
| MarginFlow | Quotes tied to the original enquiry and follow-ups that respond to the conversation's state. | “The working application” and “the broader product direction” sound like project notes. Give the current scope plainly and place development status in one consistent location. |
| Verified | The relationship between the request, authorisation and eventual payment. | Replace repeated references to “the payment-control offering” with a direct product explanation, while preserving the distinction between intended scope and verified operational availability. |
| Juris | Programme dossiers, a comparison of up to three options, research sources and adviser handoff. | Delete “rather than ending at a decorative map.” This is commentary about web design, not a benefit the reader needs explained. Simplify repeated references to context and journeys. |

Useful proposed section headlines are “Follow-up with the right checks,” “Keep enquiries moving towards a decision,” “Connect the payment to its approval,” and “Compare your options with the sources in view.” These are directions for a rewrite, not approved replacements.

## Case studies

Both features are currently product explanations. That can work as a case study of building a product, but the framing should make the subject explicit. “Product case study” would set a clearer expectation than a label that some readers may interpret as a customer-results story.

For Emilia, follow one illustrative client situation through the review decision and the record it creates. Explain why an existing booking or opt-out changes the next action. For Juris, follow one illustrative research question into dossiers, a comparison, source inspection and a set of adviser questions.

Distinguish the example from an observed customer outcome. The current sample-data and interface-illustration captions are useful and should remain. There is no need to invent a performance metric to make these studies credible; a specific design decision and a demonstrable workflow are already valuable evidence.

## Verified page

This is the page requiring the most substantial content correction. Its opening does not identify payments, it describes a general record capability, and its main illustration is a clinic follow-up. Payment control appears near the end as “a specialist application.” A visitor following the Verified product link could reasonably misunderstand what the product is.

Following the inspected specialist site, the page should open with payment controls, explain the request-to-approval-to-verification sequence and show a payment example. A proposed headline direction is “Keep every payment tied to its approval.” The copy must describe actual scope without adopting unverified guarantees about payment execution, legal standing or proof.

The shared philosophy belongs on Approach. Verified's own page needs to explain the specific product consistently with the portfolio and the external destination.

## Company page

“Independent thinking. Practical ambition” is a possible tone-setting line, but the page needs facts underneath it. The current copy never properly answers who builds CLVR, how the products relate to the company, or what kinds of relationship CLVR invites.

“Exploring better ways” also makes the company sound tentative while the rest of the site presents substantial products. Use a direct description of what CLVR builds. Add confirmed founder or team information, the company's role in the portfolio, and a short explanation of how projects are selected or developed. Do not invent scale, location, founding dates or biographies.

Keep the principles where they explain working choices. Reduce “The space between,” “Continuity, by design,” “A connected approach” and “Distinct possibilities” when they repeat an idea already established elsewhere. The Company page should give a reader more knowledge of the company after the first paragraph.

## Navigation contact and interface wording

| Wording or location | Review |
| --- | --- |
| Systems, Approach, Company | Clear navigation labels. Keep them. |
| Let's talk | Suitable for the main navigation. A more explicit “Email CLVR” is useful at the final contact action. |
| Contact body | A proposed restrained direction is “Have a question about one of our products? Tell us which one and what you need.” Broader invitations should follow an agreed services or partnership offer. |
| Footer “Back to top” | On interior pages the link goes to the homepage. Change the wording to “Back to home” if retaining that destination, or make the link return to the current page's top. |
| “First applied system” | Internal portfolio language. Replace with confirmed availability information or remove the status badge. |
| “01 ENTRIES” | Use the singular “01 ENTRY” for the first workflow state. |
| “Motion off” and “Motion on” | “Reduced motion” and “Full motion” describe the preference more precisely. Keep the device-setting explanation. |
| “Existing demo · sample data” | “Demo workspace · sample data” is cleaner; “existing” describes the asset's provenance rather than helping the visitor. |
| “Interface concept · illustrative data” | Keep an honest concept label. A consistent shorter caption is possible, provided it still distinguishes the illustration from a live product session. |
| “A conversation worth continuing” inside the workflow record | Use a task title such as “Review Alex's follow-up.” An interface example should show the work, rather than contain another slogan. |
| “Good relationships. Worth following up.” inside Emilia | Consider a functional title such as “Follow-ups to review.” |
| “One job. The whole picture.” inside MarginFlow | Lead with the example enquiry or quote and align the depicted stages with the product's supported scope. |
| Verified illustration | Use payment-request and approval language consistently with the proposed product correction. |
| Juris illustration | “Residency & citizenship,” “Explore” and “Compare” are useful. “Keep the context” can give way to a concrete reference to programmes or sources. |

The workflow also needs a consistent sequence. “Approved by operator” currently has “Prepare the agreed message” as its next action. If the operator is approving the message, preparation needs to precede that approval. If they are approving a plan, name that decision explicitly. The example should not imply that clinic-portal approval sends a message.

Image descriptions and navigation accessibility labels are generally clear. Keep the sample-data qualifier in the Emilia dashboard description and empty alt text on decorative imagery. Review captions together with the labels embedded in images or illustrations so they tell the same story.

## Search and sharing copy

The homepage title and sharing descriptions lean on “Independent thinking. Connected systems” at the expense of describing the company. Once the main positioning is settled, use a descriptive company category in search and sharing text.

The Systems sharing description should reflect Juris as well as the business-operation products. Verified's title and description should identify payment controls consistently. Company metadata should describe the actual company information added to that page. Approach's metadata already names the four products clearly; its supporting sentence can be shortened.

Update all descriptions in the same editorial pass. Resolving the visible wording while leaving contradictory metadata would preserve the ambiguity for people arriving through search or shared links.

## Order for the rewrite

First settle the company description, Verified's product identity, MarginFlow's scope and product availability labels. Then rewrite the hero and the four product summaries. Those establish the vocabulary for the rest of the site.

Next, strengthen the Emilia and Juris product case studies, revise Verified, and add factual company information. Finish by removing repeated framing from Approach and aligning navigation, contact, illustrations and metadata.

The copy should pass a simple test: a new visitor can explain what CLVR is, distinguish the four products, understand the example they have just read and identify the next action available to them.
