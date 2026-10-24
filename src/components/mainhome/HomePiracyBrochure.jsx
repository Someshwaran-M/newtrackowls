
import React from "react";
import { Link } from "react-router-dom";

export default function HomePiracyBrochure() {
  return (
    <section
      id="piracy-brochure"
      className="w-full overflow-hidden bg-transparent border-y border-[rgba(171,198,215,0.15)] font-['Roboto',Arial,sans-serif] text-white"
    >
      <div className="mx-auto max-w-[1576px] px-6 py-[72px] sm:px-10 sm:py-[88px] lg:px-12 lg:py-[108px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-[76px]">
          {/* LEFT CONTENT */}
          <div className="flex min-w-0 flex-col items-start">
            <p className="mb-[29px] text-[11px] font-bold uppercase leading-[1.4] tracking-[2.2px] text-[#d1ed14] sm:text-[12px]">
              TrackOwls insights / Industry report
            </p>

            <h2 className="m-0 text-[42px] font-bold leading-[1.12] tracking-[-1.7px] text-[#f8fafc] sm:text-[54px] lg:text-[64px]">
              Digital piracy.
              <span className="block">Real consequences.</span>
            </h2>

            <p className="mt-[24px] max-w-[730px] text-[16px] font-normal leading-[1.72] text-[#b7cbd9] sm:text-[18px]">
              Explore our 12-page report on piracy exposure, commercial
              impact and protection priorities for production, OTT and
              live events. With sourced research, a measurement framework
              and a practical roadmap.
            </p>

            <div className="brochure-actions mt-[36px] flex flex-wrap items-center gap-4">
              <Link
                to="/piracy"
                className="inline-flex min-h-[58px] items-center justify-center rounded-[6px] bg-[#d1ed14] px-[30px] py-[16px] text-[15px] font-bold text-[#02040d] transition-colors duration-200 hover:bg-[#e2fa2e]"
              >
                Read the industry report
              </Link>

              <a
                href="/reports/digital-piracy-report.pdf"
                download
                className="inline-flex min-h-[58px] items-center justify-center rounded-[6px] border border-[rgba(171,198,215,0.3)] bg-[rgba(10,26,46,0.6)] px-[29px] py-[16px] text-[15px] font-bold text-white backdrop-blur-md transition-colors duration-200 hover:border-[#d1ed14] hover:bg-[rgba(14,34,60,0.85)]"
              >
                Download PDF
              </a>
            </div>
          </div>

          {/* RIGHT FEATURE PANEL */}
          <div className="relative min-w-0">
            <div className="relative isolate min-h-[430px] overflow-hidden rounded-[13px] border border-[rgba(171,198,215,0.2)] border-b-[10px] border-b-[#d1ed14] bg-[rgba(16,43,67,0.7)] backdrop-blur-xl px-7 py-10 text-white sm:min-h-[475px] sm:px-[49px] sm:py-[57px] lg:min-h-[494px]">
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
            width: 100%;
            padding: 26px 13px 34px;
          }

          #piracy-brochure .grid {
            gap: 62px;
          }

          /* Left content: mobile text sizes only */
          #piracy-brochure p:first-child {
            margin-bottom: 19px;
            font-size: 10px;
            letter-spacing: 1.5px;
            line-height: 1.6;
          }

          #piracy-brochure h2 {
            font-size: 32px;
            line-height: 1.14;
            letter-spacing: -0.8px;
          }

          #piracy-brochure .grid > div:first-child > p:nth-of-type(2) {
            margin-top: 17px;
            font-size: 14px;
            line-height: 1.62;
          }

          /* Buttons: preserve their layout and styling */
          #piracy-brochure .brochure-actions a {
            font-size: 12px;
            line-height: 1.35;
          }

          /* Right feature panel: mobile text sizes only */
          #piracy-brochure .grid > div:last-child > div > div > p:first-child {
            font-size: 10px;
          }

          #piracy-brochure h3 {
            font-size: 32px;
            line-height: 1.2;
            letter-spacing: -0.5px;
          }

          #piracy-brochure .grid > div:last-child p:nth-of-type(2) {
            font-size: 11px;
            line-height: 1.7;
            letter-spacing: 0.45px;
          }

          #piracy-brochure .grid > div:last-child p:last-child {
            font-size: 10px;
            letter-spacing: 1.3px;
          }
        }
      `}</style>
    </section>
  );
}
