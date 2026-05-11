import StepCard from "@/components/ui/StepCard";
import { copy } from "../../../content/copy";
import { FadeIn } from "@/components/ui/FadeIn";

export default function MetodoAgenteEn15() {
  return (
    <section
      aria-label="El método Agente en 15"
      className="bg-[#1A1A1A] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#F97316]">
            {copy.metodoAgenteEn15.preTitle}
          </p>
          <h2 className="mt-3 text-center text-2xl font-bold leading-tight text-white md:text-[36px]">
            {copy.metodoAgenteEn15.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-[#CCCCCC] md:text-lg">
            {copy.metodoAgenteEn15.subtitle}
          </p>
        </FadeIn>

        <div className="mt-12 flex flex-col gap-6 md:flex-row">
          {copy.metodoAgenteEn15.steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.12}>
              <StepCard
                number={step.number}
                title={step.title}
                time={step.time}
                description={step.description}
              />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="mt-10 text-center text-lg font-semibold text-[#F97316] md:text-[22px]">
            {copy.metodoAgenteEn15.closingPhrase}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
