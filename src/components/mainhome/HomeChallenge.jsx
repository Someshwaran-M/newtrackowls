import React from "react";

const challenges = [
  {
    number: "01",
    title: "Content leakage",
    description:
      "Premium films, episodes and digital assets distributed without permission.",
  },
  {
    number: "02",
    title: "Live piracy",
    description:
      "Unauthorized streams during events where every minute matters.",
  },
  {
    number: "03",
    title: "Brand & IP abuse",
    description:
      "Misused trademarks, logos and creative assets across digital channels.",
  },
];

export default function HomeChallenge() {
  return (
    <section
      id="home-challenge"
      className="w-full overflow-hidden border-y border-[rgba(171,198,215,0.15)] bg-transparent font-['Roboto',Arial,sans-serif] text-white"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 py-[78px] sm:px-10 sm:py-[86px] lg:px-[4.5%] lg:py-[119px]">
        {/* Header: eyebrow, heading and supporting text */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.47fr)] lg:items-end lg:gap-[75px]">
          <div className="min-w-0">
            <p className="mb-[29px] text-[14px] font-bold uppercase leading-[1.2] tracking-[1.8px] text-[#d1ed14]">
              The challenge
            </p>

            <h2 className="m-0 text-[42px] font-bold leading-[1.15] tracking-[-1.6px] text-[#f8fafc] sm:text-[50px] lg:text-[64px] lg:leading-[1.14] lg:tracking-[-2px]">
              Piracy moves fast.
              <span className="block">
                Your response should too.
              </span>
            </h2>
          </div>

          <p className="m-0 max-w-[490px] pb-[2px] text-[16px] font-normal leading-[1.75] tracking-[-0.1px] text-[#b7cbd9] sm:text-[18px] lg:justify-self-end lg:text-[20px]">
            Unauthorized copies and brand misuse spread across channels. A
            useful response connects discovery, verification and action.
          </p>
        </div>

        {/* Thin horizontal divider */}
        <div className="my-[43px] h-px w-full bg-[rgba(171,198,215,0.18)] sm:my-[51px] lg:my-[56px]" />

        {/* Three evenly aligned columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-[72px] lg:gap-y-0">
          {challenges.map((challenge) => (
            <article
              key={challenge.number}
              className="min-w-0 rounded-xl border border-[rgba(171,198,215,0.15)] bg-[rgba(10,26,46,0.5)] p-6 backdrop-blur-md transition duration-200 hover:border-[#d1ed14]/40 hover:bg-[rgba(14,34,60,0.7)]"
            >
              <p className="m-0 text-[14px] font-bold leading-[1.4] text-[#d1ed14]">
                {challenge.number}
              </p>

              <h3 className="mb-0 mt-[18px] text-[24px] font-bold leading-[1.25] tracking-[-0.6px] text-white sm:text-[27px] lg:text-[29px]">
                {challenge.title}
              </h3>

              <p className="mb-0 mt-[16px] text-[15px] font-normal leading-[1.7] text-[#b7cbd9] sm:text-[17px]">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
