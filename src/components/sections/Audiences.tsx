import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";
import { AUDIENCES } from "../../data/audiences";

export default function Audiences() {
  return (
    <section className="py-24 md:py-32 border-y" style={{ borderColor: "#E4E3DC" }}>
      <Container>
        <Reveal>
          <Eyebrow code="00:02" label="Who We Work With" />
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3">
          {AUDIENCES.map((audience, i) => (
            <Reveal key={audience.code} delay={i * 0.1}>
              <div
                className={`relative py-10 md:py-2 pr-6 md:border-l first:border-l-0 md:pl-10 ${
                  i === 0 ? "md:border-l-0" : ""
                }`}
                style={{ borderColor: "#E4E3DC" }}
              >
                <span
                  aria-hidden
                  className="font-display block text-[5.5rem] md:text-[6.5rem] leading-none font-semibold select-none"
                  style={{ color: "#F1F1F1" }}
                >
                  {audience.code}
                </span>
                <h3 className="font-display text-2xl md:text-[1.7rem] font-semibold -mt-8 md:-mt-10 relative tracking-tight">
                  {audience.title}
                </h3>
                <p
                  className="mt-4 text-base leading-relaxed max-w-[26ch]"
                  style={{ color: "#4A4A46" }}
                >
                  {audience.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
