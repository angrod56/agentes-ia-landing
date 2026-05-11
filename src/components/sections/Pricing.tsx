import PricingCard from "@/components/ui/PricingCard";
import { copy } from "../../../content/copy";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Pricing() {
  const { basico, vip } = copy.pricing.plans;

  return (
    <section
      id="pricing"
      aria-label="Planes y precios"
      className="bg-[#1A1A1A] px-4 py-[80px] md:py-[100px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#F97316]">
            {copy.pricing.preTitle}
          </p>
          <h2 className="mt-3 text-center text-2xl font-bold leading-tight text-white md:text-[36px]">
            {copy.pricing.title}
          </h2>
        </FadeIn>

        <div className="mt-16 flex flex-col gap-8 md:flex-row md:items-center md:gap-8">
          <FadeIn delay={0.1} className="md:flex-1">
            <PricingCard
              planType="basico"
              name={basico.name}
              tagline={basico.tagline}
              price={basico.price}
              currency={basico.currency}
              priceSubtext={basico.priceSubtext}
              features={basico.features}
              exclusions={basico.exclusions}
              ctaText={basico.ctaText}
              highlighted={basico.highlighted}
            />
          </FadeIn>
          <FadeIn delay={0.2} className="md:flex-1">
            <PricingCard
              planType="vip"
              name={vip.name}
              tagline={vip.tagline}
              price={vip.price}
              currency={vip.currency}
              priceSubtext={vip.priceSubtext}
              badge={vip.badge}
              features={vip.features}
              ctaText={vip.ctaText}
              ctaSubtext={vip.ctaSubtext}
              highlighted={vip.highlighted}
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
