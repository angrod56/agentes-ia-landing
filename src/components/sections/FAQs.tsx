import FAQItem from "@/components/ui/FAQItem";
import { copy } from "../../../content/copy";

export default function FAQs() {
  return (
    <section
      aria-label="Preguntas frecuentes"
      className="bg-[#0D0D0D] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-[28px] font-bold leading-tight text-white md:text-[36px]">
          {copy.faqs.title}
        </h2>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-3">
          {copy.faqs.items.map((item) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
