import Image from "next/image";
import { copy } from "../../../content/copy";

export default function DemoEnVivo() {
  return (
    <section
      aria-label="Demo en vivo"
      className="bg-[#1A1A1A] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        {/* Mobile: texto arriba, GIF abajo. Desktop: 2 columnas */}
        <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-16">
          {/* Texto */}
          <div className="flex flex-col gap-6 md:flex-1">
            <h2 className="text-[28px] font-bold leading-tight text-white md:text-[36px]">
              {copy.demoEnVivo.title}
            </h2>
            <p className="text-base leading-[1.7] text-[#CCCCCC] md:text-lg">
              {copy.demoEnVivo.description}
            </p>
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#F97316]">
              <span>⚡</span>
              {copy.demoEnVivo.caption}
            </p>
          </div>

          {/* GIF */}
          <div className="relative md:flex-1">
            <div className="overflow-hidden rounded-2xl border border-[rgba(249,115,22,0.25)] shadow-2xl shadow-orange-500/10">
              <Image
                src={copy.demoEnVivo.gifUrl}
                alt="Demo de agente de WhatsApp funcionando en tiempo real"
                width={600}
                height={400}
                unoptimized
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
