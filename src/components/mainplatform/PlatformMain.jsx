
import React from "react";

function PlatformMain() {
  return (
     <section
      id="platform-main"
     className="w-full bg-[#EAF3F9] px-3 pt-26 pb-7 font-['Roboto',sans-serif] sm:px-5 sm:pt-25 sm:pb-9 lg:px-8 lg:pt-25 lg:pb-8"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="relative isolate flex min-h-[300px] w-full items-center overflow-hidden rounded-[14px] border border-[#8BB630]/30 bg-[#D5DDDA] sm:min-h-[400px] sm:rounded-[17px] lg:min-h-[410px] xl:min-h-[440px]">
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
          
          {/* Main content */}
          <div className="relative z-10 w-full px-5 py-9 sm:px-8 sm:py-11 md:px-10 lg:px-[58px] lg:py-[62px] xl:px-[68px]">
            <div className="max-w-[1000px]">       

                <span className="mb-5 inline-flex items-center gap-2.5 text-[10px] font-extrabold uppercase tracking-[1.8px] text-[#648A13] sm:mb-6 sm:text-[11px] lg:mb-7 lg:text-[12px]">
                
                Platform · In Development
              </span>

              {/* Heading */}
              <h1 className="m-0 max-w-[900px] text-[34px] font-bold leading-[1.12] tracking-[-1.3px] text-[#15334E] min-[400px]:text-[39px] sm:text-[48px] sm:leading-[1.1] sm:tracking-[-1.8px] md:text-[58px] lg:text-[68px] lg:leading-[1.06] lg:tracking-[-2.4px] xl:text-[76px]">
                One platform. The complete
                <br className="hidden sm:block" />
                {" "} anti-piracy workflow.
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-[650px] text-[14px] font-normal leading-[1.75] text-[#526B86] sm:mt-6 sm:text-[15px] sm:leading-[1.8] lg:mt-7 lg:text-[17px] lg:leading-[1.8]">
                A planned workspace to connect protected assets, cases,
                evidence, analyst assignments and enforcement reporting.
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

export default PlatformMain;
