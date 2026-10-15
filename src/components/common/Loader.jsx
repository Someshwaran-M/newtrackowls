
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
      if (event.key === "Escape") {
        finishLoader();
      }
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

    const industryTimer = window.setInterval(() => {
      setIndustryIndex((current) => (current + 1) % INDUSTRIES.length);
    }, 1800);

    return () => window.clearInterval(industryTimer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`trackowls-loader ${leaving ? "loader-exit" : ""}`}
      role="dialog"
      aria-label="TrackOwls introduction"
      aria-modal="true"
    >
      {/* Soft world map background */}
      <div className="loader-background-image" aria-hidden="true" />
      <div className="loader-background-glow" aria-hidden="true" />
      <div className="loader-light-points" aria-hidden="true" />
      <div className="loader-vignette" aria-hidden="true" />

      {/* Brand and introduction */}
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

        <p className="loader-tagline" aria-label="Scan, Detect, Remove, Protect">
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

      {/* Enter website button */}
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
          --navy: #10243b;
          --navy-deep: #071c30;
          --ink: #102235;
          --olive: #5d850b;
          --muted: #89959b;

          position: fixed;
          inset: 0;
          z-index: 99999;
          width: 100%;
          height: 100vh;
          height: 100dvh;
          overflow: hidden;
          isolation: isolate;
          background: #a5b5b0;
          color: var(--ink);
          font-family: Roboto, Arial, Helvetica, sans-serif;
          animation: loader-fade-in 0.65s ease-out both;
        }

        .trackowls-loader *,
        .trackowls-loader *::before,
        .trackowls-loader *::after {
          box-sizing: border-box;
        }

        .loader-background-image,
        .loader-background-glow,
        .loader-light-points,
        .loader-vignette {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        /* Keep the map visible, but never stronger than the brand. */
        .loader-background-image {
          z-index: 0;
          background-image: url("/world-map.png");
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          opacity: 0;
          transform: scale(1.035);
          animation: map-reveal 1.2s ease-out 0.1s forwards;
        }

        /* The reference has a bright, soft centre. */
        .loader-background-glow {
          z-index: 1;
          background:
            radial-gradient(
              ellipse 76% 54% at 50% 43%,
              rgba(255, 255, 255, 0.91) 0%,
              rgba(247, 249, 241, 0.82) 31%,
              rgba(238, 242, 228, 0.55) 56%,
              rgba(211, 222, 209, 0.18) 78%,
              transparent 100%
            ),
            linear-gradient(
              180deg,
              rgba(24, 44, 43, 0.29) 0%,
              rgba(224, 231, 218, 0.09) 36%,
              rgba(237, 242, 234, 0.16) 70%,
              rgba(30, 55, 55, 0.29) 100%
            );
        }

        /* Subtle warm lights, similar to the supplied reference. */
        .loader-light-points {
          z-index: 2;
          opacity: 0.64;
          background:
            radial-gradient(
              circle at 10% 25%,
              rgba(255, 211, 133, 0.95) 0,
              rgba(255, 211, 133, 0.43) 4px,
              rgba(255, 211, 133, 0.12) 12px,
              transparent 23px
            ),
            radial-gradient(
              circle at 75% 30%,
              rgba(255, 215, 150, 0.88) 0,
              rgba(255, 215, 150, 0.35) 5px,
              transparent 22px
            ),
            radial-gradient(
              circle at 87% 32%,
              rgba(255, 212, 137, 0.85) 0,
              rgba(255, 212, 137, 0.3) 5px,
              transparent 20px
            ),
            radial-gradient(
              circle at 94% 49%,
              rgba(255, 214, 149, 0.8) 0,
              rgba(255, 214, 149, 0.25) 5px,
              transparent 20px
            ),
            radial-gradient(
              circle at 7% 65%,
              rgba(255, 210, 137, 0.75) 0,
              rgba(255, 210, 137, 0.23) 5px,
              transparent 19px
            );
          animation: lights-breathe 5s ease-in-out infinite alternate;
        }

        .loader-vignette {
          z-index: 3;
          background:
            radial-gradient(
              ellipse 90% 82% at 50% 44%,
              transparent 40%,
              rgba(16, 39, 40, 0.08) 76%,
              rgba(13, 37, 39, 0.26) 100%
            );
        }

        .loader-content {
          position: absolute;
          z-index: 4;
          top: 43%;
          left: 50%;
          width: min(92vw, 570px);
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
          animation: brand-reveal 0.85s
            cubic-bezier(.16, 1, .3, 1) 0.25s forwards;
        }

        .loader-owl-wrap {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 168px;
          height: 180px;
          margin-bottom: 5px;
        }

        /* Faint outline: it should not compete with the owl. */
        .loader-owl-wrap::before {
          content: "";
          position: absolute;
          width: 150px;
          height: 150px;
          left: 50%;
          top: 50%;
          border: 1.5px solid rgba(120, 145, 91, 0.17);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
        }

        .loader-logo {
          display: block;
          position: relative;
          z-index: 1;
          width: 148px;
          height: 162px;
          object-fit: contain;
          object-position: center;
          user-select: none;
          -webkit-user-drag: none;
        }

        .loader-wordmark {
          color: var(--navy-deep);
          font-size: clamp(42px, 10vw, 61px);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.055em;
          white-space: nowrap;
        }

        .loader-wordmark span {
          color: var(--olive);
        }

        .loader-tagline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: clamp(5px, 1.5vw, 11px);
          width: 100%;
          margin: 15px 0 0;
          color: #233642;
          font-size: clamp(9px, 2.2vw, 13px);
          font-weight: 500;
          letter-spacing: 0.035em;
          line-height: 1.6;
          white-space: nowrap;
          opacity: 0;
          transform: translateY(7px);
          animation: text-reveal 0.55s ease-out 0.75s forwards;
        }

        .loader-tagline i {
          color: var(--olive);
          font-style: normal;
          font-weight: 500;
        }

        .loader-industries {
          width: 100%;
          min-height: 106px;
          margin-top: 26px;
          opacity: 0;
          transform: translateY(7px);
          animation: text-reveal 0.6s ease-out 1s forwards;
        }

        .loader-industries h1 {
          margin: 0 0 23px;
          color: #526e7d;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.24em;
          line-height: 1.4;
        }

        .industry-pair {
          min-height: 56px;
          animation: industry-reveal 0.4s ease-out both;
        }

        .industry-pair p {
          margin: 5px 0;
          padding: 0 6px;
          color: #7e8c94;
          font-size: clamp(14px, 3.5vw, 18px);
          font-weight: 600;
          line-height: 1.45;
        }

        .loader-caption {
          margin: 18px 0 0;
          color: #7b8b91;
          font-size: 12px;
          font-weight: 400;
          letter-spacing: 0.01em;
          line-height: 1.5;
          opacity: 0;
          animation: text-reveal 0.6s ease-out 1.35s forwards;
        }

        .loader-enter {
          position: absolute;
          z-index: 5;
          left: 50%;
          bottom: max(5%, calc(env(safe-area-inset-bottom) + 20px));
          transform: translateX(-50%);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 47px;
          min-width: 172px;
          padding: 0 24px;
          border: 1px solid rgba(215, 226, 230, 0.78);
          border-radius: 6px;
          background: #102a43;
          color: #f4f7fa;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 5px 20px rgba(16, 37, 55, 0.12);
          opacity: 0;
          animation: button-reveal 0.6s ease-out 0.3s forwards;
          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .loader-enter:hover {
          background: #193b56;
          border-color: #ffffff;
          box-shadow: 0 7px 24px rgba(16, 37, 55, 0.2);
        }

        .loader-enter:focus-visible {
          outline: 3px solid #8da94c;
          outline-offset: 4px;
        }

        .loader-exit {
          pointer-events: none;
          animation: loader-exit 0.45s ease-in forwards;
        }

        @keyframes loader-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes map-reveal {
          from {
            opacity: 0;
            transform: scale(1.035);
            filter: blur(3px);
          }
          to {
            opacity: 0.69;
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
          from { opacity: 0.48; }
          to { opacity: 0.75; }
        }

        @keyframes loader-exit {
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        /* Desktop */
        @media (min-width: 1025px) {
          .loader-content {
            top: 42%;
            width: min(90vw, 590px);
          }

          .loader-owl-wrap {
            width: 180px;
            height: 190px;
          }

          .loader-owl-wrap::before {
            width: 164px;
            height: 164px;
          }

          .loader-logo {
            width: 158px;
            height: 172px;
          }

          .loader-wordmark {
            font-size: 62px;
          }

          .loader-tagline {
            font-size: 13px;
            gap: 12px;
          }

          .loader-industries {
            margin-top: 28px;
          }

          .loader-industries h1 {
            font-size: 14px;
          }

          .industry-pair p {
            font-size: 17px;
          }
        }

        /* Tablet */
        @media (min-width: 601px) and (max-width: 1024px) {
          .loader-content {
            top: 43%;
            width: min(90vw, 540px);
          }

          .loader-owl-wrap {
            width: 164px;
            height: 174px;
          }

          .loader-logo {
            width: 145px;
            height: 158px;
          }

          .loader-wordmark {
            font-size: 57px;
          }
        }

        /* Mobile: balanced spacing and smaller typography */
        @media (max-width: 600px) {
          .loader-background-image {
            background-position: center center;
          }

          .loader-background-glow {
            background:
              radial-gradient(
                ellipse 100% 55% at 50% 43%,
                rgba(255, 255, 255, 0.89) 0%,
                rgba(248, 249, 241, 0.78) 32%,
                rgba(235, 241, 230, 0.49) 58%,
                rgba(205, 219, 207, 0.17) 82%,
                transparent 100%
              ),
              linear-gradient(
                180deg,
                rgba(19, 42, 41, 0.24) 0%,
                rgba(230, 236, 226, 0.06) 35%,
                rgba(233, 240, 231, 0.13) 73%,
                rgba(20, 47, 48, 0.26) 100%
              );
          }

          .loader-content {
            top: 43%;
            width: 94vw;
          }

          .loader-owl-wrap {
            width: 145px;
            height: 157px;
            margin-bottom: 5px;
          }

          .loader-owl-wrap::before {
            width: 133px;
            height: 133px;
            border-width: 1px;
          }

          .loader-logo {
            width: 132px;
            height: 146px;
          }

          .loader-wordmark {
            font-size: clamp(40px, 11.8vw, 53px);
            letter-spacing: -0.055em;
            line-height: 1.1;
          }

          .loader-tagline {
            gap: clamp(4px, 1.5vw, 7px);
            margin-top: 13px;
            font-size: clamp(8px, 2.5vw, 11px);
            letter-spacing: 0.025em;
          }

          .loader-industries {
            margin-top: 25px;
            min-height: 100px;
          }

          .loader-industries h1 {
            margin-bottom: 20px;
            font-size: 12px;
            letter-spacing: 0.23em;
          }

          .industry-pair {
            min-height: 54px;
          }

          .industry-pair p {
            margin: 5px 0;
            font-size: clamp(13px, 3.6vw, 16px);
            font-weight: 600;
            line-height: 1.45;
          }

          .loader-caption {
            margin-top: 16px;
            font-size: 11px;
          }

          .loader-enter {
            min-width: 162px;
            min-height: 44px;
            padding: 0 20px;
            bottom: max(5%, calc(env(safe-area-inset-bottom) + 18px));
            font-size: 14px;
          }
        }

        /* Small phones */
        @media (max-width: 380px) {
          .loader-content {
            top: 42%;
            width: 96vw;
          }

          .loader-owl-wrap {
            width: 128px;
            height: 140px;
          }

          .loader-owl-wrap::before {
            width: 119px;
            height: 119px;
          }

          .loader-logo {
            width: 118px;
            height: 130px;
          }

          .loader-wordmark {
            font-size: clamp(37px, 11.4vw, 43px);
          }

          .loader-tagline {
            gap: 4px;
            font-size: 8px;
          }

          .loader-industries {
            margin-top: 21px;
          }

          .loader-industries h1 {
            margin-bottom: 17px;
            font-size: 11px;
          }

          .industry-pair p {
            font-size: 13px;
          }

          .loader-caption {
            margin-top: 13px;
            font-size: 10px;
          }

          .loader-enter {
            min-width: 150px;
          }
        }

        /* Short landscape screens */
        @media (max-height: 600px) {
          .loader-content {
            top: 43%;
            transform: translate(-50%, -50%) scale(0.78);
          }

          .loader-owl-wrap {
            height: 125px;
          }

          .loader-logo {
            height: 115px;
          }

          .loader-industries {
            margin-top: 12px;
            min-height: 76px;
          }

          .loader-industries h1 {
            margin-bottom: 8px;
          }

          .loader-caption {
            margin-top: 7px;
          }

          .loader-enter {
            bottom: max(3%, env(safe-area-inset-bottom));
            min-height: 40px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .trackowls-loader *,
          .trackowls-loader *::before,
          .trackowls-loader *::after {
            animation-duration: 0.01ms !important;
            animation-delay: 0ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </div>
  );
}
