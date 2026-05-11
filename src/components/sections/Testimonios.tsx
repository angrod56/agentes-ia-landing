import TestimonialCard from "@/components/ui/TestimonialCard";
import { copy } from "../../../content/copy";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Testimonios() {
  return (
    <section
      aria-label="Testimonios de estudiantes"
      className="bg-[#1A1A1A] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold leading-tight text-white md:text-[36px]">
            {copy.testimonios.title}
          </h2>
        </FadeIn>

        <div className="mt-10 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:snap-none">
          {copy.testimonios.items.map((item, i) => (
            <FadeIn key={item.name} delay={i * 0.12} className="snap-start md:snap-none">
              <TestimonialCard
                stars={item.stars}
                quote={item.quote}
                name={item.name}
                role={item.role}
                photo={item.photo}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
