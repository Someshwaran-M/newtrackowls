
import { useEffect, useState } from "react";

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

const scanPoints = [
  { x: "12%", y: "27%", delay: "0s" },
  { x: "24%", y: "43%", delay: "0.8s" },
  { x: "33%", y: "16%", delay: "1.4s" },
  { x: "48%", y: "25%", delay: "0.3s" },
  { x: "61%", y: "14%", delay: "1.8s" },
  { x: "72%", y: "31%", delay: "0.6s" },
  { x: "87%", y: "24%", delay: "1.2s" },
  { x: "79%", y: "65%", delay: "2s" },
  { x: "33%", y: "72%", delay: "0.5s" },
  { x: "52%", y: "55%", delay: "1.5s" },
];

export default function TrackOwlsLoader({ onEnter }) {
  const [industryIndex, setIndustryIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndustryIndex((current) => (current + 1) % industries.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const enterWebsite = () => {
    setLeaving(true);

    window.setTimeout(() => {
      onEnter?.();
    }, 650);
  };

  const industry = industries[industryIndex];

  return (
    <main
      className={`track-loader ${leaving ? "track-loader--leaving" : ""}`}
    >
      {/* Background map image and lighting */}
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
          <span className="track-loader__brand-dark">Track</span>
          <span className="track-loader__brand-green">Owls</span>
        </div>

        <p className="track-loader__tagline">
          <span>SCAN</span>
          <i />
          <span>DETECT</span>
          <i />
          <span>REMOVE</span>
          <i />
          <span>PROTECT</span>
        </p>

        <div className="track-loader__industry">
          <p className="track-loader__eyebrow">PROTECTING</p>

          <div className="track-loader__industry-text" aria-live="polite">
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

      
      <button
        type="button"
        className="track-loader__enter"
        onClick={enterWebsite}
      >
        Enter website
        
      </button>
    </main>
  );
}
