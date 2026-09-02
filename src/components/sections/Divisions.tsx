import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { DIVISIONS } from "../../data/divisions";

export default function Divisions() {
  return (
    <section className="py-28 md:py-36 bg-ink text-white">
      <Container>
        <Reveal>
          <Eyebrow code="00:03" label="How We're Built" dark />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-balance mt-6 text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight max-w-2xl">
            Three teams. One growth engine.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 rounded-3xl overflow-hidden">
          {DIVISIONS.map((division, i) => (
            <Reveal key={division.code} delay={i * 0.1} className="h-full">
              <div className="group h-full bg-ink hover:bg-[#171717] transition-colors duration-500 p-8 md:p-9 flex flex-col">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-white/40">
                    {division.code}
                  </span>
                  <span
                    className="h-2.5 w-2.5 rounded-full transition-transform duration-500 group-hover:scale-125"
                    style={{ backgroundColor: "#F5C518" }}
                  />
                </div>

                <h3 className="font-display text-2xl font-semibold mt-8">
                  {division.name}
                </h3>
                <p className="mt-1 text-sm text-white/50">{division.title}</p>

                <p className="mt-5 text-sm leading-relaxed text-white/60">
                  {division.description}
                </p>

                <ul className="mt-6 space-y-2 flex-1">
                  {division.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-white/70 flex items-center gap-2"
                    >
                      <span className="h-1 w-1 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#services"
                  className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-yellow group-hover:gap-2.5 transition-all"
                  style={{ color: "#F5C518" }}
                >
                  Explore
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
