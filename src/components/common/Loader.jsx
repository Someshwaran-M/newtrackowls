
import React, { useEffect, useRef, useState } from "react";
import "../../styles/Loader.css";

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [exiting, setExiting] = useState(false);

  const completeRef = useRef(onComplete);

  useEffect(() => {
    completeRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let value = 0;
    let exitTimer;
    let finishTimer;

    const revealTimer = window.setTimeout(() => {
      setRevealed(true);
    }, 200);

    const progressTimer = window.setInterval(() => {
      value += value < 70 ? 2 : value < 90 ? 1 : 0.5;
      value = Math.min(value, 100);

      setProgress(Math.floor(value));

      if (value >= 100) {
        window.clearInterval(progressTimer);

        exitTimer = window.setTimeout(() => {
          setExiting(true);

          finishTimer = window.setTimeout(() => {
            completeRef.current?.();
          }, 700);
        }, 400);
      }
    }, 45);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(finishTimer);
      window.clearInterval(progressTimer);
    };
  }, []);

  const dotSizes = [
    3, 4, 5, 7, 9, 11, 13, 15, 17,
    15, 13, 11, 9, 7, 5, 4, 3,
  ];

  return (
    <div
      role="status"
      aria-label={`Loading TrackOwls website, ${progress}%`}
      className={`track-loader fixed inset-0 z-[99999] flex min-h-screen items-center justify-center overflow-hidden text-[#11150c] transition-all duration-700 ${
        exiting
          ? "scale-[1.01] opacity-0"
          : "scale-100 opacity-100"
      }`}
    >
      {/* White background */}
      <div className="absolute inset-0 bg-white" />

      {/* Subtle lime glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(213,245,31,0.12)_0%,rgba(213,245,31,0.035)_40%,transparent_72%)]" />

      {/* Background grid */}
      <div className="loader-grid pointer-events-none absolute inset-0" />

      {/* Main loader composition */}
      <div
        className={`logo-stage relative z-10 flex w-[min(90vw,540px)] flex-col items-center px-3 text-center ${
          revealed ? "logo-visible" : ""
        }`}
      >
        {/* Owl logo */}
        <div className="owl-frame relative flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28 md:h-32 md:w-32">
          <div className="absolute inset-0 rounded-full border border-[#a6c91b]/20" />

          <div className="owl-ring absolute inset-[-6px] rounded-full border border-dashed border-[#a6c91b]/30" />

          <span className="absolute left-1 top-1 h-2.5 w-2.5 border-l border-t border-[#91b51a]" />
          <span className="absolute right-1 top-1 h-2.5 w-2.5 border-r border-t border-[#91b51a]" />
          <span className="absolute bottom-1 left-1 h-2.5 w-2.5 border-b border-l border-[#91b51a]" />
          <span className="absolute bottom-1 right-1 h-2.5 w-2.5 border-b border-r border-[#91b51a]" />

          <img
            src="/images/logo/Trackowls_Owl_Logo_Banner-remove-owl-bg.png"
            alt="TrackOwls owl"
            draggable="false"
            fetchPriority="high"
            className={`owl-image relative z-10 h-[84%] w-[84%] object-contain ${
              revealed ? "owl-visible" : ""
            }`}
          />

          {/* Owl scanning beam */}
          <div
            className={`owl-scan pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-full ${
              revealed ? "scan-start" : ""
            }`}
          >
            <div className="scan-beam absolute left-0 right-0 top-0 h-[2px]" />
          </div>
        </div>

        {/* TrackOwls wordmark image */}
        <div className="mt-5 flex w-full items-center justify-center overflow-hidden px-2 sm:mt-6">
          <img
            src="/images/logo/Trackowls_Owl_text_Banner-remove-bg.png"
            alt="TrackOwls"
            draggable="false"
            className={`wordmark h-auto w-full max-w-[320px] object-contain sm:max-w-[370px] md:max-w-[410px] ${
              revealed ? "wordmark-visible" : ""
            }`}
          />
        </div>

        {/* Graduated center-enlarged dots */}
        <div className="mt-3 flex h-5 w-full items-center justify-center gap-[clamp(3px,0.65vw,6px)] sm:mt-4">
          {dotSizes.map((size, index) => (
            <span
              key={index}
              className="brand-dot"
              style={{
                "--dot-index": index,
                "--dot-size": `${size}px`,
              }}
            />
          ))}
        </div>

        {/* Tagline */}
        <p
          className={`tagline mt-3 flex items-center justify-center whitespace-nowrap ${
            revealed ? "tagline-visible" : ""
          }`}
        >
          <span>Scan</span>
          <i aria-hidden="true" />
          <span>Detect</span>
          <i aria-hidden="true" />
          <span>Remove</span>
          <i aria-hidden="true" />
          <span>Protect</span>
        </p>

        {/* Loading progress */}
        <div className="mt-8 w-full max-w-[250px] sm:mt-9 sm:max-w-[270px]">
          <div className="mb-2.5 flex items-center justify-between">
            <span className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.13em] text-black/55 sm:text-[9px]">
              <span className="status-dot" />

              {progress >= 100 ? "System ready" : "Scanning content"}
            </span>

            <span className="font-mono text-xs font-bold tabular-nums text-[#647e0b]">
              {String(progress).padStart(3, "0")}%
            </span>
          </div>

          <div className="h-[3px] overflow-hidden rounded-full bg-black/10">
            <div
              className="progress-fill h-full rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-2.5 flex justify-between text-[7px] font-medium uppercase tracking-[0.1em] text-black/40 sm:text-[8px]">
            <span>Content protection</span>
            <span>TrackOwls / 001</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="absolute bottom-3 left-0 right-0 px-3 text-center sm:bottom-4">
        <span className="text-[7px] font-bold uppercase tracking-[0.14em] text-black/35 sm:text-[8px] sm:tracking-[0.2em]">
          TrackOwls Anti-Piracy Private Limited
        </span>
      </div>
    </div>
  );
}
