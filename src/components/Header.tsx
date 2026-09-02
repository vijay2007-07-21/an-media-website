import { useState } from "react";
import { Menu, X, ArrowUpRight, UserRound } from "lucide-react";
import Container from "./ui/Container";
import { BRAND, NAV_LINKS } from "../data/site";
import logo from "../assets/brand/an-media-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center"
            aria-label={`${BRAND.name} — Home`}
          >
            <img
              src={logo}
              alt={BRAND.name}
              className="h-9 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-[#F5C518]"
              >
                {link.label}
              </a>
            ))}

            {/* Client Login */}
            <a
              href="/customer/login"
              className="group flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-sm font-medium transition-all hover:border-[#F5C518] hover:bg-[#F5C518]"
            >
              <UserRound size={15} />
              Client Login
            </a>

            {/* Let's Talk */}
            <a
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-all hover:bg-[#F5C518] hover:text-ink"
            >
              Let's Talk
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-ink/10 py-5 md:hidden">
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Client Login */}
              <a
                href="/customer/login"
                onClick={() => setMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-sm font-medium transition-all hover:border-[#F5C518] hover:bg-[#F5C518]"
              >
                <UserRound size={16} />
                Client Login
              </a>

              {/* Mobile Let's Talk */}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white"
              >
                Let's Talk
                <ArrowUpRight size={16} />
              </a>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}