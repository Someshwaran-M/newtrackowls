import React from "react";

const reportParagraphs = [
  "A discovery count shows how many potential infringements were identified. It does not show how many were verified or removed. A useful report separates each stage.",

  "Track unique verified URLs, complaints submitted, confirmed removals, pending reviews, escalations and repeat appearances. Keep a reporting period and platform breakdown alongside each count.",

  "Resolution time should distinguish your team’s response time from the platform’s review time. A removal rate should explain its denominator, period and verification method.",
];

function UnderstandingEnforcementReports() {
  return (
    <main className="mx-auto mt-20 pt-5 min-h-screen w-full bg-[#EAF3F9] px-4 pb-16 font-['Roboto',sans-serif] text-[#18324B] sm:px-6 sm:py-16 lg:px-10">
      {/* Hero banner */}
      <section
        aria-labelledby="enforcement-title"
        className="relative mx-0 mt-4 flex min-h-[240px] items-center overflow-hidden rounded-[10px] border border-[#294438] bg-[#071C30] bg-cover bg-center bg-no-repeat sm:min-h-[270px] lg:min-h-[310px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,27,46,0.97) 0%, rgba(5,27,46,0.90) 48%, rgba(8,35,42,0.68) 100%), url('/map.png')",
        }}
      >
        {/* Lime accent */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-28 bg-[#8BB630]" />

        <div className="relative z-10 w-full px-5 py-9 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          <span className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2.5px] text-[#B4D957] sm:mb-5">
            <span className="h-[2px] w-6 bg-[#8BB630]" />
            Insights
          </span>

          <h1
            id="enforcement-title"
            className="m-0 max-w-[900px] text-[30px] font-bold leading-[1.15] tracking-[-0.8px] text-white sm:text-[38px] md:text-[46px] lg:text-[52px]"
          >
            What a useful enforcement
            <br className="hidden sm:block" /> report should tell you
          </h1>

          <p className="mt-4 max-w-[720px] text-[14px] leading-[1.8] text-[#D0DCE6] sm:mt-5 sm:text-[15px]">
            Why detections, submissions and confirmed removals are different
            measures.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article
        aria-label="Understanding enforcement reports"
        className="mx-auto w-full max-w-[780px] px-2 pb-12 pt-9 sm:px-0 sm:pt-12 lg:pt-14"
      >
        <div className="space-y-6 sm:space-y-7">
          {reportParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="m-0 text-[14px] font-normal leading-[1.85] text-[#506A86] sm:text-[15px] sm:leading-[1.95]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Insights navigation */}
        <a
          href="/insights"
          className="group mt-8 inline-flex items-center gap-3 border-b border-[#B8CC8C] pb-2 text-[13px] font-medium text-[#557C16] transition-colors duration-200 hover:border-[#8BB630] hover:text-[#344F0D] sm:mt-9"
        >
          View all insights
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </article>
    </main>
  );
}

export default UnderstandingEnforcementReports;
