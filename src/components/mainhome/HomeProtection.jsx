
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

/* =========================================
   WORKFLOW DATA
========================================= */

const stages = [
  {
    number: "01",
    name: "Monitor",
    eyebrow: "SAMPLE CASE 01",
    title: "Video distribution",
    asset: "Film & premium video",
    channel: "Streaming website",
    description:
      "Compare a suspected copy with the authorized title and capture its source.",
    bottomTitle: "Monitor digital channels",
    bottomDescription:
      "Start with an authorized asset list and agreed channels. Discovery looks for title variations, suspected copies, unauthorized streams and brand misuse.",
    record: "Asset reference · Monitoring scope · Search variations",
    action: "Explore the full workflow",
  },
  {
    number: "02",
    name: "Detect",
    eyebrow: "SAMPLE CASE 02",
    title: "Potential match detected",
    asset: "Protected video title",
    channel: "Public digital source",
    description:
      "Review a potential match and record the source URL and available supporting details.",
    bottomTitle: "Identify potential matches",
    bottomDescription:
      "Compare discovered pages with authorized reference assets. Capture source URLs and relevant details for further review.",
    record: "Source URL · Match details · Discovery time",
    action: "Explore detection",
  },
  {
    number: "03",
    name: "Verify",
    eyebrow: "SAMPLE CASE 03",
    title: "Evidence verification",
    asset: "Reference asset",
    channel: "Suspected distribution page",
    description:
      "Review available evidence and distinguish potential matches from verified cases.",
    bottomTitle: "Verify the evidence",
    bottomDescription:
      "Analysts review suspected material against reference assets and available context before determining the appropriate next step.",
    record: "Reference comparison · Evidence review · Case status",
    action: "Explore verification",
  },
  {
    number: "04",
    name: "Enforce",
    eyebrow: "SAMPLE CASE 04",
    title: "Response workflow",
    asset: "Verified protected content",
    channel: "Relevant hosting platform",
    description:
      "Prepare an appropriate response for review and authorized action by the rights holder.",
    bottomTitle: "Coordinate appropriate action",
    bottomDescription:
      "Organize verified case details and supporting evidence for an appropriate response, subject to authorization and applicable requirements.",
    record: "Evidence package · Authorization · Response status",
    action: "Explore enforcement",
  },
  {
    number: "05",
    name: "Report",
    eyebrow: "SAMPLE CASE 05",
    title: "Case outcome",
    asset: "Tracked protection case",
    channel: "Reporting and follow-up",
    description:
      "Record response progress, review available outcomes and keep the case history organized.",
    bottomTitle: "Track outcomes and report",
    bottomDescription:
      "Maintain an organized case record, document available responses and review outcomes to support ongoing digital protection.",
    record: "Case history · Outcome status · Follow-up",
    action: "Explore reporting",
  },
];

const pins = [
  [
    { left: "24%", top: "40%" },
    { left: "49%", top: "29%" },
    { left: "69%", top: "51%" },
    { left: "79%", top: "72%" },
  ],
  [
    { left: "18%", top: "54%" },
    { left: "38%", top: "32%" },
    { left: "65%", top: "27%" },
    { left: "82%", top: "48%" },
  ],
  [
    { left: "28%", top: "26%" },
    { left: "43%", top: "53%" },
    { left: "68%", top: "35%" },
    { left: "77%", top: "64%" },
  ],
  [
    { left: "20%", top: "42%" },
    { left: "45%", top: "28%" },
    { left: "61%", top: "58%" },
    { left: "83%", top: "36%" },
  ],
  [
    { left: "25%", top: "58%" },
    { left: "47%", top: "35%" },
    { left: "72%", top: "25%" },
    { left: "79%", top: "58%" },
  ],
];

const stageIcons = [
  "monitor",
  "detect",
  "verify",
  "enforce",
  "report",
];

/* =========================================
   ICON COMPONENT
========================================= */

