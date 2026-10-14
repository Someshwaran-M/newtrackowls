
import React, { useCallback, useEffect, useRef, useState } from "react";

const INDUSTRIES = [
  ["Film & Entertainment", "OTT & Streaming"],
  ["Live Sports", "Television & Broadcasting"],
  ["Music & Audio", "Digital Content Distribution"],
  ["Brands & Marketplaces", "Websites & Applications"],
  ["Sportswear & Apparel Brands", "Publishers & Digital Creators"],
];

export default function Loader({ onComplete, duration = 8000 }) {
  const [industryIndex, setIndustryIndex] = useState(0);
  const [closing, setClosing] = useState(false);
  const [hidden, setHidden] = useState(false);

  const completedRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const exitTimerRef = useRef(null);

  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  const finish = useCallback(() => {
    if (completedRef.current) return;

    completedRef.current = true;
    setClosing(true);

    exitTimerRef.current = window.setTimeout(() => {
      setHidden(true);
      onCompleteRef.current?.();
    }, 350);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") finish();
    };

    window.addEventListener("keydown", handleKeyDown);

    const industryTimer = reducedMotion
      ? null
      : window.setInterval(() => {
          setIndustryIndex((previous) => (previous + 1) % INDUSTRIES.length);
        }, 1600);

    const autoFinishTimer = window.setTimeout(
      finish,
      reducedMotion ? 1500 : duration
    );

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.clearTimeout(autoFinishTimer);

      if (industryTimer) window.clearInterval(industryTimer);
      if (exitTimerRef.current) window.clearTimeout(exitTimerRef.current);
    };
  }, [duration, finish]);

  if (hidden) return null;

  return (
    <div
      className={`trackowls-intro fixed inset-0 z-[99999] h-[100dvh] w-full overflow-hidden ${
        closing ? "trackowls-intro-exit" : ""
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="TrackOwls introduction"
    >
      {/* World map background */}
      <div className="intro-background" aria-hidden="true" />

      {/* Off-white and lime-yellow lighting */}
      <div className="intro-overlay" aria-hidden="true" />

      <div className="intro-glow intro-glow-left" aria-hidden="true" />
      <div className="intro-glow intro-glow-right" aria-hidden="true" />

      {/* Main content */}
      <main className="intro-main flex w-full flex-col items-center px-4 text-center">
        {/* Owl logo */}
        <div className="intro-owl">
          <div className="intro-owl-ring" aria-hidden="true" />

          <img
            src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owl-bg.png"
            alt="TrackOwls owl logo"
            className="intro-owl-image"
            draggable="false"
          />
        </div>

        {/* Brand name */}
        <h1 className="intro-wordmark">
          <span className="intro-track">Track</span>
          <span className="intro-owls">Owls</span>
        </h1>

        {/* Slogan */}
        <div className="intro-tagline">
          <span>SCAN</span>
          <i>|</i>
          <span>DETECT</span>
          <i>|</i>
          <span>REMOVE</span>
          <i>|</i>
          <span>PROTECT</span>
        </div>

        <div className="intro-divider" />

        {/* Rotating industry text */}
        <section className="intro-protecting" aria-live="polite">
          <h2>PROTECTING</h2>

          <div className="intro-industries">
            {INDUSTRIES[industryIndex].map((industry, index) => (
              <p
                key={`${industryIndex}-${industry}`}
                className="intro-industry-line"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {industry}
              </p>
            ))}
          </div>

          <p className="intro-caption">Illustrative scan animation</p>
        </section>
      </main>

      {/* Bottom button */}
      <div className="intro-bottom">
        <button
          type="button"
          onClick={finish}
          className="intro-enter-button"
        >
          Enter website
          <span aria-hidden="true">→</span>
        </button>
      </div>

      <style>{`
        .trackowls-intro {
          isolation: isolate;
          background: #f9fbf2;
          color: #15243b;
          font-family: Roboto, Arial, sans-serif;
          overscroll-behavior: none;
        }

        /* World map image */
        .intro-background {
          position: absolute;
          z-index: -3;
          inset: 0;
          background-image: url("/world-map.png");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0.95;
          pointer-events: none;
        }

        /* Bright center and visible lime-yellow edges */
        .intro-overlay {
          position: absolute;
          z-index: -2;
          inset: 0;
          background:
            radial-gradient(
              ellipse 65% 55% at 50% 42%,
              rgba(255, 255, 255, 0.78) 0%,
              rgba(255, 255, 255, 0.52) 40%,
              rgba(247, 251, 225, 0.25) 70%,
              rgba(218, 239, 157, 0.30) 100%
            ),
            linear-gradient(
              135deg,
              rgba(221, 239, 164, 0.30) 0%,
              rgba(255, 255, 255, 0.18) 45%,
              rgba(207, 232, 123, 0.28) 100%
            );
          pointer-events: none;
        }

        .intro-glow {
          position: absolute;
          z-index: -1;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: rgba(198, 229, 103, 0.30);
          filter: blur(75px);
          pointer-events: none;
        }

        .intro-glow-left {
          top: 8%;
          left: -150px;
        }

        .intro-glow-right {
          right: -130px;
          bottom: 8%;
          background: rgba(210, 235, 132, 0.34);
        }

        .intro-main {
          position: relative;
          z-index: 2;
          height: 100%;
          justify-content: flex-start;
          padding-top: clamp(55px, 14vh, 130px);
          padding-bottom: 95px;
        }

        .intro-owl {
          position: relative;
          display: flex;
          width: clamp(112px, 12vw, 150px);
          height: clamp(120px, 14vw, 165px);
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateY(10px);
          animation: introOwlReveal 0.8s ease-out 0.1s forwards;
        }

        .intro-owl-ring {
          position: absolute;
          width: 96%;
          aspect-ratio: 1;
          border: 1px solid rgba(139, 182, 48, 0.4);
          border-radius: 50%;
          animation: introRingPulse 4s ease-in-out infinite;
        }

        .intro-owl-image {
          position: relative;
          z-index: 1;
          display: block;
          width: 82%;
          height: 86%;
          object-fit: contain;
          object-position: center;
        }

        .intro-wordmark {
          display: flex;
          align-items: baseline;
          justify-content: center;
          margin: 7px 0 0;
          white-space: nowrap;
          font-size: clamp(45px, 6.4vw, 86px);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.075em;
          opacity: 0;
          transform: translateY(8px);
          animation: introTextReveal 0.6s ease-out 0.55s forwards;
        }

        .intro-track {
          color: #101a2d;
        }

        .intro-owls {
          color: #608400;
        }

        .intro-tagline {
          display: flex;
          flex-wrap: nowrap;
          align-items: center;
          justify-content: center;
          gap: clamp(6px, 1vw, 13px);
          margin-top: 14px;
          color: #233b50;
          font-size: clamp(9px, 1vw, 14px);
          font-weight: 700;
          letter-spacing: 0.045em;
          opacity: 0;
          animation: introFadeIn 0.6s ease-out 0.9s forwards;
        }

        .intro-tagline i {
          color: #8bb630;
          font-size: 12px;
          font-style: normal;
        }

        .intro-divider {
          width: 42px;
          height: 3px;
          margin-top: 21px;
          border-radius: 3px;
          background: #b5d653;
          opacity: 0;
          animation: introFadeIn 0.5s ease-out 1.1s forwards;
        }

        .intro-protecting {
          display: flex;
          width: 100%;
          flex-direction: column;
          align-items: center;
          margin-top: 16px;
          opacity: 0;
          animation: introFadeIn 0.6s ease-out 1.3s forwards;
        }

        .intro-protecting h2 {
          margin: 0;
          color: #547448;
          font-size: clamp(12px, 1.1vw, 14px);
          font-weight: 800;
          letter-spacing: 0.25em;
        }

        .intro-industries {
          display: flex;
          min-height: 64px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          margin-top: 14px;
          padding: 0 8px;
        }

        .intro-industry-line {
          margin: 0;
          color: #183047;
          font-size: clamp(15px, 1.4vw, 20px);
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: -0.01em;
          animation: introIndustryReveal 0.35s ease-out both;
        }

        .intro-caption {
          margin: 16px 0 0;
          color: #637d8d;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.01em;
        }

        .intro-bottom {
          position: absolute;
          z-index: 5;
          right: 0;
          bottom: max(22px, env(safe-area-inset-bottom));
          left: 0;
          display: flex;
          justify-content: center;
          padding: 0 16px;
          opacity: 0;
          animation: introFadeIn 0.5s ease-out 1.6s forwards;
        }

        .intro-enter-button {
          display: inline-flex;
          min-width: 150px;
          min-height: 49px;
          align-items: center;
          justify-content: center;
          gap: 13px;
          border: 1px solid #8399a7;
          border-radius: 5px;
          background: #102a43;
          padding: 12px 24px;
          color: #fff;
          font-family: Roboto, Arial, sans-serif;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease;
        }

        .intro-enter-button:hover {
          border-color: #b5d653;
          background: #e4efc2;
          color: #15243b;
        }

        .intro-enter-button:focus-visible {
          outline: 2px solid #8bb630;
          outline-offset: 4px;
        }

        .trackowls-intro-exit {
          animation: introFadeOut 0.35s ease-in forwards;
          pointer-events: none;
        }

        @keyframes introOwlReveal {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes introTextReveal {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes introFadeIn {
          to { opacity: 1; }
        }

        @keyframes introRingPulse {
          0%, 100% { opacity: 0.4; transform: scale(0.97); }
          50% { opacity: 0.9; transform: scale(1.03); }
        }

        @keyframes introIndustryReveal {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes introFadeOut {
          to { opacity: 0; visibility: hidden; }
        }

/* Bigger mobile layout */
@media (max-width: 640px) {
  .intro-main {
    justify-content: center;
    padding: 12px 10px 82px;
  }

  /* Bigger owl logo */
  .intro-owl {
    width: clamp(145px, 40vw, 175px);
    height: clamp(150px, 42vw, 185px);
  }

  .intro-owl-image {
    width: 86%;
    height: 88%;
  }

  /* Bigger TrackOwls text */
  .intro-wordmark {
    margin-top: 10px;
    font-size: clamp(74px, 20vw, 94px);
    letter-spacing: -0.020em;
    line-height: 1.08;
  }

  /* Bigger slogan */
  .intro-tagline {
    gap: clamp(8px, 6vw, 12px);
    margin-top: 17px;
    font-size: clamp(10px, 3vw, 14px);
    letter-spacing: 0.015em;
  }

  .intro-tagline i {
    font-size: 16px;
  }

  .intro-divider {
    width: 48px;
    height: 3px;
    margin-top: 24px;
  }

  /* Bigger PROTECTING heading */
  .intro-protecting {
    margin-top: 18px;
  }

  .intro-protecting h2 {
    font-size: 18px;
    letter-spacing: 0.25em;
  }

  /* Bigger industry text */
  .intro-industries {
    min-height: 76px;
    margin-top: 16px;
    gap: 6px;
  }

  .intro-industry-line {
    max-width: 96vw;
    font-size: clamp(17px, 6vw, 22px);
    line-height: 1.45;
    font-weight: 700;
  }

  .intro-caption {
    margin-top: 18px;
    font-size: 16px;
  }

  /* Bigger Enter website button */
  .intro-bottom {
    bottom: max(18px, env(safe-area-inset-bottom));
  }

  .intro-enter-button {
    min-width: 170px;
    min-height: 52px;
    padding: 13px 26px;
    font-size: 16px;
  }
}

/* Keep larger content fitted on shorter phones */
@media (max-width: 640px) and (max-height: 700px) {
  .intro-main {
    padding-top: 5px;
    padding-bottom: 70px;
  }

  .intro-owl {
    width: 112px;
    height: 118px;
  }

  .intro-wordmark {
    font-size: clamp(44px, 11vw, 58px);
    margin-top: 4px;
  }

  .intro-tagline {
    margin-top: 10px;
  }

  .intro-divider {
    margin-top: 14px;
  }

  .intro-protecting {
    margin-top: 10px;
  }

  .intro-industries {
    min-height: 52px;
    margin-top: 8px;
  }

  .intro-industry-line {
    font-size: clamp(15px, 4vw, 18px);
  }

  .intro-caption {
    margin-top: 10px;
  }

  .intro-enter-button {
    min-height: 46px;
    min-width: 155px;
    font-size: 15px;
  }
}

      `}</style>
    </div>
  );
}
