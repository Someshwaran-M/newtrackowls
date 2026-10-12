
import React from "react";

function PlatformClient() {
  return (
    <section
      id="platform-client"
      className="w-full bg-white px-5 py-12 font-['Roboto',sans-serif] sm:px-8 sm:py-14 lg:px-10 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1290px] grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
        {/* Left content */}
        <div className="max-w-[570px]">
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-1.2px] text-[#15334E] sm:text-[42px] lg:text-[44px]">
            Client visibility.
            <br />
            Evidence you can follow.
          </h2>

          <p className="mt-3 max-w-[510px] text-[13px] leading-[1.75] text-[#45637F]">
            The planned client experience brings active cases, status history,
            pending actions and reporting into one view.
          </p>
        </div>

        {/* Right product status panel */}
        <div className="rounded-[5px] border border-[#D3E1EF] bg-white px-6 py-6 sm:px-7 sm:py-7">
          <h3 className="text-[17px] font-bold tracking-[-0.3px] text-[#15334E]">
            Product status
          </h3>

          <p className="mt-3 text-[13px] leading-[1.75] text-[#45637F]">
            The interface shown here is a concept. Availability, integrations
            and client access will be confirmed directly during a consultation.
          </p>

          <a
            href="/contact"
            className="mt-5 inline-flex min-h-[40px] items-center justify-center rounded-[4px] border border-[#B8CFE4] bg-white px-5 py-2 text-[12px] font-bold text-[#15334E] transition-all duration-300 hover:border-[#8BB630] hover:bg-[#F5F9ED] hover:text-[#648A13]"
          >
            Discuss the platform
          </a>
        </div>
      </div>
    </section>
  );
}

export default PlatformClient;
