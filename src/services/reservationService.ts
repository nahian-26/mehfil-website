import { ReservationRequest, LeadStatus } from '../types/models';

/**
 * Reservation Service Layer
 * Designed for seamless migration from local portfolio demo storage
 * to Cloudflare Pages Functions (/api/reservations) + Cloudflare D1.
 */
export async function submitReservationRequestDemo(
  payload: Omit<ReservationRequest, 'id' | 'status'>
): Promise<ReservationRequest> {
  const refId = `RES-${Math.floor(3000 + Math.random() * 6000)}`;
  const record: ReservationRequest = {
    ...payload,
    id: refId,
    status: 'New' as LeadStatus
  };
  return Promise.resolve(record);
}
