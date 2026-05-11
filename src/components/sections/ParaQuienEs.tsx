import { copy } from "../../../content/copy";

export default function ParaQuienEs() {
  return (
    <section
      aria-label="Para quién es este taller"
      className="bg-[#1A1A1A] px-4 py-[60px] md:py-[80px]"
    >
      <div className="mx-auto max-w-[1200px]">
        <h2 className="text-center text-[28px] font-bold leading-tight text-white md:text-[36px]">
          {copy.paraQuienEs.title}
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {copy.paraQuienEs.profiles.map((profile) => (
            <div
              key={profile.title}
              className="group flex flex-col gap-4 rounded-xl border border-[rgba(249,115,22,0.2)] bg-[#0D0D0D] p-8 transition-all duration-200 hover:border-[rgba(249,115,22,0.5)] hover:shadow-lg hover:shadow-orange-500/10"
            >
              <span className="text-4xl" role="img" aria-label={profile.title}>
                {profile.icon}
              </span>
              <h3 className="text-[22px] font-bold text-white md:text-[24px]">
                {profile.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#CCCCCC] md:text-base">
                {profile.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
