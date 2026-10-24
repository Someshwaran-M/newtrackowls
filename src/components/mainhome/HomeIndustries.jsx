import React from "react";

const industries = [
  {
    number: "01",
    title: "Film & Entertainment",
    description:
      "Theatrical, physical and digital distribution for features and series.",
    image: "/industries/film.jpeg",
    link: "/industries/film",
  },
  {
    number: "02",
    title: "OTT & Streaming Platforms",
    description:
      "Subscription catalogues, transactional VOD and platform originals.",
    image: "/industries/ott.jpeg",
    link: "/industries/ott",
  },
  {
    number: "03",
    title: "Live Sports & Events",
    description: "Matchday feeds, PPV broadcasts and concurrent streams.",
    image: "/industries/livesport.jpeg",
    link: "/industries/sports",
  },
  {
    number: "04",
    title: "Television & Broadcasting",
    description: "Linear channels, catch-up services and regional syndication.",
    image: "/industries/tv.jpeg",
    link: "/industries/broadcast",
  },
  {
    number: "05",
    title: "Music & Audio",
    description:
      "Recordings, publishing catalogues, podcasts and audio streams.",
    image: "/industries/music.jpeg",
    link: "/industries/music",
  },
  {
    number: "06",
    title: "Brands & IP Owners",
    description:
      "Trademark misuse, brand impersonation and counterfeit goods.",
    image: "/industries/brand.jpeg",
    link: "/industries/brands",
  },
  {
    number: "07",
    title: "Sportswear & Apparel Brands",
    description:
      "Brand identity, product imagery and suspicious online listings.",
    image: "/industries/sportswear.jpeg",
    link: "/industries/sportswear",
  },
  {
    number: "08",
    title: "Publishers & Digital Creators",
    description: "Books, courses, software and original digital publications.",
    image: "/industries/public.jpeg",
    link: "/industries/publishers",
  },
];

function IndustryCell({ industry }) {
  return (
    <article className="group min-w-0 bg-[rgba(10,26,46,0.5)] px-[31px] py-[37px] backdrop-blur-md transition-all duration-300 hover:bg-[rgba(14,34,60,0.8)]">
      {industry.image && (
        <img
          src={industry.image}
          alt={industry.title}
          loading="lazy"
          className="mb-[25px] h-[157px] w-full rounded-[6px] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      )}

      <p className="m-0 text-[12px] font-bold leading-[1.5] text-[#d1ed14]">
        {industry.number}
      </p>

      <h3 className="mb-0 mt-[25px] text-[22px] font-bold leading-[1.2] tracking-[-0.55px] text-white">
        {industry.title}
      </h3>

      <p className="mb-0 mt-[15px] text-[15px] font-normal leading-[1.65] text-[#b7cbd9]">
        {industry.description}
      </p>

      <a
        href={industry.link}
        className="mt-[32px] inline-flex border-b border-[#d1ed14]/40 pb-[7px] text-[12px] font-medium leading-[1.4] text-[#d1ed14] transition-colors duration-200 hover:border-[#d1ed14] hover:text-white"
      >
        Explore protection →
      </a>
    </article>
  );
}

export default function HomeIndustries() {
  return (
    <section
      id="home-industries"
      className="w-full overflow-hidden border-y border-[rgba(171,198,215,0.15)] bg-transparent font-['Roboto',Arial,sans-serif] text-white"
    >
      <div className="mx-auto w-full max-w-[1590px] px-6 pb-[95px] pt-[94px] sm:px-10 lg:px-[5.1%]">
        {/* Header */}
        <div className="mb-[43px] grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.53fr)] lg:items-end lg:gap-[75px]">
          <div>
            <p className="mb-[25px] text-[12px] font-bold uppercase leading-[1.3] tracking-[1.9px] text-[#d1ed14]">
              Industries
            </p>

            <h2 className="m-0 text-[38px] font-bold leading-[1.12] tracking-[-1.2px] text-white sm:text-[42px] lg:text-[48px]">
              Built around
              <span className="block">what you protect.</span>
            </h2>
          </div>

          <p className="m-0 max-w-[390px] pb-[3px] text-[15px] font-normal leading-[1.75] text-[#b7cbd9] sm:text-[16px] lg:justify-self-end">
            Protection priorities differ by content, release window and
            rights. Start with your industry.
          </p>
        </div>

        {/* Three-column industry grid */}
        <div className="grid grid-cols-1 border-l border-t border-[rgba(171,198,215,0.18)] sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.number}
              className="min-w-0 border-b border-r border-[rgba(171,198,215,0.18)]"
            >
              <IndustryCell industry={industry} />
            </div>
          ))}

          {/* Keep the final grid position empty, with glass styling */}
          <div
            aria-hidden="true"
            className="hidden border-b border-r border-[rgba(171,198,215,0.18)] bg-[rgba(10,26,46,0.2)] lg:block"
          />
        </div>
      </div>
    </section>
  );
}
