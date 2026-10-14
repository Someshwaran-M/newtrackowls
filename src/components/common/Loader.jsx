
import { useCallback, useEffect, useRef, useState } from "react";

const DURATION = 8000;

const INDUSTRIES = [
  ["Film & Entertainment", "OTT & Streaming"],
  ["Live Sports", "Television & Broadcasting"],
  ["Music", "Brands & IP Owners"],
  ["Sportswear & Apparel Brands", "Publishers & Digital Creators"],
];

export default function Loader({ onComplete }) {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [industryIndex, setIndustryIndex] = useState(0);
  const [scanProgress, setScanProgress] = useState(0);

  const completedRef = useRef(false);
  const exitTimerRef = useRef(null);

  const finishLoader = useCallback(() => {
    if (completedRef.current) return;

    completedRef.current = true;
    setLeaving(true);

    exitTimerRef.current = window.setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 450);
  }, [onComplete]);

  useEffect(() => {
    const timer = window.setTimeout(finishLoader, DURATION);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") finishLoader();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleKeyDown);

      if (exitTimerRef.current !== null) {
        window.clearTimeout(exitTimerRef.current);
      }
    };
  }, [finishLoader]);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return undefined;
    }

    const industryTimer = window.setInterval(() => {
      setIndustryIndex((current) => (current + 1) % INDUSTRIES.length);
    }, 1500);

    const scanTimer = window.setInterval(() => {
      setScanProgress((current) => (current >= 100 ? 0 : current + 1));
    }, 65);

    return () => {
      window.clearInterval(industryTimer);
      window.clearInterval(scanTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`trackowls-loader ${leaving ? "loader-exit" : ""}`}
      role="dialog"
      aria-label="TrackOwls introduction"
      aria-modal="true"
    >
      {/* Background image */}
      <div className="loader-background-image" aria-hidden="true" />

      {/* Light white overlay */}
      <div className="loader-central-glow" aria-hidden="true" />
      <div className="loader-vignette" aria-hidden="true" />

      {/* Animated background scan */}
      <div className="loader-scan" aria-hidden="true" />

      <main className="loader-content">
        <div className="loader-brand">
          <img
            className="loader-logo"
            src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owl-bg.png"
            alt="TrackOwls owl logo"
            draggable="false"
          />

          <div className="loader-wordmark" aria-label="TrackOwls">
            Track<span>Owls</span>
          </div>
        </div>

        <p className="loader-tagline">
          <span>SCAN</span>
          <i>|</i>
          <span>DETECT</span>
          <i>|</i>
          <span>REMOVE</span>
          <i>|</i>
          <span>PROTECT</span>
        </p>

        <section className="loader-industries" aria-live="polite">
          <h1>PROTECTING</h1>

          <div className="industry-pair" key={industryIndex}>
            <p>{INDUSTRIES[industryIndex][0]}</p>
            <p>{INDUSTRIES[industryIndex][1]}</p>
          </div>
        </section>

        {/* Illustrative scan caption and lime progress */}
        <div className="loader-scan-status">
          <p>Illustrative scan animation</p>
        </div>
      </main>

      {/* Dark navy button */}
      <button
        className="loader-enter"
        type="button"
        onClick={finishLoader}
        aria-label="Enter website and skip the introduction"
      >
        Enter Website
        
      </button>

      <style>{`
        .trackowls-loader {
          --lime: #ADD132;
          --lime-light: #D6ED8C;
          --lime-dark: #789D20;
          --navy: #152B43;
          --ink: #172F3B;

          position: fixed;
          inset: 0;
          z-index: 99999;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
          isolation: isolate;
          background: #F7F9F6;
          color: var(--ink);
          font-family: Roboto, Arial, Helvetica, sans-serif;
          animation: loader-fade-in .7s ease-out both;
        }

        .trackowls-loader *,
        .trackowls-loader *::before,
        .trackowls-loader *::after {
          box-sizing: border-box;
        }

        .loader-background-image,
        .loader-central-glow,
        .loader-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* World map stays visible behind the white overlay */
        .loader-background-image {
          z-index: 0;
          background-image: url("/world-map.png");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transform: scale(1.02);
          opacity: 0;
          animation: map-reveal 1.2s ease-out .1s forwards;
        }

        /* White center with a subtle lime-yellow tint */
        .loader-central-glow {
          z-index: 1;
          background: radial-gradient(
            ellipse 95% 78% at 50% 43%,
            rgba(255, 255, 255, .68) 0%,
            rgba(255, 255, 255, .57) 28%,
            rgba(250, 252, 246, .40) 52%,
            rgba(238, 244, 220, .24) 75%,
            rgba(173, 209, 50, .10) 100%
          );
        }

        .loader-vignette {
          z-index: 2;
          background: linear-gradient(
            180deg,
            rgba(21, 43, 53, .09) 0%,
            transparent 25%,
            transparent 76%,
            rgba(21, 43, 53, .12) 100%
          );
        }

        /* Scanning beam */
        .loader-scan {
          position: absolute;
          z-index: 3;
          top: -25%;
          left: 0;
          width: 100%;
          height: 22%;
          pointer-events: none;
          background: linear-gradient(
            180deg,
            transparent,
            rgba(173, 209, 50, .20),
            rgba(255, 255, 255, .25),
            transparent
          );
          animation: scan-move 5s linear 1s infinite;
        }

        .loader-content {
          position: absolute;
          z-index: 4;
          top: 43%;
          left: 50%;
          width: min(96vw, 800px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transform: translate(-50%, -50%);
        }

        .loader-brand {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  opacity: 0;
  filter: blur(4px);
  transform: translateY(16px);
  animation: brand-reveal .85s cubic-bezier(.16, 1, .3, 1) .3s forwards;
}

.loader-brand::before {
  content: "";
  position: absolute;
  top: -14px;
  left: 50%;
  width: 300px;
  height: 290px;
  border: 3px solid rgba(120, 157, 32, 0.55);
  border-radius: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  z-index: -1;
}

        .loader-logo {
          display: block;
          width: 220px;
          max-width: 54vw;
          height: 155px;
          object-fit: contain;
          object-position: center;
          margin: 0 auto 10px;
          user-select: none;
          
        }

        .loader-wordmark {
          color: #142D3C;
          font-size: clamp(48px, 7vw, 64px);
          font-weight: 900;
          line-height: 1.12;
          letter-spacing: -.045em;
          white-space: nowrap;
        }

        .loader-wordmark span {
          color: #648609;
        }

        .loader-tagline {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: nowrap;
          gap: clamp(5px, 1.3vw, 12px);
          margin: 15px 0 0;
          color: #203942;
          font-size: clamp(10px, 1.6vw, 14px);
          font-weight: 500;
          letter-spacing: .025em;
          line-height: 1.7;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(8px);
          animation: text-reveal .55s ease-out .8s forwards;
        }

        .loader-tagline i {
          color: #789D20;
          font-size: 14px;
          font-style: normal;
          font-weight: 700;
        }

        .loader-industries {
          width: 100%;
          min-height: 115px;
          margin-top: 27px;
          opacity: 0;
          transform: translateY(8px);
          animation: text-reveal .6s ease-out 1.1s forwards;
        }

        .loader-industries h1 {
          margin: 0 0 15px;
          color: #426B83;
          font-size: 14px;
          font-weight: 800;
          letter-spacing: .24em;
          line-height: 1.5;
        }

        .industry-pair {
          min-height: 58px;
          animation: industry-reveal .38s ease-out both;
        }

        .industry-pair p {
          margin: 4px 0;
          padding: 0 5px;
          color: #172F3B;
          font-size: clamp(16px, 2.5vw, 19px);
          font-weight: 650;
          line-height: 1.5;
        }

        /* Progress caption and animated lime line */
        .loader-scan-status {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          margin-top: 9px;
          opacity: 0;
          transform: translateY(7px);
          animation: text-reveal .6s ease-out 1.5s forwards;
        }

        .loader-scan-status p {
          margin: 0;
          color: #71889A;
          font-size: 13px;
          font-weight: 400;
          letter-spacing: .01em;
          line-height: 1.6;
        }

        .scan-progress-track {
          width: 130px;
          max-width: 38vw;
          height: 2px;
          margin-top: 10px;
          overflow: hidden;
          border-radius: 20px;
          background: rgba(77, 103, 110, .15);
        }

        .scan-progress-fill {
          height: 100%;
          border-radius: inherit;
          background: linear-gradient(
            90deg,
            #D6ED8C,
            #ADD132,
            #789D20
          );
          box-shadow: 0 0 8px rgba(173, 209, 50, .32);
          transition: width 100ms linear;
        }

        /* Navy button with lime accent */
        .loader-enter {
          position: absolute;
          z-index: 5;
          left: 50%;
          bottom: max(5%, calc(env(safe-area-inset-bottom) + 20px));
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          min-height: 48px;
          padding: 0 25px;
          border: 1px solid #1e3349;
          border-radius: 5px;
          background: #152B43;
          color: #FFFFFF;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 5px 20px rgba(21, 43, 53, .15);
          transition: background .2s ease, border-color .2s ease;
          animation: button-reveal .6s ease-out .3s both;
        }

        .loader-enter span {
          color: #D6ED8C;
          font-size: 19px;
          transition: transform .2s ease;
        }

        .loader-enter:hover {
          background: #203A50;
          border-color: #C7E65A;
        }

        .loader-enter:hover span {
          transform: translate(2px, -2px);
        }

        .loader-enter:focus-visible {
          outline: 3px solid #ADD132;
          outline-offset: 4px;
        }

        .loader-exit {
          pointer-events: none;
          animation: loader-exit .45s ease-in forwards;
        }

        @keyframes loader-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes map-reveal {
          from {
            opacity: 0;
            transform: scale(1.02);
            filter: blur(3px);
          }
          to {
            opacity: .82;
            transform: scale(1);
            filter: blur(0);
          }
        }

        @keyframes brand-reveal {
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }

        @keyframes text-reveal {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes button-reveal {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes industry-reveal {
          from {
            opacity: 0;
            filter: blur(3px);
            transform: translateY(5px);
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }

        @keyframes scan-move {
          from { transform: translateY(0); }
          to { transform: translateY(650%); }
        }

        @keyframes loader-exit {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        /* Desktop */
        @media (min-width: 1440px) {
          .loader-logo {
            width: 335px;
            height: 265px;
          }

          .loader-wordmark {
            font-size: 68px;
          }

          .loader-tagline {
            font-size: 16px;
            gap: 14px;
          }

          .loader-industries h1 {
            font-size: 16px;
          }

          .industry-pair p {
            font-size: 21px;
          }
        }

        /* Tablet */
        @media (min-width: 601px) and (max-width: 1024px) {
          .loader-logo {
            width: 200px;
            height: 140px;
          }

          .loader-wordmark {
            font-size: 56px;
          }

          .loader-tagline {
            gap: 8px;
            font-size: 12px;
          }

          .loader-industries {
            margin-top: 25px;
          }

          .loader-industries h1 {
            font-size: 14px;
          }

          .industry-pair p {
            font-size: 18px;
          }
        }

        /* Mobile */
        @media (max-width: 600px) {
          .loader-background-image {
            background-position: center center;
          }

          .loader-central-glow {
            background: radial-gradient(
              ellipse 112% 72% at 50% 43%,
              rgba(255, 255, 255, .70) 0%,
              rgba(255, 255, 255, .57) 31%,
              rgba(249, 251, 249, .40) 55%,
              rgba(236, 242, 237, .27) 79%,
              rgba(220, 231, 229, .15) 100%
            );
          }

          .loader-content {
            top: 42%;
            width: 97vw;
          }

          .loader-brand::before {
    width: 250px;
    height: 250px;
  }


          .loader-logo {
            width: 290px;
            max-width: 105vw;
            height: 235px;
            margin-bottom: 8px;
          }

          .loader-wordmark {
            font-size: clamp(63px, 20vw, 72px);
            line-height: 1.15;
            letter-spacing: -0.04em;
          }

          .loader-tagline {
            gap: clamp(4px, 10vw, 12px);
            margin-top: 13px;
            font-size: clamp(9px, 2.8vw, 14px);
            letter-spacing: 0;
          }

          .loader-tagline i {
            font-size: 12px;
          }

          .loader-industries {
            margin-top: 25px;
            min-height: 100px;
          }

          .loader-industries h1 {
            font-size: 14px;
            letter-spacing: .24em;
            margin-bottom: 14px;
          }

          .industry-pair {
            min-height: 56px;
          }

          .industry-pair p {
            font-size: clamp(15px, 4.2vw, 17px);
            line-height: 1.5;
          }

          .loader-scan-status p {
            font-size: 13px;
          }

          .scan-progress-track {
            width: 110px;
          }

          .loader-enter {
            min-height: 43px;
            padding: 0 19px;
            bottom: max(5%, calc(env(safe-area-inset-bottom) + 18px));
            font-size: 13px;
          }
        }

        @media (max-width: 380px) {
          .loader-content {
            top: 41%;
            width: 98vw;
          }

          .loader-logo {
            width: 170px;
            height: 120px;
          }

          .loader-wordmark {
            font-size: clamp(39px, 11.5vw, 44px);
          }

          .loader-tagline {
            gap: 3px;
            font-size: 8.5px;
          }

          .loader-tagline i {
            font-size: 10px;
          }

          .loader-industries {
            margin-top: 22px;
          }

          .loader-industries h1 {
            font-size: 12px;
          }

          .industry-pair p {
            font-size: 14px;
          }
        }

        @media (max-height: 600px) {
          .loader-content {
            top: 42%;
            transform: translate(-50%, -50%) scale(.82);
          }

          .loader-logo {
            height: 100px;
          }

          .loader-industries {
            margin-top: 15px;
            min-height: 80px;
          }

          .loader-industries h1 {
            margin-bottom: 8px;
          }

          .loader-scan-status {
            margin-top: 4px;
          }

          .loader-enter {
            bottom: max(3%, env(safe-area-inset-bottom));
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trackowls-loader *,
          .trackowls-loader *::before,
          .trackowls-loader *::after {
            animation-duration: .01ms !important;
            animation-delay: 0ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
