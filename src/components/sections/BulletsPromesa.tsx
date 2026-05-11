import { copy } from "../../../content/copy";

export default function BulletsPromesa() {
  return (
    <section
      aria-label="Promesas del taller"
      className="bg-[#0D0D0D] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-2xl font-bold leading-tight text-white md:text-[36px]">
          {copy.bulletsPromesa.title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {copy.bulletsPromesa.bullets.map((bullet) => (
            <div
              key={bullet.title}
              className="flex gap-3 rounded-xl border border-[rgba(249,115,22,0.15)] bg-[#1A1A1A] p-4 md:gap-4 md:p-6"
            >
              <span className="mt-0.5 shrink-0 text-xl text-[#10B981]">✅</span>
              <div>
                <p className="font-bold leading-snug text-white">
                  {bullet.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[#CCCCCC]">
                  {bullet.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
