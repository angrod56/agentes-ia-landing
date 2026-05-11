export const SITE_CONFIG = {
  name: "Agentes IA en 15 Minutos",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://agentes-ia.mdccompany.com",
  ogImage: "/og-image.jpg",
  company: "MDC Company LLC",
} as const;

export const CHECKOUT_URLS = {
  basico: process.env.NEXT_PUBLIC_HOTMART_BASICO || "#",
  vip: process.env.NEXT_PUBLIC_HOTMART_VIP || "#",
} as const;

export const ANALYTICS = {
  metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID || "",
  gaId: process.env.NEXT_PUBLIC_GA_ID || "",
} as const;

export const WHATSAPP = {
  number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "573001234567",
  message: encodeURIComponent(
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
      "Hola Angel, tengo una duda sobre el taller"
  ),
  get url() {
    return `https://wa.me/${this.number}?text=${this.message}`;
  },
} as const;

export const PRICES = {
  basico: { amount: 9, currency: "USD" },
  vip: { amount: 27, currency: "USD" },
} as const;
