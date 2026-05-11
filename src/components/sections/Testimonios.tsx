import TestimonialCard from "@/components/ui/TestimonialCard";
import { copy } from "../../../content/copy";

export default function Testimonios() {
  return (
    <section
      aria-label="Testimonios de estudiantes"
      className="bg-[#1A1A1A] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-[28px] font-bold leading-tight text-white md:text-[36px]">
          {copy.testimonios.title}
        </h2>

        {/* Mobile: scroll horizontal con snap. Desktop: grid 3 columnas */}
        <div className="mt-10 flex gap-6 overflow-x-auto pb-4 md:overflow-visible md:pb-0 md:grid md:grid-cols-3 snap-x snap-mandatory md:snap-none scroll-smooth">
          {copy.testimonios.items.map((item) => (
            <div key={item.name} className="snap-start md:snap-none">
              <TestimonialCard
                stars={item.stars}
                quote={item.quote}
                name={item.name}
                role={item.role}
                photo={item.photo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
