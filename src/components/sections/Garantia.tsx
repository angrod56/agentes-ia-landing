import { copy } from "../../../content/copy";
import { parseBold } from "@/lib/parse-bold";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Garantia() {
  return (
    <section
      aria-label="Garantía de devolución"
      className="bg-[#0D0D0D] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <div className="mx-auto max-w-[800px] rounded-2xl border-2 border-[#F97316] bg-[#1A1A1A] p-5 shadow-xl shadow-orange-500/10 md:p-12">
            <h2 className="text-center text-xl font-bold leading-tight text-white md:text-[28px]">
              {copy.garantia.title}
            </h2>
            <div className="mt-6 flex flex-col gap-5">
              {copy.garantia.paragraphs.map((paragraph, i) => (
                <p key={i} className="text-center text-base leading-[1.7] text-[#CCCCCC] md:text-lg">
                  {parseBold(paragraph)}
                </p>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
