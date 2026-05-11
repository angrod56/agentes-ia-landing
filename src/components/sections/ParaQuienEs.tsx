import { copy } from "../../../content/copy";
import { FadeIn } from "@/components/ui/FadeIn";

export default function ParaQuienEs() {
  return (
    <section
      aria-label="Para quién es este taller"
      className="bg-[#1A1A1A] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold leading-tight text-white md:text-[36px]">
            {copy.paraQuienEs.title}
          </h2>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {copy.paraQuienEs.profiles.map((profile, i) => (
            <FadeIn key={profile.title} delay={i * 0.12}>
              <div className="group flex h-full flex-col gap-4 rounded-xl border border-[rgba(249,115,22,0.2)] bg-[#0D0D0D] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(249,115,22,0.5)] hover:shadow-xl hover:shadow-orange-500/10 md:p-8">
                <span className="text-4xl transition-transform duration-300 group-hover:scale-110" role="img" aria-label={profile.title}>
                  {profile.icon}
                </span>
                <h3 className="text-xl font-bold text-white md:text-[22px]">{profile.title}</h3>
                <p className="text-sm leading-relaxed text-[#CCCCCC] md:text-base">{profile.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
