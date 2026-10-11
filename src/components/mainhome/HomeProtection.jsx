import React, { useEffect, useState } from "react";

const BRAND = "#ADD132";

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
      "Review the available evidence and distinguish potential matches from verified cases.",
    bottomTitle: "Verify the evidence",
    bottomDescription:
      "Analysts review the suspected material against reference assets and available context before determining the appropriate next step.",
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

/* Four independent pins. Positions change for each workflow stage. */
const pinLayouts = [
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
  const paths = {
    radar: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
        <path d="m12 12 6-6" />
      </>
    ),
    scan: (
      <>
        <path d="M4 8V5a1 1 0 0 1 1-1h3" />
        <path d="M16 4h3a1 1 0 0 1 1 1v3" />
        <path d="M20 16v3a1 1 0 0 1-1 1h-3" />
        <path d="M8 20H5a1 1 0 0 1-1-1v-3" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    target: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    chart: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <path d="m7 14 4-4 3 2 5-6" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),
    play: <path d="m8 5 12 7-12 7z" />,
    reset: (
      <>
        <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
        <path d="M3 3v5h5" />
      </>
    ),
    file: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h8" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function WorldMap({ activeStage = 0 }) {
  const currentPins = pinLayouts[activeStage] || pinLayouts[0];
  const stageName = stages[activeStage]?.name || stages[0].name;

  return (
    <div className="relative isolate min-h-[340px] overflow-hidden bg-[#101A14] sm:min-h-[410px] lg:min-h-[500px]">
      {/* Atmospheric map background */}
      <img
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=85"
        alt="Illustrative world map for digital content protection"
        className="absolute inset-0 h-full w-full object-cover opacity-40 grayscale"
      />

      <div className="absolute inset-0 bg-gradient-to-br from-[#101A14]/65 via-[#101A14]/35 to-[#101A14]/80" />

      {/* Subtle technical grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(173,209,50,.45) 1px, transparent 1px), linear-gradient(90deg, rgba(173,209,50,.45) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Map heading */}
      <div className="absolute left-5 right-5 top-5 z-20 flex items-start justify-between gap-3 sm:left-7 sm:right-7 sm:top-7">
        <div>
          <p className="m-0 text-[9px] font-bold uppercase tracking-[0.25em] text-[#ADD132]">
            TrackOwls intelligence
          </p>
          <p className="mb-0 mt-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
            Global watch
          </p>
          <p className="m-0 mt-1 text-xs text-white/50">
            Illustrative monitoring environment
          </p>
        </div>

        <div className="flex items-center gap-2 border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ADD132]/60" />
            <span className="relative h-2 w-2 rounded-full bg-[#ADD132]" />
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-white/80">
            {stageName}
          </span>
        </div>
      </div>

      {/* Four pins only — no routes or connecting lines */}
      {currentPins.map((pin, index) => (
        <div
          key={`${activeStage}-${index}`}
          className="absolute z-10 -translate-x-1/2 -translate-y-1/2 animate-[pinEnter_.55s_ease-out_both]"
          style={{
            left: pin.left,
            top: pin.top,
            animationDelay: `${index * 90}ms`,
          }}
        >
          <span className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-[#ADD132]/20" />
          <span className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#ADD132]/60" />

          <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#DDF39B] bg-[#ADD132] text-[10px] font-extrabold text-[#152019] shadow-[0_0_25px_rgba(173,209,50,.35)] transition-transform duration-300 hover:scale-125 sm:h-9 sm:w-9">
            {String(index + 1).padStart(2, "0")}
          </div>
        </div>
      ))}

      {/* Map coordinates decoration */}
      <div className="absolute bottom-[76px] left-5 z-10 flex items-center gap-2 text-[9px] uppercase tracking-[0.16em] text-white/45 sm:bottom-[88px] sm:left-7">
        <span className="h-1 w-1 rounded-full bg-[#ADD132]" />
        Four illustrative markers
      </div>

      {/* Map bottom status strip */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/10 bg-[#101A14]/90 px-5 py-4 backdrop-blur-xl sm:px-7 sm:py-5">
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#ADD132]/25 bg-[#ADD132]/10 text-[#ADD132]">
              <Icon name="radar" className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <p className="m-0 text-[9px] font-bold uppercase tracking-[0.17em] text-white/40">
                Active workflow
              </p>
              <p className="m-0 mt-1 truncate text-sm font-semibold text-white">
                {stageName}
              </p>
            </div>
          </div>

          <div className="shrink-0 text-right">
            <p className="m-0 text-xl font-semibold tabular-nums text-[#ADD132]">
              04
            </p>
            <p className="m-0 mt-0.5 text-[8px] font-bold uppercase tracking-[0.15em] text-white/40">
              Pins active
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pinEnter {
          from {
            opacity: 0;
            transform: translate(-50%, -35%) scale(.55);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-ping {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function HomeProtection() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);

  const currentStage = stages[activeStage];

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

        if (next >= 120) {
          setIsPlaying(false);
        }

        return next;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

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
    setActiveStage(index);
    setElapsed(Math.floor((index / stages.length) * 120));
  };

  const stageIcons = ["radar", "scan", "shield", "target", "chart"];

  return (
    <section
      id="home-protection"
      className="relative isolate w-full overflow-hidden bg-white font-['Roboto',sans-serif] text-[#152019]"
    >
      {/* Premium ambient background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full bg-[#ADD132]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-48 bottom-0 h-[400px] w-[400px] rounded-full bg-[#D9E6C7]/60 blur-[110px]" />

      <div className="relative mx-auto max-w-[1450px] px-5 py-4 sm:px-8 sm:py-6 lg:px-14 lg:py-10">
        {/* Editorial header */}
        <div className="mb-10 grid gap-7 lg:mb-14 lg:grid-cols-[1.3fr_.7fr] lg:items-end lg:gap-12">
          <div>
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#8EAF20]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#617D17]">
                Explore the protection workflow
              </span>
            </div>

            <h2 className="m-0 max-w-[850px] text-[36px] font-bold leading-[1.06] tracking-[-0.055em] sm:text-[48px] lg:text-[64px]">
              From first signal
              <span className="block text-[#7C9D18]">
                to informed action.
              </span>
            </h2>
          </div>

          <div className="max-w-[420px] lg:justify-self-end">
            <div className="mb-4 h-px w-full bg-[#D7DECF]" />
            <p className="m-0 text-sm leading-[1.9] text-[#68746C] sm:text-base">
              A two-minute guided demonstration. Select a highlight to explore
              a sample case, or move through the stages at your own pace.
            </p>
            <div className="mt-5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#6D900B]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ADD132]" />
              Monitor. Verify. Protect.
            </div>
          </div>
        </div>

        {/* Walkthrough control bar */}
        <div className="mb-5 flex flex-col gap-4 border-y border-[#D8DFD1] py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-[#9DBD2B]" />
            <div>
              <p className="m-0 text-xs font-semibold text-[#263329]">
                Illustrative simulation
              </p>
              <p className="m-0 mt-1 text-[11px] text-[#7A857A]">
                No live detections · Sample workflow
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={startWalkthrough}
              disabled={isPlaying}
              className="inline-flex min-h-11 items-center justify-center gap-2 bg-[#ADD132] px-5 py-3 text-xs font-bold text-[#152019] transition duration-300 hover:bg-[#97BB20] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Icon name="play" className="h-4 w-4" />
              {isPlaying ? "Walkthrough running" : "Start walkthrough"}
            </button>

            <button
              type="button"
              onClick={resetWalkthrough}
              className="inline-flex min-h-11 items-center justify-center gap-2 border border-[#D8DFD1] bg-white px-4 py-3 text-xs font-semibold text-[#344137] transition duration-300 hover:border-[#9DBD2B] hover:bg-[#F8FAF4]"
            >
              <Icon name="reset" className="h-4 w-4" />
              Reset
            </button>

            <div className="ml-1 flex min-h-11 items-center gap-2 border-l border-[#D8DFD1] pl-4">
              <span className="text-sm font-bold tabular-nums text-[#263329]">
                {formatTime(elapsed)}
              </span>
              <span className="text-xs text-[#8A9487]">/ 02:00</span>
            </div>
          </div>
        </div>

        {/* Main premium case experience */}
        <div className="grid border border-[#D8DFD1] bg-white lg:grid-cols-[1.35fr_.85fr]">
          <WorldMap activeStage={activeStage} />

          {/* Case information */}
          <div className="flex min-w-0 flex-col px-5 py-7 sm:px-8 sm:py-9 lg:px-9 lg:py-10">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#779719]">
                {currentStage.eyebrow}
              </span>
              <span className="text-3xl font-light tracking-[-0.06em] text-[#D5DDCC]">
                {currentStage.number}
              </span>
            </div>

            <div key={currentStage.number} className="animate-[caseReveal_.4s_ease-out_both]">
              <h3 className="mb-5 mt-5 text-[27px] font-bold leading-tight tracking-[-0.04em] text-[#172219] sm:text-[32px]">
                {currentStage.title}
              </h3>

              <p className="mb-7 max-w-[420px] text-sm leading-[1.9] text-[#68746C]">
                {currentStage.description}
              </p>

              <div className="mb-7 border-y border-[#E3E8DE]">
                <div className="grid grid-cols-[80px_1fr] gap-3 border-b border-[#E3E8DE] py-4">
                  <span className="text-xs text-[#849083]">Asset</span>
                  <span className="text-right text-xs font-semibold text-[#29372C] sm:text-sm">
                    {currentStage.asset}
                  </span>
                </div>
                <div className="grid grid-cols-[80px_1fr] gap-3 py-4">
                  <span className="text-xs text-[#849083]">Channel</span>
                  <span className="text-right text-xs font-semibold text-[#29372C] sm:text-sm">
                    {currentStage.channel}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-[#F0F5E5] text-[#6D900B]">
                  <Icon name={stageIcons[activeStage]} className="h-5 w-5" />
                </div>
                <div>
                  <p className="m-0 text-[9px] font-bold uppercase tracking-[0.17em] text-[#9AA394]">
                    Current stage
                  </p>
                  <p className="m-0 mt-1 text-sm font-bold text-[#253329]">
                    {currentStage.name}
                  </p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {stages.map((stage, index) => (
                    <span
                      key={stage.number}
                      className={`h-1.5 transition-all duration-300 ${
                        index === activeStage
                          ? "w-6 bg-[#ADD132]"
                          : "w-1.5 bg-[#DCE3D5]"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className="mb-0 mt-8 border-t border-[#E3E8DE] pt-5 text-[11px] leading-[1.8] text-[#8A9487]">
              Map positions are illustrative and do not identify actual
              infringers or their locations.
            </p>
          </div>
        </div>

        {/* Stage navigator */}
        <div className="mt-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#75846B]">
              Navigate the process
            </p>
            <p className="m-0 text-[10px] text-[#929B8D]">
              Select a stage to explore
            </p>
          </div>

          <div className="grid grid-cols-1 border-y border-[#D8DFD1] sm:grid-cols-2 lg:grid-cols-5">
            {stages.map((stage, index) => {
              const isActive = activeStage === index;

              return (
                <button
                  key={stage.number}
                  type="button"
                  onClick={() => selectStage(index)}
                  aria-pressed={isActive}
                  className={`group relative flex min-h-[88px] items-center gap-3 border-b border-[#D8DFD1] px-4 py-4 text-left transition-all duration-300 sm:border-r sm:last:border-r-0 lg:border-b-0 ${
                    isActive
                      ? "bg-[#172219] text-white"
                      : "bg-white text-[#263329] hover:bg-[#F0F5E7]"
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-x-0 top-0 h-[3px] bg-[#ADD132]" />
                  )}

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center transition-colors duration-300 ${
                      isActive
                        ? "bg-[#ADD132] text-[#152019]"
                        : "bg-[#F0F4E9] text-[#6D900B] group-hover:bg-[#E6EFD2]"
                    }`}
                  >
                    <Icon name={stageIcons[index]} className="h-[18px] w-[18px]" />
                  </span>

                  <span className="min-w-0">
                    <span
                      className={`block text-[9px] font-bold tracking-[0.16em] ${
                        isActive ? "text-[#ADD132]" : "text-[#8A9A76]"
                      }`}
                    >
                      STEP {stage.number}
                    </span>
                    <span className="mt-1 block text-sm font-semibold">
                      {stage.name}
                    </span>
                  </span>

                  <span
                    className={`ml-auto hidden text-xs transition-transform duration-300 group-hover:translate-x-1 sm:block ${
                      isActive ? "text-[#ADD132]" : "text-[#A0AA9A]"
                    }`}
                  >
                    →
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Stage details */}
        <div className="mt-12 grid gap-8 border-t border-[#D8DFD1] pt-8 sm:mt-14 sm:pt-10 lg:grid-cols-[1.4fr_.6fr] lg:gap-14">
          <div key={`${currentStage.number}-details`} className="animate-[caseReveal_.4s_ease-out_both]">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-[#ADD132]" />
              <p className="m-0 text-[10px] font-bold uppercase tracking-[0.2em] text-[#718D1B]">
                {currentStage.name} / Protection workflow
              </p>
            </div>

            <h3 className="m-0 text-[25px] font-bold tracking-[-0.04em] text-[#172219] sm:text-[32px]">
              {currentStage.bottomTitle}
            </h3>

            <p className="mb-0 mt-4 max-w-[740px] text-sm leading-[2] text-[#68746C]">
              {currentStage.bottomDescription}
            </p>
          </div>

          <div className="border-t border-[#D8DFD1] pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center bg-[#EAF1D9] text-[#6D900B]">
                <Icon name="file" className="h-5 w-5" />
              </div>
              <div>
                <p className="m-0 text-[9px] font-bold uppercase tracking-[0.2em] text-[#8A9487]">
                  Case record
                </p>
                <p className="m-0 mt-1 text-sm font-bold text-[#263329]">
                  Evidence & documentation
                </p>
              </div>
            </div>

            <p className="mb-6 mt-4 text-sm leading-[1.9] text-[#68746C]">
              {currentStage.record}
            </p>

            <a
              href="/how-it-works"
              className="group inline-flex items-center gap-3 border-b border-[#B5C19F] pb-2 text-sm font-bold text-[#536F13] transition-colors duration-300 hover:border-[#ADD132] hover:text-[#172219]"
            >
              {currentStage.action}
              <Icon
                name="arrow"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes caseReveal {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-ping,
          .animate-\\[caseReveal_\\.4s_ease-out_both\\],
          .animate-\\[pinEnter_\\.55s_ease-out_both\\] {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default HomeProtection;