
import React from "react";

function SolutionsMain() {
  return (
    <section
      id="solutions-main"
      className="w-full bg-white mt-25 px-4 py-4 font-['Roboto',sans-serif] sm:px-6 sm:py-5 lg:px-[38px]"
    >
      <div className="relative isolate mx-auto flex min-h-[300px] w-full max-w-[1290px] items-center overflow-hidden rounded-[12px] border border-[#8BB630]/25 bg-[#071D32] sm:min-h-[330px] lg:min-h-[360px]">
        {/* Digital world map background */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(5, 25, 45, 0.98) 0%,
                rgba(5, 25, 45, 0.91) 38%,
                rgba(5, 25, 45, 0.58) 70%,
                rgba(5, 25, 45, 0.70) 100%
              ),
              url('/map.png')
            `,
          }}
        />

        {/* Subtle network grid */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.09]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,182,48,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(139,182,48,0.25) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage:
              "linear-gradient(90deg, transparent, black 45%, black)",
          }}
        />

        {/* Warm digital network glow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[58%] bg-[radial-gradient(ellipse_at_65%_35%,rgba(180,140,75,0.22),transparent_68%)]" />

        {/* Banner content */}
        <div className="w-full px-6 py-10 sm:px-9 sm:py-12 lg:px-[47px] lg:py-[52px]">
          <div className="max-w-[850px]">
            <span className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-extrabold uppercase tracking-[1.8px] text-[#C3E600] sm:mb-6 sm:text-xs">
              <span className="h-[2px] w-5 bg-[#C3E600]" />
              Our solutions
            </span>

            
          <h1 className="m-0 max-w-[850px] text-[40px] font-bold leading-[1.15] tracking-[-0.04em] text-white sm:text-[40px] sm:leading-[1.12] lg:text-[62px] lg:leading-[1.1]">
  Protect.
  <span className="block text-[#7C9D18]">
    Investigate. Act.
  </span>
</h1>
            <p className="mt-5 max-w-[650px] text-[14px] font-normal leading-[1.75] text-[#C8D6E4] sm:mt-6 sm:text-base lg:text-[17px] lg:leading-[1.8]">
              Digital anti-piracy and brand protection services organized
              around the assets and channels that matter to your business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolutionsMain;