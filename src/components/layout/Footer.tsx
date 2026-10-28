"use client";

import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

export default function Footer() {
  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative border-t border-white/[0.06]">
      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-blue-500/25">
              AS
            </div>
            <div>
              <p className="font-semibold text-white text-sm">Andi Sinaga</p>
              <p className="text-gray-500 text-xs">UI/UX Product Designer</p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex items-center gap-6">
            {["About", "Projects", "Experience", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { label: "LinkedIn", href: "#" },
              { label: "Dribbble", href: "#" },
              { label: "Behance", href: "#" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="px-3 py-1.5 text-xs font-medium text-gray-500 bg-white/5 border border-white/10 rounded-lg hover:text-white hover:border-white/20 transition-all duration-200"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {year} Andi Sinaga. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-gray-600 text-sm">
            Crafted with <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" /> and too much coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
