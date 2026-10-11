import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const industries = [
  {
    number: "01",
    title: "Live Streaming Protection",
    description: "Act while the event still matters.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=85",
    icon: "stream",
    link: "/services",
  },
  {
    number: "02",
    title: "OTT & VOD Protection",
    description: "Protect every release window.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=700&q=85",
    icon: "play",
    link: "/industries",
  },
  {
    number: "03",
    title: "Website & App Monitoring",
    description: "See where your content travels.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=85",
    icon: "globe",
    link: "/platform",
  },
  {
    number: "04",
    title: "Copyright Enforcement",
    description: "Turn evidence into action.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=700&q=85",
    icon: "file",
    link: "/services",
  },
  {
    number: "05",
    title: "Brand Protection",
    description: "Defend the identity you built.",
    image: null,
    icon: "shield",
    link: "/services",
  },
  {
    number: "06",
    title: "Piracy Intelligence",
    description: "Understand the patterns behind piracy.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=700&q=85",
    icon: "intelligence",
    link: "/platform",
  },
  {
    number: "07",
    title: "Marketplace & Counterfeit Monitoring",
    description: "Investigate listings that misuse your brand.",
    image: null,
    icon: "search",
    link: "/industries",
  },
  {
    number: "08",
    title: "Domain & Impersonation Monitoring",
    description: "Protect the identity behind your digital presence.",
    image: null,
    icon: "globe",
    link: "/services",
  },
  {
    number: "09",
    title: "Social Media & Video Protection",
    description: "Follow infringement across public social channels.",
    image: null,
    icon: "social",
    link: "/platform",
  },
];

const BRAND = "#ADD132";

