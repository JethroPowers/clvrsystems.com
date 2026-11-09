import type { ProductId } from "./site-content";

type SystemStudy = {
  id: ProductId;
  label: string;
  title: string;
  summary: string;
  problem: string;
  response: string;
  stages: { title: string; description: string }[];
  example: { label: string; value: string }[];
  lesson: string;
  outcome: string;
};

// Source notes live in docs/system-content-sources.md. No customer results are implied.
export const systemStudies: SystemStudy[] = [
  {
    id: "emilia",
    label: "Product case study 01 / Clinic follow-up",
    title: "When to follow up.\nWhen to stop.",
    summary:
      "Being due for a return visit is only part of the decision. Emilia helps clinic teams check bookings, replies and contact preferences before following up.",
    problem:
      "A client appears on a follow-up list, but they have already booked. If the booking and treatment history sit apart, the team may prepare a message that is no longer needed.",
    response:
      "The review queue brings the relevant checks together. The operator can inspect why a client was flagged, review a draft and hold the follow-up when the circumstances have changed.",
    stages: [
      {
        title: "Check the client record",
        description:
          "Treatment history and contact preferences inform the review. Missing information or unclear consent needs attention before outreach can proceed.",
      },
      {
        title: "Find the right moment",
        description:
          "Return windows identify possible follow-ups. Existing bookings, replies, pauses and do-not-contact instructions affect whether a message is appropriate.",
      },
      {
        title: "Review the draft",
        description:
          "The team can review a prepared message, hold it or mark the client do-not-contact. Review approval does not send a message: live sending is not enabled in the clinic portal.",
      },
      {
        title: "Record the decision",
        description:
          "Save the review decision with the client history. When a reply or booking outcome is recorded, the team can revisit it before deciding to follow up again.",
      },
    ],
    example: [
      {
        label: "The situation",
        value: "Alex is due to return and appears in the review queue.",
      },
      {
        label: "The decision",
        value: "An operator finds an existing booking and holds the draft.",
      },
      {
        label: "The record",
        value: "The hold and booking note explain why no message was needed.",
      },
    ],
    lesson: "Knowing when to stop is part of a good follow-up.",
    outcome:
      "The next operator can see why the client was flagged and why the message was held. A completed review remains useful even when no outreach follows.",
  },
  {
    id: "marginflow",
    label: "System deep dive / Commercial operations",
    title: "Give every enquiry\na next move.",
    summary:
      "MarginFlow is in development for trades and service teams. Its focus is the work between a new enquiry, a prepared quote and a customer’s response.",
    problem:
      "A quote goes unanswered while the team is busy on another job. Without the enquiry, quote and conversation together, it is hard to tell whether to chase, clarify the scope or close the opportunity.",
    response:
      "MarginFlow links the quote to the original enquiry and schedules follow-ups around its status. A customer reply or a won or lost decision changes whether another reminder is appropriate.",
    stages: [
      {
        title: "Capture the enquiry",
        description:
          "Keep the customer’s details and request with the lead. Add the job type, urgency and information needed to prepare a quote.",
      },
      {
        title: "Make the quote concrete",
        description:
          "Attach the description, line items, price and timeline to the enquiry. The scope stays available alongside the customer conversation.",
      },
      {
        title: "Follow the response",
        description:
          "Scheduled follow-ups remain tied to the quote. A reply or a won or lost outcome changes whether another reminder should be sent.",
      },
      {
        title: "Close the loop",
        description:
          "Record whether the opportunity was won or lost. Follow-up checks use that status so a closed opportunity does not receive another scheduled reminder.",
      },
    ],
    example: [
      {
        label: "The situation",
        value: "A kitchen refurbishment quote is awaiting a reply.",
      },
      {
        label: "The decision",
        value: "The customer replies before the next scheduled reminder.",
      },
      {
        label: "The record",
        value:
          "The reply stays with the quote; the scheduled reminder is skipped.",
      },
    ],
    lesson:
      "A reminder is useful only when it knows what has already happened.",
    outcome:
      "The design keeps a useful question visible: does this quote still need a follow-up? Its scope centres on enquiries, quotes and replies.",
  },
  {
    id: "verified",
    label: "System deep dive / Payment controls",
    title: "Connect the payment\nto its approval.",
    summary:
      "CLVR Verified is designed around one question: does the payment match what was authorised? The request, approval and verification record need to answer it together.",
    problem:
      "An approval sits in one conversation, the invoice in another and the payment reference elsewhere. Reviewing the transaction means reconstructing which details were authorised.",
    response:
      "Verified’s design links the recipient, amount and purpose to an approval reference, then compares the recorded payment details against that decision.",
    stages: [
      {
        title: "Make the request explicit",
        description:
          "Bring the recipient, amount, purpose and supporting invoice into a structured request. These are the details the reviewer is asked to authorise.",
      },
      {
        title: "Record the decision",
        description:
          "The intended workflow records who reviewed the request and their decision. The approval reference identifies what the subsequent payment should match.",
      },
      {
        title: "Connect payment and verification",
        description:
          "The payment record is checked against the approved recipient, amount and reference. The design calls for differences to be flagged for investigation.",
      },
      {
        title: "Keep the evidence together",
        description:
          "Keep the request, approval, payment reference and check result together for later review.",
      },
    ],
    example: [
      {
        label: "The situation",
        value: "A supplier invoice is submitted for payment.",
      },
      {
        label: "The decision",
        value: "A reviewer approves the documented recipient and amount.",
      },
      {
        label: "The record",
        value:
          "The payment details are compared with the approval and the result is saved.",
      },
    ],
    lesson: "A payment record should make the approval easy to find.",
    outcome:
      "The aim is a reviewable payment history. The dedicated Verified site describes the proposed workflow; contact the product team to discuss requirements and availability.",
  },
  {
    id: "juris",
    label: "Product case study 02 / Global mobility research",
    title: "A shortlist\nyou can explain.",
    summary:
      "A useful shortlist comes with reasons, sources and questions still to resolve. Juris Global brings those parts of residency and citizenship research into one place.",
    problem:
      "Three programmes look promising, but their descriptions use different formats. Comparing the details means switching between tabs and keeping track of where each claim came from.",
    response:
      "Programme dossiers organise the research consistently. A comparison holds up to three options, while source references give the reader a way to inspect the material behind an answer.",
    stages: [
      {
        title: "Explore the landscape",
        description:
          "Browse the atlas by region or jurisdiction. Open a country to inspect its programmes and begin a shortlist.",
      },
      {
        title: "Inspect the detail",
        description:
          "Read the route information, requirements, costs and sources in each dossier. Keep qualifications and unanswered questions alongside the headline details.",
      },
      {
        title: "Compare the options",
        description:
          "Compare up to three programmes side by side. Save a shortlist and export the research notes for a later discussion.",
      },
      {
        title: "Follow the sources",
        description:
          "Ask JURIS is designed to answer from published research and include source references. Use the research to prepare an advisory enquiry about your circumstances and unresolved questions.",
      },
    ],
    example: [
      {
        label: "The situation",
        value: "A researcher has found three programmes worth considering.",
      },
      {
        label: "The decision",
        value:
          "Compare the details and revisit the sources behind each option.",
      },
      {
        label: "The record",
        value: "A shortlist with research notes and questions for an adviser.",
      },
    ],
    lesson: "A useful answer should leave a clear path back to its evidence.",
    outcome:
      "The researcher leaves with a brief they can explain: the options considered, the sources used and the questions an adviser still needs to answer.",
  },
];
