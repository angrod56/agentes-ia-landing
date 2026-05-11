"use client";

import { cn } from "@/lib/utils";
import { parseBold } from "@/lib/parse-bold";
import { CHECKOUT_URLS } from "@/lib/constants";
import { pixelEvents } from "@/lib/fbpixel";
import type { PlanType } from "@/types";

interface PricingCardProps {
  name: string;
  tagline: string;
  price: string;
  currency: string;
  priceSubtext: string;
  badge?: string;
  features: readonly string[];
  exclusions?: readonly string[];
  ctaText: string;
  ctaSubtext?: string;
  highlighted: boolean;
  planType: PlanType;
}

export default function PricingCard({
  name,
  tagline,
  price,
  currency,
  priceSubtext,
  badge,
  features,
  exclusions,
  ctaText,
  ctaSubtext,
  highlighted,
  planType,
}: PricingCardProps) {
  function handleCheckout() {
    pixelEvents.initiateCheckout(planType);
    window.open(CHECKOUT_URLS[planType], "_blank", "noopener,noreferrer");
  }

  return (
    <div
      className={cn(
        "relative flex flex-col rounded-2xl border p-8 transition-all duration-200",
        highlighted
          ? "border-[3px] border-[#F97316] bg-[#1A1A1A] shadow-2xl shadow-orange-500/20 md:scale-105"
          : "border border-[rgba(249,115,22,0.2)] bg-[#1A1A1A]"
      )}
    >
      {/* Badge VIP sobresaliente */}
      {badge && (
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <span className="whitespace-nowrap rounded-full bg-[#F97316] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-black shadow-lg shadow-orange-500/40">
            {badge}
          </span>
        </div>
      )}

      {/* Nombre del plan */}
      <p
        className={cn(
          "text-xs font-extrabold uppercase tracking-widest",
          highlighted ? "text-[#F97316]" : "text-[#888888]"
        )}
      >
        {name}
      </p>

      {/* Tagline */}
      <p className="mt-2 text-sm leading-snug text-[#CCCCCC]">{tagline}</p>

      {/* Precio */}
      <div className="mt-6 flex items-end gap-1">
        <span
          className={cn(
            "text-5xl font-extrabold leading-none",
            highlighted ? "text-[#F97316]" : "text-white"
          )}
        >
          {price}
        </span>
        <span className="mb-1 text-lg font-semibold text-[#888888]">
          {currency}
        </span>
      </div>
      <p className="mt-1 text-xs text-[#888888]">{priceSubtext}</p>

      {/* Separador */}
      <hr className="my-6 border-[rgba(249,115,22,0.15)]" />

      {/* Features */}
      <ul className="flex flex-col gap-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-[#CCCCCC]">
            <span className="mt-0.5 shrink-0 text-[#10B981]">✅</span>
            <span>{parseBold(feature)}</span>
          </li>
        ))}
      </ul>

      {/* Exclusions */}
      {exclusions && exclusions.length > 0 && (
        <ul className="mt-4 flex flex-col gap-3">
          {exclusions.map((exclusion, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-sm text-[#888888]"
            >
              <span className="mt-0.5 shrink-0">❌</span>
              <span>{exclusion}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      <div className="mt-8 flex flex-col gap-3">
        <button
          onClick={handleCheckout}
          className={cn(
            "w-full rounded-lg py-4 text-base font-extrabold uppercase tracking-wide transition-all duration-200 hover:scale-105 active:scale-100",
            highlighted
              ? "animate-pulse-orange bg-[#F97316] text-black hover:bg-[#EA580C] hover:shadow-lg hover:shadow-orange-500/40"
              : "border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-black"
          )}
        >
          {ctaText}
        </button>
        {ctaSubtext && (
          <p className="text-center text-xs leading-relaxed text-[#888888]">
            {ctaSubtext}
          </p>
        )}
      </div>
    </div>
  );
}
