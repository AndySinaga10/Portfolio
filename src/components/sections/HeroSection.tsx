"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const bentoVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.3 + i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden pt-20 sm:pt-24 lg:pt-28 pb-12 sm:pb-16 lg:pb-20"
    >
      {/* Background gradient orbs */}
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 sm:-top-40 sm:-right-40 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 sm:-bottom-40 sm:-left-40 w-[280px] sm:w-[500px] h-[280px] sm:h-[500px] rounded-full opacity-15 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
      />

      {/* Grid dot pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5 sm:gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-1.5 bg-white/5 text-gray-300 text-xs sm:text-sm font-medium rounded-full border border-white/10">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] sm:leading-[1.1] tracking-tight">
                Hi, I&rsquo;m{" "}
                <span className="text-white">Andi Sinaga</span>
                <br />
                <span className="gradient-text">Crafting Digital</span>
                <br />
                <span className="text-white">
                  Experiences &amp; Intuitive Products
                </span>
              </h1>
            </motion.div>

            {/* Bio */}
            <motion.div variants={itemVariants}>
              <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg">
                Senior UI/UX Designer with 8+ years of experience specializing in
                user-centered design, prototyping, and design systems. Graduated from
                the University of Indonesia majoring in Computer Science.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-1.5 text-gray-500 text-xs sm:text-sm">
                <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
                Jakarta, Indonesia
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2"
            >
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold text-sm sm:text-base rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98] transition-all duration-200"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-white/5 text-white font-semibold text-sm sm:text-base rounded-2xl border border-white/10 hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Bento Grid Column */}
          <div className="flex justify-center lg:justify-end w-full">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-md sm:max-w-lg">
              {/* Stat 1: Years Experience */}
              <motion.div
                custom={0}
                variants={bentoVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2 } }}
                className="group relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-24 sm:w-28 h-24 sm:h-28 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-2.5 sm:mb-3">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    9<span className="text-blue-500">+</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium leading-tight">
                    Years Experience
                  </p>
                </div>
              </motion.div>

              {/* Photo Bento Card: Spans 2 Rows on Right */}
              <motion.div
                custom={1}
                variants={bentoVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2 } }}
                className="row-span-2 relative min-h-[220px] sm:min-h-[280px] md:min-h-[340px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent hover:border-white/25 transition-all duration-300 group"
              >
                {/* Subtle back ambient glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 sm:w-48 h-36 sm:h-48 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 rounded-full blur-3xl pointer-events-none" />

                <Image
                  src="/Andi.png"
                  alt="Andi Sinaga - UI/UX Product Designer"
                  fill
                  className="object-cover object-top filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500"
                  priority
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 240px, 260px"
                />

                {/* Bottom glass badge */}
                <div className="absolute bottom-2.5 sm:bottom-4 left-2.5 sm:left-3 right-2.5 sm:right-3 z-10">
                  <div className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 bg-[#0a0a0f]/85 backdrop-blur-md rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-between gap-1.5">
                    <div className="min-w-0">
                      <p className="text-[11px] sm:text-xs font-bold text-white truncate">
                        Andi Sinaga
                      </p>
                      <p className="text-[9px] sm:text-[10px] text-gray-400 truncate">
                        UI/UX Lead
                      </p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                  </div>
                </div>
              </motion.div>

              {/* Stat 2: Completed Projects */}
              <motion.div
                custom={2}
                variants={bentoVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2 } }}
                className="group relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 hover:border-violet-500/30 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-24 sm:w-28 h-24 sm:h-28 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-2.5 sm:mb-3">
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                    20<span className="text-violet-500">+</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 font-medium leading-tight">
                    Completed Projects
                  </p>
                </div>
              </motion.div>

              {/* Bottom Card: Full width banner card */}
              <motion.div
                custom={3}
                variants={bentoVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="col-span-2 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-5 flex items-center justify-between gap-2 hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm font-semibold text-white truncate">
                      15+ Happy Clients
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400 truncate">
                      Enterprise, Government &amp; Startups
                    </p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-full border border-white/10 text-[11px] text-gray-300 shrink-0">
                  <span>Universitas Indonesia</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
