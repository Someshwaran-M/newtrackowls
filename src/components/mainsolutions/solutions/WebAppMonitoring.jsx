
import React, { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Check,
  CircleDot,
  FileCheck2,
  FileText,
  Globe2,
  Pause,
  Play,
  Radio,
  ScanSearch,
  Search,
  ShieldCheck,
  Video,
} from "lucide-react";


import HomeCTA from "../../mainhome/HomeCTA";

const stages = [
  {
    label: "DISCOVER",
    status: "Monitoring scope",
    icon: Radio,
    activeCard: 0,
  },
  {
    label: "VERIFY",
    status: "Evidence review",
    icon: ScanSearch,
    activeCard: 2,
  },
  {
    label: "ACTION",
    status: "Authorized action",
    icon: FileCheck2,
    activeCard: 1,
  },
  {
    label: "FOLLOW UP",
    status: "Outcome review",
    icon: ShieldCheck,
    activeCard: 0,
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Monitor",
    description: "Continuously monitor relevant streaming sources.",
  },
  {
    number: "02",
    title: "Detect",
    description: "Identify potential unauthorized live streams.",
  },
  {
    number: "03",
    title: "Verify",
    description: "Review matches and organize supporting evidence.",
  },
  {
    number: "04",
    title: "Enforce",
    description: "Coordinate appropriate reporting and enforcement.",
  },
  {
    number: "05",
    title: "Report",
    description: "Track actions and summarize protection activity.",
  },
];

