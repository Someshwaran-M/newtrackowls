
import React from "react";

function AboutMain() {
  return (
    <section
      id="about-main"
      className="w-full bg-[#EAF3F9] px-3 py-10 font-['Roboto',sans-serif] sm:px-5 sm:py-26 lg:px-8 lg:py-26"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="relative isolate flex min-h-[200px] w-full items-center overflow-hidden rounded-[16px] border border-[#C4D9E8] bg-[#DFECF5] sm:min-h-[460px] sm:rounded-[18px] lg:min-h-[615px]">
          
          {/* Light blue background and globe image */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-20"
            style={{
              backgroundImage: "url('/globe.png')",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 3% center",
              backgroundSize: "auto 112%",
            }}
          />

          {/* Soft blue overlay to match the reference */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "linear-gradient(90deg, rgba(223,236,245,0.99) 0%, rgba(223,236,245,0.96) 38%, rgba(223,236,245,0.72) 57%, rgba(223,236,245,0.30) 100%)",
            }}
          />

          {/* Main content */}
          <div className="relative z-10 w-full px-6 py-12 sm:px-9 sm:py-14 md:px-12 lg:px-[75px] lg:py-[76px]">
            <div className="max-w-[1050px]">
              <span className="mb-6 inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[2px] text-[#8BB630] sm:mb-7 sm:text-[12px] lg:mb-[34px] lg:text-[13px]">
                <span className="h-[2px] w-5 bg-[#8BB630]" />
                About TrackOwls
              </span>

              <h1 className="max-w-[1000px] text-[38px] font-bold leading-[1.08] tracking-[-1.6px] text-[#19334E] min-[400px]:text-[42px] sm:text-[52px] sm:tracking-[-2px] md:text-[62px] lg:text-[76px] lg:leading-[1.08] lg:tracking-[-2.8px] xl:text-[84px]">
                Vigilance for valuable
                <br className="hidden lg:block" />{" "}
                <span className="lg:inline">
                  intellectual property.
                </span>
              </h1>

              <p className="mt-6 max-w-[760px] text-[15px] font-normal leading-[1.8] text-[#526B86] sm:mt-7 sm:text-[17px] sm:leading-[1.85] lg:mt-[32px] lg:text-[20px] lg:leading-[1.9]">
                TrackOwls is focused on helping content owners and brands
                identify, investigate and respond to online infringement.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Responsive styling */}
      <style>{`
        @media (max-width: 1023px) {
          #about-main > div > div > div:first-child {
            background-position: right center !important;
            background-size: auto 100% !important;
          }
        }

        @media (max-width: 767px) {
          #about-main > div > div {
            min-height: 0;
          }

          #about-main > div > div > div:first-child {
            background-position: 68% center !important;
            background-size: auto 100% !important;
          }

          #about-main h1 {
            max-width: 580px;
            font-size: clamp(36px, 8.5vw, 50px);
            line-height: 1.12;
            letter-spacing: -1.5px;
          }

          #about-main h1 br {
            display: none;
          }

          #about-main p {
            max-width: 480px;
            font-size: 15px;
            line-height: 1.8;
          }
        }

        @media (max-width: 399px) {
          #about-main h1 {
            font-size: 34px;
            letter-spacing: -1.2px;
          }

          #about-main p {
            font-size: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #about-main * {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </section>
  );
}

export default AboutMain;
