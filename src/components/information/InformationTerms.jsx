import React from "react";

const termsSections = [
  {
    title: "Website information",
    description:
      "This site describes the proposed services and approach of TrackOwls. Information is general and does not establish a service agreement. Engagement scope, authorization, fees, monitoring hours and service targets must be agreed separately.",
  },
  {
    title: "Platform previews",
    description:
      "Dashboard interfaces and sample reports are illustrations. They do not represent a live client portal, operational integrations or client results.",
  },
  {
    title: "Enforcement outcomes",
    description:
      "Complaints require appropriate rights and authorization. Receiving platforms decide the response and timing; submission does not guarantee removal.",
  },
  {
    title: "Acceptable use",
    description:
      "Do not use the site to submit false rights claims, harmful content or third-party confidential data. The final legal entity details and commercial terms will be provided for an engagement.",
  },
];

function InformationTerms() {
  return (
    <main className="mx-auto mt-24 min-h-screen w-full max-w-[1330px] bg-white px-0 pb-12 font-['Roboto',Arial,sans-serif] text-[#18324B] sm:mt-28 sm:pb-14">
      {/* Hero banner */}
      <section className="relative mx-[10px] mt-[10px] flex min-h-[210px] items-center overflow-hidden rounded-[7px] border border-[#B7C6CB] bg-[#071C30] sm:mx-[18px] sm:min-h-[230px] lg:min-h-[245px]">
        {/* World map background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(7,28,48,0.97) 0%, rgba(7,28,48,0.88) 40%, rgba(7,28,48,0.55) 100%), url('/globe.png')",
          }}
        />

        {/* Subtle atmospheric overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 70% 45%, rgba(139,182,48,0.12), transparent 45%)",
          }}
        />

        {/* Banner content */}
        <div className="relative z-10 px-[22px] py-9 sm:px-[36px] sm:py-10 lg:px-[48px]">
          <span className="block text-[10px] font-extrabold uppercase tracking-[1.4px] text-[#D5F51F]">
            Website information
          </span>

          <h1 className="mt-4 text-[34px] font-bold leading-[1.08] tracking-[-1.5px] text-white sm:mt-5 sm:text-[44px] lg:text-[48px]">
            Website Terms
          </h1>

          <p className="mt-4 text-[12px] leading-[1.8] text-[#D0DCE6] sm:mt-5 sm:text-[13px]">
            Conditions for using the TrackOwls website.
          </p>
        </div>
      </section>

      {/* Terms content */}
      <section
        aria-label="Website terms and conditions"
        className="mx-auto mt-10 w-[calc(100%-36px)] max-w-[760px] sm:mt-14 sm:w-[calc(100%-64px)] lg:mt-16"
      >
        <div className="space-y-7 sm:space-y-8 lg:space-y-9">
          {termsSections.map((section) => (
            <article key={section.title}>
              <h2 className="text-[16px] font-bold leading-[1.5] tracking-[-0.35px] text-[#18324B] sm:text-[17px]">
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

export default InformationTerms;
