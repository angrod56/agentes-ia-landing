"use client";

import { useEffect } from "react";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export default function GoogleAnalytics() {
  useEffect(() => {
    if (!GA_ID) return;

    // Inyectar gtag.js
    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Inicializar gtag en window
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer = (window as any).dataLayer || [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).gtag = function (...args: any[]) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).dataLayer.push(args);
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const gtag = (window as any).gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);
  }, []);

  return null;
}
