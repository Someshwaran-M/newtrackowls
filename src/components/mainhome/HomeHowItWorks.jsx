
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const workflowStages = [
  {
    number: "01",
    title: "Monitor",
    description:
      "Define the assets, territories and digital channels in scope.",
  },
  {
    number: "02",
    title: "Detect",
    description:
      "Discover suspected unauthorized content, streams and URLs.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Analysts check rights, validate the finding and capture evidence.",
  },
  {
    number: "04",
    title: "Enforce",
    description:
      "Submit authorized complaints and escalate through available channels.",
  },
  {
    number: "05",
    title: "Report",
    description:
      "Verify outcomes and report pending actions, removals and repeat cases.",
  },
];

export default function HomeHowItWorks() {
  return (
    <section id="home-how-it-works" className="workflow-section">
      <style>{`
        .workflow-section,
        .workflow-section * {
          box-sizing: border-box;
        }

        .workflow-section {
          width: 100%;
          overflow: hidden;
          background: #f3f8fd;
          border-top: 1px solid #d9e6f0;
          border-bottom: 1px solid #d9e6f0;
          color: #172d47;
          font-family: Roboto, Arial, sans-serif;
        }

        .workflow-container {
          width: calc(100% - 80px);
          max-width: 1566px;
          margin: 0 auto;
          padding: 120px 0 118px;
        }

        /* Header layout */
        .workflow-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 485px;
          align-items: end;
          column-gap: 50px;
          margin-bottom: 54px;
        }

        .workflow-eyebrow {
          margin: 0 0 30px;
          color: #5b811b;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 2.1px;
          text-transform: uppercase;
        }

        .workflow-heading {
          margin: 0;
          color: #172d47;
          font-size: 64px;
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -2.2px;
        }

        .workflow-heading span {
          display: block;
        }

        .workflow-intro {
          max-width: 485px;
          margin: 0 0 1px;
          color: #58708a;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.65;
        }

        /* Five aligned columns */
        .workflow-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          column-gap: 30px;
          align-items: start;
        }

        .workflow-stage {
          min-width: 0;
          border-top: 1px solid #53badb;
          padding-top: 40px;
        }

        .workflow-number {
          display: block;
          margin: 0 0 32px;
          color: #648b17;
          font-size: 15px;
          font-weight: 400;
          line-height: 1.3;
        }

        .workflow-title {
          margin: 0 0 19px;
          color: #172d47;
          font-size: 28px;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.8px;
        }

        .workflow-description {
          margin: 0;
          color: #58708a;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.65;
        }

        /* Simple text link */
        .workflow-cta-wrap {
          margin-top: 76px;
        }

        .workflow-cta {
          display: inline-block;
          width: fit-content;
          padding-bottom: 10px;
          border-bottom: 1px solid #c6d8b0;
          color: #628b13;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.4;
          text-decoration: none;
          transition: color 180ms ease, border-color 180ms ease;
        }

        .workflow-cta:hover {
          color: #405f0b;
          border-color: #628b13;
        }

        /* Tablet */
        @media (max-width: 1200px) {
          .workflow-container {
            width: calc(100% - 64px);
            padding-top: 86px;
            padding-bottom: 82px;
          }

          .workflow-header {
            grid-template-columns: minmax(0, 1fr) 360px;
            column-gap: 32px;
            margin-bottom: 45px;
          }

          .workflow-heading {
            font-size: 50px;
            letter-spacing: -1.6px;
          }

          .workflow-eyebrow {
            font-size: 11px;
            margin-bottom: 23px;
          }

          .workflow-intro {
            font-size: 16px;
          }

          .workflow-grid {
            column-gap: 22px;
          }

          .workflow-stage {
            padding-top: 30px;
          }

          .workflow-number {
            margin-bottom: 25px;
            font-size: 13px;
          }

          .workflow-title {
            margin-bottom: 15px;
            font-size: 23px;
          }

          .workflow-description {
            font-size: 14px;
          }

          .workflow-cta-wrap {
            margin-top: 58px;
          }
        }

        /* Small tablet */
        @media (max-width: 760px) {
          .workflow-container {
            width: calc(100% - 48px);
            padding-top: 64px;
            padding-bottom: 62px;
          }

          .workflow-header {
            grid-template-columns: 1fr;
            row-gap: 24px;
            margin-bottom: 38px;
          }

          .workflow-eyebrow {
            margin-bottom: 20px;
          }

          .workflow-heading {
            font-size: clamp(38px, 7vw, 48px);
            line-height: 1.12;
            letter-spacing: -1.5px;
          }

          .workflow-intro {
            max-width: 480px;
            font-size: 16px;
            line-height: 1.7;
          }

          .workflow-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 26px;
            row-gap: 30px;
          }

          .workflow-stage {
            padding-top: 23px;
          }

          .workflow-number {
            margin-bottom: 19px;
          }

          .workflow-title {
            margin-bottom: 12px;
            font-size: 23px;
          }

          .workflow-description {
            font-size: 14px;
            line-height: 1.75;
          }

          .workflow-cta-wrap {
            margin-top: 42px;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .workflow-container {
            width: calc(100% - 40px);
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .workflow-header {
            row-gap: 19px;
            margin-bottom: 32px;
          }

          .workflow-eyebrow {
            margin-bottom: 17px;
            font-size: 10px;
            letter-spacing: 1.7px;
          }

          .workflow-heading {
            font-size: 37px;
            line-height: 1.15;
            letter-spacing: -1.3px;
          }

          .workflow-intro {
            font-size: 15px;
          }

          .workflow-grid {
            grid-template-columns: 1fr;
            row-gap: 25px;
          }

          .workflow-stage {
            padding-top: 21px;
          }

          .workflow-number {
            margin-bottom: 15px;
            font-size: 13px;
          }

          .workflow-title {
            margin-bottom: 10px;
            font-size: 23px;
          }

          .workflow-description {
            max-width: 360px;
            font-size: 14px;
          }

          .workflow-cta-wrap {
            margin-top: 36px;
          }

          .workflow-cta {
            font-size: 15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .workflow-section *,
          .workflow-section *::before,
          .workflow-section *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }
      `}</style>

      <div className="workflow-container">
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="workflow-header"
        >
          <div>
            <p className="workflow-eyebrow">
              How TrackOwls Works
            </p>

            <h2 className="workflow-heading">
              <span>From detection</span>
              <span>to enforcement.</span>
            </h2>
          </div>

          <p className="workflow-intro">
            Five connected stages. One traceable record of what
            was found, verified and actioned.
          </p>
        </motion.header>

        <div className="workflow-grid">
          {workflowStages.map((stage, index) => (
            <motion.article
              key={stage.number}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}
              className="workflow-stage"
            >
              <span className="workflow-number">
                {stage.number}
              </span>

              <h3 className="workflow-title">
                {stage.title}
              </h3>

              <p className="workflow-description">
                {stage.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="workflow-cta-wrap">
          <Link to="/how-it-works" className="workflow-cta">
            Understand the workflow
          </Link>
        </div>
      </div>
    </section>
  );
}
