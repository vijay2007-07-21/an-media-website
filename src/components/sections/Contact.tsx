import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowUpRight, Mail, Phone, MapPin, Check } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { COMPANY } from "../../data/company";

const SERVICE_OPTIONS = [
  "Social Media Management",
  "Video Editing & Production",
  "Reels & Short-form Content",
  "Content Creation",
  "Photography & Videography",
  "Influencer Marketing",
  "Brand Promotion",
  "Personal Branding",
  "Creative Campaigns",
  "Business Growth Strategy",
  "Something else",
];

const inputClass =
  "w-full rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-ink/40 outline-none transition-colors";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-28 md:py-36">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5">

            <Reveal>
              <Eyebrow code="00:10" label="Contact AN Media" />
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="font-display text-balance mt-6 text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
                Let's create
                <br />
                something great.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p
                className="mt-6 max-w-sm text-base leading-relaxed"
                style={{ color: "#4A4A46" }}
              >
                Have a project, brand or creative idea in mind? Tell us what
                you need and let's turn your story into impactful content.
              </p>
            </Reveal>

            {/* CONTACT DETAILS */}
            <Reveal delay={0.2}>
              <div className="mt-10 space-y-4">

                {/* EMAIL */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-70"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#F1F1F1" }}
                  >
                    <Mail size={15} />
                  </span>

                  {COMPANY.email}
                </a>

                {/* PHONE */}
                <a
                  href="tel:+919848711627"
                  className="flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-70"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#F1F1F1" }}
                  >
                    <Phone size={15} />
                  </span>

                  +91 98487 11627
                </a>

                {/* LOCATION */}
                <a
                  href="https://www.google.com/maps/search/?api=1&query=A1+Water+Plant+28W3%2B9F5+Millampalle+Andhra+Pradesh+523327"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-70"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#F1F1F1" }}
                  >
                    <MapPin size={15} />
                  </span>

                  Markapuram, Andhra Pradesh
                </a>

              </div>

              {/* SOCIAL LINKS */}
              <div className="mt-8 flex flex-wrap items-center gap-3">

                <a
                  href="https://www.instagram.com/an_media_7?igsi=MWR5ZjNiYW14ZjVx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/12 px-4 py-2.5 text-xs font-mono uppercase tracking-wide transition-colors hover:border-ink/40"
                >
                  Instagram
                </a>

                <a
                  href="https://wa.me/919848711627"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-ink/12 px-4 py-2.5 text-xs font-mono uppercase tracking-wide transition-colors hover:border-ink/40"
                >
                  WhatsApp
                </a>

              </div>

              {/* WORKING HOURS */}
              <div className="mt-10">

                <p
                  className="text-xs font-medium uppercase tracking-wide"
                  style={{ color: "#4A4A46" }}
                >
                  Working Hours
                </p>

                <div className="mt-3 space-y-1 text-sm">

                  <p>
                    Monday – Saturday: 9:00 AM – 8:00 PM
                  </p>

                  <p style={{ color: "#4A4A46" }}>
                    Sunday: 9:00 AM – 8:00 PM (Applications Only)
                  </p>

                </div>

              </div>

            </Reveal>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7">

            <Reveal delay={0.1}>

              <div className="rounded-[28px] border border-ink/8 bg-white p-7 md:p-10">

                {submitted ? (

                  /* SUCCESS MESSAGE */
                  <div className="flex flex-col items-center justify-center py-16 text-center">

                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-full"
                      style={{ backgroundColor: "#F5C518" }}
                    >
                      <Check size={24} className="text-ink" />
                    </div>

                    <h3 className="mt-6 font-display text-2xl font-semibold">
                      Request received.
                    </h3>

                    <p
                      className="mt-2 max-w-xs text-sm"
                      style={{ color: "#4A4A46" }}
                    >
                      Thanks for reaching out to AN Media. We'll get back to
                      you as soon as possible.
                    </p>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-sm font-medium underline underline-offset-4"
                    >
                      Send another request
                    </button>

                  </div>

                ) : (

                  /* CONTACT FORM */
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >

                    {/* NAME + BUSINESS */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                      <Field label="Name">
                        <input
                          required
                          name="name"
                          type="text"
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </Field>

                      <Field label="Business / Brand">
                        <input
                          name="business"
                          type="text"
                          placeholder="Your business or brand"
                          className={inputClass}
                        />
                      </Field>

                    </div>

                    {/* EMAIL + PHONE */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                      <Field label="Email">
                        <input
                          required
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </Field>

                      <Field label="Phone / WhatsApp">
                        <input
                          required
                          name="phone"
                          type="tel"
                          placeholder="+91 98487 11627"
                          className={inputClass}
                        />
                      </Field>

                    </div>

                    {/* SERVICE */}
                    <Field label="Service">

                      <select
                        required
                        name="service"
                        defaultValue=""
                        className={inputClass}
                      >

                        <option value="" disabled>
                          Select a service
                        </option>

                        {SERVICE_OPTIONS.map((service) => (
                          <option
                            key={service}
                            value={service}
                          >
                            {service}
                          </option>
                        ))}

                      </select>

                    </Field>

                    {/* MESSAGE */}
                    <Field label="Message">

                      <textarea
                        required
                        name="message"
                        rows={5}
                        placeholder="Tell us about your project, idea or requirements..."
                        className={`${inputClass} resize-none`}
                      />

                    </Field>

                    {/* BUTTONS */}
                    <div className="flex flex-col gap-3 sm:flex-row">

                      {/* SEND PROJECT REQUEST */}
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[#F5C518] hover:text-ink sm:w-auto"
                      >
                        Send Project Request
                        <ArrowUpRight size={16} />
                      </button>

                      {/* BOOK A SLOT */}
                      <a
                        href="/customer/book"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 bg-white px-7 py-3.5 text-sm font-medium transition-colors hover:border-[#F5C518] hover:bg-[#F5C518] sm:w-auto"
                      >
                        Book a Slot
                        <ArrowUpRight size={16} />
                      </a>

                    </div>

                  </form>

                )}

              </div>

            </Reveal>

          </div>

        </div>
      </Container>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">

      <span
        className="mb-2 block text-xs font-medium uppercase tracking-wide"
        style={{ color: "#4A4A46" }}
      >
        {label}
      </span>

      {children}

    </label>
  );
}