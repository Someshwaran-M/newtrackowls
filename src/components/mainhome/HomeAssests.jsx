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

function AssetImage({ asset }) {
  return (
    <div className="group relative min-h-[240px] overflow-hidden border-b border-r border-[#E5E5E5] bg-[#F3F3F1] sm:min-h-[280px] lg:min-h-0">
      <img
        src={asset.image}
        alt={asset.imageAlt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#152019]/20 via-transparent to-transparent" />

      <span className="absolute bottom-4 left-4 h-[3px] w-9 bg-[#ADD132] sm:bottom-5 sm:left-5" />
    </div>
  );
}

function AssetText({ asset, index }) {
  return (
    <article className="flex min-w-0 flex-col items-center justify-center border-b border-r border-[#E5E5E5] bg-white px-5 py-8 text-center sm:px-7 sm:py-10 lg:px-5 lg:py-7 xl:px-8 xl:py-9">
      <div className="mb-4 flex items-center justify-center gap-2">
        <span className="h-[2px] w-5 bg-[#ADD132]" />

        <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#6D900B]">
          0{index + 1} / Digital protection
        </span>

        <span className="h-[2px] w-5 bg-[#ADD132]" />
      </div>

      <h3 className="mb-3 max-w-[320px] text-[19px] font-bold leading-[1.4] tracking-[-0.02em] text-[#152019] sm:text-xl">
        {asset.title}
      </h3>

      <p className="mb-5 max-w-[360px] text-[13px] leading-[1.8] text-[#68746C] sm:text-sm">
        {asset.description}
      </p>

      <p className="mb-4 text-[11px] text-[#68746C]">
        Illustrative context
      </p>

      <a
        href={asset.link}
        className="inline-flex min-h-9 max-w-full items-center justify-center gap-2 border border-[#C9CEC5] px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.04em] text-[#152019] transition-colors duration-200 hover:border-[#ADD132] hover:bg-[#ADD132] sm:px-4 sm:text-[11px]"
      >
        <span>{asset.linkText}</span>

        <svg
          viewBox="0 0 20 20"
          fill="none"
          aria-hidden="true"
          className="h-3.5 w-3.5 shrink-0"
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
    </article>
  );
}

function HomeAssets() {
  return (
    <section
      id="protected-assets"
      className="w-full overflow-hidden bg-white font-['Roboto',Arial,sans-serif] text-[#152019]"
    >
      <div className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6 sm:py-2 lg:px-10 lg:py-6 xl:px-14">
        {/* HEADER */}
        <div className="mb-8 border-b border-[#E5E5E5] pb-6 sm:mb-10 sm:pb-8">
          
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#8EAF20]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#617D17]">
                THE ASSETS BEHIND THE EVIDENCE
              </span>
            </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-10">
            
            <h2 className="m-0 max-w-[850px] text-[36px] font-bold leading-[1.06] tracking-[-0.055em] sm:text-[48px] lg:text-[64px]">
              Real creative work.
              <span className="block text-[#7C9D18]">
                Focused digital protection.
              </span>
            </h2>

            <p className="m-0 max-w-[410px] text-sm leading-[1.9] text-[#68746C] sm:text-[15px] lg:justify-self-end">
              From production to distribution, protection starts with
              understanding the asset and its authorized use.
            </p>
          </div>
        </div>

        {/* MOBILE / TABLET LAYOUT */}
        <div className="grid grid-cols-1 overflow-hidden border-l border-t border-[#E5E5E5] md:grid-cols-2 lg:hidden">
          {assets.map((asset, index) => (
            <React.Fragment key={asset.title}>
              <AssetImage asset={asset} />
              <AssetText asset={asset} index={index} />
            </React.Fragment>
          ))}
        </div>

        {/* DESKTOP LAYOUT: EXACT 3 COLUMNS × 2 ROWS */}
        <div className="hidden overflow-hidden border-l border-t border-[#E5E5E5] lg:grid lg:grid-cols-3 lg:grid-rows-2">

          {/* ROW 1 — COLUMN 1: FIRST IMAGE */}
          <AssetImage asset={assets[0]} />

          {/* ROW 1 — COLUMN 2: SECOND TEXT */}
          <AssetText asset={assets[1]} index={1} />

          {/* ROW 1 — COLUMN 3: THIRD IMAGE */}
          <AssetImage asset={assets[2]} />

          {/* ROW 2 — COLUMN 1: FIRST TEXT */}
          <AssetText asset={assets[0]} index={0} />

          {/* ROW 2 — COLUMN 2: SECOND IMAGE */}
          <AssetImage asset={assets[1]} />

          {/* ROW 2 — COLUMN 3: THIRD TEXT */}
          <AssetText asset={assets[2]} index={2} />
        </div>
      </div>
    </section>
  );
}

export default HomeAssets;
