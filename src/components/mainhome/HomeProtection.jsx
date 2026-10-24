
import React, { useEffect, useState } from "react";

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

function Icon({ name, className = "h-4 w-4" }) {
  const paths = {
    monitor: (
      <>
        <path d="M4 7V5a2 2 0 0 1 2-2h2" />
        <path d="M16 3h2a2 2 0 0 1 2 2v2" />
        <path d="M20 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M8 21H6a2 2 0 0 1-2-2v-2" />
        <circle cx="12" cy="12" r="3" />
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
        <circle cx="12" cy="12" r="9" />
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

function WorldMap({ activeStage }) {
  return (
    <div className="hp-map group relative min-h-[300px] overflow-hidden sm:min-h-[350px] lg:min-h-0">
      <img
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=85"
        alt="Illustrative world map showing sample monitoring locations"
        className="absolute inset-0 h-full w-full object-cover opacity-65 grayscale"
      />

      <div className="absolute inset-0 bg-[#092b3a]/65" />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(rgba(115,177,190,.25) 1px,transparent 1px),linear-gradient(90deg,rgba(115,177,190,.25) 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {pins[activeStage].map((pin, index) => (
        <div
          key={`${activeStage}-${index}`}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: pin.left, top: pin.top }}
        >
          <span className="absolute -inset-2 rounded-full border border-[#ef8a67]/50" />
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#e77d58] text-sm font-bold text-white shadow-lg sm:h-9 sm:w-9">
            {index + 1}
          </span>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 flex min-h-[56px] items-center gap-2 border-t border-white/10 bg-[#102e43]/95 px-4 py-3 text-[12px] text-[#dbeaf2] sm:px-5">
        <Icon name="monitor" className="h-4 w-4 shrink-0 text-[#8BB630]" />
        <span>TrackOwls · Discovery to enforcement</span>
      </div>
    </div>
  );
}

export default function HomeProtection() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const currentStage = stages[activeStage];
  const stageIcons = ["monitor", "detect", "verify", "enforce", "report"];

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

        if (next >= 120) setIsPlaying(false);
        return next;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const formatTime = (seconds) =>
    `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(
      seconds % 60
    ).padStart(2, "0")}`;

  const resetWalkthrough = () => {
    setIsPlaying(false);
    setElapsed(0);
    setActiveStage(0);
  };

  const startWalkthrough = () => {
    if (elapsed >= 120) {
      setElapsed(0);
      setActiveStage(0);
    }
    setIsPlaying(true);
  };

  const selectStage = (index) => {
    setIsPlaying(false);
    setActiveStage(index);
    setElapsed(Math.floor((index / stages.length) * 120));
  };

  return (
    <section
      id="home-protection"
      className="hp-section w-full overflow-hidden bg-transparent border-y border-[rgba(171,198,215,0.15)] font-['Roboto',Arial,sans-serif] text-white"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800&display=swap');

        .hp-section, .hp-section * { box-sizing: border-box; }

        .hp-container {
          width: min(1370px, calc(100% - 64px));
          margin-inline: auto;
          padding-top: 91px;
          padding-bottom: 60px;
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

        .hp-heading {
          margin: 0;
          color: #f8fafc;
          font-size: 48px;
          font-weight: 700;
          letter-spacing: -1.6px;
          line-height: 1.14;
        }

        .hp-intro {
          max-width: 370px;
          margin: 0;
          color: #b7cbd9;
          font-size: 16px;
          line-height: 1.58;
        }

        .hp-controls {
          margin-top: 45px;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
        }

        .hp-simulation {
          display: inline-flex;
          align-items: center;
          min-height: 38px;
          padding: 0 12px;
          border: 1px solid rgba(171, 198, 215, 0.25);
          border-radius: 5px;
          background: rgba(10, 26, 46, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: #b7cbd9;
          font-size: 13px;
          white-space: nowrap;
        }

        .hp-button {
          display: inline-flex;
          min-height: 47px;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 0 20px;
          border: 1px solid rgba(171, 198, 215, 0.25);
          border-radius: 5px;
          background: rgba(10, 26, 46, 0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          color: white;
          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;
          transition: background .2s, border-color .2s;
        }

        .hp-button-primary {
          border-color: #d1ed14;
          background: #d1ed14;
          color: #02040d;
          font-weight: 700;
        }

        .hp-button-primary:hover {
          background: #e2fa2e;
        }

        .hp-button:disabled {
          cursor: not-allowed;
          opacity: .65;
        }

        .hp-time {
          color: #d1ed14;
          font-size: 13px;
          font-variant-numeric: tabular-nums;
          white-space: nowrap;
        }

        .hp-case {
          display: grid;
          grid-template-columns: 1.82fr 1fr;
          overflow: hidden;
          min-height: 409px;
          border: 1px solid rgba(171, 198, 215, 0.22);
          border-radius: 12px;
          background: rgba(10, 26, 46, 0.7);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }

        .hp-case-details {
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: 31px 30px;
        }

        .hp-case-eyebrow {
          margin: 0 0 20px;
          color: #d1ed14;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.8px;
        }

        .hp-case-title {
          margin: 0;
          color: #f8fafc;
          font-size: 23px;
          font-weight: 700;
          letter-spacing: -.5px;
          line-height: 1.3;
        }

        .hp-metadata {
          margin-top: 22px;
          border-bottom: 1px solid rgba(171, 198, 215, 0.18);
        }

        .hp-metadata-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
          padding: 12px 0;
          border-bottom: 1px solid rgba(171, 198, 215, 0.18);
          font-size: 13px;
          line-height: 1.4;
        }

        .hp-metadata-row:last-child { border-bottom: 0; }

        .hp-metadata-label { color: #94a3b8; }
        .hp-metadata-value { color: #e2e8f0; text-align: right; }

        .hp-case-description {
          margin: 20px 0 0;
          color: #b7cbd9;
          font-size: 14px;
          line-height: 1.7;
        }

        .hp-stage-status {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: auto;
          padding-top: 25px;
          color: #d1ed14;
          font-size: 13px;
          font-weight: 600;
        }

        .hp-disclaimer {
          margin: 21px 0 0;
          color: #8497A5;
          font-size: 11px;
          line-height: 1.65;
        }

        .hp-tabs {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 7px;
          margin-top: 20px;
        }

        .hp-tab {
          display: flex;
          min-height: 51px;
          align-items: center;
          gap: 10px;
          padding: 0 12px;
          border: 1px solid rgba(171, 198, 215, 0.2);
          border-radius: 5px;
          background: rgba(10, 26, 46, 0.6);
          color: #b7cbd9;
          text-align: left;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          transition: background .2s, color .2s, border-color .2s;
        }

        .hp-tab:hover {
          border-color: #d1ed14;
          background: rgba(14, 34, 60, 0.85);
          color: white;
        }

        .hp-tab.active {
          border-color: #d1ed14;
          background: rgba(209, 237, 20, 0.15);
          color: #d1ed14;
        }

        .hp-tab-number {
          color: #94a3b8;
          font-size: 12px;
        }

        .hp-tab.active .hp-tab-number { color: #d1ed14; }

        .hp-tab-name {
          font-size: 13px;
          font-weight: 500;
        }

        .hp-bottom {
          display: grid;
          grid-template-columns: 1.65fr 1fr;
          gap: 38px;
          margin-top: 15px;
          padding-top: 31px;
          border-top: 1px solid rgba(171, 198, 215, 0.2);
        }

        .hp-bottom-title {
          margin: 0;
          color: #f8fafc;
          font-size: 24px;
          font-weight: 700;
          letter-spacing: -.5px;
          line-height: 1.3;
        }

        .hp-bottom-description {
          max-width: 720px;
          margin: 14px 0 0;
          color: #b7cbd9;
          font-size: 15px;
          line-height: 1.8;
        }

        .hp-record {
          padding-left: 33px;
          border-left: 1px solid rgba(171, 198, 215, 0.2);
        }

        .hp-record-label {
          margin: 2px 0 18px;
          color: #d1ed14;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.8px;
          text-transform: uppercase;
        }

        .hp-record-text {
          margin: 0;
          color: #b7cbd9;
          font-size: 15px;
          line-height: 1.7;
        }

        .hp-record-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 27px;
          padding-bottom: 7px;
          border-bottom: 1px solid #c6d8a7;
          color: #638b15;
          font-size: 13px;
          text-decoration: none;
        }

        .hp-record-link:hover {
          border-color: #638b15;
          color: #45650b;
        }

        @media (max-width: 1000px) {
          .hp-container {
            width: calc(100% - 48px);
            padding-top: 65px;
          }

          .hp-heading { font-size: 42px; }

          .hp-case { grid-template-columns: 1.25fr 1fr; }

          .hp-case-details { padding: 24px 22px; }

          .hp-tabs { grid-template-columns: repeat(5, minmax(0, 1fr)); }

          .hp-tab { gap: 7px; padding: 0 8px; }

          .hp-tab-name { font-size: 12px; }

          .hp-bottom { gap: 25px; }
        }

        @media (max-width: 720px) {
          .hp-container {
            width: calc(100% - 36px);
            padding-top: 48px;
            padding-bottom: 42px;
          }

          .hp-header { gap: 22px; }

          .hp-eyebrow {
            margin-bottom: 17px;
            font-size: 10px;
            letter-spacing: 1.4px;
          }

          .hp-heading {
            font-size: clamp(34px, 8vw, 44px);
            letter-spacing: -1.1px;
          }

          .hp-intro {
            max-width: 100%;
            font-size: 15px;
          }

          .hp-controls {
            align-items: flex-start;
            flex-direction: column;
            margin-top: 28px;
            gap: 12px;
          }

          .hp-control-actions {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
          }

          .hp-button {
            min-height: 42px;
            padding: 0 12px;
            font-size: 12px;
          }

          .hp-case { grid-template-columns: 1fr; }

          .hp-map { min-height: 280px; }

          .hp-case-details { padding: 23px 20px; }

          .hp-tabs { grid-template-columns: repeat(2, minmax(0, 1fr)); }

          .hp-tab:last-child { grid-column: 1 / -1; }

          .hp-bottom {
            grid-template-columns: 1fr;
            gap: 26px;
            padding-top: 24px;
          }

          .hp-bottom-title { font-size: 22px; }

          .hp-bottom-description,
          .hp-record-text { font-size: 14px; }

          .hp-record {
            padding: 22px 0 0;
            border-top: 1px solid #d4e3ed;
            border-left: 0;
          }
        }

        @media (max-width: 390px) {
          .hp-time { width: 100%; }

          .hp-tab { min-height: 46px; }

          .hp-tab-name { font-size: 11px; }

          .hp-map { min-height: 240px; }
        }
      `}</style>

      <div className="hp-container">
        {/* Heading and introduction */}
        <div className="hp-header grid grid-cols-1 gap-5 lg:grid-cols-[1fr_370px] lg:items-end lg:gap-10">
          <div>
            <p className="hp-eyebrow">Explore the protection workflow</p>
            <h2 className="hp-heading">
              Follow a finding.
              <span className="block">See the path to action.</span>
            </h2>
          </div>

          <p className="hp-intro">
            A two-minute guided demonstration. Select a highlight to explore a
            sample case, or move through the stages at your own pace.
          </p>
        </div>

        {/* Controls */}
        <div className="hp-controls">
          <span className="hp-simulation">
            Illustrative simulation · No live detections
          </span>

          <div className="hp-control-actions flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={startWalkthrough}
              disabled={isPlaying}
              className="hp-button hp-button-primary"
            >
              <Icon name="play" className="h-3 w-3" />
              {isPlaying ? "Walkthrough running" : "Start 2-minute walkthrough"}
            </button>

            <button
              type="button"
              onClick={resetWalkthrough}
              className="hp-button"
            >
              Reset
            </button>

            <span className="hp-time" aria-live="off">
              {formatTime(elapsed)} / 02:00
            </span>
          </div>
        </div>

        {/* Main map and case panel */}
        <div className="hp-case">
          <WorldMap activeStage={activeStage} />

          <div className="hp-case-details">
            <p className="hp-case-eyebrow">{currentStage.eyebrow}</p>

            <h3 className="hp-case-title">{currentStage.title}</h3>

            <div className="hp-metadata">
              <div className="hp-metadata-row">
                <span className="hp-metadata-label">Asset</span>
                <span className="hp-metadata-value">{currentStage.asset}</span>
              </div>

              <div className="hp-metadata-row">
                <span className="hp-metadata-label">Channel</span>
                <span className="hp-metadata-value">
                  {currentStage.channel}
                </span>
              </div>
            </div>

            <p className="hp-case-description">{currentStage.description}</p>

            <div className="hp-stage-status">
              <Icon name={stageIcons[activeStage]} className="h-4 w-4" />
              <span>{currentStage.name}</span>
            </div>

            <p className="hp-disclaimer">
              Map positions are illustrative and do not identify actual
              infringers or their locations.
            </p>
          </div>
        </div>

        {/* Five workflow tabs */}
        <div className="hp-tabs">
          {stages.map((stage, index) => {
            const active = activeStage === index;

            return (
              <button
                key={stage.number}
                type="button"
                onClick={() => selectStage(index)}
                aria-pressed={active}
                className={`hp-tab ${active ? "active" : ""}`}
              >
                <span className="hp-tab-number">{stage.number}</span>
                <span className="hp-tab-name">{stage.name}</span>
              </button>
            );
          })}
        </div>

        {/* Bottom workflow information */}
        <div className="hp-bottom">
          <div>
            <h3 className="hp-bottom-title">{currentStage.bottomTitle}</h3>
            <p className="hp-bottom-description">
              {currentStage.bottomDescription}
            </p>
          </div>

          <div className="hp-record">
            <p className="hp-record-label">Case record</p>
            <p className="hp-record-text">{currentStage.record}</p>

            <a href="#solutions" className="hp-record-link">
              {currentStage.action}
              <Icon name="arrow" className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const stageIcons = ["monitor", "detect", "verify", "enforce", "report"];
