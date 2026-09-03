import { motion } from "framer-motion";
import { ArrowUpRight, Play, Camera, Video, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import { ButtonLink } from "../ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #F5C518 0%, transparent 70%)",
        }}
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12">

          {/* LEFT CONTENT */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-7 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]"
              style={{ color: "#4A4A46" }}
            >
              <span
                className="h-[6px] w-[6px] rounded-full"
                style={{ backgroundColor: "#F5C518" }}
              />
              Creative Digital Media Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="font-display text-balance text-[14vw] font-semibold leading-[0.9] tracking-tight text-ink sm:text-[10vw] md:text-[7vw] lg:text-[6vw]"
            >
              Your Story.
              <br />

              <span className="relative inline-block">
                Our Creation.
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M3 9C70 2 210 2 297 8"
                    stroke="#F5C518"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-xl text-lg leading-relaxed"
              style={{ color: "#4A4A46" }}
            >
              AN Media helps businesses, startups, creators and individuals
              build powerful digital identities through content, photography,
              videography, editing, social media and digital marketing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <ButtonLink href="#contact" variant="dark">
                Start a Project
                <ArrowUpRight size={16} />
              </ButtonLink>

              <ButtonLink href="#work" variant="outline">
                <Play size={14} />
                View Our Work
              </ButtonLink>
            </motion.div>
          </div>

          {/* RIGHT MEDIA CARD
              Hidden on mobile, visible on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:col-span-5 lg:block"
          >
            <div className="relative overflow-hidden rounded-[30px] bg-ink p-7 text-white shadow-[0_30px_70px_-25px_rgba(17,17,17,0.45)]">

              {/* Card heading */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    AN MEDIA
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold">
                    Creative Studio
                  </h2>
                </div>

                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: "#F5C518" }}
                >
                  <Sparkles size={18} className="text-ink" />
                </div>
              </div>

              {/* Visual area */}
              <div className="relative mt-7 aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className="absolute inset-0 grid grid-cols-2 gap-2 p-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-1 items-center justify-center rounded-xl bg-white/10">
                      <Camera size={38} className="text-white/50" />
                    </div>

                    <div
                      className="flex h-20 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "#F5C518" }}
                    >
                      <Video size={30} className="text-ink" />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex h-20 items-center justify-center rounded-xl bg-white/10">
                      <Play
                        size={26}
                        className="text-white"
                        fill="white"
                      />
                    </div>

                    <div className="flex flex-1 items-center justify-center rounded-xl bg-white/10">
                      <Sparkles size={38} className="text-white/50" />
                    </div>
                  </div>
                </div>

                {/* Center play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-full"
                    style={{ backgroundColor: "#F5C518" }}
                  >
                    <Play
                      size={19}
                      className="ml-0.5 text-ink"
                      fill="#111111"
                    />
                  </div>
                </div>
              </div>

              {/* Services */}
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Content",
                  "Photography",
                  "Video",
                  "Editing",
                  "Social Media",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-white/60"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Bottom */}
              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
                  Your Story
                </span>

                <span
                  className="font-mono text-[10px] uppercase tracking-widest"
                  style={{ color: "#F5C518" }}
                >
                  Our Creation
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}