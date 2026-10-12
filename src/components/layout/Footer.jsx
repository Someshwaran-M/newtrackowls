import React from "react";

const protectionLinks = [
  { name: "Live Streaming Protection", href: "/solutions" },
  { name: "OTT & VOD Protection", href: "/solutions" },
  { name: "Website & App Monitoring", href: "/solutions" },
  { name: "Copyright Enforcement", href: "/solutions" },
  { name: "Brand Protection", href: "/solutions" },
  { name: "Piracy Intelligence", href: "/solutions" },
  { name: "Marketplace & Counterfeit Monitoring", href: "/solutions" },
  { name: "Domain & Impersonation Monitoring", href: "/solutions" },
  { name: "Social Media & Video Protection", href: "/solutions" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Leadership", href: "/about" },
  { name: "Team", href: "/about" },
  { name: "News", href: "/insights" },
  { name: "Blog", href: "/insights" },
  { name: "How it works", href: "/how-it-works" },
  { name: "Case studies", href: "/insights" },
  { name: "Insights", href: "/insights" },
  { name: "Piracy impact brochure", href: "/piracy" },
  { name: "FAQs", href: "/faq" },
  { name: "Technology", href: "/platform" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const informationLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Cookies", href: "/cookies" },
  { name: "Copyright", href: "/copyrights" },
  { name: "Content editor", href: "/content-editor" },
];

function FooterColumn({ title, links }) {
  return (
    <div>
      <h3 className="mb-4 text-[12px] font-bold text-[#17334d]">
        {title}
      </h3>

      <ul className="space-y-[10px]">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-[12px] leading-5 text-[#49617c] transition-colors duration-200 hover:text-[#7ca900]"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-white font-['Roboto',sans-serif] text-[#17334d]">
      <div className="mx-auto max-w-[1420px] px-5 pt-12 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_0.78fr_0.72fr] lg:gap-8 lg:pb-16">
          {/* Brand section */}
          <div className="max-w-[280px]">
            <a
              href="/"
              aria-label="TrackOwls home"
              className="inline-flex items-center gap-2"
            >
              <img
                src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owl-bg.png"
                alt=""
                draggable="false"
                className="h-10 w-8 shrink-0 object-contain sm:h-11 sm:w-9"
              />

              <img
                src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owltext-bg.png"
                alt="TrackOwls"
                draggable="false"
                className="h-auto w-[175px] max-w-full object-contain"
              />
            </a>

            <p className="mt-5 max-w-[240px] text-[12px] leading-[1.8] text-[#49617c]">
              Digital anti-piracy, content protection and brand enforcement.
            </p>

            {/* Brand tagline */}
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-black uppercase tracking-[0.06em] text-[#17334d]">
              <span>Scan</span>
              <span className="text-[#80a900]">|</span>
              <span>Detect</span>
              <span className="text-[#80a900]">|</span>
              <span>Remove</span>
              <span className="text-[#80a900]">|</span>
              <span>Protect</span>
            </div>
          </div>

          {/* Protection links */}
          <FooterColumn
            title="Protection"
            links={protectionLinks}
          />

          {/* Company links */}
          <FooterColumn
            title="Company"
            links={companyLinks}
          />

          {/* Information links */}
          <FooterColumn
            title="Information"
            links={informationLinks}
          />
        </div>

        {/* Bottom divider */}
        <div className="h-px w-full bg-[#d7e2ec]" />

        {/* Copyright row */}
        <div className="flex flex-col gap-3 py-5 text-[10px] text-[#526b84] sm:flex-row sm:items-center sm:justify-between sm:py-6">
          <p>
            © {new Date().getFullYear()} TrackOwls. All rights reserved.
          </p>

          <p className="tracking-[0.01em]">
            Scan. Detect. Remove. Protect.
          </p>
        </div>
      </div>
    </footer>
  );
}
