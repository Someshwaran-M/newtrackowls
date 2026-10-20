
import React from "react";
import { motion } from "framer-motion";
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
    link: "/industries",
  },
  {
    number: "03",
    title: "Website & App Monitoring",
    description: "See where your content travels.",
    image: "/solutions/websitemonitoring.jpeg",
    icon: Globe,
    link: "/platform",
  },
  {
    number: "04",
    title: "Copyright Enforcement",
    description: "Turn evidence into action.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=900&q=85",
    icon: FileCheck2,
    link: "/services",
  },
  {
    number: "05",
    title: "Brand Protection",
    description: "Defend the identity you built.",
    image: "/brand.png",
    icon: ShieldCheck,
    link: "/services",
  },
  {
    number: "06",
    title: "Piracy Intelligence",
    description: "Understand the patterns behind piracy.",
    image: "/solutions/piracyintelligence.jpeg",
    icon: ScanSearch,
    link: "/platform",
  },
  {
    number: "07",
    title: "Marketplace & Counterfeit Monitoring",
    description: "Investigate listings that misuse your brand.",
    image: "/marketplacecounterfeitmonitoring.png",
    icon: Search,
    link: "/industries",
  },
  {
    number: "08",
    title: "Domain & Impersonation Monitoring",
    description: "Protect the identity behind your digital presence.",
    image: "/impersonationmonitoring.png",
    icon: Globe,
    link: "/services",
  },
  {
    number: "09",
    title: "Social Media & Video Protection",
    description: "Follow infringement across public social channels.",
    image: "/social.png",
    icon: Eye,
    link: "/platform",
  },
];

function SolutionCard({ solution, index }) {
  const Icon = solution.icon;

  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.3, delay: (index % 3) * 0.04 }}
      className={`solution-card ${
        solution.image ? "has-image" : "no-image"
      }`}
    >
      {solution.image && (
        <div className="solution-image">
          <img
            src={solution.image}
            alt={solution.title}
            loading="lazy"
          />
        </div>
      )}

      <span className="solution-corner" aria-hidden="true" />

      <div className="solution-content">
        <div className="solution-meta">
          <Icon
            size={17}
            strokeWidth={1.6}
            className="solution-icon"
            aria-hidden="true"
          />

          <span className="solution-number">
            {solution.number}
          </span>
        </div>

        <h3 className="solution-title">{solution.title}</h3>

        <p className="solution-description">
          {solution.description}
        </p>

        <div className="solution-footer">
          <Link to={solution.link} className="solution-link">
            Explore solution
            <ArrowUpRight size={11} strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

