
import React, { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=90",
    title: "DIGITAL INFRASTRUCTURE",
    year: "2026",
    number: "01",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=90",
    title: "SECURE NETWORKS",
    year: "2026",
    number: "02",
  },
  {
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=90",
    title: "GLOBAL CONTENT MONITORING",
    year: "2026",
    number: "03",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=90",
    title: "DIGITAL CONTENT PROTECTION",
    year: "2026",
    number: "04",
  },
];

export default function HomeAnime() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animationPaused, setAnimationPaused] = useState(false);

  const currentSlide = slides[activeSlide];

  useEffect(() => {
    if (animationPaused) return undefined;

    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [animationPaused]);

  const showSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="relative mx-auto w-full max-w-[560px] min-w-0 lg:ml-auto lg:pl-3 xl:pl-6">
      <style>{`
        @keyframes galleryImageReveal {
          from {
            opacity: 0.45;
            transform: scale(1.045);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes galleryProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        .gallery-image-enter {
          animation: galleryImageReveal 0.9s cubic-bezier(.2,.7,.2,1) both;
        }

        .gallery-progress-fill {
          transform-origin: left;
          animation: galleryProgress 5s linear both;
        }

        @media (prefers-reduced-motion: reduce) {
          .gallery-image-enter,
          .gallery-progress-fill {
            animation: none !important;
          }
        }
      `}</style>

      {/* Main image gallery */}
      <div className="relative overflow-hidden rounded-[17px] border border-white/25 bg-[#152019] shadow-[0_24px_65px_rgba(0,0,0,0.28)]">
        <div className="relative aspect-[1.12/1] w-full overflow-hidden sm:aspect-[1.16/1] lg:aspect-[1.12/1]">
          <img
            key={currentSlide.image}
            src={currentSlide.image}
            alt={currentSlide.title}
            className="gallery-image-enter absolute inset-0 h-full w-full object-cover"
          />

          {/* Image shading */}
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#152019]/15 via-transparent to-[#152019]/10" />

          {/* Bottom image labels */}
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3.5 sm:p-4">
            <span className="max-w-[78%] truncate rounded-md border border-white/10 bg-[#111711]/80 px-2.5 py-1.5 text-[8px] font-bold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md sm:text-[9px]">
              {currentSlide.title}
            </span>

            <span className="shrink-0    px-3 py-1.5 font-mono text-[9px] text-white/90 ">
              {currentSlide.number} / 04
            </span>
          </div>

          
        </div>
      </div>

      {/* Thumbnail gallery */}
      <div className="mt-4 -mr-50 flex items-center justify-center gap-2 sm:mt-5 sm:gap-2.5">
        {slides.map((slide, index) => (
          <button
            key={slide.number}
            type="button"
            onClick={() => showSlide(index)}
            aria-label={`View ${slide.title}`}
            aria-pressed={activeSlide === index}
            className={`group relative h-[53px] min-w-0 flex-1 max-w-[75px] overflow-hidden rounded-[9px] border transition-all duration-300 sm:h-[65px] ${
              activeSlide === index
                ? "border-[#8BB630] opacity-100 ring-1 ring-[#8BB630]/70"
                : "border-white/15 opacity-60 hover:border-white/50 hover:opacity-100"
            }`}
          >
            <img
              src={slide.image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <span
              className={`absolute inset-0  transition-colors ${
                activeSlide === index
                  ? "bg-[#8BB630]/[0.04]"
                  : "bg-[#101711]/20"
              }`}
            />

            {activeSlide === index && (
              <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#8BB630]" />
            )}
          </button>
        ))}
      </div>

      
{/* Minimal progress indicators */}
<div className="mt-3.5 flex items-center justify-end gap-2 pr-1">
  {slides.map((slide, index) => (
    <button
      key={slide.number}
      type="button"
      onClick={() => showSlide(index)}
      aria-label={`Go to slide ${index + 1}`}
      aria-current={activeSlide === index ? "true" : undefined}
      className="group flex h-3 w-5 items-center justify-center"
    >
      <span
        className={`h-[2px] w-full overflow-hidden rounded-full transition-all duration-300 ${
          activeSlide === index
            ? "bg-[#8BB630]"
            : "bg-white/30 group-hover:bg-[#ADD132]/70"
        }`}
      >
        {activeSlide === index && !animationPaused && (
          <span
            key={`${activeSlide}-progress`}
            className="gallery-progress-fill block h-full w-full rounded-full bg-[#D5F5A3]"
          />
        )}
      </span>
    </button>
  ))}
</div>

{/* Monitoring walkthrough button */}
<div className="mt-5 flex justify-center">
  <button
    type="button"
    onClick={() => {
      console.log("Open animated monitoring walkthrough");
    }}
    className="group inline-flex min-h-[52px] max-w-full items-center gap-3 rounded-[9px] border border-[#8BB630] border-l-[3px] border-l-[#6D900B] bg-[#ADD132] px-4 py-3 text-left text-sm font-semibold tracking-[-0.02em] text-[#152019] shadow-[0_8px_24px_rgba(0,0,0,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#6D900B] hover:border-l-[#152019] hover:bg-[#8BB630] hover:shadow-[0_12px_30px_rgba(139,182,48,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ADD132] focus-visible:ring-offset-2 focus-visible:ring-offset-[#152019] active:translate-y-0 active:scale-[0.99]"
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      className="h-5 w-5 shrink-0 text-[#29400D] transition-transform duration-300 group-hover:scale-110"
      aria-hidden="true"
    >
      <circle cx="10.5" cy="10.5" r="5.5" />
      <path d="M4 7V4h3M17 7V4h-3M4 14v3h3M17 14v3h-3" />
      <circle cx="10.5" cy="10.5" r="1.5" />
      <path d="m15 15 3 3" />
    </svg>

    <span className="truncate">
      Explore the animated monitoring walkthrough
    </span>

    <span
      aria-hidden="true"
      className="ml-1 text-base transition-transform duration-300 group-hover:translate-x-1"
    >
      ↗
    </span>
  </button>
</div>

{/* Bottom metadata row */}
<div className="mt-7 flex flex-wrap items-center justify-between gap-x-5 gap-y-2 px-1">
  <span className="text-[10px] font-medium uppercase tracking-[0.09em] text-white/75 transition-colors duration-300 hover:text-[#ADD132] sm:text-xs">
    <span className="mr-2 font-mono font-bold text-[#ADD132]">01</span>
    / DISCOVERY TO ENFORCEMENT
  </span>

  <span className="text-[10px] font-medium uppercase tracking-[0.07em] text-white/75 transition-colors duration-300 hover:text-[#ADD132] sm:text-xs">
    HUMAN INTELLIGENCE + TECHNOLOGY
  </span>
</div>

    </div>

    
  );
}
