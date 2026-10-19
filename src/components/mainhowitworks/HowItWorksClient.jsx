
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
      className="w-full bg-[#EAF3F9] px-3 py-5 font-['Roboto',sans-serif] sm:px-5 sm:py-7 lg:px-8 lg:py-8"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        {/* Main light blue-gray panel */}
        <div className="relative isolate overflow-hidden rounded-[14px] border border-[#C9D7D5] bg-[#D3DDDA] px-4 py-6 sm:rounded-[17px] sm:px-7 sm:py-8 lg:rounded-[20px] lg:px-[50px] lg:py-[46px]">
          {/* Subtle dotted background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.22]"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.95) 0.7px, transparent 1px)",
              backgroundSize: "9px 9px",
              maskImage:
                "radial-gradient(ellipse at 60% 45%, black 0%, transparent 80%)",
              WebkitMaskImage:
                "radial-gradient(ellipse at 60% 45%, black 0%, transparent 80%)",
            }}
          />

          {/* Heading */}
          <div className="mb-7 grid grid-cols-1 gap-4 sm:mb-8 lg:mb-[38px] lg:grid-cols-[1.7fr_0.8fr] lg:items-end lg:gap-10">
            <div>
              <span className="mb-4 block text-[10px] font-bold uppercase leading-relaxed tracking-[1.5px] text-[#5D861A] sm:mb-5 sm:text-[11px] sm:tracking-[1.8px]">
                Meaningful client visibility
              </span>

              <h2 className="max-w-[850px] text-[31px] font-bold leading-[1.12] tracking-[-1.2px] text-[#172F49] min-[400px]:text-[34px] sm:text-[40px] md:text-[46px] lg:text-[48px] xl:text-[52px]">
                Measure the work.
                <br className="hidden lg:block" />{" "}
                <span>Understand the outcome.</span>
              </h2>
            </div>

            <p className="max-w-[440px] text-[14px] leading-[1.75] text-[#536D85] sm:text-[15px] sm:leading-[1.8] lg:justify-self-end lg:pb-1 lg:text-[16px]">
              Separate the stages of enforcement so that activity counts are
              never mistaken for confirmed removals.
            </p>
          </div>

          {/* Mobile table hint */}
          <p className="mb-2 text-[12px] font-medium text-[#536D85] sm:hidden">
            Swipe table left or right to view all columns →
          </p>

          {/* Responsive reporting table */}
          <div
            className="reporting-table-scroll w-full overflow-x-auto rounded-[7px] border border-[#C7D7DE]"
            role="region"
            aria-label="Reporting table. Swipe horizontally to view all columns."
            tabIndex={0}
          >
            <table className="w-full min-w-[700px] table-fixed border-collapse text-left sm:min-w-0">
              <colgroup>
                <col className="w-[25%] lg:w-[19%]" />
                <col className="w-[40%] lg:w-[43%]" />
                <col className="w-[35%] lg:w-[38%]" />
              </colgroup>

              <thead>
                <tr className="bg-[#122F48] text-white">
                  <th className="border-r border-white/15 px-4 py-4 text-[13px] font-bold leading-[1.5] sm:px-5 sm:py-[19px] sm:text-[14px]">
                    Reporting area
                  </th>
                  <th className="border-r border-white/15 px-4 py-4 text-[13px] font-bold leading-[1.5] sm:px-5 sm:py-[19px] sm:text-[14px]">
                    What it tells you
                  </th>
                  <th className="px-4 py-4 text-[13px] font-bold leading-[1.5] sm:px-5 sm:py-[19px] sm:text-[14px]">
                    Supporting record
                  </th>
                </tr>
              </thead>

              <tbody>
                {reportingRows.map((row, index) => (
                  <tr
                    key={row.area}
                    className={`transition-colors duration-200 hover:bg-[#DFEBF3] ${
                      index % 2 === 0
                        ? "bg-[#D3DDDA]"
                        : "bg-[#EDF5FC]"
                    }`}
                  >
                    <td className="border-r border-[#D1DEE2] px-4 py-5 align-top text-[13px] font-semibold leading-[1.7] text-[#23435D] sm:px-5 sm:py-[21px] sm:text-[14px]">
                      {row.area}
                    </td>

                    <td className="border-r border-[#D1DEE2] px-4 py-5 align-top text-[13px] leading-[1.8] text-[#536D85] sm:px-5 sm:py-[21px] sm:text-[14px]">
                      {row.meaning}
                    </td>

                    <td className="px-4 py-5 align-top text-[13px] leading-[1.8] text-[#536D85] sm:px-5 sm:py-[21px] sm:text-[14px]">
                      {row.record}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <style>{`
        .reporting-table-scroll {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #8299a6 #d3ddda;
        }

        .reporting-table-scroll::-webkit-scrollbar {
          height: 5px;
        }

        .reporting-table-scroll::-webkit-scrollbar-track {
          background: #d3ddda;
        }

        .reporting-table-scroll::-webkit-scrollbar-thumb {
          background: #8299a6;
          border-radius: 10px;
        }

        .reporting-table-scroll:focus-visible {
          outline: 2px solid #648a13;
          outline-offset: 3px;
        }

        @media (min-width: 640px) {
          .reporting-table-scroll {
            overflow-x: visible;
          }
        }

        @media (max-width: 639px) {
          .reporting-table-scroll table {
            min-width: 700px;
          }
        }
      `}</style>
    </section>
  );
}

export default HowItWorksClient;