export default function HomeSolutions() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [panelKey, setPanelKey] = useState(0);

  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const activeIndustry = industries[activeIndex];

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");

    const updateViewport = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  const selectIndustry = (index) => {
    if (index === activeIndex) return;

    setActiveIndex(index);
    setPanelKey((previous) => previous + 1);
  };

  const discussProtection = () => {
    navigate(
      `${activeIndustry.link}?industry=${encodeURIComponent(
        activeIndustry.title
      )}`
    );
  };

  return (
    <section
      ref={sectionRef}
      id="home-solutions"
      className="relative w-full overflow-hidden bg-white font-['Roboto',Arial,sans-serif] text-[#152019]"
    >
      <style>{`
        @keyframes hs-section-enter {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes hs-content-enter {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes hs-indicator-enter {
          from {
            transform: scaleY(0);
          }
          to {
            transform: scaleY(1);
          }
        }

        @keyframes hs-mobile-indicator-enter {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .hs-section-reveal {
          opacity: 0;
        }

        .hs-section-reveal.hs-visible {
          animation: hs-section-enter .7s cubic-bezier(.2,.7,.2,1) forwards;
        }

        .hs-accordion {
          display: flex;
          width: 100%;
          min-width: 0;
          min-height: 410px;
          overflow: hidden;
          border: 1px solid #dce4d7;
          background: #fff;
        }

        .hs-accordion-item {
          position: relative;
          display: flex;
          flex: 0 0 48px;
          min-width: 0;
          overflow: hidden;
          border-right: 1px solid #dce4d7;
          background: #fff;
          transition:
            flex-grow .65s cubic-bezier(.22,.75,.2,1),
            flex-basis .65s cubic-bezier(.22,.75,.2,1),
            background-color .3s ease;
        }

        .hs-accordion-item:last-child {
          border-right: 0;
        }

        .hs-accordion-item.is-active {
          flex: 1 1 0%;
          background: #f3f8e9;
        }

        .hs-accordion-tab {
          position: relative;
          display: flex;
          flex: 0 0 100%;
          min-width: 0;
          align-items: flex-start;
          gap: 12px;
          border: 0;
          padding: 15px 0;
          background: transparent;
          color: #152019;
          text-align: left;
          cursor: pointer;
        }

        .hs-accordion-item.is-active .hs-accordion-tab {
          flex-basis: 52px;
          border-right: 1px solid #dce4d7;
        }

        .hs-tab-number {
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          font-family: monospace;
          font-size: 9px;
          font-weight: 800;
          color: #152019;
          white-space: nowrap;
        }

        .hs-accordion-item.is-active .hs-tab-number {
          left: 50%;
          color: #ADD132;
        }

        .hs-tab-title {
          position: absolute;
          top: 43px;
          left: 50%;
          transform: translateX(-50%) rotate(180deg);
          writing-mode: vertical-rl;
          white-space: nowrap;
          font-size: 11px;
          font-weight: 900;
          line-height: 1.1;
          text-transform: uppercase;
          letter-spacing: -.02em;
          color: #263127;
          transition: color .3s ease;
        }

        .hs-accordion-item.is-active .hs-tab-title {
          color: #668b12;
        }

        .hs-accordion-indicator {
          position: absolute;
          top: 0;
          left: 0;
          width: 3px;
          height: 100%;
          background: ${BRAND};
          transform-origin: center;
          animation: hs-indicator-enter .32s cubic-bezier(.2,.7,.2,1) both;
        }

        .hs-panel {
          display: flex;
          flex: 1 1 0%;
          min-width: 0;
          flex-direction: column;
          overflow: hidden;
          padding: 30px 26px;
        }

        .hs-panel-content {
          width: 100%;
          min-width: 0;
          max-width: 490px;
          margin: 0 auto;
          animation: hs-content-enter .45s cubic-bezier(.2,.7,.2,1) both;
        }

        .hs-discuss-button {
          display: inline-flex;
          min-height: 42px;
          align-items: center;
          justify-content: center;
          gap: 14px;
          border: 0;
          background: #ADD132;
          padding: 12px 19px;
          color: #152019;
          font-size: 11px;
          font-weight: 700;
          transition:
            background-color .25s ease,
            transform .25s ease,
            box-shadow .25s ease;
        }

        .hs-discuss-button:hover {
          transform: translateY(-2px);
          background: #bde817;
          box-shadow: 0 8px 22px rgba(173,209,50,.2);
        }

        .hs-discuss-button .hs-arrow {
          display: inline-block;
          transition: transform .25s ease;
        }

        .hs-discuss-button:hover .hs-arrow {
          transform: translateX(4px);
        }

        .hs-industry-button:focus-visible,
        .hs-discuss-button:focus-visible {
          outline: 2px solid #668b12;
          outline-offset: -4px;
        }

        @media (min-width: 768px) {
          .hs-panel {
            padding: 32px 26px;
          }
        }

        @media (min-width: 1024px) {
          .hs-accordion-item {
            flex-basis: 48px;
          }

          .hs-accordion-item.is-active .hs-accordion-tab {
            flex-basis: 52px;
          }

          .hs-panel {
            padding: 35px 30px;
          }
        }

        @media (min-width: 1280px) {
          .hs-accordion-item {
            flex-basis: 52px;
          }

          .hs-accordion-item.is-active .hs-accordion-tab {
            flex-basis: 62px;
          }

          .hs-panel {
            padding: 38px 34px;
          }
        }

        @media (max-width: 767px) {
          .hs-accordion {
            display: grid;
            grid-template-columns: 1fr;
            min-height: 0;
            overflow: visible;
          }

          .hs-accordion-item {
            display: block;
            flex: none;
            overflow: hidden;
            border-right: 0;
            border-bottom: 1px solid #dce4d7;
            transition: background-color .3s ease;
          }

          .hs-accordion-item:last-child {
            border-bottom: 0;
          }

          .hs-accordion-item.is-active {
            flex: none;
          }

          .hs-accordion-tab,
          .hs-accordion-item.is-active .hs-accordion-tab {
            display: flex;
            min-height: 60px;
            width: 100%;
            flex: none;
            align-items: center;
            gap: 14px;
            border-right: 0;
            padding: 16px 18px;
          }

          .hs-tab-number,
          .hs-accordion-item.is-active .hs-tab-number {
            position: static;
            flex: 0 0 22px;
            transform: none;
            font-size: 10px;
          }

          .hs-tab-title,
          .hs-accordion-item.is-active .hs-tab-title {
            position: static;
            flex: 1;
            transform: none;
            writing-mode: horizontal-tb;
            white-space: normal;
            text-align: left;
            font-size: 11px;
            line-height: 1.45;
          }

          .hs-accordion-indicator {
            top: 0;
            left: 0;
            width: 3px;
            height: 100%;
            animation: none;
          }

          .hs-panel {
            display: block;
            padding: 8px 20px 25px;
            overflow: visible;
          }

          .hs-panel-content {
            max-width: none;
          }

          .hs-mobile-active-title {
            color: #668b12;
          }

          .hs-mobile-indicator {
            position: absolute;
            bottom: 0;
            left: 0;
            height: 3px;
            width: 100%;
            background: ${BRAND};
            transform-origin: left;
            animation: hs-mobile-indicator-enter .3s ease-out both;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hs-section-reveal,
          .hs-section-reveal.hs-visible,
          .hs-panel-content,
          .hs-accordion-indicator,
          .hs-mobile-indicator {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .hs-accordion-item,
          .hs-discuss-button,
          .hs-discuss-button .hs-arrow {
            transition: none !important;
          }
        }
      `}</style>

      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 8% 20%, rgba(173,209,50,.07), transparent 34%), radial-gradient(ellipse at 92% 85%, rgba(173,209,50,.05), transparent 32%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(21,32,25,.035) 1px, transparent 1px), linear-gradient(90deg, rgba(21,32,25,.035) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-[1420px] px-5 py-4 sm:px-8 sm:py-6 lg:px-12 lg:py-[6px]">
        {/* Existing heading content */}
        <div
          className={`hs-section-reveal mb-9 grid grid-cols-1 items-end gap-7 md:mb-11 md:grid-cols-[1.2fr_0.8fr] ${
            isVisible ? "hs-visible" : ""
          }`}
        >
          

          <div>
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#8EAF20]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#617D17]">
                OUR SOLUTIONS
              </span>
            </div>

            <h2 className="m-0 max-w-[850px] text-[36px] font-bold leading-[1.06] tracking-[-0.055em] sm:text-[48px] lg:text-[64px]">
              Protection with a
              <span className="block text-[#7C9D18]">
                clear path to action.
              </span>
            </h2>
          </div>

         

          <Link
  to="/solutions"
  className="group inline-flex max-w-[370px] items-center gap-3 pb-1 text-[13px] font-bold leading-[1.8] text-[#687368] transition-colors duration-300 hover:text-[#668b12] sm:text-sm md:justify-self-end"
>
  View All Solutions
  <span
    aria-hidden="true"
    className="text-lg text-[#ADD132] transition-transform duration-300 group-hover:translate-x-1.5"
  >
    →
  </span>
</Link>
        </div>

        {/* Expanding industry accordion */}
        <div
          className={`hs-section-reveal ${
            isVisible ? "hs-visible" : ""
          }`}
          style={{ animationDelay: "120ms" }}
        >
          <div className="hs-accordion">
            {industries.map((industry, index) => {
              const active = index === activeIndex;

              return (
                <div
                  key={industry.number}
                  className={`hs-accordion-item ${
                    active ? "is-active" : ""
                  }`}
                >
                  {/* Clickable industry tab */}
                  <button
                    type="button"
                    className="hs-accordion-tab hs-industry-button"
                    onClick={() => selectIndustry(index)}
                    aria-pressed={active}
                    aria-expanded={active}
                    aria-label={`Select ${industry.title}`}
                  >
                    <span className="hs-tab-number">
                      {industry.number}
                    </span>

                    <span
                      className={`hs-tab-title ${
                        active && isMobile
                          ? "hs-mobile-active-title"
                          : ""
                      }`}
                    >
                      {industry.title}
                    </span>

                    {active && (
                      <span
                        key={`indicator-${industry.number}-${panelKey}`}
                        aria-hidden="true"
                        className={
                          isMobile
                            ? "hs-mobile-indicator"
                            : "hs-accordion-indicator"
                        }
                      />
                    )}
                  </button>

                  {/* Content expands inside the active panel */}
                  
{active && (
  <div className="hs-panel relative isolate flex min-h-[420px] w-full items-center justify-start overflow-hidden bg-[#f5f9ef] sm:min-h-[460px] lg:min-h-[500px]">
    {/* Full-cover background image */}
    {activeIndustry.image ? (
      <div
        key={`image-${activeIndustry.number}`}
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: `url("${activeIndustry.image}")`,
        }}
      />
    ) : (
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[#edf5e5]"
      />
    )}

    {/* Light overlay for readable text */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "linear-gradient(90deg, rgba(250,252,245,.98) 0%, rgba(250,252,245,.94) 32%, rgba(250,252,245,.78) 48%, rgba(250,252,245,.24) 70%, transparent 100%)",
      }}
    />

    {/* Lime-green diagonal accent */}
    

    {/* All content anchored to the left */}
    <div
  key={`content-${panelKey}`}
  className="relative z-10 !ml-0 !mr-0 flex min-h-[420px] w-full !max-w-none flex-col items-start justify-end self-start px-5 pb-8 pt-8 text-left sm:min-h-[460px] sm:px-6 sm:pb-6 lg:min-h-[500px] lg:w-full lg:px-8 lg:pb-2 xl:px-2"
>
      {/* Industry number */}
      <span className="text-[11px] font-black tracking-[0.18em] text-[#668b12] sm:text-xs">
        {activeIndustry.number} / 08
      </span>

      {/* Accent line */}
      <span className="mt-4 h-[3px] w-10 bg-[#D0F51B]" />

      {/* Normal-sized heading */}
      <h3 className="mt-6 w-full max-w-[440px] text-left text-[27px] font-black uppercase leading-[1.08] tracking-[-0.025em] text-[#152019] sm:text-[32px] lg:text-[36px]">
        {activeIndustry.title}
      </h3>

      {/* Description */}
      <p className="mt-4 w-full max-w-[390px] text-left text-[13px] leading-[1.75] text-[#59645a] sm:text-sm">
        {activeIndustry.description}
      </p>

      {/* Divider */}
      <div className="mt-5 h-px w-full max-w-[360px] bg-[#cbd8c3]" />

      

      {/* Existing CTA */}
      <button
        type="button"
        onClick={discussProtection}
        className="hs-discuss-button group mt-7 inline-flex min-h-[46px] items-center gap-4 bg-[#D0F51B] px-5 py-3 text-left text-[11px] font-bold text-[#152019] transition-all duration-300 hover:-translate-y-1 hover:bg-[#bde817] sm:text-xs"
      >
        Discuss {activeIndustry.title.toLowerCase()}

        <span
          aria-hidden="true"
          className="inline-block text-xl transition-transform duration-300 group-hover:translate-x-1.5"
        >
          →
        </span>
      </button>
    </div>
  </div>
)}

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
