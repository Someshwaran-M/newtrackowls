
import React from "react";

function InsightsMain() {
  return (
    <section
      id="insights-main"
      className="w-full bg-white mt-22 px-5 py-6 font-['Roboto',sans-serif] sm:px-8 lg:px-27"
    >
      <div
        className="relative isolate mx-auto flex min-h-[320px] w-full max-w-[1400px] items-center overflow-hidden rounded-[10px] border border-[#8BB630]/30 bg-[#071D32] sm:min-h-[350px] lg:min-h-[360px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,25,45,0.97) 0%, rgba(5,25,45,0.91) 39%, rgba(5,25,45,0.52) 72%, rgba(5,25,45,0.67) 100%), url('/map.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Subtle digital grid */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,182,48,0.45) 1px, transparent 1.5px)",
            backgroundSize: "17px 17px",
            maskImage:
              "linear-gradient(90deg, transparent 10%, black 55%, black)",
          }}
        />

        {/* Atmospheric network glow */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_70%_20%,rgba(174,137,63,0.24),transparent_38%)]" />

        {/* Hero content */}
        <div className="relative z-10 w-full px-7 py-12 sm:px-10 sm:py-14 lg:px-10 lg:py-16">
          <div className="max-w-[720px]">
            <span className="mb-5 inline-flex items-center text-[10px] font-extrabold uppercase tracking-[2px] text-[#D5F51F]">
              INSIGHTS
            </span>

            <h1 className="m-0 max-w-[850px] text-[36px] font-bold leading-[1.06] tracking-[-0.055em] text-white sm:text-[48px] lg:text-[64px]">
  Practical intelligence for
  <span className="block text-[#7C9D18]">
    rights holders.
  </span>
</h1>

            <p className="mt-5 max-w-[600px] text-[14px] leading-[1.8] text-[#D0DCE8] sm:text-[16px]">
              Explore monitoring preparation, evidence handling and meaningful
              enforcement reporting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InsightsMain;
