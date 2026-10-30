
import React from "react";
import { motion } from "motion/react";
import { TextRoll } from "../ui/TextRoll";

const challenges = [
  {
    number: "01",
    title: "Content leakage",
    description:
      "Premium films, episodes and digital assets distributed without permission.",
  },
  {
    number: "02",
    title: "Live piracy",
    description:
      "Unauthorized streams during events where every minute matters.",
  },
  {
    number: "03",
    title: "Brand & IP abuse",
    description:
      "Misused trademarks, logos and creative assets across digital channels.",
  },
];

export default function HomeChallenge() {
  return (
    <section
      id="home-challenge"
      className="
        w-full overflow-hidden
        border-y border-[rgba(171,198,215,0.15)]
        bg-transparent
        font-['Roboto',Arial,sans-serif]
        text-white
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1600px]
          px-6 py-[78px]
          sm:px-10 sm:py-[86px]
          lg:px-[4.5%] lg:py-[119px]
        "
      >
        {/* HEADER */}
        <div
          className="
            grid grid-cols-1 gap-7
            lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.47fr)]
            lg:items-end lg:gap-[75px]
          "
        >
          {/* LEFT HEADING */}
          <div className="min-w-0">

            {/* Eyebrow */}
            <p
              className="
                mb-[29px]
                text-[14px] font-bold
                uppercase leading-[1.2]
                tracking-[1.8px]
                text-[#d1ed14]
              "
            >
              <TextRoll
                duration={0.5}
                stagger={0.035}
                delay={0.05}
              >
                The challenge
              </TextRoll>
            </p>

            {/* Main Heading */}
            <h2
              className="
                m-0
                text-[42px] font-bold
                leading-[1.15]
                tracking-[-1.6px]
                text-[#f8fafc]
                sm:text-[50px]
                lg:text-[64px]
                lg:leading-[1.14]
                lg:tracking-[-2px]
              "
            >
              <span className="block">
                <TextRoll
                  duration={0.6}
                  stagger={0.025}
                >
                  Piracy moves fast.
                </TextRoll>
              </span>

              <span className="block">
                <TextRoll
                  duration={0.6}
                  stagger={0.025}
                  delay={0.15}
                >
                  Your response should too.
                </TextRoll>
              </span>
            </h2>
          </div>

          {/* SUPPORTING TEXT */}
          <div className="min-w-0 lg:justify-self-end">
            <p
              className="
                m-0 max-w-[490px]
                pb-[2px]
                text-[16px] font-normal
                leading-[1.75]
                tracking-[-0.1px]
                text-[#b7cbd9]
                sm:text-[18px]
                lg:text-[20px]
              "
            >
              <TextRoll
                duration={0.4}
                stagger={0.012}
                delay={0.1}
              >
                Unauthorized copies and brand misuse spread across channels. A
                useful response connects discovery, verification and action.
              </TextRoll>
            </p>
          </div>
        </div>

        {/* HORIZONTAL DIVIDER */}
        <motion.div
          initial={{
            scaleX: 0,
            opacity: 0,
          }}
          whileInView={{
            scaleX: 1,
            opacity: 1,
          }}
          viewport={{
            once: false,
            amount: 0.5,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{
            transformOrigin: "left",
          }}
          className="
            my-[43px]
            h-px w-full
            bg-[rgba(171,198,215,0.18)]
            sm:my-[51px]
            lg:my-[56px]
          "
        />

        {/* CHALLENGE CARDS */}
        <div
          className="
            grid grid-cols-1
            gap-8
            sm:grid-cols-2
            sm:gap-x-10 sm:gap-y-10
            lg:grid-cols-3
            lg:gap-x-[72px]
            lg:gap-y-0
          "
        >
          {challenges.map((challenge, index) => (
            <motion.article
              key={challenge.number}
              initial={{
                opacity: 0,
                y: 55,
                rotateX: 12,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotateX: 0,
                scale: 1,
              }}
              viewport={{
                once: false,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -9,
                rotateX: 3,
                scale: 1.02,
                transition: {
                  duration: 0.3,
                },
              }}
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
              className="
                group relative min-w-0
                overflow-hidden
                rounded-xl
                border border-[rgba(171,198,215,0.15)]
                bg-[rgba(10,26,46,0.5)]
                p-6
                backdrop-blur-md
                transition-all duration-300
                hover:border-[#d1ed14]/50
                hover:bg-[rgba(14,34,60,0.7)]
                hover:shadow-[0_20px_45px_rgba(0,0,0,0.3),0_0_20px_rgba(209,237,20,0.07)]
              "
            >
              {/* Subtle 3D lighting */}
              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute -right-16 -top-16
                  h-40 w-40
                  rounded-full
                  bg-[#d1ed14]/[0.035]
                  blur-[55px]
                  transition-all duration-500
                  group-hover:bg-[#d1ed14]/[0.12]
                "
              />

              {/* Number */}
              <p
                className="
                  relative z-10 m-0
                  text-[14px] font-bold
                  leading-[1.4]
                  text-[#d1ed14]
                "
                style={{
                  transform: "translateZ(25px)",
                }}
              >
                <TextRoll
                  duration={0.5}
                  stagger={0.04}
                >
                  {challenge.number}
                </TextRoll>
              </p>

              {/* Title */}
              <h3
                className="
                  relative z-10
                  mb-0 mt-[18px]
                  text-[24px] font-bold
                  leading-[1.25]
                  tracking-[-0.6px]
                  text-white
                  sm:text-[27px]
                  lg:text-[29px]
                "
                style={{
                  transform: "translateZ(35px)",
                }}
              >
                <TextRoll
                  duration={0.55}
                  stagger={0.025}
                  delay={0.08}
                >
                  {challenge.title}
                </TextRoll>
              </h3>

              {/* Description */}
              <p
                className="
                  relative z-10
                  mb-0 mt-[16px]
                  text-[15px] font-normal
                  leading-[1.7]
                  text-[#b7cbd9]
                  sm:text-[17px]
                "
                style={{
                  transform: "translateZ(20px)",
                }}
              >
                <TextRoll
                  duration={0.4}
                  stagger={0.012}
                  delay={0.12}
                >
                  {challenge.description}
                </TextRoll>
              </p>

            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
