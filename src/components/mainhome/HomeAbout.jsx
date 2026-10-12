
import React from "react";
import { motion } from "framer-motion";

export default function HomeAbout() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-white font-['Roboto',Arial,sans-serif] text-[#15334E]"
    >
      <div className="mx-auto grid max-w-[1420px] grid-cols-1 gap-7 px-6 py-10 sm:px-8 sm:py-12 md:grid-cols-2 md:items-center md:gap-10 lg:px-12 lg:py-12 xl:px-16">
        {/* LEFT: Heading */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="min-w-0"
        >
          
          <div>
            <div className="mb-6 inline-flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#8EAF20]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#617D17]">
                 Content. Identity. Digital trust.
              </span>
            </div>

            <h2 className="m-0 max-w-[850px] text-[36px] font-bold leading-[1.06] tracking-[-0.055em] sm:text-[48px] lg:text-[64px]">
              Protect what makes
              <span className="block text-[#7C9D18]">
              your business
              </span>
              <span className="block text-[#7C9D18]">
              valuable.
              </span>
            </h2>
          </div>
        </motion.div>

        

        {/* RIGHT: Description and link */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
          className="min-w-0 md:pl-1 lg:pl-3"
        >
          <div className="space-y-6">
  <p className="m-0 text-justify text-[14px] leading-[1.9] text-[#45637F] [text-justify:inter-word] sm:text-[14px] lg:text-[15px]">
    Your content and brand can appear far beyond the channels you
    authorize. TrackOwls brings those findings into a structured review:
    what was found, which rights apply, what evidence supports it and
    what action follows.
  </p>

  <p className="mt-5 text-justify text-[14px] leading-[1.9] text-[#45637F] [text-justify:inter-word] sm:text-[14px] lg:text-[15px]">
    Start with a release, a live event, a catalogue or a brand
    portfolio. Build the monitoring scope around your priorities, then
    use case records and reporting to follow the work.
  </p>
</div>
          <a
            href="/about"
            className="group mt-4 inline-flex items-center gap-2 border-b border-[#B8CE87] pb-1 text-[12px] font-medium text-[#648A13] transition-colors duration-200 hover:border-[#648A13] hover:text-[#45650B] sm:text-[14px]"
          >
            Meet TrackOwls
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
