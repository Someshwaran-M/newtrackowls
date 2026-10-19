
import React from "react";

const fieldNotes = [
  {
    title: "Before the whistle: planning live-event protection",
    description:
      "The assets, authorizations and escalation paths to prepare before a broadcast.",
    link: "/live-event-protection",
  },
  {
    title: "What a useful enforcement report should tell you",
    description:
      "Why detections, submissions and confirmed removals are different measures.",
    link: "/enforcement-reports",
  },
  {
    title: "Protecting content through a release window",
    description:
      "How monitoring priorities can change from launch day to catalogue protection.",
    link: "/release-window",
  },
  {
    title: "A brand reference pack that supports investigation",
    description:
      "Prepare logos, official channels and seller context before reviewing suspected misuse.",
    link: "/brand-investigation",
  },
  {
    title: "Following repeat sources without losing the evidence",
    description:
      "Use linked cases to understand recurring URLs, listings and public accounts.",
    link: "/repeat-sources",
  },
];

function InsightsFieldNotes() {
  return (
    <section
      id="insights-field-notes"
      className="relative isolate w-full overflow-hidden bg-[#EAF3F9] px-3 py-5 font-['Roboto',sans-serif] sm:px-5 sm:py-7 lg:px-8 lg:py-10"
    >
      {/* Subtle lime digital particles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(173,209,50,0.8) 0.7px, transparent 1px), radial-gradient(circle, rgba(173,209,50,0.4) 0.6px, transparent 1px)",
          backgroundSize: "29px 31px, 47px 43px",
          backgroundPosition: "0 0, 15px 19px",
          maskImage:
            "radial-gradient(ellipse at 95% 50%, black, transparent 55%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 95% 50%, black, transparent 55%)",
        }}
      />

      {/* Main light panel */}
      <div className="mx-auto w-full max-w-[1350px] rounded-[15px] border border-[#D0DAD6] bg-[#D3DCD8] px-5 py-6 sm:rounded-[18px] sm:px-8 sm:py-8 lg:px-[46px] lg:py-[46px]">
        {/* Field notes grid */}
        <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-[22px] lg:gap-y-[22px]">
          {fieldNotes.map((note) => (
            <article
              key={note.title}
              className="group flex min-h-[290px] flex-col rounded-[15px] border border-[#C8D5D0] bg-[#E2E9E5] px-6 py-7 transition-all duration-300 hover:border-[#9EAF91] hover:bg-[#EBF0ED] sm:min-h-[300px] sm:px-8 sm:py-8 lg:min-h-[300px] lg:rounded-[15px]"
            >
              {/* Eyebrow */}
              <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#5E8517]">
                Field notes
              </span>

              {/* Title */}
              <h2 className="mt-5 text-[23px] font-bold leading-[1.38] tracking-[-0.65px] text-[#17324B] transition-colors duration-300 group-hover:text-[#527A13] sm:text-[23px] lg:text-[24px]">
                {note.title}
              </h2>

              {/* Description */}
              <p className="mt-4 text-[14px] font-normal leading-[1.7] text-[#536A79]">
                {note.description}
              </p>

              {/* Read more link */}
              <a
                href={note.link}
                aria-label={`Read more: ${note.title}`}
                className="mt-auto inline-flex w-fit items-center gap-2 border-b border-[#8BB630]/45 pb-[5px] pt-7 text-[13px] font-medium text-[#628A13] transition-all duration-300 hover:border-[#628A13] hover:text-[#456B0B]"
              >
                Read more
                <span className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsightsFieldNotes;
