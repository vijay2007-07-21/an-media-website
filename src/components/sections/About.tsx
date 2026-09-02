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
            <div
              className="divide-y"
              style={{ borderColor: "#E4E3DC" }}
            >
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

        {/* FOUNDER */}
        <Reveal delay={0.15}>
          <div className="mt-20 grid grid-cols-1 items-center gap-10 rounded-3xl bg-ink p-8 md:p-12 lg:grid-cols-2">
            <div>
              <p
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: "#F5C518" }}
              >
                Founder
              </p>

              <h3 className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">
                CH Naveen Kumar
              </h3>

              <p className="mt-2 text-sm text-white/50">
                Founder — AN Media
              </p>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/60">
                Building AN Media with a vision to help businesses, creators
                and brands grow through creativity, media and strategy.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-black">
  <video
    className="block aspect-video h-full w-full object-cover"
    src="\videos\intro_an_media.mp4"
    controls
    playsInline
    preload="metadata"
  >
    Your browser does not support the video element.
  </video>
</div>
          </div>
        </Reveal>

        {/* VIDEO EDITOR / CREATIVE HEAD */}
        <Reveal delay={0.2}>
          <div className="mt-8 grid grid-cols-1 items-center gap-10 rounded-3xl border border-ink/10 bg-white p-8 md:p-12 lg:grid-cols-2">
            
            {/* TEXT */}
            <div className="order-2 lg:order-1">
              <p
                className="font-mono text-xs uppercase tracking-[0.2em]"
                style={{ color: "#F5C518" }}
              >
                Creative Head
              </p>

              <h3 className="mt-4 font-display text-3xl font-semibold md:text-4xl">
                Morla Vijay
              </h3>

              <p
                className="mt-2 text-sm"
                style={{ color: "#4A4A46" }}
              >
                Video Editor & Creative Head
              </p>

              <p
                className="mt-6 max-w-lg text-base leading-relaxed"
                style={{ color: "#4A4A46" }}
              >
                Bringing stories to life through creative editing, visual
                storytelling and engaging video content for brands and
                businesses.
              </p>
            </div>

            {/* VIDEO */}
            <div className="order-1 overflow-hidden rounded-2xl bg-black lg:order-2">
              <video
                className="block aspect-video h-full w-full object-cover"
                src="/videos/morla-vijay-editor.mp4"
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support the video element.
              </video>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}