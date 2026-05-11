"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-[rgba(249,115,22,0.15)] bg-[#1A1A1A]">
      <button
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left transition-colors duration-150 hover:bg-[#222] md:gap-4 md:px-6 md:py-5"
      >
        <span className="font-semibold text-white">{question}</span>
        <span className="shrink-0 text-[#F97316]">
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>

      {/* Respuesta con transición de altura */}
      <div
        className="transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "400px" : "0px", overflow: "hidden" }}
      >
        <p className="border-t border-[rgba(249,115,22,0.1)] px-4 py-4 text-sm leading-relaxed text-[#CCCCCC] md:px-6 md:py-5 md:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}
