"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? "bg-[#0a0a0f]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#about"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow duration-300 shrink-0">
            AS
          </div>
          <span className="font-bold text-white text-base sm:text-lg tracking-tight">
            Andi<span className="text-gray-400 font-normal">.design</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative px-3.5 py-2 text-sm text-gray-300 hover:text-white transition-colors duration-200 font-medium group rounded-lg"
            >
              {link.label}
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-200"
          >
            Let&rsquo;s Talk
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl hover:bg-white/10 active:bg-white/15 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-[#0a0a0f]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.25 }}
                  className="px-4 py-3 text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 active:bg-white/10 rounded-xl transition-all flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500" />
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-2 pt-3 border-t border-white/10"
              >
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/25 active:opacity-90 transition-all"
                >
                  Let&rsquo;s Talk
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
