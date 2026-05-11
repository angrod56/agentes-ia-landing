"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "@/lib/constants";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30 transition-all duration-200 animate-pulse-orange"
    >
      <MessageCircle size={28} strokeWidth={1.8} />
    </a>
  );
}
