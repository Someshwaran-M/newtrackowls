
import React from "react";

const articleParagraphs = [
  "Build a clear asset list with title variations, release dates and reference materials. Prioritize titles and channels according to the release plan.",

  "Validate suspected copies before taking action. Capture the URL, timestamp and evidence needed by the receiving platform, and preserve a traceable case record.",

  "After the initial release period, review recurring sources and distribution patterns. Use that intelligence to adjust the monitoring scope and report where exposure persists.",
];

function ReleaseWindowMonitoring() {
  return (
    <main className="mx-auto mt-24 min-h-screen w-full max-w-[1370px] bg-white px-4 pb-16 font-['Roboto',sans-serif] text-[#18324B] sm:px-6 lg:px-10">
      {/* Hero banner */}
      <section
        aria-labelledby="release-window-title"
        className="relative flex min-h-[240px] w-full items-center overflow-hidden rounded-[10px] border border-[#344D42] bg-[#071C30] bg-cover bg-center bg-no-repeat sm:min-h-[270px] lg:min-h-[310px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,27,46,0.94) 0%, rgba(5,27,46,0.84) 45%, rgba(8,35,42,0.60) 100%), url('/globe.png')",
        }}
      >
        <div className="relative z-10 w-full px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <span className="mb-4 block text-[10px] font-bold uppercase tracking-[1.8px] text-[#D5F51F]">
            Insights
          </span>

          <h1
            id="release-window-title"
            className="m-0 max-w-[950px] text-[32px] font-bold leading-[1.15] tracking-[-0.8px] text-white sm:text-[40px] md:text-[46px] lg:text-[52px]"
          >
            Protecting content through a
            <br className="hidden sm:block" /> release window
          </h1>

          <p className="mt-4 max-w-[780px] text-[16px] font-normal leading-[1.7] text-[#D0DCE6]">
            How monitoring priorities can change from launch day to catalogue
            protection.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article
        aria-label="Release window monitoring"
        className="mx-auto w-full max-w-[800px] px-1 pb-8 pt-10 sm:px-0 sm:pt-14 lg:pt-16"
      >
        <div className="space-y-6">
          {articleParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="m-0 text-[16px] font-normal leading-[1.8] text-[#506A86]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* View all insights */}
        <a
          href="/insights"
          className="group mt-8 inline-flex items-center gap-2 border-b border-[#B7CC8B] pb-1.5 text-[14px] font-normal text-[#557C16] transition-colors duration-200 hover:border-[#8BB630] hover:text-[#344F0D] sm:mt-9"
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

export default ReleaseWindowMonitoring;
