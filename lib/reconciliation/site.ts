export const reconciliationPath = "/solutions/reconciliation";
export const reconciliationOrigin = "https://www.clvrsystems.com";
export const reconciliationUrl = new URL(reconciliationPath, reconciliationOrigin).href;
export const reconciliationEnquiryPath = "/api/reconciliation-enquiries";

export const reconciliationTitle =
  "Payment Reconciliation & Exception Management | CLVR Systems";
export const reconciliationDescription =
  "Explore how CLVR Reconcile could help businesses match customer payments, investigate discrepancies and improve collections visibility. Request a finance workflow meeting in Uganda.";

export const meetingSuccess =
  "Thank you. Your meeting request has been received. We’ll review the details and follow up to arrange a suitable time.";

export const meetingPhonePattern = String.raw`(?=(?:[^0-9]*[0-9]){6})\+?[0-9 .\(\)\-]{6,39}`;

export const meetingFormats = ["In person in Kampala", "Video call"] as const;

export const meetingFields = {
  fullName: { label: "Full name", limit: 100 },
  email: { label: "Work email", limit: 254 },
  company: { label: "Company name", limit: 160 },
  role: { label: "Role or job title", limit: 120 },
  phone: { label: "Phone / WhatsApp number", limit: 40 },
  industry: { label: "Industry", limit: 100 },
  challenge: { label: "Main reconciliation challenge", limit: 1000 },
  format: { label: "Preferred meeting format", limit: 40 },
  availability: { label: "Preferred date or availability", limit: 160 },
} as const;

export type MeetingField = keyof typeof meetingFields;
