
import React from "react";

function PiracyMain() {
  return (
    <section
      id="piracy-main"
      className="mt-20 w-full bg-[#EAF3F9] px-4 py-3 font-['Roboto',sans-serif] sm:mt-24 sm:px-6 lg:mt-2 lg:px-4"
    >
      <div
      className="relative mx-auto flex min-h-[420px] max-w-[1300px] items-center overflow-hidden rounded-[10px] border border-[#8BB630]/40 bg-[#071E35] px-6 py-10 sm:min-h-[460px] sm:px-9 sm:py-12 lg:min-h-[580px] lg:px-10 lg:py-12"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(5, 25, 45, 0.96) 0%,
              rgba(5, 25, 45, 0.88) 35%,
              rgba(5, 25, 45, 0.55) 68%,
              rgba(5, 25, 45, 0.48) 100%
            ),
            url('/map.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Subtle digital grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent 0px, transparent 39px, rgba(139,182,48,0.35) 40px), repeating-linear-gradient(90deg, transparent 0px, transparent 39px, rgba(139,182,48,0.25) 40px)",
            maskImage:
              "linear-gradient(90deg, transparent 0%, black 60%, black 100%)",
          }}
        />

        {/* Lime-green map glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 75% 30%, rgba(139,182,48,0.18), transparent 42%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 max-w-[740px]">
          <span className="inline-block text-[10px] font-extrabold uppercase tracking-[2px] text-[#D5F51F] sm:text-[11px]">
            TRACKOWLS INSIGHTS / OCTOBER 2026
          </span>

          
<h1 className="mt-4 max-w-[700px] text-[36px] font-extrabold leading-[1.1] tracking-[-1.5px] text-white sm:mt-5 sm:text-[48px] sm:leading-[1.1] sm:tracking-[-2px] lg:text-[54px] lg:tracking-[-2.2px]">
  Digital piracy.
  <span className="block text-[#8BB630]">
    Real consequences.
  </span>
</h1>


          <p className="mt-4 max-w-[650px] text-[14px] leading-[1.8] text-[#D1DEEA] sm:mt-5 sm:text-[16px]">
            Protecting the value of film, OTT and live events. An original
            guide to exposure, commercial impact and evidence-led protection.
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
              className="inline-flex min-h-[40px] items-center justify-center rounded-[4px] border border-[#B9CADA] px-5 py-3 text-[11px] font-medium text-[#D1DEEA] transition-colors duration-300 hover:border-[#8BB630] hover:text-[#D5F51F]"
            >
              Read online
            </a>
          </div>

          <p className="mt-5 text-[10px] font-medium leading-relaxed text-[#D1DEEA]">
            Film &amp; production / OTT / Live sports &amp; events · 15-minute
            read
          </p>
        </div>
      </div>
    </section>
  );
}

export default PiracyMain;
