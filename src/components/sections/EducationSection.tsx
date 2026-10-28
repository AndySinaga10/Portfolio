"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { educations } from "@/data/education";

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background radial accent */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] rounded-full opacity-[0.03] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 bg-violet-500/10 text-violet-400 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 border border-violet-500/20">
            <GraduationCap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Education &amp; <span className="gradient-text">Qualifications</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Formal computer science and engineering foundations underpinning my product design,
            systems thinking, and technical execution.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {educations.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative flex flex-col justify-between bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] hover:border-white/20 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-6 right-6 h-px opacity-50 group-hover:opacity-100 transition-opacity"
                style={{
                  background: `linear-gradient(90deg, transparent, ${edu.accentColor}, transparent)`,
                }}
              />

              <div>
                {/* Top Row: Institution Icon & Degree Level Badge */}
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl flex items-center justify-center border border-white/10 shadow-lg"
                    style={{ backgroundColor: `${edu.accentColor}15` }}
                  >
                    <BookOpen
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      style={{ color: edu.accentColor }}
                    />
                  </div>
                  <span className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-semibold rounded-full bg-white/5 border border-white/10 text-gray-300">
                    {edu.level}
                  </span>
                </div>

                {/* Institution & Degree */}
                <h3 className="text-base sm:text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors leading-snug">
                  {edu.institution}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-gray-300 mb-2.5 sm:mb-3">
                  {edu.field}
                </p>

                {/* Period & Location */}
                <div className="space-y-1 sm:space-y-1.5 mb-4 sm:mb-5 pb-4 sm:pb-5 border-b border-white/[0.06] text-[11px] sm:text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-300 leading-relaxed mb-5 sm:mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Highlights / Core Focus */}
              <div>
                <h4 className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gray-400 mb-2.5 sm:mb-3 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-violet-400" />
                  Key Coursework &amp; Focus
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {edu.highlights.map((item, hIdx) => (
                    <li
                      key={hIdx}
                      className="flex items-start gap-2 text-xs text-gray-300 leading-snug"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400/80 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
