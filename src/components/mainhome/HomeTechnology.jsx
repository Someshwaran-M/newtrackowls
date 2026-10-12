
import React from "react";
import {
  Eye,
  FileText,
  Clock3,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const features = [
  {
    title: "Analyst verification",
    description: "Review the finding before taking action.",
    icon: Eye,
  },
  {
    title: "Evidence-led enforcement",
    description: "Keep URLs, timestamps and supporting records.",
    icon: FileText,
  },
  {
    title: "Agreed priorities",
    description: "Define coverage, response targets and escalations.",
    icon: Clock3,
  },
  {
    title: "Transparent reporting",
    description: "See submitted actions and confirmed outcomes.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

export default function HomeTechnology() {
  return (
    <section
      id="home-technology"
      className="relative w-full overflow-hidden border-y border-[#E0E9F1] bg-[#FFFFFF] font-['Roboto',Arial,sans-serif] text-[#15334E]"
    >
      <div className="mx-auto grid max-w-[1430px] grid-cols-1 gap-12 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:px-[4.8%] lg:py-12">
        {/* Left content */}
        <div className="relative">
          <p className="mb-7 text-[11px] font-bold uppercase tracking-[0.24em] text-[#617D17] sm:text-xs">
            Technology + Human Intelligence
          </p>

          <h2 className="m-0 max-w-[700px] text-[36px] font-bold leading-[1.13] tracking-[-0.045em] text-[#15334E] sm:text-[48px] lg:text-[54px]">
            The right evidence.
            <br />
            <span className="text-[#7C9D18]">
              The right action.
            </span>
          </h2>

          <p className="mt-6 max-w-[710px] text-[15px] leading-[1.9] text-[#45637F] sm:text-[17px]">
            Automation supports discovery. Analyst review supports decisions.
            Enforcement operations connect verified findings to appropriate
            reporting channels.
          </p>

          <a
            href="/how-it-works"
            className="group mt-8 inline-flex items-center gap-2 border-b border-[#8BB630]/50 pb-2 text-[14px] font-medium text-[#648A13] transition-colors duration-300 hover:border-[#8BB630] hover:text-[#15334E]"
          >
            <span>Explore our approach</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Right feature grid */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-12 lg:gap-x-14 lg:gap-y-14">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article key={feature.title} className="group min-w-0">
                <div className="mb-6 inline-flex text-[#8BB630] transition-transform duration-300 group-hover:-translate-y-1">
                  <Icon
                    size={29}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="m-0 text-[19px] font-bold leading-snug tracking-[-0.025em] text-[#15334E] transition-colors duration-300 group-hover:text-[#7C9D18] sm:text-[21px]">
                  {feature.title}
                </h3>

                <p className="mb-0 mt-3 max-w-[330px] text-[14px] leading-[1.8] text-[#45637F] sm:text-[15px]">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
