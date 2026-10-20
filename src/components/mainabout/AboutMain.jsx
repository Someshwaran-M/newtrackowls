
import React from "react";

function AboutMain() {
  return (
    <section
      id="about-main"
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

              {/* Eyebrow */}
              <span className="mb-5 inline-flex items-center gap-2.5 text-[10px] font-extrabold uppercase tracking-[1.8px] text-[#648A13] sm:mb-6 sm:text-[11px] lg:mb-7 lg:text-[12px]">
                
                About TrackOwls
              </span>

              {/* Heading */}
              <h1 className="m-0 max-w-[900px] text-[34px] font-bold leading-[1.12] tracking-[-1.3px] text-[#15334E] min-[400px]:text-[39px] sm:text-[48px] sm:leading-[1.1] sm:tracking-[-1.8px] md:text-[58px] lg:text-[68px] lg:leading-[1.06] lg:tracking-[-2.4px] xl:text-[76px]">
                Vigilance for valuable
                <br className="hidden sm:block" />
                {" "}intellectual property.
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-[650px] text-[14px] font-normal leading-[1.75] text-[#526B86] sm:mt-6 sm:text-[15px] sm:leading-[1.8] lg:mt-7 lg:text-[17px] lg:leading-[1.8]">
                TrackOwls is focused on helping content owners and brands
                identify, investigate and respond to online infringement.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* Mobile spacing */}
      <style>{`
        #about-main {
          overflow: hidden;
        }

        @media (max-width: 767px) {
          #about-main h1 {
            max-width: 100%;
            font-size: clamp(34px, 8.2vw, 46px);
            line-height: 1.12;
            letter-spacing: -1.4px;
          }

          #about-main h1 br {
            display: none;
          }

          #about-main p {
            max-width: 100%;
            margin-top: 18px;
            font-size: 14px;
            line-height: 1.75;
          }

          #about-main > div > div > div:first-child {
            background-position: 68% center !important;
            background-size: auto 100% !important;
          }
        }

        @media (max-width: 399px) {
          #about-main h1 {
            font-size: 32px;
            letter-spacing: -1.1px;
          }

          #about-main p {
            font-size: 13px;
            line-height: 1.7;
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
