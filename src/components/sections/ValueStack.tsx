import { copy } from "../../../content/copy";

export default function ValueStack() {
  return (
    <section
      aria-label="Valor del taller"
      className="bg-[#0D0D0D] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-[28px] font-bold leading-tight text-white md:text-[36px]">
          {copy.valueStack.title}
        </h2>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-xl border border-[rgba(249,115,22,0.2)]">
          {/* Filas de items */}
          {copy.valueStack.items.map((row, i) => (
            <div
              key={row.item}
              className="flex items-center justify-between gap-2 px-3 py-3 md:gap-4 md:px-6 md:py-4"
              style={{ background: i % 2 === 0 ? "#1A1A1A" : "#0D0D0D" }}
            >
              <span className="flex items-center gap-2 text-xs text-[#CCCCCC] md:gap-3 md:text-base">
                <span className="text-[#10B981]">✅</span>
                {row.item}
              </span>
              <span className="shrink-0 font-bold text-[#888888] line-through">
                {row.value}
              </span>
            </div>
          ))}

          {/* Fila total */}
          <div className="flex items-center justify-between gap-2 bg-[#F97316] px-3 py-4 md:gap-4 md:px-6 md:py-5">
            <span className="text-base font-extrabold text-black md:text-lg">
              Valor total
            </span>
            <div className="flex items-center gap-2 md:gap-4">
              <span className="text-sm font-extrabold text-black/50 line-through md:text-lg">
                {copy.valueStack.totalValue}
              </span>
              <span className="text-xl font-extrabold text-black md:text-3xl">
                {copy.valueStack.todayPrice} HOY
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
