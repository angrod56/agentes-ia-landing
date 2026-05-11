interface StepCardProps {
  number: string;
  title: string;
  time: string;
  description: string;
}

export default function StepCard({
  number,
  title,
  time,
  description,
}: StepCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-[rgba(249,115,22,0.2)] bg-[#0D0D0D] p-5 md:p-8 md:flex-1">
      <span className="text-4xl font-extrabold leading-none text-[#F97316] opacity-60 md:text-5xl">
        {number}
      </span>
      <div className="flex items-center gap-3">
        <h3 className="text-lg font-extrabold text-white md:text-[22px]">{title}</h3>
        <span className="rounded-full bg-[#F97316]/15 px-3 py-0.5 text-xs font-semibold text-[#F97316]">
          {time}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-[#CCCCCC] md:text-base">
        {description}
      </p>
    </div>
  );
}
