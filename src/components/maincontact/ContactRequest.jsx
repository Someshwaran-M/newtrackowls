
import React, { useState } from "react";

const protectionOptions = [
  "OTT / VOD",
  "Movies",
  "Live Sports",
  "TV / Broadcast",
  "Music",
  "Brand / Trademark",
  "Other",
];

const supportOptions = [
  "Monitoring",
  "Piracy Detection",
  "Takedowns",
  "Brand Protection",
  "Intelligence",
  "Other",
];

const inputClass =
  "mt-2 w-full rounded-md border border-[#D5E0D1] bg-white px-4 py-3 text-[14px] text-[#15334E] outline-none transition placeholder:text-[#829184] focus:border-[#8BB630] focus:ring-2 focus:ring-[#8BB630]/20";

function ContactRequest() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    country: "",
    contentTypes: [],
    supportNeeds: [],
    requirements: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const toggleOption = (field, option) => {
    setFormData((previous) => {
      const selected = previous[field];

      return {
        ...previous,
        [field]: selected.includes(option)
          ? selected.filter((item) => item !== option)
          : [...selected, option],
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      "TrackOwls Consultation Request"
    );

    const body = encodeURIComponent(`CONSULTATION REQUEST

Full name: ${formData.fullName}
Company: ${formData.company}
Business email: ${formData.email}
Phone number: ${formData.phone || "Not provided"}
Country: ${formData.country || "Not provided"}

Content to protect:
${formData.contentTypes.join(", ") || "Not selected"}

Required support:
${formData.supportNeeds.join(", ") || "Not selected"}

Requirements:
${formData.requirements}

Please contact me to discuss the assessment and next steps.`);

    setSubmitted(true);

    window.location.href =
      `mailto:contact@trackowls.com?subject=${subject}&body=${body}`;
  };

  const renderCheckboxes = (options, field) => (
    <div className="mt-3 flex flex-wrap gap-2">
      {options.map((option) => {
        const checked = formData[field].includes(option);

        return (
          <label
            key={option}
            className={`inline-flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-[12px] font-medium leading-5 transition ${
              checked
                ? "border-[#8BB630] bg-[#EDF5E5] text-[#456B13]"
                : "border-[#D5E0D1] bg-white text-[#45637F] hover:border-[#8BB630] hover:bg-[#F8FAF5]"
            }`}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={() => toggleOption(field, option)}
              className="h-4 w-4 shrink-0 accent-[#648A13]"
            />
            {option}
          </label>
        );
      })}
    </div>
  );

  return (
    <section
      id="contact-request"
      className="w-full bg-[#EAF3F9] px-4 py-12 font-['Roboto',sans-serif] sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* LEFT: Contact information */}
        <div className="flex min-w-0 flex-col gap-6 lg:pt-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#8BB630]" />
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#617D17]">
                Contact TrackOwls
              </span>
            </div>

            <h2 className="max-w-[480px] text-[30px] font-bold leading-[1.15] tracking-[-1px] text-[#15334E] sm:text-[36px] lg:text-[42px]">
              A focused first conversation.
            </h2>

            <p className="mt-4 max-w-[460px] text-[14px] leading-7 text-[#45637F] sm:text-[15px]">
              Share your requirements so we can discuss the monitoring scope,
              authorization and enforcement approach.
            </p>
          </div>

          {/* Office information */}
          <div className="border border-[#D5E0D1] border-l-[3px] border-l-[#8BB630] bg-white p-5 sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[1.8px] text-[#617D17]">
              Our office
            </p>

            <h3 className="mt-3 text-[18px] font-bold text-[#15334E]">
              Coimbatore, Tamil Nadu
            </h3>

            <address className="mt-3 text-[14px] not-italic leading-7 text-[#45637F]">
              201, First Floor,
              <br />
              Paradise Garden,
              <br />
              Coimbatore, Tamil Nadu, India.
            </address>
          </div>

          {/* Consultation checklist */}
          <div>
            <h3 className="text-[15px] font-bold text-[#15334E]">
              What we can discuss
            </h3>

            <ul className="mt-4 space-y-3">
              {[
                "Your assets and rights",
                "Priority channels and territories",
                "Event or release timelines",
                "Monitoring and reporting requirements",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[13px] leading-6 text-[#45637F] sm:text-[14px]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E8F2DE] text-[12px] font-bold text-[#648A13]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Assessment information */}
          <div className="border border-[#D5E0D1] bg-[#EDF4E7] p-5 sm:p-6">
            <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#617D17]">
              Next step
            </span>

            <h3 className="mt-2 text-[17px] font-bold text-[#15334E]">
              Request an assessment
            </h3>

            <p className="mt-2 text-[13px] leading-6 text-[#45637F] sm:text-[14px]">
              Describe the content or brand you want to protect and the issue
              you are experiencing. Assessment scope and availability will be
              agreed with you.
            </p>
          </div>
        </div>

        {/* RIGHT: Consultation form */}
        <form
          onSubmit={handleSubmit}
          className="min-w-0 border border-[#D5E0D1] bg-white p-5 shadow-[0_12px_40px_rgba(21,51,78,0.06)] sm:p-7 md:p-8 lg:p-9"
        >
          <div className="mb-7 border-b border-[#E3EADF] pb-5">
            <p className="text-[11px] font-bold uppercase tracking-[1.8px] text-[#617D17]">
              Consultation request
            </p>

            <h3 className="mt-2 text-[23px] font-bold tracking-[-0.5px] text-[#15334E] sm:text-[27px]">
              Tell us about your needs.
            </h3>

            <p className="mt-2 text-[13px] leading-6 text-[#45637F] sm:text-[14px]">
              Complete the details below and choose the protection services
              relevant to you.
            </p>
          </div>

          {/* Name and company */}
          <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
            <div className="min-w-0">
              <label
                htmlFor="contact-full-name"
                className="text-[13px] font-semibold text-[#15334E]"
              >
                Full name <span className="text-[#648A13]">*</span>
              </label>

              <input
                id="contact-full-name"
                name="fullName"
                value={formData.fullName}
                onChange={updateField}
                className={inputClass}
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="contact-company"
                className="text-[13px] font-semibold text-[#15334E]"
              >
                Company <span className="text-[#648A13]">*</span>
              </label>

              <input
                id="contact-company"
                name="company"
                value={formData.company}
                onChange={updateField}
                className={inputClass}
                placeholder="Company name"
                autoComplete="organization"
                required
              />
            </div>

            {/* Email and phone */}
            <div className="min-w-0">
              <label
                htmlFor="contact-email"
                className="text-[13px] font-semibold text-[#15334E]"
              >
                Business email <span className="text-[#648A13]">*</span>
              </label>

              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={updateField}
                className={inputClass}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="min-w-0">
              <label
                htmlFor="contact-phone"
                className="text-[13px] font-semibold text-[#15334E]"
              >
                Phone number
              </label>

              <input
                id="contact-phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={updateField}
                className={inputClass}
                placeholder="Include country code"
                autoComplete="tel"
              />
            </div>
          </div>

          {/* Country */}
          <div className="mt-5">
            <label
              htmlFor="contact-country"
              className="text-[13px] font-semibold text-[#15334E]"
            >
              Country
            </label>

            <input
              id="contact-country"
              name="country"
              value={formData.country}
              onChange={updateField}
              className={inputClass}
              placeholder="Enter your country"
              autoComplete="country-name"
            />
          </div>

          {/* Content protection options */}
          <fieldset className="mt-7 border-t border-[#E3EADF] pt-6">
            <legend className="px-0 text-[13px] font-semibold text-[#15334E] sm:text-[14px]">
              What would you like to protect?{" "}
              <span className="text-[#648A13]">*</span>
            </legend>

            {renderCheckboxes(protectionOptions, "contentTypes")}
          </fieldset>

          {/* Support options */}
          <fieldset className="mt-6 border-t border-[#E3EADF] pt-6">
            <legend className="px-0 text-[13px] font-semibold text-[#15334E] sm:text-[14px]">
              What do you need help with?{" "}
              <span className="text-[#648A13]">*</span>
            </legend>

            {renderCheckboxes(supportOptions, "supportNeeds")}
          </fieldset>

          {/* Requirements */}
          <div className="mt-7">
            <label
              htmlFor="contact-requirements"
              className="text-[13px] font-semibold text-[#15334E]"
            >
              Tell us about your requirements{" "}
              <span className="text-[#648A13]">*</span>
            </label>

            <textarea
              id="contact-requirements"
              name="requirements"
              value={formData.requirements}
              onChange={updateField}
              placeholder="Content type, priority channels, upcoming events or the issue you're facing."
              rows={5}
              required
              className={`${inputClass} min-h-[130px] resize-y leading-7`}
            />
          </div>

          {/* Privacy note */}
          <p className="mt-5 text-[11px] leading-6 text-[#687F94]">
            Please share requirements rather than confidential content or
            login credentials. By submitting, you agree that TrackOwls may
            use these details to respond to your enquiry. Read the{" "}
            <a
              href="/privacy"
              className="font-medium text-[#648A13] underline underline-offset-2 transition hover:text-[#456B13]"
            >
              privacy notice
            </a>
            .
          </p>

          {/* Submit */}
          <button
            type="submit"
            disabled={
              !formData.contentTypes.length ||
              !formData.supportNeeds.length
            }
            className="mt-6 flex w-full items-center justify-center gap-3 bg-[#648A13] px-5 py-4 text-[13px] font-bold text-white transition duration-300 hover:bg-[#526F10] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8BB630] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Request a consultation
            <span aria-hidden="true">→</span>
          </button>

          {submitted && (
            <p
              role="status"
              className="mt-4 border border-[#D5E8C5] bg-[#F1F8E9] p-4 text-[12px] leading-6 text-[#456B13]"
            >
              Your email application should open with your consultation
              request. Review the details and send the email to complete
              your enquiry.
            </p>
          )}

          <p className="mt-4 text-center text-[11px] text-[#829184]">
            TrackOwls · Digital content protection
          </p>
        </form>
      </div>
    </section>
  );
}

export default ContactRequest;
