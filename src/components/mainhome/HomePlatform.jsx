import React, { useState } from "react";

const navigation = [
  { id: "dashboard", label: "Executive Dashboard", icon: "layers" },
  { id: "scan", label: "Live Surveillance", icon: "scan" },
  { id: "evidence", label: "Evidence Vault", icon: "file" },
  { id: "reports", label: "Intelligence Reports", icon: "chart" },
];

const cases = [
  {
    id: "TW-1042",
    description: "Sample film · Release window protection",
    channel: "Global Web",
    status: "Verified",
    tone: "green",
  },
  {
    id: "TW-1043",
    description: "Sample event · Live broadcast stream",
    channel: "Video Feed",
    status: "Submitted",
    tone: "amber",
  },
  {
    id: "TW-1044",
    description: "Sample brand · Authorized logo misuse",
    channel: "Marketplace",
    status: "In Review",
    tone: "blue",
  },
];

const stats = [
  { label: "Monitored assets", value: "2,480", change: "+12.8% global expansion" },
  { label: "Evidence verified", value: "186", change: "+8.4% court-ready" },
  { label: "Cases in review", value: "24", change: "Real-time active" },
];

function Icon({ name, size = 18, className = "" }) {
  const paths = {
    layers: (
      <>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 12 9 5 9-5M3 16l9 5 9-5" />
      </>
    ),
    scan: (
      <>
        <path d="M8 3H5a2 2 0 0 0-2 2v3m13-5h3a2 2 0 0 1 2 2v3M3 16v3a2 2 0 0 0 2 2h3m8 0h3a2 2 0 0 0 2-2v-3" />
        <circle cx="12" cy="12" r="4" />
        <path d="M12 10v4m-2-2h4" />
      </>
    ),
    file: (
      <>
        <path d="M7 3h7l5 5v13H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
        <path d="M14 3v6h5M9 14h6m-6 4h6" />
      </>
    ),
    chart: (
      <>
        <path d="M3 3v18h18M7 14l4-4 4 3 5-7" />
      </>
    ),
    shield: (
      <>
        <path d="M12 3 20 6v5c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-3Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    lock: (
      <>
        <rect x="5" y="10" width="14" height="11" rx="2" />
        <path d="M8 10V7a4 4 0 0 1 8 0v3" />
      </>
    ),
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    check: <path d="m5 12 4 4L19 6" />,
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] || paths.layers}
    </svg>
  );
}

