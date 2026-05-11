"use client";

import { useEffect } from "react";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";

export default function MetaPixel() {
  useEffect(() => {
    if (!PIXEL_ID) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const w = window as any;
    if (w.fbq) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fbq: any = function (...args: any[]) {
      fbq.callMethod
        ? fbq.callMethod.apply(fbq, args)
        : fbq.queue.push(args);
    };
    w.fbq = fbq;
    w._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    fbq("init", PIXEL_ID);
    fbq("track", "PageView");
  }, []);

  return null;
}
