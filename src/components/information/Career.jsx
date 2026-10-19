import React from "react";

function Career() {
  return (
    <main className="min-h-screen w-full bg-[#EAF3F9] mt-25 px-3 pb-12 pt-3 font-['Roboto',Arial,sans-serif] text-[#18324B] sm:px-5 sm:pb-16 sm:pt-4">
      <div className="mx-auto w-full max-w-[1350px]">
        {/* Careers Hero Banner */}
        <section className="relative flex min-h-[245px] items-center overflow-hidden rounded-[7px] border border-[#B7C6CB] bg-[#071C30] sm:min-h-[260px] lg:min-h-[270px]">
          {/* World map background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(7,28,48,0.97) 0%, rgba(7,28,48,0.88) 48%, rgba(7,28,48,0.48) 100%), url('/globe.png')",
            }}
          />

          {/* Subtle background glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 72% 38%, rgba(139,182,48,0.13), transparent 48%)",
            }}
          />

          {/* Hero Content */}
          <div className="relative z-10 w-full px-6 py-10 sm:px-8 sm:py-11 lg:px-[30px]">
            <span className="block text-[9px] font-extrabold uppercase tracking-[1.2px] text-[#D5F51F]">
              Careers
            </span>

            <h1 className="mt-4 max-w-[650px] text-[34px] font-bold leading-[1.08] tracking-[-1.5px] text-white sm:mt-[15px] sm:text-[40px] sm:tracking-[-1.8px] lg:text-[44px]">
              Help protect what creators
              <br className="hidden sm:block" /> build.
            </h1>

            <p className="mt-4 max-w-[560px] text-[11px] leading-[1.8] text-[#D0DCE6] sm:mt-[17px] sm:text-[12px]">
              Opportunities in anti-piracy operations, investigation,
              engineering and business development.
            </p>
          </div>
        </section>

        {/* Register Your Interest */}
        <section className="mt-10 rounded-[4px] border border-[#D4E0EC] bg-white px-5 py-6 sm:mt-[60px] sm:px-6 sm:py-7 lg:mt-[60px] lg:px-5 lg:py-6">
          <h2 className="text-[28px] font-bold leading-[1.2] tracking-[-1.1px] text-[#18324B] sm:text-[32px] sm:tracking-[-1.2px]">
            Register your interest.
          </h2>

          <p className="mt-3 max-w-[950px] text-[10px] leading-[1.8] text-[#435C75] sm:mt-[11px] sm:text-[11px]">
            There are no confirmed vacancies listed. We welcome enquiries from
            people interested in monitoring, evidence verification, enforcement,
            engineering and client development. Mention your experience and
            preferred area in the contact form.
          </p>

          <a
            href="#contact"
            className="mt-5 inline-flex min-h-[36px] items-center justify-center rounded-[3px] border border-[#B7CDE2] bg-white px-[15px] py-2 text-[9px] font-bold text-[#18324B] transition-colors duration-200 hover:border-[#8BB630] hover:bg-[#F5F8F2] sm:mt-[17px]"
          >
            Contact TrackOwls
          </a>
        </section>
      </div>
    </main>
  );
}

export default Career;
