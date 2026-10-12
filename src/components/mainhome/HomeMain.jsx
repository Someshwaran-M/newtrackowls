
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  "Video & film",
  "Live broadcasts",
  "Music & audio",
  "Digital publications",
  "Games & software",
  "Brand assets",
];

const Icon = ({ children, className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

function HomeMain() {
  const navigate = useNavigate();
  const [animationPaused, setAnimationPaused] = useState(false);

  const handleContact = () => {
    const contact = document.getElementById("contact");

    if (contact) {
      contact.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/contact");
    }
  };

  return (
    <main
      id="home"
      className={`track-hero relative isolate overflow-hidden bg-[#081e32] font-['Roboto',sans-serif] text-white ${
        animationPaused ? "track-no-animation" : ""
      }`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800;900&display=swap');

        .track-hero {
          --lime: #c9f20b;
          --navy: #092036;
          --border: rgba(171, 198, 215, .45);
          background:
            radial-gradient(
              ellipse at 76% 48%,
              rgba(33, 91, 89, .34),
              transparent 46%
            ),
            linear-gradient(
              110deg,
              #071b30 0%,
              #0b2337 54%,
              #102a34 100%
            );
        }

        .track-world-map {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          overflow: hidden;
          opacity: .25;
          background-image:
            linear-gradient(
              90deg,
              rgba(5, 24, 42, .78),
              rgba(5, 24, 42, .05) 75%
            ),
            url('/world-map.png');
          background-position: center center;
          background-size: cover;
          filter: saturate(.6);
        }

        .track-map-overlay {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            linear-gradient(
              90deg,
              rgba(5, 24, 43, .52) 0%,
              rgba(5, 24, 43, .30) 48%,
              rgba(7, 28, 42, .16) 100%
            ),
            linear-gradient(
              0deg,
              rgba(5, 24, 43, .30),
              transparent 38%,
              rgba(5, 24, 43, .12)
            );
        }

        /* Main layout: extra space below the navbar */
        .track-content {
          width: min(1400px, calc(100% - 130px));
          min-height: 906px;
          margin: 0 auto;
          padding-top: 116px;
          padding-bottom: 70px;
          display: grid;
          grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
          column-gap: 70px;
          align-items: start;
          position: relative;
          z-index: 1;
        }

        .track-left {
          min-width: 0;
          animation: trackReveal .7s ease both;
        }

        .track-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 25px;
          color: var(--lime);
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          line-height: 1.2;
          white-space: nowrap;
        }

        .track-eyebrow-line {
          display: block;
          width: 31px;
          height: 1px;
          flex-shrink: 0;
          background: #8bb630;
        }

        .track-heading {
          max-width: 650px;
          margin: 0;
          color: #f8fafc;
          font-size: clamp(58px, 4.5vw, 78px);
          font-weight: 800;
          letter-spacing: -3.5px;
          line-height: 1.065;
        }

        .track-heading-accent {
          display: block;
          color: var(--lime);
          white-space: nowrap;
        }

        .track-description {
          max-width: 640px;
          margin: 27px 0 0;
          color: #d3dfeb;
          font-size: 19px;
          font-weight: 400;
          line-height: 1.68;
          letter-spacing: -.35px;
        }

        .track-process {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 29px;
          color: #e3eaf2;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1.2px;
          line-height: 1;
        }

        .track-process-divider {
          height: 15px;
          width: 2px;
          background: var(--lime);
        }

        .track-actions {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 36px;
        }

        .track-primary-button,
        .track-secondary-button {
          display: inline-flex;
          min-height: 51px;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          padding: 0 24px;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 700;
          transition:
            background .2s,
            border-color .2s,
            transform .2s;
        }

        .track-primary-button {
          min-width: 209px;
          border: 1px solid var(--lime);
          background: var(--lime);
          color: #14200b;
        }

        .track-primary-button:hover {
          background: #d9ff30;
          transform: translateY(-1px);
        }

        .track-secondary-button {
          min-width: 199px;
          border: 1px solid #668096;
          background: rgba(16, 39, 60, .78);
          color: #f7fafc;
        }

        .track-secondary-button:hover {
          border-color: var(--lime);
          background: rgba(25, 52, 72, .96);
        }

        /* Category chips wrap into four on the first row and two on the next */
        .track-categories {
          display: flex;
          flex-wrap: wrap;
          align-items: flex-start;
          gap: 9px 8px;
          width: 520px;
          max-width: 100%;
          margin-top: 28px;
        }

        .track-category {
          display: inline-flex;
          height: 39px;
          flex: 0 0 auto;
          align-items: center;
          justify-content: center;
          padding: 0 11px;
          border: 1px solid rgba(120, 155, 181, .62);
          border-radius: 5px;
          background: rgba(15, 39, 60, .82);
          color: #e0eaf4;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: -.3px;
          white-space: nowrap;
        }

        .track-category:hover {
          border-color: var(--lime);
          color: white;
        }

        .track-proof {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 39px;
          color: #cfdeeb;
          font-size: 14px;
          line-height: 1.5;
        }

        .track-proof-icon {
          flex-shrink: 0;
          color: #8bb630;
        }

        .track-pause {
          display: block;
          margin-top: 24px;
          padding: 0 0 8px;
          border: 0;
          border-bottom: 1px solid rgba(189, 209, 223, .8);
          background: transparent;
          color: #62798e;
          cursor: pointer;
          font-size: 12px;
          line-height: 1;
        }

        .track-pause:hover {
          color: #dce7f0;
        }

        /* Image sits lower than the left-side eyebrow */
        .track-right {
          width: 100%;
          min-width: 0;
          padding-top: 124px;
          animation: trackReveal .8s .1s ease both;
        }

        .track-image-frame {
          position: relative;
          width: 100%;
          height: 406px;
          overflow: hidden;
          border: 1px solid rgba(189, 211, 227, .72);
          border-radius: 15px;
          background: #111c26;
          box-shadow: 0 20px 50px rgba(0, 0, 0, .24);
        }

        .track-image {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .track-image-caption {
          position: absolute;
          inset: auto 0 0;
          padding: 23px 19px 17px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, .83),
            rgba(0, 0, 0, .2),
            transparent
          );
          color: #e8edf2;
          font-size: 12px;
          line-height: 1.3;
        }

        .track-walkthrough {
          position: relative;
          display: flex;
          width: 359px;
          max-width: calc(100% - 20px);
          height: 51px;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 18px auto 0;
          border: 1px solid rgba(117, 151, 175, .65);
          border-left: 3px solid var(--lime);
          border-radius: 7px;
          background: rgba(11, 34, 54, .94);
          color: #f0f5fa;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          transition: background .2s;
        }

        .track-walkthrough:hover {
          background: #173c53;
        }

        .track-walkthrough-icon {
          flex-shrink: 0;
          color: #8bb630;
        }

        .track-image-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-top: 21px;
          color: #d3e0e9;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: .65px;
          line-height: 1.4;
          white-space: nowrap;
        }

        /* Footer */
        .track-footer {
          position: relative;
          z-index: 2;
          min-height: 70px;
          border-top: 1px solid rgba(144, 172, 192, .19);
          background: #102c43;
        }

        .track-footer-inner {
          display: grid;
          width: min(1570px, calc(100% - 130px));
          min-height: 70px;
          grid-template-columns: 1.1fr repeat(6, 1fr);
          align-items: center;
          gap: 25px;
          margin: 0 auto;
        }

        .track-footer-item {
          color: #d7e4ef;
          font-size: 13px;
          font-weight: 500;
          letter-spacing: .1px;
          line-height: 1.4;
        }

        .track-footer-label {
          display: block;
          color: #b7cbd9;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.5;
        }

        @keyframes trackReveal {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .track-no-animation .track-left,
        .track-no-animation .track-right {
          animation: none !important;
        }

        @media (prefers-reduced-motion: reduce) {
          .track-left,
          .track-right {
            animation: none;
          }
        }

        /* Laptop */
        @media (max-width: 1350px) {
          .track-content {
            width: calc(100% - 80px);
            grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);
            column-gap: 42px;
          }

          .track-heading {
            font-size: clamp(50px, 4.6vw, 66px);
            letter-spacing: -2.8px;
          }

          .track-description {
            font-size: 17px;
          }

          .track-category {
            font-size: 13px;
            padding: 0 9px;
          }

          .track-image-frame {
            height: clamp(320px, 30vw, 406px);
          }

          .track-footer-inner {
            width: calc(100% - 80px);
            gap: 16px;
          }
        }

        /* Tablet */
        @media (max-width: 1023px) {
          .track-content {
            width: min(760px, calc(100% - 48px));
            min-height: unset;
            grid-template-columns: minmax(0, 1fr);
            row-gap: 30px;
            padding-top: 76px;
            padding-bottom: 65px;
          }

          .track-heading {
            max-width: 650px;
            font-size: clamp(52px, 8vw, 68px);
          }

          .track-description {
            max-width: 570px;
          }

          .track-categories {
            width: 520px;
          }

          .track-right {
            padding-top: 10px;
          }

          .track-image-frame {
            height: auto;
            aspect-ratio: 1.64 / 1;
          }

          .track-walkthrough {
            margin-left: 0;
          }

          .track-footer-inner {
            width: min(760px, calc(100% - 48px));
            grid-template-columns: repeat(4, minmax(0, 1fr));
            padding: 20px 0;
          }

          .track-footer {
            min-height: unset;
          }
        }

        /* Mobile */
        @media (max-width: 560px) {
          .track-content {
            width: calc(100% - 36px);
            row-gap: 27px;
            padding-top: 104px;
            padding-bottom: 45px;
          }

          .track-eyebrow {
            gap: 8px;
            margin-bottom: 23px;
            font-size: 9px;
            letter-spacing: 1.25px;
            white-space: normal;
          }

          .track-eyebrow-line {
            width: 18px;
          }

          .track-heading {
            font-size: clamp(40px, 10.5vw, 55px);
            letter-spacing: -1.9px;
            line-height: 1.09;
          }

          .track-heading-accent {
            font-size: .88em;
            letter-spacing: -1.6px;
            white-space: normal;
          }

          .track-description {
            margin-top: 20px;
            font-size: 15px;
            line-height: 1.75;
          }

          .track-process {
            flex-wrap: wrap;
            gap: 9px;
            margin-top: 23px;
            font-size: 10px;
            letter-spacing: 1px;
          }

          .track-process-divider {
            height: 12px;
          }

          .track-actions {
            align-items: stretch;
            flex-direction: column;
            gap: 10px;
            margin-top: 26px;
          }

          .track-primary-button,
          .track-secondary-button {
            width: 100%;
            min-height: 49px;
          }

          .track-categories {
            width: 100%;
            gap: 8px;
            margin-top: 22px;
          }

          .track-category {
            height: 36px;
            padding: 0 10px;
            font-size: 12px;
          }

          .track-proof {
            margin-top: 29px;
            font-size: 12px;
          }

          .track-pause {
            margin-top: 19px;
          }

          .track-right {
            padding-top: 0;
          }

          .track-image-frame {
            aspect-ratio: 1.35 / 1;
            border-radius: 10px;
          }

          .track-image-caption {
            padding: 18px 12px 12px;
            font-size: 10px;
          }

          .track-walkthrough {
            width: 100%;
            max-width: 100%;
            height: 47px;
            gap: 8px;
            margin-top: 13px;
            padding: 0 8px;
            font-size: 11px;
          }

          .track-image-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 7px;
            margin-top: 15px;
            font-size: 10px;
            white-space: normal;
          }

        
.track-footer {
  min-height: unset;
}

.track-footer-inner {
  display: grid;
  width: calc(100% - 24px);
  min-height: unset;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  align-items: center;
  justify-items: center;
  gap: 17px 5px;
  margin: 0 auto;
  padding: 23px 0;
}

.track-footer-item {
  min-width: 0;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.2px;
  line-height: 1.5;
  text-align: center;
  white-space: nowrap;
}

/* Center the heading across the full row */
.track-footer-item:first-child {
  grid-column: 1 / -1;
}

/* Center MUSIC and BRANDS in the last row */
.track-footer-item:nth-child(6) {
  grid-column: 2;
}

.track-footer-item:nth-child(7) {
  grid-column: 3;
}

.track-footer-label {
  font-size: 10px;
  line-height: 1.7;
  text-align: center;
}

        }
      `}</style>

      {/* Background */}
      <div className="track-world-map" aria-hidden="true" />
      <div className="track-map-overlay" aria-hidden="true" />

      {/* Hero content */}
      <section className="track-content">
        {/* Left column */}
        <div className="track-left">
          <div className="track-eyebrow">
            <span className="track-eyebrow-line" />
            <span>
              DIGITAL ANTI-PIRACY &amp; CONTENT PROTECTION
            </span>
          </div>

          <h1 className="track-heading">
            Protect your
            <br />
            content.
            <span className="track-heading-accent">
              Stop digital piracy.
            </span>
          </h1>

          <p className="track-description">
            Technology, intelligence and enforcement to help rights
            holders detect online infringement and protect digital content
            and brands.
          </p>

          <div className="track-process">
            <span>SCAN</span>
            <span className="track-process-divider" />
            <span>DETECT</span>
            <span className="track-process-divider" />
            <span>REMOVE</span>
            <span className="track-process-divider" />
            <span>PROTECT</span>
          </div>

          <div className="track-actions">
            <button
              type="button"
              onClick={handleContact}
              className="track-primary-button"
            >
              Request a consultation
            </button>

            <button
              type="button"
              onClick={() => navigate("/solutions")}
              className="track-secondary-button"
            >
              Explore our solutions
            </button>
          </div>

          <div className="track-categories">
            {categories.map((category) => (
              <span className="track-category" key={category}>
                {category}
              </span>
            ))}
          </div>

          <div className="track-proof">
            <Icon className="track-proof-icon h-4 w-4">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              <path d="m9 12 2 2 4-4" />
            </Icon>
            <span>Evidence-led action. Clear case visibility.</span>
          </div>

          <button
            type="button"
            className="track-pause"
            onClick={() => setAnimationPaused((previous) => !previous)}
          >
            {animationPaused
              ? "Resume background animation"
              : "Pause background animation"}
          </button>
        </div>

        {/* Right column */}
        <div className="track-right">
          <div className="track-image-frame">
            <img
              src="/images/home/home 2.jpeg"
              alt="Digital infrastructure server racks"
              draggable="false"
              className="track-image"
            />

            <div className="track-image-caption">
              Digital infrastructure · Illustrative photography
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate("/walkthrough")}
            className="track-walkthrough"
          >
            <Icon className="track-walkthrough-icon h-4 w-4">
              <path d="M3 7V5a2 2 0 0 1 2-2h2" />
              <path d="M17 3h2a2 2 0 0 1 2 2v2" />
              <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
              <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
              <circle cx="12" cy="12" r="2.5" />
            </Icon>

            <span>
              Explore the animated monitoring walkthrough
            </span>
          </button>

          <div className="track-image-meta">
            <span>01 / DISCOVERY TO ENFORCEMENT</span>
            <span>HUMAN INTELLIGENCE + TECHNOLOGY</span>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="track-footer">
        <div className="track-footer-inner">
          <div className="track-footer-item">
            <span className="track-footer-label">
              BUILT FOR RIGHTS
            </span>
            <span className="track-footer-label">
              HOLDERS
            </span>
          </div>

          <div className="track-footer-item">OTT &amp; VOD</div>
          <div className="track-footer-item">LIVE SPORTS</div>
          <div className="track-footer-item">FILM</div>
          <div className="track-footer-item">BROADCAST</div>
          <div className="track-footer-item">MUSIC</div>
          <div className="track-footer-item">BRANDS</div>
        </div>
      </footer>
    </main>
  );
}

export default HomeMain;