function Icon({ name, className = "h-5 w-5" }) {
  const paths = {
    monitor: (
      <>
        <rect x="3" y="4" width="18" height="13" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="m9 10 2 2 4-4" />
      </>
    ),

    detect: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 4 4" />
      </>
    ),

    verify: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),

    enforce: (
      <>
        <path d="M12 2 20 6v6c0 5-3 8-8 10-5-2-8-5-8-10V6l8-4Z" />
        <path d="m8 12 3 3 5-6" />
      </>
    ),

    report: (
      <>
        <path d="M4 19V5M4 19h16" />
        <path d="m7 14 4-4 3 2 5-6" />
      </>
    ),

    play: <path d="m8 5 12 7-12 7z" />,

    reset: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
        <path d="M3 3v5h5" />
      </>
    ),

    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),

    cube: (
      <>
        <path d="m12 2 9 5v10l-9 5-9-5V7l9-5Z" />
        <path d="m3 7 9 5 9-5M12 22V12" />
      </>
    ),
  };

  return (
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
      {paths[name]}
    </svg>
  );
}

/* =========================================
   WORLD MAP 3D COMPONENT
========================================= */

function WorldMap({ activeStage, reduceMotion }) {
  const currentPins = pins[activeStage];

  return (
    <div className="hp-map-3d relative min-h-[300px] overflow-hidden sm:min-h-[390px] lg:min-h-[520px]">

      {/* Original world map image */}
      <motion.img
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=85"
        alt="Illustrative world map showing sample monitoring locations"
        initial={false}
        animate={
          reduceMotion
            ? {}
            : {
                scale: [1.02, 1.07, 1.02],
              }
        }
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute inset-0 h-full w-full
          object-cover opacity-65 grayscale
        "
      />

      {/* Original background overlay */}
      <div className="absolute inset-0 bg-[#092b3a]/65" />

      {/* Grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(115,177,190,.25) 1px,transparent 1px),linear-gradient(90deg,rgba(115,177,190,.25) 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Atmospheric lighting */}
      <motion.div
        aria-hidden="true"
        animate={
          reduceMotion
            ? {}
            : {
                opacity: [0.15, 0.35, 0.15],
              }
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute inset-0
          bg-[radial-gradient(ellipse_at_center,rgba(139,182,48,0.22),transparent_65%)]
        "
      />

      {/* Animated connection lines */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {currentPins.slice(0, -1).map((pin, index) => {
          const next = currentPins[index + 1];

          return (
            <motion.path
              key={`${activeStage}-${index}`}
              d={`
                M ${parseFloat(pin.left)} ${parseFloat(pin.top)}
                Q ${(parseFloat(pin.left) + parseFloat(next.left)) / 2}
                  ${Math.min(parseFloat(pin.top), parseFloat(next.top) - 15)}
                ${parseFloat(next.left)} ${parseFloat(next.top)}
              `}
              fill="none"
              stroke="#d1ed14"
              strokeWidth="0.3"
              strokeDasharray="1.2 1.2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: 1,
                opacity: [0.3, 0.9, 0.3],
              }}
              transition={{
                pathLength: {
                  duration: 1.5,
                },
                opacity: {
                  duration: 3,
                  repeat: Infinity,
                },
              }}
            />
          );
        })}
      </svg>

      {/* Floating monitoring points */}
      <AnimatePresence mode="wait">
        {currentPins.map((pin, index) => (
          <motion.div
            key={`${activeStage}-${index}`}
            initial={{
              opacity: 0,
              scale: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: reduceMotion ? 0 : [0, -7, 0],
            }}
            exit={{
              opacity: 0,
              scale: 0.5,
            }}
            transition={{
              delay: index * 0.12,
              duration: 0.6,
              repeat: reduceMotion ? 0 : Infinity,
              repeatDelay: 1.5,
            }}
            style={{
              left: pin.left,
              top: pin.top,
            }}
            className="
              absolute z-20
              -translate-x-1/2 -translate-y-1/2
            "
          >
            <span className="
              absolute -inset-3
              rounded-full border border-[#d1ed14]/50
              shadow-[0_0_20px_rgba(209,237,20,0.4)]
            " />

            <span className="
              relative flex h-8 w-8 items-center justify-center
              rounded-full border-2 border-white
              bg-[#e77d58]
              text-sm font-bold text-white
              shadow-[0_0_25px_rgba(231,125,88,0.65)]
              sm:h-10 sm:w-10
            ">
              {index + 1}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Bottom map information */}
      <div className="
        absolute inset-x-0 bottom-0 z-30
        flex min-h-[56px] items-center gap-3
        border-t border-white/10
        bg-[#102e43]/95 px-4 py-3
        text-[12px] text-[#dbeaf2]
        backdrop-blur-xl
        sm:px-5
      ">
        <Icon
          name="monitor"
          className="h-5 w-5 shrink-0 text-[#8BB630]"
        />
        <span>TrackOwls · Discovery to enforcement</span>
      </div>
    </div>
  );
}

/* =========================================
   3D CASE PANEL
========================================= */

function CasePanel({
  currentStage,
  activeStage,
  reduceMotion,
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeStage}
        initial={{
          opacity: 0,
          x: 25,
          rotateY: -8,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotateY: 0,
        }}
        exit={{
          opacity: 0,
          x: -20,
          rotateY: 8,
        }}
        transition={{
          duration: reduceMotion ? 0 : 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          hp-case-details relative flex min-w-0 flex-col
          overflow-hidden
          border-t border-[rgba(171,198,215,0.22)]
          bg-[rgba(10,26,46,0.7)]
          p-5
          backdrop-blur-2xl
          sm:p-7
          lg:border-l lg:border-t-0
          lg:p-7
        "
      >
        {/* Background lighting */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute -right-20 -top-20
            h-56 w-56 rounded-full
            bg-[#8BB630]/10 blur-[75px]
          "
        />

        <div className="relative z-10">

          <p className="hp-case-eyebrow">
            {currentStage.eyebrow}
          </p>

          <h3 className="hp-case-title">
            {currentStage.title}
          </h3>

          <div className="hp-metadata">

            <div className="hp-metadata-row">
              <span className="hp-metadata-label">
                Asset
              </span>

              <span className="hp-metadata-value">
                {currentStage.asset}
              </span>
            </div>

            <div className="hp-metadata-row">
              <span className="hp-metadata-label">
                Channel
              </span>

              <span className="hp-metadata-value">
                {currentStage.channel}
              </span>
            </div>

          </div>

          <p className="hp-case-description">
            {currentStage.description}
          </p>

          <div className="hp-stage-status">
            <div className="
              flex h-10 w-10 shrink-0 items-center justify-center
              rounded-full border border-[#8BB630]/40
              bg-[#8BB630]/10
              shadow-[0_0_20px_rgba(139,182,48,0.15)]
            ">
              <Icon
                name={stageIcons[activeStage]}
                className="h-5 w-5"
              />
            </div>

            <span>{currentStage.name}</span>
          </div>

          <p className="hp-disclaimer">
            Map positions are illustrative and do not identify actual
            infringers or their locations.
          </p>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}

/* =========================================
   MAIN COMPONENT
========================================= */

export default function HomeProtection() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const reduceMotion = useReducedMotion();

  const currentStage = stages[activeStage];

  /* Walkthrough timer */
  useEffect(() => {
    if (!isPlaying) return undefined;

    const timer = window.setInterval(() => {
      setElapsed((previous) => {
        const next = Math.min(previous + 1, 120);

        setActiveStage(
          Math.min(
            Math.floor((next / 120) * stages.length),
            stages.length - 1
          )
        );

        if (next >= 120) {
          setIsPlaying(false);
        }

        return next;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  /* Format timer */
  const formatTime = (seconds) =>
    `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
      seconds % 60
    ).padStart(2, "0")}`;

  /* Reset */
  const resetWalkthrough = () => {
    setIsPlaying(false);
    setElapsed(0);
    setActiveStage(0);
  };

  /* Start */
  const startWalkthrough = () => {
    if (elapsed >= 120) {
      setElapsed(0);
      setActiveStage(0);
    }

    setIsPlaying(true);
  };

  /* Select individual stage */
  const selectStage = (index) => {
    setIsPlaying(false);
    setActiveStage(index);
    setElapsed(Math.floor((index / stages.length) * 120));
  };

  return (
    <section
      id="home-protection"
      className="
        hp-section relative w-full overflow-hidden
        border-y border-[rgba(171,198,215,0.15)]
        bg-transparent
        font-['Roboto',Arial,sans-serif]
        text-white
      "
    >

      <style>{`

        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&display=swap');

        .hp-section,
        .hp-section * {
          box-sizing: border-box;
        }

        .hp-container {
          width: min(1500px, calc(100% - 98px));
          margin-inline: auto;
          padding-top: 75px;
          padding-bottom: 65px;
        }

        .hp-heading {
          margin: 0;
          color: #f8fafc;
          font-size: clamp(35px, 4vw, 52px);
          font-weight: 800;
          letter-spacing: -1.8px;
          line-height: 1.12;
        }

        .hp-eyebrow {
          margin: 0 0 22px;
          color: #d1ed14;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.8px;
          line-height: 1.3;
          text-transform: uppercase;
        }

        .hp-intro {
          max-width: 370px;
          margin: 0;
          color: #b7cbd9;
          font-size: 16px;
          line-height: 1.65;
        }

        .hp-controls {
          margin-top: 38px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          flex-wrap: wrap;
        }

        .hp-simulation {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 45px;
          padding: 0 14px;
          border: 1px solid rgba(171,198,215,.3);
          border-radius: 8px;
          background: rgba(10,26,46,.65);
          backdrop-filter: blur(14px);
          color: #dbeaf2;
          font-size: 13px;
        }

        .hp-button {
          display: inline-flex;
          min-height: 47px;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 0 18px;
          border: 1px solid rgba(171,198,215,.25);
          border-radius: 8px;
          background: rgba(10,26,46,.7);
          backdrop-filter: blur(12px);
          color: white;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: .3s ease;
        }

        .hp-button:hover {
          border-color: #d1ed14;
          transform: translateY(-2px);
        }

        .hp-button-primary {
          border-color: #d1ed14;
          background: #d1ed14;
          color: #02040d;
          font-weight: 700;
        }

        .hp-button-primary:hover {
          background: #e2fa2e;
          box-shadow: 0 0 25px rgba(209,237,20,.3);
        }

        .hp-button:disabled {
          cursor: not-allowed;
          opacity: .65;
          transform: none;
        }

        .hp-time {
          color: #d1ed14;
          font-size: 13px;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }

        .hp-progress {
          width: 100%;
          height: 3px;
          overflow: hidden;
          border-radius: 10px;
          background: rgba(171,198,215,.15);
          margin-bottom: 16px;
        }

        .hp-progress-fill {
          height: 100%;
          border-radius: inherit;
          background: #d1ed14;
          box-shadow: 0 0 12px #d1ed14;
          transition: width .5s linear;
        }

        .hp-case {
          display: grid;
          grid-template-columns: minmax(0, 1.75fr) minmax(290px, .95fr);
          overflow: hidden;
          min-height: 420px;
          border: 1px solid rgba(171,198,215,.24);
          border-radius: 17px;
          background: rgba(10,26,46,.55);
          backdrop-filter: blur(18px);
          box-shadow:
            0 25px 70px rgba(0,0,0,.28),
            inset 0 1px 0 rgba(255,255,255,.06);
          transform-style: preserve-3d;
          perspective: 1400px;
        }

        .hp-map-3d {
          isolation: isolate;
          transform-style: preserve-3d;
        }

        .hp-case-details {
          transform-style: preserve-3d;
        }

        .hp-case-eyebrow {
          margin: 0 0 18px;
          color: #d1ed14;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .hp-case-title {
          margin: 0;
          color: #f8fafc;
          font-size: clamp(21px, 2vw, 25px);
          font-weight: 800;
          letter-spacing: -.6px;
          line-height: 1.3;
        }

        .hp-metadata {
          margin-top: 22px;
          border-bottom: 1px solid rgba(171,198,215,.18);
        }

        .hp-metadata-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid rgba(171,198,215,.13);
          font-size: 13px;
          line-height: 1.5;
        }

        .hp-metadata-row:last-child {
          border-bottom: 0;
        }

        .hp-metadata-label {
          color: #94a3b8;
          flex-shrink: 0;
        }

        .hp-metadata-value {
          color: #e2e8f0;
          text-align: right;
          overflow-wrap: anywhere;
        }

        .hp-case-description {
          margin: 20px 0 0;
          color: #b7cbd9;
          font-size: 14px;
          line-height: 1.75;
        }

        .hp-stage-status {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 23px;
          color: #d1ed14;
          font-size: 14px;
          font-weight: 700;
        }

        .hp-disclaimer {
          margin: 20px 0 0;
          color: #8497a5;
          font-size: 11px;
          line-height: 1.65;
        }

        .hp-tabs {
          display: grid;
          grid-template-columns: repeat(5,minmax(0,1fr));
          gap: 10px;
          margin-top: 18px;
        }

        .hp-tab {
          position: relative;
          display: flex;
          min-width: 0;
          min-height: 76px;
          align-items: center;
          gap: 10px;
          padding: 10px 13px;
          border: 1px solid rgba(171,198,215,.2);
          border-radius: 11px;
          background: rgba(10,26,46,.65);
          color: #b7cbd9;
          text-align: left;
          backdrop-filter: blur(12px);
          cursor: pointer;
          transition: .35s ease;
        }

        .hp-tab:hover {
          transform: translateY(-4px);
          border-color: #d1ed14;
          color: white;
          box-shadow: 0 10px 25px rgba(0,0,0,.25);
        }

        .hp-tab.active {
          border-color: #d1ed14;
          background: rgba(209,237,20,.13);
          color: #d1ed14;
          box-shadow:
            0 0 20px rgba(209,237,20,.13),
            inset 0 0 18px rgba(209,237,20,.06);
        }

        .hp-tab-number {
          font-size: 12px;
          color: #94a3b8;
        }

        .hp-tab.active .hp-tab-number {
          color: #d1ed14;
        }

        .hp-tab-icon {
          display: flex;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(171,198,215,.08);
        }

        .hp-tab.active .hp-tab-icon {
          background: rgba(209,237,20,.15);
        }

        .hp-tab-name {
          font-size: 13px;
          font-weight: 600;
        }

        .hp-tab-arrow {
          margin-left: auto;
          flex-shrink: 0;
        }

        .hp-bottom {
          display: grid;
          grid-template-columns: 1.65fr 1fr;
          gap: 30px;
          margin-top: 18px;
        }

        .hp-bottom-panel {
          position: relative;
          min-width: 0;
          overflow: hidden;
          padding: 27px;
          border: 1px solid rgba(171,198,215,.22);
          border-radius: 15px;
          background: rgba(10,26,46,.58);
          backdrop-filter: blur(15px);
          transform-style: preserve-3d;
          transition: .35s ease;
        }

        .hp-bottom-panel:hover {
          border-color: rgba(209,237,20,.55);
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0,0,0,.25);
        }

        .hp-bottom-title {
          margin: 0;
          color: #f8fafc;
          font-size: 23px;
          font-weight: 800;
          letter-spacing: -.5px;
          line-height: 1.3;
        }

        .hp-bottom-description {
          max-width: 720px;
          margin: 13px 0 0;
          color: #b7cbd9;
          font-size: 14px;
          line-height: 1.8;
        }

        .hp-record-label {
          margin: 2px 0 16px;
          color: #d1ed14;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .hp-record-text {
          margin: 0;
          color: #b7cbd9;
          font-size: 14px;
          line-height: 1.7;
        }

        .hp-record-link {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          margin-top: 24px;
          padding-bottom: 7px;
          border-bottom: 1px solid rgba(209,237,20,.5);
          color: #d1ed14;
          font-size: 13px;
          text-decoration: none;
          transition: .3s ease;
        }

        .hp-record-link:hover {
          color: white;
          border-color: white;
          gap: 14px;
        }

        @media(max-width:1050px) {
          .hp-container {
            width: calc(100% - 48px);
          }

          .hp-case {
            grid-template-columns: minmax(0,1.3fr) minmax(260px,1fr);
          }

          .hp-tab {
            padding: 9px;
            gap: 6px;
          }

          .hp-tab-icon {
            width: 32px;
            height: 32px;
          }

          .hp-tab-arrow {
            display: none;
          }
        }

        @media(max-width:720px) {
          .hp-container {
            width: calc(100% - 32px);
            padding-top: 48px;
            padding-bottom: 42px;
          }

          .hp-eyebrow {
            margin-bottom: 17px;
            font-size: 10px;
            letter-spacing: 1.4px;
          }

          .hp-heading {
            font-size: clamp(33px,8vw,44px);
            letter-spacing: -1.2px;
          }

          .hp-intro {
            max-width: 100%;
            font-size: 15px;
          }

          .hp-controls {
            align-items: flex-start;
            flex-direction: column;
            margin-top: 25px;
            gap: 13px;
          }

          .hp-control-actions {
            display: flex;
            width: 100%;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
          }

          .hp-button {
            min-height: 44px;
            padding: 0 12px;
            font-size: 12px;
          }

          .hp-time {
            width: 100%;
          }

          .hp-case {
            grid-template-columns: 1fr;
          }

          .hp-map-3d {
            min-height: 300px;
          }

          .hp-case-details {
            border-left: 0;
            border-top: 1px solid rgba(171,198,215,.2);
            padding: 24px 20px;
          }

          .hp-tabs {
            grid-template-columns: repeat(2,minmax(0,1fr));
            gap: 9px;
          }

          .hp-tab:last-child {
            grid-column: 1 / -1;
          }

          .hp-tab {
            min-height: 65px;
            padding: 10px;
          }

          .hp-tab-arrow {
            display: flex;
          }

          .hp-bottom {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .hp-bottom-panel {
            padding: 22px;
          }

          .hp-bottom-title {
            font-size: 21px;
          }

          .hp-bottom-description,
          .hp-record-text {
            font-size: 14px;
          }
        }

        @media(max-width:390px) {
          .hp-container {
            width: calc(100% - 24px);
          }

          .hp-map-3d {
            min-height: 245px;
          }

          .hp-tab {
            min-height: 58px;
          }

          .hp-tab-name {
            font-size: 11px;
          }

          .hp-tab-icon {
            width: 28px;
            height: 28px;
          }
        }

        @media(prefers-reduced-motion:reduce) {
          .hp-section *,
          .hp-section *::before,
          .hp-section *::after {
            scroll-behavior: auto !important;
          }
        }

      `}</style>

      <div className="hp-container">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="
            grid grid-cols-1 gap-5
            lg:grid-cols-[1fr_370px]
            lg:items-end lg:gap-10
          "
        >
          <div>
            <p className="hp-eyebrow">
              Explore the protection workflow
            </p>

            <h2 className="hp-heading">
              Follow a finding.
              <span className="block">
                See the path to action.
              </span>
            </h2>
          </div>

          <p className="hp-intro">
            A two-minute guided demonstration. Select a highlight to explore a
            sample case, or move through the stages at your own pace.
          </p>
        </motion.div>

        {/* CONTROLS */}
        <div className="hp-controls">

          <span className="hp-simulation">
            <Icon name="cube" className="h-5 w-5 text-[#8BB630]" />
            Illustrative simulation · No live detections
          </span>

          <div className="hp-control-actions flex flex-wrap items-center gap-2">

            <button
              type="button"
              onClick={startWalkthrough}
              disabled={isPlaying}
              className="hp-button hp-button-primary"
            >
              <Icon name="play" className="h-3.5 w-3.5" />

              {isPlaying
                ? "Walkthrough running"
                : "Start 2-minute walkthrough"}
            </button>

            <button
              type="button"
              onClick={resetWalkthrough}
              className="hp-button"
            >
              <Icon name="reset" className="h-4 w-4" />
              Reset
            </button>

            <span className="hp-time">
              {formatTime(elapsed)} / 02:00
            </span>

          </div>
        </div>

        {/* PROGRESS */}
        <div
          className="hp-progress"
          role="progressbar"
          aria-label="Walkthrough progress"
          aria-valuemin={0}
          aria-valuemax={120}
          aria-valuenow={elapsed}
        >
          <div
            className="hp-progress-fill"
            style={{
              width: `${(elapsed / 120) * 100}%`,
            }}
          />
        </div>

        {/* MAIN 3D MAP + CASE PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 35, rotateX: 3 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="hp-case"
          style={{ perspective: "1400px" }}
        >

          <WorldMap
            activeStage={activeStage}
            reduceMotion={reduceMotion}
          />

          <CasePanel
            currentStage={currentStage}
            activeStage={activeStage}
            reduceMotion={reduceMotion}
          />

        </motion.div>

        {/* FIVE WORKFLOW STAGES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="hp-tabs"
        >

          {stages.map((stage, index) => {
            const active = activeStage === index;

            return (
              <motion.button
                key={stage.number}
                type="button"
                onClick={() => selectStage(index)}
                aria-pressed={active}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                    rotateX: 12,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                  },
                }}
                transition={{ duration: 0.6 }}
                whileHover={
                  reduceMotion
                    ? {}
                    : {
                        y: -5,
                        scale: 1.025,
                      }
                }
                whileTap={{ scale: 0.97 }}
                className={`hp-tab ${active ? "active" : ""}`}
              >

                <span className="hp-tab-number">
                  {stage.number}
                </span>

                <span className="hp-tab-icon">
                  <Icon
                    name={stageIcons[index]}
                    className="h-5 w-5"
                  />
                </span>

                <span className="hp-tab-name">
                  {stage.name}
                </span>

                <span className="hp-tab-arrow">
                  <Icon name="arrow" className="h-4 w-4" />
                </span>

              </motion.button>
            );
          })}

        </motion.div>

        {/* BOTTOM INFORMATION */}
        <AnimatePresence mode="wait">

          <motion.div
            key={activeStage}
            initial={{
              opacity: 0,
              y: 25,
              rotateX: 5,
            }}
            animate={{
              opacity: 1,
              y: 0,
              rotateX: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{ duration: 0.5 }}
            className="hp-bottom"
          >

            {/* Workflow information */}
            <motion.div
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      rotateY: 2,
                      rotateX: -2,
                    }
              }
              className="hp-bottom-panel"
            >
              <h3 className="hp-bottom-title">
                {currentStage.bottomTitle}
              </h3>

              <p className="hp-bottom-description">
                {currentStage.bottomDescription}
              </p>
            </motion.div>

            {/* Case record */}
            <motion.div
              whileHover={
                reduceMotion
                  ? {}
                  : {
                      rotateY: -2,
                      rotateX: 2,
                    }
              }
              className="hp-bottom-panel"
            >
              <p className="hp-record-label">
                Case record
              </p>

              <p className="hp-record-text">
                {currentStage.record}
              </p>

              <a
                href="/solutions"
                className="hp-record-link"
              >
                {currentStage.action}

                <Icon
                  name="arrow"
                  className="h-4 w-4"
                />
              </a>
            </motion.div>

          </motion.div>

        </AnimatePresence>

      </div>
    </section>
  );
}
