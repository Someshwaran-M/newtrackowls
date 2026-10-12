import React, { useEffect, useState } from "react";
import { Eye, Target } from "lucide-react";

const missionVisionCards = [
  {
    id: "mission",
    label: "OUR MISSION",
    icon: Target,
    
    description:
      "Our approach connects technology, human intelligence and enforcement operations. We prioritize verification, evidence and a clear record of what happens next.",
    theme: "mission",
  },
  {
    id: "vision",
    label: "OUR VISION",
    icon: Eye,
    
    description:
      "A trusted protection ecosystem where content owners and brands can understand their exposure and act on infringement.",
    theme: "vision",
  },
];

export default function MissionVisionAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current === 0 ? 1 : 0));
    }, 5000);

    return () => clearInterval(timer);
  }, [paused]);

  return (
    <div
      className="w-full font-['Roboto',sans-serif]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Two-card front/back stage */}
      <div className="relative mx-auto w-full mt-10 max-w-[560px]">
        <div className="relative h-[290px] sm:h-[320px] lg:h-[250px]">
          {missionVisionCards.map((card, index) => {
            const Icon = card.icon;
            const active = activeIndex === index;

            return (
              <article
                key={card.id}
                aria-hidden={!active}
                className={`mission-flip-card absolute inset-0 border ${
                  card.theme === "mission"
                    ? "border-[#465247] bg-white text-[#111B15]"
                    : "border-[#343D35] bg-[#343D35] text-white"
                } ${active ? "mission-card-front" : "mission-card-back"}`}
                style={{
                  zIndex: active ? 2 : 1,
                  pointerEvents: active ? "auto" : "none",
                }}
              >
                {/* Fine border inside each card */}
                <div
                  className={`pointer-events-none absolute inset-[12px] border ${
                    card.theme === "mission"
                      ? "border-[#E6EAE3]"
                      : "border-white/[0.08]"
                  }`}
                />

                {/* Top-right icon */}
                <div
                  className={`absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border sm:right-9 sm:top-8 sm:h-[58px] sm:w-[58px] ${
                    card.theme === "mission"
                      ? "border-[#DDE5CB] bg-[#F8FAF1] text-[#648A13]"
                      : "border-[#78952E] bg-[#3B4737] text-[#B8E54B]"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                {/* Main content */}
                <div className="relative z-10 flex h-full flex-col justify-center px-7 py-16 sm:px-10 lg:px-14">
                  <span
                    className={`mb-6 inline-flex items-center gap-3 text-[10px] font-extrabold tracking-[2px] sm:text-[11px] ${
                      card.theme === "mission"
                        ? "text-[#648A13]"
                        : "text-[#B8E54B]"
                    }`}
                  >
                    <span className="h-[2px] w-7 bg-[#8BB630]" />
                    {card.label}
                  </span>

                  <h3 className="max-w-[650px] text-[32px] font-extrabold leading-[1.08] tracking-[-1.5px] sm:text-[43px] sm:tracking-[-2px] lg:text-[51px]">
                    {card.heading}
                    <span
                      className={`mt-1 block ${
                        card.theme === "mission"
                          ? "text-[#72970C]"
                          : "text-[#B8E54B]"
                      }`}
                    >
                      {card.highlight}
                    </span>
                  </h3>

                  <p
                    className={`mt-6 max-w-[610px] text-[13px] leading-[1.85] sm:text-[14px] sm:leading-[1.9] ${
                      card.theme === "mission"
                        ? "text-[#758075]"
                        : "text-[#D0D6CE]"
                    }`}
                  >
                    {card.description}
                  </p>
                </div>

                {/* Card footer */}
                <div
                  className={`absolute bottom-6 left-7 right-7 z-10 flex items-center justify-between text-[9px] font-bold tracking-[1.5px] sm:bottom-7 sm:left-10 sm:right-10 ${
                    card.theme === "mission"
                      ? "text-[#879184]"
                      : "text-[#C0C9BD]"
                  }`}
                >
                  <span>TRACKOWLS</span>
                  <span>
                    0{index + 1}{" "}
                    <span className="text-[#8BB630]">/</span> 02
                  </span>
                </div>
              </article>
            );
          })}
        </div>

        {/* Indicators */}
        <div className="mt-7 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            {missionVisionCards.map((card, index) => (
              <button
                key={card.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show ${card.label.toLowerCase()}`}
                aria-pressed={activeIndex === index}
                className="flex h-5 items-center"
              >
                <span
                  className={`h-1 rounded-full transition-all duration-500 ${
                    activeIndex === index
                      ? "w-9 bg-[#8BB630]"
                      : "w-5 bg-[#D5DCCF]"
                  }`}
                />
              </button>
            ))}

            <span className="ml-2 text-[11px] font-medium text-[#526B86]">
              {activeIndex === 0 ? "Mission" : "Vision"}
            </span>
          </div>

          <span className="text-right text-[9px] font-bold tracking-[1px] text-[#526B86] sm:text-[10px] sm:tracking-[1.2px]">
            SCAN <span className="text-[#8BB630]">/</span> DETECT{" "}
            <span className="text-[#8BB630]">/</span> REMOVE{" "}
            <span className="text-[#8BB630]">/</span> PROTECT
          </span>
        </div>
      </div>

      <style>{`
        .mission-flip-card {
          transform-origin: center center;
          transition:
            transform 1100ms cubic-bezier(0.22, 0.75, 0.25, 1),
            opacity 800ms ease,
            box-shadow 800ms ease;
          will-change: transform, opacity;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .mission-card-front {
          opacity: 1;
          transform: perspective(1400px) rotateY(0deg) translate3d(0, 0, 0)
            scale(1);
          box-shadow: 0 16px 38px rgba(25, 51, 46, 0.06);
        }

        .mission-card-back {
          opacity: 0.3;
          transform: perspective(1400px) rotateY(-8deg)
            translate3d(12px, 10px, -30px) scale(0.97);
          box-shadow: none;
        }

        @media (max-width: 640px) {
          .mission-card-front {
            transform: perspective(1000px) rotateY(0deg)
              translate3d(0, 0, 0) scale(1);
          }

          .mission-card-back {
            transform: perspective(1000px) rotateY(-5deg)
              translate3d(6px, 7px, -20px) scale(0.98);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .mission-flip-card {
            transition: opacity 200ms ease;
          }
        }
      `}</style>
    </div>
  );
}
