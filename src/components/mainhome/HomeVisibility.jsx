import React, { useState } from "react";

const BRAND = "#ADD132";

const reportItems = [
  {
    label: "Verified URLs",
    description: "Separate from raw discoveries, ensuring every case is reviewed.",
    stat: "99.8%",
    badge: "Accuracy",
  },
  {
    label: "Enforcement actions",
    description: "Submission and escalation history tracked in real time.",
    stat: "24/7",
    badge: "Active",
  },
  {
    label: "Confirmed outcomes",
    description: "Removed, pending, or monitored repeat cases with clear metrics.",
    stat: "100+",
    badge: "Global",
  },
];

const coverageChannels = [
  { name: "Websites", type: "globe" },
  { name: "Search engines", type: "search" },
  { name: "Social platforms", type: "message" },
  { name: "Video platforms", type: "video" },
  { name: "Streaming websites", type: "stream" },
  { name: "Mobile applications", type: "phone" },
  { name: "App stores", type: "store" },
  { name: "Marketplaces", type: "cart" },
  { name: "Domains", type: "shield" },
];

function VisibilityIcon({ type, className = "h-5 w-5" }) {
  const icons = {
    download: (
      <>
        <path d="M12 3v12m-5-5 5 5 5-5" />
        <path d="M5 17v3h14v-3" />
      </>
    ),
    arrow: <path d="M4 10h12m-5-5 5 5-5 5" />,
    document: (
      <>
        <path d="M7 3h7l4 4v14H7z" />
        <path d="M14 3v5h4M10 12h5M10 16h5" />
      </>
    ),
    check: <path d="m5 12 4 4L19 6" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </>
    ),
    message: (
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    ),
    video: (
      <>
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="m22 8-6 4 6 4V8z" />
      </>
    ),
    stream: (
      <>
        <path d="M12 20h.01" />
        <path d="M2 8.82a15 15 0 0 1 20 0" />
        <path d="M5 12.859a10 10 0 0 1 14 0" />
        <path d="M8.5 16.429a5 5 0 0 1 7 0" />
      </>
    ),
    phone: (
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    ),
    store: (
      <>
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.79 1.1L21 9" />
        <path d="M3 9v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" />
        <path d="M3 9h18" />
      </>
    ),
    cart: (
      <>
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </>
    ),
    shield: (
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
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
      {icons[type]}
    </svg>
  );
}

export default function HomeVisibility() {
  const [activeTab, setActiveTab] = useState(0);

  const downloadSampleReport = () => {
    const report = [
      "TRACKOWLS — ILLUSTRATIVE PROTECTION REPORT",
      "==========================================",
      "",
      "Report type: Sample enforcement report",
      "Status: Illustrative sample only",
      "",
      "1. VERIFIED URLS",
      "Separate from raw discoveries.",
      "",
      "2. ENFORCEMENT ACTIONS",
      "Submission and escalation history.",
      "",
      "3. CONFIRMED OUTCOMES",
      "Removed, pending or still available.",
      "",
      "Note: This is a sample report and contains no live detection data.",
    ].join("\n");

    const blob = new Blob([report], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "TrackOwls-Sample-Protection-Report.txt";

    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home-visibility"
      className="relative isolate w-full overflow-hidden bg-white font-['Roboto',sans-serif] text-[#172219] py-10 lg:py-12 border-y border-slate-100"
    >
      {/* Background Soft Glow Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ADD132]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#172219]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Top Header Badge & Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 sm:pb-16 border-b border-slate-100">
          <div>
            <div className="mb-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F5F8F2] border border-[#DCE4D8]">
              <span className="h-2 w-2 rounded-full bg-[#ADD132] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#6D900B]">
                Visibility that matters
              </span>
            </div>

            <h2 className="text-[clamp(36px,4.5vw,60px)] font-extrabold leading-[1.06] tracking-[-1.5px] text-[#172219]">
              Understand the work. <br />
              <span className="text-[#6D900B]">Track the outcome.</span>
            </h2>
          </div>

          <p className="max-w-[480px] text-base leading-relaxed text-[#68746C] sm:text-lg">
            A useful report distinguishes detections from verified infringements, complaints, and confirmed removals across global networks.
          </p>
        </div>

        {/* Completely Redesigned Template: Dashboard Split Layout */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Interactive Metric Explorer Panel */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-[#172219] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#ADD132]/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#ADD132]/20 text-[#ADD132] text-[10px] font-bold uppercase tracking-widest mb-6">
                Interactive Intelligence
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Download Sample Enforcement Report
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Review case references, platforms, actions, and outcomes formatted in a clean, professional reporting structure.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="block text-xs font-bold text-white">Sample Report v2.4</span>
                <span className="text-[11px] text-slate-400">Plain text / PDF format</span>
              </div>

              <button
                type="button"
                onClick={downloadSampleReport}
                className="inline-flex min-h-[48px] items-center justify-center rounded-2xl bg-[#ADD132] px-6 py-3 text-xs font-bold text-[#172219] transition-all duration-300 hover:bg-[#9bc224] shadow-md gap-2 cursor-pointer"
              >
                <span>Download Sample</span>
                <VisibilityIcon type="download" className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Sleek Editorial Metric Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {reportItems.map((item, index) => {
              const isActive = activeTab === index;
              return (
                <div
                  key={item.label}
                  onClick={() => setActiveTab(index)}
                  className={`cursor-pointer rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? "bg-[#F5F8F2] border-[#ADD132] shadow-md scale-[1.01]"
                      : "bg-white border-slate-200 hover:border-[#ADD132]/50 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-5">
                    <span className="text-xs font-mono font-bold text-[#6D900B] px-3 py-2 rounded-xl bg-white border border-[#DCE4D8] shrink-0">
                      0{index + 1}
                    </span>
                    <div>
                      <div className="flex items-center gap-3">
                        <h4 className="text-lg font-bold text-[#172219]">
                          {item.label}
                        </h4>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 px-2 py-0.5 rounded bg-slate-100">
                          {item.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-xs sm:text-sm text-[#68746C] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col items-end shrink-0 pl-4">
                    <span className="text-xl font-extrabold text-[#6D900B]">{item.stat}</span>
                    <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Verified</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Digital Coverage Section */}
        <div className="mt-24 pt-16 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#6D900B]">
              Comprehensive Protection
            </span>
            <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold text-[#172219]">
              Across the channels that matter to your rights.
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#68746C]">
              Coverage and available enforcement routes are agreed during scoping.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {coverageChannels.map((channel) => (
              <div
                key={channel.name}
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-[#F5F8F2] border border-[#DCE4D8] hover:border-[#ADD132] hover:bg-white transition-all duration-300 text-center shadow-xs group"
              >
                <div className="h-10 w-10 rounded-xl bg-white border border-[#DCE4D8] flex items-center justify-center text-[#6D900B] group-hover:border-[#ADD132] group-hover:bg-[#F5F8F2] mb-3 transition-colors">
                  <VisibilityIcon type={channel.type} className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold text-[#172219]">{channel.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}