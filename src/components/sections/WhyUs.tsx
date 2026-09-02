import {
  Target,
  Lightbulb,
  Layers,
  Users,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

const WHY_US = [
  {
    title: "Strategy First",
    description:
      "We understand your business, audience and goals before creating content.",
    icon: Target,
  },
  {
    title: "Creative Thinking",
    description:
      "Fresh ideas and engaging concepts that help your brand stand out.",
    icon: Lightbulb,
  },
  {
    title: "Everything Under One Roof",
    description:
      "Content creation, photography, videography, editing, branding and digital marketing in one place.",
    icon: Layers,
  },
  {
    title: "Built for Your Brand",
    description:
      "Every project is tailored to your brand instead of using the same approach for everyone.",
    icon: Users,
  },
  {
    title: "Focused on Growth",
    description:
      "We don't just create content. We create content with a purpose — building visibility, trust and brand value.",
    icon: TrendingUp,
  },
  {
    title: "Complete Media Support",
    description:
      "From the first idea to the final post, AN Media supports you throughout the creative journey.",
    icon: CheckCircle2,
  },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="py-28 md:py-36"
      style={{ backgroundColor: "#F1F1F1" }}
    >
      <Container>
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow code="00:04" label="Why AN Media" />
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-balance mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              We Don't Just Create Content.
              <br />
              <span style={{ color: "#F5C518" }}>
                We Build Brand Value.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              className="mt-6 max-w-2xl text-lg leading-relaxed"
              style={{ color: "#4A4A46" }}
            >
              Strategy + Creativity + Execution — all under one roof. We help
              local businesses, startups, creators and individuals build a
              stronger digital presence and grow their brand.
            </p>
          </Reveal>
        </div>

        {/* Why Choose AN Media */}
        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((point, i) => {
            const Icon = point.icon;
            const dark = i === 0 || i === 4;

            return (
              <Reveal key={point.title} delay={i * 0.06}>
                <div
                  className={`group relative h-full min-h-[240px] overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                    dark
                      ? "bg-ink text-white"
                      : "border border-ink/10 bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-[10px] tracking-[0.2em]"
                      style={{
                        color: dark ? "#F5C518" : "#8A8984",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-[#F5C518] group-hover:text-ink"
                      style={{
                        backgroundColor: dark
                          ? "rgba(255,255,255,0.08)"
                          : "#F1F1F1",
                      }}
                    >
                      <Icon size={19} strokeWidth={1.7} />
                    </div>
                  </div>

                  <div className="mt-12">
                    <h3 className="font-display text-xl font-semibold">
                      {point.title}
                    </h3>

                    <p
                      className="mt-3 text-sm leading-relaxed"
                      style={{
                        color: dark
                          ? "rgba(255,255,255,0.6)"
                          : "#4A4A46",
                      }}
                    >
                      {point.description}
                    </p>
                  </div>

                  {/* Hover line */}
                  <div
                    className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                    style={{ backgroundColor: "#F5C518" }}
                  />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Brand Statement */}
        <Reveal delay={0.3}>
          <div className="mt-10 rounded-2xl bg-ink px-7 py-10 text-center md:px-12 md:py-14">
            <p
              className="font-mono text-[10px] uppercase tracking-[0.2em]"
              style={{ color: "#F5C518" }}
            >
              AN Media
            </p>

            <h3 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Your Story.
              <span style={{ color: "#F5C518" }}> Our Creation.</span>
              <br />
              Your Brand.
            </h3>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/50">
              Let's turn your ideas into content that people remember.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}