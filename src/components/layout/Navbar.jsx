import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "How it works", path: "/how-it-works" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Industries", path: "/industries" },
  { name: "Platform", path: "/platform" },
  { name: "Insights", path: "/insights" },
  { name: "Piracy impact report", path: "/piracy" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);

    if (location.hash === "/contact") {
      requestAnimationFrame(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname, location.hash]);

  const closeMenu = () => setMenuOpen(false);
  const isActive = (path) => location.pathname === path;

  const handleConsultation = () => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/contact");
      return;
    }

    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/contact");
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-[#f8fafc] border-b border-[#e2e8f0]">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex h-20 w-full max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-12"
      >
        {/* Brand logo & text image matching the reference */}
        <Link
          to="/"
          onClick={closeMenu}
          aria-label="TrackOwls home"
          className="flex shrink-0 items-center gap-3"
        >
          <img
            src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owl-bg.png"
            alt="TrackOwls Owl"
            draggable="false"
            className="h-16 w-16 object-contain"
          />
          <img
            src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owltext-bg.png"
            alt="TRACKOWLS"
            draggable="false"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop navigation matching reference layout */}
        <div className="hidden items-center gap-8 xl:flex">
          {navItems.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`whitespace-nowrap text-[15px] font-medium tracking-normal transition-colors duration-200 ${
                  active
                    ? "text-[#1e293b]"
                    : "text-[#334155] hover:text-[#1e293b]"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop consultation button matching reference green pill shape & tone */}
        <div className="hidden shrink-0 items-center xl:flex">
          <button
            type="button"
            onClick={handleConsultation}
            className="inline-flex items-center justify-center rounded-[8px] bg-[#5a8c12] px-6 py-3 text-[15px] font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#689d14]"
          >
            Request a consultation
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="trackowls-mobile-menu"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded border border-[#cbd5e1] text-[#1e293b] transition hover:bg-[#f1f5f9] xl:hidden"
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        {/* Mobile dropdown menu */}
        <div
          id="trackowls-mobile-menu"
          className={`absolute left-0 right-0 top-full z-50 border-t border-[#e2e8f0] bg-white px-6 pb-6 shadow-xl transition-all duration-300 xl:hidden ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex max-h-[65vh] flex-col overflow-y-auto pt-2">
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`border-b border-[#f1f5f9] py-3 text-[15px] font-medium transition-colors ${
                    active ? "text-[#5a8c12]" : "text-[#334155]"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleConsultation}
            className="mt-5 flex w-full items-center justify-center rounded-[8px] bg-[#5a8c12] px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-[#689d14]"
          >
            Request a consultation
          </button>
        </div>
      </nav>
    </header>
  );
}
