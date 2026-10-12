
import React from "react";

const features = [
  {
    number: "01",
    title: "Content & asset management",
    description:
      "Keep client, title, product and brand references alongside rights and authorization records.",
  },
  {
    number: "02",
    title: "Case management",
    description:
      "Create a traceable record for each finding, review and enforcement action.",
  },
  {
    number: "03",
    title: "Infringing URL tracking",
    description:
      "Record source links, discovery dates, channels and subsequent availability checks.",
  },
  {
    number: "04",
    title: "Evidence management",
    description:
      "Attach screenshots, notes and reference materials to the case they support.",
  },
  {
    number: "05",
    title: "Analyst assignment",
    description:
      "Assign review responsibilities and keep the handover history visible.",
  },
  {
    number: "06",
    title: "Enforcement tracking",
    description:
      "Record complaint references, escalations, pending reviews and confirmed changes.",
  },
  {
    number: "07",
    title: "SLA monitoring",
    description:
      "Track agreed internal response targets separately from third-party review times.",
  },
  {
    number: "08",
    title: "Duplicate detection",
    description:
      "Identify repeated URLs and connect them to existing records for analyst review.",
  },
  {
    number: "09",
    title: "Audit history",
    description:
      "Preserve who changed a case, what changed and when the decision was made.",
  },
  {
    number: "010",
    title: "Client dashboards",
    description:
      "Present the cases and reporting relevant to each client's engagement.",
  },
  {
    number: "011",
    title: "Platform analytics",
    description:
      "Compare verified activity and outcomes across the monitored channels.",
  },
  {
    number: "012",
    title: "Structured reporting",
    description:
      "Prepare consistent reports by asset, period, channel and case status.",
  },
];

function PlatformDesign() {
  return (
    <section
      id="platform-design"
      className="w-full bg-white px-5 py-12 font-['Roboto',sans-serif] sm:px-8 sm:py-14 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="mb-8 grid grid-cols-1 items-center gap-5 md:grid-cols-[1.4fr_0.6fr] md:gap-10">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-1.2px] text-[#15334E] sm:text-[42px] lg:text-[44px]">
            Designed around operations.
          </h2>

          <p className="max-w-[330px] text-[13px] leading-[1.7] text-[#45637F] md:justify-self-end">
            Planned capabilities for a traceable workflow from discovery
            through reporting.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-[13px] sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.number}
              className="group min-h-[164px] rounded-[4px] border border-[#D3E1EF] bg-transparent px-[19px] py-[21px] transition-all duration-300 hover:border-[#8BB630] hover:bg-white/70"
            >
              <span className="text-[9px] font-normal tracking-[0.2px] text-[#45637F]">
                {feature.number}
              </span>

              <h3 className="mt-[19px] text-[14px] font-bold leading-[1.4] tracking-[-0.2px] text-[#15334E] transition-colors duration-300 group-hover:text-[#648A13]">
                {feature.title}
              </h3>

              <p className="mt-[10px] text-[12px] leading-[1.65] text-[#45637F]">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformDesign;
