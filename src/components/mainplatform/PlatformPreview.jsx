import React, { useState } from "react";
import {
  ShieldCheck,
  Layers3,
  ScanSearch,
  FileCheck,
  ChartNoAxesColumn,
  LockKeyhole,
  Plus,
  Check,
} from "lucide-react";

const caseData = [
  {
    id: "TW-1042",
    asset: "Sample film · Release window",
    channel: "Website",
    status: "Verified",
  },
  {
    id: "TW-1043",
    asset: "Sample event · Live broadcast",
    channel: "Video",
    status: "Submitted",
  },
  {
    id: "TW-1044",
    asset: "Sample brand · Logo misuse",
    channel: "Marketplace",
    status: "Review",
  },
];

const evidenceData = [
  {
    id: "EV-2041",
    asset: "Sample film · Captured source",
    channel: "Website",
    status: "Verified",
  },
  {
    id: "EV-2042",
    asset: "Sample event · Recording reference",
    channel: "Video",
    status: "Verified",
  },
  {
    id: "EV-2043",
    asset: "Sample brand · Listing evidence",
    channel: "Marketplace",
    status: "Review",
  },
];

const reportData = [
  {
    id: "RP-3001",
    asset: "Release window · Case summary",
    channel: "Website",
    status: "Verified",
  },
  {
    id: "RP-3002",
    asset: "Live broadcast · Action history",
    channel: "Video",
    status: "Submitted",
  },
  {
    id: "RP-3003",
    asset: "Logo misuse · Outcome review",
    channel: "Marketplace",
    status: "Review",
  },
];

const tabContent = {
  Cases: {
    metrics: [
      { label: "Sample cases", value: "03" },
      { label: "Evidence verified", value: "02" },
      { label: "In review", value: "01" },
    ],
    rows: caseData,
    firstColumn: "Case / asset",
  },
  Evidence: {
    metrics: [
      { label: "Evidence records", value: "03" },
      { label: "Verified records", value: "02" },
      { label: "Pending review", value: "01" },
    ],
    rows: evidenceData,
    firstColumn: "Evidence / asset",
  },
  Reporting: {
    metrics: [
      { label: "Sample reports", value: "03" },
      { label: "Actions recorded", value: "02" },
      { label: "Pending follow-up", value: "01" },
    ],
    rows: reportData,
    firstColumn: "Report / case",
  },
};

const sidebarItems = [
  { label: "Cases", icon: Layers3 },
  { label: "Evidence", icon: ScanSearch },
  { label: "Reporting", icon: FileCheck },
];

