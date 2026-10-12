
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
      className="w-full bg-white px-4 py-6 font-['Roboto',sans-serif] sm:px-6 lg:px-28"
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fieldNotes.map((note, index) => (
          <article
            key={note.title}
            className="group flex min-h-[245px] flex-col rounded-[5px] border border-[#D2E0EE] bg-white px-6 py-7 transition-all duration-300 hover:border-[#8BB630] hover:shadow-[0_8px_24px_rgba(21,51,78,0.06)] sm:min-h-[245px] lg:min-h-[245px]"
          >
            <span className="mb-4 text-[10px] font-bold uppercase tracking-[2px] text-[#617D17]">
              Field notes
            </span>

            <h2 className="max-w-[340px] text-[21px] font-bold leading-[1.3] tracking-[-0.65px] text-[#15334E] transition-colors duration-300 group-hover:text-[#648A13]">
              {note.title}
            </h2>

            <p className="mt-4 text-[13px] leading-[1.65] text-[#45637F]">
              {note.description}
            </p>

            <a
              href={note.link}
              className="mt-auto inline-flex w-fit items-center gap-2 border-b border-[#8BB630]/50 pb-1 pt-5 text-[12px] font-medium text-[#648A13] transition-all duration-300 hover:border-[#648A13] hover:text-[#456D0B]"
              aria-label={`Read more: ${note.title}`}
            >
              Read more
              <span className="translate-x-0 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                →
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default InsightsFieldNotes;
