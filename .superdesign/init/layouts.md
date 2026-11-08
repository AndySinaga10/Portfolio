# Shared layouts

Root layout loads Plus Jakarta Sans and sets the dark body. Navbar and Footer are composed in `src/app/page.tsx`.

## `src/app/layout.tsx`

```tsx
import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, person, siteDescription, siteTitle } from "@/lib/site";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: `%s | ${person.name}`,
  },
  description: siteDescription,
  applicationName: `${person.name} Portfolio`,
  keywords: [
    "Andi Yusup Sinaga",
    "Andi Sinaga",
    "Andi Sinaga UI/UX",
    "Andi Yusup Sinaga UI/UX Designer",
    "UI/UX Designer",
    "Product Designer",
    "Senior UI/UX Designer",
    "UX Designer Indonesia",
    "Design System",
    "UX Case Study",
    "Portfolio",
  ],
  authors: [{ name: person.name, url: SITE_URL }],
  creator: person.name,
  publisher: person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${person.name} Portfolio`,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "design",
};

interface LayoutProps {
  children: React.ReactNode;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${person.name} Portfolio`,
      alternateName: [person.shortName, `${person.shortName} Portfolio`],
      description: siteDescription,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: person.name,
      alternateName: [person.shortName, "Andi Y. Sinaga"],
      givenName: "Andi",
      additionalName: "Yusup",
      familyName: "Sinaga",
      jobTitle: person.jobTitle,
      description: siteDescription,
      url: SITE_URL,
      image: `${SITE_URL}/Andi.png`,
      email: `mailto:${person.email}`,
      knowsAbout: [
        "UI Design",
        "UX Design",
        "Product Design",
        "Design Systems",
        "Prototyping",
        "Usability Testing",
        "UX Research",
      ],
      sameAs: person.sameAs,
      mainEntityOfPage: { "@id": `${SITE_URL}/#website` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning className={`${plusJakarta.variable} h-full antialiased`}>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#0a0a0f] text-white overflow-x-hidden selection:bg-[#482439]/50 selection:text-white"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}

```

## `src/components/layout/Navbar.tsx`

```tsx
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileOpen
          ? "bg-[#0a0a0f]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/30"
          : "bg-transparent"
        }`}
    >
      <nav className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="#about"
          className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#652b4e] rounded-xl"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#652b4e] via-[#482439] to-[#36162a] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#482439]/25 group-hover:shadow-[#482439]/40 transition-shadow duration-300 shrink-0">
            AS
          </div>
          <span className="font-bold text-white text-base sm:text-lg tracking-tight">
            Andi<span className="text-gray-400 font-normal"> Sinaga</span>
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
              <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#652b4e] via-[#482439] to-[#36162a] group-hover:w-3/4 transition-all duration-300 rounded-full" />
            </a>
          ))}
        </div>

        {/* CTA Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#652b4e] via-[#482439] to-[#36162a] rounded-xl hover:shadow-lg hover:shadow-[#482439]/25 hover:-translate-y-0.5 transition-all duration-200"
          >
            Let&rsquo;s Talk
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl hover:bg-white/10 active:bg-white/15 transition-colors text-white focus:outline-none focus:ring-2 focus:ring-[#652b4e]/50"
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
            <div className="max-w-6xl mx-auto px-6 sm:px-8 py-4 flex flex-col gap-1">
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
                  className="flex items-center justify-center w-full py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#652b4e] via-[#482439] to-[#36162a] rounded-xl hover:shadow-lg hover:shadow-[#482439]/25 active:opacity-90 transition-all"
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

```

## `src/components/layout/Footer.tsx`

```tsx
import { Heart } from "lucide-react";
import { socialLinks } from "@/lib/site";

export default async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] overflow-hidden">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#652b4e]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-8 sm:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#652b4e] via-[#482439] to-[#36162a] flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-[#482439]/25 shrink-0">
              AS
            </div>
            <div className="text-left">
              <p className="font-semibold text-white text-sm">Andi Sinaga</p>
              <p className="text-gray-500 text-xs">UI/UX Product Designer</p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-6 gap-y-2">
            {["About", "Projects", "Experience", "Education", "Skills", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 rounded-lg hover:text-white hover:border-white/20 active:bg-white/10 transition-all duration-200"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-gray-500 text-xs sm:text-sm">
            &copy; {year} Andi Sinaga. All rights reserved.
          </p>
          <p className="flex items-center justify-center gap-1.5 text-gray-500 text-xs sm:text-sm">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> and too much coffee
          </p>
        </div>
      </div>
    </footer>
  );
}

```
