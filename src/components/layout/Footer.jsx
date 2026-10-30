
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
  { name: "Piracy impact report", href: "/piracy" },
  { name: "FAQs", href: "/faq" },
  { name: "Technology", href: "/platform" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const informationLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Cookies", href: "/cookies" },
  { name: "Copyright reporting", href: "/copyrights" },
  { name: "Content editor", href: "/content-editor" },
];

function FooterColumn({ title, links, className = "" }) {
  return (
    <div className={className}>
      <h3 className="mb-4 text-[12px] font-bold text-[#f8fafc]">
        {title}
      </h3>

      <ul className="space-y-[10px]">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-[12px] leading-5 text-[#94a3b8] transition-colors duration-200 hover:text-[#d1ed14]"
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
    <footer
      id="footer"
      className="w-full border-t border-[rgba(255,255,255,0.08)] bg-transparent font-['Roboto',sans-serif] text-white backdrop-blur-md"
    >
      <div className="mx-auto max-w-[1420px] px-5 pt-12 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">

        {/* Main footer content */}
        <div className="footer-grid grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_0.78fr_0.72fr] lg:gap-8 lg:pb-16">

          {/* Brand section */}
          <div className="footer-brand max-w-[280px]">
            <a
              href="/"
              aria-label="TrackOwls home"
              className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-sm"
            >
              <img
                src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owl-bg.png"
                alt=""
                draggable="false"
                className="h-9 w-7 shrink-0 object-contain sm:h-10 sm:w-8"
              />

              <img
                src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owltext-bg.png"
                alt="TrackOwls"
                draggable="false"
                className="h-auto w-[160px] max-w-full object-contain"
              />
            </a>

            <p className="mt-5 max-w-[240px] text-[12px] leading-[1.8] text-[#94a3b8]">
              Digital anti-piracy, content protection and brand enforcement.
            </p>

            {/* Brand tagline */}
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-black uppercase tracking-[0.06em] text-[#cbd5e1]">
              <span>Scan</span>
              <span className="text-[#d1ed14]">|</span>
              <span>Detect</span>
              <span className="text-[#d1ed14]">|</span>
              <span>Remove</span>
              <span className="text-[#d1ed14]">|</span>
              <span>Protect</span>
            </div>
          </div>

          {/* Protection links */}
          <FooterColumn
            title="Protection"
            links={protectionLinks}
            className="footer-protection"
          />

          {/* Company links */}
          <FooterColumn
            title="Company"
            links={companyLinks}
            className="footer-company"
          />

          {/* Information links */}
          <FooterColumn
            title="Information"
            links={informationLinks}
            className="footer-information"
          />
        </div>

        {/* Bottom divider */}
        <div className="h-px w-full bg-[rgba(255,255,255,0.1)]" />

        {/* Copyright row */}
        <div className="flex flex-col gap-3 py-5 text-[10px] text-[#64748b] sm:flex-row sm:items-center sm:justify-between sm:py-6">

          <p>
            © {new Date().getFullYear()} TrackOwls. All rights reserved.
          </p>

          {/* Powered by */}
          <div className="flex flex-wrap items-center gap-1 text-[#94a3b8]">
            <span>Powered by</span>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#d1ed14] transition-colors duration-200 hover:text-white"
            >
              MK Dynamic Technology
            </a>
          </div>

          <p className="tracking-[0.01em] text-[#94a3b8]">
            Scan. Detect. Remove. Protect.
          </p>
        </div>
      </div>

      {/* Mobile-only layout adjustments */}
      <style>{`
        @media (max-width: 639px) {
          #footer > div {
            padding-top: 26px;
            padding-left: 10px;
            padding-right: 10px;
          }

          #footer .footer-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            column-gap: 22px;
            row-gap: 36px;
            padding-bottom: 36px;
          }

          /* Logo and description span both columns */
          #footer .footer-brand {
            grid-column: 1 / -1;
            grid-row: 1;
            max-width: 280px;
          }

          #footer .footer-brand > a {
            gap: 7px;
          }

          #footer .footer-brand > a img:last-child {
            width: 175px;
          }

          #footer .footer-brand > p {
            margin-top: 16px;
          }

          #footer .footer-brand > div {
            margin-top: 27px;
          }

          /* Protection: left column */
          #footer .footer-protection {
            grid-column: 1;
            grid-row: 2;
            min-width: 0;
          }

          /* Company: right column */
          #footer .footer-company {
            grid-column: 2;
            grid-row: 2;
            min-width: 0;
          }

          /* Information: full width */
          #footer .footer-information {
            grid-column: 1 / -1;
            grid-row: 3;
            margin-top: 0;
          }

          #footer .footer-grid h3 {
            margin-bottom: 16px;
            font-size: 12px;
          }

          #footer .footer-grid ul {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          #footer .footer-grid li {
            min-width: 0;
            line-height: 1.65;
          }

          #footer .footer-grid li a {
            display: inline;
            font-size: 12px;
            line-height: 1.65;
            overflow-wrap: anywhere;
          }

          /* Copyright area */
          #footer .footer-grid + div {
            width: 100%;
          }

          #footer .footer-grid + div + div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            padding-top: 20px;
            padding-bottom: 12px;
            font-size: 10px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          #footer *,
          #footer *::before,
          #footer *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </footer>
  );
}
