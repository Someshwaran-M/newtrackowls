
import React from "react";

const reportingRows = [
  {
    area: "Discovery",
    meaning: "Potential sources found within the agreed scope",
    record: "Source URL and discovery timestamp",
  },
  {
    area: "Verification",
    meaning: "Findings reviewed against the protected asset and rights",
    record: "Reference asset, evidence and analyst notes",
  },
  {
    area: "Enforcement",
    meaning: "Authorized complaints submitted and followed up",
    record: "Complaint reference and submission history",
  },
  {
    area: "Outcome",
    meaning: "Confirmed changes, pending reviews and unresolved cases",
    record: "Source availability check and case status",
  },
  {
    area: "Intelligence",
    meaning: "Repeat appearances and channel patterns",
    record: "Linked case references and reporting period",
  },
];

function HowItWorksClient() {
  return (
    <section
      id="how-it-works-client"
      className="w-full bg-white px-5 py-12 font-['Roboto',sans-serif] sm:px-8 sm:py-14 lg:px-[33px] lg:py-[58px]"
    >
      <div className="mx-auto w-full max-w-[1290px]">
        {/* Section heading */}
        <div className="mb-10 grid grid-cols-1 items-end gap-6 sm:mb-11 lg:grid-cols-[1.7fr_0.8fr] lg:gap-10">
          <div>
            <span className="mb-5 inline-block text-[12px] font-bold uppercase tracking-[2px] text-[#648A13]">
              Meaningful client visibility
            </span>

            <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-1.5px] text-[#19334E] sm:text-[44px] lg:text-[50px]">
              Measure the work.
              <br />
              Understand the outcome.
            </h2>
          </div>

          <p className="max-w-[390px] pb-1 text-[14px] leading-[1.9] text-[#526B86] lg:justify-self-end">
            Separate the stages of enforcement so that activity counts are
            never mistaken for confirmed removals.
          </p>
        </div>

        {/* Reporting table */}
        <div className="w-full overflow-hidden rounded-[7px] border border-[#CDDEED]">
          <div
            className="grid grid-cols-1 bg-[#102D46] text-white sm:grid-cols-[0.65fr_1.9fr_1.35fr]"
            role="row"
          >
            <div
              className="hidden px-6 py-[22px] text-[14px] font-bold sm:block"
              role="columnheader"
            >
              Reporting area
            </div>

            <div
              className="hidden px-6 py-[22px] text-[14px] font-bold sm:block"
              role="columnheader"
            >
              What it tells you
            </div>

            <div
              className="hidden px-6 py-[22px] text-[14px] font-bold sm:block"
              role="columnheader"
            >
              Supporting record
            </div>
          </div>

          {reportingRows.map((row, index) => (
            <div
              key={row.area}
              className={`grid grid-cols-1 border-t border-[#D5E2EF] transition-colors duration-200 hover:bg-[#E5F0F8] sm:grid-cols-[0.65fr_1.9fr_1.35fr] ${
                index % 2 === 0 ? "bg-[#F4F8FC]" : "bg-[#EBF3FA]"
              }`}
              role="row"
            >
              <div
                className="px-6 pb-1 pt-5 text-[13px] font-bold text-[#183A57] sm:py-[22px] sm:text-[14px]"
                role="cell"
              >
                {row.area}
              </div>

              <div
                className="px-6 pb-2 text-[13px] leading-[1.8] text-[#526B86] sm:py-[22px] sm:text-[14px]"
                role="cell"
              >
                {row.meaning}
              </div>

              <div
                className="px-6 pb-5 text-[13px] leading-[1.8] text-[#526B86] sm:py-[22px] sm:text-[14px]"
                role="cell"
              >
                {row.record}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksClient;
