"use client";

import { copy } from "../../../content/copy";
import { parseBold } from "@/lib/parse-bold";
import { pixelEvents } from "@/lib/fbpixel";
import { CHECKOUT_URLS } from "@/lib/constants";

export default function CTAFinal() {
  function handleCheckout(plan: "basico" | "vip") {
    pixelEvents.initiateCheckout(plan);
    window.open(CHECKOUT_URLS[plan], "_blank", "noopener,noreferrer");
  }

  return (
    <section
      aria-label="Llamada a la acción final"
      className="px-4 py-[80px] md:py-[100px]"
      style={{
        background: "linear-gradient(to bottom, #1A1A1A, #0D0D0D)",
      }}
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Título */}
        <h2 className="text-center text-2xl font-extrabold leading-tight text-white md:text-[42px]">
          {copy.ctaFinal.title}
        </h2>

        {/* Párrafos */}
        <div className="mx-auto mt-8 flex max-w-[720px] flex-col gap-5">
          {copy.ctaFinal.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-center text-base leading-[1.7] text-[#CCCCCC] md:text-lg"
            >
              {parseBold(paragraph)}
            </p>
          ))}
        </div>

        {/* Banner de urgencia */}
        <div className="mx-auto mt-12 max-w-2xl rounded-lg bg-[#F97316] px-4 py-4 text-center md:px-6 md:py-5">
          <p className="text-lg font-extrabold text-black">
            {copy.ctaFinal.urgencyBanner.title}
          </p>
          <p className="mt-1 text-sm font-medium text-black/80">
            {copy.ctaFinal.urgencyBanner.subtitle}
          </p>
        </div>

        {/* Botones */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button
            onClick={() => handleCheckout("basico")}
            className="w-full rounded-lg border-2 border-[#F97316] px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-[#F97316] transition-all duration-200 hover:bg-[#F97316] hover:text-black hover:scale-105 sm:w-auto sm:px-8 sm:text-base"
          >
            {copy.pricing.plans.basico.ctaText}
          </button>
          <button
            onClick={() => handleCheckout("vip")}
            className="w-full animate-pulse-orange rounded-lg bg-[#F97316] px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-black transition-all duration-200 hover:bg-[#EA580C] hover:scale-105 hover:shadow-lg hover:shadow-orange-500/40 sm:w-auto sm:px-8 sm:text-base"
          >
            {copy.pricing.plans.vip.ctaText}
          </button>
        </div>

        {/* Sello de confianza */}
        <p className="mt-6 text-center text-sm text-[#888888]">
          {copy.ctaFinal.trustSeal}
        </p>
      </div>
    </section>
  );
}
