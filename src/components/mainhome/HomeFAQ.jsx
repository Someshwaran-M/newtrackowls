import React, { useState } from "react";

const faqs = [
  {
    question: "What can TrackOwls help protect?",
    answer:
      "TrackOwls supports digital protection workflows for films, OTT releases, live streams, music, websites, social platforms, brands and other digital assets. The scope is agreed according to your content, rights and protection priorities.",
    category: "Protection",
  },
  {
    question: "How do you distinguish a finding from an infringement?",
    answer:
      "A detected match is a finding that needs review, not automatic proof of infringement. Relevant source details and available evidence are assessed before a case is classified and any appropriate action is considered.",
    category: "Verification",
  },
  {
    question: "Which channels can be included?",
    answer:
      "Depending on the agreed scope, coverage may include websites, search engines, social platforms, video and streaming services, mobile applications, app stores, marketplaces and domains. Access and available actions depend on each platform.",
    category: "Coverage",
  },
  {
    question: "How does a consultation lead to monitoring?",
    answer:
      "The process starts by understanding your assets, ownership or authorization, priorities and relevant channels. Together, the scope and reporting expectations are defined before an appropriate monitoring workflow is planned.",
    category: "Getting started",
  },
  {
    question: "Do I need to own the content to request protection?",
    answer:
      "You should own the relevant rights or be authorized to act for the rights holder. During consultation, the relevant ownership or authorization details and the intended protection scope can be discussed.",
    category: "Authorization",
  },
  {
    question: "What information is useful when reporting suspected piracy?",
    answer:
      "Useful information may include the original asset or reference URL, the suspected source URL, the affected content, relevant timestamps and any supporting evidence you already have. The exact requirements depend on the case.",
    category: "Evidence",
  },
  {
    question: "Can I monitor more than one type of digital asset?",
    answer:
      "Multiple asset types can be discussed as part of the protection scope. Coverage, priorities and reporting can be planned around your assets and the channels relevant to them.",
    category: "Coverage",
  },
  {
    question: "How are potential matches reviewed?",
    answer:
      "Potential matches are reviewed using available reference material, source details and relevant context. A match should not be treated as confirmed infringement without appropriate assessment.",
    category: "Verification",
  },
  {
    question: "What does a protection report include?",
    answer:
      "Reporting can be planned around the agreed scope and available information, such as source details, evidence references, case status, response progress and follow-up requirements.",
    category: "Reporting",
  },
  {
    question: "Does every detected case result in content removal?",
    answer:
      "No. Detection does not guarantee removal or a particular outcome. Any response depends on the evidence, rights-holder authorization, platform procedures, applicable requirements and the decision of the relevant service.",
    category: "Response",
  },
  {
    question: "How can I discuss a protection plan for my business?",
    answer:
      "Contact TrackOwls to discuss your assets, protection priorities, relevant channels and reporting expectations. These details help establish a suitable scope for a potential engagement.",
    category: "Getting started",
  },
];

function PlusIcon({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 transition-transform duration-300 ${
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

function ArrowIcon({ className = "h-4 w-4" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5 12h14m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", ...Array.from(new Set(faqs.map(f => f.category)))];
  
  // Filter by category first if selected
  const categoryFiltered = activeCategory === "All" 
    ? faqs 
    : faqs.filter(f => f.category === activeCategory);

  // Then limit to top 4 unless showAll is true (and category is All)
  const displayedFaqs = (showAll || activeCategory !== "All")
    ? categoryFiltered 
    : categoryFiltered.slice(0, 4);

  return (
    <section
      id="home-faq"
      className="relative isolate w-full overflow-hidden bg-white font-['Roboto',sans-serif] text-[#152019] py-16 sm:py-24 lg:py-28 border-t border-slate-100"
    >
      {/* Background glow accents */}
      <div className="absolute top-10 left-10 -translate-x-1/2 w-96 h-96 bg-[#ADD132]/10 pointer-events-none blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 translate-x-1/2 w-96 h-96 bg-[#ADD132]/10 pointer-events-none blur-3xl -z-10" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-12 sm:pb-16 border-b border-[#DCE4D8]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#ADD132]" />
              <p className="m-0 text-xs font-bold uppercase tracking-[0.2em] text-[#6D900B]">
                Knowledge centre
              </p>
            </div>

            <h2 className="m-0 max-w-[760px] text-[clamp(34px,5vw,56px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#152019]">
              Clarity before <span className="text-[#6D900B]">you take action.</span>
            </h2>
          </div>

          <p className="m-0 max-w-[420px] text-sm sm:text-base leading-relaxed text-[#68746C]">
            The essentials behind digital protection, evidence review and reporting — so you can understand the process before getting started.
          </p>
        </div>

        {/* CATEGORY FILTER PILLS */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5 pb-6 border-b border-[#DCE4D8]/60">
          <span className="text-xs font-bold uppercase tracking-wider text-[#68746C] mr-2">
            Filter by:
          </span>
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => {
                  setActiveCategory(cat);
                  setOpenIndex(0);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? "bg-[#6D900B] text-white shadow-sm"
                    : "bg-[#F5F8F2] text-[#68746C] border border-[#DCE4D8] hover:border-[#ADD132]"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* 2-COLUMN MODERN CARD GRID LAYOUT */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {displayedFaqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                  isOpen
                    ? "bg-[#F5F8F2] border-[#ADD132] shadow-md md:col-span-2"
                    : "bg-white border-[#DCE4D8] hover:border-[#ADD132]/60 hover:bg-[#F5F8F2]/30"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left gap-4"
                >
                  <div className="flex items-start gap-4 min-w-0">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-lg shrink-0 transition-colors mt-0.5 ${
                      isOpen ? "bg-[#6D900B] text-white" : "bg-[#F5F8F2] text-[#68746C]"
                    }`}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <span className="block mb-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#6D900B]">
                        {faq.category}
                      </span>
                      <h4 className={`text-base font-bold transition-colors ${
                        isOpen ? "text-[#152019]" : "text-[#152019]/90"
                      }`}>
                        {faq.question}
                      </h4>
                    </div>
                  </div>

                  <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? "bg-[#6D900B] text-white" : "bg-[#F5F8F2] text-[#68746C]"
                  }`}>
                    <PlusIcon open={isOpen} />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 border-t border-[#DCE4D8]/50 mt-2">
                    <p className="mt-4 text-sm leading-relaxed text-[#68746C]">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* VIEW MORE / VIEW LESS TOGGLE */}
        {activeCategory === "All" && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => {
                setShowAll(!showAll);
                setOpenIndex(0);
              }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-[#152019] text-white text-xs font-bold hover:bg-[#6D900B] transition-colors shadow-sm"
            >
              <span>{showAll ? "Show fewer questions" : `View more questions (${faqs.length - 4} more)`}</span>
              <ArrowIcon className={`h-4 w-4 transition-transform duration-300 ${showAll ? "rotate-[-90deg]" : "rotate-90"}`} />
            </button>
          </div>
        )}

        

      </div>
    </section>
  );
}