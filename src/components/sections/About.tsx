import { Film, Users, Briefcase } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { DIVISIONS } from "../../data/divisions";

const ICONS = [Film, Users, Briefcase];

export default function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <Container>
        {/* ABOUT INTRODUCTION */}
        <div className="grid grid-cols-1 gap-x-10 gap-y-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow code="00:01" label="About AN Media" />

              <h2 className="mt-6 font-display text-balance text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
                We connect content, creators and business strategy.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p
                className="mt-6 max-w-md text-lg leading-relaxed"
                style={{ color: "#4A4A46" }}
              >
                AN Media is a modern media and creative agency built to help
                businesses, creators and brands grow through content, media
                and strategy.
              </p>
            </Reveal>
          </div>

          {/* DIVISIONS */}
          <div className="lg:col-span-7">
            <div className="divide-y" style={{ borderColor: "#E4E3DC" }}>
              {DIVISIONS.map((division, i) => {
                const Icon = ICONS[i] ?? Film;

                return (
                  <Reveal key={division.code} delay={i * 0.08}>
                    <div
                      className="group flex items-start gap-6 border-t py-8 first:border-t-0"
                      style={{ borderColor: "#E4E3DC" }}
                    >
                      <div
                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full transition-colors duration-300 group-hover:bg-[#F5C518]"
                        style={{ backgroundColor: "#F1F1F1" }}
                      >
                        <Icon size={20} strokeWidth={1.75} />
                      </div>

                      <div>
                        <h3 className="font-display text-xl font-semibold">
                          {division.name}

                          <span
                            className="ml-2 text-base font-normal"
                            style={{ color: "#4A4A46" }}
                          >
                            — {division.title}
                          </span>
                        </h3>

                        <p
                          className="mt-2 max-w-md text-base leading-relaxed"
                          style={{ color: "#4A4A46" }}
                        >
                          {division.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}