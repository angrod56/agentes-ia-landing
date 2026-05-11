import BadgeLabel from "@/components/ui/BadgeLabel";

interface ModuleCardProps {
  title: string;
  description: string;
  isVip: boolean;
  index: number;
}

export default function ModuleCard({
  title,
  description,
  isVip,
  index,
}: ModuleCardProps) {
  return (
    <div className="flex gap-4 rounded-xl border border-[rgba(249,115,22,0.15)] bg-[#1A1A1A] p-6 transition-all duration-200 hover:border-[rgba(249,115,22,0.4)]">
      <span className="mt-0.5 shrink-0 text-2xl" aria-hidden>
        📦
      </span>
      <div className="flex flex-col gap-2">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-base font-bold text-white md:text-lg">{title}</h3>
          {isVip && <BadgeLabel>🔥 SOLO VIP</BadgeLabel>}
        </div>
        <p className="text-sm leading-relaxed text-[#CCCCCC]">{description}</p>
      </div>
    </div>
  );
}
