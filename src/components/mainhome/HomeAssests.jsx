import React from "react";

const assets = [
  {
    image: "/images/home/film-production.png",
    imageAlt: "Professional cinema camera filming a production",
    title: "The investment behind every release.",
    description:
      "A finished film carries the work of production teams, studios and distributors. Protection planning connects the title, release window and authorized channels with evidence of suspected copies.",
    linkText: "Explore film & OTT protection",
    link: "/industries",
  },
  {
    image: "/images/home/music-recording.png",
    imageAlt: "Professional recording studio with microphones",
    title: "Original recordings. Clear rights.",
    description:
      "Music and spoken-word releases need reliable reference assets. Analyst review links a suspected upload or download page to the protected recording before a rights-based complaint is considered.",
    linkText: "Explore copyright enforcement",
    link: "/services",
  },
  {
    image: "/images/home/digital-servers.png",
    imageAlt: "Server racks in a digital infrastructure facility",
    title: "Follow the distribution trail.",
    description:
      "Public websites, apps and linked sources can distribute protected assets through different routes. Investigation captures the source URL and context, then follows verified cases through reporting and outcome checks.",
    linkText: "Explore website monitoring",
    link: "/platform",
  },
];

function AssetCard({ asset }) {
  return (
    <article className="group flex min-w-0 flex-col overflow-hidden rounded-[11px] border border-[rgba(171,198,215,0.22)] bg-[rgba(10,26,46,0.65)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#d1ed14]/60 hover:bg-[rgba(14,34,60,0.85)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.4)]">
      {/* Image */}
      <div className="relative h-[224px] shrink-0 overflow-hidden">
        <img
          src={asset.image}
          alt={asset.imageAlt}
          loading="eager"
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Image caption */}
      <div className="flex h-[42px] shrink-0 items-center border-b border-[rgba(171,198,215,0.18)] bg-[rgba(6,18,32,0.85)] px-[16px]">
        <span className="text-[12px] font-normal leading-[1.4] text-[#94a3b8]">
          Real stock photography · Illustrative context
        </span>
      </div>

      {/* Card body */}
      <div className="flex flex-1 flex-col px-[28px] pb-[29px] pt-[27px]">
        <h3 className="m-0 text-[23px] font-bold leading-[1.2] tracking-[-0.55px] text-white">
          {asset.title}
        </h3>

        <p className="mb-0 mt-[19px] text-[15.5px] font-normal leading-[1.75] tracking-[-0.1px] text-[#b7cbd9]">
          {asset.description}
        </p>

        <div className="mt-auto pt-[24px]">
          <a
            href={asset.link}
            className="inline-flex max-w-full items-center border-b border-[#d1ed14]/40 pb-[7px] text-[14px] font-medium leading-[1.4] text-[#d1ed14] transition-colors duration-200 hover:border-[#d1ed14] hover:text-white"
          >
            {asset.linkText} →
          </a>
        </div>
      </div>
    </article>
  );
}

export default function HomeAssets() {
  return (
    <section
      id="protected-assets"
      className="relative w-full overflow-hidden border-y border-[rgba(171,198,215,0.15)] bg-transparent font-['Roboto',Arial,sans-serif] text-white"
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 py-[72px] sm:px-10 sm:py-[78px] lg:px-[4.5%] lg:py-[96px]">
        {/* Section heading */}
        <div className="mb-[44px] grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_400px] lg:items-end lg:gap-[70px]">
          <div className="min-w-0">
            <p className="mb-[25px] text-[12px] font-bold uppercase leading-[1.3] tracking-[2px] text-[#d1ed14]">
              The assets behind the evidence
            </p>

            <h2 className="m-0 text-[42px] font-bold leading-[1.18] tracking-[-1.5px] text-white sm:text-[48px] lg:text-[52px]">
              Real creative work.
              <span className="block">
                Focused digital protection.
              </span>
            </h2>
          </div>

          <p className="m-0 max-w-[400px] pb-[3px] text-[16px] font-normal leading-[1.75] tracking-[-0.1px] text-[#b7cbd9] lg:justify-self-end">
            From production to distribution, protection starts with
            understanding the asset and its authorized use.
          </p>
        </div>

        {/* Three equal translucent cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {assets.map((asset) => (
            <AssetCard key={asset.title} asset={asset} />
          ))}
        </div>
      </div>
    </section>
  );
}
