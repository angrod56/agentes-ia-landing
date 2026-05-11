"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

interface Sale {
  name: string;
  country: string;
  flag: string;
  plan: "VIP" | "Básico";
  time: string;
}

const BUYERS: Omit<Sale, "plan" | "time">[] = [
  { name: "Camila Rodríguez",   country: "Colombia",   flag: "🇨🇴" },
  { name: "Diego Martínez",     country: "México",     flag: "🇲🇽" },
  { name: "Valentina Torres",   country: "Argentina",  flag: "🇦🇷" },
  { name: "Sebastián López",    country: "Chile",      flag: "🇨🇱" },
  { name: "Mariana Flores",     country: "Perú",       flag: "🇵🇪" },
  { name: "Andrés Gómez",       country: "Venezuela",  flag: "🇻🇪" },
  { name: "Lucía Herrera",      country: "Ecuador",    flag: "🇪🇨" },
  { name: "Felipe Ramírez",     country: "España",     flag: "🇪🇸" },
  { name: "Isabella Castro",    country: "Colombia",   flag: "🇨🇴" },
  { name: "Carlos Mendoza",     country: "México",     flag: "🇲🇽" },
  { name: "Natalia Vargas",     country: "Argentina",  flag: "🇦🇷" },
  { name: "Juan Pablo Ríos",    country: "Uruguay",    flag: "🇺🇾" },
  { name: "Sofía Jiménez",      country: "Panamá",     flag: "🇵🇦" },
  { name: "Mateo Álvarez",      country: "Bolivia",    flag: "🇧🇴" },
  { name: "Daniela Moreno",     country: "Guatemala",  flag: "🇬🇹" },
  { name: "Alejandro Ruiz",     country: "Colombia",   flag: "🇨🇴" },
  { name: "Fernanda Ortiz",     country: "México",     flag: "🇲🇽" },
  { name: "Miguel Ángel Peña",  country: "Chile",      flag: "🇨🇱" },
  { name: "Gabriela Sánchez",   country: "Perú",       flag: "🇵🇪" },
  { name: "Tomás Ibáñez",       country: "España",     flag: "🇪🇸" },
];

const TIMES = ["hace 2 min", "hace 5 min", "hace 8 min", "hace 12 min", "hace 3 min"];

function randomPlan(): "VIP" | "Básico" {
  return Math.random() < 0.73 ? "VIP" : "Básico";
}

function randomFrom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

let usedIndexes: number[] = [];
function nextBuyer() {
  if (usedIndexes.length === BUYERS.length) usedIndexes = [];
  let idx: number;
  do { idx = Math.floor(Math.random() * BUYERS.length); }
  while (usedIndexes.includes(idx));
  usedIndexes.push(idx);
  return BUYERS[idx];
}

export default function SaleNotification() {
  const [current, setCurrent] = useState<Sale | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Primera notificación a los 6 segundos
    const first = setTimeout(() => showNext(), 6000);
    return () => clearTimeout(first);
  }, []);

  function showNext() {
    const buyer = nextBuyer();
    setCurrent({
      ...buyer,
      plan: randomPlan(),
      time: randomFrom(TIMES),
    });
    setVisible(true);

    // Ocultar a los 5s
    const hideTimer = setTimeout(() => {
      setVisible(false);
      // Siguiente notificación entre 9 y 16 segundos después
      const delay = 9000 + Math.random() * 7000;
      setTimeout(showNext, delay);
    }, 5000);

    return () => clearTimeout(hideTimer);
  }

  return (
    <div className="fixed bottom-24 left-3 z-50 w-[calc(100vw-1.5rem)] max-w-[300px] md:bottom-8 md:left-6 md:w-auto">
      <AnimatePresence>
        {visible && current && (
          <motion.div
            key={current.name + Date.now()}
            initial={{ opacity: 0, x: -60, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="flex items-start gap-3 rounded-xl border border-[rgba(249,115,22,0.25)] bg-[#1A1A1A] p-4 shadow-2xl shadow-black/50"
          >
            {/* Ícono */}
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F97316]/15">
              <ShoppingCart size={18} className="text-[#F97316]" />
            </div>

            {/* Contenido */}
            <div className="flex flex-col gap-0.5">
              <p className="text-xs font-bold leading-snug text-white">
                {current.name}
              </p>
              <p className="text-xs text-[#CCCCCC]">
                {current.flag} {current.country}
              </p>
              <p className="mt-1 text-xs leading-snug text-[#CCCCCC]">
                acaba de comprar el{" "}
                <span className="font-bold text-[#F97316]">
                  Plan {current.plan}
                </span>
              </p>
              <p className="mt-0.5 text-[10px] text-[#888888]">{current.time}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
