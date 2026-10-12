import React from "react";

function PlatformMain() {
  return (
    <section
      id="platform-main"
      className="w-full  mt-25 bg-white px-4 py-3 font-['Roboto',sans-serif] sm:px-6 lg:px-28"
    >
      <div
        className="relative isolate flex min-h-[260px] w-full items-center overflow-hidden rounded-[9px] border border-[#294333] bg-[#071D32] bg-cover bg-center bg-no-repeat sm:min-h-[280px] lg:min-h-[300px]"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(5, 25, 46, 0.97) 0%,
              rgba(5, 25, 46, 0.88) 48%,
              rgba(7, 32, 48, 0.65) 100%
            ),
            url('/map.png')
          `,
        }}
      >
        {/* Subtle digital grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.10]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(139,182,48,0.55) 0.8px, transparent 0.8px)",
            backgroundSize: "12px 12px",
            maskImage:
              "linear-gradient(90deg, transparent, black 50%, black)",
          }}
        />

        {/* Ambient lime glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 top-[-80px] -z-10 h-[280px] w-[280px] rounded-full bg-[#8BB630]/10 blur-[85px]"
        />

        {/* Hero content */}
        <div className="relative z-10 w-full px-5 py-9 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <span className="mb-4 inline-flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[1.8px] text-[#D5F51F] sm:text-[11px]">
            <span className="h-[2px] w-5 bg-[#8BB630]" />
            Platform — In Development
          </span>

          
<h1 className="max-w-[850px] text-[36px] font-bold leading-[1.06] tracking-[-0.055em] text-white sm:text-[48px] lg:text-[64px]">
  One platform.
  <span className="block text-[#8BB630]">
    The complete anti-piracy workflow.
  </span>
</h1>

          <p className="mt-4 max-w-[570px] text-[13px] leading-[1.8] text-[#D0DCE8] sm:mt-5 sm:text-[15px]">
            A planned workspace to connect protected assets, cases, evidence,
            analyst assignments and enforcement reporting.
          </p>
        </div>
      </div>
    </section>
  );
}

export default PlatformMain;
