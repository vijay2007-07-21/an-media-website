import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Container from "./ui/Container";
import { NAV_LINKS } from "../data/site";
import { useScrolled } from "../hooks/useScrolled";
import logo from "../assets/brand/an-media-logo.png";

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-400 ease-out ${
          scrolled ? "pt-3" : "pt-0"
        }`}
      >
        <Container>
          <div
            className={`flex items-center justify-between rounded-full transition-all duration-400 ease-out ${
              scrolled
                ? "bg-white/85 backdrop-blur-md shadow-[0_2px_24px_rgba(17,17,17,0.08)] px-5 py-2.5 border border-ink/5"
                : "bg-transparent px-2 py-4 border border-transparent"
            }`}
          >
            <a href="#home" className="flex items-center shrink-0" aria-label="AN Media — Home">
              <img
                src={logo}
                alt="AN Media"
                className="h-8 md:h-9 w-auto object-contain"
              />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink/70 hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-ink text-white text-sm font-medium px-5 py-2.5 hover:bg-black transition-colors"
            >
              Let's Work Together
              <ArrowUpRight size={15} />
            </a>

            <button
              className="md:hidden p-2 -mr-2"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </Container>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden mx-4 mt-2 rounded-3xl bg-white shadow-[0_8px_40px_rgba(17,17,17,0.12)] border border-ink/5 overflow-hidden"
          >
            <nav className="flex flex-col p-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-base font-medium text-ink/80 hover:text-ink hover:bg-mist rounded-xl transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-ink text-white text-sm font-medium px-5 py-3"
              >
                Let's Work Together
                <ArrowUpRight size={15} />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
