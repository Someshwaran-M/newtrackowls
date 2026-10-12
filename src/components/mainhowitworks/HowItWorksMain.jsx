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
      className="w-full overflow-hidden bg-white px-5 py-12 font-['Roboto',sans-serif] sm:px-8 sm:py-16 lg:px-10 lg:py-20"
    >
      <div className="mx-auto mt-4 w-full max-w-[1280px] sm:mt-6">
        {/* Hero banner */}
        <div className="relative isolate overflow-hidden border border-[#24445B] bg-[#071E35]">
          {/* Globe background image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-20 bg-cover bg-center"
            style={{
              backgroundImage: "url('/globe.png')",
            }}
          />

          {/* Navy overlay — no grid */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071E35]/95 via-[#071E35]/80 to-[#071E35]/45" />

          {/* Subtle atmospheric glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 -z-10 h-72 w-72 -translate-y-1/2 rounded-full bg-[#8BB630]/10 blur-3xl sm:h-96 sm:w-96"
          />

          {/* Hero content */}
          <div className="flex min-h-[300px] items-center px-6 py-12 sm:min-h-[340px] sm:px-10 sm:py-14 lg:min-h-[380px] lg:px-14 lg:py-16">
            <div className="max-w-[760px]">
              <span className="mb-5 inline-flex items-center gap-2.5 text-[10px] font-extrabold uppercase tracking-[2px] text-[#B8E54B] sm:mb-6 sm:text-[11px]">
                <span className="h-[2px] w-6 bg-[#8BB630]" />
                How it works
              </span>

              <h1 className="max-w-[740px] text-[34px] font-bold leading-[1.12] tracking-[-1.2px] text-white sm:text-[44px] sm:tracking-[-1.7px] lg:text-[54px] lg:leading-[1.08]">
                From detection to a
                <span className="block text-[#B8E54B]">
                  documented outcome.
                </span>
              </h1>

              <p className="mt-5 max-w-[630px] text-[13px] leading-[1.85] text-[#D0DCE6] sm:mt-6 sm:text-[15px] sm:leading-[1.9]">
                A five-stage approach to identify suspected infringements,
                verify evidence and coordinate appropriately authorized action.
              </p>

              {/* Process overview */}
              
            </div>
          </div>

   </div>

        {/* Process section heading */}
        <div className="mb-8 mt-12 flex flex-col gap-3 sm:mb-10 sm:mt-16 sm:flex-row sm:items-end sm:justify-between lg:mt-20">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[1.8px] text-[#648A13]">
              <span className="h-[2px] w-5 bg-[#8BB630]" />
              The process
            </span>

            <h2 className="text-[27px] font-bold leading-tight tracking-[-0.8px] text-[#19334E] sm:text-[34px] sm:tracking-[-1.2px]">
              Five stages.{" "}
              <span className="text-[#648A13]">
                One clear workflow.
              </span>
            </h2>
          </div>

          <p className="max-w-[380px] text-[13px] leading-[1.8] text-[#526B86]">
            Each stage builds on the previous one, helping organize findings,
            evidence and follow-up actions.
          </p>
        </div>

        {/* Five-stage process */}
        <div className="grid grid-cols-1 gap-x-6 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-5 lg:gap-x-6">
          {steps.map((step, index) => (
            <article
              key={step.number}
              className="group relative border-t-2 border-[#DCE5D6] py-5 transition-colors duration-300 hover:border-[#8BB630] sm:py-6 lg:py-5"
            >
              {/* Step number */}
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold tracking-[1px] text-[#648A13]">
                  {step.number}
                </span>

                <span className="text-[10px] font-medium text-[#A2B0A1]">
                  {index === 0
                    ? "START"
                    : index === steps.length - 1
                      ? "FINISH"
                      : "STEP"}
                </span>
              </div>

              <h3 className="mt-5 text-[21px] font-bold tracking-[-0.5px] text-[#19334E] transition-colors duration-300 group-hover:text-[#648A13] sm:text-[23px]">
                {step.title}
              </h3>

              <p className="mt-3 max-w-[270px] text-[13px] leading-[1.8] text-[#526B86]">
                {step.description}
              </p>

              {/* Step marker */}
              <div className="mt-5 flex items-center gap-2">
                <span className="h-[3px] w-7 bg-[#8BB630] transition-all duration-300 group-hover:w-12" />

                <span className="text-[9px] font-bold tracking-[1.2px] text-[#87978A]">
                  STAGE / {step.number}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom information strip */}
        <div className="mt-8 flex flex-col gap-4 border-t border-[#E4EAE0] pt-6 sm:mt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[700px] text-[12px] leading-[1.8] text-[#526B86] sm:text-[13px]">
            Every finding follows a structured review process, with appropriate
            evidence and clearly documented next steps.
          </p>

         
        </div>
      </div>
    </section>
  );
}

export default HowItWorksMain;
