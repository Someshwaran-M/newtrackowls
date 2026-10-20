
import React, { useState } from "react";
import {
  ShieldCheck,
  Layers3,
  ScanSearch,
  FileCheck,
  ChartNoAxesColumn,
  LockKeyhole,
  Check,
  FileText,
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

const evidenceItems = [
  {
    title: "Source URL & timestamp",
    description: "Sample evidence record 01",
  },
  {
    title: "Rights reference & analyst notes",
    description: "Sample evidence record 02",
  },
  {
    title: "Screenshot evidence",
    description: "Sample evidence record 03",
  },
  {
    title: "Complaint history",
    description: "Sample evidence record 04",
  },
];

const reportItems = [
  { label: "Verified cases", value: "2" },
  { label: "Submitted complaints", value: "1" },
  { label: "Confirmed removals", value: "0" },
  { label: "Pending review", value: "1" },
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
    rows: caseData,
    firstColumn: "Evidence / asset",
  },
  Reporting: {
    metrics: [
      { label: "Sample reports", value: "03" },
      { label: "Actions recorded", value: "02" },
      { label: "Pending follow-up", value: "01" },
    ],
    rows: caseData,
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

  const current = tabContent[activeTab];

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section
      id="platform-preview"
      className="w-full overflow-hidden bg-[#EAF3F9] px-3 py-4 font-['Roboto',sans-serif] sm:px-5 sm:py-6 lg:px-8 lg:py-8"
    >
      {/* Outer background panel */}
      <div className="mx-auto w-full max-w-[1350px] rounded-[15px] bg-[#D2DBD8] px-3 py-3 sm:rounded-[18px] sm:px-6 sm:py-8 lg:px-[46px] lg:py-[46px]">
        {/* Dashboard window */}
        <div className="mx-auto w-full max-w-[1088px] overflow-hidden rounded-[9px] border border-[#BFD8EA] border-t-2 border-t-[#19A9B8] bg-white shadow-[0_18px_55px_rgba(26,61,86,0.08)]">
          {/* Header */}
          <header className="flex min-h-[48px] items-center justify-between gap-2 border-b border-[#D5E4EF] bg-gradient-to-r from-[#E7F5FA] to-[#F5F9ED] px-3 sm:min-h-[60px] sm:px-5 lg:px-6">
            <div className="flex min-w-0 items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-1.5 text-[#648A13] sm:gap-2">
                <ShieldCheck
                  className="h-[13px] w-[13px] sm:h-[18px] sm:w-[18px]"
                  strokeWidth={2}
                />
                <span className="text-[8px] font-extrabold tracking-[0.4px] sm:text-xs">
                  TRACKOWLS
                </span>
              </div>

              <span className="hidden text-[7px] font-bold tracking-[0.4px] text-[#55728B] sm:inline sm:text-[10px]">
                WORKSPACE
              </span>
            </div>

            <span className="shrink-0 rounded-[3px] border border-[#C7DDEB] px-2 py-1.5 text-[8px] text-[#45637F] sm:px-3 sm:py-2 sm:text-[10px]">
              Concept preview
            </span>
          </header>

          <div className="flex min-w-0">
            {/* Desktop sidebar — unchanged on desktop */}
            <aside className="hidden w-[55px] shrink-0 flex-col items-center gap-2 border-r border-[#D5E4EF] bg-white py-4 sm:flex lg:gap-3 lg:py-5">
              {sidebarItems.map(({ label, icon: Icon }) => {
                const selected = activeTab === label;

                return (
                  <button
                    key={label}
                    type="button"
                    title={label}
                    aria-label={`Show ${label}`}
                    aria-pressed={selected}
                    onClick={() => handleTabChange(label)}
                    className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
                      selected
                        ? "bg-[#F2F6EB] text-[#648A13]"
                        : "text-[#6486A0] hover:bg-[#EFF6FA] hover:text-[#648A13]"
                    }`}
                  >
                    <Icon size={18} strokeWidth={1.8} />
                  </button>
                );
              })}

              <button
                type="button"
                title="Show Reporting"
                aria-label="Show Reporting"
                aria-pressed={activeTab === "Reporting"}
                onClick={() => handleTabChange("Reporting")}
                className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors ${
                  activeTab === "Reporting"
                    ? "bg-[#F2F6EB] text-[#648A13]"
                    : "text-[#6486A0] hover:bg-[#EFF6FA] hover:text-[#648A13]"
                }`}
              >
                <ChartNoAxesColumn size={18} strokeWidth={1.8} />
              </button>
            </aside>

            {/* Dashboard content */}
            <main className="min-w-0 flex-1 px-3 py-4 sm:px-5 sm:py-6 lg:px-[21px] lg:py-[22px]">
              {/* Heading */}
              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <p className="text-[8px] font-medium uppercase tracking-[1px] text-[#587895] sm:text-[10px]">
                    Enforcement overview
                  </p>

                  <h1 className="mt-1.5 text-[13px] font-bold leading-tight tracking-[-0.3px] text-[#15334E] sm:mt-2 sm:text-[17px]">
                    A clear view of every case.
                  </h1>
                </div>

                <LockKeyhole
                  size={15}
                  strokeWidth={1.6}
                  className="mt-2 shrink-0 text-[#3F829D] sm:mt-3 sm:h-[18px] sm:w-[18px]"
                />
              </div>

              {/* Tabs */}
              <div
                role="tablist"
                aria-label="Workspace sections"
                className="mt-3 flex gap-1 border-b border-[#D2E1ED] sm:mt-5 sm:gap-1"
              >
                {["Cases", "Evidence", "Reporting"].map((tab) => (
                  <button
                    key={tab}
                    id={`tab-${tab.toLowerCase()}`}
                    type="button"
                    role="tab"
                    aria-selected={activeTab === tab}
                    onClick={() => handleTabChange(tab)}
                    className={`min-w-0 flex-1 border-b-2 px-2 py-2 text-[10px] transition-colors sm:flex-none sm:min-w-[74px] sm:px-4 sm:py-2.5 sm:text-xs ${
                      activeTab === tab
                        ? "border-[#648A13] bg-[#F3F6EC] font-medium text-[#648A13]"
                        : "border-transparent text-[#15334E] hover:bg-[#F5F8FB]"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* ================================================== */}
              {/* MOBILE: CASES */}
              {/* ================================================== */}
              {activeTab === "Cases" && (
                <div className="mt-4 sm:hidden">
                  {/* Metric cards */}
                  <div className="grid grid-cols-3 gap-1.5">
                    {current.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="min-w-0 rounded-[5px] border border-[#D2E1ED] bg-[#F0F6FA] px-2 py-3"
                      >
                        <p className="min-h-[30px] text-[10px] leading-[1.5] text-[#58728A]">
                          {metric.label}
                        </p>
                        <p className="mt-1 text-[27px] font-normal leading-none tracking-[-0.5px] text-[#244966]">
                          {metric.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Case list: two columns, like reference */}
                  <div className="mt-6">
                    <div className="grid grid-cols-[1.7fr_0.8fr] items-center border-b border-[#8798A5] px-2 py-2 text-[10px] text-[#58728A]">
                      <span>Case / asset</span>
                      <span>Channel</span>
                    </div>

                    {caseData.map((row) => (
                      <div
                        key={row.id}
                        className="grid min-h-[63px] grid-cols-[1.7fr_0.8fr] items-center border-b border-[#8798A5] px-2 py-2"
                      >
                        <div className="min-w-0 pr-2">
                          <p className="text-[13px] font-medium text-[#15334E]">
                            {row.id}
                          </p>
                          <p className="mt-1 text-[10px] leading-[1.5] text-[#58728A]">
                            {row.asset}
                          </p>
                        </div>

                        <span className="min-w-0 break-words text-[12px] leading-[1.4] text-[#45637F]">
                          {row.channel}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between gap-2 px-[1px]">
                    <span className="flex items-center gap-1.5 text-[10px] text-[#527B35]">
                      <Check size={12} strokeWidth={2} />
                      Evidence recorded
                    </span>
                    <span className="text-[10px] text-[#648099]">
                      Illustrative data only
                    </span>
                  </div>
                </div>
              )}

              {/* ================================================== */}
              {/* MOBILE: EVIDENCE */}
              {/* ================================================== */}
              {activeTab === "Evidence" && (
                <div className="mt-1 sm:hidden">
                  {evidenceItems.map((item) => (
                    <div
                      key={item.title}
                      className="flex min-h-[75px] items-center gap-3 border-b border-[#D5E4EF] py-3"
                    >
                      <FileText
                        size={20}
                        strokeWidth={1.8}
                        className="shrink-0 text-[#648A13]"
                      />

                      <div className="min-w-0 flex-1">
                        <p className="text-[12px] leading-[1.45] text-[#15334E]">
                          {item.title}
                        </p>
                        <p className="mt-1 text-[10px] leading-[1.4] text-[#58728A]">
                          {item.description}
                        </p>
                      </div>

                      <Check
                        size={15}
                        strokeWidth={1.8}
                        className="shrink-0 text-[#648A13]"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* ================================================== */}
              {/* MOBILE: REPORTING */}
              {/* ================================================== */}
              {activeTab === "Reporting" && (
                <div className="mt-5 sm:hidden">
                  <div className="min-h-[320px] overflow-hidden rounded-[16px] border border-[#D0DCD7] bg-[#E7EEEA]">
                    <h2 className="px-0 py-3 text-[15px] font-semibold tracking-[-0.4px] text-[#15334E]">
                      Sample reporting breakdown
                    </h2>

                    <div>
                      {reportItems.map((item) => (
                        <div
                          key={item.label}
                          className="flex min-h-[50px] items-center justify-between gap-3 border-b border-[#D8E2DE] py-3 text-[12px] text-[#24435B]"
                        >
                          <span>{item.label}</span>
                          <span className="font-semibold text-[#15334E]">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="pt-4 text-[11px] leading-[1.7] text-[#647A87]">
                      Figures illustrate the interface; they are not TrackOwls
                      results.
                    </p>
                  </div>
                </div>
              )}

              {/* ================================================== */}
              {/* TABLET/DESKTOP: EXISTING DASHBOARD LAYOUT */}
              {/* ================================================== */}
              <div className="hidden sm:block">
                {/* Metric cards */}
                <div className="mt-5 grid grid-cols-3 gap-2.5 lg:gap-[11px]">
                  {current.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="min-w-0 rounded-[4px] border border-[#D2E1ED] bg-[#F0F6FA] px-3 py-3.5 sm:min-h-[82px]"
                    >
                      <p className="text-[10px] leading-[1.4] text-[#58728A]">
                        {metric.label}
                      </p>

                      <p className="mt-3 text-[26px] font-normal leading-none tracking-[-0.5px] text-[#244966]">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Existing three-column table */}
                <div className="mt-5 w-full">
                  <div className="grid grid-cols-[1.55fr_0.75fr_0.65fr] items-center border-b border-[#15334E] px-2 py-3 text-[10px] text-[#45637F]">
                    <span>{current.firstColumn}</span>
                    <span>Channel</span>
                    <span>Status</span>
                  </div>

                  {current.rows.map((row) => (
                    <div
                      key={row.id}
                      className="grid min-h-[54px] grid-cols-[1.55fr_0.75fr_0.65fr] items-center border-b border-[#15334E] px-2 py-2.5 last:border-b-0"
                    >
                      <div className="min-w-0 pr-2">
                        <p className="text-xs font-medium text-[#15334E]">
                          {row.id}
                        </p>
                        <p className="mt-1 break-words text-[9px] leading-[1.4] text-[#58728A]">
                          {row.asset}
                        </p>
                      </div>

                      <span className="min-w-0 break-words pr-1 text-[11px] text-[#45637F]">
                        {row.channel}
                      </span>

                      <div className="min-w-0">
                        <span
                          className={`inline-flex max-w-full whitespace-nowrap rounded-[2px] border px-1.5 py-1 text-[9px] leading-none ${
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

                {/* Existing footer status */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 px-[1px]">
                  <span className="flex items-center gap-1.5 text-[10px] text-[#527B35]">
                    <Check size={11} strokeWidth={2} />
                    {activeTab === "Cases"
                      ? "Evidence recorded"
                      : activeTab === "Evidence"
                        ? "Evidence log available"
                        : "Reporting records available"}
                  </span>

                  <span className="text-[10px] text-[#648099]">
                    Illustrative data only
                  </span>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Existing disclaimer */}
        <p className="mx-auto mt-3 hidden max-w-[650px] text-center text-[8px] leading-[1.6] text-[#45637F] sm:block sm:text-[10px] sm:leading-5">
          Interactive concept preview. Sample data illustrates the proposed
          interface; this is not a live client portal.
        </p>
      </div>
    </section>
  );
}

export default PlatformPreview;
