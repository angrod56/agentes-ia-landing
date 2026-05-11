"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CHECKOUT_URLS } from "@/lib/constants";
import { pixelEvents } from "@/lib/fbpixel";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 700);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleVip() {
    pixelEvents.initiateCheckout("vip");
    window.open(CHECKOUT_URLS.vip, "_blank", "noopener,noreferrer");
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 32 }}
          className="fixed bottom-0 left-0 right-0 z-40 border-t border-[rgba(249,115,22,0.25)] bg-[#0D0D0D]/90 px-4 py-3 backdrop-blur-md"
        >
          <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
            <div className="hidden flex-col sm:flex">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F97316]">
                Oferta de lanzamiento
              </p>
              <p className="text-sm text-[#CCCCCC]">
                Plan VIP · Acceso de por vida ·{" "}
                <span className="font-bold text-white">$27 USD</span>
              </p>
            </div>
            <button
              onClick={handleVip}
              className="animate-pulse-orange w-full rounded-lg bg-[#F97316] px-6 py-3 text-sm font-extrabold uppercase tracking-wide text-black transition-all duration-200 hover:bg-[#EA580C] hover:shadow-lg hover:shadow-orange-500/40 sm:w-auto"
            >
              🔥 Quiero el Plan VIP — $27 HOY
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
