
import React, { useEffect, useState } from "react";
import {
  Radio,
  Play,
  Globe,
  FileCheck,
  ShieldCheck,
  ScanSearch,
  Search,
  Eye,
  Pause,
  ArrowRight,
  CheckCircle2,
  Activity,
  Radar,
  Monitor,
  RotateCcw,
  CircleDot,
} from "lucide-react";

const LIME = "#D5F51F";

const solutions = [
  {
    title: "Live Streaming Protection",
    short: "Live broadcast",
    icon: Radio,
    label: "Follow a live broadcast",
    center: "VERIFY",
    centerIcon: ScanSearch,
    status: "Evidence review",
    left: "Event feed",
    right: "Suspected stream",
    bottom: "Repeat broadcast",
    link: "Explore live streaming protection",
    steps: [
      ["Monitor the event", "Review agreed public channels during the broadcast window."],
      ["Verify the stream", "Compare the suspected broadcast with the authorized event."],
      ["Submit priority action", "Capture timestamps and submit an authorized complaint."],
      ["Check availability", "Revisit the stream and record the outcome during the event."],
    ],
  },
  {
    title: "OTT & VOD Protection",
    short: "Release window",
    icon: Play,
    label: "Follow a release-window review",
    center: "ACTION",
    centerIcon: FileCheck,
    status: "Authorized action",
    left: "Reference title",
    right: "Episode copy",
    bottom: "Download source",
    link: "Explore OTT & VOD protection",
    steps: [
      ["Track the release", "Start with the title, episodes, territories and release dates."],
      ["Match the content", "Review a suspected copy against the protected asset."],
      ["Document the case", "Preserve the source URL, content match and rights evidence."],
      ["Follow the response", "Track complaint status and check for repeat distribution."],
    ],
  },
  {
    title: "Website & App Monitoring",
    short: "Source discovery",
    icon: Globe,
    label: "Follow a website investigation",
    center: "DISCOVER",
    centerIcon: Globe,
    status: "Monitoring scope",
    left: "Public website",
    right: "App listing",
    bottom: "Distribution link",
    link: "Explore website & app monitoring",
    steps: [
      ["Discover sources", "Review agreed websites, public apps and search results."],
      ["Investigate the route", "Distinguish a discovery link from the actual content source."],
      ["Capture evidence", "Record the source, timestamps and available public context."],
      ["Monitor recurrence", "Revisit sources and connect supported repeat findings."],
    ],
  },
  {
    title: "Copyright Enforcement",
    short: "Rights evidence",
    icon: FileCheck,
    label: "Follow an evidence-led complaint",
    center: "DISCOVER",
    centerIcon: FileCheck,
    status: "Monitoring scope",
    left: "Rights record",
    right: "Evidence pack",
    bottom: "Complaint reference",
    link: "Explore copyright enforcement",
    steps: [
      ["Confirm authorization", "Check the ownership and rights needed for the complaint."],
      ["Prepare the evidence", "Collect source URLs, timestamps and the content match."],
      ["Submit the complaint", "Use the receiving platform's appropriate reporting route."],
      ["Verify the outcome", "Keep pending reviews separate from confirmed removals."],
    ],
  },
  {
    title: "Brand Protection",
    short: "Brand identity",
    icon: ShieldCheck,
    label: "Follow a brand-asset review",
    center: "DISCOVER",
    centerIcon: ShieldCheck,
    status: "Monitoring scope",
    left: "Approved identity",
    right: "Suspected misuse",
    bottom: "Review record",
    link: "Explore brand protection",
    steps: [
      ["Set brand references", "Use approved logos, trademarks and official channels."],
      ["Review suspected misuse", "Compare the finding with the supplied brand references."],
      ["Assess the evidence", "Check context before treating a finding as an infringement."],
      ["Report supported cases", "Use authorized reporting routes and revisit the source."],
    ],
  },
  {
    title: "Piracy Intelligence",
    short: "Source intelligence",
    icon: Radar,
    label: "Connect the evidence",
    center: "DISCOVER",
    centerIcon: ScanSearch,
    status: "Monitoring scope",
    left: "Source A",
    right: "Linked case",
    bottom: "Recurring source",
    link: "Explore piracy intelligence",
    steps: [
      ["Collect verified cases", "Build intelligence from reviewed findings and case history."],
      ["Connect supported links", "Record relationships backed by evidence."],
      ["Review recurrence", "Understand returning sources and distribution patterns."],
      ["Set the next priority", "Use the findings to refine the monitoring scope."],
    ],
  },
  {
    title: "Marketplace & Counterfeit Monitoring",
    short: "Listing review",
    icon: Search,
    label: "Follow a listing review",
    center: "DISCOVER",
    centerIcon: Search,
    status: "Monitoring scope",
    left: "Product reference",
    right: "Marketplace offer",
    bottom: "Seller history",
    link: "Explore marketplace & counterfeit monitoring",
    steps: [
      ["Collect product references", "Start with approved imagery, marks and seller context."],
      ["Review public listings", "Find offers that may misuse protected brand assets."],
      ["Verify the concern", "Document specific misuse; uncertainty is kept visible."],
      ["Track reporting & relisting", "Submit supported complaints and check repeat offers."],
    ],
  },
  {
    title: "Domain & Impersonation Monitoring",
    short: "Identity investigation",
    icon: Globe,
    label: "Follow an identity investigation",
    center: "DISCOVER",
    centerIcon: Globe,
    status: "Monitoring scope",
    left: "Official domain",
    right: "Lookalike page",
    bottom: "Provider record",
    link: "Explore domain & impersonation monitoring",
    steps: [
      ["Confirm the official identity", "Use the brand's authorized domains and public channels."],
      ["Investigate the finding", "Compare copied identity and available public context."],
      ["Preserve the evidence", "Keep page records and the specific suspected misuse."],
      ["Coordinate the response", "Agree reporting routes and revisit the public source."],
    ],
  },
  {
    title: "Social Media & Video Protection",
    short: "Social discovery",
    icon: Eye,
    label: "Follow a social-content investigation",
    center: "VERIFY",
    centerIcon: ScanSearch,
    status: "Evidence review",
    left: "Public website",
    right: "Video listing",
    bottom: "Distribution link",
    link: "Explore social media & video protection",
    steps: [
      ["Discover sources", "Review agreed social channels, public videos and listings."],
      ["Investigate the route", "Distinguish a shared link from the original content source."],
      ["Capture evidence", "Record relevant URLs, timestamps and public context."],
      ["Monitor recurrence", "Revisit sources and document supported repeat findings."],
    ],
  },
];

