
import React from "react";

export default function HomePiracyBrochure() {
  return (
    <section
      id="piracy-brochure"
      className="relative w-full overflow-hidden bg-[#FFFFFF] py-10 font-['Roboto',sans-serif] text-[#15334E] sm:py-12 lg:py-12"
    >
      <div className="mx-auto max-w-[1420px] px-6 sm:px-10 lg:px-[60px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-[7%]">
          {/* Left: Editorial content */}
          <div className="flex flex-col items-start">
            <p className="mb-7 text-[11px] font-bold uppercase tracking-[0.2em] text-[#617D17] sm:text-xs">
              TrackOwls insights / Industry report
            </p>

            <h2 className="max-w-[650px] text-[36px] font-bold leading-[1.08] tracking-[-0.045em] text-[#15334E] sm:text-[48px] lg:text-[54px]">
              Digital piracy.
              <br />
              <span className="text-[#7C9D18]">
                Real consequences.
              </span>
            </h2>

            <p className="mt-6 max-w-[660px] text-[15px] leading-[1.9] text-[#45637F] sm:text-[17px]">
              Explore our 12-page report on piracy exposure, commercial
              impact and protection priorities for production, OTT and
              live events. With sourced research, a measurement framework
              and a practical roadmap.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex w-full flex-wrap items-center gap-3.5">
              <a
                href="/brochure"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-md bg-[#8BB630] px-7 py-4 text-sm font-bold text-[#15334E] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7C9D18] sm:px-8"
              >
                Read the industry report
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              <a
                href="/documents/trackowls-piracy-impact-brochure.pdf"
                download
                className="inline-flex min-h-[56px] items-center justify-center gap-3 rounded-md border border-[#DCE6ED] bg-[#FFFFFF] px-7 py-4 text-sm font-bold text-[#15334E] transition-all duration-300 hover:border-[#648A13] hover:bg-[#F5F8F2] hover:text-[#648A13] sm:px-8"
              >
                Download PDF
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  aria-hidden="true"
                >
                  <path
                    d="M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Editorial feature panel */}
          <div className="relative w-full lg:pl-0">
            <div className="relative isolate min-h-[370px] overflow-hidden rounded-[11px] border-b-[8px] border-[#8BB630] bg-[#15334E] px-7 py-10 text-white sm:min-h-[435px] sm:px-11 sm:py-[50px] lg:min-h-[435px]">
              {/* Decorative circular outline */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-[76px] -top-[105px] -z-0 h-[265px] w-[265px] rounded-full border-[36px] border-[#8BB630]/25 sm:-right-[75px] sm:-top-[105px] sm:h-[310px] sm:w-[310px]"
              />

              <div className="relative z-10 flex h-full min-h-[310px] flex-col items-start sm:min-h-[325px]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8BB630] sm:text-xs">
                  TrackOwls insights / 2026
                </p>

                <h3 className="mt-11 max-w-[530px] text-[29px] font-bold leading-[1.2] tracking-[-0.035em] text-white sm:text-[36px] lg:text-[43px]">
                  Every release.
                  <br />
                  Every stream.
                  <br />
                  Every live moment.
                </h3>

                <p className="mt-10 text-[11px] font-medium uppercase tracking-[0.04em] text-[#E5EDF5] sm:text-sm">
                  Film &amp; production
                  <span className="mx-2 text-[#8BB630]">·</span>
                  OTT
                  <span className="mx-2 text-[#8BB630]">·</span>
                  Live sports
                </p>

                <div className="mt-auto pt-9">
                  <p className="text-[10px] font-bold uppercase tracking-[0.19em] text-[#8BB630] sm:text-xs">
                    Scan / Detect / Remove / Protect
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
