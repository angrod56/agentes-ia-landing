import Image from "next/image";
import Link from "next/link";
import { copy } from "../../../content/copy";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] px-4">
      {/* Bloque de cierre personal con foto destacada */}
      <div className="mx-auto max-w-[1200px] border-t border-[rgba(249,115,22,0.15)] py-16">
        <div className="flex flex-col items-center gap-8 text-center">

          {/* Foto grande con anillo naranja */}
          <div className="relative">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-[#F97316] to-[#EA580C] opacity-60 blur-sm" />
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-[3px] border-[#F97316]">
              <Image
                src={copy.footer.photo}
                alt="Foto de Angel Augusto Rodríguez"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          </div>

          {/* Firma */}
          <div className="flex flex-col gap-2">
            <p className="text-lg text-[#CCCCCC]">{copy.footer.signature}</p>
            <p className="text-2xl font-extrabold text-white">{copy.footer.name}</p>
            <p className="text-sm text-[#888888]">{copy.footer.role}</p>
          </div>

          {/* Separador */}
          <div className="h-px w-24 bg-[rgba(249,115,22,0.3)]" />

          {/* Links legales */}
          <nav
            aria-label="Links legales"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          >
            {copy.footer.links.map((link) => (
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#888888] transition-colors hover:text-[#F97316]"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm text-[#888888] transition-colors hover:text-[#F97316]"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Disclaimer + copyright */}
          <div className="flex flex-col gap-1">
            <p className="max-w-xl text-xs leading-relaxed text-[#888888]">
              {copy.footer.legal}
            </p>
            <p className="text-xs text-[#888888]">{copy.footer.copyright}</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
