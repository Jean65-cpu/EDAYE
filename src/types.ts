// ──────────────────────────────────────────────
// Centralised domain types for the EDAYE project
// ──────────────────────────────────────────────

/** A single opening-hours row. */
export interface DayHours {
  day: string;
  hours: string;
  closed?: boolean;
  highlight?: boolean;
}

/** One service inside a category. */
export interface Service {
  label: string;
  price: string;
}

/** A group of services (e.g. "Coiffure Dame"). */
export interface ServiceCategory {
  id: string;
  title: string;
  items: Service[];
}

/** A packaged "bouquet" deal. */
export interface Bouquet {
  id: string;
  name: string;
  description: string;
  price: string;
  recommended?: boolean;
}

/** A phone-number entry with display & tel formats. */
export interface PhoneEntry {
  display: string;
  tel: string;
}

/** All salon contact details. */
export interface ContactInfo {
  address: string;
  phones: PhoneEntry[];
  email: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  googleReviews: string;
}

/** Brand identity constants. */
export interface BrandInfo {
  name: string;
  full: string;
  tagline: string;
  promise: string;
  reassurance: string;
}

/** Beauty-tip data used in the BeautyTip section. */
export interface BeautyTipData {
  title: string;
  intro: string;
  steps: string[];
}

/** A single client review. */
export interface Review {
  name: string;
  text: string;
  service: string;
}
