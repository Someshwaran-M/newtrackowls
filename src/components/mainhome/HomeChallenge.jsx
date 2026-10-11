
import React from "react";

const challenges = [
  {
    number: "01",
    title: "Content leakage",
    description:
      "Premium films, episodes and digital assets distributed without permission.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-11 w-11"
      >
        <rect x="9" y="8" width="46" height="48" rx="5" />
        <path d="M9 19h46" />
        <path d="M17 14h1M24 14h1M31 14h1" />
        <path d="M17 43l10-12 9 7 12-14" />
        <path d="M17 49h30M20 54v-5M30 54v-5M40 54v-5" />
        <circle cx="17" cy="43" r="2" fill="#ADD132" />
        <circle cx="27" cy="31" r="2" fill="#ADD132" />
        <circle cx="36" cy="38" r="2" fill="#ADD132" />
        <circle cx="48" cy="24" r="2" fill="#ADD132" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Live piracy",
    description:
      "Unauthorized streams during events where every minute matters.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-11 w-11"
      >
        <circle cx="32" cy="32" r="21" />
        <ellipse cx="32" cy="32" rx="10" ry="21" />
        <path d="M12 25h40M12 39h40" />
        <rect x="3" y="7" width="13" height="10" rx="2" />
        <rect x="48" y="7" width="13" height="10" rx="2" />
        <rect x="3" y="47" width="13" height="10" rx="2" />
        <rect x="48" y="47" width="13" height="10" rx="2" />
        <path d="M16 13h5l4 8M48 13h-5l-4 8M16 52h5l4-8M48 52h-5l-4-8" />
        <path d="m28 28 9 4-9 5z" fill="#ADD132" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Brand & IP abuse",
    description:
      "Misused trademarks, logos and creative assets across digital channels.",
    icon: (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-11 w-11"
      >
        <path d="M32 5 52 13v16c0 14-9 23-20 30C21 52 12 43 12 29V13z" />
        <path d="m22 31 7 7 14-16" stroke="#71991B" strokeWidth="4" />
        <path d="M47 8h9M51.5 3.5v9" />
        <path d="M6 43v10h9M49 55h9v-9" />
      </svg>
    ),
  },
];

function HomeChallenge() {
  return (
    <section
      id="home-challenge"
      className="relative isolate w-full overflow-hidden bg-white font-['Roboto',sans-serif] text-[#152019]"
    >
      {/* Soft white background with subtle lime accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 12% 35%, rgba(173,209,50,0.07), transparent 35%), radial-gradient(ellipse at 90% 75%, rgba(173,209,50,0.06), transparent 32%)",
        }}
      />

      <div className="mx-auto max-w-[1440px] px-5 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
        {/* Existing heading and supporting content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_350px] lg:items-end lg:gap-16">
          

          <div>
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#8EAF20]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#617D17]">
                THE CHALLENGE
              </span>
            </div>

            <h2 className="m-0 max-w-[850px] text-[36px] font-bold leading-[1.06] tracking-[-0.055em] sm:text-[48px] lg:text-[64px]">
              Piracy moves fast.
              <span className="block text-[#7C9D18]">
              Your response should too.
              </span>
            </h2>
          </div>

          <div className="relative max-w-[390px] pb-1 lg:justify-self-end">
            <div className="absolute -left-4 top-1 h-[calc(100%-8px)] w-[2px] bg-gradient-to-b from-[#ADD132] via-[#ADD132]/50 to-transparent sm:-left-6" />

            <p className="m-0 text-[13px] leading-[2] text-[#68746C] sm:text-[14px]">
              Unauthorized copies and brand misuse spread across channels. A
              useful response connects discovery, verification and action.
            </p>
          </div>
        </div>

        {/* Fine divider */}
        <div className="relative  sm:my-16">
         
        </div>

        {/* Circular challenge layout inspired by your reference image */}
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3 lg:gap-7 xl:gap-12">
          {challenges.map((challenge, index) => (
            <article
              key={challenge.number}
              className="group relative flex min-w-0 flex-col items-center px-2 pb-2 pt-1 text-center sm:px-0"
            >
              {/* Large circular arc */}
              <div className="relative flex aspect-square w-full max-w-[360px] items-center justify-center">
                <div
                  aria-hidden="true"
                  className="absolute inset-[3%] rounded-full border-[9px] border-transparent border-r-[#ADD132] transition-transform duration-700 ease-out group-hover:rotate-[8deg] sm:border-r-[10px]"
                  style={{
                    transform: "rotate(-30deg)",
                  }}
                />

                {/* Fine inner circle */}
                <div
                  aria-hidden="true"
                  className="absolute inset-[8%] rounded-full border border-[#E8EDE3] transition-colors duration-500 group-hover:border-[#ADD132]/50"
                />

                {/* Floating icon circle */}
                <div className="absolute left-1/2 top-0 z-10 flex h-[116px] w-[116px] -translate-x-1/2 items-center justify-center rounded-full border-[9px] border-white bg-white text-[#152019] shadow-[0_12px_35px_rgba(21,32,25,0.12)] transition-transform duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_15px_38px_rgba(173,209,50,0.2)] sm:h-[126px] sm:w-[126px]">
                  <div className="flex h-[88px] w-[88px] items-center justify-center rounded-full bg-[#F8FAF5] transition-colors duration-500 group-hover:bg-[#F0F8E4]">
                    {challenge.icon}
                  </div>
                </div>

                



{/* Centered challenge content */}
<div className="relative z-10 mt-10 flex w-full max-w-[94%] flex-col items-center text-center transition-transform duration-500 group-hover:-translate-y-1 sm:mt-12">
  {/* Number and title */}
  <div className="flex w-full items-center justify-center gap-3">
    <span className="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#ADD132] text-[15px] font-medium text-[#152019] sm:h-[60px] sm:w-[60px]">
    {challenge.number}
  </span>

  <h3 className="m-0 whitespace-nowrap pl-3 text-left text-[16px] font-medium leading-tight text-[#152019] sm:text-[18px]">
    {challenge.title}
  </h3>
  </div>

  {/* Description centered inside the circle */}
  <p className="mx-auto mt-1 w-full max-w-[290px] px-6 text-center text-[14px] leading-[1.9] text-[#4F5B51] sm:text-[15px]">
    {challenge.description}
  </p>
</div>                

                
                
              </div>

         
              

              {/* Bottom lime accent */}
              <div className="mt-5 flex items-center justify-center gap-2">
                <span className="h-[3px] w-6 bg-[#ADD132] transition-all duration-500 group-hover:w-12" />
                <span className="h-[3px] w-1 bg-[#DCE4D8]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeChallenge;
