
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

/* LETTER-BY-LETTER ANIMATION */

function AnimatedText({ text, delay = 0 }) {
  return (
    <span className="workflow-animated-text" aria-label={text}>
      {text.split(" ").map((word, wordIndex) => (
        <span className="workflow-word" key={wordIndex}>
          {Array.from(word).map((letter, index) => (
            <motion.span
              key={`${wordIndex}-${index}`}
              className="workflow-letter"
              aria-hidden="true"
              initial={{
                opacity: 0,
                y: 16,
                rotateX: -60,
                filter: "blur(4px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                filter: "blur(0px)",
              }}
              viewport={{
                once: false,
                amount: 0.5,
              }}
              transition={{
                duration: 0.4,
                delay: delay + (wordIndex * 0.12) + (index * 0.025),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </span>
  );
}

export default function HomeHowItWorks() {
  return (
    <section
      id="home-how-it-works"
      className="workflow-section"
    >
      <style>{`

        /* =================================
           SECTION
        ================================= */

        #home-how-it-works {
          width: 100%;
          position: relative;
          overflow: hidden;
          background: transparent !important;
          color: #ffffff;
          font-family: Roboto, Arial, sans-serif;
          perspective: 1400px;
        }

        #home-how-it-works * {
          box-sizing: border-box;
        }

        .workflow-container {
          width: calc(100% - 80px);
          max-width: 1380px;
          margin: auto;
          padding: 120px 0 118px;
        }

        /* =================================
           HEADER
        ================================= */

        .workflow-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 485px;
          align-items: end;
          column-gap: 50px;
          margin-bottom: 90px;
        }

        .workflow-eyebrow {
          margin: 0 0 30px;
          color: #d1ed14;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 2.1px;
          text-transform: uppercase;
        }

        .workflow-heading {
          margin: 0;
          color: #f8fafc;
          font-size: 64px;
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -2.2px;
        }

        .workflow-heading > span {
          display: block;
        }

        .workflow-intro {
          max-width: 485px;
          margin: 0 0 1px;
          color: #b7cbd9;
          font-size: 20px;
          line-height: 1.65;
        }

        /* =================================
           DESKTOP TIMELINE
        ================================= */

        .workflow-timeline {
          position: relative;
          width: 100%;
          background: transparent !important;
        }

        .workflow-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          column-gap: 30px;
          width: 100%;
          background: transparent !important;
        }

        /* =================================
           STAGE
        ================================= */

        .galaxy-site #home-how-it-works article.workflow-stage,
        .galaxy-site #home-how-it-works article.workflow-stage:hover,
        #home-how-it-works article.workflow-stage,
        #home-how-it-works article.workflow-stage:hover {
          display: block;
          position: relative;
          min-width: 0;

          background: transparent !important;
          background-color: transparent !important;
          background-image: none !important;

          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;

          border: none !important;
          border-radius: 0 !important;
          box-shadow: none !important;
          outline: none !important;

          padding: 0 !important;
          margin: 0 !important;

          transform-style: preserve-3d;
          will-change: transform, opacity;
        }

        #home-how-it-works article.workflow-stage::before,
        #home-how-it-works article.workflow-stage::after {
          display: none !important;
          content: none !important;
        }

        /* =================================
           DOT
        ================================= */

        .workflow-dot {
          display: block;
          width: 16px;
          height: 16px;
          flex-shrink: 0;

          border-radius: 50%;
          background: #d1ed14;
          border: 3px solid #152019;

          box-shadow:
            0 0 0 5px rgba(209, 237, 20, 0.12),
            0 0 18px rgba(209, 237, 20, 0.55);

          margin-bottom: 22px;
        }

        /* =================================
           NUMBER
        ================================= */

        .workflow-number {
          display: block;
          margin: 0 0 24px;
          color: #d1ed14;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.3;
        }

        /* =================================
           TITLE
        ================================= */

        .workflow-title {
          margin: 0 0 17px;
          color: #f8fafc;
          font-size: 28px;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.8px;
          overflow-wrap: break-word;
        }

        /* =================================
           DESCRIPTION
        ================================= */

        .workflow-description {
          margin: 0;
          color: #b7cbd9;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.7;
          overflow-wrap: break-word;
        }

        /* =================================
           LETTER ANIMATION
        ================================= */

        .workflow-animated-text {
          display: inline;
        }

        .workflow-word {
          display: inline-block;
          white-space: nowrap;
          margin-right: 0.25em;
        }

        .workflow-letter {
          display: inline-block;
          white-space: pre;
          transform-origin: bottom center;
        }

        /* =================================
           CTA
        ================================= */

        .workflow-cta-wrap {
          margin-top: 76px;
        }

        .workflow-cta {
          display: inline-block;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(209, 237, 20, 0.4);
          color: #d1ed14 !important;
          font-size: 17px;
          text-decoration: none;
          transition: color 180ms ease, border-color 180ms ease;
        }

        .workflow-cta:hover {
          color: #ffffff !important;
          border-color: #d1ed14;
        }

        /* =================================
           TABLET
        ================================= */

        @media (max-width: 1100px) {

          .workflow-container {
            width: calc(100% - 64px);
            padding: 85px 0;
          }

          .workflow-header {
            grid-template-columns: minmax(0, 1fr) 350px;
            column-gap: 30px;
            margin-bottom: 70px;
          }

          .workflow-heading {
            font-size: 50px;
          }

          .workflow-intro {
            font-size: 16px;
          }

          .workflow-grid {
            column-gap: 22px;
          }

          .workflow-title {
            font-size: 23px;
          }

          .workflow-description {
            font-size: 14px;
          }
        }

        /* =================================
           MOBILE VERTICAL TIMELINE
        ================================= */

        @media (max-width: 760px) {

          .workflow-container {
            width: calc(100% - 40px);
            max-width: 600px;
            padding: 65px 0;
          }

          .workflow-header {
            display: grid;
            grid-template-columns: 1fr;
            row-gap: 22px;
            margin-bottom: 60px;
          }

          .workflow-eyebrow {
            margin-bottom: 18px;
            font-size: 12px;
          }

          .workflow-heading {
            font-size: clamp(36px, 7vw, 48px);
            line-height: 1.15;
            letter-spacing: -1.5px;
          }

          .workflow-intro {
            max-width: 100%;
            font-size: 16px;
            line-height: 1.7;
          }

          /* CENTRE VERTICAL LINE */

          .workflow-timeline {
            position: relative;
            padding: 0;
          }

          .workflow-timeline::before {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 2px;
            transform: translateX(-50%);
            background: rgba(209, 237, 20, 0.65);
            z-index: 0;
          }

          /* ALTERNATING TWO-COLUMN GRID */

          .workflow-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            column-gap: 30px;
            row-gap: 65px;
            align-items: start;
          }

          .workflow-stage,
          .workflow-stage:nth-child(odd),
          .workflow-stage:nth-child(even) {
            position: relative;
            width: 100%;
            min-width: 0;
            min-height: 0;
          }

          /* LEFT SIDE */

          .workflow-stage:nth-child(odd) {
            grid-column: 1;
            text-align: right;
            padding-right: 0 !important;
          }

          /* RIGHT SIDE */

          .workflow-stage:nth-child(even) {
            grid-column: 2;
            text-align: left;
            padding-left: 0 !important;
          }

          /* DOT POSITION */

          .workflow-dot {
            position: absolute;
            top: 0;
            width: 16px;
            height: 16px;
            margin: 0;
            z-index: 2;
          }

          .workflow-stage:nth-child(odd) .workflow-dot {
            right: -23px;
          }

          .workflow-stage:nth-child(even) .workflow-dot {
            left: -23px;
          }

          /* STAGE TEXT */

          .workflow-number {
            margin-bottom: 14px;
            font-size: 13px;
          }

          .workflow-title {
            margin-bottom: 11px;
            font-size: 22px;
            line-height: 1.3;
          }

          .workflow-description {
            font-size: 14px;
            line-height: 1.75;
            overflow-wrap: anywhere;
          }

          .workflow-cta-wrap {
            margin-top: 48px;
          }
        }

        /* =================================
           SMALL MOBILE
        ================================= */

        @media (max-width: 480px) {

          .workflow-container {
            width: calc(100% - 32px);
            padding: 48px 0;
          }

          .workflow-header {
            row-gap: 18px;
            margin-bottom: 48px;
          }

          .workflow-eyebrow {
            margin-bottom: 16px;
            font-size: 11px;
            letter-spacing: 1.7px;
          }

          .workflow-heading {
            font-size: clamp(32px, 8.5vw, 40px);
            line-height: 1.15;
            letter-spacing: -1.2px;
          }

          .workflow-intro {
            font-size: 15px;
            line-height: 1.7;
          }

          .workflow-grid {
            column-gap: 24px;
            row-gap: 52px;
          }

          .workflow-timeline::before {
            width: 2px;
          }

          .workflow-dot {
            width: 14px;
            height: 14px;
          }

          .workflow-stage:nth-child(odd) .workflow-dot {
            right: -19px;
          }

          .workflow-stage:nth-child(even) .workflow-dot {
            left: -19px;
          }

          .workflow-number {
            font-size: 12px;
            margin-bottom: 12px;
          }

          .workflow-title {
            font-size: 19px;
            margin-bottom: 9px;
          }

          .workflow-description {
            font-size: 12px;
            line-height: 1.7;
          }

          .workflow-cta-wrap {
            margin-top: 40px;
          }

          .workflow-cta {
            font-size: 15px;
          }
        }

        /* =================================
           VERY SMALL MOBILE
        ================================= */

        @media (max-width: 360px) {

          .workflow-container {
            width: calc(100% - 24px);
          }

          .workflow-grid {
            column-gap: 20px;
            row-gap: 45px;
          }

          .workflow-stage:nth-child(odd) .workflow-dot {
            right: -16px;
          }

          .workflow-stage:nth-child(even) .workflow-dot {
            left: -16px;
          }

          .workflow-title {
            font-size: 17px;
          }

          .workflow-description {
            font-size: 11px;
          }
        }

        /* =================================
           REDUCED MOTION
        ================================= */

        @media (prefers-reduced-motion: reduce) {

          #home-how-it-works *,
          #home-how-it-works *::before,
          #home-how-it-works *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }

      `}</style>

      <div className="workflow-container">

        {/* HEADER */}

        <motion.header
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="workflow-header"
        >
          <div>
            <p className="workflow-eyebrow">
              How TrackOwls Works
            </p>

            <h2 className="workflow-heading">
              <AnimatedText text="From detection" />
              <AnimatedText
                text="to enforcement."
                delay={0.15}
              />
            </h2>
          </div>

          <p className="workflow-intro">
            Five connected stages. One traceable record of what
            was found, verified and actioned.
          </p>
        </motion.header>

        {/* TIMELINE */}

        <div className="workflow-timeline">

          <div className="workflow-grid">

            {workflowStages.map((stage, index) => (
              <motion.article
                key={stage.number}
                className="workflow-stage"
                initial={{
                  opacity: 0,
                  rotateY: index % 2 === 0 ? 30 : -30,
                  rotateX: 12,
                  y: 30,
                  scale: 0.92,
                }}
                whileInView={{
                  opacity: 1,
                  rotateY: 0,
                  rotateX: 0,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="workflow-dot" />

                <span className="workflow-number">
                  {stage.number}
                </span>

                <h3 className="workflow-title">
                  <AnimatedText text={stage.title} />
                </h3>

                <p className="workflow-description">
                  <AnimatedText
                    text={stage.description}
                    delay={0.08}
                  />
                </p>
              </motion.article>
            ))}

          </div>
        </div>

        {/* CTA */}

        <div className="workflow-cta-wrap">
          <Link
            to="/how-it-works"
            className="workflow-cta"
          >
            Understand the workflow
          </Link>
        </div>

      </div>
    </section>
  );
}