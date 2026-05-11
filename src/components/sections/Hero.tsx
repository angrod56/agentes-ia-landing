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
    if (pricing) pricing.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      aria-label="Hero"
      className="relative overflow-hidden bg-[#0D0D0D] px-4 py-16 md:py-24"
    >
      {/* Radial gradient naranja */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(249,115,22,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Orb 1 — arriba izquierda */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -left-20 top-10 h-[420px] w-[420px] rounded-full bg-[#F97316] opacity-[0.05] blur-[80px]"
      />
      {/* Orb 2 — abajo derecha */}
      <div
        aria-hidden
        className="animate-float-alt pointer-events-none absolute -right-24 bottom-0 h-[500px] w-[500px] rounded-full bg-[#EA580C] opacity-[0.05] blur-[100px]"
      />
      {/* Orb 3 — centro */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#F97316] opacity-[0.04] blur-[70px]"
        style={{ animationDelay: "3s" }}
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
