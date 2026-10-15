
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
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setIndustryIndex((current) => (current + 1) % INDUSTRIES.length);
    }, 1800);

    return () => window.clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`trackowls-loader ${leaving ? "loader-exit" : ""}`}
      role="dialog"
      aria-label="TrackOwls introduction"
      aria-modal="true"
    >
      {/* World map background */}
      <div className="loader-map" aria-hidden="true" />
      <div className="loader-glow" aria-hidden="true" />
      <div className="loader-lights" aria-hidden="true" />
      <div className="loader-vignette" aria-hidden="true" />

      {/* Main logo and text */}
      <main className="loader-content">
        <div className="loader-brand">
          <div className="loader-owl-wrap">
            <img
              className="loader-logo"
              src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owl-bg.png"
              alt="TrackOwls owl logo"
              draggable="false"
            />
          </div>

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

        <p className="loader-caption">
          Illustrative scan animation
        </p>
      </main>

      {/* Enter website */}
      <button
        className="loader-enter"
        type="button"
        onClick={finishLoader}
        aria-label="Enter website and skip the introduction"
      >
        Enter website
      </button>

      <style>{`
        .trackowls-loader {
          --navy: #102a43;
          --navy-dark: #071d30;
          --olive: #5b8208;

          position: fixed;
          inset: 0;
          z-index: 99999;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
          isolation: isolate;
          background: #a4b3ae;
          color: var(--navy-dark);
          font-family: Roboto, Arial, Helvetica, sans-serif;
          animation: loader-fade-in .6s ease both;
        }

        .trackowls-loader *,
        .trackowls-loader *::before,
        .trackowls-loader *::after {
          box-sizing: border-box;
        }

        .loader-map,
        .loader-glow,
        .loader-lights,
        .loader-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* Muted world map */
        .loader-map {
          z-index: 0;
          background-image: url("/world-map.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          opacity: 0;
          transform: scale(1.025);
          animation: map-reveal 1.2s ease-out .1s forwards;
        }

        /* Bright white centre and dark outer edges */
        .loader-glow {
          z-index: 1;
          background:
            radial-gradient(
              ellipse 100% 56% at 50% 46%,
              rgba(255,255,255,.96) 0%,
              rgba(250,250,246,.90) 25%,
              rgba(243,246,239,.74) 46%,
              rgba(218,229,218,.34) 68%,
              rgba(175,196,185,.05) 100%
            ),
            linear-gradient(
              180deg,
              rgba(12,32,37,.36) 0%,
              rgba(39,62,63,.12) 16%,
              transparent 36%,
              rgba(255,255,255,.04) 67%,
              rgba(12,38,43,.30) 100%
            );
        }

        /* Subtle warm lights like the reference */
        .loader-lights {
          z-index: 2;
          opacity: .76;
          background:
            radial-gradient(
              circle at 1.5% 24%,
              rgba(255,205,125,.98) 0 3px,
              rgba(255,210,137,.48) 6px,
              transparent 19px
            ),
            radial-gradient(
              circle at 80% 24.5%,
              rgba(255,204,123,.98) 0 3px,
              rgba(255,211,139,.43) 7px,
              transparent 21px
            ),
            radial-gradient(
              circle at 95% 25.5%,
              rgba(255,207,131,.95) 0 3px,
              rgba(255,214,145,.40) 7px,
              transparent 22px
            ),
            radial-gradient(
              circle at 99% 57%,
              rgba(255,212,142,.90) 0 3px,
              rgba(255,215,147,.35) 7px,
              transparent 21px
            ),
            radial-gradient(
              circle at 1% 57%,
              rgba(255,209,139,.80) 0 3px,
              rgba(255,215,147,.30) 7px,
              transparent 20px
            );
          animation: lights-breathe 4.5s ease-in-out infinite alternate;
        }

        .loader-vignette {
          z-index: 3;
          background: radial-gradient(
            ellipse 105% 90% at 50% 45%,
            transparent 38%,
            rgba(14,37,41,.06) 68%,
            rgba(8,30,37,.27) 100%
          );
        }

        /* Main content positioning */
        .loader-content {
          position: absolute;
          z-index: 4;
          top: 50%;
          left: 50%;
          width: min(94vw, 600px);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transform: translate(-50%, -50%);
        }

        .loader-brand {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          opacity: 0;
          filter: blur(3px);
          transform: translateY(12px);
          animation: brand-reveal .85s
            cubic-bezier(.16,1,.3,1) .25s forwards;
        }

        /* Owl size and subtle circular outline */
        .loader-owl-wrap {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 160px;
          height: 174px;
          margin-bottom: 3px;
        }

        .loader-owl-wrap::before {
          content: "";
          position: absolute;
          width: 145px;
          height: 145px;
          left: 50%;
          top: 48%;
          border: 1px solid rgba(116,143,87,.16);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .loader-logo {
          display: block;
          position: relative;
          z-index: 1;
          width: 137px;
          height: 157px;
          object-fit: contain;
          object-position: center;
          user-select: none;
          -webkit-user-drag: none;
        }

        /* Match the reference wordmark proportions */
        .loader-wordmark {
          color: #071b2e;
          font-size: clamp(48px, 14.8vw, 59px);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -.055em;
          white-space: nowrap;
        }

        .loader-wordmark span {
          color: var(--olive);
        }

        .loader-tagline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(4px, 1.4vw, 8px);
          width: 100%;
          margin: 14px 0 0;
          color: #243945;
          font-size: clamp(8px, 2.5vw, 10px);
          font-weight: 500;
          letter-spacing: .025em;
          line-height: 1.6;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(7px);
          animation: text-reveal .55s ease-out .75s forwards;
        }

        .loader-tagline i {
          color: var(--olive);
          font-style: normal;
          font-weight: 600;
        }

        .loader-industries {
          width: 100%;
          min-height: 91px;
          margin-top: 27px;
          opacity: 0;
          transform: translateY(7px);
          animation: text-reveal .6s ease-out 1s forwards;
        }

        .loader-industries h1 {
          margin: 0 0 17px;
          color: #4e6e80;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: .24em;
          line-height: 1.4;
        }

        .industry-pair {
          min-height: 49px;
          animation: industry-reveal .4s ease-out both;
        }

        .industry-pair p {
          margin: 4px 0;
          padding: 0 5px;
          color: #849198;
          font-size: clamp(13px, 3.8vw, 15px);
          font-weight: 600;
          line-height: 1.5;
        }

        .loader-caption {
          margin: 16px 0 0;
          color: #829198;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: .01em;
          line-height: 1.5;
          opacity: 0;
          animation: text-reveal .6s ease-out 1.35s forwards;
        }

        /* Bottom button */
        .loader-enter {
          position: absolute;
          z-index: 5;
          left: 50%;
          bottom: max(2.5%, calc(env(safe-area-inset-bottom) + 16px));
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 123px;
          min-height: 42px;
          padding: 0 19px;
          border: 1px solid rgba(218,230,237,.82);
          border-radius: 5px;
          background: #102a43;
          color: #f6f8fa;
          font-family: inherit;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(12,32,48,.10);
          opacity: 0;
          animation: button-reveal .6s ease-out .3s forwards;
          transition: background .2s ease, border-color .2s ease;
        }

        .loader-enter:hover {
          background: #193b55;
          border-color: #fff;
        }

        .loader-enter:focus-visible {
          outline: 3px solid #8da94c;
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
            transform: scale(1.025);
            filter: blur(3px);
          }
          to {
            opacity: .61;
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
            filter: blur(2px);
            transform: translateY(4px);
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }

        @keyframes lights-breathe {
          from { opacity: .48; }
          to { opacity: .78; }
        }

        @keyframes loader-exit {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        /* Larger phones and small tablets */
        @media (min-width: 400px) and (max-width: 600px) {
          .loader-owl-wrap {
            width: 170px;
            height: 185px;
          }

          .loader-logo {
            width: 146px;
            height: 166px;
          }

          .loader-owl-wrap::before {
            width: 155px;
            height: 155px;
          }

          .loader-wordmark {
            font-size: clamp(54px, 14.8vw, 62px);
          }

          .loader-industries {
            margin-top: 29px;
          }
        }

        /* Tablet */
        @media (min-width: 601px) and (max-width: 1024px) {
          .loader-content {
            width: 90vw;
          }

          .loader-owl-wrap {
            width: 185px;
            height: 198px;
          }

          .loader-logo {
            width: 160px;
            height: 178px;
          }

          .loader-wordmark {
            font-size: 66px;
          }

          .loader-tagline {
            font-size: 12px;
            gap: 10px;
          }

          .loader-industries {
            margin-top: 30px;
          }

          .industry-pair p {
            font-size: 17px;
          }

          .loader-caption {
            font-size: 12px;
          }
        }

        /* Desktop */
        @media (min-width: 1025px) {
          .loader-content {
            width: min(90vw, 620px);
          }

          .loader-owl-wrap {
            width: 190px;
            height: 205px;
          }

          .loader-logo {
            width: 166px;
            height: 183px;
          }

          .loader-wordmark {
            font-size: 70px;
          }

          .loader-tagline {
            font-size: 12px;
            gap: 12px;
          }

          .loader-industries {
            margin-top: 30px;
          }

          .industry-pair p {
            font-size: 17px;
          }
        }

        /* Compact phones */
        @media (max-width: 380px) {
          .loader-content {
            top: 49%;
            width: 96vw;
          }

          .loader-owl-wrap {
            width: 145px;
            height: 158px;
          }

          .loader-logo {
            width: 125px;
            height: 144px;
          }

          .loader-owl-wrap::before {
            width: 133px;
            height: 133px;
          }

          .loader-wordmark {
            font-size: clamp(43px, 13.4vw, 50px);
          }

          .loader-tagline {
            gap: 4px;
            font-size: 8px;
          }

          .loader-industries {
            margin-top: 23px;
            min-height: 86px;
          }

          .loader-industries h1 {
            margin-bottom: 15px;
            font-size: 11px;
          }

          .industry-pair p {
            font-size: 12px;
          }

          .loader-caption {
            margin-top: 12px;
            font-size: 10px;
          }
        }

        /* Short landscape screens */
        @media (max-height: 600px) {
          .loader-content {
            top: 45%;
            transform: translate(-50%, -50%) scale(.78);
          }

          .loader-owl-wrap {
            height: 130px;
          }

          .loader-logo {
            height: 115px;
          }

          .loader-industries {
            margin-top: 12px;
            min-height: 70px;
          }

          .loader-industries h1 {
            margin-bottom: 8px;
          }

          .loader-caption {
            margin-top: 6px;
          }

          .loader-enter {
            bottom: max(2%, env(safe-area-inset-bottom));
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
