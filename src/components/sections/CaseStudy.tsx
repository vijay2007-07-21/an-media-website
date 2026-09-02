import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { CASE_STUDY } from "../../data/caseStudies";

const STAGES = [
  { key: "problem", label: "Problem", value: CASE_STUDY.problem },
  { key: "strategy", label: "Strategy", value: CASE_STUDY.strategy },
  { key: "execution", label: "Execution", value: CASE_STUDY.execution },
  { key: "result", label: "Result", value: CASE_STUDY.result },
];

export default function CaseStudy() {
  return (
    <section className="py-28 md:py-36">
      <Container>
        <Reveal>
          <Eyebrow code="00:06" label="Case Study" />
        </Reveal>

        <div className="mt-10 rounded-[32px] border border-ink/8 overflow-hidden">
          <div className="p-8 md:p-12 bg-white">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <h2 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
                {CASE_STUDY.client}
              </h2>
              <span className="inline-flex w-max items-center gap-2 rounded-full px-4 py-2 bg-yellow text-ink text-sm font-semibold" style={{ backgroundColor: "#F5C518" }}>
                {CASE_STUDY.result}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {STAGES.map((stage, i) => (
              <Reveal key={stage.key} delay={i * 0.08} className="h-full">
                <div
                  className={`h-full p-8 md:p-9 border-t ${i > 0 ? "sm:border-l" : ""} ${i === 2 ? "lg:border-l" : ""}`}
                  style={{ borderColor: "#E4E3DC" }}
                >
                  <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: "#4A4A46" }}>
                    {`0${i + 1} — ${stage.label}`}
                  </span>
                  <p className="mt-4 text-lg font-medium leading-snug">{stage.value}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
