
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
      className="w-full bg-white px-5 py-12 font-['Roboto',sans-serif] sm:px-8 sm:py-14 lg:px-6 lg:py-[60px]"
    >
      <div className="mx-auto w-full max-w-[1290px]">
        {/* Section heading */}
        <div className="mb-9 sm:mb-10">
          <span className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[2px] text-[#648A13]">
            <span className="h-[2px] w-5 bg-[#8BB630]" />
            Our operating principles
          </span>

          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-1.4px] text-[#19334E] sm:text-[44px] lg:text-[50px]">
            Technology + intelligence + enforcement.
          </h2>
        </div>

        {/* Principles cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
          {principles.map((principle, index) => (
            <article
              key={principle.title}
              className="group min-h-[205px] rounded-[6px] border border-[#D3E0ED] bg-white px-7 py-8 transition-colors duration-300 hover:border-[#8BB630] sm:min-h-[205px] sm:px-8"
            >
              <h3 className="text-[20px] font-bold leading-tight tracking-[-0.4px] text-[#19334E] transition-colors duration-300 group-hover:text-[#648A13]">
                {principle.title}
              </h3>

              <p className="mt-[17px] text-[14px] leading-[1.75] text-[#526B86]">
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
