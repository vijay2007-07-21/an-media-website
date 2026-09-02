import Container from "./ui/Container";
import { BRAND, NAV_LINKS, SOCIAL_LINKS } from "../data/site";
import { COMPANY } from "../data/company";
import logo from "../assets/brand/an-media-logo.png";

const SERVICE_LINKS = [
  "Social Media Management",
  "Video Editing",
  "Content Creation",
  "Influencer Marketing",
  "Business Growth Strategy",
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand */}
          <div className="md:col-span-4">
            <a
              href="#home"
              className="flex items-center"
              aria-label="AN Media — Home"
            >
              <img
                src={logo}
                alt="AN Media"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="mt-4 text-sm leading-relaxed text-white/55 max-w-xs">
              {COMPANY.shortDescription}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs tracking-widest uppercase text-white/40">
              Navigation
            </h4>

            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs tracking-widest uppercase text-white/40">
              Services
            </h4>

            <ul className="mt-5 space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs tracking-widest uppercase text-white/40">
              Contact
            </h4>

            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>{COMPANY.email}</li>
              <li>{COMPANY.phone}</li>
              <li>{COMPANY.location}</li>
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono uppercase tracking-wide px-3 py-2 rounded-full border border-white/15 hover:border-white/40 transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>

          <p className="text-xs text-white/40 font-mono">
            Media · Creative · Business
          </p>
        </div>
      </Container>
    </footer>
  );
}