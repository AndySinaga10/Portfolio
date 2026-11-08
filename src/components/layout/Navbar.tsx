"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Work", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Skills", href: "/#skills" },
  { label: "Contact", href: "/#contact" },
];

const resumeProps = {
  href: "/resume.pdf",
  download: "Resume - Andi Yusup Sinaga.pdf",
  target: "_blank",
  rel: "noopener noreferrer",
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-cream transition-colors duration-300 ${
        scrolled || mobileOpen ? "bg-plum" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-6 md:px-10"
      >
        <Link href="/#about" className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-plum-deep font-display text-base font-black">
            AS
          </span>
          <span className="text-sm font-bold uppercase tracking-widest">Andi Sinaga</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wide transition-colors hover:text-coral"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          {...resumeProps}
          className="hidden border-2 border-cream px-6 py-2 text-sm font-bold uppercase tracking-wider transition-colors hover:bg-cream hover:text-plum md:inline-flex"
        >
          Resume
        </a>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-b-4 border-coral bg-plum md:hidden"
          >
            <div className="flex flex-col px-6 pb-6">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="border-t border-cream/20 py-3 font-display text-3xl font-extrabold uppercase tracking-tight transition-colors hover:text-coral"
                >
                  {link.label}
                </Link>
              ))}
              <a
                {...resumeProps}
                onClick={() => setMobileOpen(false)}
                className="mt-4 border-2 border-cream py-3 text-center text-sm font-bold uppercase tracking-wider transition-colors hover:bg-cream hover:text-plum"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
