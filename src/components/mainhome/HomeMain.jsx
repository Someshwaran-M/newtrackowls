
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeAnime from "./HomeAnime";

const categories = [
  "Video & film",
  "Live broadcasts",
  "Music & audio",
  "Digital publications",
  "Games & software",
  "Brand assets",
];

const backgroundSlides = [
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=90",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=90",
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=90",
  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=2000&q=90",
];

const Icon = ({ children, className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

function HomeMain() {
  const navigate = useNavigate();
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setBackgroundIndex((current) => (current + 1) % backgroundSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  const handleContact = () => {
    const contact = document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <main
      id="home"
      className="relative isolate min-h-[calc(100svh-90px)] overflow-hidden  font-['Roboto',sans-serif] text-white"
    >
      <style>{`
        @keyframes homeContentReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes homeBackgroundReveal {
          from {
            opacity: 0;
            transform: scale(1.04);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .home-content-enter {
          animation: homeContentReveal .8s cubic-bezier(.2,.7,.2,1) both;
        }

        .home-background-enter {
          animation: homeBackgroundReveal 1.2s ease both;
        }

        @media (prefers-reduced-motion: reduce) {
          .home-content-enter,
          .home-background-enter {
            animation: none !important;
          }
        }
      `}</style>

      {/* Full hero background: image, overlays and grid */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {/* Animated background images */}
        {backgroundSlides.map((image, index) => (
          <img
            key={image}
            src={image}
            alt=""
            draggable="false"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1200ms] ${
              backgroundIndex === index ? "opacity-100" : "opacity-0"
            } ${backgroundIndex === index ? "home-background-enter" : ""}`}
          />
        ))}

        {/* Darken the background while keeping the image visible */}
        <div className="absolute inset-0 bg-[#080d09]/45" />

        {/* Left side remains darker for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080d09]/90 via-[#080d09]/65 to-[#080d09]/25" />

        {/* Bottom and top shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080d09]/80 via-transparent to-[#080d09]/30" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.16) 1px, transparent 1px)",
            backgroundSize: "90px 90px",
            maskImage: "linear-gradient(to right, black, transparent 85%)",
            WebkitMaskImage:
              "linear-gradient(to right, black, transparent 85%)",
          }}
        />

        {/* Lime-green atmosphere */}
        <div className="absolute -right-24 top-[15%] h-[450px] w-[450px] rounded-full bg-[#8BB630]/15 blur-[120px]" />
      </div>

      {/* Hero content and right-side animation */}
      <section className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1420px] grid-cols-1 items-center gap-8 px-5 pb-24 pt-28 sm:px-8 sm:pt-32 lg:grid-cols-[0.98fr_1.02fr] lg:gap-10 lg:px-10 lg:pb-24 lg:pt-32 xl:px-14 2xl:px-16">
        {/* LEFT: original homepage content */}
        <div className="home-content-enter relative z-10 flex min-w-0 flex-col items-start">
      <div>
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#8EAF20]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#617D17]">
                DIGITAL ANTI-PIRACY & CONTENT PROTECTION
              </span>
            </div>

            <h2 className="m-0 max-w-[850px] text-[36px] font-bold leading-[1.06] tracking-[-0.055em] sm:text-[48px] lg:text-[64px]">
              Protect your content.
              <span className="block text-[#7C9D18]">
              Stop digital piracy.
              </span>
            </h2>
          </div>
          <p className="mt-6 max-w-[510px] text-[13px] leading-[1.9] text-white/75 sm:text-[15px]">
           Technology, intelligence and enforcement to help rights holders detect online infringement and protect digital content and brands.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white/90 sm:text-[11px]">
            <span>Scan</span>
            <span className="h-4 w-px bg-[#8BB630]" />
            <span>Detect</span>
            <span className="h-4 w-px bg-[#8BB630]" />
            <span>Remove</span>
            <span className="h-4 w-px bg-[#8BB630]" />
            <span>Protect</span>
          </div>

          <div className="mt-7 flex w-full flex-wrap gap-3">
            <button
              type="button"
              onClick={handleContact}
              className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[7px] border border-[#8BB630] bg-[#8BB630] px-5 py-3 text-[12px] font-black text-[#11170c] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a4ce49] hover:shadow-[0_12px_32px_rgba(139,182,48,.25)] sm:px-6 sm:text-[13px]"
            >
              Request a consultation
              <span className="text-lg transition-transform group-hover:translate-x-1">
                ↗
              </span>
            </button>

            <button
              type="button"
              onClick={() => navigate("/services")}
              className="inline-flex min-h-[48px] items-center justify-center gap-3 rounded-[7px] border border-white/30 bg-white/[0.04] px-5 py-3 text-[12px] font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-[#8BB630] hover:bg-[#8BB630]/10 sm:px-6 sm:text-[13px]"
            >
              Explore our solutions
              <span className="text-lg text-[#a8d650]">↗</span>
            </button>
          </div>

          <div className="mt-6 flex max-w-[570px] flex-wrap gap-2">
            {categories.map((category, index) => (
              <span
                key={category}
                className="inline-flex min-h-[32px] items-center gap-2 rounded-[7px] border border-white/15 bg-black/20 px-3 py-2 text-[10px] font-medium text-white/90 backdrop-blur-md transition-colors duration-300 hover:border-[#8BB630]/70 hover:bg-[#8BB630]/10 sm:text-[11px]"
              >
                <span className="text-[#a8d650]">
                  {["▣", "◉", "♫", "▤", "⌘", "◇"][index]}
                </span>
                {category}
              </span>
            ))}
          </div>

          <div className="mt-7 flex items-center gap-3 text-[11px] text-white/80 sm:text-[12px]">
            <Icon className="h-5 w-5 shrink-0 text-[#a8d650]">
              <path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" />
              <path d="m9 12 2 2 4-4" />
            </Icon>
            <span>Evidence-led action. Clear case visibility.</span>
          </div>
        </div>

        {/* RIGHT: separate animated gallery */}
        <HomeAnime />

      </section>
    </main>
  );
}

export default HomeMain;
