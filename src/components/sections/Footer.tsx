import Image from "next/image";
import { copy } from "../../../content/copy";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[rgba(249,115,22,0.1)] px-4 py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 text-center">
        {/* Foto de Angel */}
        <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-[rgba(249,115,22,0.4)]">
          <Image
            src={copy.footer.photo}
            alt="Foto de Angel Augusto Rodríguez"
            fill
            className="object-cover"
            sizes="112px"
          />
        </div>

        {/* Firma */}
        <div className="flex flex-col gap-1">
          <p className="text-base text-[#CCCCCC]">{copy.footer.signature}</p>
          <p className="text-xl font-bold text-white">{copy.footer.name}</p>
          <p className="text-sm text-[#888888]">{copy.footer.role}</p>
        </div>

        {/* Links legales */}
        <nav aria-label="Links legales" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {copy.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#888888] transition-colors hover:text-[#F97316]"
              {...(link.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Disclaimer + copyright */}
        <div className="flex flex-col gap-2">
          <p className="max-w-xl text-xs leading-relaxed text-[#888888]">
            {copy.footer.legal}
          </p>
          <p className="text-xs text-[#888888]">{copy.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
