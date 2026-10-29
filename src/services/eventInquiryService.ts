import { EventInquiryLead, LeadStatus } from '../types/models';

/**
 * Event Inquiry Service Layer
 * Qualifies BDT event budget ranges, guest counts, and space selection.
 * Ready for Cloudflare Pages Functions (/api/event-inquiries) + Cloudflare D1.
 */
export async function submitEventInquiryDemo(
  payload: Omit<EventInquiryLead, 'id' | 'status'>
): Promise<EventInquiryLead> {
  const refId = `OCC-${Math.floor(9500 + Math.random() * 400)}`;
  const record: EventInquiryLead = {
    ...payload,
    id: refId,
    status: 'New' as LeadStatus
  };
  return Promise.resolve(record);
}
