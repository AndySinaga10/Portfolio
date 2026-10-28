"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
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
      delay: 0.4 + i * 0.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

const stats = [
  { value: "9+", label: "Years Experience", color: "from-blue-500 to-blue-600" },
  { value: "20+", label: "Completed Projects", color: "from-violet-500 to-violet-600" },
  { value: "15+", label: "Happy Clients", color: "from-emerald-500 to-emerald-600" },
];

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background gradient orbs */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full opacity-15 pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)" }}
      />

      {/* Grid dot pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 text-gray-300 text-sm font-medium rounded-full border border-white/10">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                Available for work
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold leading-[1.1] tracking-tight">
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
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
                Senior UI/UX Designer with 8+ years of experience specializing in
                user-centered design, prototyping, and design systems. Graduated from
                the University of Indonesia majoring in Computer Science.
              </p>
            </motion.div>

            {/* Location */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-1.5 text-gray-500 text-sm">
                <MapPin className="w-4 h-4" />
                Jakarta, Indonesia
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-blue-500 to-violet-500 text-white font-semibold rounded-2xl hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/5 text-white font-semibold rounded-2xl border border-white/10 hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Modern Bento Grid */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="grid grid-cols-2 gap-4 w-full max-w-lg">
              {/* Stat 1: Years Experience */}
              <motion.div
                custom={0}
                variants={bentoVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2 } }}
                className="group relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-blue-500/30 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-3">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    9<span className="text-blue-500">+</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1 font-medium">Years Experience</p>
                </div>
              </motion.div>

              {/* Photo Bento Card: Spans 2 Rows on Right */}
              <motion.div
                custom={1}
                variants={bentoVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.2 } }}
                className="row-span-2 relative min-h-[300px] sm:min-h-[340px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-white/[0.06] via-white/[0.02] to-transparent hover:border-white/25 transition-all duration-300 group"
              >
                {/* Subtle back ambient glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 rounded-full blur-3xl pointer-events-none" />

                <Image
                  src="/Andi.png"
                  alt="Andi Sinaga - UI/UX Product Designer"
                  fill
                  className="object-cover object-top filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500"
                  priority
                  sizes="(max-width: 640px) 50vw, 240px"
                />

                {/* Bottom glass badge */}
                <div className="absolute bottom-4 left-3 right-3 z-10">
                  <div className="px-3.5 py-2 bg-[#0a0a0f]/80 backdrop-blur-md rounded-2xl border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold text-white">Andi Sinaga</p>
                      <p className="text-[10px] text-gray-400">UI/UX Lead</p>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
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
                className="group relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-3xl p-6 hover:border-violet-500/30 hover:bg-white/[0.06] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-28 h-28 bg-violet-500/10 rounded-full blur-2xl group-hover:bg-violet-500/20 transition-all duration-300" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-3">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <p className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    20<span className="text-violet-500">+</span>
                  </p>
                  <p className="text-sm text-gray-400 mt-1 font-medium">Completed Projects</p>
                </div>
              </motion.div>

              {/* Bottom Card: Full width banner card */}
              <motion.div
                custom={3}
                variants={bentoVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                className="col-span-2 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-4 sm:p-5 flex items-center justify-between hover:border-white/20 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">15+ Happy Clients</p>
                    <p className="text-xs text-gray-400">Enterprise, Government & Startups</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs text-gray-300">
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
