
import React from "react";

const privacySections = [
  {
    title: "Enquiry information",
    description:
      "The consultation form collects your name, company, business email, optional phone and country, protection requirements and message. These details are used to manage and respond to your enquiry.",
  },
  {
    title: "Website activity",
    description:
      "The site may record page paths and selected interaction events to understand which pages and consultation actions are used. These event records should not include form values, email addresses or third-party advertising identifiers.",
  },
  {
    title: "Access and hosting",
    description:
      "Enquiries are available through a restricted administration area. Site hosting is provided through the website platform infrastructure. Do not submit confidential media, account credentials or sensitive personal information through the form.",
  },
  {
    title: "Your requests",
    description:
      'Use the consultation form with "Privacy request" in your message to request access, correction or deletion of information you have submitted. Specific retention periods and additional service providers should be confirmed before a public commercial launch.',
  },
];

function InformationPrivacy() {
  return (
    <main className="mx-auto mt-30 min-h-screen w-full max-w-[1350px] bg-[#EAF3F9] px-3 font-['Roboto',sans-serif] text-[#18324B] sm:px-5 lg:mt-26">
      {/* Privacy hero banner */}
      <section
        className="relative flex min-h-[203px] w-full items-center overflow-hidden rounded-lg border border-[#CAD5DC] bg-[#0A2035] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,27,46,0.94) 0%, rgba(5,27,46,0.80) 45%, rgba(5,27,46,0.52) 100%), url('/globe.png')",
        }}
      >
        <div className="relative z-10 w-full px-6 py-8 sm:px-8 md:px-[30px]">
          <span className="mb-4 block text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#A8FF45]">
            Website information
          </span>

          <h1 className="m-0 text-[36px] font-extrabold leading-[1.08] tracking-[-1.5px] text-white sm:text-[42px] md:text-[46px]">
            Privacy Notice
          </h1>

          <p className="mt-4 text-[12px] leading-6 text-[#D0DCE6] sm:text-[13px]">
            How information is handled on this website.
          </p>
        </div>
      </section>

      {/* Privacy content */}
      <section
        aria-label="Privacy information"
        className="mx-auto w-full max-w-[650px] px-4 pb-14 pt-10 sm:px-6 sm:pt-[57px] md:px-0"
      >
        <div className="space-y-7 sm:space-y-[29px]">
          {privacySections.map((section) => (
            <article key={section.title}>
              <h2 className="mb-2 text-[17px] font-bold leading-[1.4] tracking-[-0.35px] text-[#18324B] sm:text-[18px]">
                {section.title}
              </h2>

              <p className="m-0 text-[12px] font-normal leading-[1.85] text-[#45637F] sm:text-[13px]">
                {section.description}
              </p>
            </article>
          ))}
        </div>

        {/* Footer note */}
        <p className="mt-8 border-t border-[#E5EBEF] pt-4 text-[10px] leading-[1.8] text-[#71869B]">
          This privacy notice is an initial version. Confirm the company
          details, data practices, retention periods and applicable policies
          before public commercial launch.
        </p>
      </section>
    </main>
  );
}

export default InformationPrivacy;
