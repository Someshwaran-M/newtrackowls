
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "How it works", path: "/how-it-works" },
  { name: "About", path: "/about" },
  { name: "Solutions", path: "/solutions" },
  { name: "Industries", path: "/industries" },
  { name: "Platform", path: "/platform" },
  { name: "Insights", path: "/insights" },
  { name: "Piracy Impact Brochure", path: "/piracy" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !menuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 35);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-all duration-300 ${
        transparent
          ? "border-b border-transparent bg-transparent shadow-none"
          : "border-b border-[#e6eae2] bg-white shadow-[0_4px_18px_rgba(20,32,20,0.06)]"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex min-h-[76px] w-full max-w-[1420px] items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:gap-5 lg:px-8"
      >
        {/* Brand logos */}
        
{/* Brand logos */}
<Link
  to="/"
  onClick={closeMenu}
  aria-label="TrackOwls home"
  className="flex shrink-0 items-center gap-2 sm:gap-3"
>
  <img
    src={
      transparent
        ? "/images/logo/Trackowls_Owl_Logo_Banner-remove-owl-bg-light.png"
        : "/images/logo/Trackowls_Owl_Logo_Banner-remove-owl-bg.png"
    }
    alt=""
    draggable="false"
    className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14 lg:h-16 lg:w-16"
  />

  <img
    src={
      transparent
        ? "/images/logo/Trackowls_Owl_Logo_Banner-remove-bg-light.png"
        : "/images/logo/Trackowls_Owl_Logo_Banner-remove-owltext-bg.png"
    }
    alt="TrackOwls"
    draggable="false"
    className="h-auto w-[105px] object-contain sm:w-[135px] lg:w-[155px]"
  />
</Link>


        {/* Desktop navigation */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-3 xl:flex 2xl:gap-5">
          {navItems.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap px-1.5 py-3 text-[14px] font-bold tracking-normal transition-colors duration-200 2xl:text-[13px] ${
                  transparent
                    ? "text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.65)] hover:text-[#ADD132]"
                    : active
                      ? "text-[#151a12]"
                      : "text-[#303630] hover:text-[#719b0c]"
                }`}
              >
                {active && (
                  <>
                    <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-[#ADD132]" />
                    <span className="absolute right-0 top-0 h-3 w-3 border-r-2 border-t-2 border-[#ADD132]" />
                    <span className="absolute bottom-0 left-0 h-3 w-3 border-b-2 border-l-2 border-[#ADD132]" />
                    <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-[#ADD132]" />
                  </>
                )}

                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Desktop consultation button */}
        <div
          className={`hidden shrink-0 items-center border-l pl-4 xl:flex 2xl:pl-5 ${
            transparent ? "border-white/35" : "border-[#ADD132]"
          }`}
        >
          <button
            type="button"
            onClick={handleConsultation}
            className="inline-flex items-center gap-2 bg-[#ADD132] px-4 py-3.5 text-[12px] font-black uppercase tracking-wide text-[#151a0d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#baf53b] hover:shadow-[0_8px_22px_rgba(169,237,22,0.2)] 2xl:px-5 2xl:text-[13px]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-4 w-4 shrink-0"
              aria-hidden="true"
            >
              <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4 4v-4h-.5A2.5 2.5 0 0 1 4 13.5z" />
              <path d="M8 8h8M8 11h5" />
            </svg>
            Request a consultation
          </button>
        </div>

        {/* Mobile / tablet menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="trackowls-mobile-menu"
          className={`flex h-10 w-10 shrink-0 items-center justify-center border transition xl:hidden ${
            transparent
              ? "border-white/50 text-white hover:border-[#ADD132] hover:bg-white/10"
              : "border-[#e4e8df] text-[#182018] hover:border-[#ADD132] hover:bg-[#f6fbe9]"
          }`}
        >
          {menuOpen ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>

        {/* Mobile / tablet menu */}
        <div
          id="trackowls-mobile-menu"
          className={`absolute left-0 right-0 top-full z-50 border-t border-[#e8ece4] bg-white px-5 pb-5 shadow-[0_18px_35px_rgba(20,30,15,0.12)] transition-all duration-300 xl:hidden ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible pointer-events-none -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex max-h-[65vh] flex-col overflow-y-auto">
            {navItems.map((item) => {
              const active = isActive(item.path);

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`border-b border-[#edf0e9] px-3 py-4 text-[13px] font-bold tracking-wide transition-colors hover:bg-[#f7fce9] ${
                    active
                      ? "border-l-2 border-l-[#a9ed16] text-[#719b0c]"
                      : "text-[#29302b]"
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
            className="mt-4 flex w-full items-center justify-center gap-2 bg-[#ADD132] px-5 py-4 text-[13px] font-black uppercase tracking-wide text-[#151a0d] transition hover:bg-[#baf53b]"
          >
            Request a consultation
            
          </button>
        </div>
      </nav>
    </header>
  );
}
