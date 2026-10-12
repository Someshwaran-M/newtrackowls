import React from "react";

const solutions = [
  {
    number: "01",
    title: "Live Streaming Protection",
    description: "Act while the event still matters.",
    image: "/images/solutions/live-streaming.jpg",
    icon: "stream",
  },
  {
    number: "02",
    title: "OTT & VOD Protection",
    description: "Protect every release window.",
    image: "/images/solutions/ott-vod.jpg",
    icon: "play",
  },
  {
    number: "03",
    title: "Website & App Monitoring",
    description: "See where your content travels.",
    image: "/images/solutions/website-monitoring.jpg",
    icon: "globe",
  },
  {
    number: "04",
    title: "Copyright Enforcement",
    description: "Turn evidence into action.",
    image: "/images/solutions/copyright-enforcement.jpg",
    icon: "file",
  },
  {
    number: "05",
    title: "Brand Protection",
    description: "Defend the identity you built.",
    image: null,
    icon: "shield",
  },
  {
    number: "06",
    title: "Piracy Intelligence",
    description: "Understand the patterns behind piracy.",
    image: "/images/solutions/piracy-intelligence.jpg",
    icon: "scan",
  },
  {
    number: "07",
    title: "Marketplace & Counterfeit Monitoring",
    description: "Investigate listings that misuse your brand.",
    image: null,
    icon: "search",
  },
  {
    number: "08",
    title: "Domain & Impersonation Monitoring",
    description: "Protect the identity behind your digital presence.",
    image: null,
    icon: "globe",
  },
  {
    number: "09",
    title: "Social Media & Video Protection",
    description: "Follow infringement across public social channels.",
    image: null,
    icon: "eye",
  },
];

function SolutionIcon({ type }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "stream":
      return (
        <svg {...common}>
          <path d="M5 9a5 5 0 0 0 0 6" />
          <path d="M8 11a2 2 0 0 0 0 2" />
          <path d="M19 9a5 5 0 0 1 0 6" />
          <path d="M16 11a2 2 0 0 1 0 2" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );

    case "play":
      return (
        <svg {...common}>
          <path d="m8 5 11 7-11 7z" />
        </svg>
      );

    case "globe":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c4 4 4 14 0 18M12 3c-4 4-4 14 0 18" />
        </svg>
      );

    case "file":
      return (
        <svg {...common}>
          <path d="M7 3h7l4 4v14H7z" />
          <path d="M14 3v5h4M10 14h5M10 17h5" />
        </svg>
      );

    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3 20 6v6c0 5-4 8-8 10-4-2-8-5-8-10V6z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );

    case "scan":
      return (
        <svg {...common}>
          <path d="M4 9V5h4M16 5h4v4M20 15v4h-4M8 19H4v-4" />
          <path d="M8 12h8M12 8v8" />
        </svg>
      );

    case "search":
      return (
        <svg {...common}>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <path d="m16 16 4 4" />
        </svg>
      );

    case "eye":
      return (
        <svg {...common}>
          <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
          <circle cx="12" cy="12" r="2.5" />
        </svg>
      );

    default:
      return null;
  }
}

function SolutionsGrid() {
  return (
    <section
      id="solutions-grid"
      className="w-full bg-white px-4 py-8 font-['Roboto',sans-serif] sm:px-6 sm:py-20 lg:px-28 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1320px] grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {solutions.map((solution) => (
          <article
            key={solution.number}
            className="group relative flex h-full min-w-0 flex-col overflow-hidden rounded-lg border border-[#C9DDED] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#8BB630] hover:shadow-[0_12px_30px_rgba(25,51,78,0.08)]"
          >
            {/* Image area */}
            {solution.image ? (
              <div className="h-[150px] shrink-0 overflow-hidden bg-[#E5EDF4] sm:h-[160px]">
                <img
                  src={solution.image}
                  alt={solution.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
            ) : (
              <div
                aria-hidden="true"
                className="h-[150px] shrink-0 bg-gradient-to-br from-[#F5F8F2] via-white to-[#EAF1E7] sm:h-[160px]"
              />
            )}

            {/* Small corner accent */}
            <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-[#55B4D4]" />

            {/* Card content */}
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              {/* Icon and number */}
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F0F6E8] text-[#648A13] transition-colors duration-300 group-hover:bg-[#E5F0D5]">
                  <SolutionIcon type={solution.icon} />
                </span>

                <span className="text-[11px] font-medium tracking-[1.5px] text-[#7D94A9]">
                  {solution.number}
                </span>
              </div>

              {/* Card content */}
              <h3 className="text-[17px] font-bold leading-[1.4] tracking-[-0.3px] text-[#19334E] transition-colors duration-200 group-hover:text-[#648A13] sm:text-[18px]">
                {solution.title}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.75] text-[#526B86] sm:text-[14px]">
                {solution.description}
              </p>

              {/* Explore link */}
              <a
                href="#contact"
                className="mt-auto inline-flex w-fit items-center gap-2 pt-6 text-[12px] font-semibold text-[#648A13] transition-colors duration-200 hover:text-[#19334E]"
              >
                Explore solution
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default SolutionsGrid;
