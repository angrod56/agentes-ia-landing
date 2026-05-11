import Image from "next/image";

interface TestimonialCardProps {
  stars: number;
  quote: string;
  name: string;
  role: string;
  photo: string;
}

export default function TestimonialCard({
  stars,
  quote,
  name,
  role,
  photo,
}: TestimonialCardProps) {
  return (
    <div className="flex shrink-0 flex-col gap-5 rounded-xl border border-[rgba(249,115,22,0.15)] bg-[#0D0D0D] p-5 w-[82vw] min-w-[270px] max-w-[360px] md:w-auto md:max-w-none md:p-6">
      {/* Foto + estrellas */}
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-[#F97316]">
          <Image
            src={photo}
            alt={`Foto de ${name}`}
            fill
            className="object-cover"
            sizes="64px"
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex gap-0.5" aria-label={`${stars} estrellas`}>
            {Array.from({ length: stars }).map((_, i) => (
              <span key={i} className="text-lg text-[#F97316]" aria-hidden>
                ★
              </span>
            ))}
          </div>
          <p className="text-sm font-bold text-white">{name}</p>
          <p className="text-xs text-[#888888]">{role}</p>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-sm leading-relaxed text-[#CCCCCC] md:text-base">
        &ldquo;{quote}&rdquo;
      </blockquote>
    </div>
  );
}