function PlatformPreview() {
  const [activeTab, setActiveTab] = useState("Cases");
  const [activeSidebar, setActiveSidebar] = useState("Cases");

  const current = tabContent[activeTab];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setActiveSidebar(tab);
  };

  return (
    <section
      id="platform-preview"
      className="w-full bg-white px-4 py-8 font-['Roboto',sans-serif] sm:px-6 lg:px-10 lg:py-12 xl:px-12"
    >
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Dashboard window */}
        <div className="overflow-hidden rounded-[9px] border border-[#BFD8EA] border-t-2 border-t-[#19A9B8] bg-white shadow-[0_20px_65px_rgba(26,61,86,0.07)]">
          {/* Top navigation */}
          <header className="flex min-h-[60px] items-center justify-between gap-4 border-b border-[#D5E4EF] bg-gradient-to-r from-[#E7F5FA] to-[#F5F9ED] px-4 sm:px-6 lg:px-8">
            <div className="flex min-w-0 items-center gap-3 sm:gap-5">
              <div className="flex items-center gap-2 text-[#648A13]">
                <ShieldCheck size={20} strokeWidth={2} />
                <span className="text-xs font-extrabold tracking-[0.5px] sm:text-sm">
                  TRACKOWLS
                </span>
              </div>

              <span className="text-[10px] font-bold tracking-[0.5px] text-[#55728B] sm:text-xs">
                WORKSPACE
              </span>
            </div>

            <span className="shrink-0 rounded-[3px] border border-[#C7DDEB] px-3 py-2 text-[10px] text-[#45637F] sm:text-xs">
              Concept preview
            </span>
          </header>

          <div className="flex min-w-0">
            {/* Sidebar */}
            <aside className="flex w-[56px] shrink-0 flex-col items-center gap-3 border-r border-[#D5E4EF] bg-white py-5 sm:w-[68px] sm:gap-4 lg:w-[80px] lg:py-6">
              {sidebarItems.map(({ label, icon: Icon }) => {
                const selected = activeSidebar === label;

                return (
                  <button
                    key={label}
                    type="button"
                    title={label}
                    aria-label={`Show ${label}`}
                    aria-pressed={selected}
                    onClick={() => handleTabChange(label)}
                    className={`flex h-10 w-10 items-center justify-center rounded-md transition-colors sm:h-11 sm:w-11 ${
                      selected
                        ? "bg-[#F2F6EB] text-[#648A13]"
                        : "text-[#6486A0] hover:bg-[#EFF6FA] hover:text-[#648A13]"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </button>
                );
              })}

              <button
                type="button"
                title="Show Reporting"
                aria-label="Show Reporting"
                aria-pressed={activeTab === "Reporting"}
                onClick={() => handleTabChange("Reporting")}
                className={`mt-1 flex h-10 w-10 items-center justify-center rounded-md transition-colors sm:h-11 sm:w-11 ${
                  activeTab === "Reporting"
                    ? "bg-[#F2F6EB] text-[#648A13]"
                    : "text-[#6486A0] hover:bg-[#EFF6FA] hover:text-[#648A13]"
                }`}
              >
                <ChartNoAxesColumn size={20} strokeWidth={1.8} />
              </button>
            </aside>

            {/* Dashboard content */}
            <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 sm:py-7 lg:px-10 lg:py-9 xl:px-12">
              {/* Heading */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[1.1px] text-[#587895] sm:text-xs">
                    Enforcement overview
                  </p>

                  <h1 className="mt-2 text-xl font-bold leading-tight tracking-[-0.3px] text-[#15334E] sm:text-2xl lg:text-3xl">
                    A clear view of every case.
                  </h1>
                </div>

                <LockKeyhole
                  size={20}
                  strokeWidth={1.6}
                  className="mt-3 shrink-0 text-[#3F829D]"
                />
              </div>

              {/* Tabs */}
              <div
                role="tablist"
                aria-label="Workspace sections"
                className="mt-6 flex gap-2 border-b border-[#D2E1ED]"
              >
                {["Cases", "Evidence", "Reporting"].map((tab) => (
                  <button
                    key={tab}
                    id={`tab-${tab.toLowerCase()}`}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    onClick={() => handleTabChange(tab)}
                    className={`min-w-[90px] border-b-2 px-4 py-3 text-xs transition-colors sm:min-w-[115px] sm:px-6 sm:text-sm ${
                      activeTab === tab
                        ? "border-[#648A13] bg-[#F3F6EC] font-medium text-[#648A13]"
                        : "border-transparent text-[#15334E] hover:bg-[#F5F8FB]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Metric cards */}
              <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
                {current.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="min-h-[105px] rounded-[5px] border border-[#D2E1ED] bg-[#F0F6FA] px-4 py-4 sm:min-h-[120px] sm:px-5 sm:py-5"
                  >
                    <p className="text-xs text-[#58728A] sm:text-sm">
                      {metric.label}
                    </p>

                    <p className="mt-4 text-2xl font-normal leading-none tracking-[-0.5px] text-[#244966] sm:text-3xl">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Case / evidence / reporting table */}
              <div className="mt-7 w-full overflow-x-auto">
                <div className="min-w-[480px]">
                  <div className="grid grid-cols-[1.65fr_0.8fr_0.7fr] items-center border-b border-[#15334E] px-3 py-4 text-[10px] text-[#45637F] sm:px-4 sm:text-xs">
                    <span>{current.firstColumn}</span>
                    <span>Channel</span>
                    <span>Status</span>
                  </div>

                  {current.rows.map((row) => (
                    <div
                      key={row.id}
                      className="grid min-h-[68px] grid-cols-[1.65fr_0.8fr_0.7fr] items-center border-b border-[#15334E] px-3 py-3 last:border-b-0 sm:px-4 sm:py-4"
                    >
                      <div className="min-w-0 pr-3">
                        <p className="text-sm font-medium text-[#15334E] sm:text-base">
                          {row.id}
                        </p>

                        <p className="mt-1 truncate text-[10px] text-[#58728A] sm:text-xs">
                          {row.asset}
                        </p>
                      </div>

                      <span className="text-xs text-[#45637F] sm:text-sm">
                        {row.channel}
                      </span>

                      <div>
                        <span
                          className={`inline-flex whitespace-nowrap rounded-[2px] border px-2 py-1 text-[10px] leading-none sm:text-xs ${
                            row.status === "Verified"
                              ? "border-[#B9D6A6] bg-[#F0F7EA] text-[#527B35]"
                              : row.status === "Submitted"
                                ? "border-[#F0C981] bg-[#FFF8E9] text-[#946A23]"
                                : "border-[#B9D6A6] bg-[#F1F6F8] text-[#45637F]"
                          }`}
                        >
                          {row.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer status */}
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 px-[1px]">
                <span className="flex items-center gap-2 text-[10px] text-[#527B35] sm:text-xs">
                  <Check size={15} strokeWidth={2} />
                  {activeTab === "Cases"
                    ? "Evidence recorded"
                    : activeTab === "Evidence"
                      ? "Evidence log available"
                      : "Reporting records available"}
                </span>

                <span className="text-[10px] text-[#648099] sm:text-xs">
                  Illustrative data only
                </span>
              </div>
            </main>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="mt-3 text-center text-[10px] leading-5 text-[#45637F]">
          Interactive concept preview. Sample data illustrates the proposed
          interface; this is not a live client portal.
        </p>
      </div>
    </section>
  );
}

export default PlatformPreview;