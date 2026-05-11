"use client";

import { copy } from "../../../content/copy";
import { parseBold } from "@/lib/parse-bold";
import { pixelEvents } from "@/lib/fbpixel";
import { CHECKOUT_URLS } from "@/lib/constants";
import { FadeIn } from "@/components/ui/FadeIn";

export default function CTAFinal() {
  function handleCheckout(plan: "basico" | "vip") {
    pixelEvents.initiateCheckout(plan);
    window.open(CHECKOUT_URLS[plan], "_blank", "noopener,noreferrer");
  }

  return (
    <section
      aria-label="Llamada a la acción final"
      className="relative overflow-hidden px-4 py-[80px] md:py-[100px]"
      style={{ background: "linear-gradient(to bottom, #1A1A1A, #0D0D0D)" }}
    >
      {/* Orb de fondo */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#F97316] opacity-[0.05] blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className="text-center text-2xl font-extrabold leading-tight text-white md:text-[42px]">
            {copy.ctaFinal.title}
          </h2>
        </FadeIn>

        <div className="mx-auto mt-8 flex max-w-[720px] flex-col gap-5">
          {copy.ctaFinal.paragraphs.map((paragraph, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="text-center text-base leading-[1.7] text-[#CCCCCC] md:text-lg">
                {parseBold(paragraph)}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mx-auto mt-12 max-w-2xl rounded-lg bg-[#F97316] px-4 py-4 text-center md:px-6 md:py-5">
            <p className="text-base font-extrabold text-black md:text-lg">
              {copy.ctaFinal.urgencyBanner.title}
            </p>
            <p className="mt-1 text-sm font-medium text-black/80">
              {copy.ctaFinal.urgencyBanner.subtitle}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={() => handleCheckout("basico")}
              className="w-full rounded-lg border-2 border-[#F97316] px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-[#F97316] transition-all duration-200 hover:scale-105 hover:bg-[#F97316] hover:text-black sm:w-auto sm:px-8 sm:text-base"
            >
              {copy.pricing.plans.basico.ctaText}
            </button>
            <button
              onClick={() => handleCheckout("vip")}
              className="w-full animate-pulse-orange rounded-lg bg-[#F97316] px-6 py-4 text-sm font-extrabold uppercase tracking-wide text-black transition-all duration-200 hover:scale-105 hover:bg-[#EA580C] hover:shadow-lg hover:shadow-orange-500/40 sm:w-auto sm:px-8 sm:text-base"
            >
              {copy.pricing.plans.vip.ctaText}
            </button>
          </div>
          <p className="mt-6 text-center text-sm text-[#888888]">
            {copy.ctaFinal.trustSeal}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
