import React from "react";

const brandReferenceParagraphs = [
  "Create a consistent reference pack for the people reviewing your brand. Include current logos, approved product imagery, official domains and public social accounts. Add trademark references and the name of the person authorized to approve enforcement.",

  "Where available, document approved sellers and distributors. A seller outside that list may need review, but its absence does not by itself establish counterfeiting. Give analysts the context they need to assess a finding.",

  "Keep the reference pack current when campaigns, product ranges or distribution relationships change. Reliable references help reduce ambiguity and support a clear case record.",
];

function BrandReferenceChecklist() {
  return (
    <main className="mx-auto mt-20 min-h-screen w-full bg-[#EAF3F9] px-4 pt-5 pb-16 font-['Roboto',sans-serif] text-[#18324B] sm:px-6 lg:px-10">
      {/* Hero banner */}
      <section
        aria-labelledby="brand-reference-title"
        className="relative mx-4 mt-6 flex min-h-[250px] items-center overflow-hidden rounded-[10px] border border-[#294438] bg-[#071C30] bg-cover bg-center bg-no-repeat sm:mx-6 sm:min-h-[280px] lg:mx-10 lg:min-h-[310px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,27,46,0.97) 0%, rgba(5,27,46,0.88) 48%, rgba(8,35,42,0.64) 100%), url('/globe.png')",
        }}
      >
        {/* Subtle lime accent */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-[3px] w-28 bg-[#8BB630]" />

        <div className="relative z-10 w-full px-6 py-10 sm:px-9 sm:py-12 lg:px-12">
          <span className="mb-5 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[2.5px] text-[#B4D957]">
            <span className="h-[2px] w-6 bg-[#8BB630]" />
            Insights
          </span>

          <h1
            id="brand-reference-title"
            className="m-0 max-w-[850px] text-[32px] font-bold leading-[1.15] tracking-[-1px] text-white sm:text-[40px] md:text-[46px] lg:text-[52px]"
          >
            A brand reference pack that
            <br className="hidden sm:block" /> supports investigation
          </h1>

          <p className="mt-5 max-w-[700px] text-[14px] leading-[1.8] text-[#D0DCE6] sm:text-[15px]">
            Prepare logos, official channels and seller context before reviewing
            suspected misuse.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article
        aria-label="Brand reference checklist"
        className="mx-auto w-full max-w-[780px] px-6 pb-16 pt-10 sm:px-8 sm:pt-14 lg:px-0 lg:pt-16"
      >
        <div className="space-y-6 sm:space-y-7">
          {brandReferenceParagraphs.map((paragraph, index) => (
            <p
              key={index}
              className="m-0 text-[14px] font-normal leading-[1.9] text-[#506A86] sm:text-[15px] sm:leading-[1.95]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Return to insights */}
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

export default BrandReferenceChecklist;