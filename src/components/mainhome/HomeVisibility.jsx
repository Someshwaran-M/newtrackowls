
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const coverageChannels = [
  "Websites",
  "Search engines",
  "Social platforms",
  "Video platforms",
  "Streaming websites",
  "Mobile applications",
  "App stores",
  "Marketplaces",
  "Domains",
];

const reportItems = [
  {
    label: "VERIFIED URLS",
    description: "Separate from raw discoveries",
  },
  {
    label: "ENFORCEMENT ACTIONS",
    description: "Submission and escalation history",
  },
  {
    label: "CONFIRMED OUTCOMES",
    description: "Removed, pending or still available",
  },
];

export default function HomeVisibility() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const reportRotateX = useTransform(scrollYProgress, [0, 0.45, 1], [9, 0, -5]);
  const reportRotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-7, 0, 6]);
  const reportZ = useTransform(scrollYProgress, [0, 0.5, 1], [-45, 0, 25]);
  const reportScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.94, 1, 0.96]);
  const coverageRotateX = useTransform(scrollYProgress, [0, 0.55, 1], [7, 0, -4]);
  const coverageY = useTransform(scrollYProgress, [0, 0.55, 1], [55, 0, -25]);

  const downloadSampleReport = () => {
    const report = [
      "TRACKOWLS — SAMPLE ENFORCEMENT REPORT",
      "=====================================",
      "",
      "Report type: Illustrative sample",
      "",
      ...reportItems.flatMap((item) => [
        item.label,
        item.description,
        "",
      ]),
      "This is an illustrative sample and contains no live detection data.",
    ].join("\n");

    const blob = new Blob([report], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "TrackOwls-Sample-Enforcement-Report.txt";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  };

  return (
    <section
      ref={sectionRef}
      id="home-visibility"
      className="visibility-section"
    >
      <style>{`
        .visibility-section,
        .visibility-section * {
          box-sizing: border-box;
        }

        .visibility-section {
          width: 100%;
          overflow: hidden;
          background: transparent;
          border-top: 1px solid rgba(171, 198, 215, 0.15);
          border-bottom: 1px solid rgba(171, 198, 215, 0.15);
          color: #ffffff;
          font-family: Roboto, Arial, sans-serif;
        }

        .visibility-container {
          width: calc(100% - 64px);
          max-width: 1370px;
          margin: 0 auto;
          padding: 82px 0 85px;
        }

        /* Top heading */
        .visibility-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 340px;
          align-items: end;
          gap: 48px;
          margin-bottom: 39px;
        }

        .visibility-eyebrow {
          margin: 0 0 21px;
          color: #d1ed14;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .visibility-heading {
          margin: 0;
          color: #f8fafc;
          font-size: 44px;
          font-weight: 700;
          line-height: 1.13;
          letter-spacing: -1.5px;
        }

        .visibility-heading span {
          display: block;
        }

        .visibility-intro {
          margin: 0 0 3px;
          max-width: 340px;
          color: #b7cbd9;
          font-size: 14px;
          line-height: 1.7;
        }

        /* Report panel */
        .visibility-report {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 48px;
          min-height: 309px;
          padding: 40px 34px;
          border: 1px solid rgba(171, 198, 215, 0.22);
          border-radius: 10px;
          background: rgba(10, 26, 46, 0.65);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .visibility-report-intro {
          min-width: 0;
        }

        .visibility-report,
        .visibility-coverage {
          transform-style: preserve-3d;
          will-change: transform;
        }

        .visibility-report-item {
          transform-style: preserve-3d;
        }

        .visibility-channel {
          transition: transform 280ms ease, border-color 280ms ease,
                      background 280ms ease, box-shadow 280ms ease;
          transform-style: preserve-3d;
        }

        @media (hover: hover) and (pointer: fine) {
          .visibility-channel:hover {
            transform: translateY(-5px) rotateX(8deg) scale(1.035);
            border-color: #d1ed14;
            background: rgba(209, 237, 20, 0.08);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.16);
          }
        }

        .visibility-sample-label {
          display: inline-flex;
          align-items: center;
          min-height: 24px;
          padding: 4px 9px;
          border: 1px solid rgba(171, 198, 215, 0.25);
          border-radius: 4px;
          color: #d1ed14;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.4;
        }

        .visibility-report-title {
          margin: 15px 0 12px;
          color: #f8fafc;
          font-size: 21px;
          font-weight: 700;
          line-height: 1.35;
          letter-spacing: -0.45px;
        }

        .visibility-report-description {
          margin: 0;
          color: #b7cbd9;
          font-size: 13px;
          line-height: 1.75;
        }

        .visibility-download {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 43px;
          margin-top: 22px;
          padding: 0 20px;
          border: 1px solid rgba(171, 198, 215, 0.25);
          border-radius: 6px;
          background: rgba(10, 26, 46, 0.6);
          color: white;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          backdrop-filter: blur(10px);
          transition: border-color 180ms ease,
                      background 180ms ease,
                      color 180ms ease;
        }

        .visibility-download:hover {
          border-color: #d1ed14;
          background: rgba(209, 237, 20, 0.15);
          color: #d1ed14;
        }

        .visibility-download:focus-visible {
          outline: 2px solid #d1ed14;
          outline-offset: 3px;
        }

        /* Report details */
        .visibility-report-details {
          min-width: 0;
          width: 100%;
        }

        .visibility-report-item {
          padding: 18px 0;
          border-bottom: 1px solid rgba(171, 198, 215, 0.15);
        }

        .visibility-report-item:first-child {
          padding-top: 0;
        }

        .visibility-report-item:last-child {
          padding-bottom: 18px;
        }

        .visibility-item-label {
          margin: 0;
          color: #d1ed14;
          font-size: 10px;
          font-weight: 600;
          line-height: 1.5;
          letter-spacing: 0.2px;
        }

        .visibility-item-description {
          margin: 9px 0 0;
          color: #e2e8f0;
          font-size: 13px;
          line-height: 1.6;
        }

        /* Link under report panel */
        .visibility-scenarios {
          margin-top: 29px;
        }

        .visibility-scenarios a {
          display: inline-block;
          padding-bottom: 6px;
          border-bottom: 1px solid rgba(209, 237, 20, 0.4);
          color: #d1ed14;
          font-size: 12px;
          line-height: 1.5;
          text-decoration: none;
          transition: color 180ms ease,
                      border-color 180ms ease;
        }

        .visibility-scenarios a:hover {
          color: #405f0b;
          border-color: #648a13;
        }

        /* Digital coverage section */
        .visibility-coverage {
          max-width: 900px;
          margin: 113px auto 0;
          text-align: center;
        }

        .visibility-coverage-eyebrow {
          margin: 0 0 19px;
          color: #5b811b;
          font-size: 11px;
          font-weight: 700;
          line-height: 1.4;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .visibility-coverage-heading {
          margin: 0 auto;
          color: #172d47;
          font-size: 44px;
          font-weight: 700;
          line-height: 1.16;
          letter-spacing: -1.4px;
        }

        .visibility-coverage-heading span {
          display: block;
        }

        .visibility-channel-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin: 29px auto 0;
          
        }

        .visibility-channel {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 42px;
          padding: 0 19px;
          border: 1px solid #b6f0a6;
          border-radius: 4px;
          background: transparent;
          color: #f8faf7;
          font-size: 12px;
          font-weight: 400;
          line-height: 1.4;
          white-space: nowrap;
        }

        .visibility-coverage-note {
          max-width: 650px;
          margin: 28px auto 0;
          color: #58708a;
          font-size: 12px;
          line-height: 1.65;
        }

        /* Tablet */
        @media (max-width: 900px) {
          .visibility-container {
            width: calc(100% - 48px);
            padding-top: 65px;
            padding-bottom: 65px;
          }

          .visibility-header {
            grid-template-columns: minmax(0, 1fr) 280px;
            gap: 28px;
          }

          .visibility-heading {
            font-size: 37px;
            letter-spacing: -1px;
          }

          .visibility-report {
            gap: 30px;
            padding: 30px 25px;
          }

          .visibility-report-title {
            font-size: 19px;
          }

          .visibility-coverage {
            margin-top: 85px;
          }

          .visibility-coverage-heading {
            font-size: 38px;
          }

          .visibility-channel-list {
            gap: 9px;
          }

          .visibility-channel {
            min-height: 38px;
            padding: 0 13px;
            font-size: 11px;
          }
        }

        /* Mobile */
        @media (max-width: 620px) {
          .visibility-container {
            width: calc(100% - 40px);
            padding-top: 48px;
            padding-bottom: 50px;
          }

          .visibility-header {
            grid-template-columns: 1fr;
            gap: 18px;
            margin-bottom: 28px;
          }

          .visibility-eyebrow {
            margin-bottom: 16px;
            font-size: 10px;
          }

          .visibility-heading {
            font-size: clamp(33px, 8vw, 40px);
            line-height: 1.14;
            letter-spacing: -1.1px;
          }

          .visibility-intro {
            max-width: 420px;
            font-size: 14px;
          }

          .visibility-report {
            grid-template-columns: 1fr;
            gap: 35px;
            padding: 24px 20px;
          }

          .visibility-report-title {
            font-size: 20px;
          }

          .visibility-report-description {
            font-size: 13px;
          }

          .visibility-report-item {
            padding: 16px 0;
          }

          .visibility-scenarios {
            margin-top: 23px;
          }

          .visibility-coverage {
            margin-top: 76px;
          }

          .visibility-coverage-eyebrow {
            margin-bottom: 16px;
            font-size: 10px;
          }

          .visibility-coverage-heading {
            font-size: clamp(31px, 7.5vw, 39px);
            line-height: 1.17;
            letter-spacing: -1px;
          }

          .visibility-coverage-heading span {
            display: inline;
          }

          .visibility-channel-list {
            gap: 8px;
            margin-top: 23px;
          }

          .visibility-channel {
            min-height: 36px;
            padding: 0 12px;
            font-size: 11px;
          }

          .visibility-coverage-note {
            margin-top: 23px;
            font-size: 11px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .visibility-section *,
          .visibility-section *::before,
          .visibility-section *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>

      <div className="visibility-container">
        {/* Heading and description */}
        <motion.header
          className="visibility-header"
          initial={{ opacity: 0, y: 45, rotateX: 8 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 1000, transformStyle: "preserve-3d" }}
        >
          <div>
            <p className="visibility-eyebrow">
              Visibility that matters
            </p>

            <h2 className="visibility-heading">
              <span>Understand the work.</span>
              <span>Track the outcome.</span>
            </h2>
          </div>

          <p className="visibility-intro">
            A useful report distinguishes detections from verified
            infringements, complaints and confirmed removals.
          </p>
        </motion.header>

        {/* Sample report */}
        <motion.div
          className="visibility-report"
          style={{
            rotateX: reportRotateX,
            rotateY: reportRotateY,
            z: reportZ,
            scale: reportScale,
            transformPerspective: 1300,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, y: 65, rotateX: 12 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.18 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="visibility-report-intro"
            initial={{ opacity: 0, x: -35, z: -30 }}
            whileInView={{ opacity: 1, x: 0, z: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.12 }}
          >
            <span className="visibility-sample-label">
              Illustrative sample
            </span>

            <h3 className="visibility-report-title">
              See a sample enforcement report.
            </h3>

            <p className="visibility-report-description">
              Case references, platforms, actions and outcomes in a clear
              reporting format.
            </p>

            <button
              type="button"
              onClick={downloadSampleReport}
              className="visibility-download"
            >
              Download sample report
            </button>
          </motion.div>

          <motion.div
            className="visibility-report-details"
            initial={{ opacity: 0, x: 35, z: -30 }}
            whileInView={{ opacity: 1, x: 0, z: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.22 }}
          >
            {reportItems.map((item) => (
              <motion.div
                key={item.label}
                className="visibility-report-item"
                initial={{ opacity: 0, x: 24, rotateY: -10 }}
                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.55, delay: 0.12 }}
              >
                <p className="visibility-item-label">
                  {item.label}
                </p>

                <p className="visibility-item-description">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scenarios link */}
        <motion.div
          className="visibility-scenarios"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.65 }}
        >
          <a href="#digital-coverage">
            Explore illustrative protection scenarios
          </a>
        </motion.div>

        {/* Digital coverage */}
        <motion.div
          id="digital-coverage"
          className="visibility-coverage"
          style={{
            rotateX: coverageRotateX,
            y: coverageY,
            transformPerspective: 1200,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, y: 65, rotateX: 10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.12 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="visibility-coverage-eyebrow">
            Digital coverage
          </p>

          <h2 className="visibility-coverage-heading">
            <span>Across the channels</span>
            <span>that matter to your rights.</span>
          </h2>

          <div className="visibility-channel-list">
            {coverageChannels.map((channel) => (
              <motion.span
                key={channel}
                className="visibility-channel"
                initial={{ opacity: 0, y: 22, rotateX: -18, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: (coverageChannels.indexOf(channel) % 5) * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -5, rotateX: 8, scale: 1.04 }}
              >
                {channel}
              </motion.span>
            ))}
          </div>

          <p className="visibility-coverage-note">
            Coverage and available enforcement routes are agreed during
            scoping. Platform access and removal decisions depend on
            authorization and the receiving service.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
