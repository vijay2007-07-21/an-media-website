import Container from "../ui/Container";
import Reveal from "../ui/Reveal";

// Rotates through AN Media's own capabilities rather than client logos,
// since no real client names/logos have been provided yet. Replace with
// real client logos once available.
const CAPABILITIES = [
  "Video Production",
  "Content Strategy",
  "Social Media",
  "Creator Partnerships",
  "Brand Campaigns",
  "Business Growth",
  "Personal Branding",
  "Motion Graphics",
];

export default function Trust() {
  const loop = [...CAPABILITIES, ...CAPABILITIES];
  return (
    <section className="py-16 border-y border-line" style={{ borderColor: "#E4E3DC" }}>
      <Container>
        <Reveal>
          <p className="text-center font-mono text-xs tracking-[0.18em] uppercase text-ink-soft mb-10" style={{ color: "#4A4A46" }}>
            Built for ambitious businesses &amp; creators
          </p>
        </Reveal>
      </Container>

      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, #FAFAF7, transparent)" }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, #FAFAF7, transparent)" }} />
        <div className="flex w-max animate-marquee gap-14">
          {loop.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-2xl md:text-3xl font-medium text-ink/25 whitespace-nowrap select-none"
            >
              {name}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 32s linear infinite;
        }
      `}</style>
    </section>
  );
}
