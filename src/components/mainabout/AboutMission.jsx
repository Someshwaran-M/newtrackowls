
import React from "react";

function AboutMission() {
  return (
    <section
      id="about-mission"
      className="relative w-full overflow-hidden bg-[#EAF3F9] px-3 py-5 font-['Roboto',sans-serif] sm:px-5 sm:py-7 lg:px-[18px] lg:py-[8px]"
    >
      {/* Main light blue-grey panel */}
      <div className="relative isolate mx-auto w-full max-w-[1350px] overflow-hidden rounded-[18px] border border-[#D7E2E5] bg-[#D3DCDA]">
        {/* Subtle particle texture */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-70"
          style={{
            backgroundImage: `
              radial-gradient(circle, rgba(255,255,255,0.8) 0.8px, transparent 1px),
              radial-gradient(circle, rgba(139,182,48,0.32) 0.7px, transparent 1px)
            `,
            backgroundSize: "13px 13px, 19px 19px",
            backgroundPosition: "0 0, 7px 9px",
            maskImage:
              "radial-gradient(ellipse at 70% 45%, black 0%, transparent 65%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 70% 45%, black 0%, transparent 65%)",
          }}
        />

        <div className="relative grid grid-cols-1 items-center gap-7 px-5 py-4 min-[400px]:px-6 sm:gap-9 sm:px-8 sm:py-4 lg:min-h-[615px] lg:grid-cols-[0.78fr_1.22fr] lg:gap-[70px] lg:px-[75px] lg:py-[60px]">
          {/* Logo */}
          <div className="flex w-full items-center justify-center lg:justify-start">
            <img
              src="/images/logo/TrackOwls Owl Logo - Copy.png"
              alt="TrackOwls — Scan, Detect, Remove, Protect"
              className="h-auto w-full max-w-[310px] object-contain sm:max-w-[380px] lg:max-w-[490px]"
            />
          </div>

          {/* Mission and vision */}
          <div className="w-full min-w-0">
            <span className="mb-5 inline-block text-[10px] font-bold uppercase tracking-[1.8px] text-[#56810D] sm:mb-6 sm:text-[11px] sm:tracking-[2px] lg:mb-[30px] lg:text-[14px]">
              Our mission
            </span>

            <h2 className="max-w-[760px] text-[31px] font-bold leading-[1.12] tracking-[-1.1px] text-[#142D47] min-[400px]:text-[34px] sm:text-[40px] sm:tracking-[-1.5px] md:text-[46px] lg:text-[62px] lg:leading-[1.16] lg:tracking-[-2px]">
              Make protected content harder to exploit.
            </h2>

            <p className="mt-4 max-w-[760px] text-[14px] leading-[1.8] text-[#536D86] min-[400px]:text-[15px] sm:mt-5 sm:text-[16px] sm:leading-[1.85] lg:mt-[22px] lg:text-[20px]">
              Our approach connects technology, human intelligence and
              enforcement operations. We prioritize verification, evidence and
              a clear record of what happens next.
            </p>

            {/* Vision */}
            <div className="mt-7 sm:mt-8 lg:mt-[38px]">
              <h3 className="text-[18px] font-bold leading-tight tracking-[-0.4px] text-[#19334E] sm:text-[20px] lg:text-[24px]">
                Our vision
              </h3>

              <p className="mt-3 max-w-[780px] text-[14px] leading-[1.8] text-[#536D86] min-[400px]:text-[15px] sm:text-[16px] sm:leading-[1.85] lg:mt-[18px] lg:text-[20px]">
                A trusted protection ecosystem where content owners and brands
                can understand their exposure and act on infringement.
              </p>
            </div>

            {/* Brand tagline */}
            <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium uppercase tracking-[1.1px] text-[#19334E] sm:mt-8 sm:gap-x-4 sm:text-[11px] sm:tracking-[1.4px] lg:mt-[38px] lg:gap-x-[17px] lg:text-[14px]">
              <span>Scan</span>
              <span className="font-bold text-[#648A13]">|</span>
              <span>Detect</span>
              <span className="font-bold text-[#648A13]">|</span>
              <span>Remove</span>
              <span className="font-bold text-[#648A13]">|</span>
              <span>Protect</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMission;
