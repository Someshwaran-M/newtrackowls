import React from "react";

const features = [
  {
    number: "01",
    title: "Analyst verification",
    description: "Review the finding before taking action.",
    icon: "eye",
  },
  {
    number: "02",
    title: "Evidence-led enforcement",
    description: "Keep URLs, timestamps and supporting records.",
    icon: "file",
  },
  {
    number: "03",
    title: "Agreed priorities",
    description: "Define coverage, response targets and escalations.",
    icon: "clock",
  },
  {
    number: "04",
    title: "Transparent reporting",
    description: "See submitted actions and confirmed outcomes.",
    icon: "chart",
  },
];

function TechnologyIcon({ type }) {
  const icons = {
    eye: (
      <>
        <path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z" />
        <circle cx="12" cy="12" r="2.7" />
      </>
    ),
    file: (
      <>
        <path d="M7 3.5h7l4 4V21H7z" />
        <path d="M14 3.5V8h4M10 12h5M10 15h5M10 18h3" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3.5 2" />
      </>
    ),
    chart: (
      <>
        <path d="M4 20V11M10 20V5M16 20v-8M22 20H2" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

function HomeTechnology() {
  const cardGradient =
    "bg-gradient-to-br from-[#E5F8B9] via-[#C8ED65] to-[#ADD132]";

  return (
    <section
      id="home-technology"
      className="relative isolate w-full overflow-hidden border-y border-[#E7EDE2] bg-white font-['Roboto',sans-serif]"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-36 top-10 h-[340px] w-[340px] rounded-full bg-[#ADD132]/[0.08] blur-[100px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-[360px] w-[360px] rounded-full bg-[#ADD132]/[0.06] blur-[110px]" />

      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.20]"
        style={{
          backgroundImage:
            "radial-gradient(#A6B39D 0.65px, transparent 0.65px)",
          backgroundSize: "24px 24px",
          maskImage:
            "linear-gradient(90deg, transparent 0%, black 50%, transparent 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 py-6 sm:px-8 sm:py-6 lg:px-[60px] lg:py-[20px]">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:gap-20">
          {/* LEFT — Editorial headline */}
          <div className="relative min-w-0">
            

            <div>
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#8EAF20]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#617D17]">
                TECHNOLOGY + HUMAN INTELLIGENCE
              </span>
            </div>

            <h2 className="m-0 max-w-[850px] text-[36px] font-bold leading-[1.06] tracking-[-0.055em] sm:text-[48px] lg:text-[64px]">
              The right evidence.
              <span className="block text-[#7C9D18]">
              The right action.
              </span>
            </h2>
          </div>

            <p className="mb-0 mt-8 max-w-[410px] text-[13px] leading-[2] text-[#68746C] sm:text-[14px]">
              Automation supports discovery. Analyst review supports decisions. Enforcement operations connect verified findings to appropriate reporting channels.
            </p>

            <a
              href="/how-it-works"
              className="group mt-8 inline-flex items-center gap-3 text-[13px] font-bold text-[#526F0C] transition-colors duration-300 hover:text-[#172219]"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D6E0CF] transition-all duration-300 group-hover:border-[#ADD132] group-hover:bg-[#ADD132]">
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10h12m-5-5 5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>

              Explore our approach
            </a>

            {/* Decorative tracking line */}
            <div className="mt-12 flex max-w-[330px] items-center gap-2">
              <span className="h-[3px] w-14 bg-[#ADD132]" />
              <span className="h-[3px] w-5 bg-[#DCE4D8]" />
              <span className="h-[3px] w-2 bg-[#DCE4D8]" />
              <span className="h-px flex-1 bg-[#DCE4D8]" />
            </div>
          </div>

          {/* RIGHT — Uneven four-card layout */}
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-6 sm:grid-rows-[190px_190px] lg:grid-rows-[220px_220px] lg:gap-4">
            {/* Card 01 — Large top-left */}
            <article
              className={`group relative flex min-h-[210px] flex-col overflow-hidden rounded-lg border border-[#B3D968] ${cardGradient} p-5 text-[#152019] shadow-sm transition-all duration-300 hover:-translate-y-1 sm:col-span-4 sm:row-start-1 sm:min-h-0 lg:p-6`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#526F0C]/20 bg-white/40 text-[10px] font-bold">
                  {features[0].number}
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#42551E]/80">
                  Step {features[0].number}
                </span>
              </div>

              <h3 className="mt-4 text-[17px] font-bold leading-tight lg:text-[19px]">
                {features[0].title}
              </h3>

              <p className="mt-2 max-w-[300px] text-[12px] leading-[1.7] text-[#344225]/85">
                {features[0].description}
              </p>

              <div className="mt-auto flex items-center justify-between pt-4">
                <span className="text-[10px] text-[#42551E]/75">
                  Discovery and review
                </span>
                <TechnologyIcon type={features[0].icon} />
              </div>
            </article>

            {/* Card 02 — Small top-right */}
            <article
              className={`group flex min-h-[180px] flex-col overflow-hidden rounded-lg border border-[#B3D968] ${cardGradient} p-5 text-[#152019] transition-all duration-300 hover:-translate-y-1 sm:col-span-2 sm:row-start-1 sm:min-h-0 lg:p-5`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#42551E]/75">
                  {features[1].number}
                </span>
                <TechnologyIcon type={features[1].icon} />
              </div>

              <h3 className="mt-4 text-[14px] font-bold leading-tight">
                {features[1].title}
              </h3>

              <p className="mt-2 text-[11px] leading-[1.7] text-[#344225]/85">
                {features[1].description}
              </p>
            </article>

            {/* Card 03 — Small bottom-left */}
            <article
              className={`group flex min-h-[175px] flex-col overflow-hidden rounded-lg border border-[#B3D968] ${cardGradient} p-5 text-[#152019] transition-all duration-300 hover:-translate-y-1 hover:border-[#8BB630] sm:col-span-2 sm:row-start-2 sm:min-h-0 lg:p-5`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-[#42551E]/75">
                  {features[2].number}
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#8BB630]/30 bg-white/40 text-[#526F0C]">
                  <TechnologyIcon type={features[2].icon} />
                </span>
              </div>

              <h3 className="mt-4 text-[14px] font-bold leading-tight">
                {features[2].title}
              </h3>

              <p className="mt-2 text-[11px] leading-[1.7] text-[#344225]/85">
                {features[2].description}
              </p>
            </article>

            {/* Card 04 — Wide bottom-right */}
            <article
              className={`group flex min-h-[205px] flex-col overflow-hidden rounded-lg border border-[#B3D968] ${cardGradient} p-5 text-[#152019] transition-all duration-300 hover:-translate-y-1 sm:col-span-4 sm:row-start-2 sm:min-h-0 lg:p-6`}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#526F0C]/20 bg-white/40 text-[10px] font-bold">
                  {features[3].number}
                </span>

                <div>
                  <span className="block text-[9px] uppercase tracking-[0.12em] text-[#42551E]/75">
                    Step {features[3].number}
                  </span>

                  <h3 className="mt-1 text-[15px] font-bold leading-tight lg:text-[17px]">
                    {features[3].title}
                  </h3>
                </div>
              </div>

              <p className="mt-3 max-w-[420px] text-[11px] leading-[1.8] text-[#344225]/85 lg:text-[12px]">
                {features[3].description}
              </p>

              <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                <span className="text-[9px] uppercase tracking-[0.13em] text-[#42551E]/75">
                  Discovery · Verification · Action
                </span>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#152019] text-[#D9F99D] transition-transform group-hover:translate-x-1">
                  <TechnologyIcon type={features[3].icon} />
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTechnology;
