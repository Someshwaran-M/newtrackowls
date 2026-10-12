
import React from "react";

export default function HomePiracyBrochure() {
  return (
    <section
      id="piracy-brochure"
      className="w-full overflow-hidden bg-[#EEF2ED] font-['Roboto',Arial,sans-serif] text-[#172D47]"
    >
      <div className="mx-auto max-w-[1576px] px-6 py-[72px] sm:px-10 sm:py-[88px] lg:px-0 lg:py-[118px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-[76px]">
          {/* LEFT CONTENT */}
          <div className="flex min-w-0 flex-col items-start">
            <p className="mb-[29px] text-[11px] font-bold uppercase leading-[1.4] tracking-[2.2px] text-[#568018] sm:text-[12px]">
              TrackOwls insights / Industry report
            </p>

            <h2 className="m-0 text-[42px] font-bold leading-[1.12] tracking-[-1.7px] text-[#172D47] sm:text-[54px] lg:text-[64px]">
              Digital piracy.
              <span className="block">Real consequences.</span>
            </h2>

            <p className="mt-[24px] max-w-[730px] text-[16px] font-normal leading-[1.72] text-[#58708A] sm:text-[18px]">
              Explore our 12-page report on piracy exposure, commercial
              impact and protection priorities for production, OTT and
              live events. With sourced research, a measurement framework
              and a practical roadmap.
            </p>

            {/* ACTION BUTTONS */}
            <div className="mt-[36px] flex flex-wrap items-center gap-4">
              <a
                href="/brochure"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[61px] items-center justify-center rounded-[6px] bg-[#648B13] px-[30px] py-[18px] text-[15px] font-bold text-white transition-colors duration-200 hover:bg-[#52740E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#648B13]"
              >
                Read the industry report
              </a>

              <a
                href="/documents/trackowls-piracy-impact-brochure.pdf"
                download
                className="inline-flex min-h-[61px] items-center justify-center rounded-[6px] border border-[#C5D3DE] bg-transparent px-[29px] py-[18px] text-[15px] font-bold text-[#172D47] transition-colors duration-200 hover:border-[#648B13] hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#648B13]"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* RIGHT FEATURE PANEL */}
          <div className="relative min-w-0">
            <div className="relative isolate min-h-[430px] overflow-hidden rounded-[13px] border-b-[10px] border-[#D0F20A] bg-[#102B43] px-7 py-10 text-white sm:min-h-[475px] sm:px-[49px] sm:py-[57px] lg:min-h-[494px]">
              {/* Cropped decorative circle */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-[83px] -top-[119px] -z-0 h-[285px] w-[285px] rounded-full border-[39px] border-[#65802D]/30 sm:-right-[77px] sm:-top-[120px] sm:h-[325px] sm:w-[325px]"
              />

              <div className="relative z-10 flex min-h-[345px] flex-col items-start sm:min-h-[350px]">
                <p className="m-0 text-[11px] font-bold uppercase leading-[1.5] tracking-[1.8px] text-[#D0F20A] sm:text-[13px]">
                  TrackOwls insights / 2026
                </p>

                <h3 className="mt-[52px] m-0 text-[32px] font-bold leading-[1.19] tracking-[-0.7px] text-white sm:text-[43px] lg:text-[47px]">
                  Every release.
                  <br />
                  Every stream.
                  <br />
                  Every live moment.
                </h3>

                <p className="mt-[46px] text-[12px] font-normal uppercase leading-[1.6] tracking-[0.7px] text-[#E2E9F0] sm:text-[15px]">
                  Film &amp; production
                  <span className="mx-[7px]">·</span>
                  OTT
                  <span className="mx-[7px]">·</span>
                  Live sports
                </p>

                <p className="mt-auto pt-8 text-[11px] font-bold uppercase leading-[1.5] tracking-[1.8px] text-[#D0F20A] sm:text-[13px]">
                  Scan / Detect / Remove / Protect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RESPONSIVE ADJUSTMENTS */}
      <style>{`
        #piracy-brochure,
        #piracy-brochure * {
          box-sizing: border-box;
        }

        @media (min-width: 1024px) {
          #piracy-brochure > div {
            width: calc(100% - 80px);
          }
        }

        @media (min-width: 1600px) {
          #piracy-brochure > div {
            width: calc(100% - 314px);
          }
        }

        @media (max-width: 1023px) {
          #piracy-brochure > div {
            padding-top: 64px;
            padding-bottom: 64px;
          }
        }

        @media (max-width: 640px) {
          #piracy-brochure > div {
            padding-top: 44px;
            padding-bottom: 44px;
          }

          #piracy-brochure h2 {
            font-size: clamp(36px, 9vw, 46px);
            letter-spacing: -1.2px;
          }

          #piracy-brochure h3 {
            font-size: clamp(30px, 8vw, 38px);
          }

          #piracy-brochure .brochure-actions {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #piracy-brochure * {
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
