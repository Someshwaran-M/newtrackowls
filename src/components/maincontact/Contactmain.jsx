
import React from "react";

function ContactMain() {
  return (
    <section
  id="contact-main"
  className="relative isolate mt-30 mx-auto w-[95%] max-w-[1290px] overflow-hidden rounded-xl border border-[#29445A] bg-white font-['Roboto',sans-serif]"
>
      {/* Background image */}
      <div
        className="absolute inset-0 z-[-2]  bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(5, 25, 45, 0.97) 0%,
              rgba(5, 25, 45, 0.91) 38%,
              rgba(5, 25, 45, 0.72) 70%,
              rgba(5, 25, 45, 0.65) 100%
            ),
            url('/globe.png')
          `,
        }}
      />

      {/* Premium navy and lime overlays */}
      <div className="pointer-events-none absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#061727]/95 via-[#071D32]/75 to-[#0A2635]/50" />

        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_78%_45%,rgba(139,182,48,0.18),transparent_45%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,19,32,0.45),transparent_65%)]" />

        {/* Subtle digital grid */}
        

        

      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-[300px] items-center px-6 py-12 sm:min-h-[320px] sm:px-10 sm:py-14 md:min-h-[340px] lg:min-h-[360px] lg:px-14">
        <div className="max-w-[650px]">
          {/* Eyebrow */}
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#8BB630]" />

            <p className="text-[10px] font-bold uppercase tracking-[2.5px] text-[#B8DD6A] sm:text-[11px]">
              Talk to TrackOwls
            </p>
          </div>

          {/* Heading */}
          <h1 className="max-w-[620px] text-[36px] font-bold leading-[1.12] tracking-[-1.4px] text-white sm:text-[44px] sm:tracking-[-1.8px] md:text-[50px] lg:text-[56px] lg:tracking-[-2.2px]">
            Let’s protect what you’ve
            <br className="hidden sm:block" />{" "}
            <span className="text-[#A8D34B]">built.</span>
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-[510px] text-[14px] leading-[1.85] text-[#D0DCE6] sm:text-[15px]">
            Tell us what you need to protect. Start with a consultation or an
            initial discussion of your piracy exposure.
          </p>

          {/* CTA */}
          
        </div>
      </div>

      {/* Bottom accent */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#8BB630] to-transparent opacity-80" />
    </section>
  );
}

export default ContactMain;
