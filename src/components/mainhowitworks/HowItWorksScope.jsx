
import React from "react";

const scopeItems = [
  {
    number: "01",
    title: "Assets & rights",
    description:
      "Share asset references, title variations, rights territories and enforcement authorization.",
  },
  {
    number: "02",
    title: "Scope & priorities",
    description:
      "Agree channels, event schedules, monitoring hours, response targets and escalation routes.",
  },
  {
    number: "03",
    title: "Reporting & review",
    description:
      "Set reporting frequency and review pending cases, confirmed outcomes and recurring sources.",
  },
];

function HowItWorksScope() {
  return (
    <section
      id="how-it-works-scope"
      className="w-full overflow-hidden bg-[#EAF3F9] px-4 py-4 font-['Roboto',sans-serif] sm:px-6 sm:py-6 lg:px-8 lg:py-8"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        {/* MAIN LIGHT-BLUE PANEL */}
        <div className="relative isolate overflow-hidden rounded-[18px] border border-[#C8D8DF] bg-[#D3DEDA] px-5 py-7 sm:rounded-[22px] sm:px-8 sm:py-9 lg:rounded-[25px] lg:px-[60px] lg:py-[58px] xl:px-[60px]">
          {/* Subtle background image / particle texture */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center opacity-[0.12]"
            style={{
              backgroundImage: "url('/globe.png')",
            }}
          />

          {/* Soft light-blue overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[#D3DEDA]/75"
          />

          {/* HEADING AND INTRODUCTION */}
          <div className="mb-7 grid grid-cols-1 gap-4 sm:mb-9 sm:gap-5 lg:mb-[54px] lg:grid-cols-[1.6fr_0.9fr] lg:items-center lg:gap-12">
            <h2 className="max-w-[850px] text-[30px] font-bold leading-[1.12] tracking-[-1.1px] text-[#172F49] min-[400px]:text-[34px] sm:text-[40px] sm:tracking-[-1.5px] lg:text-[48px] lg:leading-[1.12] xl:text-[52px]">
              Start with the right scope.
            </h2>

            <p className="max-w-[490px] text-[13px] leading-[1.8] text-[#536D85] sm:text-[14px] sm:leading-[1.9] lg:justify-self-end lg:text-[16px] xl:text-[17px]">
              Before monitoring begins, agree what is protected, where your
              rights apply and how cases should be prioritized.
            </p>
          </div>

          {/* THREE SCOPE CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-[26px]">
            {scopeItems.map((item) => (
              <article
                key={item.number}
                className="min-w-0 rounded-[16px] border border-[#C8D6D3] bg-[#E3EAE7]/95 px-5 py-6 transition-colors duration-300 hover:border-[#A3BB7B] min-[400px]:px-6 sm:rounded-[18px] sm:px-7 sm:py-7 lg:min-h-[250px] lg:px-[34px] lg:py-[34px] xl:min-h-[275px] xl:px-[35px] xl:py-[38px]"
              >
                <span className="block text-[11px] font-semibold tracking-[1.5px] text-[#598516] sm:text-[12px] lg:text-[13px]">
                  {item.number}
                </span>

                <h3 className="mt-5 text-[19px] font-semibold leading-[1.3] tracking-[-0.4px] text-[#173149] min-[400px]:text-[20px] sm:mt-6 sm:text-[22px] lg:mt-7 lg:text-[23px] xl:text-[25px]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[390px] text-[13px] leading-[1.8] text-[#536B7D] sm:text-[14px] sm:leading-[1.85] lg:text-[15px]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          {/* BOTTOM INFORMATION NOTICE */}
          <div className="mt-5 rounded-[15px] border border-[#C8D6D3] bg-[#E3EAE7]/95 px-5 py-4 sm:mt-6 sm:px-6 sm:py-5 lg:mt-[38px] lg:rounded-[18px] lg:px-[30px] lg:py-[27px]">
            <p className="text-[12px] leading-[1.8] text-[#173149] sm:text-[13px] sm:leading-[1.85] lg:text-[15px]">
              Platform response times vary. Monitoring hours and service targets
              are agreed per engagement; a complaint does not guarantee removal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksScope;
