
import React, { useEffect, useRef, useState } from "react";

const protectionServices = [
  ["Live Sports", "Television & Broadcasting"],
  ["Film & Entertainment", "OTT & Streaming"],
  ["Music & Audio", "Digital Content Distribution"],
  ["Brands & Marketplaces", "Websites & Applications"],
];

const mapPoints = [
  [23, 10],
  [34, 18],
  [48, 12],
  [60, 15],
  [72, 17],
  [83, 21],
  [19, 32],
  [68, 33],
  [86, 49],
  [33, 67],
  [74, 76],
  [81, 80],
];

export default function Loader({ onComplete, duration = 8000 }) {
  const [activeService, setActiveService] = useState(0);
  const [exiting, setExiting] = useState(false);
  const completedRef = useRef(false);

  const finishLoader = () => {
    if (completedRef.current) return;

    completedRef.current = true;
    setExiting(true);

    window.setTimeout(() => {
      onComplete?.();
    }, 500);
  };

  useEffect(() => {
    const serviceTimer = window.setInterval(() => {
      setActiveService((previous) => (
        previous + 1
      ) % protectionServices.length);
    }, 1800);

    const finishTimer = window.setTimeout(() => {
      finishLoader();
    }, duration);

    return () => {
      window.clearInterval(serviceTimer);
      window.clearTimeout(finishTimer);
    };
  }, [duration]);

  const [serviceTitle, serviceSubtitle] =
    protectionServices[activeService];

  return (
    <section
      className={`trackowls-loader-screen ${
        exiting ? "loader-exiting" : ""
      }`}
      aria-label="TrackOwls loading screen"
      aria-busy={!exiting}
    >
      {/* World map background */}
      <div className="loader-map" aria-hidden="true" />
      <div className="loader-background-glow" aria-hidden="true" />
      <div className="loader-grid" aria-hidden="true" />

      {/* Animated scanning line */}
      <div className="loader-scan-line" aria-hidden="true" />

      {/* Animated global scan points */}
      <div className="loader-map-points" aria-hidden="true">
        {mapPoints.map(([left, top], index) => (
          <span
            key={index}
            className={`loader-map-point point-${index + 1}`}
            style={{
              left: `${left}%`,
              top: `${top}%`,
            }}
          />
        ))}
      </div>

      {/* Main brand content */}
      <div className="loader-center">
        {/* Owl emblem */}
        <div className="loader-owl-ring">
          <img
            src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owl-bg.png"
            alt="TrackOwls owl logo"
            className="loader-owl-image"
          />
        </div>

        {/* TrackOwls wordmark */}
        <div className="loader-wordmark">
          <img
            src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owltext-bg.png"
            alt="TrackOwls"
          />
        </div>

        

        {/* Rotating protection information */}
        <div className="loader-protection-text">
          <p className="loader-protecting">PROTECTING</p>

          <div
            className="loader-service-copy"
            key={activeService}
            aria-live="polite"
          >
            <h2>{serviceTitle}</h2>
            <h3>{serviceSubtitle}</h3>
          </div>

          <p className="loader-scan-caption">
            <span className="loader-status-dot" />
            Illustrative scan animation
          </p>
        </div>
      </div>

      {/* Enter website button */}
      <button
        type="button"
        className="loader-enter-button"
        onClick={finishLoader}
        disabled={exiting}
      >
        Enter website
      </button>

      <style>{`
        .trackowls-loader-screen,
        .trackowls-loader-screen * {
          box-sizing: border-box;
        }

        .trackowls-loader-screen {
          position: fixed;
          inset: 0;
          z-index: 99999;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          min-height: 0;
          overflow: hidden;
          isolation: isolate;
          background: #dce7e9;
          color: #102b43;
          font-family: Roboto, Arial, sans-serif;
          animation: loaderFadeIn .55s ease both;
        }

        /* Full-screen world map */
        .loader-map {
          position: absolute;
          inset: -1%;
          z-index: -5;
          background-image: url("/world-map.png");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          opacity: .65;
          filter: saturate(.72) brightness(1.02);
          animation: loaderMapReveal 1.3s ease both;
        }

        /* Bright central glow and dark outer edges */
        .loader-background-glow {
          position: absolute;
          inset: 0;
          z-index: -4;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 50% 43%,
              rgba(255, 255, 255, .94) 0%,
              rgba(246, 250, 251, .88) 25%,
              rgba(227, 237, 240, .60) 48%,
              rgba(25, 57, 65, .24) 76%,
              rgba(10, 37, 48, .91) 100%
            ),
            linear-gradient(
              180deg,
              rgba(12, 39, 47, .20) 0%,
              transparent 28%,
              transparent 72%,
              rgba(9, 35, 45, .30) 100%
            );
        }

        /* Fine scanning grid */
        .loader-grid {
          position: absolute;
          inset: 0;
          z-index: -3;
          pointer-events: none;
          background-image:
            linear-gradient(
              rgba(139, 182, 48, .10) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(139, 182, 48, .10) 1px,
              transparent 1px
            );
          background-size: 41.5% 18.2%;
          opacity: .45;
        }

        .loader-scan-line {
          position: absolute;
          z-index: -1;
          top: 0;
          bottom: 0;
          left: 0;
          width: 1px;
          pointer-events: none;
          background: rgba(139, 182, 48, .42);
          box-shadow: 0 0 15px rgba(139, 182, 48, .22);
          animation: loaderScanMove 8s ease-in-out infinite alternate;
        }

        /* Glowing points */
        .loader-map-points {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .loader-map-point {
          position: absolute;
          width: clamp(5px, .7vw, 9px);
          height: clamp(5px, .7vw, 9px);
          border-radius: 50%;
          background: #f4bc62;
          box-shadow:
            0 0 7px 3px rgba(255, 188, 85, .65),
            0 0 22px 9px rgba(255, 174, 66, .35),
            0 0 40px 14px rgba(255, 174, 66, .12);
          animation: loaderPointPulse 2.2s ease-in-out infinite alternate;
        }

        .point-2  { animation-delay: .6s; }
        .point-3  { animation-delay: 1.2s; }
        .point-4  { animation-delay: .3s; }
        .point-5  { animation-delay: 1.5s; }
        .point-6  { animation-delay: .9s; }
        .point-7  { animation-delay: .4s; }
        .point-8  { animation-delay: 1.3s; }
        .point-9  { animation-delay: .7s; }
        .point-10 { animation-delay: 1.6s; }
        .point-11 { animation-delay: .5s; }
        .point-12 { animation-delay: 1.1s; }

        /* Main content positioning */
        .loader-center {
          position: absolute;
          top: 49%;
          left: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: min(92%, 680px);
          text-align: center;
          transform: translate(-50%, -50%);
          animation: loaderContentEnter .9s cubic-bezier(.2, .7, .2, 1) both;
        }

        /* Large circular owl emblem */
        .loader-owl-ring {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: clamp(140px, 10.5vw, 190px);
          height: clamp(140px, 10.5vw, 190px);
          margin-bottom: 25px;
          border: 1px solid rgba(33, 68, 88, .10);
          border-radius: 50%;
          background: rgba(255, 255, 255, .07);
          box-shadow: 0 5px 25px rgba(21, 53, 73, .025);
          animation: loaderRingEnter 1s ease both;
        }

        .loader-owl-image {
          display: block;
          width: 69%;
          height: 82%;
          object-fit: contain;
          filter: drop-shadow(0 3px 4px rgba(0, 0, 0, .10));
        }

        /* Large wordmark */
        .loader-wordmark {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          line-height: 0;
        }

        .loader-wordmark > img {
          display: block;
          width: clamp(300px, 23vw, 410px);
          max-width: 94%;
          max-height: 95px;
          height: auto;
          object-fit: contain;
        }

        /* SCAN | DETECT | REMOVE | PROTECT */
        .loader-tagline {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          gap: 11px;
          margin: 13px 0 0;
          color: #18364d;
          font-size: clamp(10px, .82vw, 14px);
          font-weight: 500;
          letter-spacing: .65px;
          line-height: 1.5;
          white-space: nowrap;
        }

        .loader-tagline i {
          display: block;
          flex-shrink: 0;
          width: 2px;
          height: 12px;
          background: #8bb630;
        }

        /* Protection service information */
        .loader-protection-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin-top: 33px;
          padding: 0 12px;
          text-shadow: 0 1px 1px rgba(255, 255, 255, .45);
        }

        .loader-protecting {
          margin: 0;
          color: #496c82;
          font-size: clamp(11px, .85vw, 14px);
          font-weight: 900;
          letter-spacing: 2.8px;
        }

        .loader-service-copy {
          min-height: 58px;
          margin-top: 22px;
          animation: loaderServiceChange .45s ease both;
        }

        .loader-service-copy h2 {
          margin: 0;
          color: #102b43;
          font-size: clamp(17px, 1.2vw, 22px);
          font-weight: 800;
          line-height: 1.45;
        }

        .loader-service-copy h3 {
          margin: 3px 0 0;
          color: #18384f;
          font-size: clamp(15px, 1.05vw, 19px);
          font-weight: 700;
          line-height: 1.5;
        }

        .loader-scan-caption {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 16px 0 0;
          color: #6b8798;
          font-size: clamp(11px, .8vw, 14px);
          line-height: 1.5;
        }

        .loader-status-dot {
          flex: 0 0 6px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8bb630;
          box-shadow: 0 0 8px rgba(139, 182, 48, .45);
          animation: loaderStatusPulse 1.2s ease-in-out infinite alternate;
        }

        /* Enter website button */
        .loader-enter-button {
          position: absolute;
          bottom: 4%;
          left: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 157px;
          min-height: 53px;
          padding: 13px 24px;
          border: 1px solid #738fa3;
          border-radius: 5px;
          background: #102e47;
          color: #fff;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transform: translateX(-50%);
          box-shadow: 0 7px 22px rgba(12, 40, 59, .12);
          transition:
            background .25s ease,
            border-color .25s ease,
            opacity .25s ease;
        }

        .loader-enter-button:hover:not(:disabled) {
          background: #1d435d;
          border-color: #8bb630;
        }

        .loader-enter-button:focus-visible {
          outline: 3px solid #8bb630;
          outline-offset: 4px;
        }

        .loader-enter-button:disabled {
          cursor: default;
        }

        .loader-exiting {
          pointer-events: none;
          animation: loaderFadeOut .5s ease forwards;
        }

        @keyframes loaderFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes loaderFadeOut {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes loaderMapReveal {
          from {
            opacity: 0;
            transform: scale(1.035);
          }
          to {
            opacity: .65;
            transform: scale(1);
          }
        }

        @keyframes loaderScanMove {
          from { left: 0; }
          to { left: 100%; }
        }

        @keyframes loaderPointPulse {
          from {
            opacity: .35;
            transform: scale(.75);
          }
          to {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes loaderRingEnter {
          from {
            opacity: 0;
            transform: scale(.85);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes loaderContentEnter {
          from {
            opacity: 0;
            translate: 0 12px;
          }
          to {
            opacity: 1;
            translate: 0 0;
          }
        }

        @keyframes loaderServiceChange {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes loaderStatusPulse {
          from { opacity: .45; }
          to { opacity: 1; }
        }

       
/* MOBILE: LARGER LOGO AND READABLE TEXT */
@media (max-width: 640px) {
  .loader-map {
    inset: -1%;
    background-size: auto 100%;
    background-position: center center;
  }

  .loader-background-glow {
    background:
      radial-gradient(
        ellipse at 50% 46%,
        rgba(255, 255, 255, 0.94) 0%,
        rgba(246, 250, 251, 0.88) 30%,
        rgba(227, 237, 240, 0.55) 58%,
        rgba(13, 42, 52, 0.60) 100%
      );
  }

  .loader-center {
    top: 46%;
    width: 96%;
  }

  /* Larger owl logo */
  .loader-owl-ring {
    width: 150px;
    height: 150px;
    margin-bottom: 24px;
  }

  .loader-owl-image {
    width: 76%;
    height: 86%;
    object-fit: contain;
  }

  /* Larger TrackOwls wordmark */
  .loader-wordmark > img {
    width: min(90vw, 340px);
    max-width: 94%;
    max-height: 85px;
    height: auto;
    object-fit: contain;
  }

  /* Readable tagline */
  .loader-tagline {
    gap: 8px;
    margin-top: 13px;
    font-size: 11px;
    letter-spacing: 0.35px;
    line-height: 1.6;
  }

  .loader-tagline i {
    width: 2px;
    height: 11px;
  }

  /* Protection information */
  .loader-protection-text {
    margin-top: 30px;
    padding: 0 8px;
  }

  .loader-protecting {
    font-size: 13px;
    letter-spacing: 2.5px;
  }

  .loader-service-copy {
    min-height: 58px;
    margin-top: 20px;
  }

  .loader-service-copy h2 {
    font-size: 19px;
    line-height: 1.45;
  }

  .loader-service-copy h3 {
    font-size: 17px;
    line-height: 1.5;
  }

  .loader-scan-caption {
    margin-top: 14px;
    font-size: 12px;
    line-height: 1.5;
  }

  .loader-status-dot {
    width: 7px;
    height: 7px;
    flex-basis: 7px;
  }

  /* Enter website button */
  .loader-enter-button {
    bottom: 3%;
    min-width: 150px;
    min-height: 48px;
    padding: 11px 22px;
    font-size: 15px;
  }
}

/* SMALL MOBILE SCREENS */
@media (max-width: 380px) {
  .loader-center {
    top: 45%;
    width: 98%;
  }

  .loader-owl-ring {
    width: 135px;
    height: 135px;
    margin-bottom: 22px;
  }

  .loader-wordmark > img {
    width: 88vw;
    max-width: 320px;
  }

  .loader-tagline {
    gap: 6px;
    font-size: 10px;
    letter-spacing: 0.2px;
  }

  .loader-protection-text {
    margin-top: 25px;
  }

  .loader-service-copy {
    margin-top: 18px;
  }

  .loader-service-copy h2 {
    font-size: 17px;
  }

  .loader-service-copy h3 {
    font-size: 15px;
  }

  .loader-scan-caption {
    margin-top: 12px;
    font-size: 11px;
  }

  .loader-enter-button {
    bottom: 2%;
    min-width: 140px;
    min-height: 45px;
    font-size: 14px;
  }
}

/* SHORT MOBILE SCREENS */
@media (max-height: 650px) {
  .loader-center {
    top: 44%;
    transform: translate(-50%, -50%) scale(0.82);
  }

  .loader-enter-button {
    bottom: 2%;
  }
}

/* ACCESSIBILITY */
@media (prefers-reduced-motion: reduce) {
  .trackowls-loader-screen *,
  .trackowls-loader-screen *::before,
  .trackowls-loader-screen *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

      `}</style>
    </section>
  );
}
