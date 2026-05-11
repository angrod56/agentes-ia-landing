export type PlanType = "basico" | "vip";

export interface Plan {
  name: string;
  tagline: string;
  price: string;
  currency: string;
  priceSubtext: string;
  badge?: string;
  features: string[];
  exclusions?: string[];
  ctaText: string;
  ctaSubtext?: string;
  highlighted: boolean;
}

export interface Testimonial {
  stars: number;
  quote: string;
  name: string;
  role: string;
  photo: string;
}

export interface FAQEntry {
  question: string;
  answer: string;
}
