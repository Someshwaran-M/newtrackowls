
import React from "react";

const assets = [
  {
    image: "/images/home/film-production.png",
    imageAlt: "Professional camera used in film production",
    title: "The investment behind every release.",
    description:
      "A finished film carries the work of production teams, studios and distributors. Protection planning connects the title, release window and authorized channels with evidence of suspected copies.",
    linkText: "Explore film & OTT protection",
    link: "/industries",
  },
  {
    image: "/images/home/music-recording.png",
    imageAlt: "Audio recording studio and professional microphones",
    title: "Original recordings. Clear rights.",
    description:
      "Music and spoken-word releases need reliable reference assets. Analysts review links and investigate a suspected upload or download page to match it to the protected recording before a rights-based complaint is considered.",
    linkText: "Explore copyright enforcement",
    link: "/services",
  },
  {
    image: "/images/home/digital-servers.png",
    imageAlt: "Servers in a digital infrastructure environment",
    title: "Follow the distribution trail.",
    description:
      "Public websites, apps and linked sources can distribute protected assets through different routes. Investigation captures the source URL and context, then follows verified cases through reporting and outcome checks.",
    linkText: "Explore website monitoring",
    link: "/platform",
  },
];

function AssetCard({ asset }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-[6px] border border-[#C8D9E8] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#A9C66C] hover:shadow-[0_12px_30px_rgba(21,51,78,0.07)]">
      {/* Image */}
      <div className="relative h-[170px] shrink-0 overflow-hidden sm:h-[190px] lg:h-[138px] xl:h-[160px]">
        <img
          src={asset.image}
          alt={asset.imageAlt}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#15334E]/15 to-transparent" />
      </div>

      {/* Image caption */}
      <div className="flex min-h-[25px] items-center border-b border-[#DCE7F0] bg-[#F7FAFD] px-3 py-1.5">
        <span className="text-[8px] leading-tight text-[#45637F]">
          Real stock photography · Illustrative context
        </span>
      </div>

      {/* Card content */}
      <div className="flex flex-1 flex-col px-4 py-5 sm:px-5 sm:py-5 lg:px-4 lg:py-4 xl:px-5 xl:py-5">
        <h3 className="m-0 text-[14px] font-bold leading-[1.35] tracking-[-0.2px] text-[#15334E] sm:text-[15px]">
          {asset.title}
        </h3>

        <p className="mb-5 mt-2.5 text-[11px] leading-[1.9] text-[#45637F] sm:text-[12px]">
          {asset.description}
        </p>

        <div className="mt-auto pt-1">
          <a
            href={asset.link}
            className="group/link inline-flex max-w-full items-center gap-1.5 border-b border-[#B8CE87] pb-1 text-[10px] font-medium leading-relaxed text-[#648A13] transition-colors duration-200 hover:border-[#648A13] hover:text-[#45650B] sm:text-[11px]"
          >
            <span>{asset.linkText}</span>

            <svg
              viewBox="0 0 20 20"
              fill="none"
              aria-hidden="true"
              className="h-3 w-3 shrink-0 transition-transform duration-200 group-hover/link:translate-x-0.5"
            >
              <path
                d="M4 10h12m-5-5 5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}

function HomeAssets() {
  return (
    <section
      id="protected-assets"
      className="relative w-full overflow-hidden bg-white font-['Roboto',Arial,sans-serif] text-[#15334E]"
    >
      <div className="mx-auto max-w-[1420px] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-12 xl:px-16">
        {/* Header */}
        <div className="mb-7 grid grid-cols-1 gap-5 sm:mb-8 lg:grid-cols-[1fr_330px] lg:items-end lg:gap-10">
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.24em] text-[#617D17]">
              The assets behind the evidence
            </p>

            <h2 className="m-0 max-w-[850px] text-[36px] font-bold leading-[1.06] tracking-[-0.055em] text-[#15334E] sm:text-[48px] lg:text-[52px] xl:text-[56px]">
              Real creative work.
              <span className="block text-[#7C9D18]">
                Focused digital protection.
              </span>
            </h2>
          </div>

          <p className="m-0 max-w-[410px] text-[14px] leading-[1.9] text-[#45637F] sm:text-[14px] lg:justify-self-end lg:text-[15px]">
            From production to distribution, protection starts with
            understanding the asset and its authorized use.
          </p>
        </div>

        {/* Three matching cards */}
        <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4 xl:gap-5">
          {assets.map((asset) => (
            <AssetCard key={asset.title} asset={asset} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeAssets;
