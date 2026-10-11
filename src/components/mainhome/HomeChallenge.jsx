
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

function HomeChallenge() {
  return (
    <section
      id="home-challenge"
      className="relative w-full overflow-hidden bg-[#FFFFFF] font-['Roboto',sans-serif] text-[#15334E]"
    >
      <div className="mx-auto max-w-[1420px] px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-12">
        {/* Heading and supporting description */}
        <div className="grid grid-cols-1 items-end gap-5 sm:gap-6 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_340px] lg:gap-12">
          <div>
            <p className="mb-4 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#617D17]">
              <span className="h-[2px] w-5 bg-[#648A13]" />
              The challenge
            </p>

            <h2 className="max-w-[800px] text-[36px] font-bold leading-[1.08] tracking-[-1.2px] text-[#15334E] sm:text-[48px] lg:text-[54px]">
              Piracy moves fast.
              <span className="block text-[#7C9D18]">
                Your response should too.
              </span>
            </h2>
          </div>

          <p className="max-w-[340px] text-[13px] leading-[1.9] text-[#45637F] md:justify-self-end lg:pb-1">
            Unauthorized copies and brand misuse spread across channels. A
            useful response connects discovery, verification and action.
          </p>
        </div>

        {/* Subtle divider */}
        <div className="my-7 h-px w-full bg-[#DCE6D3] sm:my-9 lg:my-10" />

        {/* Three challenge columns */}
        <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-3 lg:gap-12">
          {challenges.map((challenge, index) => (
            <article
              key={challenge.number}
              className={`group relative min-w-0 py-6 first:pt-0 sm:py-5 sm:first:pt-0 lg:py-2 ${
                index !== challenges.length - 1
                  ? "border-b border-[#E3EADF] sm:border-b-0"
                  : ""
              }`}
            >
              {/* Number and accent */}
              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold tracking-[0.08em] text-[#648A13]">
                  {challenge.number}
                </span>

                <span className="h-px w-9 bg-[#C9D9AD] transition-all duration-300 group-hover:w-14 group-hover:bg-[#648A13]" />
              </div>

              {/* Challenge title */}
              <h3 className="mt-5 text-[19px] font-bold leading-snug tracking-[-0.35px] text-[#15334E] transition-colors duration-300 group-hover:text-[#648A13] sm:text-[20px]">
                {challenge.title}
              </h3>

              {/* Description */}
              <p className="mt-3 max-w-[360px] text-[13px] leading-[1.9] text-[#45637F]">
                {challenge.description}
              </p>

              {/* Minimal bottom accent */}
              <div className="mt-5 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.12em] text-[#617D17]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#8BB630]" />
                Digital protection challenge
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeChallenge;
