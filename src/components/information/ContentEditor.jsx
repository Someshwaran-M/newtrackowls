import React from "react";

const editorSections = [
  {
    title: "Content ownership",
    description:
      "Creators, publishers and rights holders should maintain appropriate records of their original work and the rights they own or are authorized to represent.",
  },
  {
    title: "Reporting suspected infringement",
    description:
      "Provide the relevant content URL, details of the protected work, rights ownership information and supporting context when reporting suspected unauthorized use.",
  },
  {
    title: "Review and verification",
    description:
      "Reports may require additional information and verification before any enforcement request is coordinated. Submitting a report does not guarantee removal of the content.",
  },
  {
    title: "Editorial responsibility",
    description:
      "Content submitted for review should be accurate, relevant and lawfully shared. Do not submit misleading claims, harmful material or confidential information belonging to others.",
  },
];

function ContentEditor() {
  return (
    <main className="mx-auto w-full bg-[#EAF3F9] px-3 pt-5 pb-12 font-['Roboto',Arial,sans-serif] text-[#18324B] sm:mt-24 sm:px-5 sm:pb-16 lg:px-6">
      {/* Hero banner */}
      <section className="relative  flex min-h-[190px] items-center overflow-hidden rounded-lg border border-[#314B50] bg-[#071C30] sm:min-h-[205px] lg:min-h-[215px]">
        {/* World map background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/globe.png')",
          }}
        />

        {/* Contrast overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#071C30]/95 via-[#071C30]/85 to-[#071C30]/55"
        />

        {/* Lime-green ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 85% 45%, rgba(139,182,48,0.14), transparent 50%)",
          }}
        />

        {/* Banner content */}
        <div className="relative z-10 w-full px-5 py-9 sm:px-8 sm:py-11 lg:px-10">
          <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[1.6px] text-[#D5F51F]">
            <span className="h-[2px] w-5 bg-[#8BB630]" />
            Website information
          </span>

          <h1 className="mt-4 text-[32px] font-bold leading-[1.12] tracking-[-1.2px] text-white sm:text-[40px] sm:tracking-[-1.6px] lg:text-[46px]">
            Content Editor
          </h1>

          <p className="mt-4 max-w-[600px] text-[13px] leading-[1.8] text-[#D0DCE6] sm:text-[14px]">
            Guidance for responsible content review and infringement reporting.
          </p>
        </div>
      </section>

      {/* Main information */}
      <section
        aria-label="Content editor information"
        className="mx-auto mt-10 w-full max-w-[760px] px-2 sm:mt-14 sm:px-4 lg:mt-16"
      >
        <div className="space-y-8 sm:space-y-9">
          {editorSections.map((section) => (
            <article key={section.title} className="group">
              <h2 className="text-[17px] font-bold leading-[1.4] tracking-[-0.35px] text-[#18324B] transition-colors duration-200 group-hover:text-[#648A13] sm:text-[19px]">
                {section.title}
              </h2>

              <p className="mt-2.5 text-[13px] leading-[1.8] text-[#526B86] sm:mt-3 sm:text-[14px] sm:leading-[1.9]">
                {section.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 pt-5 sm:mt-10 sm:pt-6">
          <p className="text-[10px] leading-[1.8] text-[#71869B] sm:text-[11px]">
            Website notices prepared for this initial version. Final company
            details and policies require review before commercial public launch.
          </p>
        </div>
      </section>
    </main>
  );
}

export default ContentEditor;
