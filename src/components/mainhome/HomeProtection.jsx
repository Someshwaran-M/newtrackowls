
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
    { left: "24%", top: "34%" },
    { left: "48%", top: "25%" },
    { left: "69%", top: "43%" },
    { left: "81%", top: "63%" },
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

function Icon({ name, className = "h-5 w-5" }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  const icons = {
    monitor: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
        <path d="m12 12 6-6" />
      </>
    ),
    detect: (
      <>
        <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
        <circle cx="12" cy="12" r="3" />
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
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    report: <path d="M4 19V5M4 19h16M7 14l4-4 3 2 5-6" />,
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
      className={className}
      aria-hidden="true"
      {...common}
    >
      {icons[name]}
    </svg>
  );
}

function WorldMap({ activeStage }) {
  const currentPins = pins[activeStage] || pins[0];

  return (
    <div className="group/map relative min-h-[260px] overflow-hidden bg-[#15334E] sm:min-h-[320px] lg:min-h-[360px]">
      <img
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=85"
        alt="Illustrative world map showing sample monitoring locations"
        className="absolute inset-0 h-full w-full object-cover opacity-75 grayscale transition-transform duration-700 group-hover/map:scale-[1.02]"
      />

      <div className="absolute inset-0 bg-[#15334E]/45" />

      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,182,48,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(139,182,48,.35) 1px,transparent 1px)",
          backgroundSize: "21px 21px",
        }}
      />

      {currentPins.map((pin, index) => (
        <div
          key={`${activeStage}-${index}`}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
          style={{ left: pin.left, top: pin.top }}
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#8BB630]/30" />
          <span className="relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#8BB630] text-[10px] font-bold text-[#15334E] shadow-[0_0_0_5px_rgba(139,182,48,.2)] sm:h-8 sm:w-8">
            {index + 1}
          </span>
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 border-t border-white/10 bg-[#15334E]/95 px-4 py-3 text-[10px] text-white sm:px-5">
        <Icon name="monitor" className="h-4 w-4 shrink-0 text-[#8BB630]" />
        <span>TrackOwls · Discovery to enforcement</span>
        <span className="ml-auto text-[9px] text-white/60">
          ILLUSTRATIVE
        </span>
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
        const nextStage = Math.min(
          Math.floor((next / 120) * stages.length),
          stages.length - 1
        );

        setActiveStage(nextStage);

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
      className="relative w-full overflow-hidden bg-[#FFFFFF] font-['Roboto',Arial,sans-serif] text-[#15334E]"
    >
      <div className="mx-auto max-w-[1420px] px-5 py-10 sm:px-7 sm:py-12 lg:px-10 lg:py-12 xl:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_330px] lg:items-end lg:gap-10">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#617D17]">
              Explore the protection workflow
            </p>

            <h2 className="m-0 max-w-[760px] text-[36px] font-bold leading-[1.08] tracking-[-1.2px] text-[#15334E] sm:text-[48px] lg:text-[54px]">
              Follow a finding.
              <span className="block text-[#7C9D18]">
                See the path to action.
              </span>
            </h2>
          </div>

          <p className="m-0 max-w-[330px] text-[13px] leading-[1.9] text-[#45637F] lg:justify-self-end">
            A two-minute guided demonstration. Select a highlight to explore a
            sample case, or move through the stages at your own pace.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-4 mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex w-fit items-center gap-2 border border-[#DCE6D3] bg-white px-3 py-2 text-[10px] text-[#45637F]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8BB630]" />
            Illustrative simulation · No live detections
          </span>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={startWalkthrough}
              disabled={isPlaying}
              className="inline-flex min-h-10 items-center justify-center gap-2 bg-[#648A13] px-4 py-2 text-[11px] font-bold text-white transition-colors hover:bg-[#4F7010] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Icon name="play" className="h-3 w-3" />
              {isPlaying ? "Walkthrough running" : "Start 2-minute walkthrough"}
            </button>

            <button
              type="button"
              onClick={resetWalkthrough}
              className="inline-flex min-h-10 items-center justify-center gap-2 border border-[#D3E0E8] bg-white px-4 py-2 text-[11px] font-medium text-[#15334E] transition-colors hover:border-[#8BB630] hover:bg-[#F5F8F2]"
            >
              <Icon name="reset" className="h-3 w-3" />
              Reset
            </button>

            <span
              aria-live="off"
              className="pl-1 text-[11px] tabular-nums text-[#45637F]"
            >
              {formatTime(elapsed)} / 02:00
            </span>
          </div>
        </div>

        {/* Main case panel */}
        <div className="grid overflow-hidden border border-[#DCE6D3] bg-white lg:grid-cols-[1.8fr_1fr]">
          <WorldMap activeStage={activeStage} />

          <div className="flex min-w-0 flex-col p-5 sm:p-6 lg:p-7">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#617D17]">
              {currentStage.eyebrow}
            </p>

            <h3
              key={currentStage.number}
              className="m-0 text-[23px] font-bold leading-tight tracking-[-0.5px] text-[#15334E] sm:text-[26px]"
            >
              {currentStage.title}
            </h3>

            <div className="mt-5 divide-y divide-[#E4EAE0] border-y border-[#E4EAE0]">
              <div className="flex items-start justify-between gap-4 py-3">
                <span className="text-[12px] text-[#687F91]">Asset</span>
                <span className="text-right text-[12px] font-medium text-[#15334E]">
                  {currentStage.asset}
                </span>
              </div>

              <div className="flex items-start justify-between gap-4 py-3">
                <span className="text-[12px] text-[#687F91]">Channel</span>
                <span className="text-right text-[12px] font-medium text-[#15334E]">
                  {currentStage.channel}
                </span>
              </div>
            </div>

            <p className="mb-5 mt-4 text-[13px] leading-[1.85] text-[#45637F]">
              {currentStage.description}
            </p>

            <div className="mt-auto flex items-center gap-2 border-t border-[#E4EAE0] pt-4 text-[#648A13]">
              <Icon name={stageIcons[activeStage]} className="h-4 w-4" />
              <span className="text-[12px] font-medium">
                {currentStage.name}
              </span>
              <span className="ml-auto text-[10px] uppercase tracking-[0.12em] text-[#687F91]">
                Stage {currentStage.number}
              </span>
            </div>

            <p className="mb-0 mt-3 text-[10px] leading-[1.7] text-[#687F91]">
              Map positions are illustrative and do not identify actual
              infringers or their locations.
            </p>
          </div>
        </div>

        {/* Workflow stages */}
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {stages.map((stage, index) => {
            const isActive = activeStage === index;

            return (
              <button
                key={stage.number}
                type="button"
                onClick={() => selectStage(index)}
                aria-pressed={isActive}
                className={`group flex min-h-[48px] items-center gap-3 border px-3 py-3 text-left transition duration-200 ${
                  isActive
                    ? "border-[#15334E] bg-[#15334E] text-white"
                    : "border-[#DCE6D3] bg-white text-[#45637F] hover:border-[#8BB630] hover:bg-[#F5F8F2]"
                }`}
              >
                <span
                  className={`text-[11px] font-bold ${
                    isActive ? "text-[#B9D96C]" : "text-[#648A13]"
                  }`}
                >
                  {stage.number}
                </span>

                <span className="text-[12px] font-medium">{stage.name}</span>

                <span className="ml-auto">
                  <Icon
                    name={stageIcons[index]}
                    className={`h-4 w-4 ${
                      isActive
                        ? "text-[#B9D96C]"
                        : "text-[#7C9D18] opacity-80"
                    }`}
                  />
                </span>
              </button>
            );
          })}
        </div>

        {/* Bottom stage details */}
        <div className="mt-3 grid gap-6 border-t border-[#DCE6D3] pt-5 sm:pt-6 lg:grid-cols-[1.65fr_1fr] lg:gap-10">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F0F5E6] text-[11px] font-bold text-[#648A13]">
                {currentStage.number}
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#617D17]">
                Workflow overview
              </span>
            </div>

            <h3 className="m-0 text-[22px] font-bold tracking-[-0.4px] text-[#15334E] sm:text-[24px]">
              {currentStage.bottomTitle}
            </h3>

            <p className="mb-0 mt-3 max-w-[720px] text-[13px] leading-[1.9] text-[#45637F]">
              {currentStage.bottomDescription}
            </p>
          </div>

          <div className="border-t border-[#DCE6D3] pt-4 sm:pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#617D17]">
              Case record
            </p>

            <p className="m-0 text-[13px] leading-[1.9] text-[#45637F]">
              {currentStage.record}
            </p>

            <a
              href="#solutions"
              className="group mt-4 inline-flex items-center gap-2 border-b border-[#A9C46E] pb-1.5 text-[12px] font-medium text-[#648A13] transition-colors hover:border-[#45637F] hover:text-[#45637F]"
            >
              {currentStage.action}
              <Icon
                name="arrow"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
