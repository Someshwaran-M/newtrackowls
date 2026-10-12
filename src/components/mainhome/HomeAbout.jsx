
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
          mx-auto grid w-full max-w-[1580px]
          grid-cols-1 gap-8
          px-6 py-[76px]
          sm:px-10 sm:py-[90px]
          md:grid-cols-2 md:items-start md:gap-12
          lg:px-[5.5%] lg:py-[119px]
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
          <div className="mb-[32px] flex items-center">
            <span className="text-[12px] font-bold uppercase tracking-[0.17em] text-[#547F17]">
              Content. Identity. Digital trust.
            </span>
          </div>

          {/* Main heading */}
          <h2
            className="
              m-0 max-w-[700px]
              text-[34px] font-bold
              leading-[1.12] tracking-[-1.6px]
              text-[#172D48]
              sm:text-[52px]
              lg:text-[64px]
              lg:leading-[1.12]
              lg:tracking-[-2px]
            "
          >
            Protect what makes
            <br />
            your business
            <br />
            valuable.
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
              text-[1px] font-normal
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
              mt-[32px] mb-0 max-w-[800px]
              text-[12px] font-normal
              leading-[1.65] tracking-[-0.15px]
              text-[#586F89]
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
              mt-[37px] inline-flex
              border-b border-[#B7CC8B]
              pb-[9px]
              text-[12px] font-normal
              tracking-[-0.2px]
              text-[#638B15]
              transition-colors duration-200
              hover:border-[#638B15]
              hover:text-[#45650B]
            "
          >
            Meet TrackOwls
          </a>
        </motion.div>
      </div>
    </section>
  );
}
