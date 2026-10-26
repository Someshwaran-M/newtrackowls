import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  Radio,
  Play,
  Globe,
  FileCheck2,
  ShieldCheck,
  ScanSearch,
  Search,
  Eye,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

// Original solution content, image paths, icons, and links are unchanged.
const solutions = [
  {
    number: "01",
    title: "Live Streaming Protection",
    description: "Act while the event still matters.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85",
    icon: Radio,
    link: "/solutions/live-streaming-protection",
  },
  {
    number: "02",
    title: "OTT & VOD Protection",
    description: "Protect every release window.",
    image: "/solutions/videoott.jpeg",
    icon: Play,
    link: "/solutions/ott-vod-protection",
  },
  {
    number: "03",
    title: "Website & App Monitoring",
    description: "See where your content travels.",
    image: "/solutions/websitemonitoring.jpeg",
    icon: Globe,
    link: "/solutions/web-app-monitoring",
  },
  {
    number: "04",
    title: "Copyright Enforcement",
    description: "Turn evidence into action.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=85",
    icon: FileCheck2,
    link: "/solutions/copyright-enforcement",
  },
  {
    number: "05",
    title: "Brand Protection",
    description: "Defend the identity you built.",
    image: "/brand.png",
    icon: ShieldCheck,
    link: "/solutions/brand-protection",
  },
  {
    number: "06",
    title: "Piracy Intelligence",
    description: "Understand the patterns behind piracy.",
    image: "/solutions/piracyintelligence.jpeg",
    icon: ScanSearch,
    link: "/solutions/piracy-intelligence",
  },
  {
    number: "07",
    title: "Marketplace & Counterfeit Monitoring",
    description: "Investigate listings that misuse your brand.",
    image: "/marketplacecounterfeitmonitoring.png",
    icon: Search,
    link: "/solutions/marketplace-counterfeit-monitoring",
  },
  {
    number: "08",
    title: "Domain & Impersonation Monitoring",
    description: "Protect the identity behind your digital presence.",
    image: "/impersonationmonitoring.png",
    icon: Globe,
    link: "/solutions/domain-impersonation-monitoring",
  },
  {
    number: "09",
    title: "Social Media & Video Protection",
    description: "Follow infringement across public social channels.",
    image: "/social.png",
    icon: Eye,
    link: "/solutions/social-media-video-protection",
  },
];

