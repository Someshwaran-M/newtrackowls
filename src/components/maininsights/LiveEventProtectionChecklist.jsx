
import React from "react";

const paragraphs = [
  "Start with the event schedule, licensed territories and an accurate reference asset list. Decide which public channels are in scope and how analysts will distinguish authorized distribution from suspected infringement.",

  "Confirm enforcement authorization before the event. Record the platform complaint requirements and agree an escalation route for high-priority findings.",

  "During the event, keep a timestamped record of findings, verification and submissions. After the event, separate confirmed removals from pending complaints and review repeat distribution patterns.",
];

function LiveEventProtectionChecklist() {
  return (
    <main className="mt-20 min-h-screen bg-[#EAF3F9] px-4 pb-16 pt-5 font-['Roboto',sans-serif] text-[#45637F] sm:px-6 lg:px-[110px]">
      {/* Hero banner */}
      <section
        aria-labelledby="live-event-title"
        className="relative isolate flex min-h-[270px] w-full items-center overflow-hidden rounded-[11px] border border-[#314D4C] bg-[#071C30] bg-cover bg-center sm:min-h-[320px] lg:min-h-[376px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,27,46,0.96) 0%, rgba(5,27,46,0.88) 42%, rgba(8,35,42,0.58) 100%), url('/globe.png')",
        }}
      >
        {/* Atmospheric background details */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 opacity-40"
          style={{
            background:
              "repeating-radial-gradient(circle at 53% 48%, transparent 0 32px, rgba(168,205,195,0.13) 33px 34px), repeating-linear-gradient(115deg, transparent 0 45px, rgba(168,205,195,0.05) 46px 47px)",
          }}
        />

        <div className="w-full max-w-[1000px] px-6 py-10 sm:px-9 md:px-[45px] lg:px-[45px]">
          <span className="mb-5 block text-[10px] font-extrabold uppercase tracking-[2px] text-[#D5F51F]">
            Insights
          </span>

          <h1
            id="live-event-title"
            className="max-w-[900px] text-[35px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white sm:text-[46px] md:text-[56px] lg:text-[66px]"
          >
            Before the whistle: planning
            <br className="hidden sm:block" /> live-event protection
          </h1>

          <p className="mt-5 max-w-[760px] text-[16px] font-normal leading-[1.7] text-[#D0DCE6]">
            The assets, authorizations and escalation paths to prepare before a
            broadcast.
          </p>
        </div>
      </section>

      {/* Article content */}
      <article
        aria-label="Live-event protection checklist"
        className="mx-auto w-full max-w-[872px] px-2 pb-2 pt-14 sm:px-0 sm:pt-[78px] lg:pt-[103px]"
      >
        <div className="space-y-6 sm:space-y-[27px]">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="m-0 text-[16px] font-normal leading-[1.8] text-[#506A86]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Return link */}
        <a
          href="/insights"
          className="group mt-12 inline-flex items-center gap-2 border-b border-[#A8C76B] pb-[5px] text-[14px] font-medium text-[#557C16] transition-colors duration-200 hover:border-[#8BB630] hover:text-[#344F0D] sm:mt-[54px]"
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

export default LiveEventProtectionChecklist;
