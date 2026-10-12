import React from "react";

const cookieSections = [
  {
    title: "Essential platform functions",
    description:
      "The hosting platform may use essential session or authentication mechanisms to provide access and maintain security.",
  },
  {
    title: "Site analytics",
    description:
      "First-party event logging records page paths and selected interactions without advertising trackers. No cookie banner is required for an advertising integration that has not been installed.",
  },
  {
    title: "Future integrations",
    description:
      "If analytics, advertising or other non-essential cookies are added, this notice and any required consent controls should be updated before they are enabled.",
  },
];

function InformationCookies() {
  return (
    <main className="mx-auto mt-24 min-h-screen w-full max-w-[1330px] bg-white px-0 pb-12 font-['Roboto',Arial,sans-serif] text-[#18324B] sm:mt-28 sm:pb-14">
      {/* Hero banner */}
      <section className="relative mx-[10px] mt-[10px] flex min-h-[210px] items-center overflow-hidden rounded-[7px] border border-[#B7C6CB] bg-[#071C30] sm:mx-[18px] sm:min-h-[230px] lg:min-h-[245px]">
        {/* World map background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/globe.png')",
          }}
        />

        {/* Dark overlay for text readability */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#071C30]/95 via-[#071C30]/80 to-[#071C30]/45"
        />

        {/* Subtle green atmosphere */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 45%, rgba(139,182,48,0.12), transparent 48%)",
          }}
        />

        {/* Banner content */}
        <div className="relative z-10 px-[22px] py-9 sm:px-[36px] sm:py-10 lg:px-[48px]">
          <span className="block text-[10px] font-extrabold uppercase tracking-[1.4px] text-[#D5F51F]">
            Website information
          </span>

          <h1 className="mt-4 text-[34px] font-bold leading-[1.08] tracking-[-1.5px] text-white sm:mt-5 sm:text-[44px] lg:text-[48px]">
            Cookie Information
          </h1>

          <p className="mt-4 max-w-[650px] text-[12px] leading-[1.8] text-[#D0DCE6] sm:mt-5 sm:text-[13px]">
            This version does not use advertising cookies or third-party
            analytics scripts.
          </p>
        </div>
      </section>

      {/* Cookie information */}
      <section
        aria-label="Cookie information"
        className="mx-auto mt-10 w-[calc(100%-36px)] max-w-[760px] sm:mt-14 sm:w-[calc(100%-64px)] lg:mt-16"
      >
        <div className="space-y-7 sm:space-y-8 lg:space-y-9">
          {cookieSections.map((section) => (
            <article key={section.title}>
              <h2 className="text-[16px] font-bold leading-[1.5] tracking-[-0.3px] text-[#18324B] sm:text-[17px]">
                {section.title}
              </h2>

              <p className="mt-2 text-[12px] leading-[1.85] text-[#435C75] sm:mt-2.5 sm:text-[13px] sm:leading-[1.9]">
                {section.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 text-[10px] leading-[1.8] text-[#71869B] sm:mt-10 sm:text-[11px]">
          Website notices prepared for this initial version. Final company
          details and policies require review before commercial public launch.
        </p>
      </section>
    </main>
  );
}

export default InformationCookies;
