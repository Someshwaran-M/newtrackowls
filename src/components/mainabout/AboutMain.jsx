import React from "react";

function AboutMain() {
  return (
    <section
      id="about-main"
      className="w-full bg-white mt-14 px-4 py-4 font-['Roboto',sans-serif] sm:px-6 sm:py-5 lg:px-[38px]"
    >
      <div className="relative isolate mx-auto mt-8 flex min-h-[340px] w-full max-w-[1290px] items-center overflow-hidden rounded-[12px] border border-[#8BB630]/25 bg-[#071D32] sm:mt-10 sm:min-h-[370px] lg:mt-10 lg:min-h-[400px]">
        {/* Globe background */}
        <div
          className="pointer-events-none absolute inset-0 -z-10 bg-cover bg-center"
          style={{
            backgroundImage: `
              linear-gradient(
                90deg,
                rgba(5, 25, 45, 0.98) 0%,
                rgba(5, 25, 45, 0.90) 38%,
                rgba(5, 25, 45, 0.52) 72%,
                rgba(5, 25, 45, 0.62) 100%
              ),
              url('/globe.png')
            `,
          }}
        />

        {/* Digital grid overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.08]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(139,182,48,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139,182,48,0.3) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage:
              "linear-gradient(90deg, transparent, black 45%, black)",
          }}
        />

        {/* Green atmospheric glow */}
        <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 w-[55%] bg-[radial-gradient(ellipse_at_70%_45%,rgba(139,182,48,0.16),transparent_70%)]" />

        {/* Content */}
        <div className="w-full px-6 py-10 sm:px-9 sm:py-12 lg:px-[47px] lg:py-[52px]">
          <div className="max-w-[820px]">
            <span className="mb-5 inline-flex items-center gap-2.5 text-[11px] font-extrabold tracking-[1.8px] text-[#C3E600] sm:mb-6 sm:text-xs">
              <span className="h-[2px] w-5 bg-[#C3E600]" />
              ABOUT TRACKOWLS
            </span>

            <h1 className="max-w-[760px] text-[32px] font-extrabold leading-[1.15] tracking-[-1px] text-white sm:text-[40px] sm:leading-[1.12] sm:tracking-[-1.4px] lg:text-[52px] lg:leading-[1.1] lg:tracking-[-1.8px]">
              Vigilance for valuable
              <br className="hidden sm:block" /> intellectual property.
            </h1>

            <p className="mt-5 max-w-[650px] text-[14px] font-normal leading-[1.8] text-[#C8D6E4] sm:mt-6 sm:text-base lg:text-[17px] lg:leading-[1.85]">
              TrackOwls is focused on helping content owners and brands
              identify, investigate and respond to online infringement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMain;
