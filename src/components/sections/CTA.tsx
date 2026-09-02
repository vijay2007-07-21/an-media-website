import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

export default function CTA() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div
          className="rounded-[36px] px-8 py-20 md:py-28 text-center relative overflow-hidden"
          style={{ backgroundColor: "#F5C518" }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #111111 0%, transparent 70%)" }}
          />
          <Reveal>
            <h2 className="font-display text-balance text-4xl md:text-6xl font-semibold tracking-tight text-ink max-w-3xl mx-auto">
              Have an idea? Let's build it.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg text-ink/70 max-w-xl mx-auto leading-relaxed">
              Whether you're a growing business, creator or ambitious brand,
              let's turn your next idea into something people remember.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <a
              href="#contact"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink text-white text-sm font-medium px-7 py-4 hover:bg-black transition-colors"
            >
              Start a Conversation
              <ArrowUpRight size={16} />
            </a>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
