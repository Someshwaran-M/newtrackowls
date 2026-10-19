
import React from "react";

const steps = [
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

function HowItWorksMain() {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden bg-[#EAF3F9] px-4 py-8 font-['Roboto',sans-serif] sm:px-6 sm:py-10 lg:px-8 lg:py-12"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        {/* HERO BANNER */}
        <div className="relative isolate overflow-hidden rounded-[15px] border border-[#C0D4E2] bg-[#DCEAF4]">
          {/* Background image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/globe.png')",
            }}
          />

          {/* Light blue overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[-1] bg-gradient-to-r from-[#DCEAF4]/95 via-[#DCEAF4]/85 to-[#DCEAF4]/45"
          />

          {/* Soft blue atmospheric glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 z-[-1] h-64 w-64 -translate-y-1/2 rounded-full bg-[#8BBCE0]/30 blur-3xl sm:h-80 sm:w-80 lg:h-[450px] lg:w-[450px]"
          />

          {/* Hero content */}
          <div className="flex min-h-[340px] items-center px-5 py-10 min-[400px]:min-h-[360px] sm:min-h-[400px] sm:px-9 sm:py-12 lg:min-h-[450px] lg:px-[60px] lg:py-[65px] xl:min-h-[490px]">
            <div className="relative z-10 w-full max-w-[1050px]">
              <span className="mb-5 inline-flex items-center text-[10px] font-extrabold uppercase tracking-[1.7px] text-[#8bb630] min-[400px]:text-[11px] sm:mb-6 sm:text-[12px] sm:tracking-[2px] lg:text-[13px]">
                How it works
              </span>

              <h1 className="max-w-[950px] text-[34px] font-bold leading-[1.12] tracking-[-1.1px] text-[#173149] min-[400px]:text-[38px] min-[400px]:tracking-[-1.4px] sm:text-[46px] sm:leading-[1.1] sm:tracking-[-1.8px] lg:text-[62px] lg:leading-[1.08] lg:tracking-[-2.3px] xl:text-[68px]">
                From detection to a
                <span className="block">
                  documented outcome.
                </span>
              </h1>

              <p className="mt-5 max-w-[760px] text-[13px] leading-[1.8] text-[#526B7D] min-[400px]:text-[14px] sm:mt-6 sm:text-[16px] sm:leading-[1.85] lg:text-[18px] xl:text-[19px]">
                A five-stage approach to identify suspected infringements,
                verify evidence and coordinate appropriately authorized action.
              </p>
            </div>
          </div>
        </div>

        {/* FIVE-STAGE PROCESS PANEL */}
        <div className="relative mt-5 overflow-hidden rounded-[18px] border border-[#D0DFE7] bg-[#D3E0E7] px-4 py-5 sm:mt-7 sm:rounded-[22px] sm:px-7 sm:py-8 lg:mt-9 lg:rounded-[25px] lg:px-9 lg:py-10 xl:px-[60px] xl:py-[55px]">
          {/* Subtle background image inside process panel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.10]"
            style={{
              backgroundImage: "url('/globe.png')",
            }}
          />

          {/* Soft overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[#E1EBF0]/65"
          />

          {/* Cards */}
          <div className="relative z-10 grid grid-cols-1 gap-4 min-[600px]:grid-cols-2 min-[600px]:gap-5 lg:grid-cols-5 lg:gap-4 xl:gap-[22px]">
            {steps.map((step) => (
              <article
                key={step.number}
                className="min-w-0 rounded-[16px] border border-[#CBD8D5] bg-[#E8EFEC]/95 px-5 py-5 transition-colors duration-300 hover:border-[#9CB66D] min-[600px]:px-6 min-[600px]:py-6 lg:min-h-[290px] lg:rounded-[17px] lg:px-5 lg:py-7 xl:min-h-[300px] xl:px-[26px] xl:py-[35px]"
              >
                <span className="block text-[11px] font-medium tracking-[0.3px] text-[#648F13] sm:text-[12px] lg:text-[13px]">
                  {step.number}
                </span>

                <h2 className="mt-3 text-[20px] font-semibold leading-tight tracking-[-0.4px] text-[#173149] min-[600px]:mt-5 min-[600px]:text-[22px] lg:mt-7 lg:text-[23px] xl:text-[25px]">
                  {step.title}
                </h2>

                <p className="mt-3 max-w-[280px] text-[13px] leading-[1.75] text-[#526B7D] sm:text-[14px] sm:leading-[1.8] lg:text-[13px] xl:text-[14px]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksMain;
