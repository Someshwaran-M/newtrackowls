
import React from "react";

const principles = [
  {
    title: "Focused scope",
    description:
      "Begin with the assets, rights, channels and time windows that matter to your business. Document expectations before work starts.",
  },
  {
    title: "Careful verification",
    description:
      "Combine discovery workflows with analyst review. Preserve the evidence behind a decision before proceeding with an authorized complaint.",
  },
  {
    title: "Visible outcomes",
    description:
      "Keep submitted actions separate from confirmed removals. Report pending cases and recurring sources so the next review has useful context.",
  },
];

function AboutPrinciples() {
  return (
    <section
      id="about-principles"
      className="relative w-full overflow-hidden bg-[#EAF3F9] px-3 py-4 font-['Roboto',sans-serif] sm:px-5 sm:py-6 lg:px-[40px] lg:py-5"
    >
      {/* Main light blue-grey panel */}
      <div className="relative isolate mx-auto w-full max-w-[1350px] overflow-hidden rounded-[18px] border border-[#D5DEDC] bg-[#D3DCDA] px-5 py-7 min-[400px]:px-6 sm:px-8 sm:py-9 lg:px-[60px] lg:py-[60px]">
        {/* Subtle background texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(255,255,255,0.8) 0.8px, transparent 1px),
              radial-gradient(circle, rgba(139,182,48,0.25) 0.7px, transparent 1px)
            `,
            backgroundSize: "13px 13px, 19px 19px",
            backgroundPosition: "0 0, 7px 9px",
            maskImage:
              "radial-gradient(ellipse at 70% 45%, black 0%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 70% 45%, black 0%, transparent 75%)",
          }}
        />

        {/* Heading */}
        <div className="mb-7 sm:mb-9 lg:mb-[43px]">
          <span className="mb-5 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[1.6px] text-[#56810D] min-[400px]:text-[11px] sm:mb-6 sm:text-[12px] sm:tracking-[2px] lg:mb-[30px] lg:text-[14px]">
            <span className="h-[2px] w-5 shrink-0 bg-[#8BB630]" />
            Our operating principles
          </span>

          <h2 className="max-w-[1250px] text-[32px] font-bold leading-[1.12] tracking-[-1.2px] text-[#142D47] min-[400px]:text-[35px] sm:text-[42px] sm:tracking-[-1.5px] md:text-[48px] lg:text-[62px] lg:leading-[1.15] lg:tracking-[-2px]">
            Technology + intelligence + enforcement.
          </h2>
        </div>

        {/* Principle cards */}
        <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-[28px]">
          {principles.map((principle) => (
            <article
              key={principle.title}
              className="flex min-w-0 flex-col rounded-[17px] border border-[#C8D5D1] bg-[#E1E7E3] px-5 py-6 transition-colors duration-300 hover:border-[#8BB630] min-[400px]:px-6 sm:px-7 sm:py-7 lg:min-h-[278px] lg:rounded-[20px] lg:px-[35px] lg:py-[34px]"
            >
              <h3 className="text-[19px] font-bold leading-[1.3] tracking-[-0.45px] text-[#142D47] min-[400px]:text-[20px] sm:text-[22px] lg:text-[26px]">
                {principle.title}
              </h3>

              <p className="mt-3 text-[14px] leading-[1.75] text-[#536B7B] min-[400px]:text-[14px] sm:mt-4 sm:text-[15px] sm:leading-[1.8] lg:mt-[19px] lg:text-[19px] lg:leading-[1.65]">
                {principle.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPrinciples;
