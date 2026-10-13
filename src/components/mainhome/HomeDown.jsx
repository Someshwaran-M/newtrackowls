
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
    <section className="w-full overflow-hidden bg-[#102F45] font-['Roboto',sans-serif] text-white">
      <div className="mx-auto flex min-h-[76px] max-w-[1500px] items-center gap-5 px-5 sm:gap-8 sm:px-8 lg:gap-10 lg:px-12">
        {/* FIXED LEFT LABEL */}
        <div className="flex w-[105px] shrink-0 flex-col justify-center sm:w-[150px]">
          <span className="text-[10px] font-normal uppercase leading-[1.7] tracking-wide text-white/90 sm:text-xs">
            Built for rights
          </span>
          <span className="text-[10px] font-normal uppercase leading-[1.7] tracking-wide text-white/90 sm:text-xs">
            holders
          </span>
        </div>

        {/* ANIMATED CATEGORY TRACK */}
        <div className="min-w-0 flex-1 overflow-hidden">
          <div className="category-marquee flex w-max">
            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center"
                aria-hidden={group === 1 ? "true" : undefined}
              >
                {categories.map((category) => (
                  <div
                    key={`${group}-${category}`}
                    className="flex w-[170px] shrink-0 items-center justify-center px-4 sm:w-[200px] lg:w-[248px]"
                  >
                    <span className="whitespace-nowrap text-center text-xs font-bold uppercase tracking-wide text-white transition-colors duration-300 hover:text-[#ADD132] sm:text-sm">
                      {category}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .category-marquee {
          animation: homeDownMarquee 28s linear infinite;
          will-change: transform;
        }

        .category-marquee:hover {
          animation-play-state: paused;
        }

        @keyframes homeDownMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (max-width: 640px) {
          .category-marquee {
            animation-duration: 22s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .category-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
