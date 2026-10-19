import React, { useState } from "react";

const faqItems = [
  {
    question: "What can TrackOwls help protect?",
    answer:
      "Engagements can focus on films, episodes, live broadcasts, music, digital publications or brand assets. The asset list and service scope are agreed before work begins.",
  },
  {
    question: "How do you distinguish a finding from an infringement?",
    answer:
      "A discovery is a lead. Analyst review checks the supplied rights, asset reference and source context before treating it as a verified case for action.",
  },
  {
    question: "Which channels can be included?",
    answer:
      "The scope may include public websites, video and social platforms, marketplaces, domains and public app listings. Access, monitoring methods and reporting routes are confirmed for the selected channels.",
  },
  {
    question: "How does a consultation lead to monitoring?",
    answer:
      "Share the assets, relevant rights, priority channels and timelines. The next step is to agree authorization, coverage hours, response targets, reporting and commercial terms.",
  },
  {
    question: "What does an enforcement report include?",
    answer:
      "Reports separate discovered leads, verified cases, submitted complaints and confirmed outcomes. They can also show pending reviews, repeat appearances and channel-level activity.",
  },
  {
    question: "Is the dashboard a live client portal?",
    answer:
      "The dashboard on this website is an interactive concept for the planned TrackOwls platform. Product availability, integrations and client access are confirmed directly.",
  },
  {
    question: "Do complaints guarantee removal?",
    answer:
      "No. The receiving platform or provider decides whether and when to act. TrackOwls records the complaint status and checks the source rather than treating submission as a confirmed removal.",
  },
];

function SolutionsFAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? -1 : index
    );
  };

  return (
    <section
      id="solutions-faq"
      className="w-full bg-[#EAF3F9] px-4 py-10 font-['Roboto',sans-serif] sm:px-6 sm:py-12 lg:px-28 lg:py-14"
    >
      <div className="mx-auto w-full max-w-[1320px]">
        {/* Heading and description */}
        <div className="mb-8 grid grid-cols-1 gap-5 sm:mb-10 sm:grid-cols-[1fr_0.65fr] sm:items-end lg:mb-12">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[1.8px] text-[#648A13]">
              <span className="h-[2px] w-5 bg-[#8BB630]" />
              Your questions
            </span>

            <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.8px] text-[#19334E] sm:text-[36px] lg:text-[42px] lg:tracking-[-1.2px]">
              Know what to expect.
            </h2>
          </div>

          <p className="max-w-[390px] text-[14px] leading-[1.8] text-[#526B86] sm:justify-self-end lg:text-[15px]">
            Understand the scope, evidence and reporting before you start a
            protection engagement.
          </p>
        </div>

        {/* FAQ list */}
        <div className="border-t border-[#C9DDED]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `solutions-faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className="border-b border-[#C9DDED]"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleFAQ(index)}
                  className="flex min-h-[60px] w-full items-center justify-between gap-5 py-5 text-left text-[14px] font-medium leading-[1.6] text-[#294761] transition-colors duration-200 hover:text-[#648A13] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8BB630] sm:min-h-[66px] sm:py-5 sm:text-[15px] lg:text-[16px]"
                >
                  <span className="pr-2">{item.question}</span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C9DDED] text-[20px] font-normal leading-none text-[#399BC0] transition-all duration-200 ${
                      isOpen
                        ? "rotate-45 border-[#8BB630] text-[#648A13]"
                        : "rotate-0"
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                <div
                  id={answerId}
                  hidden={!isOpen}
                  className="pb-5 pr-8 sm:pb-6"
                >
                  <p className="max-w-[850px] text-[13px] leading-[1.85] text-[#526B86] sm:text-[14px] sm:leading-[1.9]">
                    {item.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SolutionsFAQ;
