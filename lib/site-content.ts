// Copy is deliberately kept here so the next editorial pass does not affect the layouts.
export const siteCopy = {
  hero: {
    label: "Ideas worth building.",
    lines: ["Operating systems", "for real-world", "business workflows."],
    description:
      "Focused products for clinic follow-up, commercial operations, payment control and global mobility research.",
  },
  introduction: {
    lead: "Good software gets specific.",
    emphasis: "Who needs a follow-up?",
    detail: "Which quote needs an answer? What was approved? Start there.",
  },
  portfolio: {
    label: "Products & projects",
    title: "Built around\nthe work.",
    description:
      "Four products with a clear purpose. Find the one that fits your work, then see how it works.",
  },
  workflow: {
    label: "The thinking underneath",
    title: "Follow\nthe work.",
    description:
      "An illustrated Emilia follow-up: identify the client, prepare a draft, review it and record the decision.",
  },
  contact: {
    label: "Product enquiries",
    title: "Talk to\nCLVR.",
    description:
      "Have a question about one of our products? Tell us which one you’re interested in and what you need.",
    email: "hello@clvrsystems.com",
  },
};

export type ProductId = "emilia" | "marginflow" | "verified" | "juris";

export type Product = {
  id: ProductId;
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  status?: string;
  href: string;
  externalUrl?: string;
  accent: string;
  capabilities: string[];
};

export const products: Product[] = [
  {
    id: "emilia",
    number: "01",
    name: "Emilia",
    category: "Clinic follow-up",
    headline: "Know who needs\na follow-up.",
    description:
      "A shared workspace for aesthetic clinics to review follow-ups, prepare messages and keep booking outcomes with the client record.",
    href: "/systems#emilia",
    externalUrl: "https://emilia.clvrautomations.com/",
    accent: "#78658f",
    capabilities: ["Client recall", "Follow-up review", "Rebooking records"],
  },
  {
    id: "marginflow",
    number: "02",
    name: "MarginFlow",
    category: "Commercial operations",
    headline: "Keep the next\njob moving.",
    description:
      "Enquiries, quotes and follow-ups for trades and service teams. See which opportunities need a response and keep the conversation with the quote.",
    status: "In development",
    href: "/systems#marginflow",
    externalUrl: "https://marginflow.clvrautomations.com",
    accent: "#b56837",
    capabilities: [
      "Enquiry management",
      "Quotes & pricing",
      "Reply-aware follow-ups",
    ],
  },
  {
    id: "verified",
    number: "03",
    name: "CLVR Verified",
    category: "Payment controls",
    headline: "Keep payments\ntied to approvals.",
    description:
      "Payment-control software designed to connect the request, the approval and the verification record.",
    href: "/verified",
    externalUrl: "https://verified.clvrautomations.com/",
    accent: "#385c4b",
    capabilities: [
      "Payment requests",
      "Approval records",
      "Payment verification",
    ],
  },
  {
    id: "juris",
    number: "04",
    name: "Juris Global",
    category: "Global mobility research",
    headline: "Compare your options.\nCheck the sources.",
    description:
      "Explore residency and citizenship programmes, compare routes and prepare for a more informed advisory conversation.",
    href: "/systems#juris",
    externalUrl: "https://jurisglobal.org",
    accent: "#91794e",
    capabilities: [
      "Programme atlas",
      "Source-linked research",
      "Comparison & shortlists",
    ],
  },
];

export const workflowSteps = [
  {
    title: "Identify",
    kicker: "Who needs attention?",
    description:
      "Alex is approaching a return window. Before preparing a message, check the treatment record, contact preferences and any existing booking.",
    state: "Follow-up identified",
    action: "Check eligibility and prepare a draft",
    event: "Follow-up identified",
  },
  {
    title: "Prepare",
    kicker: "Give the team something to review",
    description:
      "Prepare a draft using the client’s history. It waits in the review queue, where the team can check the wording and the reason for contacting Alex.",
    state: "Draft ready for review",
    action: "Review the proposed message",
    event: "Draft prepared for review",
  },
  {
    title: "Review",
    kicker: "A booking changes the decision",
    description:
      "During review, the operator finds that Alex has already booked. They hold the follow-up and note why. Approving a review would not send a message from the clinic portal.",
    state: "Held — client already booked",
    action: "Save the booking note",
    event: "Follow-up held by operator",
  },
  {
    title: "Record",
    kicker: "Leave the reason for the next person",
    description:
      "The hold and its reason remain with Alex’s record. The next operator can see that the follow-up was reviewed and no message was needed.",
    state: "Review decision recorded",
    action: "View the client history",
    event: "Booking note saved to client record",
  },
];

// A design illustration, not a claim that a payment has been executed.
export const paymentWorkflowSteps = [
  {
    title: "Request",
    kicker: "Start with the payment details",
    description:
      "A supplier payment request sets out the recipient, amount, purpose and supporting invoice. These are the details the reviewer is asked to approve.",
    state: "Request ready for review",
    action: "Review the supporting invoice",
    event: "Payment request documented",
  },
  {
    title: "Approve",
    kicker: "Make the authorisation explicit",
    description:
      "The intended approval record identifies the reviewer and the agreed payment details. Its reference follows the request into the payment record.",
    state: "Approval attached to request",
    action: "Add the payment reference",
    event: "Approval reference attached",
  },
  {
    title: "Check",
    kicker: "Compare payment with approval",
    description:
      "Verification is designed to compare the recorded recipient, amount and reference with the approval. A difference needs investigation before the review is complete.",
    state: "Payment details ready to compare",
    action: "Compare against the approval",
    event: "Payment reference added",
  },
  {
    title: "Record",
    kicker: "Keep the result available for review",
    description:
      "In this example, the details match. The request, approval, payment reference and check result form one history for a later reviewer to inspect.",
    state: "Matching details recorded",
    action: "View the payment history",
    event: "Verification result recorded",
  },
];
