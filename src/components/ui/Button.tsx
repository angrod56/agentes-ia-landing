"use client";

import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 cursor-pointer",
        "hover:scale-105 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100",
        {
          // primary — naranja sólido
          "bg-[#F97316] text-white hover:bg-[#EA580C] hover:shadow-lg hover:shadow-orange-500/30":
            variant === "primary",
          // secondary — outline naranja
          "border-2 border-[#F97316] text-[#F97316] hover:bg-[#F97316] hover:text-white":
            variant === "secondary",
          // ghost — sin borde
          "text-[#CCCCCC] hover:text-white hover:bg-white/10":
            variant === "ghost",
          // sizes
          "text-sm px-4 py-2": size === "sm",
          "text-base px-6 py-3": size === "md",
          "text-lg px-8 py-4": size === "lg",
          // full width
          "w-full": fullWidth,
        },
        className
      )}
    >
      {children}
    </button>
  );
}
