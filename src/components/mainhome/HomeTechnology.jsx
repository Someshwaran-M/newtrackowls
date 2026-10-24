import React from "react";
import {
  Search,
  ScanSearch,
  ShieldCheck,
  Scale,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Broad-spectrum discovery",
    description:
      "Automated monitoring scans public web, streaming and social channels for matching assets.",
  },
  {
    icon: ScanSearch,
    title: "Analyst verification",
    description:
      "Experienced analysts confirm title, rights and evidence before any action is initiated.",
  },
  {
    icon: ShieldCheck,
    title: "Enforcement operations",
    description:
      "Direct complaints and escalations via platform workflows, host notices and legal pathways.",
  },
  {
    icon: Scale,
    title: "Evidence preservation",
    description:
      "Timestamped logs, source records and chain of custody support ongoing protection.",
  },
];

export default function HomeTechnology() {
  return (
    <section
      id="home-technology"
      className="relative w-full overflow-hidden border-y border-[rgba(171,198,215,0.15)] bg-transparent font-['Roboto',Arial,sans-serif] text-white"
    >
      <div className="mx-auto grid max-w-[1580px] grid-cols-1 gap-8 px-4 py-8 sm:gap-12 sm:px-8 sm:py-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:px-[4.8%] lg:py-16">
        {/* Left content */}
        <div className="relative">
          <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d1ed14] sm:mb-7 sm:text-xs sm:tracking-[0.24em]">
            Technology + Human Intelligence
          </p>

          <h2 className="m-0 max-w-[700px] text-[30px] font-bold leading-[1.13] tracking-[-0.045em] text-[#f8fafc] sm:text-[48px] lg:text-[54px]">
            The right evidence.
            <br />
            <span>
              The right action.
            </span>
          </h2>

          <p className="mt-5 max-w-[710px] text-[15px] leading-[1.7] text-[#b7cbd9] sm:mt-6 sm:text-[17px] sm:leading-[1.9]">
            Automation supports discovery. Analyst review supports decisions.
            Enforcement operations connect verified findings to appropriate
            reporting channels.
          </p>

          <a
            href="/how-it-works"
            className="group mt-6 inline-flex items-center gap-2 border-b border-[#d1ed14]/40 pb-2 text-[13px] font-medium text-[#d1ed14] transition-colors duration-300 hover:border-[#d1ed14] hover:text-white sm:mt-8 sm:text-[14px]"
          >
            <span>Explore our approach</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Right feature grid */}
        <div className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-12 sm:gap-y-12 lg:gap-x-14 lg:gap-y-14">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="group min-w-0 rounded-xl border border-[rgba(171,198,215,0.15)] bg-[rgba(10,26,46,0.55)] p-5 backdrop-blur-md transition duration-300 hover:border-[#d1ed14]/50 hover:bg-[rgba(14,34,60,0.8)]"
              >
                <div className="mb-4 inline-flex text-[#d1ed14] transition-transform duration-300 group-hover:-translate-y-1 sm:mb-6">
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="sm:h-[28px] sm:w-[28px]"
                  />
                </div>

                <h3 className="m-0 text-[15px] font-bold leading-[1.2] tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-[#d1ed14] sm:text-[20px] sm:leading-snug">
                  {feature.title}
                </h3>

                <p className="mb-0 mt-2 text-[12px] leading-[1.7] text-[#b7cbd9] sm:mt-3 sm:max-w-[330px] sm:text-[14px] sm:leading-[1.8]">
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
