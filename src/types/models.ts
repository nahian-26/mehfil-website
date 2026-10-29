export type LeadStatus =
  | 'New'
  | 'Contacted'
  | 'Proposal Sent'
  | 'Tentative'
  | 'Confirmed'
  | 'Closed';

export type MenuCategory =
  | 'Starters'
  | 'Signature Mains'
  | 'Grill & Fire'
  | 'Rice & Pasta'
  | 'Desserts'
  | 'Beverages';

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  price: number; // BDT
  featured: boolean;
  vegetarian: boolean;
  dietary: string[];
  desc: string;
  image: string;
}

export interface VenueConfigurations {
  banquet: string;
  imperial: string;
  cocktail: string;
  presentation: string;
}

export interface Venue {
  id: string;
  slug: string;
  name: string;
  eyebrow: string;
  capacity: number;
  minGuests: number;
  maxGuests: number;
  capacityLabel: string;
  primaryUse: string;
  shortDesc: string;
  longDesc: string;
  image: string;
  secondaryImage: string;
  accentColor: 'garnet' | 'teal' | 'cobalt' | 'coral';
  occasions: string[];
  eventTypes: string[];
  configurations: VenueConfigurations;
  features: string[];
  accessibility: string;
}

export interface ReservationRequest {
  id: string;
  date: string;
  time: string;
  period: 'Lunch' | 'Dinner';
  partySize: number;
  seating: string;
  occasion: string;
  guestName: string;
  contact: string;
  notes?: string;
  status: LeadStatus;
}

export interface EventInquiryLead {
  id: string;
  eventType: string;
  date: string;
  altDate?: string;
  timeOfDay: string;
  guests: number;
  venue: string;
  packageTier: string;
  diningStyle: string;
  services: string[];
  budget: string;
  clientName: string;
  clientEmail?: string;
  clientPhone?: string;
  notes: string;
  status: LeadStatus;
}
