import BadgeLabel from "@/components/ui/BadgeLabel";

export default function BonusWhatsApp() {
  return (
    <section
      aria-label="Bono exclusivo grupo WhatsApp"
      className="bg-[#0D0D0D] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <div className="relative overflow-hidden rounded-2xl border border-[#25D366]/30 bg-[#0A1F14] px-6 py-10 md:px-14 md:py-14">

          {/* Glow verde de fondo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(37,211,102,0.12) 0%, transparent 70%)",
            }}
          />

          <div className="relative flex flex-col items-center gap-6 text-center">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/15 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#25D366]">
              🎁 BONO EXCLUSIVO — TODOS LOS COMPRADORES
            </span>

            {/* Ícono WhatsApp */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#25D366]/15 text-5xl border border-[#25D366]/30">
              💬
            </div>

            {/* Título */}
            <h2 className="text-[26px] font-extrabold leading-tight text-white md:text-[36px]">
              Acceso al Grupo Privado de WhatsApp{" "}
              <span className="text-[#25D366]">+ Bono Sorpresa</span>
            </h2>

            {/* Descripción */}
            <p className="mx-auto max-w-2xl text-base leading-[1.7] text-[#CCCCCC] md:text-lg">
              Cada persona que compra el taller hoy recibe acceso inmediato a nuestro{" "}
              <strong className="text-white">grupo privado de WhatsApp</strong>, donde publicamos
              recursos exclusivos, actualizaciones anticipadas y un{" "}
              <strong className="text-[#25D366]">bono sorpresa</strong> que
              solo conocerás al ingresar.
            </p>

            {/* Features del grupo */}
            <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3">
              {[
                {
                  icon: "⚡",
                  title: "Acceso inmediato",
                  desc: "Recibes el link del grupo en cuanto confirmas tu compra.",
                },
                {
                  icon: "🔒",
                  title: "Solo compradores",
                  desc: "Grupo cerrado. No se vende por separado. Solo entrando hoy.",
                },
                {
                  icon: "🎁",
                  title: "Bono sorpresa",
                  desc: "Un recurso adicional que revelamos solo dentro del grupo.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex flex-col items-center gap-2 rounded-xl border border-[#25D366]/20 bg-[#25D366]/5 p-5 text-center"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <p className="font-bold text-white">{item.title}</p>
                  <p className="text-sm leading-relaxed text-[#CCCCCC]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Nota de urgencia */}
            <p className="mt-2 text-sm text-[#888888]">
              Este bono es por tiempo limitado y puede retirarse sin previo aviso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
