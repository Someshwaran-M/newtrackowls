
import React from "react";

const industries = [
  {
    number: "01",
    title: "Film & Entertainment",
    description: "Theatrical releases, films and production assets.",
  },
  {
    number: "02",
    title: "OTT & Streaming",
    description: "Series, premium video and on-demand catalogues.",
  },
  {
    number: "03",
    title: "Live Sports",
    description: "Time-sensitive events and broadcast rights.",
  },
  {
    number: "04",
    title: "Television & Broadcasting",
    description: "Channels, programmes and unauthorized redistribution.",
  },
  {
    number: "05",
    title: "Music",
    description: "Recordings, releases and protected audio assets.",
    image: "/images/industries/music-studio.jpg",
    imageAlt: "Professional music recording studio",
  },
  {
    number: "06",
    title: "Brands & IP Owners",
    description: "Trademarks, creative assets and brand identity.",
  },
  {
    number: "07",
    title: "Sportswear & Apparel Brands",
    description: "Brand identity, product imagery and suspicious online listings.",
  },
  {
    number: "08",
    title: "Publishers & Digital Creators",
    description: "Books, courses, software and original digital publications.",
  },
];

function IndustriesGrid() {
  return (
    <section
      id="industries-grid"
      className="w-full bg-white px-4 py-6 font-['Roboto',sans-serif] sm:px-6 lg:px-5 lg:py-3"
    >
      <div className="mx-auto max-w-[1290px]">
        <div className="grid grid-cols-1 border-l border-t border-[#D3E0ED] sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <article
              key={industry.number}
              className="group relative flex min-h-[198px] flex-col border-b border-r border-[#D3E0ED] px-6 py-7 transition-colors duration-300 hover:bg-white sm:min-h-[210px] sm:px-7 sm:py-8 lg:min-h-[198px]"
            >
              {industry.image && (
                <img
                  src={industry.image}
                  alt={industry.imageAlt}
                  loading="lazy"
                  className="mb-5 h-[134px] w-full rounded-[5px] object-cover"
                />
              )}

              <span className="mb-6 text-[10px] font-normal text-[#45637F]">
                {industry.number}
              </span>

              <h2 className="text-[19px] font-bold leading-[1.4] tracking-[-0.35px] text-[#15334E] transition-colors duration-300 group-hover:text-[#648A13]">
                {industry.title}
              </h2>

              <p className="mt-3 max-w-[330px] text-[13px] leading-[1.65] text-[#45637F]">
                {industry.description}
              </p>

              <a
                href="#contact"
                className="mt-7 inline-flex w-fit flex-col gap-[5px] text-[10px] font-medium text-[#648A13] transition-colors duration-300 hover:text-[#15334E]"
              >
                Explore protection
                <span className="h-px w-full bg-[#8BB630] transition-all duration-300 group-hover:h-[2px]" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesGrid;
