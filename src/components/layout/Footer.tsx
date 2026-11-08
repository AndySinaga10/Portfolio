import Link from "next/link";
import { socialLinks } from "@/lib/site";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

export default async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-4 border-coral bg-plum text-cream">
      <div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-6 py-10 md:px-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-plum-deep font-display text-base font-black">
              AS
            </span>
            <div>
              <p className="text-sm font-bold">Andi Yusup Sinaga</p>
              <p className="text-sm text-cream/80">UI/UX Product Designer</p>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-coral"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col justify-between gap-2 border-t border-cream/20 pt-6 text-sm text-cream/80 sm:flex-row">
          <p>&copy; {year} Andi Yusup Sinaga. All rights reserved.</p>
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-coral"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
