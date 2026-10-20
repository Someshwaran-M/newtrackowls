
import React from "react";

function PiracyMain() {
  return (
    <section
      id="piracy-main"
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
                
                TRACKOWLS INSIGHTS / OCTOBER 2026
              </span>

              {/* Heading */}
              <h1 className="m-0 max-w-[900px] text-[34px] font-bold leading-[1.12] tracking-[-1.3px] text-[#15334E] min-[400px]:text-[39px] sm:text-[48px] sm:leading-[1.1] sm:tracking-[-1.8px] md:text-[58px] lg:text-[68px] lg:leading-[1.06] lg:tracking-[-2.4px] xl:text-[76px]">
                Digital piracy. Real
                <br className="hidden sm:block" />
                {" "}consequences.
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-[650px] text-[14px] font-normal leading-[1.75] text-[#526B86] sm:mt-6 sm:text-[15px] sm:leading-[1.8] lg:mt-7 lg:text-[17px] lg:leading-[1.8]">
                Protecting the value of film, OTT and live events. An original guide to exposure, commercial impact and evidence-led protection.
              </p>


          {/* Report actions */}
          <div className="mt-5 flex flex-wrap items-center gap-3 sm:mt-6">
            <a
              href="/reports/digital-piracy-report.pdf"
              download
              className="inline-flex min-h-[40px] items-center justify-center rounded-[4px] bg-[#648A13] px-5 py-3 text-center text-[11px] font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7C9D18] focus:outline-none focus:ring-2 focus:ring-[#8BB630] focus:ring-offset-2 focus:ring-offset-[#071E35]"
            >
              Download the report · 12-page PDF
            </a>

            <a
              href="#piracy-report-content"
              className="inline-flex min-h-[40px] items-center justify-center rounded-[4px] border border-[#648A13] px-5 py-3 text-[11px] font-medium text-[#526B86] transition-colors duration-300 hover:border-[#8BB630] hover:text-black"
            >
              Read online
            </a>
          </div>

          <p className="mt-5 text-[10px] font-medium leading-relaxed text-[#526B86]">
            Film &amp; production / OTT / Live sports &amp; events · 15-minute
            read
          </p>
        </div>
        </div>
        </div>
      </div>
    </section>
  );
}

export default PiracyMain;
