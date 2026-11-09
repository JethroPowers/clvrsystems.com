export type DiagramStep = {
  label: string;
  detail: string;
  title: string;
  description: string;
  path?: string[];
};

export type InsightDiagram = {
  kind: "decision" | "systems" | "cycle";
  title: string;
  caption: string;
  steps: DiagramStep[];
};

export const insightDiagrams = {
  "changing-situation": {
    kind: "decision",
    title: "The next step can change",
    caption:
      "Illustrative clinic review. A hold and its reason are useful outcomes. No message is sent in this example.",
    steps: [
      {
        label: "A signal",
        detail: "Return window approaching",
        title: "A reason to look",
        description:
          "Alex is approaching a return window. The record surfaces for attention, giving the operator a reason to check whether a follow-up is appropriate.",
      },
      {
        label: "A check",
        detail: "Review the latest information",
        title: "Check what changed",
        description:
          "The operator reviews the client’s history and a prepared draft. An existing booking changes the situation the draft was meant to address.",
      },
      {
        label: "A decision",
        detail: "Hold the follow-up",
        title: "Choose the useful action",
        description:
          "The operator holds the draft because the client has already booked. Sending another reminder would add no value to this example.",
      },
      {
        label: "A record",
        detail: "Already booked · reason saved",
        title: "Make the pause explainable",
        description:
          "The hold and its reason stay with the client record. Another operator can understand the decision without reconstructing the conversation.",
      },
    ],
  },
  "four-product-decisions": {
    kind: "systems",
    title: "Four decisions in view",
    caption:
      "Simplified product workflows. Verified shows design intent; MarginFlow is in development. Each product retains its own scope.",
    steps: [
      {
        label: "Emilia",
        detail: "Should this client be contacted?",
        title: "Review before outreach",
        description:
          "A return window brings a client into consideration. The team checks the history and contact preferences, then records whether to proceed with review, hold or stop.",
        path: ["Client", "Checks", "Review", "Decision"],
      },
      {
        label: "MarginFlow",
        detail: "Does this quote need a reminder?",
        title: "Let the reply change the plan",
        description:
          "The quote stays with its enquiry. A reply or a won or lost decision changes whether the next scheduled reminder should be sent.",
        path: ["Enquiry", "Quote", "Reply check", "Follow-up"],
      },
      {
        label: "Verified",
        detail: "Does the payment match the approval?",
        title: "Keep the comparison possible",
        description:
          "The design connects the request and approval to the payment record. The recipient, amount and reference provide the basis for a later check.",
        path: ["Request", "Approval", "Payment", "Check"],
      },
      {
        label: "Juris Global",
        detail: "What supports this option?",
        title: "Give research a route back",
        description:
          "Programme details lead into a comparison and shortlist. Sources and research notes help the reader revisit a claim and prepare questions for an adviser.",
        path: ["Explore", "Compare", "Sources", "Shortlist"],
      },
    ],
  },
  "from-task-to-system": {
    kind: "cycle",
    title: "Build from the work",
    caption:
      "CLVR’s design approach. The record informs the next review of the task; this is not a diagram of a shared backend.",
    steps: [
      {
        label: "The task",
        detail: "Name the work",
        title: "Start with something concrete",
        description:
          "Identify a task someone recognises, such as reviewing a follow-up or checking an unanswered quote. Give the product a specific problem to address.",
      },
      {
        label: "The decision",
        detail: "Expose what matters",
        title: "Find the information the choice needs",
        description:
          "Ask what the person needs to see before acting, and what could change their decision. Those answers determine the checks and information shown.",
      },
      {
        label: "The system",
        detail: "Make the choice usable",
        title: "Give the work a place to happen",
        description:
          "Bring the task, its information and review controls together. Make a hold, a request for more information and a completed review understandable states.",
      },
      {
        label: "The record",
        detail: "Keep the explanation",
        title: "Carry the learning forward",
        description:
          "Retain the decision and its reason for the next person. Use that history to ask whether the task or the interface needs to change.",
      },
    ],
  },
} satisfies Record<string, InsightDiagram>;

export type InsightDiagramId = keyof typeof insightDiagrams;

export function isDiagramId(value: string): value is InsightDiagramId {
  return Object.prototype.hasOwnProperty.call(insightDiagrams, value);
}
