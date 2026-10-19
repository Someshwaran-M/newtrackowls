
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
    const link = document.createElement("a");
    link.href = "/reports/digital-piracy-report.pdf";
    link.download = "TrackOwls-Digital-Piracy-Report.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  

  return (
    <section
      id="how-it-works-report"
      className="relative w-full overflow-hidden bg-[#EAF3F9] px-3 py-5 font-['Roboto',sans-serif] sm:px-6 sm:py-7 lg:px-[33px] lg:py-5"
    >
      {/* Subtle lime particles around the panel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(173,209,50,0.85) 0.7px, transparent 1px)",
          backgroundSize: "13px 13px",
          maskImage:
            "radial-gradient(ellipse at 95% 55%, black 0%, transparent 43%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 95% 55%, black 0%, transparent 43%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1350px]">
        <div
          className="relative isolate overflow-hidden rounded-[14px] border border-[#C6D5D4] bg-[#D3DDDA] px-[18px] py-[25px] sm:rounded-[17px] sm:px-7 sm:py-8 lg:min-h-[423px] lg:rounded-[20px] lg:px-[40px] lg:py-[58px] xl:px-[41px]"
        >
          {/* Soft dotted texture inside the panel */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.95) 0.7px, transparent 1px)",
              backgroundSize: "9px 9px",
              maskImage:
                "radial-gradient(ellipse at 70% 48%, black 0%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 70% 48%, black 0%, transparent 75%)",
            }}
          />

          <div className="grid grid-cols-1 gap-9 lg:grid-cols-2 lg:items-start lg:gap-[55px] xl:gap-[70px]">
            {/* Left content */}
            <div className="flex min-w-0 flex-col items-start">
              <h2 className="max-w-[580px] text-[30px] font-bold leading-[1.12] tracking-[-1.1px] text-[#172F49] min-[400px]:text-[32px] sm:text-[38px] md:text-[42px] lg:text-[48px] xl:text-[54px]">
                Know what was
                <br />
                actioned.
              </h2>

              <p className="mt-4 max-w-[650px] text-[14px] leading-[1.7] text-[#536D85] sm:mt-5 sm:text-[15px] sm:leading-[1.8] lg:text-[16px]">
                Separate findings, verified cases, complaints and confirmed
                outcomes.
              </p>

              <button
                type="button"
                onClick={handleDownload}
                className="mt-5 inline-flex min-h-[45px] items-center justify-center rounded-[5px] border border-[#B8CFDF] bg-transparent px-[21px] py-3 text-[13px] font-bold leading-[1.4] text-[#19334E] transition-colors duration-200 hover:border-[#648A13] hover:bg-[#E7EFE8] focus:outline-none focus:ring-2 focus:ring-[#8BB630] focus:ring-offset-2 focus:ring-offset-[#D3DDDA] sm:mt-6 sm:min-h-[49px] sm:px-[28px] sm:text-[14px]"
              >
                Download sample report
              </button>
            </div>

            {/* Right checklist */}
            <div className="min-w-0 lg:pt-[3px]">
              <h3 className="text-[21px] font-bold leading-[1.3] tracking-[-0.4px] text-[#172F49] sm:text-[23px] lg:text-[29px]">
                Reporting includes
              </h3>

              <ul className="mt-5 space-y-[15px] sm:mt-6 sm:space-y-[19px] lg:mt-[26px] lg:space-y-[22px]">
                {reportItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-[12px] text-[13px] leading-[1.65] text-[#405D78] min-[400px]:text-[14px] sm:gap-[14px] sm:text-[15px] sm:leading-[1.7] lg:text-[16px]"
                  >
                    <svg
                      className="mt-[3px] h-[16px] w-[16px] shrink-0 text-[#648A13] sm:h-[18px] sm:w-[18px]"
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
      </div>
    </section>
  );
}

export default HowItWorksReport;
