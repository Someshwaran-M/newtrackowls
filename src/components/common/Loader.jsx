import React, { useEffect, useState } from "react";

const protectionServices = [
  ["Live Sports", "Television & Broadcasting"],
  ["Film & Entertainment", "OTT & Streaming"],
  ["Music & Audio", "Digital Content Distribution"],
  ["Brands & Marketplaces", "Websites & Applications"],
];

export default function Loader({ onComplete, duration = 6000 }) {
  const [activeService, setActiveService] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const serviceTimer = setInterval(() => {
      setActiveService(
        (previous) => (previous + 1) % protectionServices.length
      );
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
      className={`trackowls-loader-screen ${
        exiting ? "loader-exiting" : ""
      }`}
      aria-label="TrackOwls loading screen"
    >
      {/* Full-screen background */}
      <div className="loader-bg" />
      <div className="loader-map" />
      <div className="loader-vignette" />
      <div className="loader-scan-line" />

      {/* World map scanning points */}
      <div className="loader-map-points" aria-hidden="true">
        {[
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
        ].map(([left, top], index) => (
          <span
            key={index}
            className={`loader-map-point point-${index + 1}`}
            style={{ left: `${left}%`, top: `${top}%` }}
          />
        ))}
      </div>

      {/* Centered brand and content */}
      <div className="loader-center">
        {/* Owl logo */}
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

        {/* Rotating service text */}
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

      {/* Bottom button */}
      <button
        type="button"
        className="loader-enter-button"
        onClick={enterWebsite}
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
          min-height: 500px;
          overflow: hidden;
          background: #102d35;
          color: #071c30;
          font-family: Roboto, Arial, sans-serif;
          isolation: isolate;
          animation: loaderFadeIn 0.65s ease both;
        }

        .loader-bg {
          position: absolute;
          inset: -3%;
          z-index: -5;
          background:
            radial-gradient(
              ellipse at 50% 43%,
              rgba(255, 255, 247, 0.99) 0%,
              rgba(235, 241, 244, 0.94) 24%,
              rgba(171, 190, 195, 0.8) 43%,
              rgba(49, 80, 76, 0.76) 66%,
              rgba(11, 37, 47, 0.99) 100%
            );
          animation: loaderBackgroundMove 8s ease-in-out infinite alternate;
        }

        /* World map background */
        .loader-map {
          position: absolute;
          z-index: -4;
          inset: 0;
          background-image: url("/world-map.png");
          background-position: center center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          opacity: 0.88;
          animation: loaderMapReveal 1.5s ease both;
        }

        .loader-vignette {
          position: absolute;
          z-index: -3;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              rgba(12, 39, 35, 0.42),
              transparent 25%,
              transparent 75%,
              rgba(9, 34, 47, 0.42)
            ),
            linear-gradient(
              0deg,
              rgba(10, 39, 48, 0.76),
              transparent 24%,
              transparent 75%,
              rgba(13, 35, 40, 0.16)
            );
        }

        .loader-scan-line {
          position: absolute;
          z-index: -1;
          top: 0;
          bottom: 0;
          left: 12.7%;
          width: 1px;
          background: rgba(171, 212, 80, 0.15);
          box-shadow: 0 0 12px rgba(171, 212, 80, 0.1);
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
          width: clamp(5px, 0.75vw, 10px);
          height: clamp(5px, 0.75vw, 10px);
          border-radius: 50%;
          background: #ffd18a;
          box-shadow:
            0 0 5px 3px rgba(255, 188, 88, 0.55),
            0 0 19px 9px rgba(255, 168, 58, 0.25);
          animation: loaderPointPulse 2.1s ease-in-out infinite alternate;
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

        .loader-center {
          position: absolute;
          top: 49%;
          left: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: min(90%, 650px);
          text-align: center;
          transform: translate(-50%, -50%);
          animation: loaderContentEnter 1s cubic-bezier(.2,.7,.2,1) both;
        }

        .loader-owl-ring {
          display: flex;
          align-items: center;
          justify-content: center;
          width: clamp(100px, 10vw, 184px);
          height: clamp(100px, 10vw, 184px);
          margin-bottom: clamp(17px, 2vw, 30px);
          border: 1px solid rgba(137, 158, 115, 0.15);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.08);
          animation: loaderRingEnter 1s ease both;
        }

        .loader-owl-image {
          display: block;
          width: 55%;
          height: 76%;
          object-fit: contain;
          filter: drop-shadow(0 3px 4px rgba(0, 0, 0, 0.12));
        }

        .loader-wordmark {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }

        .loader-wordmark > img {
          display: block;
          width: clamp(235px, 27vw, 390px);
          max-width: 90%;
          height: auto;
          max-height: 90px;
          object-fit: contain;
        }

        .loader-logo-dots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(5px, 0.55vw, 9px);
          margin-top: 8px;
        }

        .loader-logo-dots span {
          width: clamp(4px, 0.42vw, 7px);
          height: clamp(4px, 0.42vw, 7px);
          border-radius: 50%;
          background: #102b43;
          animation: loaderDotPulse 1.6s ease-in-out infinite alternate;
        }

        .loader-logo-dots span:nth-child(3n) {
          animation-delay: .3s;
        }

        .loader-logo-dots span:nth-child(3n + 1) {
          animation-delay: .6s;
        }

        .loader-brand-tagline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(7px, 0.8vw, 13px);
          margin: 24px 0 0;
          color: #102b43;
          font-size: clamp(10px, 0.8vw, 14px);
          font-weight: 800;
          letter-spacing: 1.2px;
          white-space: nowrap;
        }

        .loader-brand-tagline i {
          display: block;
          width: 2px;
          height: 13px;
          background: #80a900;
        }

        .loader-protection-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: clamp(27px, 3vw, 39px);
        }

        .loader-protecting {
          margin: 0;
          color: #24465d;
          font-size: clamp(11px, 0.8vw, 14px);
          font-weight: 800;
          letter-spacing: 2.5px;
        }

        .loader-service-copy {
          margin-top: 24px;
          animation: loaderServiceChange .45s ease both;
        }

        .loader-service-copy h2 {
          margin: 0;
          color: #071c30;
          font-size: clamp(16px, 1.15vw, 21px);
          font-weight: 700;
          line-height: 1.45;
        }

        .loader-service-copy h3 {
          margin: 2px 0 0;
          color: #173a52;
          font-size: clamp(15px, 1.05vw, 20px);
          font-weight: 700;
          line-height: 1.45;
        }

        .loader-scan-caption {
          display: flex;
          align-items: center;
          gap: 7px;
          margin: 22px 0 0;
          color: #36566b;
          font-size: clamp(10px, 0.8vw, 14px);
        }

        .loader-status-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #80a900;
          animation: loaderStatusPulse 1.2s ease-in-out infinite alternate;
        }

        .loader-enter-button {
          position: absolute;
          bottom: 9.1%;
          left: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 151px;
          min-height: 53px;
          padding: 13px 24px;
          border: 1px solid rgba(197, 215, 228, 0.68);
          border-radius: 5px;
          background: #102d46;
          color: #fff;
          font-family: inherit;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transform: translateX(-50%);
          transition:
            background .25s ease,
            border-color .25s ease,
            box-shadow .25s ease;
        }

        .loader-enter-button:hover {
          border-color: #d0f20a;
          background: #1c4055;
          box-shadow: 0 0 22px rgba(208, 242, 10, 0.16);
        }

        .loader-enter-button:focus-visible {
          outline: 2px solid #d0f20a;
          outline-offset: 4px;
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
          to { transform: scale(1.035); }
        }

        @keyframes loaderMapReveal {
          from { opacity: 0; transform: scale(1.035); }
          to { opacity: .88; transform: scale(1); }
        }

        @keyframes loaderScanMove {
          from { left: 12.7%; }
          to { left: 87.3%; }
        }

        @keyframes loaderPointPulse {
          from { opacity: .55; transform: scale(.72); }
          to { opacity: 1; transform: scale(1.25); }
        }

        @keyframes loaderDotPulse {
          from { opacity: .45; }
          to { opacity: 1; }
        }

        @keyframes loaderRingEnter {
          from { opacity: 0; transform: scale(.82); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes loaderContentEnter {
          from { opacity: 0; margin-top: 15px; }
          to { opacity: 1; margin-top: 0; }
        }

        @keyframes loaderServiceChange {
          from { opacity: 0; transform: translateY(7px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes loaderStatusPulse {
          from { opacity: .4; }
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
            top: 43%;
            width: 94%;
          }

          .loader-owl-ring {
            width: 105px;
            height: 105px;
            margin-bottom: 17px;
          }

          .loader-wordmark > img {
            width: min(78vw, 300px);
          }

          .loader-logo-dots {
            gap: 5px;
            margin-top: 6px;
          }

          .loader-logo-dots span {
            width: 4px;
            height: 4px;
          }

          .loader-brand-tagline {
            gap: 6px;
            margin-top: 19px;
            font-size: 8px;
            letter-spacing: .7px;
          }

          .loader-brand-tagline i {
            height: 10px;
          }

          .loader-protection-text {
            margin-top: 27px;
          }

          .loader-service-copy {
            margin-top: 19px;
          }

          .loader-scan-caption {
            margin-top: 16px;
          }

          .loader-enter-button {
            bottom: 6%;
            min-width: 142px;
            min-height: 48px;
            font-size: 14px;
          }
        }

        @media (max-height: 650px) and (min-width: 641px) {
          .loader-center {
            top: 45%;
            transform: translate(-50%, -50%) scale(.78);
          }

          .loader-enter-button {
            bottom: 4%;
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