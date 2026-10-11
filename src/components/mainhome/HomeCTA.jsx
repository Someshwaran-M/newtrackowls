
import React from "react";
import { Link } from "react-router-dom";

function HomeCTA() {
  return (
    <section
      id="home-cta"
      className="w-full border-y border-[#203B53] bg-[#112D45] font-['Roboto',sans-serif]"
    >
      <div className="mx-auto flex max-w-[1450px] flex-col justify-between gap-8 px-6 py-12 sm:px-10 sm:py-14 lg:flex-row lg:items-center lg:gap-12 lg:px-16 lg:py-[72px]">
        {/* Left content */}
        <div className="min-w-0">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.19em] text-[#ADD132] sm:text-xs">
            Start with a conversation
          </p>

          <h2 className="m-0 text-[clamp(32px,4vw,54px)] font-bold leading-[1.12] tracking-[-0.04em] text-[#F4F7FB]">
            Let’s protect what you’ve built.
          </h2>

          <p className="mb-0 mt-5 text-[14px] leading-relaxed text-[#C0D0DE] sm:text-base">
            Tell us about your content, rights and protection priorities.
          </p>
        </div>

        {/* Right button */}
        <div className="shrink-0 lg:pl-8">
          <Link
            to="/request-demo"
            className="inline-flex min-h-[55px] w-full items-center justify-center rounded-[5px] bg-[#648A12] px-7 py-4 text-center text-[13px] font-bold text-white transition-colors duration-300 hover:bg-[#7DA91B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ADD132] focus-visible:ring-offset-4 focus-visible:ring-offset-[#112D45] sm:w-auto sm:min-w-[227px]"
          >
            Request a consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCTA;
