import React, { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { Link } from "react-router-dom";

const workflowStages = [
  {
    number: "01",
    title: "Monitor",
    subtitle: "Define the scope.",
    description:
      "Define the assets, territories and digital channels in scope.",
    detail: "ASSET COVERAGE",
    keywords: ["Assets", "Territories", "Digital channels"],
  },
  {
    number: "02",
    title: "Detect",
    subtitle: "Discover potential threats.",
    description:
      "Discover suspected unauthorized content, streams and URLs.",
    detail: "DISCOVERY",
    keywords: ["Content", "Streams", "URLs"],
  },
  {
    number: "03",
    title: "Verify",
    subtitle: "Establish the evidence.",
    description:
      "Analysts check rights, validate the finding and capture evidence.",
    detail: "ANALYST REVIEW",
    keywords: ["Rights checks", "Validation", "Evidence"],
  },
  {
    number: "04",
    title: "Enforce",
    subtitle: "Take authorized action.",
    description:
      "Submit authorized complaints and escalate through available channels.",
    detail: "ENFORCEMENT",
    keywords: ["Complaints", "Escalation", "Action tracking"],
  },
  {
    number: "05",
    title: "Report",
    subtitle: "Track the outcome.",
    description:
      "Verify outcomes and report pending actions, removals and repeat cases.",
    detail: "OUTCOME REPORTING",
    keywords: ["Removals", "Pending actions", "Repeat cases"],
  },
];

export default function HomeHowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStage = workflowStages[activeIndex];

  return (
    <section
      id="home-how-it-works"
      className="relative w-full overflow-hidden border-y border-[#e4e9e2] bg-white font-['Roboto',Arial,sans-serif] text-[#152019]"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-2 sm:px-8 sm:py-6 lg:px-12 lg:py-10">
        {/* Heading */}
        <div className="mb-10 grid grid-cols-1 items-end gap-5 md:grid-cols-[1.15fr_0.85fr] lg:mb-14">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[3px] w-8 bg-[#ADD132]" />

              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#6D900B]">
                How TrackOwls Works
              </p>
            </div>

            <h2 className="m-0 max-w-[680px] text-[clamp(34px,5vw,60px)] font-extrabold leading-[1.04] tracking-[-0.05em] text-[#152019]">
              From detection
              <br />
              to <span className="text-[#6D900B]">enforcement.</span>
            </h2>
          </div>

          <p className="m-0 max-w-[440px] text-sm leading-7 text-[#68746C] md:justify-self-end">
            Five connected stages. One traceable record of what was found,
            verified and actioned.
          </p>
        </div>

        {/* Main interactive layout */}
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT: Five overlapping cards */}
          <div className="relative mx-auto flex h-[440px] w-full max-w-[600px] items-center justify-center sm:h-[520px] lg:h-[560px]">  {/* Background card outlines */}
            {workflowStages.map((stage, index) => {
              const distance = index - activeIndex;
              const isActive = index === activeIndex;

              return (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  aria-label={`Select ${stage.title} stage`}
                  className={`absolute flex h-[290px] w-[240px] flex-col justify-between border p-6 text-left transition-all duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#6D900B] sm:h-[340px] sm:w-[285px] sm:p-7 ${
                  isActive
                      ? "border-[#152019] bg-[#ADD132] shadow-[0_16px_36px_rgba(21,32,25,0.12)]"
                      : "border-[#b9c8b0] bg-white hover:bg-[#f5f8f2]"
                  }`}
                  style={{
                    zIndex: isActive ? 20 : 10 - Math.abs(distance),
                    transform: `translate(${distance * 35}px, ${distance * 19}px)`,
                    opacity: isActive ? 1 : 0.96,
                  }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`text-[9px] font-bold uppercase tracking-[0.15em] ${
                        isActive ? "text-[#354515]" : "text-[#6D900B]"
                      }`}
                    >
                      Stage {stage.number}
                    </span>

                    {isActive && (
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#152019]/20">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                    )}
                  </div>

                  <div>
                    <span
                      className={`mb-2 block text-[8px] font-bold uppercase tracking-[0.14em] ${
                        isActive ? "text-[#354515]" : "text-[#82917f]"
                      }`}
                    >
                      {stage.detail}
                    </span>

                    <h3
                      className={`text-[25px] font-black uppercase leading-none tracking-[-0.045em] sm:text-[31px] ${
                        isActive ? "text-[#152019]" : "text-[#27352b]"
                      }`}
                    >
                      {stage.title}
                    </h3>

                    <p
                      className={`mt-2 text-[10px] leading-4 sm:text-[11px] ${
                        isActive ? "text-[#354515]" : "text-[#68746C]"
                      }`}
                    >
                      {stage.subtitle}
                    </p>
                  </div>

                  <div
                    className={`flex items-center justify-between border-t pt-3 ${
                      isActive ? "border-[#152019]/20" : "border-[#e4e9e2]"
                    }`}
                  >
                    <span className="text-[8px] font-bold uppercase tracking-[0.12em]">
                      {isActive ? "Selected stage" : "Select stage"}
                    </span>

                    <ArrowUpRight size={15} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT: Active stage details */}
          <div
            className="relative min-h-[330px] overflow-hidden border border-[#dce4d8] bg-white p-6 sm:p-9 lg:min-h-[390px] lg:p-11"
            aria-live="polite"
          >
            {/* Lime accent */}
            <div className="absolute left-0 top-0 h-[4px] w-20 bg-[#ADD132]" />

            <div className="flex items-center justify-between gap-4 border-b border-[#dce4d8] pb-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#6D900B]">
                TrackOwls / Protection workflow
              </span>

              <span className="font-mono text-[11px] text-[#68746C]">
                {activeStage.number} / 05
              </span>
            </div>

            <div className="mt-8 sm:mt-10">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#6D900B]">
                {activeStage.detail}
              </p>

              <h3 className="text-[38px] font-black leading-none tracking-[-0.045em] text-[#152019] sm:text-[48px] lg:text-[54px]">
                {activeStage.title}
                <span className="mt-3 block text-[15px] font-medium tracking-normal text-[#68746C] sm:text-[17px]">
                  {activeStage.subtitle}
                </span>
              </h3>

              <p className="mt-5 max-w-[460px] text-[13px] leading-7 text-[#68746C] sm:text-sm">
                {activeStage.description}
              </p>
            </div>

            {/* Stage keywords */}
            <div className="mt-7 border-t border-[#dce4d8] pt-5">
              <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.16em] text-[#6D900B]">
                Stage coverage
              </p>

              <div className="flex flex-wrap gap-2">
                {activeStage.keywords.map((keyword, index) => (
                  <span
                    key={keyword}
                    className="inline-flex items-center gap-2 border border-[#dce4d8] bg-[#f5f8f2] px-3 py-2 text-[10px] font-medium text-[#152019] sm:text-[11px]"
                  >
                    <span className="font-mono text-[9px] text-[#6D900B]">
                      0{index + 1}
                    </span>
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom stage indicator */}
            <div className="mt-7 flex items-center gap-2">
              {workflowStages.map((stage, index) => (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show ${stage.title}`}
                  aria-pressed={index === activeIndex}
                  className={`h-[4px] flex-1 transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-[#ADD132]"
                      : "bg-[#e3e9df] hover:bg-[#b7cc9c]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Original footer link */}
        <div className="mt-9 sm:mt-12">
          <Link
            to="/how-it-works"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#ADD132] pb-2 text-sm font-semibold text-[#6D900B] transition-colors duration-300 hover:text-[#152019] sm:text-[15px]"
          >
            <span>Understand the workflow</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#ADD132] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-[#ADD132] group-hover:text-[#152019]">
              <ArrowUpRight size={16} strokeWidth={1.8} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
