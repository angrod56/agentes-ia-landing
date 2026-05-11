import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones — Agentes IA en 15 Minutos",
  robots: { index: false, follow: false },
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] px-4 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-[28px] font-extrabold text-white md:text-[36px]">
          Términos y Condiciones
        </h1>
        <p className="mt-2 text-sm text-[#888888]">
          Última actualización: mayo de 2026
        </p>

        <div className="mt-10 flex flex-col gap-8 text-[#CCCCCC]">
          <Section title="1. Aceptación de los términos">
            Al adquirir el taller &ldquo;Agentes IA en 15 Minutos&rdquo; aceptas
            estos términos en su totalidad. Si no estás de acuerdo, no realices la
            compra.
          </Section>

          <Section title="2. Descripción del producto">
            El taller es un infoproducto digital distribuido a través de la
            plataforma Hotmart. El acceso es personal e intransferible. El Plan
            Básico otorga acceso por 12 meses; el Plan VIP otorga acceso de por
            vida.
          </Section>

          <Section title="3. Política de reembolso">
            Ofrecemos garantía de devolución del 100% durante los primeros 7 días
            calendario desde la compra, sin preguntas. Para solicitar el reembolso,
            escribe a través del soporte de Hotmart o contáctanos por WhatsApp.
          </Section>

          <Section title="4. Propiedad intelectual">
            Todo el contenido del taller — videos, plantillas, prompts y materiales
            — es propiedad exclusiva de MDC Company LLC. Queda prohibida su
            reproducción, distribución o reventa sin autorización escrita.
          </Section>

          <Section title="5. Limitación de responsabilidad">
            Los resultados mostrados son ejemplos reales pero no garantizan
            resultados idénticos. El éxito depende del esfuerzo, contexto y
            aplicación de cada usuario.
          </Section>

          <Section title="6. Contacto">
            Para cualquier consulta: a través de WhatsApp al número disponible en la
            página principal o vía Hotmart.
          </Section>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-sm text-[#F97316] hover:underline">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-lg font-bold text-white">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed md:text-base">{children}</p>
    </div>
  );
}
