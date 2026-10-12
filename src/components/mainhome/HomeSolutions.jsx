
import React from "react";
import { motion } from "framer-motion";
import {
  Radio,
  Play,
  Globe,
  FileCheck2,
  ShieldCheck,
  ScanSearch,
  Search,
  Eye,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    number: "01",
    title: "Live Streaming Protection",
    description: "Act while the event still matters.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=85",
    icon: Radio,
    link: "/services",
  },
  {
    number: "02",
    title: "OTT & VOD Protection",
    description: "Protect every release window.",
    image:
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=800&q=85",
    icon: Play,
    link: "/industries",
  },
  {
    number: "03",
    title: "Website & App Monitoring",
    description: "See where your content travels.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85",
    icon: Globe,
    link: "/platform",
  },
  {
    number: "04",
    title: "Copyright Enforcement",
    description: "Turn evidence into action.",
    image:
      "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=85",
    icon: FileCheck2,
    link: "/services",
  },
  {
    number: "05",
    title: "Brand Protection",
    description: "Defend the identity you built.",
    image: null,
    icon: ShieldCheck,
    link: "/services",
  },
  {
    number: "06",
    title: "Piracy Intelligence",
    description: "Understand the patterns behind piracy.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=85",
    icon: ScanSearch,
    link: "/platform",
  },
  {
    number: "07",
    title: "Marketplace & Counterfeit Monitoring",
    description: "Investigate listings that misuse your brand.",
    image: null,
    icon: Search,
    link: "/industries",
  },
  {
    number: "08",
    title: "Domain & Impersonation Monitoring",
    description: "Protect the identity behind your digital presence.",
    image: null,
    icon: Globe,
    link: "/services",
  },
  {
    number: "09",
    title: "Social Media & Video Protection",
    description: "Follow infringement across public social channels.",
    image: null,
    icon: Eye,
    link: "/platform",
  },
];

export default function HomeSolutions() {
  return (
    <section
      id="home-solutions"
      className="relative overflow-hidden bg-[#FFFFFF] px-5 py-10 font-['Roboto',Arial,sans-serif] text-[#15334E] sm:px-8 sm:py-12 lg:px-10 lg:py-12"
    >
      <div className="mx-auto max-w-[1290px]">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="mb-7 flex items-end justify-between gap-6 sm:mb-8 lg:mb-9"
        >
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-[#617D17]">
              Our solutions
            </p>

            <h2 className="max-w-[550px] text-[36px] font-bold leading-[1.1] tracking-[-1.3px] text-[#15334E] sm:text-[48px] lg:text-[54px]">
              Protection with a
              <br />
              <span className="text-[#7C9D18]">
                clear path to action.
              </span>
            </h2>
          </div>

          <Link
            to="/solutions"
            className="group mb-1 hidden shrink-0 items-center gap-1 border-b border-[#C9D9AD] pb-1 text-[11px] font-medium text-[#648A13] transition-colors hover:border-[#648A13] hover:text-[#45637F] sm:inline-flex"
          >
            View all solutions
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>

        {/* Solutions grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;

            return (
              <motion.article
                key={solution.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.45,
                  delay: (index % 3) * 0.07,
                }}
                className="group relative flex min-h-[218px] flex-col overflow-hidden rounded-[4px] border border-[#DCE6D3] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#A8C96B] hover:shadow-[0_12px_30px_rgba(21,51,78,0.07)] sm:min-h-[230px] lg:min-h-[245px]"
              >
                {/* Optional image */}
                {solution.image && (
                  <div className="relative h-[116px] shrink-0 overflow-hidden bg-[#F5F8F2] sm:h-[106px] lg:h-[105px]">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#15334E]/15 to-transparent" />
                  </div>
                )}

                {/* Corner accent */}
                <span className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r border-t border-[#8BB630]" />

                {/* Card content */}
                <div className="flex flex-1 flex-col p-4 sm:p-[17px]">
                  <div className="mb-4 flex items-center justify-between">
                    <Icon
                      size={17}
                      strokeWidth={1.6}
                      className="text-[#648A13] transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="font-mono text-[10px] text-[#617D17]">
                      {solution.number}
                    </span>
                  </div>

                  <h3 className="text-[14px] font-medium leading-[1.4] text-[#15334E] sm:text-[15px]">
                    {solution.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-[1.7] text-[#45637F]">
                    {solution.description}
                  </p>

                  <div className="mt-auto pt-4">
                    <Link
                      to={solution.link}
                      className="group/link inline-flex items-center gap-1 border-b border-[#C9D9AD] pb-1 text-[11px] font-medium text-[#648A13] transition-all hover:border-[#648A13]"
                    >
                      Explore solution
                      <ArrowUpRight
                        size={12}
                        className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Mobile view-all link */}
        <div className="mt-6 sm:hidden">
          <Link
            to="/solutions"
            className="inline-flex items-center gap-2 border-b border-[#C9D9AD] pb-1 text-[12px] font-medium text-[#648A13]"
          >
            View all solutions <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
