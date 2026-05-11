declare global {
  interface Window {
    fbq: (
      type: "track" | "trackCustom",
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export const pixelEvents = {
  viewContent: () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "ViewContent", {
        content_name: "Landing Agentes IA 15min",
        content_category: "Infoproducto",
      });
    }
  },

  initiateCheckout: (plan: "basico" | "vip") => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "InitiateCheckout", {
        content_name: plan === "vip" ? "Plan VIP" : "Plan Básico",
        value: plan === "vip" ? 27 : 9,
        currency: "USD",
      });
    }
  },

  lead: () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    }
  },

  purchase: (plan: "basico" | "vip") => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Purchase", {
        value: plan === "vip" ? 27 : 9,
        currency: "USD",
      });
    }
  },
};
