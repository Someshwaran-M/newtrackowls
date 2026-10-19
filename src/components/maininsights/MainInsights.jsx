
import React from "react";

function MainInsights() {
  return (

           <section
      id="platform-main"
      className="w-full bg-[#EAF3F9] px-3 pt-26 pb-7 font-['Roboto',sans-serif] sm:px-5 sm:pt-25 sm:pb-9 lg:px-8 lg:pt-25 lg:pb-8"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="relative isolate flex min-h-[300px] w-full items-center overflow-hidden rounded-[14px] border border-[#8BB630]/30 bg-[#D5DDDA] sm:min-h-[400px] sm:rounded-[17px] lg:min-h-[310px] xl:min-h-[340px]">
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

          {/* Content */}
          <div className="relative z-10 w-full px-6 py-14 min-[400px]:px-7 sm:px-9 sm:py-16 md:px-12 lg:px-[76px] lg:py-[90px]">
            <div className="max-w-[1120px]">
              {/* Label */}
              <span className="mb-7 inline-flex items-center gap-3 text-[10px] font-extrabold uppercase tracking-[1.8px] text-[#79A91C] min-[400px]:text-[11px] sm:mb-8 sm:text-[12px] sm:tracking-[2.2px] lg:mb-[42px] lg:text-[14px]">
                     INSIGHTS
              </span>

              {/* Heading */}
              <h1 className="max-w-[1100px] text-[38px] font-bold leading-[1.12] tracking-[-1.7px] text-[#19334E] min-[400px]:text-[42px] sm:text-[52px] sm:leading-[1.1] sm:tracking-[-2px] md:text-[64px] lg:text-[76px] lg:leading-[1.1] lg:tracking-[-3px] xl:text-[84px]">
                Practical
                 <br className="hidden lg:block" />{" "}
                <span className="block lg:inline">
                 intelligence for
                </span>
                <br className="hidden lg:block" />{" "}
                <span className="block lg:inline">
                rights holders.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 max-w-[850px] text-[14px] font-normal leading-[1.85] text-[#526D86] min-[400px]:text-[15px] sm:mt-7 sm:text-[17px] lg:mt-[30px] lg:text-[20px] lg:leading-[1.9]">
                Explore monitoring preparation, evidence handling and meaningful enforcement reporting.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile and tablet adjustments */}
      <style>{`
        @media (max-width: 1023px) {
          #platform-main > div > div > div:first-child {
            background-position: center, right center !important;
            background-size: cover, auto 105% !important;
          }
        }

        @media (max-width: 767px) {
          #platform-main > div > div > div:first-child {
            background-image:
              linear-gradient(
                90deg,
                rgba(222, 237, 247, 0.96) 0%,
                rgba(222, 237, 247, 0.86) 48%,
                rgba(222, 237, 247, 0.52) 100%
              ),
              url('/globe.png') !important;
            background-position: center, 62% center !important;
            background-size: cover, auto 85% !important;
          }

          #platform-main h1 {
            max-width: 650px;
            font-size: clamp(36px, 8.2vw, 52px);
            line-height: 1.12;
            letter-spacing: -1.5px;
          }

          #platform-main h1 br {
            display: none;
          }

          #platform-main p {
            max-width: 480px;
            font-size: 15px;
            line-height: 1.8;
          }
        }

        @media (max-width: 399px) {
          #platform-main h1 {
            font-size: 35px;
            letter-spacing: -1.2px;
          }

          #platform-main p {
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #platform-main * {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}

export default MainInsights;
