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
      className="w-full bg-white px-5 py-12 font-['Roboto',sans-serif] sm:px-7 sm:py-14 lg:px-10 lg:py-16"
    >
      <div className="mx-auto max-w-[1290px]">
        {/* Section heading */}
        <div className="mb-8 grid grid-cols-1 items-end gap-5 sm:mb-9 md:grid-cols-[1.3fr_0.7fr] md:gap-8 lg:mb-10">
          <div>
            <span className="inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[2px] text-[#648A13]">
              <span className="h-[2px] w-5 bg-[#8BB630]" />
              Planned platform modules
            </span>

            <h2 className="mt-4 text-[30px] font-bold leading-[1.15] tracking-[-0.9px] text-[#15334E] sm:text-[36px] sm:tracking-[-1.2px] lg:text-[42px]">
              Connected records.
              <br />
              Clear responsibilities.
            </h2>
          </div>

          <p className="max-w-[360px] text-[13px] leading-[1.8] text-[#506A86] md:justify-self-end">
            The TrackOwls platform concept connects three operational areas.
            These modules are planned capabilities, subject to product
            development.
          </p>
        </div>

        {/* Platform modules */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3">
          {modules.map(({ number, title, description, Icon }) => (
            <article
              key={number}
              className="group flex min-h-[220px] flex-col rounded-[7px] border border-[#D9E4D4] bg-white p-5 transition-colors duration-300 hover:border-[#8BB630] sm:p-6"
            >
              {/* Module number and icon */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-[11px] font-medium tracking-[1.5px] text-[#7A8B7B]">
                  / {number}
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F1F6E9] text-[#648A13] transition-colors duration-300 group-hover:bg-[#E7F1D5]">
                  <Icon
                    size={19}
                    strokeWidth={1.7}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <h3 className="text-[16px] font-bold leading-[1.4] tracking-[-0.3px] text-[#15334E] transition-colors duration-300 group-hover:text-[#648A13] sm:text-[17px]">
                {title}
              </h3>

              <p className="mt-3 text-[13px] font-normal leading-[1.8] text-[#506A86]">
                {description}
              </p>

              {/* Bottom accent */}
              <div className="mt-auto pt-5">
                <div className="h-[2px] w-8 bg-[#DCE7D0] transition-all duration-300 group-hover:w-14 group-hover:bg-[#8BB630]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformModules;