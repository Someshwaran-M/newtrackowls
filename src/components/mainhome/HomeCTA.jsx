import React from "react";
import { Link } from "react-router-dom";

function HomeCTA() {
  return (
    <section
      id="home-cta"
      className="w-full border-y border-[rgba(171,198,215,0.18)] bg-[rgba(10,26,46,0.65)] backdrop-blur-xl font-['Roboto',sans-serif]"
    >
      <div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-8 px-6 py-12 sm:px-10 sm:py-14 lg:flex-row lg:items-center lg:gap-12 lg:px-16 lg:py-[72px]">
        {/* Left content */}
        <div className="min-w-0">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.19em] text-[#d1ed14] sm:text-xs">
            Start with a conversation
          </p>

          <h2 className="m-0 text-[clamp(32px,4vw,54px)] font-bold leading-[1.12] tracking-[-0.04em] text-[#f8fafc]">
            Let’s protect what you’ve built.
          </h2>

          <p className="mb-0 mt-5 text-[14px] leading-relaxed text-[#b7cbd9] sm:text-base">
            Tell us about your content, rights and protection priorities.
          </p>
        </div>

        {/* Right button */}
        <div className="shrink-0 lg:pl-8">
          <Link
            to="/contact"
            className="inline-flex min-h-[55px] w-full items-center justify-center rounded-[6px] bg-[#d1ed14] px-8 py-4 text-center text-[14px] font-bold text-[#02040d] transition-colors duration-300 hover:bg-[#e2fa2e] hover:shadow-[0_0_25px_rgba(209,237,20,0.4)] sm:w-auto sm:min-w-[227px]"
          >
            Request a consultation →
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeCTA;
