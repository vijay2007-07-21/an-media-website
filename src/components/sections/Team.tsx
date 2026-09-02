import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const TEAM = [
  {
    name: "CH Naveen Kumar",
    role: "Founder",
    image: "/images/founder.jpeg",
  },
  {
    name: "Morla Vijay",
    role: "Video Editor & Creative Head",
    image: "/images/vijay.png",
  },
  {
    name: "Ashok Kumar",
    role: "Team Member",
    image: null,
  },
];

export default function Team() {
  return (
    <section id="team" className="py-28 md:py-36">
      <Container>
        {/* SECTION HEADER */}
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow code="00:08" label="Our Team" />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight md:text-5xl">
              The people behind
              <br />
              <span style={{ color: "#F5C518" }}>
                the ideas.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="mt-6 max-w-2xl text-lg leading-relaxed"
              style={{ color: "#4A4A46" }}
            >
              A creative team focused on content, media, branding and
              strategies that help businesses grow.
            </p>
          </Reveal>
        </div>

        {/* TEAM MEMBERS */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {TEAM.map((member, index) => (
            <Reveal key={member.name} delay={index * 0.08}>
              <div className="group overflow-hidden rounded-2xl border border-ink/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(17,17,17,0.2)]">

                {/* PHOTO */}
                <div className="aspect-[4/3] overflow-hidden bg-[#F1F1F1]">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[#111111]">
                      <span
                        className="font-display text-6xl font-semibold"
                        style={{ color: "#F5C518" }}
                      >
                        AK
                      </span>
                    </div>
                  )}
                </div>

                {/* DETAILS */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold">
                        {member.name}
                      </h3>

                      <p
                        className="mt-1 text-sm"
                        style={{ color: "#4A4A46" }}
                      >
                        {member.role}
                      </p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="opacity-40 transition-opacity group-hover:opacity-100"
                    />
                  </div>

                  <div className="mt-5">
                    <span
                      className="font-mono text-[10px] uppercase tracking-[0.15em]"
                      style={{ color: "#8A8984" }}
                    >
                      AN Media Team
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}