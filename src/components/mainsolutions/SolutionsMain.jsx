import React from "react";

function SolutionsMain() {
  return (

    <section
      id="solutions-main"
      className="w-full bg-[#EAF3F9] px-3 pt-26 pb-7 font-['Roboto',sans-serif] sm:px-5 sm:pt-25 sm:pb-9 lg:px-8 lg:pt-25 lg:pb-8"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        <div className="relative isolate flex min-h-[300px] w-full items-center overflow-hidden rounded-[14px] border border-[#8BB630]/30 bg-[#D5DDDA] sm:min-h-[400px] sm:rounded-[17px] lg:min-h-[410px] xl:min-h-[440px]">

    
       {/* Background image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/globe.png')",
            }}
          />

          {/* Light blue overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[-1] bg-gradient-to-r from-[#DCEAF4]/95 via-[#DCEAF4]/85 to-[#DCEAF4]/45"
          />

          {/* Soft blue atmospheric glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 z-[-1] h-64 w-64 -translate-y-1/2 rounded-full bg-[#8BBCE0]/30 blur-3xl sm:h-80 sm:w-80 lg:h-[450px] lg:w-[450px]"
          />

          {/* Hero content */}
          <div className="flex min-h-[340px] items-center px-5 py-10 min-[400px]:min-h-[360px] sm:min-h-[400px] sm:px-9 sm:py-12 lg:min-h-[450px] lg:px-[60px] lg:py-[65px] xl:min-h-[490px]">
            <div className="relative z-10 w-full max-w-[1050px]">
              <span className="mb-5 inline-flex items-center text-[10px] font-extrabold uppercase tracking-[1.7px] text-[#8bb630] min-[400px]:text-[11px] sm:mb-6 sm:text-[12px] sm:tracking-[2px] lg:text-[13px]">
                OUR SOLUTIONS
              </span>

              <h1 className="max-w-[950px] text-[34px] font-bold leading-[1.12] tracking-[-1.1px] text-[#173149] min-[400px]:text-[38px] min-[400px]:tracking-[-1.4px] sm:text-[46px] sm:leading-[1.1] sm:tracking-[-1.8px] lg:text-[62px] lg:leading-[1.08] lg:tracking-[-2.3px] xl:text-[68px]">
                Protect. Investigate. Act.
              </h1>

              <p className="mt-5 max-w-[760px] text-[13px] leading-[1.8] text-[#526B7D] min-[400px]:text-[14px] sm:mt-6 sm:text-[16px] sm:leading-[1.85] lg:text-[18px] xl:text-[19px]">
                Digital anti-piracy and brand protection services organized around the assets and channels that matter to your business.
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </section>

          )}
  


export default SolutionsMain;
