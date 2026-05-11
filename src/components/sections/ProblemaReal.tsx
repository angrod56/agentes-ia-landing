import { copy } from "../../../content/copy";
import { parseBold } from "@/lib/parse-bold";

export default function ProblemaReal() {
  return (
    <section
      aria-label="El problema real"
      className="bg-[#0D0D0D] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-[28px] font-bold leading-tight text-[#F97316] md:text-[36px]">
          {copy.problemaReal.title}
        </h2>

        <div className="mx-auto mt-10 flex max-w-[720px] flex-col gap-6">
          {copy.problemaReal.paragraphs.map((paragraph, i) => (
            <p
              key={i}
              className="text-base leading-[1.7] text-[#CCCCCC] md:text-lg"
            >
              {parseBold(paragraph)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
