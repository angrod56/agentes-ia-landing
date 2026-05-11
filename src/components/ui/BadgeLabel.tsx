import { cn } from "@/lib/utils";

interface BadgeLabelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "orange" | "dark";
}

export default function BadgeLabel({
  children,
  className,
  variant = "orange",
}: BadgeLabelProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest rounded-full px-4 py-1.5",
        {
          "bg-[#F97316]/15 text-[#F97316] border border-[#F97316]/30":
            variant === "orange",
          "bg-white/10 text-[#CCCCCC] border border-white/10":
            variant === "dark",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
