import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad — Agentes IA en 15 Minutos",
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#0D0D0D] px-4 py-20 text-white">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-[28px] font-extrabold text-white md:text-[36px]">
          Política de Privacidad
        </h1>
        <p className="mt-2 text-sm text-[#888888]">
          Última actualización: mayo de 2026
        </p>

        <div className="mt-10 flex flex-col gap-8 text-[#CCCCCC]">
          <Section title="1. Responsable del tratamiento">
            MDC Company LLC, representada por Angel Augusto Rodríguez, con
            domicilio en Medellín, Colombia.
          </Section>

          <Section title="2. Datos que recopilamos">
            Recopilamos los datos que proporcionas voluntariamente al realizar una
            compra (nombre, correo electrónico, método de pago) a través de la
            plataforma Hotmart. También recopilamos datos de navegación anónimos
            mediante Meta Pixel para optimizar nuestras campañas publicitarias.
          </Section>

          <Section title="3. Uso de los datos">
            Usamos tus datos exclusivamente para: (a) procesar tu compra y darte
            acceso al producto, (b) enviarte comunicaciones relacionadas con el
            taller, (c) mejorar nuestros anuncios mediante audiencias personalizadas
            en Meta.
          </Section>

          <Section title="4. Meta Pixel">
            Esta página utiliza el Pixel de Meta (Facebook) para medir el
            rendimiento de nuestros anuncios. Meta puede usar esta información
            conforme a su propia política de privacidad. Puedes gestionar tus
            preferencias de privacidad en{" "}
            <a
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F97316] hover:underline"
            >
              facebook.com/privacy
            </a>
            .
          </Section>

          <Section title="5. Compartición de datos">
            No vendemos ni compartimos tus datos personales con terceros, salvo los
            procesadores de pago (Hotmart) necesarios para completar tu transacción.
          </Section>

          <Section title="6. Tus derechos">
            Tienes derecho a acceder, rectificar o eliminar tus datos personales.
            Para ejercerlos, contáctanos a través de WhatsApp indicando tu
            solicitud.
          </Section>

          <Section title="7. Retención de datos">
            Conservamos tus datos mientras tu cuenta en Hotmart esté activa y
            durante el período de acceso al producto adquirido.
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