function PortalSlide({ solution, index, progress, reducedMotion }) {
  const Icon = solution.icon;
  const total = solutions.length;
  const step = 1 / total;
  const start = index * step;
  const end = (index + 1) * step;

  // Avoid duplicate scroll keyframes: the first slide is visible at progress 0.
  const fadeStart = Math.max(0, start - step * 0.12);
  const fadeInEnd = Math.min(1, start + step * 0.12);
  const fadeOutStart = start + step * 0.82;

  const opacity = useTransform(
    progress,
    [fadeStart, fadeInEnd, fadeOutStart, end],
    index === 0
      ? [1, 1, 1, 0]
      : index === total - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0]
  );

  const imageScale = useTransform(
    progress,
    [start, end],
    reducedMotion ? [1, 1] : [1, 1.7]
  );

  const imageY = useTransform(
    progress,
    [start, end],
    reducedMotion ? [0, 0] : [0, index % 2 === 0 ? -3 : 3]
  );

  return (
    <motion.article
      className="hs-portal-slide"
      style={{ opacity, zIndex: index + 1 }}
      aria-label={`${solution.number} ${solution.title}`}
    >
      <motion.img
        className="hs-portal-image"
        src={solution.image}
        alt={solution.title}
        loading="eager"
        draggable="false"
        style={{ scale: imageScale, y: imageY }}
      />

      <div className="hs-portal-shade" aria-hidden="true" />
      <div className="hs-portal-frame" aria-hidden="true" />

      <div className="hs-portal-content">
        <div className="hs-portal-meta">
          <span className="hs-portal-icon" aria-hidden="true">
            <Icon size={20} strokeWidth={1.7} />
          </span>
          <span className="hs-portal-number">{solution.number} / 09</span>
        </div>

        <div className="hs-portal-copy">
          <h3>{solution.title}</h3>
          <p className="hs-portal-description">{solution.description}</p>
          <Link to={solution.link} className="hs-portal-link">
            Explore solution <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function HomeSolutions() {
  const trackRef = useRef(null);
  const reducedMotion = useReducedMotion();

  // Progress is measured on the long sticky track only, not the whole section.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  return (
    <section id="home-solutions" className="solutions-section">
      <style>{`
        .solutions-section,
        .solutions-section * {
          box-sizing: border-box;
        }

        .solutions-section {
          position: relative;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: visible;
          background: transparent !important;
          background-color: transparent !important;
          color: #ffffff;
          border: 0;
          font-family: Roboto, Arial, sans-serif;
        }

        /* Intro is transparent so the website's existing background stays visible. */
        /* Explicitly remove any global header/panel background behind this heading. */
        #home-solutions .hs-intro,
        #home-solutions header.hs-intro {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          width: calc(100% - 64px);
          max-width: 1380px;
          margin: 0 auto;
          padding: 38px 0 24px;
          background: transparent !important;
          background-color: transparent !important;
          background-image: none !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
          border: 0 !important;
        }

        /* Prevent generic site-wide header decorations from creating a dark bar. */
        #home-solutions header.hs-intro::before,
        #home-solutions header.hs-intro::after {
          content: none !important;
          display: none !important;
          background: none !important;
          box-shadow: none !important;
        }

        .hs-eyebrow {
          margin: 0 0 12px;
          color: #d1ed14;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 1.6px;
          text-transform: uppercase;
        }

        .hs-heading {
          max-width: 720px;
          margin: 0;
          color: #f8fafc;
          font-size: clamp(30px, 3.4vw, 48px);
          font-weight: 650;
          line-height: 1.08;
          letter-spacing: -1.5px;
          text-wrap: balance;
        }

        .hs-heading span {
          display: block;
        }

        .hs-view-all {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          flex-shrink: 0;
          margin-bottom: 4px;
          padding: 0 0 6px;
          border-bottom: 1px solid rgba(209, 237, 20, 0.55);
          color: #d1ed14;
          font-size: 13px;
          line-height: 1.4;
          text-decoration: none;
          transition: color 180ms ease, border-color 180ms ease;
        }

        .hs-view-all:hover {
          color: #ffffff;
          border-color: #ffffff;
        }

        /* One viewport-sized image at a time; scrolling drives the transitions. */
        .hs-scroll-track {
          position: relative;
          width: 100%;
          height: 900vh;
          margin: 0;
          padding: 0;
          background: transparent !important;
        }

        .hs-sticky-stage {
          position: sticky;
          top: 0;
          width: 100%;
          height: 100vh;
          height: 100svh;
          min-height: 420px;
          overflow: hidden;
          isolation: isolate;
          background: transparent !important;
        }

        .hs-portal-stack {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          background: transparent !important;
        }

        .hs-portal-slide {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          margin: 0;
          padding: 0;
          background: transparent !important;
          will-change: opacity;
          isolation: isolate;
        }

        .hs-portal-image {
          position: absolute;
          inset: 0;
          display: block;
          width: 100%;
          height: 100%;
          max-width: none;
          object-fit: cover;
          object-position: center;
          border: 0;
          user-select: none;
          will-change: transform;
        }

        /* Only a light photo gradient is used for text contrast; no dark panel. */
        .hs-portal-shade {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, rgba(2, 8, 7, 0.62) 0%, rgba(2, 8, 7, 0.24) 48%, rgba(2, 8, 7, 0.02) 100%),
            linear-gradient(0deg, rgba(2, 8, 7, 0.46) 0%, rgba(2, 8, 7, 0.06) 48%, rgba(2, 8, 7, 0.05) 100%);
        }

        .hs-portal-frame {
          position: absolute;
          inset: 16px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          pointer-events: none;
        }

        .hs-portal-frame::before,
        .hs-portal-frame::after {
          position: absolute;
          width: 26px;
          height: 26px;
          border-color: #d1ed14;
          border-style: solid;
          content: "";
        }

        .hs-portal-frame::before {
          top: -1px;
          left: -1px;
          border-width: 2px 0 0 2px;
        }

        .hs-portal-frame::after {
          right: -1px;
          bottom: -1px;
          border-width: 0 2px 2px 0;
        }

        .hs-portal-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 24px;
          padding: clamp(28px, 5.5vw, 76px);
          pointer-events: none;
        }

        .hs-portal-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .hs-portal-icon {
          display: grid;
          place-items: center;
          flex: 0 0 auto;
          width: 42px;
          height: 42px;
          border: 1px solid rgba(209, 237, 20, 0.8);
          border-radius: 50%;
          color: #d1ed14;
          background: rgba(4, 12, 8, 0.18);
          backdrop-filter: blur(5px);
        }

        .hs-portal-number {
          color: #d1ed14;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 1.6px;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.4);
          font-variant-numeric: tabular-nums;
        }

        .hs-portal-copy {
          max-width: 760px;
          padding: 0 0 8px;
          pointer-events: auto;
        }

        .hs-portal-copy h3 {
          max-width: 760px;
          margin: 0;
          color: #ffffff;
          font-size: clamp(30px, 4.5vw, 60px);
          font-weight: 650;
          line-height: 1.06;
          letter-spacing: -1.6px;
          text-wrap: balance;
          overflow-wrap: anywhere;
          text-shadow: 0 2px 20px rgba(0, 0, 0, 0.24);
        }

        .hs-portal-description {
          max-width: 540px;
          margin: 14px 0 0;
          color: rgba(255, 255, 255, 0.94);
          font-size: clamp(14px, 1.35vw, 17px);
          font-weight: 400;
          line-height: 1.6;
          text-shadow: 0 1px 10px rgba(0, 0, 0, 0.32);
        }

        .hs-portal-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 20px;
          padding: 0 0 6px;
          border-bottom: 1px solid #d1ed14;
          color: #d1ed14;
          font-size: 13px;
          font-weight: 500;
          line-height: 1.5;
          text-decoration: none;
          transition: gap 180ms ease, color 180ms ease, border-color 180ms ease;
        }

        .hs-portal-link:hover {
          gap: 13px;
          color: #ffffff;
          border-color: #ffffff;
        }

        .hs-portal-link svg {
          flex: 0 0 auto;
        }

        @media (max-width: 760px) {
          .hs-intro {
            align-items: flex-start;
            flex-direction: column;
            gap: 15px;
            width: calc(100% - 32px);
            padding: 30px 0 20px;
          }

          .hs-eyebrow {
            margin-bottom: 10px;
            font-size: 11px;
            letter-spacing: 1.4px;
          }

          .hs-heading {
            max-width: 560px;
            font-size: clamp(28px, 7vw, 40px);
            line-height: 1.08;
            letter-spacing: -1px;
          }

          .hs-view-all {
            margin-bottom: 0;
            font-size: 12px;
          }

          .hs-scroll-track {
            height: 900vh;
          }

          .hs-sticky-stage {
            min-height: 420px;
          }

          .hs-portal-frame {
            inset: 9px;
          }

          .hs-portal-frame::before,
          .hs-portal-frame::after {
            width: 20px;
            height: 20px;
          }

          .hs-portal-content {
            padding: 26px 22px max(30px, env(safe-area-inset-bottom));
          }

          .hs-portal-icon {
            width: 36px;
            height: 36px;
          }

          .hs-portal-icon svg {
            width: 18px;
            height: 18px;
          }

          .hs-portal-number {
            font-size: 11px;
            letter-spacing: 1.2px;
          }

          .hs-portal-copy {
            max-width: 100%;
            padding-bottom: 4px;
          }

          .hs-portal-copy h3 {
            max-width: 100%;
            font-size: clamp(28px, 7.6vw, 42px);
            line-height: 1.1;
            letter-spacing: -0.8px;
          }

          .hs-portal-description {
            max-width: 100%;
            margin-top: 10px;
            font-size: 14px;
            line-height: 1.55;
          }

          .hs-portal-link {
            margin-top: 16px;
            font-size: 12px;
          }
        }

        @media (max-width: 390px) {
          .hs-intro {
            width: calc(100% - 26px);
            padding-top: 25px;
            padding-bottom: 17px;
          }

          .hs-heading {
            font-size: 28px;
          }

          .hs-portal-content {
            padding: 22px 17px max(25px, env(safe-area-inset-bottom));
          }

          .hs-portal-copy h3 {
            font-size: clamp(26px, 7.7vw, 32px);
            letter-spacing: -0.55px;
          }

          .hs-portal-description {
            font-size: 13px;
          }

          .hs-portal-frame {
            inset: 7px;
          }
        }

        @media (max-height: 500px) and (orientation: landscape) {
          .hs-portal-content {
            padding: 18px 28px;
          }

          .hs-portal-icon {
            width: 32px;
            height: 32px;
          }

          .hs-portal-copy h3 {
            font-size: clamp(24px, 5vh, 34px);
          }

          .hs-portal-description {
            margin-top: 6px;
            font-size: 12px;
          }

          .hs-portal-link {
            margin-top: 8px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hs-portal-link,
          .hs-view-all {
            transition: none;
          }
        }
      `}</style>

      <header
        className="hs-intro"
        style={{
          background: "transparent",
          backgroundColor: "transparent",
          backgroundImage: "none",
          boxShadow: "none",
          border: "0",
        }}
      >
        <div>
          <p className="hs-eyebrow">Our solutions</p>
          <h2 className="hs-heading">
            Protection with a <span>clear path to action.</span>
          </h2>
        </div>
        <Link to="/solutions" className="hs-view-all">
          View all solutions <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </header>

      <div className="hs-scroll-track" ref={trackRef}>
        <div className="hs-sticky-stage">
          <div className="hs-portal-stack">
            {solutions.map((solution, index) => (
              <PortalSlide
                key={solution.number}
                solution={solution}
                index={index}
                progress={scrollYProgress}
                reducedMotion={Boolean(reducedMotion)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
