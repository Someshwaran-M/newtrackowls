
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
    link: "/services",
  },
  {
    number: "02",
    title: "OTT & VOD Protection",
    description: "Protect every release window.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85",
    icon: Play,
    link: "/industries",
  },
  {
    number: "03",
    title: "Website & App Monitoring",
    description: "See where your content travels.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
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
    image: null,
    icon: ShieldCheck,
    link: "/services",
  },
  {
    number: "06",
    title: "Piracy Intelligence",
    description: "Understand the patterns behind piracy.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85",
    icon: ScanSearch,
    link: "/platform",
  },
  {
    number: "07",
    title: "Marketplace & Counterfeit Monitoring",
    description: "Investigate listings that misuse your brand.",
    image: null,
    icon: Search,
    link: "/industries",
  },
  {
    number: "08",
    title: "Domain & Impersonation Monitoring",
    description: "Protect the identity behind your digital presence.",
    image: null,
    icon: Globe,
    link: "/services",
  },
  {
    number: "09",
    title: "Social Media & Video Protection",
    description: "Follow infringement across public social channels.",
    image: null,
    icon: Eye,
    link: "/platform",
  },
];

function SolutionCard({ solution, index }) {
  const Icon = solution.icon;

  return (
    <motion.article
      key={solution.number}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.35, delay: (index % 3) * 0.04 }}
      className={`solution-card ${
        solution.image ? "solution-card--image" : "solution-card--plain"
      }`}
    >
      {solution.image && (
        <div className="solution-card__image">
          <img
            src={solution.image}
            alt={solution.title}
            loading="lazy"
          />
        </div>
      )}

      <span className="solution-card__corner" aria-hidden="true" />

      <div className="solution-card__body">
        <div className="solution-card__meta">
          <Icon
            size={18}
            strokeWidth={1.65}
            className="solution-card__icon"
            aria-hidden="true"
          />

          <span className="solution-card__number">
            {solution.number}
          </span>
        </div>

        <h3 className="solution-card__title">
          {solution.title}
        </h3>

        <p className="solution-card__description">
          {solution.description}
        </p>

        <div className="solution-card__footer">
          <Link
            to={solution.link}
            className="solution-card__link"
          >
            Explore solution
            <ArrowUpRight size={13} strokeWidth={1.7} />
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
          background: #edf5fc;
          color: #172e49;
          border-top: 1px solid #dbe7f1;
          border-bottom: 1px solid #dbe7f1;
          font-family: Roboto, Arial, sans-serif;
        }

        .solutions-container {
          width: calc(100% - 64px);
          max-width: 1038px;
          margin: 0 auto;
          padding: 81px 0 78px;
        }

        /* Heading */
        .solutions-header {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 36px;
        }

        .solutions-eyebrow {
          margin: 0 0 19px;
          color: #5a8117;
          font-size: 10px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .solutions-heading {
          margin: 0;
          color: #172e49;
          font-size: 40px;
          font-weight: 700;
          line-height: 1.19;
          letter-spacing: -1.25px;
        }

        .solutions-heading span {
          display: block;
        }

        .solutions-view-all {
          display: inline-flex;
          flex-shrink: 0;
          align-items: center;
          gap: 3px;
          margin-bottom: 4px;
          padding-bottom: 6px;
          border-bottom: 1px solid #cbdcb3;
          color: #5d8615;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.3;
          text-decoration: none;
        }

        .solutions-view-all:hover {
          border-color: #638b15;
          color: #405f0b;
        }

        /* Exact three-column arrangement */
        .solutions-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          grid-auto-rows: 322px;
          gap: 14px 15px;
          align-items: stretch;
        }

        .solution-card {
          position: relative;
          display: flex;
          min-width: 0;
          height: 100%;
          flex-direction: column;
          overflow: hidden;
          border: 1px solid #dce7f1;
          border-radius: 6px;
          background: #ffffff;
          transition: border-color 180ms ease;
        }

        .solution-card:hover {
          border-color: #bdd3b0;
        }

        /* Image dimensions */
        .solution-card__image {
          flex: 0 0 139px;
          height: 139px;
          overflow: hidden;
          background: #dce6ec;
        }

        .solution-card__image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 45%;
          transition: transform 350ms ease;
        }

        .solution-card:hover .solution-card__image img {
          transform: scale(1.025);
        }

        /* Content */
        .solution-card__body {
          position: relative;
          display: flex;
          flex: 1;
          min-height: 0;
          flex-direction: column;
          padding: 22px 23px 23px;
        }

        .solution-card__meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 18px;
          margin-bottom: 23px;
        }

        .solution-card__icon {
          flex-shrink: 0;
          color: #638b15;
        }

        .solution-card__number {
          color: #6a849d;
          font-size: 10px;
          font-weight: 400;
          line-height: 1;
        }

        .solution-card__title {
          margin: 0;
          color: #172e49;
          font-size: 16px;
          font-weight: 600;
          line-height: 1.4;
          letter-spacing: -0.2px;
        }

        .solution-card__description {
          margin: 10px 0 0;
          color: #506985;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.7;
        }

        .solution-card__footer {
          margin-top: auto;
          padding-top: 17px;
        }

        .solution-card__link {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          width: fit-content;
          max-width: 100%;
          padding-bottom: 6px;
          border-bottom: 1px solid #d5e3c6;
          color: #5d8615;
          font-size: 11px;
          font-weight: 400;
          line-height: 1.3;
          text-decoration: none;
          transition: color 180ms ease, border-color 180ms ease;
        }

        .solution-card__link:hover {
          color: #405f0b;
          border-color: #638b15;
        }

        .solution-card__link svg,
        .solutions-view-all svg {
          flex-shrink: 0;
          transition: transform 180ms ease;
        }

        .solution-card__link:hover svg,
        .solutions-view-all:hover svg {
          transform: translate(2px, -2px);
        }

        /* Small corner detail */
        .solution-card__corner {
          position: absolute;
          z-index: 2;
          top: 11px;
          right: 11px;
          width: 12px;
          height: 12px;
          border-top: 1px solid #b6e1ee;
          border-right: 1px solid #b6e1ee;
          pointer-events: none;
        }

        .solution-card--plain .solution-card__corner {
          top: 11px;
          right: 11px;
        }

        .solution-card--plain .solution-card__body {
          padding-top: 22px;
        }

        .solution-card--plain .solution-card__meta {
          margin-bottom: 23px;
        }

        .solutions-mobile-link {
          display: none;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .solutions-container {
            width: calc(100% - 48px);
            padding-top: 60px;
            padding-bottom: 56px;
          }

          .solutions-heading {
            font-size: 36px;
          }

          .solutions-grid {
            grid-auto-rows: 300px;
            gap: 12px;
          }

          .solution-card__image {
            flex-basis: 125px;
            height: 125px;
          }

          .solution-card__body {
            padding: 19px 16px 19px;
          }

          .solution-card__title {
            font-size: 15px;
          }
        }

        /* Mobile */
        @media (max-width: 620px) {
          .solutions-container {
            width: calc(100% - 36px);
            padding-top: 43px;
            padding-bottom: 42px;
          }

          .solutions-header {
            align-items: flex-start;
            margin-bottom: 27px;
          }

          .solutions-eyebrow {
            margin-bottom: 16px;
            font-size: 9px;
          }

          .solutions-heading {
            font-size: clamp(31px, 7.5vw, 39px);
            line-height: 1.18;
            letter-spacing: -1px;
          }

          .solutions-view-all {
            display: none;
          }

          .solutions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            grid-auto-rows: 290px;
            gap: 12px;
          }

          .solution-card__image {
            flex-basis: 105px;
            height: 105px;
          }

          .solution-card__body {
            padding: 15px 12px 15px;
          }

          .solution-card__meta {
            margin-bottom: 15px;
          }

          .solution-card__title {
            font-size: 14px;
            line-height: 1.4;
          }

          .solution-card__description {
            margin-top: 8px;
            font-size: 11px;
          }

          .solution-card__link {
            font-size: 10px;
          }
        }

        @media (max-width: 420px) {
          .solutions-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 285px;
          }

          .solution-card__image {
            flex-basis: 130px;
            height: 130px;
          }

          .solution-card__body {
            padding: 17px 17px 18px;
          }

          .solution-card__title {
            font-size: 15px;
          }

          .solution-card__description {
            font-size: 12px;
          }

          .solution-card__link {
            font-size: 11px;
          }

          .solutions-mobile-link {
            display: flex;
            margin-top: 22px;
          }

          .solutions-mobile-link .solutions-view-all {
            display: inline-flex;
          }
        }
      `}</style>

      <div className="solutions-container">
        <motion.header
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
          className="solutions-header"
        >
          <div>
            <p className="solutions-eyebrow">Our solutions</p>

            <h2 className="solutions-heading">
              Protection with a
              <span>clear path to action.</span>
            </h2>
          </div>

          <Link to="/solutions" className="solutions-view-all">
            View all solutions
            <ArrowUpRight size={13} />
          </Link>
        </motion.header>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={solution.number}
              solution={solution}
              index={index}
            />
          ))}
        </div>

        <div className="solutions-mobile-link">
          <Link to="/solutions" className="solutions-view-all">
            View all solutions
            <ArrowUpRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  );
}
