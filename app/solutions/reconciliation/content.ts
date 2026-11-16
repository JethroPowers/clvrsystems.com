import {
  Building2,
  ClipboardList,
  FileCheck2,
  FileSearch,
  FileSpreadsheet,
  FileText,
  GitCompareArrows,
  History,
  Landmark,
  Layers3,
  ListChecks,
  Package,
  ReceiptText,
  Route,
  ScanLine,
  Send,
  Smartphone,
  Store,
  Truck,
  WalletCards,
} from "lucide-react";

const kampalaVisit = {
  message: "In-person meetings available in Kampala during late November and December 2026.",
  endsAt: "2027-01-01T00:00:00+03:00",
};

export function kampalaMeetingNote(now = Date.now()) {
  return now < Date.parse(kampalaVisit.endsAt) ? kampalaVisit.message : null;
}

export const problems = [
  {
    icon: ReceiptText,
    title: "Payments without clear references",
    detail: "Customers may pay without including an invoice number or details that identify the payment.",
  },
  {
    icon: Layers3,
    title: "Records spread across systems",
    detail: "Bank statements, mobile-money activity, spreadsheets and accounting records can each tell a different part of the story.",
  },
  {
    icon: FileSearch,
    title: "Time spent investigating",
    detail: "Finance staff search multiple sources, contact colleagues and request evidence to explain a discrepancy.",
  },
  {
    icon: ClipboardList,
    title: "Limited visibility over open items",
    detail: "Investigations can stay open when ownership and follow-up are unclear.",
  },
];

export const stages = [
  {
    title: "Bring records together",
    diagramSources: [Landmark, Smartphone],
    diagramDestination: FileSpreadsheet,
    detail: "Start with supported file imports for authorised bank statements, mobile-money records, invoice data and accounting exports.",
  },
  {
    title: "Match incoming payments",
    diagramSources: [ReceiptText, FileText],
    diagramDestination: GitCompareArrows,
    detail: "Compare references, amounts, currencies and dates to identify clear and possible matches. Account for partial and split payments, provider fees and settlements.",
  },
  {
    title: "Investigate discrepancies",
    diagramSources: [FileSearch],
    diagramDestination: ListChecks,
    review: true,
    detail: "Flag unmatched receipts, missing references, reversals and unexplained differences. Assign investigations, request evidence and track outstanding questions.",
  },
  {
    title: "Resolve with evidence",
    diagramSources: [ListChecks, FileCheck2],
    diagramDestination: History,
    detail: "Review suggested matches, approve corrections and keep the evidence and explanation behind each decision.",
  },
];

export const capabilities = [
  {
    icon: ScanLine,
    title: "Payment matching",
    detail: "Connect customer receipts to invoices and expected balances.",
  },
  {
    icon: GitCompareArrows,
    title: "Cross-system reconciliation",
    detail: "Compare records across authorised financial and accounting sources.",
  },
  {
    icon: ListChecks,
    title: "Exception management",
    detail: "Investigate discrepancies with clear ownership and status tracking.",
  },
  {
    icon: Send,
    title: "Automated follow-up",
    detail: "Coordinate reminders and evidence requests through approved workflows.",
  },
  {
    icon: WalletCards,
    title: "Financial visibility",
    detail: "See which items are reconciled and which still need attention.",
  },
  {
    icon: History,
    title: "Evidence and audit history",
    detail: "Keep transaction references, source records, changes and approved decisions together.",
  },
];

export const sectors = [
  {
    icon: Package,
    title: "Distribution and wholesale",
    relatedIcon: ReceiptText,
    detail: "Match customer transfers to invoices across multiple payment channels and identify balances requiring investigation.",
  },
  {
    icon: Truck,
    title: "Logistics and freight",
    relatedIcon: Route,
    detail: "Link customer receipts to freight invoices and shipment-related charges so teams can identify payment discrepancies.",
  },
  {
    icon: Building2,
    title: "Multi-location businesses",
    relatedIcon: Store,
    detail: "Bring records from branches, payment channels and accounting teams into a consistent reconciliation process.",
  },
];

export const engagements = [
  {
    title: "Introductory meeting",
    detail: "A 20-minute discussion about collection channels, reconciliation processes and unresolved payment issues.",
  },
  {
    title: "Workflow assessment",
    detail: "If there is a clear fit, agree the scope of a closer assessment of your current process and available data.",
  },
  {
    title: "Potential pilot",
    detail: "If the business case is clear, define a narrow pilot with specific requirements, success measures and commercial terms.",
  },
];

export const questions = [
  {
    question: "Does CLVR Reconcile replace our accounting system?",
    answer: "The proposed solution is intended to work alongside your existing financial and accounting systems. We would assess compatibility with your organisation.",
  },
  {
    question: "Do we need to give CLVR access to our bank accounts?",
    answer: "You can request a meeting without sharing bank credentials. An initial pilot could use authorised exports, subject to agreed data handling and security requirements.",
  },
  {
    question: "Does the system move money?",
    answer: "The initial concept is limited to checking and resolving transaction records. Your organisation would continue to handle its payments.",
  },
  {
    question: "Can it work with mobile-money payments?",
    answer: "Mobile-money collections are a core use case we’re exploring. We would validate the available records and settlement information for each provider and organisation.",
  },
  {
    question: "Is the product already available?",
    answer: "CLVR is exploring suitable pilot engagements. We would assess your requirements and confirm what we can deliver before agreeing an implementation.",
  },
  {
    question: "What happens during the meeting?",
    answer: "We’ll discuss your collection channels, how you reconcile payments, what remains manual and whether there is a measurable problem worth solving.",
  },
  {
    question: "Do we need to prepare financial data?",
    answer: "No sensitive financial records are required for an introductory meeting.",
  },
];

export const reconciliationHeadline = [
  "Match customer payments.",
  "Resolve the differences.",
] as const;

export const reconciliationImageAlt =
  "CLVR Reconcile pilot discovery in Uganda. An illustrative bank transfer and mobile-money receipt match one invoice, leaving UGX 200,000 for Finance to review.";

export const illustration = {
  invoice: "INV-1842",
  expected: 2_000_000,
  receipts: [
    { name: "Bank transfer", reference: "BNK-0628", amount: 1_200_000 },
    { name: "Mobile money", reference: "MM-1179", amount: 600_000 },
  ],
  case: "REC-024",
  owner: "Finance",
};

const formatAmount = new Intl.NumberFormat("en-UG");

export function ugx(amount: number) {
  return `UGX ${formatAmount.format(amount)}`;
}

export const evidenced = illustration.receipts.reduce(
  (total, receipt) => total + receipt.amount,
  0,
);
export const difference = illustration.expected - evidenced;
