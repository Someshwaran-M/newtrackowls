import React, { useEffect, useState } from "react";

const protectionServices = [
  ["Live Sports", "Television & Broadcasting"],
  ["Film & Entertainment", "OTT & Streaming"],
  ["Music & Audio", "Digital Content Distribution"],
  ["Brands & Marketplaces", "Websites & Applications"],
];

const mapPoints = [
  [23, 10], [34, 18], [48, 12], [60, 15],
  [72, 17], [83, 21], [19, 32], [68, 33],
  [86, 49], [33, 67], [74, 76], [81, 80],
];

export default function Loader({ onComplete, duration = 6000 }) {
  const [activeService, setActiveService] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const serviceTimer = setInterval(() => {
      setActiveService((previous) => (previous + 1) % protectionServices.length);
    }, 1500);

    const finishTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => onComplete?.(), 500);
    }, duration);

    return () => {
      clearInterval(serviceTimer);
      clearTimeout(finishTimer);
    };
  }, [duration, onComplete]);

  const enterWebsite = () => {
    if (exiting) return;

    setExiting(true);
    setTimeout(() => onComplete?.(), 500);
  };

  const [serviceTitle, serviceSubtitle] = protectionServices[activeService];

  return (
    <section
      className={`trackowls-loader-screen ${exiting ? "loader-exiting" : ""}`}
      aria-label="TrackOwls loading screen"
    >
      {/* Background */}
      <div className="loader-bg" />
      <div className="loader-map" />
      <div className="loader-overlay" />
      <div className="loader-scan-line" />

      {/* Animated map points */}
      <div className="loader-map-points" aria-hidden="true">
        {mapPoints.map(([left, top], index) => (
          <span
            key={index}
            className={`loader-map-point point-${index + 1}`}
            style={{ left: `${left}%`, top: `${top}%` }}
          />
        ))}
      </div>

      {/* Centered brand content */}
      <div className="loader-center">
        {/* Owl logo */}
        <div className="loader-owl-ring">
          <img
            src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owl-bg.png"
            alt="TrackOwls owl logo"
            className="loader-owl-image"
          />
        </div>

        {/* Wordmark */}
        <div className="loader-wordmark">
          <img
            src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owltext-bg.png"
            alt="TrackOwls"
          />
        </div>

       

        {/* Rotating service information */}
        <div className="loader-protection-text" aria-live="polite">
          <p className="loader-protecting">PROTECTING</p>

          <div className="loader-service-copy" key={activeService}>
            <h2>{serviceTitle}</h2>
            <h3>{serviceSubtitle}</h3>
          </div>

          <p className="loader-scan-caption">
            <span className="loader-status-dot" />
            Illustrative scan animation
          </p>
        </div>
      </div>

      {/* Enter button */}
      <button
        type="button"
        className="loader-enter-button"
        onClick={enterWebsite}
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
          min-height: 460px;
          overflow: hidden;
          isolation: isolate;
          background: #a4c4d4;
          color: #102b43;
          font-family: Roboto, Arial, sans-serif;
          animation: loaderFadeIn .6s ease both;
        }

        
        /* World map */
        .loader-map {
          position: absolute;
          inset: 0;
          z-index: -4;
          background-image: url("/world-map.png");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          opacity: .30;
          filter: saturate(.62) brightness(1.04);
          animation: loaderMapReveal 1.4s ease both;
        }

        /* Bright center, gently shaded edges */
        .loader-overlay {
          position: absolute;
          inset: 0;
          z-index: -3;
          pointer-events: none;
          background:
            radial-gradient(
              ellipse at 50% 43%,
              rgba(255, 255, 255, .76) 0%,
              rgba(255, 255, 255, .52) 25%,
              rgba(239, 246, 250, .18) 54%,
              rgba(16, 43, 61, .22) 100%
            ),
            linear-gradient(
              180deg,
              rgba(14, 41, 59, .05) 0%,
              transparent 72%,
              rgba(14, 41, 59, .16) 100%
            );
        }

        .loader-scan-line {
          position: absolute;
          z-index: -1;
          top: 0;
          bottom: 0;
          left: 12%;
          width: 1px;
          background: rgba(73, 122, 149, .20);
          box-shadow: 0 0 12px rgba(73, 122, 149, .12);
          animation: loaderScanMove 8s ease-in-out infinite alternate;
        }

        .loader-map-points {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .loader-map-point {
          position: absolute;
          width: clamp(4px, .55vw, 7px);
          height: clamp(4px, .55vw, 7px);
          border-radius: 50%;
          background: #8bbbd5;
          box-shadow:
            0 0 5px 2px rgba(91, 160, 197, .22),
            0 0 15px 5px rgba(91, 160, 197, .12);
          animation: loaderPointPulse 2.2s ease-in-out infinite alternate;
        }

        .point-2 { animation-delay: .6s; }
        .point-3 { animation-delay: 1.2s; }
        .point-4 { animation-delay: .3s; }
        .point-5 { animation-delay: 1.5s; }
        .point-6 { animation-delay: .9s; }
        .point-7 { animation-delay: .4s; }
        .point-8 { animation-delay: 1.3s; }
        .point-9 { animation-delay: .7s; }
        .point-10 { animation-delay: 1.6s; }
        .point-11 { animation-delay: .5s; }
        .point-12 { animation-delay: 1.1s; }

        /* Main content positioning */
        .loader-center {
          position: absolute;
          top: 47%;
          left: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: min(92%, 650px);
          text-align: center;
          transform: translate(-50%, -50%);
          animation: loaderContentEnter .9s cubic-bezier(.2, .7, .2, 1) both;
        }

        /* Owl emblem */
        .loader-owl-ring {
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(90px, 9vw, 125px);
          height: clamp(90px, 9vw, 125px);
          margin-bottom: 22px;
          border: 1px solid rgba(33, 68, 88, .12);
          border-radius: 50%;
          background: rgba(255, 255, 255, .14);
          box-shadow: 0 5px 25px rgba(21, 53, 73, .035);
          animation: loaderRingEnter 1s ease both;
        }

        .loader-owl-image {
          display: block;
          width: 58%;
          height: 76%;
          object-fit: contain;
          filter: drop-shadow(0 3px 4px rgba(0, 0, 0, .10));
        }

        /* Large TrackOwls logo */
        .loader-wordmark {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
        }

        .loader-wordmark > img {
          display: block;
          width: clamp(260px, 30vw, 390px);
          max-width: 94%;
          max-height: 90px;
          height: auto;
          object-fit: contain;
        }

        /* SCAN | DETECT | REMOVE | PROTECT */
        .loader-tagline {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 11px;
          margin: 12px 0 0;
          color: #102b43;
          font-size: clamp(10px, .82vw, 13px);
          font-weight: 800;
          letter-spacing: 1.1px;
          line-height: 1.6;
        }

        .loader-tagline i {
          display: block;
          width: 2px;
          height: 12px;
          background: #8bb630;
        }

        /* Service text: no card */
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
          color: #41637a;
          font-size: clamp(11px, .85vw, 14px);
          font-weight: 900;
          letter-spacing: 2.8px;
        }

        .loader-service-copy {
          margin-top: 23px;
          animation: loaderServiceChange .4s ease both;
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
          color: #294a62;
          font-size: clamp(15px, 1.05vw, 19px);
          font-weight: 700;
          line-height: 1.5;
        }

        .loader-scan-caption {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin: 24px 0 0;
          color: #496a80;
          font-size: clamp(10px, .8vw, 13px);
          line-height: 1.5;
        }

        .loader-status-dot {
          flex: 0 0 6px;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #8bb630;
          box-shadow: 0 0 8px rgba(139, 182, 48, .35);
          animation: loaderStatusPulse 1.2s ease-in-out infinite alternate;
        }

        /* Button */
        .loader-enter-button {
          position: absolute;
          bottom: 7%;
          left: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 152px;
          min-height: 53px;
          padding: 13px 24px;
          border: 1px solid #738fa3;
          border-radius: 5px;
          background: #102e47;
          color: #ffffff;
          font-family: inherit;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          transform: translateX(-50%);
          box-shadow: 0 7px 22px rgba(12, 40, 59, .12);
          transition: background .25s ease, border-color .25s ease;
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
          to { opacity: 0; visibility: hidden; }
        }

        @keyframes loaderBackgroundMove {
          from { transform: scale(1); }
          to { transform: scale(1.025); }
        }

        @keyframes loaderMapReveal {
          from { opacity: 0; transform: scale(1.02); }
          to { opacity: .30; transform: scale(1); }
        }

        @keyframes loaderScanMove {
          from { left: 12%; }
          to { left: 88%; }
        }

        @keyframes loaderPointPulse {
          from { opacity: .25; transform: scale(.8); }
          to { opacity: .75; transform: scale(1.15); }
        }

        @keyframes loaderRingEnter {
          from { opacity: 0; transform: scale(.85); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes loaderContentEnter {
          from { opacity: 0; margin-top: 12px; }
          to { opacity: 1; margin-top: 0; }
        }

        @keyframes loaderServiceChange {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes loaderStatusPulse {
          from { opacity: .45; }
          to { opacity: 1; }
        }

        @media (max-width: 640px) {
          .trackowls-loader-screen {
            min-height: 440px;
          }

          .loader-map {
            background-size: auto 100%;
            background-position: center;
          }

          .loader-center {
            top: 44%;
            width: 94%;
          }

          .loader-owl-ring {
            width: 76px;
            height: 76px;
            margin-bottom: 13px;
          }

          .loader-wordmark > img {
            width: min(82vw, 300px);
            max-height: 66px;
          }

          .loader-tagline {
            gap: 7px;
            margin-top: 9px;
            font-size: 9px;
            letter-spacing: .7px;
          }

          .loader-tagline i {
            height: 10px;
          }

          .loader-protection-text {
            margin-top: 24px;
          }

          .loader-service-copy {
            margin-top: 16px;
          }

          .loader-service-copy h2 {
            font-size: 16px;
          }

          .loader-service-copy h3 {
            font-size: 13px;
          }

          .loader-scan-caption {
            margin-top: 15px;
            font-size: 10px;
          }

          .loader-enter-button {
            bottom: 5%;
            min-width: 142px;
            min-height: 47px;
            font-size: 14px;
          }
        }

        @media (max-width: 380px) {
          .loader-center {
            top: 42%;
          }

          .loader-owl-ring {
            width: 66px;
            height: 66px;
            margin-bottom: 9px;
          }

          .loader-wordmark > img {
            width: min(80vw, 255px);
          }

          .loader-tagline {
            gap: 5px;
            font-size: 8px;
          }

          .loader-protection-text {
            margin-top: 18px;
          }

          .loader-service-copy {
            margin-top: 12px;
          }

          .loader-service-copy h2 {
            font-size: 15px;
          }

          .loader-service-copy h3 {
            font-size: 12px;
          }

          .loader-scan-caption {
            margin-top: 11px;
            font-size: 9px;
          }
        }

        @media (max-height: 650px) and (min-width: 641px) {
          .loader-center {
            top: 43%;
            transform: translate(-50%, -50%) scale(.82);
          }

          .loader-enter-button {
            bottom: 3%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trackowls-loader-screen *,
          .trackowls-loader-screen *::before,
          .trackowls-loader-screen *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </section>
  );
}