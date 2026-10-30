import React from "react";
import { motion, useReducedMotion } from "motion/react";

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 65,
    rotateX: 12,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function AssetCard({ asset, index }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.15,
      }}
      whileHover={
        reduceMotion
          ? {}
          : {
              y: -12,
              rotateX: 3,
              rotateY: index === 1 ? 0 : index === 0 ? 2 : -2,
              scale: 1.015,
              transition: {
                duration: 0.35,
                ease: "easeOut",
              },
            }
      }
      style={{
        transformStyle: "preserve-3d",
        perspective: "1200px",
      }}
      className="
        group relative flex min-w-0 flex-col
        overflow-hidden rounded-[22px]
        border border-[rgba(171,198,215,0.22)]
        bg-[rgba(8,22,37,0.76)]
        backdrop-blur-xl
        transition-colors duration-500
        hover:border-[#d1ed14]/70
        hover:shadow-[0_25px_65px_rgba(0,0,0,0.45),0_0_25px_rgba(209,237,20,0.12)]
      "
    >
      {/* 3D IMAGE AREA */}
      <div
        className="
          relative h-[230px] shrink-0
          overflow-hidden
          sm:h-[270px]
          lg:h-[260px]
          xl:h-[285px]
        "
        style={{
          perspective: "1000px",
        }}
      >
        {/* Background glow */}
        <motion.div
          aria-hidden="true"
          animate={
            reduceMotion
              ? {}
              : {
                  opacity: [0.25, 0.55, 0.25],
                  scale: [0.95, 1.08, 0.95],
                }
          }
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute inset-x-[12%] bottom-[-15%]
            h-[70%] rounded-full
            bg-[#d1ed14]/20 blur-[65px]
          "
        />

        {/* Floating image */}
        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  y: [0, -7, 0],
                  rotateX: [0, 1.5, 0],
                }
          }
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute inset-0
            flex items-center justify-center
            p-3 sm:p-4
          "
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          <motion.img
            src={asset.image}
            alt={asset.imageAlt}
            loading="lazy"
            initial={{ scale: 1.12, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="
              relative z-10
              h-full w-full
              rounded-[15px]
              object-cover object-center
              drop-shadow-[0_18px_20px_rgba(0,0,0,0.5)]
              transition-all duration-700
              group-hover:scale-[1.04]
            "
          />
        </motion.div>

        {/* Image lighting */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute inset-0 z-20
            bg-gradient-to-t
            from-[#081625] via-transparent
            to-white/[0.03]
          "
        />

        {/* Lime bottom edge */}
        <motion.div
          aria-hidden="true"
          className="
            absolute bottom-0 left-[8%] right-[8%] z-30
            h-[2px]
            bg-[#d1ed14]
            shadow-[0_0_12px_#d1ed14,0_0_25px_rgba(209,237,20,0.65)]
          "
          animate={
            reduceMotion
              ? {}
              : {
                  opacity: [0.45, 1, 0.45],
                  scaleX: [0.92, 1, 0.92],
                }
          }
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* IMAGE CAPTION */}
      <div
        className="
          flex h-[42px] shrink-0 items-center
          border-b border-[rgba(171,198,215,0.18)]
          bg-[rgba(6,18,32,0.85)]
          px-[16px]
        "
      >
        <span className="text-[12px] font-normal leading-[1.4] text-[#94a3b8]">
          Real stock photography · Illustrative context
        </span>
      </div>

      {/* CARD BODY */}
      <div
        className="
          relative flex flex-1 flex-col
          px-5 pb-6 pt-6
          sm:px-6 sm:pb-7 sm:pt-7
          lg:px-6
          xl:px-[28px]
        "
        style={{
          transform: "translateZ(20px)",
        }}
      >
        {/* Subtle card glow */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -right-16 -top-16
            h-40 w-40 rounded-full
            bg-[#d1ed14]/[0.045]
            blur-[55px]
            transition-all duration-500
            group-hover:bg-[#d1ed14]/[0.12]
          "
        />

        {/* Title */}
        <h3
          className="
            relative z-10 m-0
            text-[21px] font-bold
            leading-[1.25] tracking-[-0.55px]
            text-white
            sm:text-[23px]
          "
        >
          {asset.title}
        </h3>

        {/* Description */}
        <p
          className="
            relative z-10 mb-0 mt-[19px]
            text-[14px] font-normal
            leading-[1.75] tracking-[-0.1px]
            text-[#b7cbd9]
            sm:text-[15px]
          "
        >
          {asset.description}
        </p>

        {/* Link */}
        <div className="relative z-10 mt-auto flex items-center justify-between gap-3 pt-[24px]">
          <a
            href={asset.link}
            className="
              inline-flex min-w-0 max-w-full
              items-center justify-center
              rounded-full
              border border-[#d1ed14]/40
              bg-[#d1ed14]
              px-4 py-[11px]
              text-center
              text-[12px] font-bold
              leading-[1.4]
              text-[#101a0b]
              transition-all duration-300
              hover:bg-white
              hover:border-white
              hover:shadow-[0_0_20px_rgba(209,237,20,0.25)]
              sm:px-[19px]
              sm:text-[13px]
            "
          >
            {asset.linkText} →
          </a>

          {/* 3D Arrow */}
          <motion.a
            href={asset.link}
            aria-label={asset.linkText}
            whileHover={
              reduceMotion
                ? {}
                : {
                    rotate: 45,
                    scale: 1.12,
                  }
            }
            whileTap={{ scale: 0.92 }}
            className="
              flex h-[43px] w-[43px] shrink-0
              items-center justify-center
              rounded-full
              border border-[#d1ed14]
              text-[23px] font-light
              text-[#d1ed14]
              shadow-[0_0_12px_rgba(209,237,20,0.12)]
              transition-all duration-300
              hover:bg-[#d1ed14]
              hover:text-black
              hover:shadow-[0_0_20px_rgba(209,237,20,0.4)]
            "
          >
            →
          </motion.a>
        </div>
      </div>

      {/* 3D corner lighting */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute
          bottom-0 left-0 right-0
          h-[2px]
          bg-gradient-to-r
          from-transparent via-[#d1ed14]/70
          to-transparent
          opacity-30
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />
    </motion.article>
  );
}

export default function HomeAssets() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="protected-assets"
      className="
        relative w-full overflow-hidden
        border-y border-[rgba(171,198,215,0.15)]
        bg-transparent
        font-['Roboto',Arial,sans-serif]
        text-white
      "
    >
      {/* MAIN CONTAINER */}
      <div
        className="
          relative z-10 mx-auto
          w-full max-w-[1600px]
          px-6 py-[72px]
          sm:px-10 sm:py-[78px]
          lg:px-[4.5%] lg:py-[96px]
        "
      >
        {/* SECTION HEADING */}
        <motion.div
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            mb-[44px]
            grid grid-cols-1 gap-6
            lg:grid-cols-[minmax(0,1fr)_400px]
            lg:items-end lg:gap-[70px]
          "
        >
          <div className="min-w-0">
            {/* Eyebrow */}
            <p
              className="
                mb-[25px]
                text-[12px] font-bold uppercase
                leading-[1.3] tracking-[2px]
                text-[#d1ed14]
              "
            >
              The assets behind the evidence
            </p>

            {/* Main Heading */}
            <h2
              className="
                m-0
                text-[34px] font-bold
                leading-[1.18] tracking-[-1.5px]
                text-white
                sm:text-[48px]
                lg:text-[52px]
              "
            >
              Real creative work.
              <span className="block">
                Focused digital protection.
              </span>
            </h2>
          </div>

          {/* Description */}
          <p
            className="
              m-0 max-w-[400px]
              pb-[3px]
              text-[15px] font-normal
              leading-[1.75] tracking-[-0.1px]
              text-[#b7cbd9]
              sm:text-[16px]
              lg:justify-self-end
            "
          >
            From production to distribution, protection starts with
            understanding the asset and its authorized use.
          </p>
        </motion.div>

        {/* 3D CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.08,
          }}
          className="
            grid grid-cols-1
            items-stretch gap-7
            sm:grid-cols-2
            lg:grid-cols-3 lg:gap-6
          "
          style={{
            perspective: "1400px",
          }}
        >
          {assets.map((asset, index) => (
            <AssetCard
              key={asset.title}
              asset={asset}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
