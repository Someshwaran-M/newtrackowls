
import { useEffect, useState, useCallback } from "react";
import "../../styles/TrackOwlsLoader.css";

const industries = [
  {
    title: "Film & Entertainment",
    subtitle: "OTT & Streaming",
  },
  {
    title: "Live Sports",
    subtitle: "Television & Broadcasting",
  },
  {
    title: "Brands & Creators",
    subtitle: "Digital Content Protection",
  },
  {
    title: "Sportswear & Apparel Brands",
    subtitle: "Publishers & Digital Creators",
  },
];

export default function TrackOwlsLoader({
  onEnter,
  onComplete,
  duration = 8000,
  autoEnter = false,
}) {
  const [industryIndex, setIndustryIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  // Rotate industry text
  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndustryIndex(
        (current) => (current + 1) % industries.length
      );
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  // Support both callback names used by App.jsx
  const finishLoader = useCallback(() => {
    onEnter?.();
    onComplete?.();
  }, [onEnter, onComplete]);

  // Exit animation and reveal website
  const enterWebsite = useCallback(() => {
    if (leaving) return;

    setLeaving(true);

    window.setTimeout(() => {
      finishLoader();
    }, 650);
  }, [leaving, finishLoader]);

  // Optional automatic transition
  useEffect(() => {
    if (!autoEnter) return;

    const timer = window.setTimeout(() => {
      enterWebsite();
    }, duration);

    return () => window.clearTimeout(timer);
  }, [autoEnter, duration, enterWebsite]);

  const industry = industries[industryIndex];

  return (
    <main
      className={`track-loader ${
        leaving ? "track-loader--leaving" : ""
      }`}
      aria-label="TrackOwls introduction"
    >
      {/* Background map and lighting */}
      <div className="track-loader__background" />
      <div className="track-loader__vignette" />
      <div className="track-loader__center-glow" />
      <div className="track-loader__scan-beam" />

      {/* Main brand content */}
      <section className="track-loader__content">
        <div className="track-loader__owl-wrap">
          <div className="track-loader__owl-ring" />
          <div className="track-loader__owl-scan" />

          <img
            src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owl-bg.png"
            alt="TrackOwls owl logo"
            className="track-loader__owl"
          />
        </div>

        <div className="track-loader__brand">
          <span className="track-loader__brand-dark">
            Track
          </span>

          <span className="track-loader__brand-green">
            Owls
          </span>
          
        </div>

        <div className="track-loader__tagline">
          SCAN <i>|</i> DETECT <i>|</i> REMOVE <i>|</i> PROTECT
        </div>

        <div className="track-loader__industry">
          <p className="track-loader__eyebrow">
            PROTECTING
          </p>

          <div
            className="track-loader__industry-text"
            aria-live="polite"
          >
            <strong key={industry.title}>
              {industry.title}
            </strong>

            <strong key={industry.subtitle}>
              {industry.subtitle}
            </strong>
          </div>

          <p className="track-loader__caption">
            Illustrative scan animation
          </p>
        </div>
      </section>

      {/* Enter website */}
      <button
        type="button"
        className="track-loader__enter"
        onClick={enterWebsite}
        disabled={leaving}
      >
        {leaving ? "Enter website" : "Enter website"}
      </button>
    </main>
  );
}
