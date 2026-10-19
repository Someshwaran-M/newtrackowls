
import React from "react";
import {
  Layers3,
  FileCheck,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Assets & case workspace",
    description:
      "Organize clients, protected assets, rights references and incoming findings. Link duplicate URLs to a consistent case record.",
    Icon: Layers3,
  },
  {
    number: "02",
    title: "Evidence & enforcement",
    description:
      "Bring screenshots, verification notes, analyst assignments, complaint references and status history into the same workflow.",
    Icon: FileCheck,
  },
  {
    number: "03",
    title: "Client reporting & intelligence",
    description:
      "Present case activity, pending actions, outcomes and recurring sources through client-specific reporting views.",
    Icon: ChartNoAxesColumnIncreasing,
  },
];

function PlatformModules() {
  return (
    <section
      id="platform-modules"
      className="w-full overflow-hidden bg-[#EAF3F9] px-3 py-7 font-['Roboto',sans-serif] sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-10 lg:py-16"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        {/* Heading and description */}
        <div className="mb-5 grid grid-cols-1 gap-3 sm:mb-8 md:mb-9 md:grid-cols-[1.3fr_0.7fr] md:items-end md:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[8px] font-bold uppercase tracking-[1.5px] text-[#648A13] sm:text-[9px] md:text-[10px] md:tracking-[2px]">
              <span className="h-[2px] w-4 bg-[#8BB630] md:w-5" />
              Planned platform modules
            </span>

            <h2 className="mt-3 text-[21px] font-bold leading-[1.12] tracking-[-0.65px] text-[#19334E] sm:text-[28px] sm:tracking-[-0.9px] md:mt-5 md:text-[36px] md:leading-[1.15] lg:text-[42px] lg:tracking-[-1.2px]">
              Connected records.
              <br />
              Clear responsibilities.
            </h2>
          </div>

          <p className="max-w-[360px] text-[10px] leading-[1.65] text-[#526B86] sm:text-[12px] md:justify-self-end md:text-[13px] md:leading-[1.8]">
            The TrackOwls platform concept connects three operational areas.
            These modules are planned capabilities, subject to product
            development.
          </p>
        </div>

        {/* Module cards */}
        <div className="grid grid-cols-1 gap-[18px] sm:gap-4 md:grid-cols-3 md:gap-4 lg:gap-[22px]">
          {modules.map(({ number, title, description, Icon }) => (
            <article
              key={number}
              className="group flex min-w-0 flex-col rounded-[8px] border border-[#CFDAD5] bg-[#E5EBE8] px-[14px] py-[13px] transition-colors duration-300 hover:border-[#B9D39C] sm:px-5 sm:py-5 md:min-h-[220px] md:rounded-[14px] md:px-5 md:py-6 lg:min-h-[234px] lg:px-[26px] lg:py-[27px]"
            >
              {/* Icon: top-left on mobile and desktop */}
              <div className="mb-[13px] flex items-center text-[#159DB8] md:mb-5">
                <Icon
                  size={15}
                  strokeWidth={1.6}
                  aria-hidden="true"
                  className="h-[15px] w-[15px] md:h-[21px] md:w-[21px]"
                />
              </div>

              <h3 className="text-[11px] font-bold leading-[1.5] tracking-[-0.15px] text-[#19334E] transition-colors duration-300 group-hover:text-[#648A13] sm:text-[13px] md:text-[16px] md:leading-[1.4] lg:text-[17px]">
                {title}
              </h3>

              <p className="mt-[7px] text-[9px] font-normal leading-[1.75] text-[#526B86] sm:text-[11px] md:mt-4 md:text-[12px] md:leading-[1.8] lg:text-[13px]">
                {description}
              </p>

              {/* Small bottom accent */}
              <div className="mt-3 pt-0.5 md:mt-auto md:pt-5">
                <div className="h-px w-5 bg-[#D2E1C7] transition-all duration-300 group-hover:w-9 group-hover:bg-[#8BB630] md:h-[2px] md:w-8 md:group-hover:w-14" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformModules;
