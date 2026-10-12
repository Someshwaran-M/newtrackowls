
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
      className="w-full overflow-hidden border-y border-[#D8E4EF] bg-[#F2F7FC] font-['Roboto',Arial,sans-serif] text-[#172D48]"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 py-[78px] sm:px-10 sm:py-[86px] lg:px-[4.5%] lg:py-[119px]">
        {/* Header: eyebrow, heading and supporting text */}
        <div className="grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.47fr)] lg:items-end lg:gap-[75px]">
          <div className="min-w-0">
            <p className="mb-[29px] text-[14px] font-bold uppercase leading-[1.2] tracking-[1.8px] text-[#547F17]">
              The challenge
            </p>

            <h2 className="m-0 text-[42px] font-bold leading-[1.15] tracking-[-1.6px] text-[#172D48] sm:text-[50px] lg:text-[64px] lg:leading-[1.14] lg:tracking-[-2px]">
              Piracy moves fast.
              <span className="block">
                Your response should too.
              </span>
            </h2>
          </div>

          <p className="m-0 max-w-[490px] pb-[2px] text-[16px] font-normal leading-[1.75] tracking-[-0.1px] text-[#586F89] sm:text-[18px] lg:justify-self-end lg:text-[20px]">
            Unauthorized copies and brand misuse spread across channels. A
            useful response connects discovery, verification and action.
          </p>
        </div>

        {/* Thin horizontal divider */}
        <div className="my-[43px] h-px w-full bg-[#D4E2ED] sm:my-[51px] lg:my-[56px]" />

        {/* Three evenly aligned columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-[72px] lg:gap-y-0">
          {challenges.map((challenge) => (
            <article key={challenge.number} className="min-w-0">
              <p className="m-0 text-[14px] font-normal leading-[1.4] text-[#647B93]">
                {challenge.number}
              </p>

              <h3 className="mb-0 mt-[27px] text-[23px] font-bold leading-[1.35] tracking-[-0.45px] text-[#172D48] sm:text-[25px]">
                {challenge.title}
              </h3>

              <p className="mb-0 mt-[17px] max-w-[470px] text-[16px] font-normal leading-[1.9] tracking-[-0.1px] text-[#586F89] sm:text-[18px]">
                {challenge.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
