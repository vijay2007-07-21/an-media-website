import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { PROCESS_STEPS } from "../../data/process";

export default function Process() {
  return (
    <section className="py-28 md:py-36 bg-ink text-white overflow-hidden">
      <Container>
        <Reveal>
          <Eyebrow code="00:07" label="Our Process" dark />
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="font-display text-balance mt-6 text-4xl md:text-5xl font-semibold leading-[1.08] tracking-tight max-w-xl">
            How an idea
            <br />
            becomes a result.
          </h2>
        </Reveal>

        {/* desktop horizontal timeline */}
        <div className="mt-20 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-[22px] h-px bg-white/15" />
            <div className="grid grid-cols-5 gap-6">
              {PROCESS_STEPS.map((step, i) => (
                <Reveal key={step.code} delay={i * 0.08}>
                  <div className="relative">
                    <div className="h-11 w-11 rounded-full bg-ink border border-white/20 flex items-center justify-center font-mono text-sm relative z-10">
                      {step.code}
                    </div>
                    <div
                      className="absolute -top-[6px] left-[9px] h-3 w-3 rounded-full"
                      style={{ backgroundColor: "#F5C518" }}
                    />
                    <h3 className="font-display text-lg font-semibold mt-6">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        {/* mobile vertical timeline */}
        <div className="mt-14 md:hidden space-y-0">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal key={step.code} delay={i * 0.06}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-ink border border-white/20 flex items-center justify-center font-mono text-xs">
                    {step.code}
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-px flex-1 bg-white/15 my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-display text-lg font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
