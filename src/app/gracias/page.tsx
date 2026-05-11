"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { pixelEvents } from "@/lib/fbpixel";
import type { PlanType } from "@/types";
import { Suspense } from "react";

function GraciasContent() {
  const searchParams = useSearchParams();
  const plan = (searchParams.get("plan") as PlanType) ?? "vip";

  useEffect(() => {
    pixelEvents.purchase(plan);
  }, [plan]);

  return (
    <main className="min-h-screen bg-[#0D0D0D] px-4 py-20 text-white">
      <div className="mx-auto max-w-2xl text-center">
        {/* Icono de éxito */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#10B981]/15 text-5xl">
          ✅
        </div>

        <h1 className="text-[32px] font-extrabold leading-tight text-white md:text-[44px]">
          ¡Bienvenido al taller!
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-[#CCCCCC]">
          Tu compra fue procesada exitosamente. En los próximos minutos recibirás
          un correo de <span className="font-semibold text-[#F97316]">Hotmart</span> con
          tus datos de acceso.
        </p>

        {/* Pasos de acceso */}
        <div className="mt-12 flex flex-col gap-4 text-left">
          {[
            {
              step: "1",
              title: "Revisa tu correo electrónico",
              desc: "Hotmart te enviará un email con el enlace de acceso. Revisa también la carpeta de spam.",
            },
            {
              step: "2",
              title: "Crea tu cuenta en Hotmart",
              desc: 'Si es tu primera compra, haz clic en "Crear cuenta" con el mismo correo que usaste al pagar.',
            },
            {
              step: "3",
              title: "Accede al taller y empieza",
              desc: "Entra a Hotmart Club, busca \"Agentes IA en 15 Minutos\" y empieza el Módulo 1.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="flex gap-4 rounded-xl border border-[rgba(249,115,22,0.15)] bg-[#1A1A1A] p-6"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F97316] text-sm font-extrabold text-black">
                {item.step}
              </span>
              <div>
                <p className="font-bold text-white">{item.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#CCCCCC]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Soporte */}
        <p className="mt-10 text-sm text-[#888888]">
          ¿Problemas con el acceso?{" "}
          <a
            href="https://wa.me/573001234567?text=Hola%20Angel%2C%20acabo%20de%20comprar%20el%20taller%20y%20necesito%20ayuda%20con%20el%20acceso"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#F97316] hover:underline"
          >
            Escríbenos por WhatsApp
          </a>
        </p>
      </div>
    </main>
  );
}

export default function GraciasPage() {
  return (
    <Suspense>
      <GraciasContent />
    </Suspense>
  );
}