const enforcementSteps = [
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

const serviceCoverage = [
  "Website and URL discovery",
  "Public app and app-store review",
  "Domain and distribution research",
  "Source verification",
  "Evidence capture",
  "Repeat-infringer tracking",
];
const requirements = [
  "Event schedule and reference feed details",
  "Licensed territories and authorized distributors",
  "Enforcement authorization and priority channels",
];

const deliverables = [
  "Event case log with timestamps",
  "Complaint and escalation history",
  "Post-event outcome and repeat-stream review",
];

function SectionLabel({ children }) {
  return <span className="lsp-eyebrow">{children}</span>;
}

function ServiceCard() {
  return (
    <section className="lsp-service">
      <div className="lsp-service-intro">
        <div className="lsp-service-icon">
          <Radio size={30} strokeWidth={1.8} />
        </div>

        <h2>Act while the event still matters.</h2>

        <p>
          Agree the scope around your rights, assets, priority channels
          and operational needs.
        </p>

        <a className="lsp-button" href="#lsp-contact">
          Discuss your requirements
          <ArrowRight size={16} />
        </a>
      </div>

      <div className="lsp-coverage-card">
        <h3>What the service covers</h3>

        <ul className="lsp-check-list">
          {serviceCoverage.map((item) => (
            <li key={item}>
              <Check size={16} aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <p className="lsp-small-note">
          Enforcement actions require appropriate rights and authorization.
          Platforms make the final decision on complaints and removals.
        </p>
      </div>
    </section>
  );
}


function SignalBars({ active = false, playing = true }) {
  return (
    <div className="mt-2 flex h-3 items-end gap-[3px]">
      {Array.from({ length: 7 }, (_, index) => (
        <span
          key={index}
          className={`block w-[3px] rounded-[1px] ${
            active ? "bg-[#D5F51F]" : "bg-[#B6CBD5]"
          } ${playing ? "animate-pulse" : ""}`}
          style={{
            height: `${4 + (index % 4) * 2}px`,
            animationDelay: `${index * 90}ms`,
            animationDuration: "900ms",
          }}
        />
      ))}
    </div>
  );
}

function StatusCard({
  title,
  type,
  active,
  playing,
  className = "",
}) {
  const highlighted = active;

  return (
    <div
      className={`absolute z-20 w-[108px] rounded-md border p-2.5 transition-all duration-500 sm:w-[120px] sm:p-3 ${
        highlighted
          ? "border-[#D5F51F] bg-[#102D40] shadow-[0_0_18px_rgba(213,245,31,0.06)]"
          : "border-[#3A5A70] bg-[#112D43]"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-1.5 text-[8px] font-medium leading-relaxed sm:text-[9px] ${
          highlighted ? "text-[#D5F51F]" : "text-[#C1D2DC]"
        }`}
      >
        <Radio size={12} className="shrink-0" />
        <span>{title}</span>
      </div>

      <SignalBars active={highlighted} playing={playing} />
    </div>
  );
}

function BroadcastIllustration({
  activeStep,
  isPlaying: externalIsPlaying,
  onToggle,
}) {
  const [internalStep, setInternalStep] = useState(0);
  const [internalPlaying, setInternalPlaying] = useState(true);
  const [elapsed, setElapsed] = useState(0);

  const controlledStep = typeof activeStep === "number";
  const step = controlledStep
    ? ((activeStep % stages.length) + stages.length) % stages.length
    : internalStep;

  const isControlled = typeof externalIsPlaying === "boolean";
  const playing = isControlled ? externalIsPlaying : internalPlaying;
  const currentStage = stages[step];
  const CenterIcon = currentStage.icon;

  useEffect(() => {
    if (!playing || controlledStep) return;

    const timer = window.setInterval(() => {
      setElapsed((previous) => {
        const next = previous + 1;

        if (next >= 100) {
          setInternalStep((current) => (current + 1) % stages.length);
          return 0;
        }

        return next;
      });
    }, 70);

    return () => window.clearInterval(timer);
  }, [playing, controlledStep]);

  const togglePlayback = () => {
    if (onToggle) {
      onToggle();
    } else {
      setInternalPlaying((previous) => !previous);
    }
  };

  const progress = controlledStep
    ? ((step + 1) / stages.length) * 100
    : (step / stages.length) * 100 + elapsed / stages.length;

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-[#35566B] bg-[#0D2538] font-sans text-slate-100 shadow-xl">
      {/* Dashboard header */}
      <div className="flex min-h-[126px] items-center justify-between border-b border-[#35566B] bg-[#102C42] px-3 py-3 sm:px-4">
        <div className="flex items-center gap-2 text-[9px] font-semibold sm:text-[10px]">
          <Radio size={13} className="text-[#C1D2DC]" />
          <span>Live Streaming Protection</span>
        </div>

        <span className="text-[7px] font-black tracking-[1px] text-[#D5F51F] sm:text-[8px]">
          ILLUSTRATIVE
        </span>
      </div>

      {/* Animated monitoring canvas */}
      <div className="relative isolate h-[285px] overflow-hidden bg-[radial-gradient(ellipse_at_50%_45%,#1C3E4D_0%,#123346_48%,#0B2335_100%)] sm:h-[320px] md:h-[296px]">
        {/* Dotted world map */}
        <svg
          viewBox="0 0 600 300"
          preserveAspectRatio="xMidYMid meet"
          className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="broadcastWorldDots"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1" fill="#527D90" />
            </pattern>

            <radialGradient id="broadcastMapFade">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity=".25" />
            </radialGradient>

            <mask id="broadcastMapMask">
              <rect width="600" height="300" fill="url(#broadcastMapFade)" />
            </mask>
          </defs>

          <g
            fill="url(#broadcastWorldDots)"
            mask="url(#broadcastMapMask)"
          >
            {/* North America */}
            <path d="M-5 83 L24 63 51 53 73 37 104 42 121 56 148 53 157 73 137 90 114 91 102 111 79 119 66 145 48 133 35 112 17 110Z" />
            <path d="M105 123 L132 119 151 135 158 157 146 177 137 200 121 222 111 200 103 175 92 151Z" />

            {/* Europe */}
            <path d="M247 59 L264 45 283 48 295 60 283 75 265 76Z" />

            {/* Africa */}
            <path d="M261 91 L286 79 311 94 318 123 305 151 291 180 275 199 263 174 250 145 247 116Z" />

            {/* Asia */}
            <path d="M286 49 L316 35 343 41 366 34 393 46 419 43 444 55 470 63 493 79 479 94 454 96 439 108 412 101 390 115 365 108 343 118 322 102 305 109Z" />

            {/* South Asia */}
            <path d="M357 120 L383 111 405 128 411 153 397 178 386 205 370 215 358 193 346 166 342 143Z" />

            {/* Southeast Asia and islands */}
            <path d="M430 126 L451 120 472 136 480 153 463 167 444 157Z" />
            
          </g>

          {/* Dotted scanning routes */}
          <g
            fill="none"
            stroke="#A8D82D"
            strokeWidth="1.25"
            strokeDasharray="3 9"
            strokeLinecap="round"
          >
            <path
              d="M90 91 Q300 -4 493 88"
              className={playing ? "animate-pulse" : ""}
            />
            <path d="M90 91 Q113 180 275 150" />
            <path d="M493 88 Q430 185 275 150" />
           
          </g>

          {/* Scanning points */}
          <g fill="#D5F51F">
            <circle cx="90" cy="91" r="2.5" />
            <circle cx="493" cy="88" r="2.5" />
            <circle cx="275" cy="150" r="3" />
            <circle cx="430" cy="174" r="2" />
          </g>

          {/* Moving signal pulses */}
          {playing && (
            <g fill="#D5F51F">
              <circle r="3">
                <animateMotion
                  dur="4s"
                  repeatCount="indefinite"
                  path="M90 91 Q300 -4 493 88"
                />
              </circle>
              <circle r="2.5">
                <animateMotion
                  dur="4s"
                  begin="-2s"
                  repeatCount="indefinite"
                  path="M493 88 Q430 185 275 150"
                />
              </circle>
            </g>
          )}
        </svg>

        {/* Orbiting dashed ring */}
       

        {/* Outer scanner ring */}
        <div className="absolute left-1/2 top-[47%] h-[112px] w-[112px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#94B935]/40 sm:h-[132px] sm:w-[132px]" />

        {/* Pulsing scanner ring */}
        <div
          className={`absolute left-1/2 top-[47%] h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D5F51F]/90 sm:h-[90px] sm:w-[90px] ${
            playing ? "animate-pulse" : ""
          }`}
        />

        {/* Central animated status */}
        <div className="absolute left-1/2 top-[47%] z-10 flex h-[86px] w-[86px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full border border-[#D5F51F] bg-[#102E40] text-[#D5F51F] shadow-[0_0_24px_rgba(213,245,31,0.08)] transition-all duration-500">
          <CenterIcon
            size={29}
            strokeWidth={1.8}
            className={playing ? "animate-pulse" : ""}
          />

          <span className="max-w-[76px] text-center text-[7px] font-black tracking-[0.6px]">
            {currentStage.label}
          </span>
        </div>

        {/* Event feed */}
        <StatusCard
          title="Event feed"
          active={currentStage.activeCard === 0}
          playing={playing}
          className="left-[4%] top-[13%] sm:left-[6%]"
        />

        {/* Suspected stream */}
        <StatusCard
          title="Suspected stream"
          active={currentStage.activeCard === 1}
          playing={playing}
          className="right-[4%] top-[13%] sm:right-[6%]"
        />

        {/* Repeat broadcast */}
        <StatusCard
          title="Repeat broadcast"
          active={currentStage.activeCard === 2}
          playing={playing}
          className="bottom-[13%] left-1/2 -translate-x-1/2"
        />

        {/* Monitoring scope line */}
        <div className="absolute bottom-0 left-0 right-0 flex min-h-[43px] items-center gap-3 border-t border-[#35566B]/80 bg-[#0D2538]/60 px-3 sm:px-5">
          <div className="flex shrink-0 items-center gap-1.5 text-[8px] text-[#C3D2DB] sm:text-[9px]">
            {step === 0 ? (
              <Search size={13} />
            ) : step === 1 ? (
              <ScanSearch size={13} />
            ) : (
              <FileCheck2 size={13} />
            )}
            <span>{currentStage.status}</span>
          </div>

          <div
            className="h-[2px] flex-1 overflow-hidden bg-[#304B5B]"
            role="progressbar"
            aria-label="Protection workflow progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
          >
            <div
              className="h-full bg-[#D5F51F] transition-all duration-300"
              style={{
                width: `${Math.min(progress, 100)}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Dashboard footer */}
      <div className="flex min-h-[57px] items-center justify-between gap-2 border-t border-[#35566B] bg-[#102C42] px-3 py-3 sm:px-4">
        <span className="text-[6px] font-extrabold tracking-[0.65px] text-[#A9BFCC] sm:text-[7px] sm:tracking-[1px]">
          SCAN / DETECT / REMOVE / PROTECT
        </span>

        <button
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? "Pause animation" : "Play animation"}
          className="inline-flex min-h-[29px] shrink-0 items-center gap-1.5 rounded border border-[#456579] bg-transparent px-2.5 py-1.5 text-[9px] font-semibold text-[#D2E0E8] transition-colors hover:border-[#D5F51F] hover:text-[#D5F51F]"
        >
          {playing ? <Pause size={12} /> : <Play size={12} />}
          {playing ? "Pause" : "Play"}
        </button>
      </div>
    </div>
  );
}

function SolutionsInMotion() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return undefined;

    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % workflowSteps.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  return (
    <section className="lsp-motion">
      <div className="lsp-motion-heading">
        <div>
          <SectionLabel>Solutions in motion</SectionLabel>
          <h2>See the features in action.</h2>
        </div>

        <p>
          Follow an illustrative workflow from the first finding
          to a documented response.
        </p>
      </div>

      <div className="lsp-motion-grid">
        <div className="lsp-demo-column">
          <BroadcastIllustration
  activeStep={activeStep}
  isPlaying={isPlaying}
  onToggle={() => setIsPlaying((prev) => !prev)}
/>
        </div>

        <div className="lsp-workflow-card">
          <p className="lsp-card-kicker">Follow a live broadcast</p>

          <div className="lsp-workflow-list">
            {workflowSteps.map((step, index) => (
              <button
                type="button"
                key={step.number}
                className={`lsp-workflow-item ${
                  activeStep === index ? "active" : ""
                }`}
                onClick={() => setActiveStep(index)}
                aria-pressed={activeStep === index}
              >
                <span className="lsp-workflow-number">{step.number}</span>

                <span className="lsp-workflow-copy">
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </span>

                <ArrowRight className="lsp-workflow-arrow" size={17} />
              </button>
            ))}
          </div>

        </div>
      </div>

      <p className="lsp-disclaimer">
        Demonstration only. These animations use illustrative activity and do
        not display live detections or client results.
      </p>
    </section>
  );
}

function InvestmentSection() {
  return (
    <>
      <section className="lsp-investment">
        <div className="lsp-investment-image">
          <img
            src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=85"
            alt="Cinema camera and film production equipment"
            loading="lazy"
          />
          <span>Real stock photography · Illustrative context</span>
        </div>

        <div className="lsp-investment-copy">
          <SectionLabel>What you protect</SectionLabel>
          <h2>Follow the distribution trail.</h2>
          <p>
            Public websites, apps and linked sources can distribute protected assets through different routes. Investigation captures the source URL and context, then follows verified cases through reporting and outcome checks.
          </p>
        </div>
      </section>

      <section className="lsp-challenge">
        <div className="lsp-challenge-title">
          <SectionLabel>The challenge</SectionLabel>
          <h2>Understand the source before taking action.</h2>
        </div>

        <div className="lsp-challenge-copy">
          <p>
            Websites and public app listings may advertise, embed or redistribute protected content in different ways. Each finding needs source context and evidence of what is actually available.
          </p>

          <h3>The TrackOwls approach</h3>

          <p>
            Review relevant URLs, public descriptions and distribution links within the agreed scope. Preserve the discovery record and distinguish the hosting source from pages that merely point to it.
          </p>
        </div>
      </section>
    </>
  );
}

function EngagementSection() {
  return (
    <section className="lsp-engagement">
      <div className="lsp-engagement-grid">
        <article className="lsp-info-card">
          <SectionLabel>Before we begin</SectionLabel>
          <h2>What we need from you.</h2>

          <ul className="lsp-check-list">
            {requirements.map((item) => (
              <li key={item}>
                <Check size={16} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="lsp-info-card">
          <SectionLabel>Engagement outputs</SectionLabel>
          <h2>A record you can review.</h2>

          <ul className="lsp-output-list">
            {deliverables.map((item) => (
              <li key={item}>
                <FileText size={17} />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <p className="lsp-small-note">
            Deliverables, coverage and reporting frequency are agreed
            for your engagement.
          </p>
        </article>
      </div>
    </section>
  );
}

function EnforcementWorkflow() {
  return (
    <section className="lsp-enforcement">
      <div className="lsp-enforcement-inner">
        <SectionLabel>Our process</SectionLabel>
        <h2>A structured enforcement workflow.</h2>

        <div className="lsp-enforcement-grid">
          {enforcementSteps.map((step) => (
            <article className="lsp-enforcement-card" key={step.number}>
              <span>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>0
      </div>
    </section>
  );
}

export default function LivestreamingProtection() {
  return (
    <main className="lsp-page">
      <style>{`
        .lsp-page {
          --lsp-blue: #dcebf2;
          --lsp-blue-deep: #c6dfe9;
          --lsp-panel: #edf4f5;
          --lsp-panel-alt: #e5eef0;
          --lsp-ink: #18324b;
          --lsp-muted: #526e82;
          --lsp-line: #c5d7dc;
          --lsp-lime: #b8d83d;
          --lsp-green: #658d13;
          width: 100%;
          overflow: hidden;
          background: var(--lsp-blue);
          color: var(--lsp-ink);
          font-family: Roboto, Arial, sans-serif;
          line-height: 1.6;
        }

        .lsp-page *,
        .lsp-page *::before,
        .lsp-page *::after {
          box-sizing: border-box;
        }

        .lsp-page a {
          color: inherit;
          text-decoration: none;
        }

        .lsp-page button {
          font: inherit;
        }

        .lsp-page h2,
        .lsp-page h3,
        .lsp-page p {
          margin-top: 0;
        }

        .lsp-page h2 {
          margin-bottom: 18px;
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 750;
          line-height: 1.13;
          letter-spacing: -1.5px;
        }

        .lsp-page h3 {
          font-size: 18px;
          line-height: 1.35;
        }

        .lsp-eyebrow {
          display: inline-block;
          margin-bottom: 15px;
          color: var(--lsp-green);
          font-size: 10px;
          font-weight: 850;
          line-height: 1.5;
          letter-spacing: 1.7px;
          text-transform: uppercase;
        }

        .lsp-hero {
          position: relative;
          margin: 8px auto 26px;
          width: calc(100% - 54px);
          max-width: 1350px;
          padding: clamp(32px, 5vw, 62px) clamp(25px, 4vw, 40px);
          overflow: hidden;
          border: 1px solid #a7c3ce;
          border-radius: 12px;
          
        }

        .lsp-hero::after {
          position: absolute;
          top: -70px;
          right: -60px;
          width: 340px;
          height: 340px;
          border: 1px solid #8fb8c544;
          border-radius: 50%;
          box-shadow:
            0 0 0 30px #8fb8c51a,
            0 0 0 60px #8fb8c514;
          content: "";
          pointer-events: none;
        }

        .lsp-hero-content {
          position: relative;
          z-index: 1;
          max-width: 850px;
        }

        .lsp-hero h1 {
          margin: 8px 0 20px;
          color: #16324b;
          font-size: clamp(38px, 6vw, 68px);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -2.8px;
          overflow-wrap: anywhere;
        }

        .lsp-hero p {
          max-width: 670px;
          margin-bottom: 0;
          color: #435f75;
          font-size: clamp(14px, 1.4vw, 16px);
          line-height: 1.8;
        }

        .lsp-service,
        .lsp-motion,
        .lsp-investment,
        .lsp-challenge,
        .lsp-engagement,
        .lsp-enforcement {
          width: calc(100% - 54px);
          max-width: 1440px;
          margin-right: auto;
          margin-left: auto;
        }

        .lsp-service {
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          align-items: center;
          gap: clamp(25px, 6vw, 70px);
          margin-bottom: 26px;
          padding: clamp(25px, 4vw, 42px);
          border: 1px solid #c1d4d7;
          border-radius: 17px;
          background: #d1e3e7;
        }

        .lsp-service-icon {
          display: inline-flex;
          margin-bottom: 23px;
          color: var(--lsp-green);
        }

        .lsp-service-intro h2 {
          max-width: 440px;
          margin-bottom: 15px;
          font-size: clamp(27px, 3vw, 36px);
          letter-spacing: -1.1px;
        }

        .lsp-service-intro p {
          max-width: 450px;
          margin-bottom: 22px;
          color: var(--lsp-muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .lsp-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          min-height: 44px;
          padding: 12px 18px;
          border: 1px solid #5d8111;
          border-radius: 5px;
          background: var(--lsp-green);
          color: white !important;
          font-size: 12px;
          font-weight: 800;
          transition: transform 180ms ease, background 180ms ease;
        }

        .lsp-button:hover {
          transform: translateY(-2px);
          background: #4e7010;
        }

        .lsp-coverage-card {
          padding: clamp(20px, 3vw, 29px);
          border: 1px solid #c5d8da;
          border-radius: 14px;
          background: #e9f1f1;
        }

        .lsp-coverage-card h3 {
          margin-bottom: 18px;
          font-size: 18px;
          letter-spacing: -.4px;
        }

        .lsp-check-list,
        .lsp-output-list {
          display: grid;
          gap: 13px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .lsp-check-list li,
        .lsp-output-list li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          color: #4a667c;
          font-size: 13px;
          line-height: 1.65;
        }

        .lsp-check-list li svg,
        .lsp-output-list li svg {
          flex: 0 0 16px;
          margin-top: 3px;
          color: var(--lsp-green);
        }

        .lsp-small-note {
          margin: 22px 0 0;
          color: #61798a;
          font-size: 10px;
          line-height: 1.75;
        }

        .lsp-motion {
          margin-top: 26px;
          margin-bottom: 26px;
          padding: clamp(23px, 4vw, 44px);
          border: 1px solid #b5ced8;
          border-radius: 17px;
          background: linear-gradient(140deg, #d3e7ef, #c3dce8);
        }

        .lsp-motion-heading {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          align-items: end;
          gap: 35px;
          margin-bottom: 32px;
        }

        .lsp-motion-heading h2 {
          margin-bottom: 0;
          font-size: clamp(30px, 4vw, 45px);
        }

        .lsp-motion-heading > p {
          max-width: 380px;
          margin: 0 0 4px auto;
          color: var(--lsp-muted);
          font-size: 14px;
          line-height: 1.8;
        }

        .lsp-motion-grid {
          display: grid;
          grid-template-columns: 1.15fr .95fr;
          align-items: stretch;
          gap: 28px;
        }

        .lsp-demo-column {
          min-width: 0;
          overflow: hidden;
          border: 1px solid #a9c6d2;
          border-radius: 13px;
          background: #eaf2f5;
        }

        .lsp-visual {
          overflow: hidden;
          border-bottom: 1px solid #b8cfd9;
          background: linear-gradient(150deg, #e2f0f5, #c7dfe9);
          color: #173b52;
        }

        .lsp-visual-top,
        .lsp-visual-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px 17px;
          background: #d5e7ee;
        }

        .lsp-visual-top {
          border-bottom: 1px solid #b9d1dc;
          font-size: 10px;
          font-weight: 750;
        }

        .lsp-visual-top > span:first-child,
        .lsp-visual-status > span {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .lsp-illustrative {
          color: var(--lsp-green);
          font-size: 8px;
          font-weight: 850;
          letter-spacing: 1px;
        }

        .lsp-visual-stage {
          position: relative;
          display: grid;
          min-height: 290px;
          place-items: center;
          overflow: hidden;
          isolation: isolate;
        }

        .lsp-map-grid {
          position: absolute;
          z-index: -2;
          inset: 0;
          opacity: .55;
          background:
            linear-gradient(90deg, #7ba4b31c 1px, transparent 1px),
            linear-gradient(#7ba4b31c 1px, transparent 1px);
          background-size: 32px 32px;
        }

        .lsp-orbit {
          position: absolute;
          width: 68%;
          aspect-ratio: 1.8;
          border: 1px dashed #7d9e70;
          border-radius: 50%;
          animation: lsp-orbit-spin 22s linear infinite;
        }

        .lsp-orbit-one {
          transform: rotate(-19deg);
        }

        .lsp-orbit-two {
          width: 78%;
          aspect-ratio: 1.2;
          border-color: #8db2be;
          animation-duration: 28s;
          animation-direction: reverse;
        }

        .lsp-orbit-three {
          width: 46%;
          aspect-ratio: 1;
          border-color: #96b54d;
          animation-duration: 18s;
        }

        .lsp-scan-beam {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          width: 1px;
          background: linear-gradient(transparent, #81a93b, transparent);
          opacity: .75;
          animation: lsp-scan 6s ease-in-out infinite alternate;
        }

        .lsp-feed {
          position: absolute;
          z-index: 2;
          width: 145px;
          max-width: 34%;
          padding: 12px;
          border: 1px solid #a9c7d2;
          border-radius: 9px;
          background: #eaf3f6;
          box-shadow: 0 7px 18px #466b7b12;
        }

        .lsp-feed-left {
          top: 13%;
          left: 6%;
        }

        .lsp-feed-right {
          top: 13%;
          right: 6%;
        }

        .lsp-feed-bottom {
          bottom: 8%;
          left: 50%;
          transform: translateX(-50%);
        }

        .lsp-feed-heading {
          display: flex;
          align-items: flex-start;
          gap: 7px;
          color: #294c62;
          font-size: 9px;
          font-weight: 700;
          line-height: 1.5;
        }

        .lsp-feed-heading svg {
          flex-shrink: 0;
          color: var(--lsp-green);
        }

        .lsp-signal-bars {
          display: flex;
          align-items: end;
          gap: 3px;
          height: 15px;
          margin-top: 7px;
        }

        .lsp-signal-bars i {
          width: 4px;
          height: calc(4px + (var(--bar) * 1.25px));
          border-radius: 1px;
          background: #7393a4;
          animation: lsp-signal 1s ease-in-out infinite alternate;
          animation-delay: calc(var(--bar) * 100ms);
        }

        .lsp-core {
          position: relative;
          z-index: 3;
          display: flex;
          width: 108px;
          height: 108px;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 3px;
          border: 1px solid #8caf3a;
          border-radius: 50%;
          background: #e9f3f0;
          box-shadow: 0 0 0 10px #91b63d14, 0 0 0 20px #91b63d0c;
          color: var(--lsp-green);
          animation: lsp-core-pulse 3s ease-in-out infinite;
        }

        .lsp-core-icon {
          display: grid;
          place-items: center;
        }

        .lsp-core > span {
          font-size: 7px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .lsp-visual-status {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 13px 17px;
          border-top: 1px solid #b9d1dc;
          background: #e8f1f4;
          color: #405e72;
          font-size: 9px;
        }

        .lsp-visual-status > span {
          flex-shrink: 0;
        }

        .lsp-progress {
          flex: 1;
          height: 3px;
          overflow: hidden;
          background: #c0d4dd;
        }

        .lsp-progress span {
          display: block;
          height: 100%;
          background: var(--lsp-green);
          transition: width 350ms ease;
        }

        .lsp-visual-bottom {
          min-height: 51px;
          font-size: 8px;
          font-weight: 750;
          letter-spacing: .7px;
        }

        .lsp-live-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #456478;
          font-size: 8px;
          white-space: nowrap;
        }

        .lsp-live-indicator i {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--lsp-green);
        }

        .lsp-is-paused .lsp-live-indicator i {
          background: #859ba5;
        }

        .lsp-demo-controls {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 12px 15px;
          color: var(--lsp-muted);
          font-size: 10px;
        }

        .lsp-play-button {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 11px;
          border: 1px solid #a6c3cf;
          border-radius: 5px;
          background: #f4f8f8;
          color: #25445a;
          font-size: 10px !important;
          cursor: pointer;
        }

        .lsp-play-button:hover {
          background: #fff;
        }

        .lsp-workflow-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: clamp(20px, 3vw, 28px);
          border: 1px solid #c2d6da;
          border-radius: 13px;
          background: #e8f0f0;
        }

        .lsp-card-kicker {
          margin-bottom: 17px;
          color: var(--lsp-green);
          font-size: 10px;
          font-weight: 850;
          letter-spacing: 1.3px;
        }

        .lsp-workflow-list {
          display: grid;
          gap: 8px;
        }

        .lsp-workflow-item {
          display: grid;
          grid-template-columns: 27px minmax(0, 1fr) 17px;
          align-items: start;
          gap: 11px;
          width: 100%;
          padding: 13px 10px;
          border: 1px solid transparent;
          border-radius: 8px;
          background: transparent;
          color: var(--lsp-ink);
          text-align: left;
          cursor: pointer;
          transition: background 180ms ease, border-color 180ms ease;
        }

        .lsp-workflow-item:hover,
        .lsp-workflow-item.active {
          border-color: #b7cfd5;
          background: #f8fbfb;
        }

        .lsp-workflow-number {
          padding-top: 1px;
          color: #7799a5;
          font-size: 15px;
          font-weight: 850;
        }

        .lsp-workflow-item.active .lsp-workflow-number {
          color: var(--lsp-green);
        }

        .lsp-workflow-copy {
          display: grid;
          gap: 6px;
          min-width: 0;
        }

        .lsp-workflow-copy strong {
          font-size: 13px;
          line-height: 1.5;
        }

        .lsp-workflow-copy > span {
          color: #597386;
          font-size: 11px;
          line-height: 1.75;
        }

        .lsp-workflow-arrow {
          margin-top: 2px;
          color: var(--lsp-green);
          opacity: 0;
          transition: opacity 180ms ease;
        }

        .lsp-workflow-item.active .lsp-workflow-arrow,
        .lsp-workflow-item:hover .lsp-workflow-arrow {
          opacity: 1;
        }

        .lsp-text-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          align-self: flex-start;
          margin-top: auto;
          padding-top: 23px;
          color: var(--lsp-green) !important;
          font-size: 12px;
          font-weight: 750;
        }

        .lsp-text-link:hover {
          text-decoration: underline;
          text-underline-offset: 5px;
        }

        .lsp-disclaimer {
          margin: 18px 0 0;
          color: #4d687a;
          font-size: 10px;
          line-height: 1.8;
        }

        .lsp-investment {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: clamp(25px, 4vw, 45px);
          margin-top: 26px;
          margin-bottom: 26px;
        }

        .lsp-investment-image {
          overflow: hidden;
          border: 1px solid #abc4ce;
          border-radius: 10px;
          background: #eef4f6;
        }

        .lsp-investment-image img {
          display: block;
          width: 100%;
          height: clamp(220px, 26vw, 310px);
          object-fit: cover;
        }

        .lsp-investment-image > span {
          display: block;
          padding: 11px 14px;
          color: #587386;
          font-size: 10px;
        }

        .lsp-investment-copy h2 {
          max-width: 520px;
          font-size: clamp(30px, 4vw, 43px);
        }

        .lsp-investment-copy > p {
          max-width: 560px;
          margin-bottom: 0;
          color: var(--lsp-muted);
          font-size: 14px;
          line-height: 1.9;
        }

        .lsp-challenge {
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: clamp(28px, 5vw, 70px);
          margin-bottom: 26px;
          padding: clamp(27px, 4vw, 43px);
          border: 1px solid #c1d5da;
          border-radius: 15px;
          background: #d2e4e8;
        }

        .lsp-challenge-title h2 {
          max-width: 430px;
          margin-bottom: 0;
          font-size: clamp(31px, 4vw, 43px);
        }

        .lsp-challenge-copy > p {
          margin-bottom: 23px;
          color: var(--lsp-muted);
          font-size: 13px;
          line-height: 1.9;
        }

        .lsp-challenge-copy h3 {
          margin-bottom: 10px;
          font-size: 18px;
          letter-spacing: -.3px;
        }

        .lsp-challenge-copy > p:last-child {
          margin-bottom: 0;
        }

        .lsp-engagement {
          padding: 25px 0;
        }

        .lsp-engagement-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 25px;
        }

        .lsp-info-card {
          padding: clamp(23px, 3vw, 33px);
          border: 1px solid #c3d6da;
          border-radius: 13px;
          background: #e8f0ef;
        }

        .lsp-info-card h2 {
          margin-bottom: 25px;
          font-size: clamp(25px, 3vw, 34px);
          letter-spacing: -1px;
        }

        .lsp-output-list {
          gap: 12px;
        }

        .lsp-output-list li {
          gap: 11px;
        }

        .lsp-enforcement {
          margin-top: 26px;
          margin-bottom: 26px;
          padding: clamp(25px, 4vw, 42px);
          border: 1px solid #c0d5d9;
          border-radius: 16px;
          background: #d0e2e6;
        }

        .lsp-enforcement-inner > h2 {
          margin-bottom: 30px;
          font-size: clamp(30px, 4vw, 44px);
        }

        .lsp-enforcement-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 13px;
        }

        .lsp-enforcement-card {
          min-width: 0;
          min-height: 190px;
          padding: 20px 18px;
          border: 1px solid #c2d6d8;
          border-radius: 12px;
          background: #e8f0ef;
          transition: transform 180ms ease, box-shadow 180ms ease;
        }

        .lsp-enforcement-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 9px 20px #365d6b12;
        }

        .lsp-enforcement-card > span {
          color: var(--lsp-green);
          font-size: 10px;
          font-weight: 800;
        }

        .lsp-enforcement-card h3 {
          margin: 17px 0 9px;
          font-size: 19px;
          letter-spacing: -.5px;
        }

        .lsp-enforcement-card p {
          margin-bottom: 0;
          color: #536f80;
          font-size: 11px;
          line-height: 1.8;
        }

        .lsp-contact {
          width: calc(100% - 54px);
          max-width: 1440px;
          margin: 26px auto;
          padding: clamp(26px, 4vw, 43px);
          border: 1px solid #adcbd5;
          border-radius: 14px;
          background: #c7e0e9;
        }

        .lsp-contact-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }

        .lsp-contact h2 {
          margin-bottom: 10px;
          font-size: clamp(27px, 3.5vw, 38px);
        }

        .lsp-contact p {
          margin-bottom: 0;
          color: var(--lsp-muted);
          font-size: 13px;
          line-height: 1.8;
        }

        @keyframes lsp-orbit-spin {
          to { transform: rotate(360deg); }
        }

        @keyframes lsp-scan {
          from { transform: translateX(0); }
          to { transform: translateX(100vw); }
        }

        @keyframes lsp-signal {
          from { opacity: .45; }
          to { opacity: 1; }
        }

        @keyframes lsp-core-pulse {
          0%, 100% { box-shadow: 0 0 0 10px #91b63d14, 0 0 0 20px #91b63d0c; }
          50% { box-shadow: 0 0 0 14px #91b63d17, 0 0 0 26px #91b63d08; }
        }

        @media (min-width: 1500px) {
          .lsp-hero,
          .lsp-service,
          .lsp-motion,
          .lsp-investment,
          .lsp-challenge,
          .lsp-engagement,
          .lsp-enforcement,
          .lsp-contact {
            max-width: 1440px;
          }
        }

        @media (max-width: 1000px) {
          .lsp-motion-grid {
            grid-template-columns: 1fr;
          }

          .lsp-workflow-card {
            min-height: auto;
          }

          .lsp-workflow-list {
            grid-template-columns: 1fr 1fr;
          }

          .lsp-enforcement-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .lsp-enforcement-card {
            min-height: 170px;
          }
        }

        @media (max-width: 760px) {
          .lsp-hero,
          .lsp-service,
          .lsp-motion,
          .lsp-investment,
          .lsp-challenge,
          .lsp-engagement,
          .lsp-enforcement,
          .lsp-contact {
            width: calc(100% - 28px);
          }

          .lsp-hero {
            margin-top: 8px;
            margin-bottom: 16px;
            padding: 32px 22px;
            border-radius: 10px;
          }

          .lsp-hero::after {
            top: auto;
            right: -140px;
            bottom: -140px;
            width: 270px;
            height: 270px;
          }

          .lsp-hero h1 {
            margin-top: 8px;
            font-size: clamp(36px, 9vw, 52px);
            line-height: 1.08;
            letter-spacing: -1.8px;
          }

          .lsp-hero p {
            font-size: 14px;
            line-height: 1.8;
          }

          .lsp-service {
            grid-template-columns: 1fr;
            gap: 27px;
            margin-bottom: 16px;
            padding: 24px 20px;
            border-radius: 13px;
          }

          .lsp-service-icon {
            margin-bottom: 14px;
          }

          .lsp-service-intro h2 {
            max-width: 360px;
            font-size: 29px;
          }

          .lsp-service-intro p {
            font-size: 14px;
          }

          .lsp-coverage-card {
            padding: 20px 18px;
          }

          .lsp-check-list {
            gap: 12px;
          }

          .lsp-check-list li,
          .lsp-output-list li {
            font-size: 13px;
          }

          .lsp-motion {
            margin-top: 16px;
            margin-bottom: 16px;
            padding: 24px 16px;
            border-radius: 13px;
          }

          .lsp-motion-heading {
            grid-template-columns: 1fr;
            gap: 12px;
            margin-bottom: 22px;
          }

          .lsp-motion-heading h2 {
            font-size: clamp(29px, 7vw, 37px);
            letter-spacing: -1.2px;
          }

          .lsp-motion-heading > p {
            margin: 0;
            font-size: 13px;
          }

          .lsp-visual-stage {
            min-height: 270px;
          }

          .lsp-feed {
            width: 125px;
            padding: 9px;
          }

          .lsp-feed-left,
          .lsp-feed-right {
            top: 14%;
          }

          .lsp-core {
            width: 91px;
            height: 91px;
          }

          .lsp-core-icon svg {
            width: 29px;
            height: 29px;
          }

          .lsp-workflow-card {
            padding: 20px 15px;
          }

          .lsp-workflow-list {
            grid-template-columns: 1fr;
            gap: 5px;
          }

          .lsp-workflow-item {
            grid-template-columns: 27px minmax(0, 1fr) 17px;
            padding: 13px 10px;
          }

          .lsp-workflow-copy strong {
            font-size: 13px;
          }

          .lsp-workflow-copy > span {
            font-size: 12px;
          }

          .lsp-investment {
            grid-template-columns: 1fr;
            gap: 24px;
            margin-top: 25px;
            margin-bottom: 16px;
          }

          .lsp-investment-image img {
            height: 250px;
          }

          .lsp-investment-copy {
            padding: 0 3px;
          }

          .lsp-investment-copy h2 {
            font-size: 32px;
            letter-spacing: -1.1px;
          }

          .lsp-investment-copy > p {
            font-size: 14px;
          }

          .lsp-challenge {
            grid-template-columns: 1fr;
            gap: 22px;
            margin-bottom: 16px;
            padding: 25px 21px;
            border-radius: 13px;
          }

          .lsp-challenge-title h2 {
            font-size: 32px;
            letter-spacing: -1.1px;
          }

          .lsp-challenge-copy > p {
            font-size: 13px;
          }

          .lsp-engagement {
            padding: 15px 0;
          }

          .lsp-engagement-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .lsp-info-card {
            padding: 23px 20px;
          }

          .lsp-info-card h2 {
            font-size: 29px;
          }

          .lsp-enforcement {
            margin-top: 16px;
            margin-bottom: 16px;
            padding: 24px 16px;
          }

          .lsp-enforcement-inner > h2 {
            margin-bottom: 23px;
            font-size: 31px;
            letter-spacing: -1.2px;
          }

          .lsp-enforcement-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .lsp-enforcement-card {
            display: grid;
            grid-template-columns: 36px minmax(0, 1fr);
            column-gap: 12px;
            min-height: auto;
            padding: 18px 16px;
          }

          .lsp-enforcement-card > span {
            grid-row: 1 / span 2;
            padding-top: 5px;
          }

          .lsp-enforcement-card h3 {
            margin: 0 0 7px;
            font-size: 20px;
          }

          .lsp-enforcement-card p {
            font-size: 12px;
          }

          .lsp-contact {
            margin-top: 16px;
            margin-bottom: 16px;
            padding: 24px 20px;
          }

          .lsp-contact-inner {
            align-items: flex-start;
            flex-direction: column;
            gap: 20px;
          }
        }

        @media (max-width: 390px) {
          .lsp-hero,
          .lsp-service,
          .lsp-motion,
          .lsp-investment,
          .lsp-challenge,
          .lsp-engagement,
          .lsp-enforcement,
          .lsp-contact {
            width: calc(100% - 22px);
          }

          .lsp-hero {
            padding: 28px 18px;
          }

          .lsp-hero h1 {
            font-size: 35px;
            letter-spacing: -1.5px;
          }

          .lsp-service {
            padding: 22px 16px;
          }

          .lsp-visual-top,
          .lsp-visual-bottom {
            padding: 12px 10px;
          }

          .lsp-visual-top {
            font-size: 9px;
          }

          .lsp-visual-stage {
            min-height: 245px;
          }

          .lsp-feed {
            max-width: 37%;
            padding: 8px;
          }

          .lsp-feed-heading {
            font-size: 8px;
          }

          .lsp-core {
            width: 79px;
            height: 79px;
          }

          .lsp-visual-status {
            gap: 8px;
            padding: 11px 10px;
            font-size: 8px;
          }

          .lsp-demo-controls {
            padding: 10px;
            font-size: 9px;
          }

          .lsp-workflow-item {
            grid-template-columns: 24px minmax(0, 1fr) 14px;
            gap: 8px;
            padding: 12px 7px;
          }

          .lsp-workflow-copy > span {
            font-size: 11px;
          }

          .lsp-investment-image img {
            height: 210px;
          }

          .lsp-challenge-title h2 {
            font-size: 29px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .lsp-page *,
          .lsp-page *::before,
          .lsp-page *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <section className="w-full bg-linear-gradient(120deg, #e7f2f7, #cfe5ee); px-3 pt-26 pb-7 font-['Roboto',sans-serif] sm:px-5 sm:pt-25 sm:pb-9 lg:px-8 lg:pt-25 lg:pb-8"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="relative isolate flex min-h-[300px] w-full items-center overflow-hidden rounded-[14px] border border-[#8BB630]/30 bg-[#D5DDDA] sm:min-h-[400px] sm:rounded-[17px] lg:min-h-[410px] xl:min-h-[440px]">
{/* Background image */}
          <div
            aria-hidden="true"
            className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/globe.png')",
            }}
          />

          {/* Light blue overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-[-1] bg-gradient-to-r from-[#DCEAF4]/95 via-[#DCEAF4]/85 to-[#DCEAF4]/45"
          />

          {/* Soft blue atmospheric glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 z-[-1] h-64 w-64 -translate-y-1/2 rounded-full bg-[#8BBCE0]/30 blur-3xl sm:h-80 sm:w-80 lg:h-[450px] lg:w-[450px]"
          />
          
          {/* Main content */}
          <div className="relative z-10 w-full px-5 py-9 sm:px-8 sm:py-11 md:px-10 lg:px-[58px] lg:py-[62px] xl:px-[68px]">
            <div className="max-w-[1000px]">    


           <span className="mb-5 inline-flex items-center gap-2.5 text-[10px] font-extrabold uppercase tracking-[1.8px] text-[#648A13] sm:mb-6 sm:text-[11px] lg:mb-7 lg:text-[12px]">
               Solutions
              </span>

              {/* Heading */}
              <h1 className="m-0 max-w-[900px] text-[34px] font-bold leading-[1.12] tracking-[-1.3px] text-[#15334E] min-[400px]:text-[39px] sm:text-[48px] sm:leading-[1.1] sm:tracking-[-1.8px] md:text-[58px] lg:text-[68px] lg:leading-[1.06] lg:tracking-[-2.4px] xl:text-[76px]">
Website &amp; App Monitoring
              </h1>

              {/* Description */}
              <p className="mt-5 max-w-[650px] text-[14px] font-normal leading-[1.75] text-[#526B86] sm:mt-6 sm:text-[15px] sm:leading-[1.8] lg:mt-7 lg:text-[17px] lg:leading-[1.8]">
                Investigate websites, applications and digital properties suspected of distributing protected content without authorization.
              </p> 

          </div>
          </div>
          </div>
          </div>
          </section>


      <ServiceCard />

      <SolutionsInMotion />

      <InvestmentSection />

      <EngagementSection />

      <EnforcementWorkflow />

      <HomeCTA />

     
    </main>
  );
}
