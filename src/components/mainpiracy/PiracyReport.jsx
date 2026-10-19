
import React, { useEffect, useState } from "react";

const reportSections = [
  { id: "executive-summary", label: "Executive summary" },
  { id: "research-landscape", label: "01 / Research landscape" },
  { id: "film-production", label: "02 / Film & production" },
  { id: "ott-streaming", label: "03 / OTT & streaming" },
  { id: "live-sports", label: "04 / Live sports & events" },
  { id: "exposure-pathways", label: "05 / Exposure pathways" },
  { id: "commercial-impact", label: "06 / Commercial impact" },
  { id: "measurement-framework", label: "07 / Measurement framework" },
  { id: "protection-roadmap", label: "08 / Protection roadmap" },
  { id: "methodology-sources", label: "Methodology & sources" },
];

const perspectives = [
  {
    id: "summary",
    text: "The goal is a defensible view of exposure and response, rather than the largest possible detection count.",
  },
  {
    id: "research",
    text: "Always preserve the year, geography, metric and method beside a headline number.",
  },
  {
    id: "film",
    text: "Decision metrics: first verified leak, high-priority sources, response time by release window, and repeat availability.",
  },
  {
    id: "ott",
    text: "Decision metrics: exposure by title, catalogue coverage, recurring operators, confirmed outcomes and separately evaluated subscriber effects.",
  },
  {
    id: "sports",
    text: "Decision metrics: time to action, verified live sources, monitored event minutes, live-window outcomes and recurrence.",
  },
  {
    id: "exposure",
    text: "An outcome should specify what changed: a listing, a discovery link, a hosted file or an active broadcast.",
  },
  {
    id: "commercial",
    text: "Qualified unauthorized consumption × estimated legal displacement × net revenue per legal transaction. This estimates exposure, not automatic recovery.",
  },
  {
    id: "measurement",
    text: "A smaller number supported by consistent definitions is more useful than a larger number that cannot be reconciled.",
  },
  {
    id: "roadmap",
    text: "Start with an asset list, ownership evidence, territory map, release or event schedule, priority channels and reporting requirements.",
  },
];

const sources = [
  {
    number: "[1]",
    title: "MUSO — 2024 Piracy Trends and Insights (published 2025)",
    url: "https://www.muso.com/",
  },
  {
    number: "[2]",
    title: "U.S. Chamber / NERA — Impacts of Digital Piracy on the U.S. Economy (2019)",
    url: "https://www.uschamber.com/",
  },
  {
    number: "[3]",
    title: "Synamedia / Ampere — Pricing piracy: the value of action (2021)",
    url: "https://www.synamedia.com/",
  },
];

const goToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setActiveSection(id);
  setMenuOpen(false);
};

function Eyebrow({ children }) {
  return (
    <p className="mb-3 text-[11px] sm:text-xs font-bold uppercase tracking-[2px] text-[#617D17]">
      {children}
    </p>
  );
}

function Perspective({ children }) {
  return (
    <aside className="mt-7 border-l-2 border-[#8BB630] bg-[#EDF3E8] px-5 py-4 sm:px-6">
      <p className="mb-2 text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[1.7px] text-[#15334E]">
        TrackOwls perspective
      </p>
      <p className="text-sm sm:text-[15px] leading-[1.85] text-[#15334E]">
        {children}
      </p>
    </aside>
  );
}

function ReportSection({ id, eyebrow, title, children, perspective }) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-[#D5E1ED] py-8 sm:py-10"
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

      <h2 className="mb-4 text-[27px] sm:text-[32px] lg:text-[34px] font-bold leading-[1.2] tracking-[-0.7px] text-[#15334E]">
        {title}
      </h2>

      <div className="space-y-5 text-sm sm:text-[15px] leading-[1.9] text-[#15334E]">
        {children}
      </div>

      {perspective && <Perspective>{perspective}</Perspective>}
    </section>
  );
}

function ReportTopic({ title, children }) {
  return (
    <div>
      <h3 className="mb-2 text-[15px] sm:text-base font-semibold leading-snug text-[#15334E]">
        {title}
      </h3>
      <p className="text-[13px] sm:text-sm leading-[1.9] text-[#45637F]">
        {children}
      </p>
    </div>
  );
}

