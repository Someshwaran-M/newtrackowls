
import React from "react";
import MissionVisionAnimation from "./MissionVision";

function AboutMission() {
  return (
    <section
      id="about-mission"
      className="w-full bg-white px-5 py-12 font-['Roboto',sans-serif] sm:px-8 sm:py-16 lg:px-10 lg:py-[76px]"
    >
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-center gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-[70px]">
        {/* Left: TrackOwls logo */}
        <div className="flex min-h-[220px] items-center justify-center lg:min-h-[300px]">
          <img
            src="/images/logo/logo.jpeg"
            alt="TrackOwls — Scan, Detect, Remove, Protect"
            className="h-auto w-full max-w-[460px] object-contain"
          />
        </div>

        {/* Right: Mission and vision */}
        <div className="w-full">

           <h2 className="max-w-[720px] text-[36px] font-bold leading-[1.12] tracking-[-1.5px] text-[#19334E] sm:text-[44px] lg:text-[50px]">
            Make protected content harder to exploit.
          </h2>
          <MissionVisionAnimation />

          
        </div>
      </div>
    </section>
  );
}

export default AboutMission;
