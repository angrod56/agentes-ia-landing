"use client";

import { useEffect } from "react";
import BadgeLabel from "@/components/ui/BadgeLabel";
import Button from "@/components/ui/Button";
import { copy } from "../../../content/copy";
import { pixelEvents } from "@/lib/fbpixel";

export default function Hero() {
  useEffect(() => {
    pixelEvents.viewContent();
  }, []);

  function handleCTA() {
    pixelEvents.initiateCheckout("basico");
    const pricing = document.getElementById("pricing");
    if (pricing) {
      pricing.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-[#0D0D0D] px-4 py-16 md:py-24"
    >
      {/* Radial gradient naranja sutil al centro */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249,115,22,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Badge */}
        <div className="flex justify-center animate-fade-in-up mb-6">
          <BadgeLabel>{copy.hero.badge}</BadgeLabel>
        </div>

        {/* H1 */}
        <h1
          className="animate-fade-in-up text-center text-[26px] font-extrabold leading-tight tracking-tight text-white sm:text-[32px] md:text-[52px]"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          {copy.hero.title.part1}
          <span className="text-[#F97316]">{copy.hero.title.highlight}</span>
          {copy.hero.title.part2}
        </h1>

        {/* Subtítulo */}
        <p
          className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-[#CCCCCC] md:text-lg"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          {copy.hero.subtitle}
        </p>

        {/* CTA principal */}
        <div
          className="animate-fade-in-up mt-10 flex flex-col items-center gap-3"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <Button
            variant="primary"
            size="lg"
            onClick={handleCTA}
            className="animate-pulse-orange text-base font-extrabold uppercase tracking-wide md:text-lg"
          >
            {copy.hero.ctaText}
          </Button>
          <p className="text-sm text-[#888888]">{copy.hero.ctaSubtext}</p>
        </div>

        {/* Trust bar */}
        <div
          className="animate-fade-in-up mx-auto mt-10 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:gap-x-6"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          {copy.hero.trustBar.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-sm text-[#CCCCCC]"
            >
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
