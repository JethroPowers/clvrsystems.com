import { submitMeetingRequest } from "@/lib/reconciliation/enquiry";

export const runtime = "nodejs";
export const maxDuration = 15;

export async function POST(request: Request) {
  return submitMeetingRequest(request);
}
