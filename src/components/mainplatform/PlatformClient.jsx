
import React from "react";

function PlatformClient() {
  return (
    <section
      id="platform-client"
      className="relative isolate w-full overflow-hidden bg-[#EAF3F9] px-3 py-5 font-['Roboto',sans-serif] sm:px-5 sm:py-7 lg:px-12 lg:py-5"
    >
      {/* Subtle lime particle background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(139,182,48,0.85) 1px, transparent 1.5px),
            radial-gradient(circle, rgba(139,182,48,0.55) 1px, transparent 1.5px),
            radial-gradient(circle, rgba(255,255,255,0.22) 0.7px, transparent 1.2px)
          `,
          backgroundSize: "83px 79px, 127px 113px, 47px 53px",
          backgroundPosition: "10px 15px, 42px 61px, 20px 28px",
          maskImage:
            "radial-gradient(ellipse at 72% 50%, black 0%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 72% 50%, black 0%, transparent 76%)",
        }}
      />

      {/* Main panel */}
      <div className="relative mx-auto w-full max-w-[1350px] overflow-hidden rounded-[13px] border border-[#D1DAD5] bg-[#D5DEDA] px-5 py-7 sm:px-8 sm:py-9 md:px-9 md:py-10 lg:px-[45px] lg:py-[50px]">
        {/* Soft texture inside the panel */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.65) 0.8px, transparent 1.2px)",
            backgroundSize: "7px 7px",
            maskImage:
              "radial-gradient(ellipse at 72% 48%, black, transparent 65%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 72% 48%, black, transparent 65%)",
          }}
        />

        {/* Content grid */}
        <div className="relative z-10 grid grid-cols-1 items-center gap-7 sm:gap-8 md:grid-cols-[1.08fr_1fr] md:gap-9 lg:grid-cols-[1.08fr_1fr] lg:gap-[55px]">
          {/* Left content */}
          <div className="min-w-0">
            <h2 className="max-w-[500px] text-[30px] font-bold leading-[1.18] tracking-[-1.1px] text-[#19334E] min-[400px]:text-[32px] sm:text-[36px] sm:leading-[1.15] md:text-[34px] lg:text-[44px] lg:tracking-[-1.5px]">
              Client visibility.
              <br />
              Evidence you can follow.
            </h2>

            <p className="mt-4 max-w-[510px] text-[13px] leading-[1.75] text-[#526B86] sm:text-[14px] md:mt-4 lg:text-[15px] lg:leading-[1.7]">
              The planned client experience brings active cases, status
              history, pending actions and reporting into one view.
            </p>
          </div>

          {/* Right product status card */}
          <div className="min-w-0 rounded-[15px] border border-[#C8D5D0] bg-[#E2E9E5] px-5 py-5 sm:px-6 sm:py-6 lg:rounded-[16px] lg:px-[30px] lg:py-[27px]">
            <h3 className="text-[17px] font-bold leading-tight tracking-[-0.3px] text-[#19334E] sm:text-[18px] lg:text-[20px]">
              Product status
            </h3>

            <p className="mt-3 text-[13px] leading-[1.75] text-[#526B86] sm:text-[14px] lg:leading-[1.8]">
              The interface shown here is a concept. Availability,
              integrations and client access will be confirmed directly
              during a consultation.
            </p>

            <a
              href="/contact"
              className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-[4px] border border-[#C2D2DE] bg-transparent px-5 py-3 text-center text-[12px] font-bold text-[#19334E] transition-colors duration-300 hover:border-[#8BB630] hover:bg-[#F0F5E8] hover:text-[#648A13] sm:mt-6"
            >
              Discuss the platform
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformClient;