export default function HomeSolutions() {
  return (
    <section id="home-solutions" className="solutions-section">
      <style>{`
        .solutions-section,
        .solutions-section * {
          box-sizing: border-box;
        }

        .solutions-section {
          width: 100%;
          overflow: hidden;
          background: #EAF3F9 ;
          color: #172E49;
        
          font-family: Roboto, Arial, sans-serif;
        }

        .solutions-container {
          width: calc(100% - 64px);
          max-width: 1350px;
          margin: 0 auto;
          padding: 58px 0 48px;
        }

        .solutions-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 26px;
        }

        .solutions-eyebrow {
          margin: 0 0 17px;
          color: #5A8117;
          font-size: 12px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .solutions-heading {
          margin: 0;
          color: #172E49;
          font-size: 38px;
          font-weight: 700;
          line-height: 1.19;
          letter-spacing: -1.25px;
        }

        .solutions-heading span {
          display: block;
        }

        .solutions-view-all {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          flex-shrink: 0;
          margin-bottom: 4px;
          padding-bottom: 5px;
          border-bottom: 1px solid #CBDCB3;
          color: #5D8615;
          font-size: 12px;
          text-decoration: none;
        }

        .solutions-view-all:hover {
          border-color: #638B15;
          color: #405F0B;
        }

        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-auto-rows: 380px;
          gap: 24px;
          align-items: stretch;
        }

        .solution-card {
          position: relative;
          display: flex;
          flex-direction: column;
          min-width: 0;
          height: 380px;
          overflow: hidden;
          border: 1px solid #D5E3F0;
          border-radius: 5px;
          background: #FFFFFF;
          transition: border-color 180ms ease;
        }

        .solution-card:hover {
          border-color: #BDD3B0;
        }

        .solution-image {
          flex: 0 0 206px;
          width: calc(100% - 45px);
          height: 586px;
          margin: 0;
          overflow: hidden;
          background: #E5EDF3;
          border-radius: 0 0 3px 0;
        }

        .solution-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 45%;
          transition: transform 350ms ease;
        }

        .solution-card:hover .solution-image img {
          transform: scale(1.025);
        }

        .solution-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          min-height: 0;
          padding: 15px 17px 13px;
        }

        .solution-meta {
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: space-between;
          min-height: 17px;
          margin-bottom: 16px;
        }

        .solution-icon {
          flex-shrink: 0;
          color: #638B15;
        }

        .solution-number {
          color: #68839D;
          font-size: 12px;
          line-height: 1;
        }

        .solution-title {
          margin: 0;
          color: #172E49;
          font-size: 22px;
          font-weight: 600;
          line-height: 1.3;
          letter-spacing: -0.3px;
          overflow-wrap: anywhere;
        }

        .solution-description {
          margin: 7px 0 0;
          color: #506985;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.65;
        }

        .solution-footer {
          margin-top: auto;
          padding-top: 10px;
        }

        .solution-link {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          width: fit-content;
          max-width: 100%;
          padding-bottom: 4px;
          border-bottom: 1px solid #D5E3C6;
          color: #5D8615;
          font-size: 12px;
          line-height: 1.4;
          text-decoration: none;
          transition: color 180ms ease, border-color 180ms ease;
        }

        .solution-link:hover {
          color: #405F0B;
          border-color: #638B15;
        }

        .solution-link svg {
          flex-shrink: 0;
          transition: transform 180ms ease;
        }

        .solution-link:hover svg {
          transform: translate(2px, -2px);
        }

        .solution-corner {
          position: absolute;
          z-index: 2;
          top: 9px;
          right: 9px;
          width: 12px;
          height: 12px;
          border-top: 1px solid #B6E1EE;
          border-right: 1px solid #B6E1EE;
          pointer-events: none;
        }

        .no-image .solution-content {
          padding-top: 15px;
        }

        .mobile-view-all {
          display: none;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .solutions-container {
            width: calc(100% - 48px);
            padding-top: 48px;
            padding-bottom: 42px;
          }

          .solutions-heading {
            font-size: 36px;
          }

          .solutions-grid {
            grid-auto-rows: 245px;
            gap: 12px;
          }

          .solution-image {
            flex-basis: 100px;
            height: 100px;
            width: calc(100% - 28px);
          }

          .solution-content {
            padding: 14px 13px 12px;
          }

          .solution-meta {
            margin-bottom: 13px;
          }

          .solution-title {
            font-size: 20px;
          }

          .solution-description {
            font-size: 14px;
          }

          .solution-link {
            font-size: 12px;
          }
        }

        /* Mobile */
        @media (max-width: 620px) {
          .solutions-container {
            width: calc(100% - 42px);
            padding-top: 36px;
            padding-bottom: 32px;
          }

          .solutions-header {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 12px;
            margin-bottom: 22px;
          }

          .solutions-eyebrow {
            margin-bottom: 12px;
            font-size: 11px;
            letter-spacing: 1.4px;
          }

          .solutions-heading {
            font-size: 30px;
            line-height: 1.18;
            letter-spacing: -0.8px;
          }

          .solutions-header > .solutions-view-all {
            display: none;
          }

          .solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: auto;
            gap: 14px;
            align-items: stretch;
          }

          .solution-card {
            height: auto;
            min-height: 0;
            align-self: stretch;
          }

          .solution-image {
            flex: 0 0 auto;
            width: calc(100% - 16px);
            height: auto;
            aspect-ratio: 1.5 / 1;
            margin: 0;
          }

          .solution-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center;
          }

          .solution-content {
            flex: 1;
            min-height: 0;
            padding: 11px 10px 12px;
          }

          .solution-meta {
            min-height: 17px;
            margin-bottom: 10px;
          }

          .solution-icon {
            width: 15px;
            height: 15px;
          }

          .solution-number {
            font-size: 11px;
          }

          .solution-title {
            font-size: 18px;
            line-height: 1.35;
            letter-spacing: 0;
            overflow-wrap: anywhere;
            hyphens: auto;
          }

          .solution-description {
            margin-top: 6px;
            font-size: 13px;
            line-height: 1.55;
            overflow-wrap: anywhere;
          }

          .solution-footer {
            margin-top: auto;
            padding-top: 12px;
          }

          .solution-link {
            gap: 3px;
            font-size: 11px;
            line-height: 1.45;
          }

          .solution-link svg {
            width: 11px;
            height: 11px;
          }

          .mobile-view-all {
            display: flex;
            justify-content: center;
            margin-top: 22px;
          }

          .mobile-view-all .solutions-view-all {
            font-size: 12px;
          }
        }

        /* Narrow phones */
        @media (max-width: 420px) {
          .solutions-container {
            width: calc(100% - 28px);
            padding-top: 32px;
            padding-bottom: 30px;
          }

          .solutions-heading {
            font-size: 28px;
            letter-spacing: -0.7px;
          }

          .solutions-grid {
            grid-template-columns: minmax(0, 1fr);
            grid-auto-rows: auto;
            gap: 16px;
          }

          .solution-card {
            width: 100%;
            height: auto;
            min-height: 0;
          }

          .solution-image {
            flex: 0 0 auto;
            width: calc(100% - 32px);
            aspect-ratio: 1.9 / 1;
            height: auto;
          }

          .solution-content {
            padding: 13px 14px 14px;
          }

          .solution-meta {
            margin-bottom: 11px;
          }

          .solution-title {
            font-size: 18px;
            line-height: 1.4;
          }

          .solution-description {
            font-size: 13px;
            line-height: 1.65;
          }

          .solution-link {
            font-size: 12px;
          }
        }

        /* Very small phones */
        @media (max-width: 350px) {
          .solutions-container {
            width: calc(100% - 24px);
          }

          .solutions-grid {
            gap: 13px;
          }

          .solution-content {
            padding: 11px 10px 12px;
          }

          .solution-title {
            font-size: 16px;
          }

          .solution-description {
            font-size: 12px;
          }

          .solution-link {
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .solution-card,
          .solution-image img,
          .solution-link {
            transition: none;
          }
        }
      `}</style>

      <div className="solutions-container">
        

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.number}
              solution={solution}
              index={index}
            />
          ))}
        </div>

        
      </div>
    </section>
  );
}
