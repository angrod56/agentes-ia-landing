import FAQItem from "@/components/ui/FAQItem";
import { copy } from "../../../content/copy";
import { FadeIn } from "@/components/ui/FadeIn";

export default function FAQs() {
  return (
    <section
      aria-label="Preguntas frecuentes"
      className="bg-[#0D0D0D] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold leading-tight text-white md:text-[36px]">
            {copy.faqs.title}
          </h2>
        </FadeIn>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
          {copy.faqs.items.map((item, i) => (
            <FadeIn key={item.question} delay={i * 0.06}>
              <FAQItem question={item.question} answer={item.answer} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