function SolutionIllustration({ solution, activeStep, paused }) {
  const CenterIcon = solution.centerIcon;

  return (
    <div
      className={`sm-visual ${paused ? "sm-paused" : ""}`}
      aria-label={`${solution.title} animated monitoring illustration`}
    >
      {/* Decorative dotted map */}
      <div className="sm-map" aria-hidden="true">
        <svg
          viewBox="0 0 700 330"
          preserveAspectRatio="xMidYMid meet"
          className="sm-map-svg"
        >
          <defs>
            <pattern
              id="smDots"
              width="9"
              height="9"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill="#638BA2" />
            </pattern>
            <linearGradient id="smMapFade" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#A8C8D9" stopOpacity=".08" />
              <stop offset="50%" stopColor="#A8C8D9" stopOpacity=".5" />
              <stop offset="100%" stopColor="#A8C8D9" stopOpacity=".08" />
            </linearGradient>
          </defs>

          <g fill="url(#smDots)" opacity=".88">
            <path d="M60 83 L93 60 135 66 160 92 145 117 116 120 106 146 80 139 66 113Z" />
            <path d="M130 153 L163 168 177 203 161 250 144 278 127 236 137 204Z" />
            <path d="M251 70 L293 55 337 66 361 88 345 106 310 103 285 125 260 104Z" />
            <path d="M331 129 L369 116 396 135 408 165 388 202 378 239 353 216 347 178Z" />
            <path d="M413 79 L456 57 512 68 555 91 593 85 621 111 598 137 558 132 536 154 496 142 469 114 438 119Z" />
            <path d="M495 176 L527 164 565 185 575 216 552 247 530 238 517 211Z" />
          </g>

          <ellipse
            cx="350"
            cy="164"
            rx="220"
            ry="95"
            fill="none"
            stroke="#8BB630"
            strokeWidth="1.4"
            strokeDasharray="5 10"
            opacity=".6"
            className="sm-orbit sm-orbit-one"
          />
          <ellipse
            cx="350"
            cy="164"
            rx="172"
            ry="68"
            fill="none"
            stroke="#77A5B9"
            strokeWidth="1"
            strokeDasharray="3 9"
            opacity=".65"
            className="sm-orbit sm-orbit-two"
          />

          <circle cx="133" cy="164" r="4" fill="#8BB630" />
          <circle cx="567" cy="164" r="4" fill="#8BB630" />
          <circle cx="350" cy="69" r="4" fill="#8BB630" />
          <circle cx="350" cy="259" r="4" fill="#8BB630" />

          <path
            d="M133 164 Q225 80 350 164 T567 164"
            fill="none"
            stroke="url(#smMapFade)"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Floating source cards */}
      <div className={`sm-source sm-source-left ${activeStep === 0 ? "sm-source-active" : ""}`}>
        <span className="sm-source-icon">
          <ShieldCheck size={15} />
        </span>
        <span className="sm-source-label">{solution.left}</span>
        <div className="sm-source-lines">
          <i />
          <i />
        </div>
      </div>

      <div className={`sm-source sm-source-right ${activeStep === 1 ? "sm-source-active" : ""}`}>
        <span className="sm-source-icon">
          <Globe size={15} />
        </span>
        <span className="sm-source-label">{solution.right}</span>
        <div className="sm-source-lines">
          <i />
          <i />
        </div>
      </div>

      {/* Central scan */}
      <div className="sm-center-orbit">
        <div className="sm-center-ring" />
        <div className="sm-center">
          <CenterIcon size={38} strokeWidth={1.7} />
          <span>{solution.center}</span>
        </div>
      </div>

      <div className={`sm-source sm-source-bottom ${activeStep === 2 ? "sm-source-active" : ""}`}>
        <span className="sm-source-icon">
          <Activity size={15} />
        </span>
        <span className="sm-source-label">{solution.bottom}</span>
        <div className="sm-signal-bars" aria-hidden="true">
          {Array.from({ length: 7 }, (_, index) => (
            <i key={index} style={{ animationDelay: `${index * 0.09}s` }} />
          ))}
        </div>
      </div>

      <div className="sm-visual-status">
        <span className="sm-status-icon">
          <Search size={15} />
        </span>
        <span>{solution.status}</span>
        <div className="sm-progress-track">
          <div
            className="sm-progress-fill"
            key={`${solution.title}-${activeStep}`}
          />
        </div>
      </div>
    </div>
  );
}

