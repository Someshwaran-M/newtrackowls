import React from "react";

const repeatSourceParagraphs = [
  "Preserve the original finding even when a page disappears or an account changes its name. Keep source URLs, discovery times, screenshots and review notes associated with the case.",

  "When a suspected copy reappears, compare the new finding with the previous record. Similar content, naming or public contact details may suggest a relationship, but treat those observations as leads that require verification.",

  "A report should show which sources returned, which complaints remain pending and which outcomes were checked. That makes repeat-source analysis useful for setting the next monitoring priorities.",
];

function RepeatSourceInvestigation() {
  return (
    <main className="mx-auto mt-28 min-h-screen w-full max-w-[1450px] bg-white px-4 pb-16 font-['Roboto',sans-serif] text-[#18324B] sm:px-6 lg:px-10">
      {/* Hero banner */}
      <section
        aria-labelledby="repeat-source-title"
        className="relative mx-4 mt-6 flex min-h-[250px] items-center overflow-hidden rounded-[10px] border border-[#294438] bg-[#071C30] bg-cover bg-center bg-no-repeat sm:mx-6 sm:min-h-[280px] lg:mx-10 lg:min-h-[310px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,27,46,0.97) 0%, rgba(5,27,46,0.88) 48%, rgba(8,35,42,0.64) 100%), url('/globe.png')",
        }}
      >
        {/* Lime accent */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-28 bg-[#8BB630]" />

        <div className="relative z-10 w-full px-6 py-10 sm:px-9 sm:py-12 lg:px-12">
          <span className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2.5px] text-[#B4D957]">
            <span className="h-[2px] w-6 bg-[#8BB630]" />
            Insights
          </span>

          <h1
            id="repeat-source-title"
            className="m-0 max-w-[900px] text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white sm:text-[40px] md:text-[46px] lg:text-[52px]"
          >
            Following repeat sources
            <br className="hidden sm:block" /> without losing the evidence
          </h1>

          <p className="mt-5 max-w-[700px] text-[14px] leading-[1.8] text-[#D0DCE6] sm:text-[15px]">
            Use linked cases to understand recurring URLs, listings and public
            accounts.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article
        aria-label="Repeat source investigation"
        className="mx-auto w-full max-w-[780px] px-6 pb-16 pt-10 sm:px-8 sm:pt-14 lg:px-0 lg:pt-16"
      >
        <div className="space-y-6 sm:space-y-7">
          {repeatSourceParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="m-0 text-[14px] font-normal leading-[1.9] text-[#506A86] sm:text-[15px] sm:leading-[1.95]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Insights navigation */}
        <a
          href="/insights"
          className="group mt-9 inline-flex items-center gap-3 border-b border-[#B8CC8C] pb-2 text-[13px] font-medium text-[#557C16] transition-colors duration-200 hover:border-[#8BB630] hover:text-[#344F0D] sm:mt-10"
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

export default RepeatSourceInvestigation;
