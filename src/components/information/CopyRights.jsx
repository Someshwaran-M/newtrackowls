import React from "react";

const copyrightSections = [
  {
    title: "Information to provide",
    description:
      "Identify the protected work, the relevant rights owner, the suspected infringing URL, your authority to act and the territory involved. Include publicly shareable supporting context.",
  },
  {
    title: "Where to send it",
    description:
      "Use the consultation form and select Takedowns. This starts an enquiry; it does not submit a complaint to the hosting or social platform itself.",
  },
  {
    title: "Verification before action",
    description:
      "TrackOwls must verify the rights and authorization before coordinating an enforcement request. Do not submit unsupported claims or request removal of authorized material.",
  },
  {
    title: "Platform procedures",
    description:
      "Complaint formats, counter-notice processes and available remedies differ by service and jurisdiction. Applicable platform procedures govern their decisions.",
  },
];

function CopyRight() {
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

        {/* Navy overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#071C30]/95 via-[#071C30]/80 to-[#071C30]/45"
        />

        {/* Subtle green glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 45%, rgba(139,182,48,0.12), transparent 48%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 px-[22px] py-9 sm:px-[36px] sm:py-10 lg:px-[48px]">
          <span className="block text-[10px] font-extrabold uppercase tracking-[1.4px] text-[#D5F51F]">
            Website information
          </span>

          <h1 className="mt-4 text-[34px] font-bold leading-[1.08] tracking-[-1.5px] text-white sm:mt-5 sm:text-[44px] lg:text-[48px]">
            Copyright Reporting
          </h1>

          <p className="mt-4 max-w-[650px] text-[12px] leading-[1.8] text-[#D0DCE6] sm:mt-5 sm:text-[13px]">
            Provide clear rights information when reporting suspected
            infringement.
          </p>
        </div>
      </section>

      {/* Copyright reporting information */}
      <section
        aria-label="Copyright reporting information"
        className="mx-auto mt-10 w-[calc(100%-36px)] max-w-[760px] sm:mt-14 sm:w-[calc(100%-64px)] lg:mt-16"
      >
        <div className="space-y-7 sm:space-y-8 lg:space-y-9">
          {copyrightSections.map((section) => (
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

export default CopyRight;