function PiracyReport() {
  const [activeSection, setActiveSection] = useState("executive-summary");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    reportSections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const goToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setActiveSection(id);
    setMenuOpen(false);
  };

  const downloadReport = () => {
    const link = document.createElement("a");
    link.href = "/reports/digital-piracy-report.pdf";
    link.download = "TrackOwls-Digital-Piracy-Report.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <main
      id="piracy-report-content"
      className="min-h-screen bg-[#EAF3F9] font-['Roboto',sans-serif] text-[#15334E]"
    >
      <div className="mx-auto max-w-[1400px]  px-4 py-26 sm:px-6 sm:py-28 lg:px-8">
        {/* Mobile table of contents */}
        <div className="mb-6 lg:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            className="flex w-full items-center justify-between border border-[#D5E1ED] border-t-2 border-t-[#8BB630] bg-[#EEF3E9] px-4 py-4 text-left text-sm font-bold"
          >
            <span>IN THIS REPORT</span>
            
          </button>

          {menuOpen && (
            <nav className="border border-t-0 border-[#D5E1ED] bg-[#E2E9E5] p-3">
              {reportSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goToSection(section.id)}
                  className={`block w-full px-3 py-3 text-left text-[13px] transition-colors ${
                    activeSection === section.id
                      ? "bg-[#EDF3E8] font-bold text-[#648A13]"
                      : "text-[#45637F] hover:text-[#648A13]"
                  }`}
                >
                  {section.label}
                </button>
              ))}

              <button
                type="button"
                onClick={downloadReport}
                className="mt-2 border-t border-[#D5E1ED] px-3 pt-4 text-[13px] font-semibold text-[#648A13] underline decoration-[#8BB630] underline-offset-4"
              >
                Download PDF →
              </button>
            </nav>
          )}
        </div>

        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[185px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[205px_minmax(0,1fr)] xl:gap-14">
          {/* Desktop sticky sidebar */}
          <aside className="sticky top-28 hidden max-h-[calc(100vh-8rem)] self-start overflow-y-auto border-t-2 border-[#8BB630] bg-[#EEF3E9] px-4 py-5 lg:block">
            <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[1.5px] text-[#617D17]">
              In this report
            </p>

            <nav className="space-y-1">
              {reportSections.map((section) => (
                <button
                  key={section.id}
                  type="button"
                  onClick={() => goToSection(section.id)}
                  className={`block w-full py-2 text-left text-[12px] leading-[1.6] transition-colors ${
                    activeSection === section.id
                      ? "font-bold text-[#648A13]"
                      : "text-[#45637F] hover:text-[#648A13]"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>

            <button
              type="button"
              onClick={downloadReport}
              className="mt-4 border-b border-[#8BB630] pb-1 text-left text-[12px] font-medium text-[#648A13] transition-colors hover:text-[#15334E]"
            >
              Download PDF →
            </button>
          </aside>

          {/* Report content */}
          <article className="min-w-0">
            {/* Editorial introduction */}
            <header className="pb-8">
              <Eyebrow>Editorial purpose</Eyebrow>

              <h1 className="max-w-[800px] text-[36px] sm:text-[46px] lg:text-[54px] font-bold leading-[1.16] tracking-[-1.1px] sm:tracking-[-1.5px] text-[#15334E]">
                Clear evidence.
                <br />
                Better protection decisions.
              </h1>

              <p className="mt-4 max-w-[900px] text-sm sm:text-base leading-[1.95] text-[#45637F]">
                This TrackOwls report brings together attributed secondary
                research and original operational guidance for rights holders.
                It is designed to help you ask better questions about piracy
                exposure, commercial risk and enforcement outcomes.
              </p>

              <p className="mt-4 text-xs sm:text-sm leading-[1.9] text-[#617D17]">
                This is an editorial synthesis, not a TrackOwls survey or a
                client-results study. Research figures retain their original
                dates and scope.
              </p>
            </header>

            {/* Executive summary */}
            <ReportSection
              id="executive-summary"
              title="Measure the threat. Protect the value."
              perspective={perspectives[0].text}
            >
              <p>
                Piracy is a commercial challenge as well as an infringement
                problem. A useful protection programme connects the content at
                risk, the evidence behind each finding and the business window
                in which action matters.
              </p>

              <ReportTopic title="Three priorities for rights holders">
                For production teams, the priority is release integrity:
                preventing a leak from undermining the sequence of theatrical,
                transactional and licensed windows. For OTT services, it is
                catalogue access and integrity: distinguishing unauthorized
                distribution from ordinary demand. For live events, it is
                timing: an action during a broadcast serves a different
                purpose from a removal confirmed after the audience has moved
                on.
              </ReportTopic>

              <ReportTopic title="Count evidence before counting impact">
                Raw search results, verified infringements, enforcement
                submissions and confirmed outcomes are different measures.
                Combining them into a single takedown number makes reports
                harder to interpret. A sound reporting process preserves the
                distinction and describes coverage gaps.
              </ReportTopic>

              <ReportTopic title="Revenue loss needs its own analysis">
                A pirate visit is not automatically a lost sale. Commercial
                estimates need assumptions about legal availability, existing
                paid access, duplicate consumption and willingness to pay.
                Financial exposure should be expressed as a range with the
                assumptions visible.
              </ReportTopic>
            </ReportSection>

            {/* Research landscape */}
            <ReportSection
              id="research-landscape"
              eyebrow="01 / Research landscape"
              title="What the published numbers can tell us"
              perspective={perspectives[1].text}
            >
              <p>
                Published research offers a starting point for understanding
                scale. It cannot replace asset-level evidence, nor can
                unrelated estimates be combined into one market-loss figure.
              </p>

              <div className="grid grid-cols-1 border-b-2 border-[#8BB630] bg-[#102D45] text-white sm:grid-cols-3">
                {[
                  {
                    value: "216.3bn",
                    label: "Global piracy website visits",
                    source: "[1]",
                  },
                  {
                    value: "$29.2bn",
                    label: "Estimated annual U.S. revenue loss",
                    source: "[2]",
                  },
                  {
                    value: "$28.3bn",
                    label: "Potential annual sports revenue",
                    source: "[3]",
                  },
                ].map((metric) => (
                  <div
                    key={metric.source}
                    className="border-b border-white/15 px-4 py-5 sm:border-b-0 sm:border-r sm:px-3 lg:px-4"
                  >
                    <p className="text-[25px] sm:text-[24px] lg:text-[27px] font-extrabold tracking-[-0.5px] text-[#D5F51F]">
                      {metric.value}
                    </p>
                    <p className="mt-3 text-xs sm:text-sm font-semibold leading-relaxed">
                      {metric.label}
                    </p>
                    <a
                      href="#methodology-sources"
                      className="mt-3 inline-block text-[11px] sm:text-xs text-[#D1DEEA] underline underline-offset-2 hover:text-[#D5F51F]"
                    >
                      Source {metric.source}
                    </a>
                  </div>
                ))}
              </div>

              <ReportTopic title="Traffic is a demand signal">
                MUSO's 2024 report measured 216.3 billion global piracy website
                visits across TV, film, publishing, music and software. TV
                accounted for 96.8 billion visits and film for 24.3 billion.
                These are visits to measured websites, not unique viewers,
                completed streams or paid transactions. [1]
              </ReportTopic>

              <ReportTopic title="Economic models answer a different question">
                The 2019 U.S. Chamber / NERA analysis estimated at least $29.2
                billion in annual U.S. revenue losses associated with global
                online video piracy. Its geography, year and macroeconomic
                approach make it a historical benchmark, rather than a current
                loss estimate for an individual service. [2]
              </ReportTopic>

              <ReportTopic title="Opportunity is not the same as loss">
                A 2021 Synamedia / Ampere model estimated up to $28.3 billion
                in potential annual sports revenue from reducing piracy,
                including $5.4 billion for OTT sports. The result depends on
                conversion assumptions and is not a measured loss or a
                guaranteed financial recovery. [3]
              </ReportTopic>
            </ReportSection>

            {/* Film and production */}
            <ReportSection
              id="film-production"
              eyebrow="02 / Film & production"
              title="A release is a sequence of value windows"
              perspective={perspectives[2].text}
            >
              <p>
                Production investment is monetized through a sequence of
                rights, territories and release dates. Protection should
                reflect that sequence instead of treating every unauthorized
                copy as equally urgent.
              </p>

              <ReportTopic title="Before release: prepare the evidence">
                Maintain a controlled asset register covering titles,
                alternate names, approved distributors and territorial rights.
                Identify screeners and other sensitive copies. Prepare
                ownership evidence and escalation contacts before a suspected
                leak needs urgent verification.
              </ReportTopic>

              <ReportTopic title="During release: prioritize the window">
                A verified pre-release copy, a theatrical recording and a
                post-release re-upload may demand different responses. Record
                the first observation time, copy type, language, territory and
                distribution channel. Use those attributes to prioritize
                investigation and enforcement.
              </ReportTopic>

              <ReportTopic title="After action: examine recurrence">
                A removed URL does not necessarily mean the source of
                distribution has stopped. Track repeat uploads and related
                sources, with evidence linking each finding. Use the history
                to adjust monitoring and explain continuing exposure to
                distribution partners.
              </ReportTopic>
            </ReportSection>

            {/* OTT and streaming */}
            <ReportSection
              id="ott-streaming"
              eyebrow="03 / OTT & streaming"
              title="Protect the catalogue without overstating the loss"
              perspective={perspectives[3].text}
            >
              <p>
                An OTT catalogue combines different monetization models,
                release schedules and audience segments. Exposure needs to be
                understood at title and episode level before it can be
                connected to subscription or advertising outcomes.
              </p>

              <ReportTopic title="Separate distribution patterns">
                Distinguish copied on-demand files, unauthorized streaming
                pages, paid pirate services and live retransmissions. Record
                what was accessible and when. A page advertising a title is
                a lead to investigate; it is not sufficient evidence of a
                playable infringing copy.
              </ReportTopic>

              <ReportTopic title="Match the monitoring to the catalogue">
                Agree which premieres, languages, episodes and territories
                take priority. Track monitored assets as well as findings.
                Otherwise, a reduction in detections could simply reflect a
                smaller monitoring scope rather than reduced infringement.
              </ReportTopic>

              <ReportTopic title="Study audience effects separately">
                Subscription conversion, churn and advertising displacement
                cannot be inferred from URL counts. Where appropriate, compare
                lawful aggregated business data across relevant periods or
                groups, accounting for pricing, marketing and changes in legal
                availability. Explain any remaining uncertainty.
              </ReportTopic>
            </ReportSection>

            {/* Live sports and events */}
            <ReportSection
              id="live-sports"
              eyebrow="04 / Live sports & events"
              title="Protect the moment while it still matters"
              perspective={perspectives[4].text}
            >
              <p>
                For a live match, concert or ticketed broadcast, the practical
                value of enforcement depends on the event clock. Operational
                reporting should show whether action occurred during the
                monetization window.
              </p>

              <ReportTopic title="Before the event">
                Confirm the schedule, territorial rights, authorized feeds,
                priority platforms and escalation contacts. Define how staff
                will verify a stream and preserve timestamps. Prepare
                event-specific rights evidence and agree a process for
                changing priorities when the broadcast schedule moves.
              </ReportTopic>

              <ReportTopic title="During the event">
                Record detection, verification, submission and confirmation
                times separately. Prioritize active unauthorized streams
                according to the agreed criteria. A complaint submission is
                an action taken; it is not proof that the stream stopped.
                Check availability again before recording a confirmed outcome.
              </ReportTopic>

              <ReportTopic title="After the event">
                Separate live-window outcomes from delayed removals. Review
                recurring sources and any blind spots in event coverage. This
                review should inform the next event's monitoring plan rather
                than produce a retrospective claim that every removed stream
                represents a recovered purchase.
              </ReportTopic>
            </ReportSection>

            {/* Exposure pathways */}
            <ReportSection
              id="exposure-pathways"
              eyebrow="05 / Exposure pathways"
              title="Understand the route, not only the URL"
              perspective={perspectives[5].text}
            >
              <p>
                A discovery channel, a content host and a retransmitting
                operator may play different roles. Classifying those roles
                helps teams select an appropriate response and avoid treating
                all findings as interchangeable.
              </p>

              <ReportTopic title="Discovery and promotion">
                Search results, social posts and public channels can direct
                audiences to another location. Preserve the referring page
                and destination. Removing a promotional link may reduce
                discovery while leaving the hosted content available.
              </ReportTopic>

              <ReportTopic title="Hosting and distribution">
                File hosts, streaming pages and apps may provide the content
                directly or link to another service. Record the actual
                accessible location and distinguish it from an advertisement
                or misleading title. Follow only authorized investigation
                methods; do not bypass private access controls.
              </ReportTopic>

              <ReportTopic title="Repeat operators and linked sources">
                Record relationships only when supported by evidence, such as
                a shared contact detail or a directly linked destination.
                Similar layouts or naming patterns can guide investigation
                but do not establish common ownership. Keep confidence levels
                visible in intelligence notes.
              </ReportTopic>
            </ReportSection>

            {/* Commercial impact */}
            <ReportSection
              id="commercial-impact"
              eyebrow="06 / Commercial impact"
              title="From exposure to a defensible estimate"
              perspective={perspectives[6].text}
            >
              <p>
                The financial question is how much qualified unauthorized
                consumption displaced paid legal consumption. Answering it
                requires transparent assumptions, rather than multiplying
                every detected URL by a retail price.
              </p>

              <ReportTopic title="Build the baseline">
                Define the asset, territory, legal offer and measurement
                period. Estimate qualified unauthorized consumption with a
                documented method. Remove duplicates where possible and
                explain unknowns. A URL total alone is not a consumption
                estimate.
              </ReportTopic>

              <ReportTopic title="Model displacement">
                Estimate the share that would otherwise have used a paid
                legal option. Consider viewers who already pay, viewers
                without a relevant legal offer and viewers unlikely to buy.
                Apply net revenue per transaction or the appropriate
                contribution for the actual business model, rather than an
                unrelated headline price.
              </ReportTopic>

              <ReportTopic title="Use scenarios and separate costs">
                Present low, base and high scenarios with their assumptions.
                Keep investigation and enforcement costs distinct from modeled
                revenue exposure. To claim incremental revenue from an
                intervention, compare against a credible baseline and consider
                other drivers of sales.
              </ReportTopic>
            </ReportSection>

            {/* Measurement framework */}
            <ReportSection
              id="measurement-framework"
              eyebrow="07 / Measurement framework"
              title="A report that supports decisions"
              perspective={perspectives[7].text}
            >
              <p>
                Use a stable reporting cohort and explicit definitions.
                Changing the denominator, coverage period or meaning of a
                removal between reports can create misleading comparisons.
              </p>

              <ReportTopic title="Keep the case stages distinct">
                Show discovered leads, verified cases, submitted actions and
                confirmed outcomes separately. Retain a case reference and
                timestamp for each stage. Deduplicate the source records
                before presenting totals.
              </ReportTopic>

              <ReportTopic title="Publish the limitations">
                State the agreed monitoring channels and asset list, hours of
                coverage and any unavailable sources. Give estimates a
                confidence or uncertainty note. Avoid presenting inaccessible
                channels as fully monitored.
              </ReportTopic>

              <div className="mt-6 divide-y divide-[#D5E1ED] border-y border-[#D5E1ED]">
                {[
                  [
                    "Verified sources",
                    "Deduplicated URLs or streams confirmed to match the protected asset; keep raw discoveries separate.",
                  ],
                  [
                    "Response time",
                    "Median detection-to-verification and verification-to-submission time, with the measurement window stated.",
                  ],
                  [
                    "Confirmed removal rate",
                    "Confirmed removals divided by verified sources in the same defined cohort; show pending cases separately.",
                  ],
                  [
                    "Repeat infringement",
                    "The share of actioned sources or operators found again within an explicitly defined follow-up period.",
                  ],
                  [
                    "Coverage",
                    "The agreed titles, territories, platforms and event hours actually monitored, including known gaps.",
                  ],
                  [
                    "Estimated exposure",
                    "Reach or consumption estimates with their method and uncertainty; never present them as verified lost sales.",
                  ],
                ].map(([label, description]) => (
                  <div
                    key={label}
                    className="grid grid-cols-1 gap-1.5 py-4 sm:grid-cols-[170px_minmax(0,1fr)] sm:gap-5"
                  >
                    <h3 className="text-sm font-bold text-[#15334E]">
                      {label}
                    </h3>
                    <p className="text-[13px] sm:text-sm leading-[1.9] text-[#45637F]">
                      {description}
                    </p>
                  </div>
                ))}
              </div>
            </ReportSection>

            {/* Protection roadmap */}
            <ReportSection
              id="protection-roadmap"
              eyebrow="08 / Protection roadmap"
              title="Build a repeatable protection programme"
              perspective={perspectives[8].text}
            >
              <p>
                The following sequence is an original TrackOwls planning
                framework. It is a practical guide, not a promise of particular
                outcomes or access to every platform.
              </p>

              <ReportTopic title="Stage 1 / Scope and prepare">
                Agree the protected assets, rights, territories, channels and
                event or release dates. Set priority rules, reporting
                definitions and authorized investigation methods. Collect
                evidence of ownership and identify the people who can approve
                escalations.
              </ReportTopic>

              <ReportTopic title="Stage 2 / Discover, verify and act">
                Capture findings in a consistent format. Review the content
                match and rights position, deduplicate the record and submit
                through the applicable reporting channel. Preserve submission
                references and response history. Escalate unresolved cases
                using the agreed process.
              </ReportTopic>

              <ReportTopic title="Stage 3 / Confirm and improve">
                Recheck availability, distinguish confirmed outcomes from
                pending cases and examine recurrence. Review coverage against
                the brief. Use operational findings to adjust priorities, and
                evaluate commercial impact separately when suitable business
                data is available.
              </ReportTopic>
            </ReportSection>

            {/* Methodology and sources */}
            <ReportSection
              id="methodology-sources"
              eyebrow="Methodology & research notes"
              title="Transparent sources. Clear boundaries."
            >
              <ReportTopic title="What this report is based on">
                TrackOwls prepared this editorial synthesis using the three
                publications below. There was no original consumer survey,
                proprietary traffic measurement or client-results dataset.
                The sector analysis, reporting framework and protection
                roadmap are original editorial recommendations.
              </ReportTopic>

              <ReportTopic title="Scope and limitations">
                Traffic, economic-loss and revenue-opportunity measures
                describe different populations and periods. None is a current
                India-only piracy loss total. Do not add these figures
                together, treat them as equivalent or interpret them as
                results achieved by TrackOwls.
              </ReportTopic>

              <div className="space-y-4 py-2">
                {sources.map((source) => (
                  <div key={source.number} className="flex gap-2">
                    <span className="shrink-0 text-[13px] font-semibold text-[#617D17]">
                      {source.number}
                    </span>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[13px] sm:text-sm leading-[1.8] text-[#15334E] underline decoration-[#8BB630] underline-offset-4 transition-colors hover:text-[#648A13]"
                    >
                      {source.title}
                    </a>
                  </div>
                ))}
              </div>

              <p className="text-xs sm:text-sm leading-[1.9] text-[#617D17]">
                Original TrackOwls editorial report · October 2026. External
                research is attributed for context; no research partnership
                or affiliation is implied.
              </p>

              <button
                type="button"
                onClick={downloadReport}
                className="mt-3 inline-flex min-h-[46px] items-center justify-center bg-[#648A13] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#7C9D18] focus:outline-none focus:ring-2 focus:ring-[#8BB630] focus:ring-offset-2"
              >
                Download the complete report
              </button>
            </ReportSection>

            <footer className="border-t border-[#D5E1ED] py-6">
              <div className="flex flex-col justify-between gap-3 text-xs text-[#617D17] sm:flex-row sm:items-center">
                <span>
                  © {new Date().getFullYear()} TrackOwls Anti-Piracy Private
                  Limited
                </span>
                <button
                  type="button"
                  onClick={() => goToSection("executive-summary")}
                  className="self-start font-semibold text-[#648A13] underline decoration-[#8BB630] underline-offset-4 hover:text-[#15334E] sm:self-auto"
                >
                  Back to report start ↑
                </button>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </main>
  );
}

export default PiracyReport;
