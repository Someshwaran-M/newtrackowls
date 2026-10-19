
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
      className="relative isolate w-full overflow-hidden bg-[#EAF3F9] px-2 py-3 font-['Roboto',sans-serif] sm:px-4 sm:py-5 lg:px-8 lg:py-5"
    >
      {/* Subtle lime particle background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(circle, #8BB630 1px, transparent 1.5px),
            radial-gradient(circle, rgba(213,245,31,0.7) 0.8px, transparent 1.4px),
            radial-gradient(circle, rgba(255,255,255,0.22) 0.7px, transparent 1.2px)
          `,
          backgroundSize: "79px 83px, 113px 107px, 47px 53px",
          backgroundPosition: "15px 20px, 45px 61px, 22px 28px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, transparent 20%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, transparent 20%, black 100%)",
        }}
      />

      {/* Main light panel */}
      <div className="relative z-10 mx-auto w-full max-w-[1350px] overflow-hidden rounded-[15px] border border-[#C8D5D0] bg-[#D5DEDA] px-5 py-7 sm:rounded-[18px] sm:px-7 sm:py-9 md:px-9 md:py-10 lg:px-[45px] lg:py-[48px]">
        {/* Soft texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.8) 0.7px, transparent 1.2px)",
            backgroundSize: "7px 7px",
            maskImage:
              "radial-gradient(ellipse at 75% 55%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 75% 55%, black, transparent 75%)",
          }}
        />

        <div className="relative z-10">
          {/* Heading */}
          <div className="mb-6 grid grid-cols-1 gap-4 sm:mb-8 sm:gap-5 md:grid-cols-[1.4fr_0.8fr] md:items-start md:gap-8 lg:mb-[42px] lg:gap-10">
            <h2 className="max-w-[700px] text-[30px] font-bold leading-[1.16] tracking-[-1.1px] text-[#19334E] min-[400px]:text-[32px] sm:text-[36px] md:text-[36px] lg:text-[46px] lg:leading-[1.12] lg:tracking-[-1.6px]">
              Designed around operations.
            </h2>

            <p className="max-w-[390px] text-[13px] leading-[1.75] text-[#526B86] sm:text-[14px] md:justify-self-end md:pt-1 lg:text-[15px]">
              Planned capabilities for a traceable workflow from discovery
              through reporting.
            </p>
          </div>

          {/* Feature cards: 2 columns on mobile, 4 on desktop */}
          <div className="grid grid-cols-2 items-stretch gap-2.5 sm:gap-3 md:gap-3.5 lg:grid-cols-4 lg:gap-4">
            {features.map((feature) => (
              <article
                key={feature.number}
                className="group flex min-w-0 flex-col rounded-[13px] border border-[#C8D5D0] bg-[#E2E9E5] px-3.5 py-4 transition-colors duration-300 hover:border-[#A6C47A] hover:bg-[#EAF0EC] min-[400px]:px-4 sm:rounded-[15px] sm:px-5 sm:py-5 lg:min-h-[178px] lg:px-[26px] lg:py-[24px]"
              >
                {/* Number */}
                <span className="text-[10px] font-normal leading-4 text-[#607D96] sm:text-[11px]">
                  {feature.number}
                </span>

                {/* Title */}
                <h3 className="mt-5 text-[13px] font-bold leading-[1.25] tracking-[-0.2px] text-[#19334E] min-[400px]:text-[14px] sm:mt-6 sm:text-[15px] sm:leading-[1.35] lg:mt-[21px] lg:text-[16px]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-[12px] font-normal leading-[1.75] text-[#526B86] min-[400px]:text-[12px] sm:mt-3.5 sm:text-[13px] sm:leading-[1.75] lg:text-[13px]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformDesign;
