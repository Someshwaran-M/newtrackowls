
import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  ScanSearch,
  FileCheck2,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ScanSearch,
    title: "Discover Exposure",
    description: "Identify where your content appears beyond authorized channels.",
  },
  {
    icon: FileCheck2,
    title: "Review Evidence",
    description: "Organize findings, ownership details, and supporting evidence.",
  },
  {
    icon: ShieldCheck,
    title: "Protect Your Rights",
    description: "Coordinate appropriate actions and track follow-up progress.",
  },
];

export default function HomeAbout() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-5 py-6 font-['Roboto',sans-serif] text-[#152019] sm:px-8 lg:px-12 lg:py-8">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#ADD132]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-80 w-80 rounded-full bg-[#8BB630]/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-[1420px] items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16 xl:gap-20">
        {/* LEFT: Organic image composition */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto w-full max-w-[680px] lg:mx-0"
        >
          {/* Organic lime shapes */}
          <div className="absolute -left-1 top-[12%] h-[65%] w-[31%] rounded-[70%_20%_65%_25%] bg-[#ADD132]" />

          <div className="absolute -right-2 top-[8%] h-[45%] w-[30%] rounded-[30%_65%_20%_70%] bg-[#8BB630]" />

          <div className="absolute -bottom-1 left-[5%] h-[32%] w-[66%] rounded-[15%_0%_0%_65%] bg-[#152019]" />

          {/* Image frame */}
          <div className="relative mx-[3%] overflow-hidden rounded-[43%_20%_38%_19%] border border-[#8BB630]/60">
            <div className="aspect-[0.91/1] overflow-hidden sm:aspect-[1.02/1]">
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=90"
                alt="Team collaborating on digital content protection"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#152019]/70 via-transparent to-[#152019]/5" />

            {/* Image caption */}
            <div className="absolute bottom-7 left-6 z-10 space-y-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white sm:bottom-10 sm:left-10">
              <p>Content</p>
              <p>Identity</p>
              <p>Digital trust</p>
            </div>
          </div>

          {/* Decorative curved outlines */}
          <svg
            viewBox="0 0 700 760"
            className="pointer-events-none absolute -inset-[5%] h-[110%] w-[110%]"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M90 180 C160 30 280 30 365 80 S480 25 555 65 S630 210 655 300 S620 470 560 565 S410 700 310 680 S130 745 65 630 S0 390 90 180Z"
              stroke="#8BB630"
              strokeWidth="1.5"
            />
            <path
              d="M110 205 C180 65 290 65 375 110 S485 65 550 105 S605 230 630 310 S590 475 535 550"
              stroke="#ADD132"
              strokeWidth="1"
              strokeDasharray="4 7"
            />
            <circle cx="365" cy="80" r="7" fill="#8BB630" />
            <circle cx="65" cy="630" r="8" fill="#8BB630" />
          </svg>

          {/* Floating circular message */}
          <div className="absolute -bottom-5 right-0 z-10 flex h-32 w-32 rotate-[-8deg] items-center justify-center rounded-full border border-[#8BB630]/20 bg-[#F4F8E9] p-4 text-center shadow-[0_15px_40px_rgba(21,32,25,0.12)] sm:right-2 sm:h-40 sm:w-40">
            <p className="text-sm font-semibold leading-relaxed text-[#6D900B] sm:text-base">
              Content
              <br />
              Integrity
              <br />
              Protection
            </p>
          </div>

          {/* Small decorative dots */}
          <div className="absolute -left-5 top-8 hidden grid-cols-4 gap-3 sm:grid">
            {Array.from({ length: 20 }).map((_, index) => (
              <span
                key={index}
                className="h-1 w-1 rounded-full bg-[#6D900B]/80"
              />
            ))}
          </div>
        </motion.div>

        {/* RIGHT: Updated TrackOwls content */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative z-10"
        >
          {/* Eyebrow */}
          <div className="mb-6 flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-[0.35em] text-[#6D900B]">
              About TrackOwls
            </span>
            <span className="h-px w-14 bg-[#8BB630]/70" />
          </div>

          {/* Heading */}
          <h2 className="max-w-[680px] text-[clamp(2.6rem,4.5vw,4.6rem)] font-extrabold leading-[1.03] tracking-[-0.055em] text-[#152019]">
            Protect what makes your business{" "}
            <span className="relative inline-block text-[#6D900B]">
              valuable.
              <svg
                viewBox="0 0 250 15"
                className="mt-1 h-3 w-40 sm:w-52"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 11 C65 2 160 2 245 5"
                  stroke="#8BB630"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          {/* Exact messaging from the second reference */}
          <div className="mt-7 max-w-[670px] space-y-5 text-[15px] leading-[1.85] text-[#68746C] sm:text-base">
            <p>
              Your content and brand can appear far beyond the channels you
              authorize. TrackOwls brings those findings into a structured
              review: what was found, which rights apply, what evidence
              supports it and what action follows.
            </p>

            <p>
              Start with a release, a live event, a catalogue or a brand
              portfolio. Build the monitoring scope around your priorities,
              then use case records and reporting to follow the work.
            </p>
          </div>

          {/* Three feature highlights */}
          <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.12 }}
                  className="group relative border-l-2 border-[#8BB630]/35 pl-4 transition-colors duration-300 hover:border-[#6D900B]"
                >
                  <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-[#EDF4DF] text-[#6D900B] transition-all duration-300 group-hover:bg-[#ADD132] group-hover:text-[#152019]">
                    <Icon size={22} strokeWidth={1.7} />
                  </div>

                  <h3 className="text-sm font-bold text-[#152019]">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#68746C]">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-9 border-t border-[#DCE5D3] pt-6">
            <a
              href="#contact"
              className="group inline-flex items-center gap-5 rounded-full bg-[#8BB630] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(139,182,48,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#6D900B] hover:shadow-[0_14px_35px_rgba(109,144,11,0.3)]"
            >
              Meet TrackOwls
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#6D900B] transition-transform duration-300 group-hover:rotate-[-35deg]">
                <ArrowRight size={20} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
