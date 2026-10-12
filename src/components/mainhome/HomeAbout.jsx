import React from "react";
import { motion } from "framer-motion";

export default function HomeAbout() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#F3F7FC] font-['Roboto',Arial,sans-serif] text-[#172D48]"
    >
      <div
        className="
          mx-auto grid w-full max-w-[1600px]
          grid-cols-1 gap-8
          px-6 py-[76px]
          sm:px-10 sm:py-[90px]
          md:grid-cols-2 md:items-start md:gap-12
          lg:px-[4.5%] lg:py-[119px]
          xl:gap-[100px]
        "
      >
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="min-w-0"
        >
          {/* Eyebrow */}
          <div className="mb-5 flex items-center sm:mb-[32px]">
            <span className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#547F17] sm:text-[12px]">
              Content. Identity. Digital trust.
            </span>
          </div>

          {/* Main heading */}
          <h2
            className="
              m-0 max-w-[700px]
              text-[32px] font-bold
              leading-[1.12] tracking-[-1.2px]
              text-[#172D48]
              sm:text-[52px]
              sm:tracking-[-1.6px]
              lg:text-[64px]
              lg:leading-[1.12]
              lg:tracking-[-2px]
            "
          >
            <span className="block sm:inline">
              Protect what makes
            </span>{" "}
            <span className="block sm:inline">
              your business
            </span>{" "}
            <span className="block sm:inline">
              valuable.
            </span>
          </h2>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.55,
            delay: 0.1,
            ease: "easeOut",
          }}
          className="min-w-0 md:pt-0"
        >
          {/* First paragraph */}
          <p
            className="
              m-0 max-w-[800px]
              text-[15px] font-normal
              leading-[1.65] tracking-[-0.15px]
              text-[#586F89]
              sm:text-[18px]
              lg:text-[20px]
              lg:leading-[1.65]
            "
          >
            Your content and brand can appear far beyond the channels you
            authorize. TrackOwls brings those findings into a structured
            review: what was found, which rights apply, what evidence
            supports it and what action follows.
          </p>

          {/* Second paragraph */}
          <p
            className="
              mt-6 mb-0 max-w-[800px]
              text-[15px] font-normal
              leading-[1.65] tracking-[-0.15px]
              text-[#586F89]
              sm:mt-[32px]
              sm:text-[18px]
              lg:text-[20px]
              lg:leading-[1.65]
            "
          >
            Start with a release, a live event, a catalogue or a brand
            portfolio. Build the monitoring scope around your priorities,
            then use case records and reporting to follow the work.
          </p>

          {/* About link */}
          <a
            href="/about"
            className="
              mt-6 inline-flex
              border-b border-[#B7CC8B]
              pb-[7px]
              text-[13px] font-normal
              tracking-[-0.2px]
              text-[#638B15]
              transition-colors duration-200
              hover:border-[#638B15]
              hover:text-[#45650B]
              sm:mt-[37px]
              sm:pb-[9px]
              sm:text-[12px]
            "
          >
            Meet TrackOwls
          </a>
        </motion.div>
      </div>
    </section>
  );
}
