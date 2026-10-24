
import React, { useState } from "react";

const faqs = [
  {
    question: "What can TrackOwls help protect?",
    answer:
      "TrackOwls supports digital protection workflows for films, OTT releases, live streams, music, websites, social platforms, brands and other digital assets. The scope is agreed according to your content, rights and protection priorities.",
  },
  {
    question: "How do you distinguish a finding from an infringement?",
    answer:
      "A detected match is a finding that needs review, not automatic proof of infringement. Relevant source details and available evidence are assessed before a case is classified and any appropriate action is considered.",
  },
  {
    question: "Which channels can be included?",
    answer:
      "Depending on the agreed scope, coverage may include websites, search engines, social platforms, video and streaming services, mobile applications, app stores, marketplaces and domains. Access and available actions depend on each platform.",
  },
  {
    question: "How does a consultation lead to monitoring?",
    answer:
      "The process starts by understanding your assets, ownership or authorization, priorities and relevant channels. Together, the scope and reporting expectations are defined before an appropriate monitoring workflow is planned.",
  },
  {
    question: "Do I need to own the content to request protection?",
    answer:
      "You should own the relevant rights or be authorized to act for the rights holder. During consultation, the relevant ownership or authorization details and the intended protection scope can be discussed.",
  },
  {
    question: "What information is useful when reporting suspected piracy?",
    answer:
      "Useful information may include the original asset or reference URL, the suspected source URL, the affected content, relevant timestamps and any supporting evidence you already have. The exact requirements depend on the case.",
  },
  {
    question: "Can I monitor more than one type of digital asset?",
    answer:
      "Multiple asset types can be discussed as part of the protection scope. Coverage, priorities and reporting can be planned around your assets and the channels relevant to them.",
  },
  {
    question: "How are potential matches reviewed?",
    answer:
      "Potential matches are reviewed using available reference material, source details and relevant context. A match should not be treated as confirmed infringement without appropriate assessment.",
  },
  {
    question: "What does a protection report include?",
    answer:
      "Reporting can be planned around the agreed scope and available information, such as source details, evidence references, case status, response progress and follow-up requirements.",
  },
  {
    question: "Does every detected case result in content removal?",
    answer:
      "No. Detection does not guarantee removal or a particular outcome. Any response depends on the evidence, rights-holder authorization, platform procedures, applicable requirements and the decision of the relevant service.",
  },
  {
    question: "How can I discuss a protection plan for my business?",
    answer:
      "Contact TrackOwls to discuss your assets, protection priorities, relevant channels and reporting expectations. These details help establish a suitable scope for a potential engagement.",
  },
];

function PlusIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-[18px] w-[18px] transition-transform duration-300 ${
        open ? "rotate-45" : "rotate-0"
      }`}
    >
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 4);

  return (
    <section
      id="home-faq"
      className="w-full border-t border-[rgba(171,198,215,0.15)] bg-transparent py-10 font-['Roboto',sans-serif] text-white sm:py-12 lg:py-16"
    >
      <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-12 xl:px-[4.8%]">
        {/* Heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-[rgba(171,198,215,0.15)] pb-10 sm:mb-0 sm:flex-row sm:items-center sm:pb-12">
          <div className="min-w-0">
            <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.19em] text-[#d1ed14] sm:text-xs">
              Your questions
            </p>

            <h2 className="m-0 text-[36px] font-bold leading-[1.1] tracking-[-0.045em] text-[#f8fafc] sm:text-[48px] lg:text-[54px]">
              Know what to{" "}
              <span className="text-[#d1ed14]">expect.</span>
            </h2>
          </div>

          <p className="m-0 max-w-[440px] text-[15px] leading-[1.8] text-[#b7cbd9] sm:text-base">
            Understand the scope, evidence and reporting before you start a
            protection engagement.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="w-full">
          {displayedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-[rgba(171,198,215,0.15)]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center justify-between gap-5 py-[25px] text-left sm:py-[29px]"
                >
                  <span className="text-[16px] font-medium leading-relaxed text-white transition-colors duration-200 group-hover:text-[#d1ed14] sm:text-[18px]">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center transition-colors duration-200 ${
                      isOpen
                        ? "text-[#d1ed14]"
                        : "text-[#d1ed14]/70 group-hover:text-[#d1ed14]"
                    }`}
                  >
                    <PlusIcon open={isOpen} />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 max-w-[900px] pb-6 pr-8 text-[14px] leading-[1.9] text-[#b7cbd9] sm:text-[15px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all questions */}
        <div className="mt-9 sm:mt-10">
          <button
            type="button"
            onClick={() => {
              setShowAll((previous) => !previous);
              setOpenIndex(null);
            }}
            className="group inline-flex items-center gap-2 border-b border-[#d1ed14]/50 pb-2 text-[13px] font-medium text-[#d1ed14] transition-colors duration-300 hover:border-[#d1ed14] hover:text-white sm:text-sm"
          >
            <span>
              {showAll ? "View fewer questions" : "View all questions"}
            </span>

            <svg
              viewBox="0 0 24 24"
              fill="none"
              className={`h-4 w-4 transition-transform duration-300 ${
                showAll
                  ? "-rotate-90"
                  : "translate-x-0 group-hover:translate-x-1"
              }`}
              aria-hidden="true"
            >
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
