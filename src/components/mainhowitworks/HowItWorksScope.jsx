
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
      className="w-full bg-white px-5 py-12 font-['Roboto',sans-serif] sm:px-8 sm:py-14 lg:px-14 lg:py-[72px]"
    >
      <div className="mx-auto w-full max-w-[1290px]">
        {/* Heading and introduction */}
        <div className="mb-10 grid grid-cols-1 items-center gap-5 sm:mb-11 lg:grid-cols-[1.7fr_0.8fr] lg:gap-12">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-1.5px] text-[#19334E] sm:text-[42px] lg:text-[50px]">
            Start with the right scope.
          </h2>

          <p className="max-w-[390px] text-[14px] leading-[1.9] text-[#526B86] lg:justify-self-end">
            Before monitoring begins, agree what is protected, where your
            rights apply and how cases should be prioritized.
          </p>
        </div>

        {/* Scope cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]">
          {scopeItems.map((item) => (
            <article
              key={item.number}
              className="group min-h-[205px] rounded-[6px] border border-[#D3E0ED] bg-white px-7 py-8 transition-colors duration-300 hover:border-[#8BB630] sm:min-h-[219px] sm:px-8 sm:py-8"
            >
              <span className="text-[12px] font-bold tracking-[1.5px] text-[#648A13]">
                {item.number}
              </span>

              <h3 className="mt-[20px] text-[20px] font-bold leading-tight tracking-[-0.4px] text-[#19334E] transition-colors duration-300 group-hover:text-[#648A13]">
                {item.title}
              </h3>

              <p className="mt-[17px] max-w-[365px] text-[14px] leading-[1.8] text-[#526B86]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        {/* Important notice */}
        <div className="mt-[30px] flex min-h-[63px] items-center border-l-2 border-[#648A13] bg-[#EDF3F5] px-5 py-4 sm:px-[25px]">
          <p className="text-[12px] leading-[1.9] text-[#405D78] sm:text-[13px]">
            Platform response times vary. Monitoring hours and service targets
            are agreed per engagement; a complaint does not guarantee removal.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksScope;
