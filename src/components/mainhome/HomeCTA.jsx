import React from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

function HomeCTA() {
  return (
    <section
      id="home-cta"
      className="relative w-full overflow-hidden bg-white px-4 py-5 font-['Roboto',sans-serif] sm:px-6 lg:px-8"
    >
      <div className="relative mx-auto max-w-[1500px] overflow-hidden rounded-[24px] border border-[#DDE8CE] bg-[#152019]">
        {/* Lime gradient accent */}
        <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-[#E5F8B9] via-[#ADD132] to-[#6D900B]" />

        {/* Background glow */}
        <div className="pointer-events-none absolute -right-20 -top-32 h-[340px] w-[340px] rounded-full bg-[#ADD132]/15 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-36 left-[35%] h-[280px] w-[280px] rounded-full bg-[#ADD132]/10 blur-[100px]" />

        
        <div className="relative flex flex-col gap-8 px-6 py-9 sm:px-9 sm:py-11 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-14 lg:py-14">
          {/* Left content */}
          <div className="min-w-0 max-w-[760px]">
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-[#ADD132]/25 bg-[#ADD132]/[0.08] px-3.5 py-2">
              <ShieldCheck className="h-4 w-4 text-[#ADD132]" />

              <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#C7E77A] sm:text-[10px]">
                Start with a conversation
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-[700px] text-[32px] font-bold leading-[1.1] tracking-[-0.045em] text-white sm:text-[40px] lg:text-[48px] xl:text-[54px]">
              Let’s protect what
              <br className="hidden sm:block" /> you’ve built.
            </h2>

            {/* Description */}
            <p className="mb-0 mt-5 max-w-[510px] text-[12px] leading-[1.9] text-[#C5CEC5] sm:text-[14px]">
              Tell us about your content, rights and protection priorities.
            </p>

            
          </div>

          {/* Right CTA */}
          <div className="relative z-10 flex shrink-0 flex-col items-start gap-4 lg:items-end">
            <Link
              to="/request-demo"
              className="group inline-flex min-h-[54px] w-full items-center justify-between gap-7 rounded-full bg-gradient-to-r from-[#D9F99D] via-[#ADD132] to-[#8BB630] px-6 py-4 text-[11px] font-extrabold text-[#152019] shadow-[0_8px_30px_rgba(173,209,50,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(173,209,50,0.25)] focus:outline-none focus:ring-2 focus:ring-[#ADD132] focus:ring-offset-4 focus:ring-offset-[#152019] sm:w-auto sm:min-w-[245px] sm:text-[12px]"
            >
              <span>Request a consultation</span>

              
            </Link>


          </div>
        </div>

        {/* Bottom lime line */}
        <div className="h-[3px] w-full bg-gradient-to-r from-[#6D900B] via-[#ADD132] to-transparent" />
      </div>
    </section>
  );
}

export default HomeCTA;