function StatusBadge({ tone, children }) {
  const styles = {
    green: "bg-[#F4F8EB] text-[#527000] border border-[#D5E6B5]",
    amber: "bg-amber-50 text-amber-800 border border-amber-200",
    blue: "bg-sky-50 text-sky-800 border border-sky-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 py-1 text-[11px] font-medium ${
        styles[tone] || styles.green
      }`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

function DashboardPanel() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs transition duration-300 hover:border-[#648C13] hover:shadow-md"
          >
            <p className="text-[11px] uppercase tracking-wider text-slate-500 font-bold">
              {stat.label}
            </p>
            <p className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
              {stat.value}
            </p>
            <p className="mt-2 text-xs font-semibold text-[#648C13]">
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
        <div className="mb-5 flex items-center justify-between gap-4">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Recent enforcement cases
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">Live synchronized queue records</p>
          </div>
          <span className="rounded-lg bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">Sample records</span>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200">
          <div className="min-w-[500px]">
            <div className="grid grid-cols-[1.5fr_1fr_auto] gap-4 bg-slate-50 px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-500 border-b border-slate-200">
              <span>Case Reference / Asset</span>
              <span>Enforcement Channel</span>
              <span>Status</span>
            </div>

            {cases.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[1.5fr_1fr_auto] items-center gap-4 border-b last:border-b-0 border-slate-100 px-5 py-4 transition hover:bg-slate-50/80"
              >
                <div className="min-w-0">
                  <p className="text-xs font-bold text-slate-900">
                    {item.id}
                  </p>
                  <p className="mt-0.5 truncate text-xs text-slate-500">
                    {item.description}
                  </p>
                </div>
                <span className="text-xs font-semibold text-slate-700">
                  {item.channel}
                </span>
                <StatusBadge tone={item.tone}>{item.status}</StatusBadge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ScanPanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center min-h-[300px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(100,140,19,0.06)_0,transparent_70%)]" />
        
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#648C13] text-white shadow-xl shadow-[#648C13]/20">
          <Icon name="scan" size={30} />
        </div>

        <p className="mt-6 text-base font-bold text-slate-900">
          Global Monitoring Engine Active
        </p>
        <p className="mt-1 text-xs text-slate-500">
          Real-time surveillance & automated streaming detection
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#648C13]/10 px-4 py-1.5 text-xs font-semibold text-[#648C13] border border-[#648C13]/30">
          <span className="h-2 w-2 animate-ping rounded-full bg-[#648C13]" />
          Surveilling 2,480 global endpoints continuously
        </div>
      </div>

      <div className="space-y-4 flex flex-col justify-between">
        {[
          ["01", "Asset discovery", "Identify monitored assets across global digital platforms and networks."],
          ["02", "Content matching", "Review potential matches using advanced visual and acoustic signatures."],
          ["03", "Threat assessment", "Evaluate findings, confirm infringement rights, and trigger workflows."],
        ].map(([num, title, desc], i) => (
          <div
            key={num}
            className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold ${
                i === 0
                  ? "bg-[#648C13] text-white"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {num}
            </span>
            <div>
              <p className="text-sm font-bold text-slate-900">
                {title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-slate-500">
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EvidencePanel() {
  return (
    <div className="space-y-4">
      {[
        ["Certified evidence package", "TW-1042 · Release window infringement", "Verified", "green"],
        ["Platform submission record", "TW-1043 · Live broadcast interception", "Submitted", "amber"],
        ["Escalation review history", "TW-1044 · Marketplace trademark misuse", "In Review", "blue"],
      ].map(([title, desc, status, tone]) => (
        <div
          key={title}
          className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xs transition hover:border-[#648C13]/50"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#648C13]/10 text-[#648C13]">
            <Icon name="file" size={22} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-bold text-slate-900">{title}</p>
            <p className="mt-1 text-xs text-slate-500">{desc}</p>
          </div>
          <StatusBadge tone={tone}>{status}</StatusBadge>
        </div>
      ))}
    </div>
  );
}

function ReportsPanel() {
  const bars = [45, 68, 55, 88, 62, 96, 78, 100, 72, 90, 65, 94];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-2xs">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Monitoring Activity & Intelligence Analytics
          </p>
          <p className="mt-1 text-xs text-slate-500">
            Enforcement distribution and confirmed outcomes over time
          </p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#648C13]/10 text-[#648C13]">
          <Icon name="chart" size={22} />
        </div>
      </div>

      <div className="mt-10 flex h-48 items-end gap-3">
        {bars.map((height, i) => (
          <div key={i} className="flex h-full flex-1 items-end">
            <div
              className="report-bar w-full rounded-t-lg bg-gradient-to-t from-[#52750E] to-[#648C13] transition hover:brightness-110"
              style={{
                height: `${height}%`,
                animationDelay: `${i * 50}ms`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 pt-6 border-t border-slate-100">
        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Verified Evidence Vault</p>
          <p className="mt-2 text-3xl font-extrabold text-slate-900">186</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Active Case Reviews</p>
          <p className="mt-2 text-3xl font-extrabold text-slate-900">24</p>
        </div>
      </div>
    </div>
  );
}

export default function HomePlatform() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const active = navigation.find((item) => item.id === activeTab);

  return (
    <section
      id="home-platform"
      className="relative isolate w-full overflow-hidden bg-white font-['Roboto',sans-serif] text-slate-900 py-4 lg:py-6 border-t border-slate-100"
    >
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-[#648C13]/5 blur-[180px]" />

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6">
            <div className="mb-4 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#F5F8F2] border border-[#DCE4D8]">
              <span className="h-2 w-2 rounded-full bg-[#648C13] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#648C13]">
                The TrackOwls Platform Architecture
              </span>
            </div>

            <h2 className="text-[clamp(40px,5vw,68px)] font-extrabold leading-[1.04] tracking-[-1.5px] text-slate-900">
              See the threat. <br />
              <span className="text-[#648C13]">Own the response.</span>
            </h2>
          </div>

          <div className="lg:col-span-6 lg:border-l lg:border-slate-200 lg:pl-12">
            <p className="text-lg leading-relaxed text-slate-600">
              Bring digital asset monitoring, certified evidence management, automated case workflows, and executive enforcement reporting into one unified protection environment.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/platform"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#648C13] px-8 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#52750E] shadow-lg shadow-[#648C13]/20 gap-2.5"
              >
                <span>Explore the platform</span>
                <Icon name="arrow" size={18} />
              </a>

              <a
                href="/contact"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-3 text-sm font-bold text-slate-900 transition-all duration-300 hover:border-[#648C13] hover:bg-slate-50 gap-2.5 shadow-2xs"
              >
                <span>Request a live demo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Highlights Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "layers",
              title: "Connected case management",
              desc: "Keep findings, asset inventories, and response workflows securely synchronized across global teams.",
            },
            {
              icon: "file",
              title: "Traceable evidence",
              desc: "Maintain an indisputable chronological record of discoveries, verification checks, and actions.",
            },
            {
              icon: "chart",
              title: "Actionable reporting",
              desc: "Turn complex case activity into clean, organized enterprise intelligence for stakeholders.",
            },
          ].map((feat) => (
            <div
              key={feat.title}
              className="rounded-3xl border border-slate-200 bg-[#FAFAFC] p-8 transition-all duration-300 hover:border-[#648C13]/60 hover:bg-white hover:shadow-xl"
            >
              <div className="h-14 w-14 rounded-2xl bg-[#648C13]/10 border border-[#648C13]/20 flex items-center justify-center text-[#648C13] mb-6">
                <Icon name={feat.icon} size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{feat.title}</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Executive Interactive Command Console */}
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-3 w-3 rounded-full bg-red-400" />
              <div className="flex h-3 w-3 rounded-full bg-yellow-400" />
              <div className="flex h-3 w-3 rounded-full bg-green-400" />
              <span className="ml-3 text-xs font-mono font-bold tracking-widest text-slate-700 uppercase">
                TrackOwls Enterprise Command Center v2.4
              </span>
            </div>

            <div className="flex items-center gap-2.5 rounded-full border border-[#648C13]/30 bg-[#648C13]/10 px-3.5 py-1">
              <span className="h-2 w-2 rounded-full bg-[#648C13] animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#648C13]">
                Secure Node Online
              </span>
            </div>
          </div>

          {/* Main Console Body */}
          <div className="flex flex-col lg:flex-row min-h-[500px]">
            {/* Sidebar Navigation */}
            <aside className="flex lg:w-72 shrink-0 flex-row lg:flex-col items-center lg:items-stretch gap-2 border-b lg:border-b-0 lg:border-r border-slate-200 bg-slate-50/70 p-4 lg:p-6 overflow-x-auto">
              <div className="hidden lg:block mb-4 px-2">
                <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-slate-400">
                  Navigation Modules
                </span>
              </div>

              {navigation.map((item) => {
                const selected = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl transition-all duration-300 text-left font-semibold text-xs tracking-wider ${
                      selected
                        ? "bg-[#648C13] text-white shadow-md shadow-[#648C13]/20"
                        : "text-slate-600 hover:bg-slate-200/70 hover:text-slate-900"
                    }`}
                  >
                    <Icon name={item.icon} size={18} />
                    <span className="hidden lg:inline">{item.label}</span>
                  </button>
                );
              })}

              <div className="mt-auto hidden lg:flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-slate-500 text-xs font-semibold">
                <Icon name="lock" size={16} />
                <span>256-Bit Encrypted</span>
              </div>
            </aside>

            {/* Tab Content Area */}
            <div className="min-w-0 flex-1 p-6 sm:p-10 bg-white">
              <div className="mb-8 flex flex-wrap items-start justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#648C13]">
                    {active.label} / Module
                  </span>
                  <h3 className="mt-1.5 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                    {activeTab === "dashboard"
                      ? "Centralized Case Command"
                      : activeTab === "scan"
                      ? "Live Global Surveillance"
                      : activeTab === "evidence"
                      ? "Verified Evidence Vault"
                      : "Performance Intelligence & Analytics"}
                  </h3>
                </div>
                <span className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-xs font-mono text-slate-700 font-bold">
                  Status: Optimal
                </span>
              </div>

              <div className="panel-enter">
                {activeTab === "dashboard" && <DashboardPanel />}
                {activeTab === "scan" && <ScanPanel />}
                {activeTab === "evidence" && <EvidencePanel />}
                {activeTab === "reports" && <ReportsPanel />}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div className="flex items-center justify-between border-t border-slate-200 bg-slate-50 px-6 py-4 text-xs text-slate-500 font-medium">
            <span>TrackOwls Enterprise Security Suite</span>
            <span>All Global Nodes Synchronized</span>
          </div>
        </div>

      </div>

      <style>{`
        @keyframes owls-panel-enter {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes owls-bar-rise {
          from { transform: scaleY(0.2); opacity: 0.3; }
          to { transform: scaleY(1); opacity: 1; }
        }
        .panel-enter {
          animation: owls-panel-enter 0.3s ease-out both;
        }
        .report-bar {
          transform-origin: bottom;
          animation: owls-bar-rise 0.6s ease-out both;
        }
      `}</style>
    </section>
  );
}