import { copy } from "../../../content/copy";
import { FadeIn } from "@/components/ui/FadeIn";

export default function BulletsPromesa() {
  return (
    <section
      aria-label="Promesas del taller"
      className="bg-[#0D0D0D] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold leading-tight text-white md:text-[36px]">
            {copy.bulletsPromesa.title}
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {copy.bulletsPromesa.bullets.map((bullet, i) => (
            <FadeIn key={bullet.title} delay={i * 0.1}>
              <div className="group flex h-full gap-3 rounded-xl border border-[rgba(249,115,22,0.15)] bg-[#1A1A1A] p-4 transition-all duration-300 hover:border-[rgba(249,115,22,0.4)] hover:shadow-lg hover:shadow-orange-500/10 md:gap-4 md:p-6">
                <span className="mt-0.5 shrink-0 text-xl text-[#10B981]">✅</span>
                <div>
                  <p className="font-bold leading-snug text-white">{bullet.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#CCCCCC]">{bullet.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
