
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const workflowStages = [
  {
    number: "01",
    title: "Monitor",
    description:
      "Define the assets, territories and digital channels in scope.",
  },
  {
    number: "02",
    title: "Detect",
    description:
      "Discover suspected unauthorized content, streams and URLs.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Analysts check rights, validate the finding and capture evidence.",
  },
  {
    number: "04",
    title: "Enforce",
    description:
      "Submit authorized complaints and escalate through available channels.",
  },
  {
    number: "05",
    title: "Report",
    description:
      "Verify outcomes and report pending actions, removals and repeat cases.",
  },
];

export default function HomeHowItWorks() {
  return (
    <section
      id="home-how-it-works"
      className="relative w-full overflow-hidden border-y border-[#DCE6D3] bg-[#FFFFFF] font-['Roboto',Arial,sans-serif] text-[#15334E]"
    >
      <div className="mx-auto max-w-[1600px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-12 xl:px-[7.5%]">
        {/* Heading */}
        <div className="mb-8 grid grid-cols-1 items-end gap-5 sm:mb-9 md:grid-cols-[1fr_0.7fr] lg:gap-10">
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#617D17] sm:text-[11px]">
              How TrackOwls Works
            </p>

            <h2 className="m-0 max-w-[650px] text-[36px] font-bold leading-[1.12] tracking-[-1.2px] text-[#15334E] sm:text-[48px] lg:text-[54px]">
              From detection
              <br />
              <span className="text-[#7C9D18]">to enforcement.</span>
            </h2>
          </div>

          <p className="m-0 max-w-[490px] text-[13px] leading-[1.8] text-[#45637F] md:justify-self-end lg:text-[15px] lg:leading-[1.85]">
            Five connected stages. One traceable record of what was found,
            verified and actioned.
          </p>
        </div>

        {/* Five workflow stages */}
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-[30px]">
          {workflowStages.map((stage) => (
            <article
              key={stage.number}
              className="group relative border-t border-[#8BB630]/80 py-5 transition-colors duration-300 hover:border-[#648A13] sm:min-h-[200px] lg:min-h-0 lg:border-t lg:py-7"
            >
              {/* Stage number */}
              <span className="font-mono text-[12px] font-medium text-[#648A13]">
                {stage.number}
              </span>

              {/* Stage title */}
              <h3 className="mb-3 mt-5 text-[23px] font-bold leading-tight tracking-[-0.035em] text-[#15334E] transition-colors duration-300 group-hover:text-[#648A13] sm:text-[25px] lg:mt-6 lg:text-[27px]">
                {stage.title}
              </h3>

              {/* Stage description */}
              <p className="m-0 max-w-[290px] text-[13px] leading-[1.85] text-[#45637F] sm:text-[14px]">
                {stage.description}
              </p>

              {/* Subtle hover indicator */}
              <div
                className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#8BB630] transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              />
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-7 sm:mt-9">
          <Link
            to="/how-it-works"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#C9D9AD] pb-2 text-[13px] font-medium text-[#648A13] transition-colors duration-300 hover:border-[#648A13] hover:text-[#45637F] sm:text-[14px]"
          >
            <span>Understand the workflow</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#C9D9AD] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#8BB630] group-hover:bg-[#8BB630] group-hover:text-[#15334E]">
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
