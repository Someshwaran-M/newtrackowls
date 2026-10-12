
import React from "react";

const coverageChannels = [
  "Websites",
  "Search engines",
  "Social platforms",
  "Video platforms",
  "Streaming websites",
  "Mobile applications",
  "App stores",
  "Marketplaces",
  "Domains",
];

const reportItems = [
  {
    label: "VERIFIED URLS",
    description: "Separate from raw discoveries",
  },
  {
    label: "ENFORCEMENT ACTIONS",
    description: "Submission and escalation history",
  },
  {
    label: "CONFIRMED OUTCOMES",
    description: "Removed, pending or still available",
  },
];

export default function HomeVisibility() {
  const downloadSampleReport = () => {
    const report = [
      "TRACKOWLS — SAMPLE ENFORCEMENT REPORT",
      "=====================================",
      "",
      "Report type: Illustrative sample",
      "",
      "VERIFIED URLS",
      "Separate from raw discoveries",
      "",
      "ENFORCEMENT ACTIONS",
      "Submission and escalation history",
      "",
      "CONFIRMED OUTCOMES",
      "Removed, pending or still available",
      "",
      "This is an illustrative sample and contains no live detection data.",
    ].join("\n");

    const blob = new Blob([report], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "TrackOwls-Sample-Enforcement-Report.txt";

    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="home-visibility"
      className="w-full overflow-hidden bg-[#FFFFFF] py-10 font-['Roboto',sans-serif] text-[#15334E] sm:py-12 lg:py-12"
    >
      <div className="mx-auto max-w-[1450px] px-5 sm:px-8 lg:px-[5%]">
        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-5 sm:mb-12 lg:flex-row lg:items-center lg:gap-12">
          <div className="max-w-[720px]">
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.19em] text-[#617D17] sm:text-[11px]">
              Visibility that matters
            </p>

            <h2 className="text-[36px] font-bold leading-[1.08] tracking-[-0.045em] text-[#15334E] sm:text-[48px] lg:text-[54px]">
              Understand the work.
              <br />
              <span className="text-[#7C9D18]">
                Track the outcome.
              </span>
            </h2>
          </div>

          <p className="max-w-[440px] text-[14px] leading-[1.8] text-[#45637F] sm:text-base lg:mb-1">
            A useful report distinguishes detections from verified
            infringements, complaints and confirmed removals.
          </p>
        </div>

        {/* Sample report panel */}
        <div className="grid grid-cols-1 items-center gap-8 rounded-[5px] border border-[#DCE6ED] bg-[#FFFFFF] px-6 py-7 sm:px-8 sm:py-9 lg:grid-cols-2 lg:gap-14 lg:px-[46px] lg:py-[44px]">
          {/* Report introduction */}
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center rounded-[3px] border border-[#DCE6ED] px-3 py-1.5 text-[10px] font-medium text-[#45637F]">
              Illustrative sample
            </span>

            <h3 className="mt-5 text-[22px] font-bold leading-tight tracking-[-0.025em] text-[#15334E] sm:text-[27px]">
              See a sample enforcement report.
            </h3>

            <p className="mt-4 max-w-[480px] text-[13px] leading-[1.8] text-[#45637F] sm:text-[14px]">
              Case references, platforms, actions and outcomes in a clear
              reporting format.
            </p>

            <button
              type="button"
              onClick={downloadSampleReport}
              className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-[3px] border border-[#8BB630] bg-[#8BB630] px-5 py-3 text-[12px] font-bold text-[#15334E] transition-all duration-300 hover:border-[#7C9D18] hover:bg-[#7C9D18] focus:outline-none focus:ring-2 focus:ring-[#8BB630] focus:ring-offset-2"
            >
              Download sample report
            </button>
          </div>

          {/* Report details */}
          <div className="w-full">
            {reportItems.map((item, index) => (
              <div
                key={item.label}
                className={`py-5 first:pt-0 last:pb-0 ${
                  index !== reportItems.length - 1
                    ? "border-b border-[#E0E9F1]"
                    : ""
                }`}
              >
                <p className="text-[10px] font-medium uppercase tracking-[0.13em] text-[#617D17]">
                  {item.label}
                </p>

                <p className="mt-3 text-[14px] leading-relaxed text-[#45637F] sm:text-[15px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting link */}
        <div className="mt-7">
          <a
            href="#digital-coverage"
            className="group inline-flex items-center gap-2 border-b border-[#8BB630]/50 pb-1.5 text-[13px] font-medium text-[#648A13] transition-colors duration-300 hover:border-[#8BB630] hover:text-[#15334E]"
          >
            Explore illustrative protection scenarios
            <span className="translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Digital coverage */}
        <div
          id="digital-coverage"
          className="mx-auto mt-16 max-w-[920px] text-center sm:mt-20 lg:mt-24"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#617D17]">
            Digital coverage
          </p>

          <h3 className="mx-auto mt-4 max-w-[650px] text-[36px] font-bold leading-[1.13] tracking-[-0.035em] text-[#15334E] sm:text-[48px] lg:text-[54px]">
            Across the channels
            <br className="hidden sm:block" />
            <span className="text-[#7C9D18]">
              that matter to your rights.
            </span>
          </h3>

          {/* Channel labels */}
          <div className="mx-auto mt-7 flex max-w-[800px] flex-wrap items-center justify-center gap-2">
            {coverageChannels.map((channel) => (
              <span
                key={channel}
                className="inline-flex min-h-[35px] items-center justify-center border border-[#DCE6ED] bg-[#FFFFFF] px-4 py-2 text-[10px] font-medium text-[#45637F] transition-colors duration-200 hover:border-[#8BB630] hover:bg-[#F5F8F2] hover:text-[#648A13] sm:text-[11px]"
              >
                {channel}
              </span>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-[760px] text-[10px] leading-[1.8] text-[#45637F] sm:text-[11px]">
            Coverage and available enforcement routes are agreed during
            scoping. Platform access and removal decisions depend on
            authorization and the respective services.
          </p>
        </div>
      </div>
    </section>
  );
}
