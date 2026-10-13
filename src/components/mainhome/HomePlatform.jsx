
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Layers3,
  ScanSearch,
  FileCheck,
  ChartNoAxesColumn,
  LockKeyhole,
  ArrowUpRight,
  Check,
  Globe2,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Layers3,
    title: "Case management",
    description: "Keep discovery, evidence and actions in one case.",
  },
  {
    icon: FileCheck,
    title: "Evidence & audit history",
    description: "Preserve a traceable record of decisions and actions.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Client reporting",
    description: "Separate verified findings, submissions and outcomes.",
  },
];

const cases = [
  {
    id: "TW-1042",
    name: "Sample film · Release window",
    channel: "Website",
    status: "Verified",
    color: "green",
  },
  {
    id: "TW-1043",
    name: "Sample event · Live broadcast",
    channel: "Video",
    status: "Submitted",
    color: "amber",
  },
  {
    id: "TW-1044",
    name: "Sample brand · Logo misuse",
    channel: "Marketplace",
    status: "Review",
    color: "blue",
  },
];

const tabs = ["Cases", "Evidence", "Reporting"];

export default function HomePlatform() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Cases");
  const [selectedCase, setSelectedCase] = useState(null);

  return (
    <section
      id="platform"
      className="relative isolate overflow-hidden bg-[#F3F7FC] px-5 py-10 font-['Roboto',sans-serif] text-[#15334E] sm:px-8 sm:py-12 lg:min-h-[650px] lg:px-18 lg:py-12"
    >
      {/* Soft technical background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 35%, rgba(245,248,242,.9), transparent 38%), radial-gradient(ellipse at 80% 70%, rgba(139,182,48,.08), transparent 35%), linear-gradient(120deg, transparent 48%, rgba(21,51,78,.025) 49%, transparent 50%)",
          backgroundSize: "100% 100%, 100% 100%, 45px 45px",
        }}
      />

      <div className="mx-auto grid max-w-[1380px] items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* LEFT CONTENT */}
        <div className="max-w-[500px]">
          <p className="mb-5 text-[11px] font-bold uppercase tracking-[0.19em] text-[#617D17] sm:mb-6 sm:text-[10px]">
            TrackOwls platform · Concept preview
          </p>

          <h2 className="max-w-[490px] text-[30px] font-bold leading-[1.08] tracking-[-0.8px] sm:text-[48px] sm:tracking-[-1.5px] lg:text-[54px]">
            One workspace.
            <br />
            Complete case
            <br />
            <span>visibility.</span>
          </h2>

          <p className="mt-5 max-w-[430px] text-[14px] leading-[1.85] text-[#45637F] sm:text-[14px]">
            A planned case management platform connecting assets, evidence,
            analyst workflows and enforcement reporting.
          </p>

          <div className="mt-6 space-y-5 sm:mt-7">
            {features.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex items-start gap-3.5"
                >
                  <FeatureIcon
                    size={17}
                    strokeWidth={1.7}
                    className="mt-0.5 shrink-0 text-[#648A13]"
                  />

                  <div>
                    <h3 className="text-[14px] font-bold text-[#15334E] sm:text-[12px]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-[1.7] text-[#45637F] sm:text-[11px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => navigate("/request-demo")}
            className="group mt-7 inline-flex min-h-[43px] items-center gap-4 border border-[#D5E0CE] bg-white px-4 py-3 text-[12px] font-bold text-[#15334E] transition duration-300 hover:border-[#648A13] hover:bg-[#F5F8F2] sm:text-[11px]"
          >
            Explore the platform concept
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </button>
        </div>

        {/* RIGHT CONTENT */}
        <div className="min-w-0">
          {/* Dashboard */}
          <div className="overflow-hidden rounded-[8px] border border-[#D8E2D2] bg-white shadow-[0_18px_50px_rgba(21,51,78,0.07)]">
            {/* Header */}
            <div className="flex min-h-[43px] items-center justify-between gap-3 border-b border-[#E0E8DC] bg-[#F5F8F2] px-3.5 sm:px-5">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#648A13]" />

                <span className="text-[10px] font-extrabold tracking-tight text-[#648A13]">
                  TRACKOWLS
                </span>

                <span className="ml-1 text-[9px] font-semibold text-[#45637F] sm:text-[8px]">
                  WORKSPACE
                </span>
              </div>

              <span className="border border-[#D5E0CE] px-2 py-1 text-[9px] text-[#617D17] sm:text-[8px]">
                Concept preview
              </span>
            </div>

            <div className="grid grid-cols-[36px_minmax(0,1fr)] sm:grid-cols-[45px_minmax(0,1fr)]">
              {/* Sidebar */}
              <aside className="flex flex-col items-center gap-3 border-r border-[#E0E8DC] bg-white py-4">
                {[Layers3, ScanSearch, FileCheck, ChartNoAxesColumn].map(
                  (Icon, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={
                        ["Cases", "Detection", "Evidence", "Reporting"][index]
                      }
                      onClick={() =>
                        setActiveTab(
                          ["Cases", "Cases", "Evidence", "Reporting"][index]
                        )
                      }
                      className={`flex h-7 w-7 items-center justify-center transition ${
                        index === 0
                          ? "bg-[#F0F5E8] text-[#648A13]"
                          : "text-[#8497A5] hover:bg-[#F5F8F2] hover:text-[#648A13]"
                      }`}
                    >
                      <Icon size={14} strokeWidth={1.8} />
                    </button>
                  )
                )}
              </aside>

              {/* Main dashboard area */}
              <div className="min-w-0 p-3.5 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.09em] text-[#45637F] sm:text-[9px]">
                      Enforcement overview
                    </p>

                    <h3 className="mt-1 text-[15px] font-bold text-[#15334E] sm:text-[13px]">
                      A clear view of every case.
                    </h3>
                  </div>

                  <LockKeyhole
                    size={13}
                    className="mt-1 shrink-0 text-[#648A13]"
                  />
                </div>

                {/* Tabs */}
                <div className="mt-4 flex gap-0 border-b border-[#D8E2D2]">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`relative px-3 py-2 text-[11px] transition sm:text-[10px] ${
                        activeTab === tab
                          ? "bg-[#F5F8F2] font-bold text-[#648A13]"
                          : "text-[#45637F] hover:bg-[#F5F8F2]"
                      }`}
                    >
                      {tab}

                      {activeTab === tab && (
                        <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[#8BB630]" />
                      )}
                    </button>
                  ))}
                </div>

                {/* Metric boxes */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    { label: "Sample cases", value: "03" },
                    { label: "Evidence verified", value: "02" },
                    { label: "In review", value: "01" },
                  ].map((metric) => (
                    <div
                      key={metric.label}
                      className="min-w-0 rounded-[2px] border border-[#D8E2D2] bg-[#F5F8F2] px-2 py-3 sm:px-3"
                    >
                      <p className="text-[10px] leading-4 text-[#45637F] sm:text-[8px]">
                        {metric.label}
                      </p>

                      <p className="mt-1 text-[20px] font-normal leading-tight text-[#15334E]">
                        {metric.value}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Case register */}
                <div className="mt-5">
                  <div className="grid grid-cols-[1.35fr_.65fr_.65fr] gap-2 border-b border-[#15334E] px-1.5 py-2 text-[10px] text-[#45637F] sm:text-[8px]">
                    <span>Case / asset</span>
                    <span>Channel</span>
                    <span>Status</span>
                  </div>

                  {cases.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() =>
                        setSelectedCase(
                          selectedCase === item.id ? null : item.id
                        )
                      }
                      className={`grid w-full grid-cols-[1.35fr_.65fr_.65fr] items-center gap-2 border-b border-[#E0E8DC] px-1.5 py-2.5 text-left transition ${
                        selectedCase === item.id
                          ? "bg-[#F5F8F2]"
                          : "hover:bg-[#FAFBF8]"
                      }`}
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-[10px] font-medium text-[#15334E] sm:text-[9px]">
                          {item.id}
                        </span>

                        <span className="mt-1 block truncate text-[9px] text-[#45637F] sm:text-[8px]">
                          {item.name}
                        </span>
                      </span>

                      <span className="truncate text-[9px] text-[#45637F] sm:text-[8px]">
                        {item.channel}
                      </span>

                      <span>
                        <span
                          className={`inline-flex max-w-full truncate border px-1.5 py-1 text-[9px] sm:text-[8px] ${
                            item.color === "green"
                              ? "border-[#C8DDB1] bg-[#F5F8F2] text-[#527B2C]"
                              : item.color === "amber"
                                ? "border-[#E7D7AE] bg-[#FFF8E9] text-[#976C1D]"
                                : "border-[#D8E2D2] bg-[#F5F8F2] text-[#45637F]"
                          }`}
                        >
                          {item.status}
                        </span>
                      </span>
                    </button>
                  ))}
                </div>

                {selectedCase && (
                  <div className="mt-3 border border-[#D8E2D2] bg-[#F5F8F2] p-2.5">
                    <p className="text-[10px] font-bold text-[#648A13] sm:text-[9px]">
                      {selectedCase} selected
                    </p>

                    <p className="mt-1 text-[10px] text-[#45637F] sm:text-[9px]">
                      Illustrative case information for the platform concept.
                    </p>
                  </div>
                )}

                {/* Dashboard footer */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 text-[9px] text-[#648A13] sm:text-[8px]">
                    <Check size={11} />
                    Evidence recorded
                  </span>

                  <span className="text-[9px] text-[#45637F] sm:text-[8px]">
                    Illustrative data only
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Connected intelligence banner */}
          <div className="relative mt-6 min-h-[190px] overflow-hidden rounded-[7px] border border-[#294633] bg-[#15334E]">
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-50"
              style={{
                backgroundImage:
                  "radial-gradient(ellipse at 30% 28%, #8BB630 0%, transparent 2%), radial-gradient(ellipse at 65% 55%, #8BB630 0%, transparent 2%), radial-gradient(ellipse at 78% 30%, #8BB630 0%, transparent 2%), radial-gradient(ellipse at 48% 60%, #8BB630 0%, transparent 2%), linear-gradient(120deg, transparent 48%, #8BB63024 49%, transparent 50%)",
                backgroundSize:
                  "65px 50px, 85px 65px, 70px 55px, 60px 55px, 34px 34px",
              }}
            />

            <div
              aria-hidden="true"
              className="absolute -right-5 -top-28 h-64 w-64 rounded-full border border-[#8BB630]/20 shadow-[0_0_0_25px_rgba(139,182,48,0.04),0_0_0_55px_rgba(139,182,48,0.025)]"
            />

            <div className="relative flex min-h-[190px] flex-col justify-end p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-[#B7D96F]">
                <Globe2 size={14} />

                <span className="text-[9px] font-bold uppercase tracking-[0.18em] sm:text-[8px]">
                  Global monitoring
                </span>
              </div>

              <h3 className="text-[18px] font-bold tracking-tight text-white sm:text-[20px]">
                A connected view of digital threats.
              </h3>

              <p className="mt-2 max-w-[440px] text-[12px] leading-[1.8] text-[#D0DDE3] sm:text-[10px]">
                Monitor agreed channels, connect findings to your assets, and
                follow each verified case through enforcement.
              </p>

              <div className="mt-3 flex items-center gap-2 text-[9px] tracking-wider text-[#B7D96F] sm:text-[8px]">
                <Activity size={11} />
                SCAN / DETECT / REVIEW / PROTECT
              </div>
            </div>

            <div className="absolute bottom-0 left-0 h-[4px] w-full bg-[#8BB630]" />
          </div>

          <p className="mt-3 text-right text-[10px] text-[#45637F] sm:text-[9px]">
            TrackOwls platform concept · Illustrative interface
          </p>
        </div>
      </div>
    </section>
  );
}
