<<<<<<< HEAD
import React, { useEffect, useRef, useState } from "react";
=======
import React from "react";
>>>>>>> 7cdf2a6 (3d  updated)
import { useNavigate } from "react-router-dom";
const categories = [
  "Video & film",
  "Live broadcasts",
  "Music & audio",
  "Digital publications",
  "Games & software",
  "Brand assets",
];

<<<<<<< HEAD
const Icon = ({ children, className = "h-4 w-4" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);


function HomeMain() {
  const navigate = useNavigate();
  const stageRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [animationPaused, setAnimationPaused] = useState(false);
=======
export default function HomeMain() {
  const navigate = useNavigate();
>>>>>>> 7cdf2a6 (3d  updated)

  const handleContact = () => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      navigate("/contact");
    }
  };

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = stage.getBoundingClientRect();
        const scrollable = Math.max(1, stage.offsetHeight - window.innerHeight);
        const travelled = Math.min(scrollable, Math.max(0, -rect.top));
        setProgress(travelled / scrollable);
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const revealLine = (start, end) => {
    const amount = Math.max(0, Math.min(1, (progress - start) / (end - start)));
    return { opacity: amount, transform: `translateY(${(1 - amount) * 18}px)` };
  };
  const clamp01 = (value) => Math.max(0, Math.min(1, value));
  const cityProgress = clamp01((progress - 0.14) / 0.30);
  const finalProgress = clamp01((progress - 0.68) / 0.32);

  return (
<<<<<<< HEAD
    <main
      id="home"
      ref={stageRef}
      className={`track-scroll-story ${animationPaused ? "track-no-animation" : ""}`}
      style={{ "--scroll-progress": progress }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700;800;900&display=swap');

        .track-scroll-story {
          --lime: #8bb630;
          --navy: #071b30;
          position: relative;
          height: 430vh;
          color: #fff;
          background: #071b30;
          font-family: Roboto, sans-serif;
          isolation: isolate;
        }
        .track-story-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          min-height: 620px;
          overflow: hidden;
          
          isolation: isolate;
        }
        .track-story-glow { position: absolute; inset: 0; pointer-events: none; background: transparent; z-index: -3; }
        .track-stars {
          position: absolute;
          inset: 0;
          z-index: -1;
          pointer-events: none;
          opacity: .78;
          background-image:
            radial-gradient(1.5px 1.5px at 8% 18%, rgba(255,255,255,.95) 45%, transparent 70%),
            radial-gradient(1px 1px at 17% 73%, rgba(190,224,255,.95) 45%, transparent 70%),
            radial-gradient(2px 2px at 25% 36%, rgba(255,255,255,.8) 45%, transparent 70%),
            radial-gradient(1px 1px at 38% 12%, rgba(255,255,255,.8) 45%, transparent 70%),
            radial-gradient(1.5px 1.5px at 48% 83%, rgba(190,224,255,.9) 45%, transparent 70%),
            radial-gradient(1px 1px at 63% 19%, rgba(255,255,255,.8) 45%, transparent 70%),
            radial-gradient(1.5px 1.5px at 77% 79%, rgba(255,255,255,.9) 45%, transparent 70%),
            radial-gradient(1px 1px at 88% 28%, rgba(190,224,255,.9) 45%, transparent 70%),
            radial-gradient(1px 1px at 93% 61%, rgba(255,255,255,.8) 45%, transparent 70%);
          background-size: 100% 100%;
        }
        .track-story-stage {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: -2;
        }
        .track-earth {
          position: absolute;
          /* Large globe sized to cover the viewport, including screen corners. */
          position: absolute;
          width: max(120vw, 120vh);
          height: max(120vw, 120vh);
          left: 50%;
          top: 50%;
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(1);
          background:
            radial-gradient(circle at 31% 27%, rgba(255,255,255,.45), transparent 8%),
            radial-gradient(circle at 35% 30%, transparent 30%, rgba(0,0,0,.12) 52%, rgba(0,0,0,.88) 100%),
            url('https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg') center / cover;
          box-shadow: inset -65px -25px 110px rgba(0,0,0,.62), 0 0 70px rgba(93, 177, 213, .24);
          animation: trackEarthSpin 42s linear infinite;
          will-change: transform, background-position;
          transition: opacity .5s ease;
          opacity: calc(1 - min(1, max(0, (var(--scroll-progress) - .08) * 5)));
        }
        .track-earth::after {
          content: "";
          position: absolute;
          inset: -2%;
          border-radius: 50%;
          border: 1px solid rgba(157, 217, 238, .28);
          box-shadow: 0 0 24px rgba(111, 195, 221, .22), inset 0 0 28px rgba(75, 164, 206, .1);
        }
        .track-city-scene {
          position: absolute;
          inset: 0;
          opacity: 0;
          transform: scale(.72);
          transform-origin: 50% 50%;
          background: #102b3e;
          transition: opacity .15s linear;
          overflow: hidden;
        }
        .track-city-photo {
          position: absolute;
          inset: -2%;
          width: 104%;
          height: 104%;
          object-fit: cover;
          object-position: center 50%;
          filter: brightness(1.16) saturate(1.13) contrast(1.08);
          max-width: none;
        }
        .track-city-sharp-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(7,27,48,.8), rgba(7,27,48,.18) 58%, rgba(7,27,48,.08));
        }
        .track-story-layout { position: relative; z-index: 2; display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1fr); gap: clamp(30px, 5vw, 82px); align-items: center; width: min(1740px, calc(100% - 136px)); height: 100%; margin: 0 auto; padding: 32px 0; }
        .track-story-copy {
          max-width: 660px;
          min-width: 0;
          position: relative;
          z-index: 4;
          text-shadow: 0 2px 12px rgba(0,0,0,.2);
        }
        .track-story-copy > * { will-change: opacity, transform; }
        .track-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          color: #c9f20b;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.8px;
          line-height: 1.4;
        }
        .track-eyebrow-line { width: 31px; height: 1px; flex: 0 0 auto; background: var(--lime); }
        .track-heading {
          max-width: 660px;
          margin: 0;
          color: #f8fafc;
          font-size: clamp(48px, 4.35vw, 74px);
          font-weight: 800;
          letter-spacing: -3px;
          line-height: 1.04;
        }
        .track-heading-accent { display: block; color: #c9f20b; }
        .track-description {
          max-width: 610px;
          margin: 24px 0 0;
          color: #e0e9f1;
          font-size: 17px;
          line-height: 1.7;
        }
        .track-process {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 11px;
          margin-top: 24px;
          color: #edf4fa;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }
        .track-process-divider { width: 2px; height: 14px; background: var(--lime); }
        .track-actions { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 29px; }
        .track-primary-button, .track-secondary-button {
          display: inline-flex;
          min-height: 49px;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          padding: 0 20px;
          font-size: 13px;
          font-weight: 700;
          white-space: nowrap;
          transition: transform .2s, background .2s, border-color .2s;
          cursor: pointer;
        }
        .track-primary-button { border: 1px solid #c9f20b; background: #c9f20b; color: #14200b; }
        .track-primary-button:hover { transform: translateY(-2px); background: #d9ff30; }
        .track-secondary-button { border: 1px solid #668096; background: rgba(16,39,60,.85); color: #f7fafc; }
        .track-secondary-button:hover { transform: translateY(-2px); border-color: #c9f20b; }
        .track-categories { display: flex; flex-wrap: wrap; gap: 8px; max-width: 530px; margin-top: 23px; }
        .track-category {
          display: inline-flex;
          min-height: 34px;
          align-items: center;
          justify-content: center;
          padding: 0 10px;
          border: 1px solid rgba(120,155,181,.68);
          border-radius: 5px;
          background: rgba(8,31,50,.76);
          color: #e0eaf4;
          font-size: 12px;
          white-space: nowrap;
        }
        .track-proof { display: flex; align-items: center; gap: 9px; margin-top: 24px; color: #d5e3ed; font-size: 12px; line-height: 1.5; }
        .track-proof-icon { flex: 0 0 auto; color: #8bb630; }
        .track-pause {
          display: block;
          margin-top: 19px;
          padding: 0 0 7px;
          border: 0;
          border-bottom: 1px solid rgba(189,209,223,.7);
          background: transparent;
          color: #a8bdcc;
          cursor: pointer;
          font-size: 11px;
        }

        .track-story-visual-space {
          min-width: 0;
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
        .track-home-image-frame { width: 100%; overflow: hidden; border: 1px solid rgba(139, 182, 48, 0.65); border-radius: 22px; background: rgba(7, 27, 48, 0.15); box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25); } .track-home-image { display: block; width: 100%; height: min(62vh, 570px); min-height: 320px; object-fit: cover; object-position: center; }
        .track-story-footer {
          position: absolute;
          z-index: 5;
          right: 0;
          bottom: 0;
          left: 0;
          display: grid;
          grid-template-columns: 1.1fr repeat(6, 1fr);
          align-items: center;
          gap: 20px;
          min-height: 58px;
          padding: 8px max(60px, calc((100vw - 1450px) / 2));
          border-top: 1px solid rgba(144,172,192,.2);
          background: rgba(7,27,48,.68);
          backdrop-filter: none;
        }
        .track-footer-item { color: #d7e4ef; font-size: 11px; font-weight: 500; line-height: 1.4; }
        .track-footer-label { display: block; color: #b7cbd9; font-size: 10px; font-weight: 400; line-height: 1.5; }
        .track-no-animation .track-earth { animation-play-state: paused !important; }
        @keyframes trackEarthSpin { from { background-position: center, center, 0% center; } to { background-position: center, center, 100% center; } }
        
        /* Scroll-linked animation values are applied directly from React for browser compatibility. */
        @media (max-width: 1023px) {
          .track-scroll-story { height: 430vh; }
          .track-story-sticky { min-height: 580px; }
          .track-story-layout {
            display: block;
            width: calc(100% - 44px);
            padding-top: 54px;
            padding-bottom: 70px;
          }
          .track-story-stage { opacity: .88; }
          .track-earth { left: 50%; top: 50%; width: max(120vw, 120vh); height: max(120vw, 120vh); }
          .track-city-scene { transform-origin: center center; }
          .track-city-photo { object-position: center center; }
          .track-city-sharp-overlay {
            background: linear-gradient(90deg, rgba(7,27,48,.82), rgba(7,27,48,.5) 70%, rgba(7,27,48,.28));
          }
          .track-story-copy {
            max-width: 690px;
            padding: 18px 0 50px;
          }
          .track-heading { font-size: clamp(46px, 7vw, 68px); }
          .track-description { max-width: 590px; }

          .track-story-visual-space {
            display: flex;
            min-height: 220px;
            margin-top: 16px;
          }

          .track-home-image-frame {
            height: 34vh;
            min-height: 220px;
            border-radius: 12px;
          }
          
          .track-story-footer {
            grid-template-columns: repeat(4, minmax(0,1fr));
            gap: 10px;
            min-height: 54px;
            padding: 8px 22px;
          }
          .track-footer-item { font-size: 10px; }
          .track-footer-item:first-child { grid-column: 1 / -1; }
        }
        @media (max-width: 560px) {
          .track-story-sticky { min-height: 560px; }
          .track-story-layout { width: calc(100% - 34px); padding-top: 54px; padding-bottom: 58px; }
          .track-story-stage { opacity: .76; }
          .track-earth { width: max(120vw, 120vh); height: max(120vw, 120vh); top: 50%; }
          .track-city-photo { object-position: 52% center; }
          .track-city-sharp-overlay {
            background: linear-gradient(90deg, rgba(7,27,48,.86), rgba(7,27,48,.62) 75%, rgba(7,27,48,.42));
          }
          .track-story-copy { padding-top: 16px; }
          .track-eyebrow { gap: 8px; margin-bottom: 20px; font-size: 9px; letter-spacing: 1px; }
          .track-eyebrow-line { width: 18px; }
          .track-heading { font-size: clamp(39px, 10vw, 53px); letter-spacing: -1.8px; line-height: 1.07; }
          .track-heading-accent { font-size: .88em; }
          .track-description { margin-top: 17px; font-size: 14px; line-height: 1.65; }
          .track-process { gap: 8px; margin-top: 18px; font-size: 10px; letter-spacing: .8px; }
          .track-process-divider { height: 11px; }
          .track-actions { flex-direction: column; gap: 9px; margin-top: 20px; max-width: 350px; }
          .track-primary-button, .track-secondary-button { width: 100%; min-height: 45px; }
          .track-categories { gap: 6px; margin-top: 16px; }
          .track-category { min-height: 30px; padding: 0 7px; font-size: 10px; }
          .track-proof { margin-top: 17px; font-size: 11px; }
          .track-pause { margin-top: 14px; font-size: 10px; }
          .track-story-footer {
            grid-template-columns: repeat(4, minmax(0,1fr));
            gap: 8px 4px;
            padding: 7px 12px;
          }
          .track-footer-item { font-size: 9px; text-align: center; }
          .track-footer-label { font-size: 8px; }
        }
        @media (max-height: 700px) and (min-width: 1024px) {
          .track-story-layout { padding-top: 28px; padding-bottom: 54px; }
          .track-heading { font-size: clamp(43px, 4vw, 62px); }
          .track-description { margin-top: 16px; font-size: 15px; }
          .track-actions { margin-top: 20px; }
          .track-categories { margin-top: 15px; }
          .track-proof { margin-top: 14px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .track-earth { animation: none !important; }
          .track-scroll-story { height: auto; }
          .track-story-sticky { position: relative; height: auto; min-height: 100vh; }
          .track-story-stage { opacity: .25; }
          .track-scroll-story[style*="--scroll-progress"] .track-eyebrow,
          .track-scroll-story[style*="--scroll-progress"] .track-heading,
          .track-scroll-story[style*="--scroll-progress"] .track-description,
          .track-scroll-story[style*="--scroll-progress"] .track-process,
          .track-scroll-story[style*="--scroll-progress"] .track-actions,
          .track-scroll-story[style*="--scroll-progress"] .track-categories,
          .track-scroll-story[style*="--scroll-progress"] .track-proof,
          .track-scroll-story[style*="--scroll-progress"] .track-pause { opacity: 1; }
        }
      `}</style>

      <section className="track-story-sticky" aria-label="TrackOwls animated hero">
        <div className="track-story-glow" aria-hidden="true" />
        <div className="track-stars" aria-hidden="true" />
        <div className="track-story-stage" aria-hidden="true">
          <div
            className="track-earth"
            style={{
              opacity: 1 - clamp01((progress - 0.08) / 0.20),
              transform: `translate(-50%, -50%) scale(${1 + progress * 5.4})`,
              left: "50%",
              top: "50%",
            }}
          />
          <div
            className="track-city-scene"
            style={{
              opacity: cityProgress * (1 - finalProgress),
              transform: `scale(${0.72 + cityProgress * 0.28})`,
            }}
          >
            <img
              className="track-city-photo"
              src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&fm=jpg&q=90&w=3000"
              alt=""
              draggable="false"
            />
            <div className="track-city-sharp-overlay" />
            <div className="track-city-grid" />
=======
    <>
      <section
        id="home"
        className="galaxy-voyage"
        aria-labelledby="protection-title"
      >
        <div className="galaxy-sticky">
          <div className="galaxy-shade" aria-hidden="true" />

          <div className="galaxy-content mx-auto w-full max-w-[1500px] px-6 lg:px-12">
            <div className="protection-copy pt-16 sm:pt-0">
              <div className="protection-eyebrow flex items-center gap-3">
                <span className="h-[1px] w-7 bg-[#d1ed14]" />
                <span className="text-xs font-bold tracking-[2px] uppercase text-[#d1ed14]">
                  DIGITAL ANTI-PIRACY &amp; CONTENT PROTECTION
                </span>
              </div>

              <h1
                id="protection-title"
                className="my-5 text-[clamp(42px,5.5vw,78px)] font-extrabold leading-[1.05] tracking-[-0.04em] text-[#f7f5e8]"
              >
                Protect your content.
                <br />
                <em className="not-italic text-[#d1ed14]">
                  Stop digital piracy.
                </em>
              </h1>

              <p className="max-w-[620px] text-[16px] leading-[1.7] text-[#cfdeeb] sm:text-[18px]">
                Technology, intelligence and enforcement to help rights
                holders detect online infringement and protect digital
                content and brands.
              </p>

              <div className="protection-slogan my-6 flex flex-wrap items-center gap-3 text-xs font-bold tracking-[2px] text-[#d1ed14]">
                <span className="text-white">SCAN</span>
                <span className="text-[#d1ed14]">|</span>
                <span className="text-white">DETECT</span>
                <span className="text-[#d1ed14]">|</span>
                <span className="text-white">REMOVE</span>
                <span className="text-[#d1ed14]">|</span>
                <span className="text-white">PROTECT</span>
              </div>

              <div className="protection-actions flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={handleContact}
                  className="protection-primary inline-flex items-center gap-2 rounded-[6px] bg-[#d1ed14] px-6 py-3.5 text-sm font-bold text-[#02040d] transition duration-200 hover:bg-[#e2fa2e] hover:shadow-[0_0_25px_rgba(209,237,20,0.4)]"
                >
                  Request a consultation
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/solutions")}
                  className="protection-secondary inline-flex items-center gap-2 rounded-[6px] border border-[rgba(171,198,215,0.35)] bg-[rgba(2,4,13,0.7)] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-200 hover:border-[#d1ed14] hover:bg-[rgba(2,4,13,0.9)]"
                >
                  Explore our solutions <span aria-hidden="true">→</span>
                </button>
              </div>

              <div className="protection-proof mt-6 flex items-center gap-2 text-xs text-[#a9c5d8]">
                <svg
                  className="h-4 w-4 shrink-0 text-[#d1ed14]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Evidence-led action. Clear case visibility.</span>
              </div>

              {/* Preserved categories badges & walkthrough link with glass styling */}
              <div className="mt-6 flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="inline-flex items-center rounded-[5px] border border-[rgba(171,198,215,0.22)] bg-[rgba(15,39,60,0.6)] px-3 py-1.5 text-xs font-medium text-[#dce7f0] backdrop-blur-md transition hover:border-[#d1ed14] hover:text-white"
                  >
                    {category}
                  </span>
                ))}
              </div>

              
            </div>
          </div>

          {/* Sticky footer with universe stage and scroll cue */}
          <div className="galaxy-footer mx-auto flex w-full max-w-[1500px] items-end justify-between px-6 pb-6 lg:px-12">
            

            <a
              href="#beyond-voyage"
              className="flex items-center gap-2 text-xs font-medium tracking-wide text-[#b7cbd9] transition duration-200 hover:text-[#d1ed14]"
            >
              <span>Scroll to explore</span>
              <span aria-hidden="true" className="animate-bounce">↓</span>
            </a>
>>>>>>> 7cdf2a6 (3d  updated)
          </div>
        </div>

<<<<<<< HEAD
        <div className="track-story-layout">
          <div className="track-story-copy">
            <div className="track-eyebrow">
              <span className="track-eyebrow-line" />
              <span>DIGITAL ANTI-PIRACY &amp; CONTENT PROTECTION</span>
            </div>

            <h1 className="track-heading">
              <span style={revealLine(0.02, 0.17)}>Protect your</span>
              <br />
              <span style={revealLine(0.08, 0.22)}>content.</span>
              <span className="track-heading-accent" style={revealLine(0.14, 0.3)}>
                Stop digital piracy.
              </span>
            </h1>

            <p className="track-description" style={revealLine(0.2, 0.36)}>
              Technology, intelligence and enforcement to help rights holders detect online infringement and protect digital content and brands.
            </p>

            <div className="track-process" style={revealLine(0.27, 0.42)}>
              <span>SCAN</span>
              <span className="track-process-divider" />
              <span>DETECT</span>
              <span className="track-process-divider" />
              <span>REMOVE</span>
              <span className="track-process-divider" />
              <span>PROTECT</span>
            </div>

            <div className="track-actions" style={revealLine(0.35, 0.5)}>
              <button type="button" onClick={handleContact} className="track-primary-button">
                Request a consultation
              </button>
              <button type="button" onClick={() => navigate("/solutions")} className="track-secondary-button">
                Explore our solutions
              </button>
            </div>

            <div className="track-categories" style={revealLine(0.43, 0.58)}>
              {categories.map((category) => (
                <span className="track-category" key={category}>{category}</span>
              ))}
            </div>

            <div className="track-proof" style={revealLine(0.54, 0.66)}>
              <Icon className="track-proof-icon h-4 w-4">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="m9 12 2 2 4-4" />
              </Icon>
              <span>Evidence-led action. Clear case visibility.</span>

            
            </div>

            <button
              type="button"
              className="track-pause"
              onClick={() => setAnimationPaused((previous) => !previous)}
            >
              {animationPaused ? "Resume background animation" : "Pause background animation"}
            </button>
          </div>
          <div className="track-story-visual-space">
            <div
              className="track-home-image-frame"
              style={{
                opacity: finalProgress,
                transform: `translateY(${(1 - finalProgress) * 24}px) scale(${0.96 + finalProgress * 0.04})`,
              }}
            >
              <img
                className="track-home-image"
                src="/images/home/home1.jpg"
                alt="TrackOwls digital content protection"
                draggable="false"
              />
              
            </div>
           
          </div>

              
  
    




        </div>
        

      </section>
    </main>
=======
      {/* Target anchor for smooth scroll past voyage */}
      <div id="beyond-voyage" className="relative -top-20" aria-hidden="true" />
    </>
>>>>>>> 7cdf2a6 (3d  updated)
  );
}
