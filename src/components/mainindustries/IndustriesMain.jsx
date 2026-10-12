import React from "react";

function IndustriesMain() {
  return (
    <section
      id="industries-main"
      className="bg-white px-4 py-4 font-['Roboto',sans-serif] sm:px-6 lg:px-[110px] lg:py-28"
    >
      <div
        className="relative isolate flex min-h-[320px] w-full items-center overflow-hidden rounded-[14px] border border-[#294333] bg-[#091E32] sm:min-h-[400px] lg:min-h-[400px]"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(5, 25, 46, 0.97) 0%,
              rgba(7, 29, 48, 0.88) 43%,
              rgba(14, 43, 43, 0.70) 100%
            ),
            url('/map.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Subtle technical grid */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(139,182,48,0.5) 0.8px, transparent 0.8px)",
            backgroundSize: "12px 12px",
            maskImage:
              "linear-gradient(90deg, transparent, black 50%, black)",
          }}
        />

        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-[-100px] -z-10 h-[400px] w-[400px] rounded-full bg-[#8BB630]/10 blur-[100px]"
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1120px] px-6 py-10 sm:px-9 sm:py-12 lg:px-[60px] lg:py-[60px]">
          <span className="mb-5 inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[1.8px] text-[#D5F51F] sm:text-xs">
            <span className="h-[2px] w-6 bg-[#8BB630]" />
            Industries
          </span>

          <h1 className="max-w-[850px] text-[34px] font-bold leading-[1.12] tracking-[-1px] text-white sm:text-[42px] sm:tracking-[-1.5px] lg:text-[56px] lg:leading-[1.1] lg:tracking-[-2px]">
            Built for rights holders &amp; IP owners.
          </h1>

          <p className="mt-5 max-w-[620px] text-[14px] leading-[1.75] text-[#D0DCE8] sm:mt-6 sm:text-base lg:text-[18px] lg:leading-[1.7]">
            Different assets call for different protection priorities. Explore
            an approach for your industry.
          </p>

          
        </div>

        
      </div>
    </section>
  );
}

export default IndustriesMain;
