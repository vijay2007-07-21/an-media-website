import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { SERVICES } from "../../data/services";
import { ArrowUpRight, CalendarDays } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-28 md:py-36">
      <Container>
        {/* SECTION HEADER */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal>
              <Eyebrow code="00:02" label="Our Services" />
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-2xl font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                Everything you need to build your brand.
              </h2>
            </Reveal>
          </div>

          <Reveal delay={0.12}>
            <p
              className="max-w-sm text-base leading-relaxed md:text-right"
              style={{ color: "#4A4A46" }}
            >
              From creating your first piece of content to growing your digital
              presence, AN Media brings creativity and execution together.
            </p>
          </Reveal>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const isDigitalMarketing = service.title === "Digital Marketing";

            const Icon = isDigitalMarketing ? CalendarDays : service.icon;

            const title = isDigitalMarketing
              ? "Event Management"
              : service.title;

            const description = isDigitalMarketing
              ? "Professional event planning, promotion, coverage and creative support for memorable events."
              : service.description;

            return (
              <Reveal
                key={service.code}
                delay={(i % 3) * 0.07}
              >
                <div className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_45px_-18px_rgba(17,17,17,0.22)]">
                  
                  {/* TOP */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F1F1] transition-colors duration-300 group-hover:bg-[#F5C518]">
                      <Icon size={20} strokeWidth={1.7} />
                    </div>

                    <span
                      className="font-mono text-xs tracking-wider"
                      style={{ color: "#8A8984" }}
                    >
                      {service.code}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <h3 className="mt-7 font-display text-xl font-semibold">
                    {title}
                  </h3>

                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "#4A4A46" }}
                  >
                    {description}
                  </p>

                  {/* ARROW */}
                  <div className="mt-8 flex items-center justify-between">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.16em]"
                      style={{ color: "#8A8984" }}
                    >
                      AN Media
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/10 transition-all duration-300 group-hover:border-[#F5C518] group-hover:bg-[#F5C518]">
                      <ArrowUpRight size={15} />
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* BOTTOM STATEMENT */}
        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl bg-ink p-7 text-white md:p-9">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.2em]"
                  style={{ color: "#F5C518" }}
                >
                  One Creative Partner
                </p>

                <h3 className="mt-3 max-w-2xl font-display text-2xl font-semibold leading-tight md:text-3xl">
                  Strategy + Creativity + Execution — All Under One Roof.
                </h3>
              </div>

              <a
                href="#contact"
                className="inline-flex shrink-0 items-center gap-2 self-start rounded-full px-5 py-3 text-sm font-medium text-ink transition-transform duration-300 hover:scale-105 md:self-center"
                style={{ backgroundColor: "#F5C518" }}
              >
                Let's Work Together
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}