
import React from "react";

const industries = [
  {
    number: "01",
    title: "Film & Entertainment",
    description: "Theatrical releases, films and production assets.",
    link: "/industries",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Film and entertainment production camera",
  },
  {
    number: "02",
    title: "OTT & Streaming",
    description: "Series, premium video and on-demand catalogues.",
    link: "/industries",
    image:
      "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Cinema and streaming entertainment",
  },
  {
    number: "03",
    title: "Live Sports",
    description: "Time-sensitive events and broadcast rights.",
    link: "/industries",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=1100&q=85",
    imageAlt: "Live sports stadium",
  },
  {
    number: "04",
    title: "Television & Broadcasting",
    description: "Channels, programmes and unauthorized redistribution.",
    link: "/industries",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Broadcasting and studio equipment",
  },
  {
    number: "05",
    title: "Music",
    description: "Recordings, releases and protected audio assets.",
    link: "/industries",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Professional music recording studio",
  },
  {
    number: "06",
    title: "Brands & IP Owners",
    description: "Trademarks, creative assets and brand identity.",
    link: "/industries",
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Professional camera and creative production equipment",
  },
  {
    number: "07",
    title: "Sportswear & Apparel Brands",
    description:
      "Brand identity, product imagery and suspicious online listings.",
    link: "/industries",
    image:
      "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Apparel and clothing collection",
  },
  {
    number: "08",
    title: "Publishers & Digital Creators",
    description: "Books, courses, software and original digital publications.",
    link: "/industries",
    image:
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Digital creator working at a computer",
  },
];

function IndustryCard({ industry, className = "" }) {
  return (
    <a
      href={industry.link}
      aria-label={`${industry.title} — Explore protection`}
      className={`group relative isolate block h-full min-h-[230px] overflow-hidden rounded-md border border-[#D8E2D2] bg-[#15334E] shadow-[0_5px_16px_rgba(21,51,78,0.08)] transition-all duration-300 hover:border-[#648A13] hover:shadow-[0_10px_25px_rgba(21,51,78,0.15)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#648A13] sm:min-h-[250px] ${className}`}
    >
      {/* IMAGE */}
      <img
        src={industry.image}
        alt={industry.imageAlt}
        loading="lazy"
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#08121D]/95 via-[#08121D]/45 to-[#08121D]/10 transition-colors duration-300 group-hover:from-[#08121D]/95 group-hover:via-[#08121D]/55 group-hover:to-[#08121D]/20" />

      {/* TEXT CONTENT */}
      <div className="absolute inset-x-0 bottom-0 z-10 p-4 sm:p-5 lg:p-6">
        <div className="max-w-[390px] transition-transform duration-300 group-hover:-translate-y-1">
          {/* NUMBER */}
          <div className="mb-2.5 flex items-center gap-3">
            <span className="text-sm font-bold tracking-[0.06em] text-[#8BB630]">
              {industry.number}
            </span>

            <span className="h-px w-7 bg-[#8BB630] transition-all duration-300 group-hover:w-10" />
          </div>

          {/* TITLE */}
          <h3 className="m-0 text-lg font-bold leading-[1.2] tracking-[-0.025em] text-white sm:text-xl">
            {industry.title}
          </h3>

          {/* DESCRIPTION: VISIBLE ON HOVER AND KEYBOARD FOCUS */}
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-300 group-hover:grid-rows-[1fr] group-hover:opacity-100 group-focus-visible:grid-rows-[1fr] group-focus-visible:opacity-100">
            <div className="overflow-hidden">
              <p className="mb-0 mt-2 max-w-[340px] text-sm leading-[1.6] text-white/90">
                {industry.description}
              </p>
            </div>
          </div>

          {/* EXPLORE LINK */}
          <div className="mt-3 inline-flex items-center gap-2 border-b border-[#8BB630] pb-1.5 text-sm font-semibold text-[#8BB630] transition-colors duration-300 group-hover:text-white">
            <span>Explore protection</span>

            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3.5 10h12m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* SIMPLE BORDER ONLY — NO LIME CORNER OVERLAY */}
      <div className="pointer-events-none absolute inset-0 rounded-md border border-transparent transition-colors duration-300 group-hover:border-[#8BB630]/80" />
    </a>
  );
}

function HomeIndustries() {
  return (
    <section
      id="home-industries"
      className="relative w-full overflow-hidden bg-[#FFFFFF] font-['Roboto',Arial,sans-serif] text-[#15334E]"
    >
      {/* BACKGROUND ACCENTS */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#8BB630]/[0.06] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#8BB630]/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1380px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-12">
        {/* HEADER */}
        <div className="mb-7 grid grid-cols-1 items-end gap-5 sm:mb-8 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">
          <div>
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#8BB630]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#617D17]">
                INDUSTRIES
              </span>
            </div>

            <h2 className="m-0 max-w-[850px] text-[36px] font-bold leading-[1.06] tracking-[-0.055em] text-[#15334E] sm:text-[48px] lg:text-[54px]">
              Built around
              <span className="block text-[#7C9D18]">
                what you protect.
              </span>
            </h2>
          </div>

          <p className="m-0 max-w-[330px] pb-1 text-[12px] leading-[1.9] text-[#45637F] sm:text-[13px] lg:justify-self-end">
            Protection priorities differ by content, release window and
            rights. Start with your industry.
          </p>
        </div>

        {/* UNEVEN IMAGE GRID */}
        <div className="grid grid-cols-1 items-stretch gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-3">
          {/* LEFT: TWO SMALL CARDS AND ONE WIDE CARD */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2 lg:grid-rows-[minmax(230px,1fr)_minmax(230px,1fr)]">
            <IndustryCard
              industry={industries[0]}
              className="aspect-[1.15/1] sm:aspect-auto lg:row-start-1"
            />

            <IndustryCard
              industry={industries[1]}
              className="aspect-[1.15/1] sm:aspect-auto lg:row-start-1"
            />

            <IndustryCard
              industry={industries[2]}
              className="aspect-[1.9/1] sm:col-span-2 sm:aspect-[2.1/1] lg:col-span-2 lg:row-start-2 lg:aspect-auto"
            />
          </div>

          {/* CENTER: TALL TELEVISION CARD */}
          <IndustryCard
            industry={industries[3]}
            className="aspect-[1/1] sm:aspect-[1.05/1] lg:col-span-3 lg:aspect-auto"
          />

          {/* RIGHT: CARDS 06 AND 07 — SAME WIDTH, TIGHT GAP */}
          <div className="grid grid-cols-1 gap-3 sm:col-span-2 sm:grid-cols-2 lg:col-span-4 lg:col-start-9 lg:row-span-2 lg:col-end-13 lg:grid-cols-1 lg:grid-rows-2">
            <IndustryCard
              industry={industries[5]}
              className="aspect-[1.45/1] sm:aspect-[1/1] lg:aspect-auto lg:min-h-0"
            />

            <IndustryCard
              industry={industries[6]}
              className="aspect-[1.45/1] sm:aspect-[1/1] lg:aspect-auto lg:min-h-0"
            />
          </div>

          {/* BOTTOM LEFT: MUSIC */}
          <IndustryCard
            industry={industries[4]}
            className="aspect-[1.5/1] sm:aspect-[1.2/1] lg:col-span-4 lg:aspect-auto lg:min-h-[300px]"
          />

          {/* BOTTOM CENTER: PUBLISHERS */}
          <IndustryCard
            industry={industries[7]}
            className="aspect-[1.5/1] sm:aspect-[1.2/1] lg:col-span-4 lg:aspect-auto lg:min-h-[300px]"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeIndustries;
