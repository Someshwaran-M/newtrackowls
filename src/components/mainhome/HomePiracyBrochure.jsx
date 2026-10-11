import React from "react";

export default function HomePiracyBrochure() {
  return (
    <section
      id="piracy-brochure"
      className="relative w-full overflow-hidden bg-white font-['Roboto',sans-serif] text-[#102D48] py-20 lg:py-32"
    >
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#648C13]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#102D48]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        
        {/* Top Header Badge */}
        <div className="mb-6 inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#EEF2ED] border border-[#D5E3D8]">
          <span className="h-2 w-2 rounded-full bg-[#648C13] animate-pulse" />
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#648C13]">
            TrackOwls Impact Intelligence
          </span>
        </div>

        {/* Main 2-Column Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Title, Description, and Action Buttons */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <h2 className="text-[clamp(36px,4.5vw,60px)] font-extrabold leading-[1.06] tracking-[-1.5px] text-[#102D48]">
              The value behind <br />
              <span className="text-[#648C13]">every view.</span>
            </h2>

            <p className="mt-6 max-w-[540px] text-base leading-[1.8] text-[#385A79] sm:text-lg">
              Understand how piracy affects production, OTT and live sports. Explore dated industry research, commercial risks and the metrics that make protection measurable.
            </p>

            {/* Action buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="/brochure"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl bg-[#648C13] px-8 py-3.5 text-center text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#52750E] hover:shadow-xl shadow-md gap-3"
              >
                <span>Read the informative brochure</span>
                <span className="text-sm font-bold" aria-hidden="true">→</span>
              </a>

              <a
                href="/documents/trackowls-piracy-impact-brochure.pdf"
                download
                className="inline-flex min-h-[52px] items-center justify-center rounded-2xl border-2 border-[#D5E3D8] bg-[#EEF2ED]/60 px-8 py-3.5 text-xs font-bold text-[#102D48] transition-all duration-300 hover:border-[#648C13] hover:bg-white shadow-xs gap-3"
              >
                <span>Download PDF</span>
                <span className="text-sm font-bold" aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Quick Metrics Bar inside left column */}
            <div className="mt-12 grid grid-cols-3 gap-6 pt-8 border-t border-slate-200 w-full max-w-[540px]">
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#102D48]">99.8%</span>
                <span className="text-[11px] font-semibold text-[#385A79] uppercase tracking-wider mt-1 block">Detection Accuracy</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#648C13]">24/7</span>
                <span className="text-[11px] font-semibold text-[#385A79] uppercase tracking-wider mt-1 block">Live Surveillance</span>
              </div>
              <div>
                <span className="block text-2xl sm:text-3xl font-extrabold text-[#102D48]">100+</span>
                <span className="text-[11px] font-semibold text-[#385A79] uppercase tracking-wider mt-1 block">Global Networks</span>
              </div>
            </div>
          </div>

          {/* Right Column: Modern Tech Interface Showcase Card (No Blob, Fully Modern) */}
          <div className="lg:col-span-6">
            <div className="relative mx-auto w-full max-w-[620px] rounded-3xl bg-[#102D48] p-6 sm:p-10 shadow-[0_25px_60px_rgba(16,45,72,0.2)] border border-[#234665]">
              
              {/* Card Top Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-[#234665]">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <span className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-[11px] font-mono tracking-widest text-[#C8F52D] uppercase">TrackOwls Enterprise Security v2.4</span>
              </div>

              {/* Central Radar / Global Feed simulation */}
              <div className="py-8 text-center sm:text-left">
                <div className="inline-block px-3 py-1 rounded-lg bg-[#648C13]/20 text-[#C8F52D] text-[10px] font-bold uppercase tracking-widest mb-4">
                  Active Threat Intelligence
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Protecting Digital Content Across Every Channel.
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Advanced automated scanning detects unauthorized streams, mirror sites, and illegal distribution channels instantly.
                </p>
              </div>

              {/* Bottom Feature Highlights Bar inside Dark Card */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#234665]">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1a3854] border border-[#294e70]">
                  <div className="h-8 w-8 rounded-lg bg-[#648C13]/20 flex items-center justify-center text-[#C8F52D] shrink-0 font-bold text-xs">🛡️</div>
                  <span className="text-xs font-bold text-white">Global Monitoring</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1a3854] border border-[#294e70]">
                  <div className="h-8 w-8 rounded-lg bg-[#648C13]/20 flex items-center justify-center text-[#C8F52D] shrink-0 font-bold text-xs">⚡</div>
                  <span className="text-xs font-bold text-white">Piracy Detection</span>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#1a3854] border border-[#294e70]">
                  <div className="h-8 w-8 rounded-lg bg-[#648C13]/20 flex items-center justify-center text-[#C8F52D] shrink-0 font-bold text-xs">🔒</div>
                  <span className="text-xs font-bold text-white">Content Protection</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}