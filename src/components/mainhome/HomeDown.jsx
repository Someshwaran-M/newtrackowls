import React from "react";

const categories = [
  "OTT & VOD",
  "LIVE SPORTS",
  "FILM",
  "BROADCAST",
  "MUSIC",
  "BRANDS",
];

export default function HomeDown() {
  return (
    <section className="relative w-full overflow-hidden   font-['Roboto',sans-serif] text-[#152019]">
      <div className="mx-auto flex min-h-[76px] max-w-[1420px] items-center gap-6 px-5 sm:px-8 lg:px-12">
        {/* Intro label — stays fixed */}
        <div className="relative z-10 flex w-[95px] shrink-0 flex-col justify-center border-r border-[#e1e8d9] py-2 pr-4 sm:w-[125px]">
          <span className="text-[9px] font-bold uppercase leading-[1.6] tracking-[0.12em] text-[#68746C]">
            Built for
          </span>
          <span className="text-[9px] font-bold uppercase leading-[1.6] tracking-[0.12em] text-[#68746C]">
            rights holders
          </span>
        </div>

        {/* Animated categories */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="flex w-max animate-[categoryScroll_22s_linear_infinite] hover:[animation-play-state:paused]">
            {/* Duplicate items to create a seamless loop */}
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center"
                aria-hidden={group === 1 ? "true" : undefined}
              >
                {categories.map((category, index) => (
                  <div
                    key={`${group}-${category}`}
                    className="flex shrink-0 items-center"
                  >
                    <span className="whitespace-nowrap px-4 text-[10px] font-bold uppercase tracking-[0.09em] text-[#29352c] transition-colors duration-300 hover:text-[#6D900B] sm:px-6 sm:text-[11px] lg:px-8">
                      {category}
                    </span>

                    {index < categories.length - 1 && (
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ADD132]" />
                    )}
                  </div>
                ))}
                <span className="mx-5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ADD132] sm:mx-7" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes categoryScroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-\\[categoryScroll_22s_linear_infinite\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
