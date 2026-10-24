import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Video & film",
  "Live broadcasts",
  "Music & audio",
  "Digital publications",
  "Games & software",
  "Brand assets",
];

export default function HomeMain() {
  const navigate = useNavigate();

  const handleContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/contact");
    }
  };

  return (
    <>
      <section
        id="home"
        className="galaxy-voyage"
        aria-labelledby="protection-title"
      >
        <div className="galaxy-sticky">
          <div className="galaxy-shade" aria-hidden="true" />

          <div className="galaxy-content mx-auto w-full max-w-[1500px] px-6 lg:px-12">
            <div className="protection-copy pt-16 sm:pt-0">
              <div className="protection-eyebrow flex items-center gap-3">
                <span className="h-[1px] w-7 bg-[#d1ed14]" />
                <span className="text-xs font-bold tracking-[2px] uppercase text-[#d1ed14]">
                  DIGITAL ANTI-PIRACY &amp; CONTENT PROTECTION
                </span>
              </div>

              <h1
                id="protection-title"
                className="my-5 text-[clamp(42px,5.5vw,78px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#f7f5e8]"
              >
                Protect your content.
                <br />
                <em className="not-italic text-[#d1ed14]">
                  Stop digital piracy.
                </em>
              </h1>

              <p className="max-w-[620px] text-[16px] leading-[1.7] text-[#cfdeeb] sm:text-[18px]">
                Technology, intelligence and enforcement to help rights
                holders detect online infringement and protect digital
                content and brands.
              </p>

              <div className="protection-slogan my-6 flex flex-wrap items-center gap-3 text-xs font-bold tracking-[2px] text-[#d1ed14]">
                <span className="text-white">SCAN</span>
                <span className="text-[#d1ed14]">|</span>
                <span className="text-white">DETECT</span>
                <span className="text-[#d1ed14]">|</span>
                <span className="text-white">REMOVE</span>
                <span className="text-[#d1ed14]">|</span>
                <span className="text-white">PROTECT</span>
              </div>

              <div className="protection-actions flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={handleContact}
                  className="protection-primary inline-flex items-center gap-2 rounded-[6px] bg-[#d1ed14] px-6 py-3.5 text-sm font-bold text-[#02040d] transition duration-200 hover:bg-[#e2fa2e] hover:shadow-[0_0_25px_rgba(209,237,20,0.4)]"
                >
                  Request a consultation 
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/solutions")}
                  className="protection-secondary inline-flex items-center gap-2 rounded-[6px] border border-[rgba(171,198,215,0.35)] bg-[rgba(2,4,13,0.7)] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-200 hover:border-[#d1ed14] hover:bg-[rgba(2,4,13,0.9)]"
                >
                  Explore our solutions <span aria-hidden="true">→</span>
                </button>
              </div>

              <div className="protection-proof mt-6 flex items-center gap-2 text-xs text-[#a9c5d8]">
                <svg
                  className="h-4 w-4 shrink-0 text-[#d1ed14]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Evidence-led action. Clear case visibility.</span>
              </div>

              {/* Preserved categories badges & walkthrough link with glass styling */}
              <div className="mt-6 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center rounded-[5px] border border-[rgba(171,198,215,0.22)] bg-[rgba(15,39,60,0.6)] px-3 py-1.5 text-xs font-medium text-[#dce7f0] backdrop-blur-md transition hover:border-[#d1ed14] hover:text-white"
                  >
                    {category}
                  </span>
                ))}
              </div>

              
            </div>
          </div>

          {/* Sticky footer with universe stage and scroll cue */}
          <div className="galaxy-footer mx-auto flex w-full max-w-[1500px] items-end justify-between px-6 pb-6 lg:px-12">
            <div className="flex flex-col gap-1">
              <span className="galaxy-kicker text-[11px] font-bold uppercase tracking-[2px] text-[#d1ed14]">
                THE TRACKOWLS UNIVERSE
              </span>
              <span
                data-voyage-label="true"
                className="text-xs font-bold tracking-[2px] text-white sm:text-sm"
              >
                01 / A POINT OF LIGHT
              </span>
            </div>

            <a
              href="#beyond-voyage"
              className="flex items-center gap-2 text-xs font-medium tracking-wide text-[#b7cbd9] transition duration-200 hover:text-[#d1ed14]"
            >
              <span>Scroll to explore</span>
              <span aria-hidden="true" className="animate-bounce">↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Target anchor for smooth scroll past voyage */}
      <div id="beyond-voyage" className="relative -top-20" aria-hidden="true" />
    </>
  );
}
