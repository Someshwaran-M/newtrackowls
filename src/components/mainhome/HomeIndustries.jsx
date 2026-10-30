import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

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
    <article className="group relative flex h-full min-w-0 flex-col bg-[rgba(10,26,46,0.5)] px-[25px] py-[30px] backdrop-blur-md transition-all duration-300 hover:bg-[rgba(14,34,60,0.8)] sm:px-[31px] sm:py-[37px]">

      {industry.image && (
        <div className="mb-[25px] overflow-hidden rounded-[6px]">
          <img
            src={industry.image}
            alt={industry.title}
            loading="lazy"
            draggable="false"
            className="h-[157px] w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]"
          />
        </div>
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
        className="mt-auto inline-flex w-fit border-b border-[#d1ed14]/40 pb-[7px] pt-[32px] text-[12px] font-medium leading-[1.4] text-[#d1ed14] transition-colors duration-200 hover:border-[#d1ed14] hover:text-white"
      >
        Explore protection →
      </a>
    </article>
  );
}

export default function HomeIndustries() {
  const sectionRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  const [maxTravel, setMaxTravel] = useState(0);

  // Measure the horizontal distance required for all cards
  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!viewport || !track) return;

    const updateWidth = () => {
      const distance = track.scrollWidth - viewport.clientWidth;
      setMaxTravel(Math.max(0, distance));
    };

    updateWidth();

    const resizeObserver = new ResizeObserver(updateWidth);

    resizeObserver.observe(viewport);
    resizeObserver.observe(track);

    window.addEventListener("resize", updateWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  // Scroll progress controls the pinned horizontal movement
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Move the complete card track from right to left
  const horizontalX = useTransform(
    scrollYProgress,
    (progress) => -progress * maxTravel
  );

  // 3D rotation animation
  const rotateY = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-5, 0, 5]
  );

  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [3, 0, -2]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.96, 1, 0.96]
  );

  return (
    <section
      ref={sectionRef}
      id="home-industries"
      className="relative w-full"
      style={{
        height: "300vh",
      }}
    >
      {/* Sticky section */}
      <div
        className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden border-y border-[rgba(171,198,215,0.15)] bg-transparent font-['Roboto',Arial,sans-serif] text-white"
      >
        <div className="mx-auto w-full max-w-[1590px] px-6 pb-8 pt-8 sm:px-10 lg:px-[5.1%]">

          {/* Header */}
          <div className="mb-8 grid grid-cols-1 gap-5 lg:mb-10 lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.53fr)] lg:items-end lg:gap-[75px]">

            <div>
              <p className="mb-[15px] text-[12px] font-bold uppercase leading-[1.3] tracking-[1.9px] text-[#d1ed14] sm:mb-[20px]">
                Industries
              </p>

              <h2 className="m-0 text-[34px] font-bold leading-[1.12] tracking-[-1.2px] text-white sm:text-[42px] lg:text-[48px]">
                Built around
                <span className="block">
                  what you protect.
                </span>
              </h2>
            </div>

            <p className="m-0 max-w-[390px] pb-[3px] text-[14px] font-normal leading-[1.75] text-[#b7cbd9] sm:text-[16px] lg:justify-self-end">
              Protection priorities differ by content, release window and
              rights. Start with your industry.
            </p>
          </div>

          {/* Horizontal 3D Slider */}
          <div
            ref={viewportRef}
            className="relative w-full overflow-hidden"
            style={{
              perspective: "1400px",
            }}
          >
            <motion.div
              ref={trackRef}
              style={{
                x: horizontalX,
                rotateY,
                rotateX,
                scale,
                transformPerspective: 1400,
                transformStyle: "preserve-3d",
              }}
              className="flex w-max items-stretch gap-4 py-3 sm:gap-5"
            >
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.number}
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
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: (index % 4) * 0.08,
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                  }}
                  className="h-[390px] w-[280px] shrink-0 overflow-hidden border border-[rgba(171,198,215,0.18)] sm:h-[410px] sm:w-[330px] lg:h-[430px] lg:w-[350px]"
                >
                  <IndustryCell industry={industry} />
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
