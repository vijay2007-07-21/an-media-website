import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X, Play } from "lucide-react";

import Container from "../ui/Container";
import Eyebrow from "../ui/Eyebrow";
import Reveal from "../ui/Reveal";

import {
  WORK_CATEGORIES,
  WORK_ITEMS,
  type WorkCategory,
  type WorkItem,
} from "../../data/work";

export default function Work() {
  const [activeCategory, setActiveCategory] =
    useState<WorkCategory | "All">("All");

  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  const filteredWork = useMemo(() => {
    if (activeCategory === "All") {
      return WORK_ITEMS;
    }

    return WORK_ITEMS.filter(
      (item) => item.category === activeCategory
    );
  }, [activeCategory]);

  return (
    <section id="work" className="bg-[#F1F1F1] py-28 md:py-36">
      <Container>
        {/* HEADER */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow code="00:05" label="Selected Work" />
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-xl font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl">
                Work that speaks for itself.
              </h2>
            </Reveal>
          </div>

          {/* CATEGORY FILTERS */}
          <div className="lg:col-span-7">
            <Reveal delay={0.12}>
              <div className="flex flex-wrap gap-2">
                <button
                  type="button"
                  onClick={() => setActiveCategory("All")}
                  className={`rounded-full border px-5 py-2.5 text-sm transition-all ${
                    activeCategory === "All"
                      ? "border-ink bg-ink text-white"
                      : "border-ink/10 bg-white hover:border-ink/30"
                  }`}
                >
                  All
                </button>

                {WORK_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`rounded-full border px-5 py-2.5 text-sm transition-all ${
                      activeCategory === category
                        ? "border-ink bg-ink text-white"
                        : "border-ink/10 bg-white hover:border-ink/30"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* WORK GRID */}
        <motion.div
          layout
          className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredWork.map((item, index) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.04,
                }}
                className="group overflow-hidden rounded-2xl border border-ink/10 bg-white"
              >
                {/* MEDIA */}
                <button
                  type="button"
                  onClick={() => setSelectedWork(item)}
                  className="relative block w-full text-left"
                >
                  <div className="relative aspect-video overflow-hidden bg-black">
                    {item.media ? (
                      <video
                        src={item.media}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        muted
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <div
                        className="flex h-full w-full items-center justify-center"
                        style={{ backgroundColor: item.hue }}
                      >
                        <span className="font-display text-5xl font-semibold text-white">
                          AN
                        </span>
                      </div>
                    )}

                    {/* PLAY BUTTON */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-ink shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <Play
                          size={20}
                          fill="currentColor"
                          className="ml-1"
                        />
                      </div>
                    </div>

                    {/* CATEGORY */}
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-white px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-ink">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </button>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-display text-xl font-semibold">
                        {item.client}
                      </h3>

                      <p
                        className="mt-2 text-sm leading-relaxed"
                        style={{ color: "#4A4A46" }}
                      >
                        {item.summary}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedWork(item)}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/10 transition-all hover:border-ink/30 hover:bg-ink hover:text-white"
                      aria-label={`View ${item.client}`}
                    >
                      <ArrowUpRight size={16} />
                    </button>
                  </div>

                  <div className="mt-5">
                    <span className="text-sm italic text-ink/60">
                      {item.result}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* EMPTY STATE */}
        {filteredWork.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-ink/50">
              No projects available in this category.
            </p>
          </div>
        )}
      </Container>

      {/* PROJECT MODAL */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
          >
            <motion.div
              className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setSelectedWork(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
                aria-label="Close project"
              >
                <X size={20} />
              </button>

              {/* VIDEO */}
              {selectedWork.media && (
                <div className="bg-black">
                  <video
                    src={selectedWork.media}
                    className="max-h-[65vh] w-full object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                </div>
              )}

              {/* MODAL CONTENT */}
              <div className="p-7 md:p-10">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-mist px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em]">
                    {selectedWork.category}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-3xl font-semibold md:text-4xl">
                  {selectedWork.client}
                </h3>

                <p
                  className="mt-4 max-w-2xl text-base leading-relaxed"
                  style={{ color: "#4A4A46" }}
                >
                  {selectedWork.summary}
                </p>

                {/* SERVICES */}
                <div className="mt-8">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
                    Services
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedWork.servicesProvided.map((service) => (
                      <span
                        key={service}
                        className="rounded-full border border-ink/10 px-3 py-1.5 text-sm"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* RESULT */}
                <div className="mt-8 border-t border-ink/10 pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/40">
                    Project
                  </p>

                  <p className="mt-2 text-base">
                    {selectedWork.result}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}