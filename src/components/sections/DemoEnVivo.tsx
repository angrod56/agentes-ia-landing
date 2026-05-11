import Image from "next/image";
import { copy } from "../../../content/copy";
import { FadeIn } from "@/components/ui/FadeIn";

export default function DemoEnVivo() {
  return (
    <section
      aria-label="Demo en vivo"
      className="bg-[#1A1A1A] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
          <FadeIn direction="right" className="flex flex-col gap-6 md:flex-1">
            <h2 className="text-2xl font-bold leading-tight text-white md:text-[36px]">
              {copy.demoEnVivo.title}
            </h2>
            <p className="text-base leading-[1.7] text-[#CCCCCC] md:text-lg">
              {copy.demoEnVivo.description}
            </p>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316]">
              <span>⚡</span>
              {copy.demoEnVivo.caption}
            </p>
          </FadeIn>

          <FadeIn direction="left" delay={0.1} className="relative md:flex-1">
            <div className="overflow-hidden rounded-2xl border border-[rgba(249,115,22,0.25)] shadow-2xl shadow-orange-500/10 transition-shadow duration-300 hover:shadow-orange-500/20">
              <Image
                src={copy.demoEnVivo.gifUrl}
                alt="Demo de agente de WhatsApp funcionando en tiempo real"
                width={600}
                height={400}
                unoptimized
                className="w-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
