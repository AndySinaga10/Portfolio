"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Building2,
  MapPin,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Layers,
  Code2,
} from "lucide-react";
import { experiences } from "@/data/experience";

type FilterCategory = "all" | "design" | "engineering" | "leadership";

export default function ExperienceSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const filteredExperiences = experiences.filter((item) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  // If "all" is active and not expanded, show top 5 roles
  const INITIAL_VISIBLE_COUNT = 5;
  const displayExperiences =
    activeFilter === "all" && !isExpanded
      ? filteredExperiences.slice(0, INITIAL_VISIBLE_COUNT)
      : filteredExperiences;

  const hasHiddenItems =
    activeFilter === "all" && filteredExperiences.length > INITIAL_VISIBLE_COUNT;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-16 sm:py-24 lg:py-32 relative overflow-x-clip"
    >
      {/* Background ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-0 sm:left-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-[0.03] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #652b4e, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-0 sm:right-10 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-[0.03] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #482439, transparent)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 bg-[#482439]/20 text-[#a05070] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 border border-[#652b4e]/30">
            <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Career Trajectory</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            13+ years transforming complex business challenges into intuitive digital products,
            from early-stage ventures to telecom giants and enterprise IT operations.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all duration-200 cursor-pointer ${activeFilter === "all"
                ? "bg-white/10 text-white border-[#652b4e]/50 shadow-lg shadow-[#482439]/10"
                : "bg-white/[0.02] text-gray-400 border-white/[0.08] hover:text-white hover:border-white/20"
                }`}
            >
              All ({experiences.length})
            </button>
            <button
              onClick={() => setActiveFilter("design")}
              className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all duration-200 cursor-pointer ${activeFilter === "design"
                ? "bg-[#482439]/30 text-[#a05070] border-[#652b4e]/50 shadow-lg shadow-[#482439]/10"
                : "bg-white/[0.02] text-gray-400 border-white/[0.08] hover:text-white hover:border-white/20"
                }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Product &amp; UI/UX
            </button>
            <button
              onClick={() => setActiveFilter("leadership")}
              className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all duration-200 cursor-pointer ${activeFilter === "leadership"
                ? "bg-[#36162a]/50 text-[#c06a8e] border-[#652b4e]/50 shadow-lg shadow-[#482439]/10"
                : "bg-white/[0.02] text-gray-400 border-white/[0.08] hover:text-white hover:border-white/20"
                }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Lead &amp; Senior
            </button>
            <button
              onClick={() => setActiveFilter("engineering")}
              className={`inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all duration-200 cursor-pointer ${activeFilter === "engineering"
                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/50 shadow-lg shadow-emerald-500/10"
                : "bg-white/[0.02] text-gray-400 border-white/[0.08] hover:text-white hover:border-white/20"
                }`}
            >
              <Code2 className="w-3.5 h-3.5" />
              Engineering &amp; IT
            </button>
          </div>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Guide Line */}
          <div
            aria-hidden="true"
            className="absolute left-3.5 sm:left-6 md:left-8 top-3 bottom-8 w-px bg-gradient-to-b from-[#652b4e]/60 via-[#482439]/40 to-white/5"
          />

          {/* Experience List */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            <AnimatePresence mode="popLayout">
              {displayExperiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.4,
                    delay: idx * 0.04,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pl-8 sm:pl-14 md:pl-20 group"
                >
                  {/* Timeline Node Icon / Dot */}
                  <div className="absolute left-3.5 sm:left-6 md:left-8 -translate-x-1/2 top-5 sm:top-6 z-10">
                    {exp.isCurrent ? (
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#652b4e]/40 animate-ping" />
                        <span className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-gradient-to-tr from-[#652b4e] to-[#a05070] border-2 border-[#0a0a0f] shadow-lg shadow-[#482439]/50" />
                      </div>
                    ) : (
                      <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full bg-[#111118] border-2 border-gray-600 group-hover:border-[#652b4e] group-hover:scale-125 transition-all duration-300" />
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/20">
                    {/* Top Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5 sm:gap-3 mb-3.5 sm:mb-4">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-1">
                          <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#a05070] transition-colors leading-snug">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="px-2 py-0.5 text-[10px] sm:text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-1 shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current
                            </span>
                          )}
                          <span className="px-2 py-0.5 text-[10px] sm:text-[11px] font-medium text-gray-400 bg-white/5 border border-white/10 rounded-md shrink-0">
                            {exp.type}
                          </span>
                        </div>

                        {/* Company & Note */}
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs sm:text-sm text-gray-300 font-medium">
                          <span className="flex items-center gap-1.5 text-white">
                            <Building2 className="w-3.5 h-3.5 text-[#a05070] shrink-0" />
                            {exp.company}
                          </span>
                          {exp.companyNote && (
                            <span className="text-[11px] sm:text-xs text-[#a05070]/90 font-normal">
                              • {exp.companyNote}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Period & Location Badge */}
                      <div className="flex flex-wrap sm:flex-col items-start sm:items-end gap-1 sm:gap-1.5 shrink-0 text-xs mt-1 sm:mt-0">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium text-[11px] sm:text-xs">
                          <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#a05070] shrink-0" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="inline-flex items-center gap-1 text-gray-400 text-[10px] sm:text-[11px]">
                            <MapPin className="w-3 h-3 text-gray-400 shrink-0" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-5">
                      {exp.description.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#a05070]/70 mt-1.5 sm:mt-2 shrink-0 group-hover:bg-[#a05070]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech & Skill Tags */}
                    <div className="pt-3 sm:pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[11px] sm:text-xs font-medium rounded-md sm:rounded-lg bg-white/[0.03] text-gray-300 border border-white/[0.06] group-hover:border-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Toggle Expand / Collapse */}
          {hasHiddenItems && (
            <div className="mt-8 sm:mt-12 text-center relative z-10 w-full">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-semibold text-white bg-white/5 hover:bg-white/10 active:bg-white/15 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-black/20 w-full sm:w-auto"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4 text-[#a05070]" />
                    <span>Collapse Earlier History</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 text-[#a05070]" />
                    <span>
                      View Earlier Milestones ({filteredExperiences.length - INITIAL_VISIBLE_COUNT}{" "}
                      more from 2012–2021)
                    </span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
