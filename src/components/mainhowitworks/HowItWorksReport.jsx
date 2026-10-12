
import React from "react";

const reportItems = [
  "URLs and case references",
  "Verification and evidence records",
  "Complaint and escalation status",
  "Confirmed removals and pending reviews",
  "Repeat-infringement patterns",
];

function HowItWorksReport() {
  const handleDownload = () => {
    const reportContent = [
      "TRACKOWLS — SAMPLE CONTENT PROTECTION REPORT",
      "",
      "Reporting includes:",
      ...reportItems.map((item, index) => `${index + 1}. ${item}`),
      "",
      "Note: This is a sample report template.",
      "Actual results and case statuses depend on the engagement.",
    ].join("\n");

    const blob = new Blob([reportContent], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "TrackOwls-Sample-Report.txt";
    document.body.appendChild(link);
    link.click();
    link.remove();

    URL.revokeObjectURL(url);
  };

  return (
    <section
      id="how-it-works-report"
      className="w-full bg-white px-5 py-7 font-['Roboto',sans-serif] sm:px-8 lg:px-[41px]"
    >
      <div className="mx-auto max-w-[1290px]">
        <div className="grid grid-cols-1 gap-9 rounded-[7px] border border-[#C9DDED] bg-white px-6 py-9 sm:px-10 sm:py-12 lg:min-h-[355px] lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-[55px]">
          {/* Left column */}
          <div className="flex flex-col items-start">
            <h2 className="max-w-[550px] text-[36px] font-bold leading-[1.12] tracking-[-1.5px] text-[#19334E] sm:text-[44px] lg:text-[50px]">
              Know what was
              <br />
              actioned.
            </h2>

            <p className="mt-5 text-[13px] leading-[1.8] text-[#526B86] sm:text-[14px]">
              Separate findings, verified cases, complaints and confirmed
              outcomes.
            </p>

            <button
              type="button"
              onClick={handleDownload}
              className="mt-6 inline-flex min-h-[49px] items-center justify-center rounded-[5px] border border-[#B8CFE3] bg-white px-[23px] text-[13px] font-bold text-[#19334E] transition-colors duration-200 hover:border-[#648A13] hover:bg-[#F5F9EF] focus:outline-none focus:ring-2 focus:ring-[#8BB630] focus:ring-offset-2"
            >
              Download sample report
            </button>
          </div>

          {/* Right column */}
          <div className="lg:pl-1">
            <h3 className="text-[23px] font-bold leading-tight tracking-[-0.5px] text-[#19334E]">
              Reporting includes
            </h3>

            <ul className="mt-[22px] space-y-[18px]">
              {reportItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-[14px] text-[13px] leading-[1.6] text-[#405D78] sm:text-[14px]"
                >
                  <svg
                    className="mt-[2px] h-[16px] w-[16px] shrink-0 text-[#648A13]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksReport;
