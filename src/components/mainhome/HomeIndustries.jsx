
import React from "react";

const industries = [
  {
    number: "01",
    title: "Film & Entertainment",
    description: "Theatrical releases, films and production assets.",
    image: "/industries/film.jpeg",
    link: "/industries/film-entertainment",
  },
  {
    number: "02",
    title: "OTT & Streaming",
    description: "Series, premium video and on-demand catalogues.",
    image: "/industries/ott.jpeg",
    link: "/industries/ott-streaming",
  },
  {
    number: "03",
    title: "Live Sports",
    description: "Time-sensitive events and broadcast rights.",
    image: "/industries/livesport.jpeg",
    link: "/industries/live-sports",
  },
  {
    number: "04",
    title: "Television & Broadcasting",
    description: "Channels, programmes and unauthorized redistribution.",
    image: "/industries/tv.jpeg",
    link: "/industries/television-broadcasting",
  },
  {
    number: "05",
    title: "Music",
    description: "Recordings, releases and protected audio assets.",
    link: "/industries/music",
    image: "/industries/music.jpeg",
    imageAlt: "Professional music recording studio",
  },
  {
    number: "06",
    title: "Brands & IP Owners",
    description: "Trademarks, creative assets and brand identity.",
    image: "/industries/brand.jpeg",
    link: "/industries/brand-ip-owners",
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
    <article className="group min-w-0 bg-transparent px-[31px] py-[37px]">
      {industry.image && (
        <img
          src={industry.image}
          alt={industry.imageAlt}
          loading="lazy"
          className="mb-[25px] h-[157px] w-full rounded-[5px] object-cover"
        />
      )}

      <p className="m-0 text-[12px] font-normal leading-[1.5] text-[#647D96]">
        {industry.number}
      </p>

      <h3 className="mb-0 mt-[25px] text-[22px] font-bold leading-[1.2] tracking-[-0.55px] text-[#172D48]">
        {industry.title}
      </h3>

      <p className="mb-0 mt-[15px] text-[15px] font-normal leading-[1.65] text-[#586F89]">
        {industry.description}
      </p>

      <a
        href={industry.link}
        className="mt-[32px] inline-flex border-b border-[#C8D9B0] pb-[7px] text-[12px] font-normal leading-[1.4] text-[#638B15] transition-colors duration-200 hover:border-[#638B15] hover:text-[#45650B]"
      >
        Explore protection
      </a>
    </article>
  );
}

export default function HomeIndustries() {
  return (
    <section
      id="home-industries"
      className="w-full overflow-hidden border-y border-[#D8E4EF] bg-[#F3F7FC] font-['Roboto',Arial,sans-serif] text-[#172D48]"
    >
      <div className="mx-auto w-full max-w-[1590px] px-6 pb-[95px] pt-[94px] sm:px-10 lg:px-[5.1%]">
        {/* Header */}
        <div className="mb-[43px] grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.53fr)] lg:items-end lg:gap-[75px]">
          <div>
            <p className="mb-[25px] text-[12px] font-bold uppercase leading-[1.3] tracking-[1.9px] text-[#547F17]">
              Industries
            </p>

            <h2 className="m-0 text-[38px] font-bold leading-[1.12] tracking-[-1.2px] text-[#172D48] sm:text-[42px] lg:text-[38px]">
              Built around
              <span className="block">what you protect.</span>
            </h2>
          </div>

          <p className="m-0 max-w-[390px] pb-[3px] text-[15px] font-normal leading-[1.75] text-[#586F89] sm:text-[16px] lg:justify-self-end">
            Protection priorities differ by content, release window and
            rights. Start with your industry.
          </p>
        </div>

        {/* Three-column industry grid */}
        <div className="grid grid-cols-1 border-l border-t border-[#D9E4EF] sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <div
              key={industry.number}
              className="min-w-0 border-b border-r border-[#D9E4EF]"
            >
              <IndustryCell industry={industry} />
            </div>
          ))}

          {/* Keep the final grid position empty, like the reference */}
          <div
            aria-hidden="true"
            className="hidden border-b border-r border-[#D9E4EF] lg:block"
          />
        </div>
      </div>
    </section>
  );
}
