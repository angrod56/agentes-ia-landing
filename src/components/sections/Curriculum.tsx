import ModuleCard from "@/components/ui/ModuleCard";
import { copy } from "../../../content/copy";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Curriculum() {
  return (
    <section
      aria-label="Contenido del taller"
      className="bg-[#0D0D0D] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold leading-tight text-white md:text-[36px]">
            {copy.curriculum.title}
          </h2>
        </FadeIn>

        <div className="mt-10 flex flex-col gap-4">
          {copy.curriculum.modules.map((module, i) => (
            <FadeIn key={module.title} delay={i * 0.08}>
              <ModuleCard
                index={i + 1}
                title={module.title}
                description={module.description}
                isVip={module.isVip}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