export default function SolutionsMotion() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [paused, setPaused] = useState(false);

  const solution = solutions[selectedIndex];
  const SolutionIcon = solution.icon;

  useEffect(() => {
    if (paused) return undefined;

    const timer = window.setInterval(() => {
      setActiveStep((current) => (current + 1) % 4);
    }, 2600);

    return () => window.clearInterval(timer);
  }, [paused, selectedIndex]);

  const selectSolution = (index) => {
    setSelectedIndex(index);
    setActiveStep(0);
  };

  return (
    <section className="solutions-motion relative w-full overflow-hidden font-['Roboto',sans-serif]">
      <style>{`
        .solutions-motion {
          --sm-ink: #15334E;
          --sm-muted: #536D82;
          --sm-lime: #D5F51F;
          --sm-green: #648A13;
          --sm-line: #B9CFDC;
          color: var(--sm-ink);
          background: #EAF3F9;
            
          padding: 22px 0 26px;
        }

        .solutions-motion::before {
          display: none;
        }

        .sm-container {
          width: min(1350px, calc(100% - 40px));
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .sm-kicker {
          display: block;
          color: #648A13;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .sm-heading-row {
          display: grid;
          grid-template-columns: minmax(0, 1.5fr) minmax(230px, .7fr);
          align-items: center;
          gap: 36px;
          margin-top: 18px;
        }

        .sm-heading {
          margin: 0;
          color: var(--sm-ink);
          font-size: clamp(34px, 4vw, 52px);
          line-height: 1.08;
          font-weight: 800;
          letter-spacing: -2.1px;
        }

        .sm-intro {
          margin: 0;
          color: var(--sm-muted);
          font-size: 14px;
          font-weight: 500;
          line-height: 1.8;
        }

        .sm-tabs {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 8px;
          margin-top: 34px;
        }

        .sm-tab {
          min-height: 40px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 9px 13px;
          border: 1px solid #9DB8C8;
          border-radius: 5px;
          background: rgba(239, 247, 251, .76);
          color: #36566D;
          font-size: 11px;
          line-height: 1.3;
          font-weight: 750;
          text-align: left;
          transition: background .2s ease, border-color .2s ease, color .2s ease, transform .2s ease;
        }

        .sm-tab:hover {
          border-color: #648A13;
          background: #F7FBEA;
          transform: translateY(-1px);
        }

        .sm-tab:focus-visible,
        .sm-play:focus-visible,
        .sm-step:focus-visible {
          outline: 3px solid #648A13;
          outline-offset: 3px;
        }

        .sm-tab-active {
          color: #20320B;
          background: var(--sm-lime);
          border-color: var(--sm-lime);
        }

        .sm-tab-active:hover {
          color: #20320B;
          background: #E3FA57;
        }

        .sm-content-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(0, .92fr);
          align-items: stretch;
          gap: 28px;
          margin-top: 26px;
        }

        .sm-demo-card {
          min-width: 0;
          overflow: hidden;
          border: 1px solid #A8C4D3;
          border-radius: 14px;
          background: rgba(233, 244, 249, .92);
          box-shadow: 0 14px 36px rgba(35, 74, 98, .08);
        }

        .sm-demo-header {
          display: flex;
          min-height: 52px;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 13px 18px;
          border-bottom: 1px solid #B9CFDC;
          background: rgba(222, 237, 245, .92);
        }

        .sm-demo-title {
          display: flex;
          align-items: center;
          gap: 9px;
          min-width: 0;
          font-size: 11px;
          line-height: 1.4;
          font-weight: 800;
          color: var(--sm-ink);
        }

        .sm-demo-title svg {
          flex-shrink: 0;
          color: #648A13;
        }

        .sm-illustrative {
          flex-shrink: 0;
          color: #648A13;
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .sm-visual {
          height: 330px;
          min-width: 0;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          background:
            radial-gradient(ellipse at 50% 47%, rgba(184, 220, 231, .78), transparent 48%),
            linear-gradient(140deg, #E3F0F6, #CFE4EF 50%, #E3F0F6);
        }

        .sm-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          opacity: .52;
          background-image: radial-gradient(#80A9BC 1.2px, transparent 1.2px);
          background-size: 9px 9px;
          mask-image: radial-gradient(ellipse at center, black 10%, transparent 74%);
        }

        .sm-map {
          position: absolute;
          inset: 5% 0 7%;
          display: grid;
          place-items: center;
          opacity: .82;
        }

        .sm-map-svg {
          width: 100%;
          height: 100%;
          overflow: visible;
        }

        .sm-orbit {
          transform-origin: 350px 164px;
        }

        .sm-orbit-one {
          animation: smOrbit 26s linear infinite;
        }

        .sm-orbit-two {
          animation: smOrbit 19s linear infinite reverse;
        }

        .sm-paused .sm-orbit,
        .sm-paused .sm-signal-bars i,
        .sm-paused .sm-center-ring,
        .sm-paused .sm-progress-fill {
          animation-play-state: paused !important;
        }

        .sm-source {
          position: absolute;
          z-index: 2;
          width: 124px;
          min-height: 66px;
          padding: 10px 11px;
          border: 1px solid #A4C0CF;
          border-radius: 9px;
          background: rgba(240, 248, 251, .94);
          box-shadow: 0 5px 16px rgba(39, 80, 103, .08);
          transition: border-color .25s ease, background .25s ease, box-shadow .25s ease;
        }

        .sm-source-active {
          border-color: #648A13;
          background: rgba(248, 252, 232, .98);
          box-shadow: 0 0 0 2px rgba(139, 182, 48, .14);
        }

        .sm-source-left {
          top: 12%;
          left: 6%;
        }

        .sm-source-right {
          top: 12%;
          right: 6%;
        }

        .sm-source-bottom {
          bottom: 17%;
          left: 50%;
          transform: translateX(-50%);
          width: 132px;
        }

        .sm-source-icon {
          display: inline-flex;
          vertical-align: middle;
          color: #648A13;
          margin-right: 6px;
        }

        .sm-source-label {
          display: inline;
          font-size: 9px;
          line-height: 1.4;
          font-weight: 750;
          color: #36566D;
          overflow-wrap: anywhere;
        }

        .sm-source-lines {
          display: grid;
          gap: 4px;
          margin-top: 8px;
        }

        .sm-source-lines i {
          display: block;
          height: 3px;
          width: 75%;
          border-radius: 4px;
          background: #A8C1CF;
        }

        .sm-source-lines i + i {
          width: 48%;
        }

        .sm-signal-bars {
          display: flex;
          align-items: end;
          gap: 3px;
          height: 13px;
          margin-top: 7px;
        }

        .sm-signal-bars i {
          width: 5px;
          height: 6px;
          background: #648A13;
          border-radius: 1px 1px 0 0;
          animation: smSignal .8s ease-in-out infinite alternate;
        }

        .sm-signal-bars i:nth-child(2n) {
          height: 10px;
        }

        .sm-signal-bars i:nth-child(3n) {
          height: 13px;
        }

        .sm-center-orbit {
          position: absolute;
          z-index: 3;
          top: 48%;
          left: 50%;
          width: 116px;
          height: 116px;
          transform: translate(-50%, -50%);
          display: grid;
          place-items: center;
        }

        .sm-center-ring {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(139, 182, 48, .55);
          border-radius: 50%;
          box-shadow: 0 0 0 12px rgba(139, 182, 48, .08), 0 0 0 24px rgba(139, 182, 48, .045);
          animation: smPulse 2.8s ease-in-out infinite;
        }

        .sm-center {
          width: 100px;
          height: 100px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 6px;
          border: 1.5px solid #8BB630;
          border-radius: 50%;
          background: #EAF5FA;
          color: #648A13;
          box-shadow: 0 7px 24px rgba(43, 91, 116, .12);
        }

        .sm-center span {
          font-size: 9px;
          font-weight: 900;
          letter-spacing: .8px;
        }

        .sm-visual-status {
          position: absolute;
          z-index: 4;
          right: 0;
          bottom: 0;
          left: 0;
          min-height: 42px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 11px 17px;
          background: rgba(226, 239, 246, .97);
          border-top: 1px solid #B9CFDC;
          color: #45657A;
          font-size: 9px;
          font-weight: 750;
        }

        .sm-status-icon {
          display: flex;
          color: #648A13;
        }

        .sm-progress-track {
          height: 4px;
          min-width: 25px;
          flex: 1;
          margin-left: 7px;
          border-radius: 10px;
          overflow: hidden;
          background: #C4D8E3;
        }

        .sm-progress-fill {
          width: 100%;
          height: 100%;
          transform-origin: left;
          background: #8BB630;
          animation: smProgress 2.6s linear infinite;
        }

        .sm-demo-footer {
          min-height: 55px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 11px 17px;
          border-top: 1px solid #B9CFDC;
          background: #E5F0F6;
        }

        .sm-footer-tagline {
          color: #627F91;
          font-size: 8px;
          font-weight: 850;
          letter-spacing: 1px;
        }

        .sm-play {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 32px;
          padding: 7px 11px;
          border: 1px solid #9DB8C8;
          border-radius: 5px;
          background: #F5FAFC;
          color: #294A60;
          font-size: 10px;
          font-weight: 800;
          transition: background .2s ease, border-color .2s ease;
        }

        .sm-play:hover {
          border-color: #648A13;
          background: #F5F9E9;
        }

        .sm-workflow {
          min-width: 0;
          min-height: 492px;
          display: flex;
          flex-direction: column;
          padding: 26px 27px;
          border: 1px solid #D1DFE5;
          border-radius: 15px;
          background: rgba(246, 250, 249, .94);
          box-shadow: 0 14px 36px rgba(35, 74, 98, .08);
        }

        .sm-workflow-label {
          margin: 0 0 18px;
          color: #648A13;
          font-size: 11px;
          font-weight: 850;
          letter-spacing: 1.5px;
          line-height: 1.5;
        }

        .sm-steps {
          display: grid;
          gap: 7px;
        }

        .sm-step {
          width: 100%;
          display: grid;
          grid-template-columns: 29px minmax(0, 1fr);
          align-items: start;
          gap: 9px;
          padding: 15px 13px;
          border: 1px solid transparent;
          border-radius: 9px;
          background: transparent;
          color: var(--sm-ink);
          text-align: left;
          transition: background .22s ease, border-color .22s ease, box-shadow .22s ease;
        }

        .sm-step:hover {
          background: rgba(255, 255, 255, .65);
        }

        .sm-step-active {
          border-color: #C1D3DD;
          background: #FFFFFF;
          box-shadow: 0 5px 15px rgba(35, 74, 98, .06);
        }

        .sm-step-number {
          padding-top: 1px;
          color: #7896A3;
          font-size: 16px;
          line-height: 1.3;
          font-weight: 900;
        }

        .sm-step-active .sm-step-number {
          color: #648A13;
        }

        .sm-step-title {
          display: block;
          color: #193A53;
          font-size: 14px;
          font-weight: 800;
          line-height: 1.45;
        }

        .sm-step-description {
          display: block;
          margin-top: 7px;
          color: #5B7283;
          font-size: 12px;
          font-weight: 450;
          line-height: 1.7;
        }

        .sm-explore-link {
          display: inline-flex;
          align-items: center;
          align-self: flex-start;
          gap: 7px;
          margin-top: auto;
          padding-top: 22px;
          color: #648A13;
          font-size: 12px;
          font-weight: 800;
          line-height: 1.5;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .sm-explore-link span {
          display: inline-flex;
          transition: transform .2s ease;
        }

        .sm-explore-link:hover span {
          transform: translateX(4px);
        }

        .sm-disclaimer {
          margin: 18px 0 0;
          color: #567184;
          font-size: 10px;
          font-weight: 500;
          line-height: 1.7;
        }

        @keyframes smOrbit {
          to { transform: rotate(360deg); }
        }

        @keyframes smPulse {
          0%, 100% { transform: scale(.96); opacity: .7; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        @keyframes smSignal {
          from { transform: scaleY(.55); opacity: .65; }
          to { transform: scaleY(1); opacity: 1; }
        }

        @keyframes smProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        @media (min-width: 1100px) {
          .sm-visual { height: 330px; }
          .sm-workflow { padding: 27px; }
        }

        @media (max-width: 900px) {
          .sm-heading-row {
            grid-template-columns: 1fr;
            gap: 13px;
          }

          .sm-intro {
            max-width: 590px;
          }

          .sm-content-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .sm-visual { height: 340px; }
          .sm-workflow { min-height: 0; }
          .sm-explore-link { margin-top: 20px; }
        }

        @media (max-width: 600px) {
          .solutions-motion {
            padding: 19px 0 22px;
          }

          .sm-container {
            width: calc(100% - 28px);
          }

          .sm-kicker {
            font-size: 10px;
            letter-spacing: 1.7px;
          }

          .sm-heading-row {
            margin-top: 15px;
          }

          .sm-heading {
            max-width: 450px;
            font-size: clamp(30px, 8.2vw, 39px);
            line-height: 1.12;
            letter-spacing: -1.4px;
          }

          .sm-intro {
            font-size: 13px;
            line-height: 1.75;
          }

          .sm-tabs {
            gap: 7px;
            margin-top: 23px;
          }

          .sm-tab {
            min-height: 39px;
            justify-content: flex-start;
            padding: 9px 10px;
            font-size: 10px;
            gap: 7px;
          }

          .sm-tab svg {
            width: 14px;
            height: 14px;
            flex-shrink: 0;
          }

          .sm-content-grid {
            margin-top: 19px;
            gap: 17px;
          }

          .sm-demo-card {
            border-radius: 12px;
          }

          .sm-demo-header {
            min-height: 45px;
            padding: 11px 12px;
          }

          .sm-demo-title {
            font-size: 10px;
          }

          .sm-illustrative {
            font-size: 8px;
          }

          .sm-visual {
            height: 300px;
          }

          .sm-source {
            width: 112px;
            min-height: 62px;
            padding: 9px;
          }

          .sm-source-left { left: 4%; }
          .sm-source-right { right: 4%; }

          .sm-source-label {
            font-size: 8px;
          }

          .sm-center-orbit {
            width: 103px;
            height: 103px;
            top: 48%;
          }

          .sm-center {
            width: 88px;
            height: 88px;
          }

          .sm-center svg {
            width: 32px;
            height: 32px;
          }

          .sm-source-bottom {
            bottom: 17%;
            width: 122px;
          }

          .sm-visual-status {
            min-height: 40px;
            padding: 10px 11px;
            gap: 7px;
            font-size: 8px;
          }

          .sm-progress-track {
            margin-left: 3px;
          }

          .sm-demo-footer {
            min-height: 49px;
            padding: 9px 11px;
          }

          .sm-footer-tagline {
            font-size: 7px;
            letter-spacing: .65px;
          }

          .sm-play {
            min-height: 30px;
            padding: 6px 9px;
            font-size: 9px;
          }

          .sm-workflow {
            padding: 21px 14px 18px;
            border-radius: 13px;
          }

          .sm-workflow-label {
            margin-bottom: 13px;
            font-size: 10px;
            letter-spacing: 1.1px;
          }

          .sm-steps {
            gap: 5px;
          }

          .sm-step {
            grid-template-columns: 25px minmax(0, 1fr);
            gap: 8px;
            padding: 13px 9px;
            border-radius: 8px;
          }

          .sm-step-number {
            font-size: 15px;
          }

          .sm-step-title {
            font-size: 13px;
            line-height: 1.45;
          }

          .sm-step-description {
            margin-top: 6px;
            font-size: 12px;
            line-height: 1.7;
          }

          .sm-explore-link {
            margin-top: 17px;
            padding-top: 5px;
            font-size: 11px;
          }

          .sm-disclaimer {
            margin-top: 14px;
            font-size: 10px;
          }
        }

        @media (max-width: 370px) {
          .sm-container { width: calc(100% - 22px); }
          .sm-heading { font-size: 29px; }
          .sm-tab { font-size: 9px; padding: 8px; }
          .sm-visual { height: 275px; }
          .sm-source { width: 99px; padding: 7px; }
          .sm-source-bottom { width: 112px; }
          .sm-center-orbit { width: 91px; height: 91px; }
          .sm-center { width: 79px; height: 79px; }
          .sm-center svg { width: 29px; height: 29px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .solutions-motion *,
          .solutions-motion *::before,
          .solutions-motion *::after {
            animation-duration: .01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: .01ms !important;
          }
        }
      `}</style>

      <div className="sm-container">
        <span className="sm-kicker">Solutions in motion</span>

        <div className="sm-heading-row">
          <h2 className="sm-heading">
            Explore how protection works.
          </h2>

          <p className="sm-intro">
            Follow an illustrative workflow from the first finding to a
            documented response.
          </p>
        </div>

        {/* Responsive solution tabs */}
        <div className="sm-tabs" role="group" aria-label="Choose a protection solution">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            const isActive = selectedIndex === index;

            return (
              <button
                key={item.title}
                type="button"
                onClick={() => selectSolution(index)}
                className={`sm-tab ${isActive ? "sm-tab-active" : ""}`}
                aria-pressed={isActive}
              >
                <Icon size={15} strokeWidth={1.8} />
                <span>{item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Animated illustration + workflow */}
        <div className="sm-content-grid">
          <div className="sm-demo-card">
            <div className="sm-demo-header">
              <div className="sm-demo-title">
                <SolutionIcon size={15} />
                <span>{solution.title}</span>
              </div>

              <span className="sm-illustrative">ILLUSTRATIVE</span>
            </div>

            <SolutionIllustration
              solution={solution}
              activeStep={activeStep}
              paused={paused}
            />

            <div className="sm-demo-footer">
              <span className="sm-footer-tagline">
                SCAN / DETECT / REMOVE / PROTECT
              </span>

              <button
                type="button"
                className="sm-play"
                onClick={() => setPaused((current) => !current)}
                aria-pressed={paused}
                aria-label={paused ? "Resume animation" : "Pause animation"}
              >
                {paused ? <Play size={13} /> : <Pause size={13} />}
                {paused ? "Play" : "Pause"}
              </button>
            </div>
          </div>

          <div className="sm-workflow">
            <p className="sm-workflow-label">{solution.label}</p>

            <div className="sm-steps">
              {solution.steps.map(([title, description], index) => {
                const isActive = activeStep === index;

                return (
                  <button
                    type="button"
                    key={`${solution.title}-${title}`}
                    className={`sm-step ${isActive ? "sm-step-active" : ""}`}
                    onClick={() => setActiveStep(index)}
                    aria-pressed={isActive}
                  >
                    <span className="sm-step-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span>
                      <span className="sm-step-title">{title}</span>
                      <span className="sm-step-description">
                        {description}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>

            <a
              className="sm-explore-link"
              href={
                selectedIndex === 0
                  ? "/solutions/live-streaming-protection"
                  : selectedIndex === 1
                  ? "/solutions/ott-vod-protection"
                  : selectedIndex === 2
                  ? "/solutions/website-app-monitoring"
                  : selectedIndex === 3
                  ? "/solutions/copyright-enforcement"
                  : selectedIndex === 4
                  ? "/solutions/brand-protection"
                  : selectedIndex === 5
                  ? "/solutions/piracy-intelligence"
                  : selectedIndex === 6
                  ? "/solutions/marketplace-counterfeit-monitoring"
                  : selectedIndex === 7
                  ? "/solutions/domain-impersonation-monitoring"
                  : "/solutions/social-media-video-protection"
              }
            >
              {solution.link}
              <span><ArrowRight size={15} /></span>
            </a>
          </div>
        </div>

        <p className="sm-disclaimer">
          Demonstration only. These animations use sample sources and do not
          display live detections or client results.
        </p>
      </div>
    </section>
  );
}
