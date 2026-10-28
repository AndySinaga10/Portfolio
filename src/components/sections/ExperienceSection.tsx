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
  SlidersHorizontal,
} from "lucide-react";
import { experiences, ExperienceItem } from "@/data/experience";

type FilterCategory = "all" | "design" | "engineering" | "leadership";

export default function ExperienceSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
      className="py-24 sm:py-32 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-500/10 text-blue-400 text-sm font-semibold rounded-full mb-4 border border-blue-500/20">
            <Briefcase className="w-4 h-4" />
            <span>Career Trajectory</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            13+ years transforming complex business challenges into intuitive digital products,
            from early-stage ventures to telecom giants and enterprise IT operations.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => {
                setActiveFilter("all");
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all duration-200 cursor-pointer ${
                activeFilter === "all"
                  ? "bg-white/10 text-white border-blue-500/50 shadow-lg shadow-blue-500/10"
                  : "bg-white/[0.02] text-gray-400 border-white/[0.08] hover:text-white hover:border-white/20"
              }`}
            >
              All Milestones ({experiences.length})
            </button>
            <button
              onClick={() => setActiveFilter("design")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all duration-200 cursor-pointer ${
                activeFilter === "design"
                  ? "bg-blue-500/20 text-blue-300 border-blue-500/50 shadow-lg shadow-blue-500/10"
                  : "bg-white/[0.02] text-gray-400 border-white/[0.08] hover:text-white hover:border-white/20"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              Product &amp; UI/UX
            </button>
            <button
              onClick={() => setActiveFilter("leadership")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all duration-200 cursor-pointer ${
                activeFilter === "leadership"
                  ? "bg-violet-500/20 text-violet-300 border-violet-500/50 shadow-lg shadow-violet-500/10"
                  : "bg-white/[0.02] text-gray-400 border-white/[0.08] hover:text-white hover:border-white/20"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Lead &amp; Senior Roles
            </button>
            <button
              onClick={() => setActiveFilter("engineering")}
              className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium rounded-xl border transition-all duration-200 cursor-pointer ${
                activeFilter === "engineering"
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
            className="absolute left-4 sm:left-8 top-3 bottom-8 w-px bg-gradient-to-b from-blue-500/60 via-violet-500/30 to-white/5"
          />

          {/* Experience List */}
          <div className="space-y-8 sm:space-y-10">
            <AnimatePresence mode="popLayout">
              {displayExperiences.map((exp, idx) => (
                <motion.div
                  key={exp.id}
                  layout
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pl-12 sm:pl-20 group"
                >
                  {/* Timeline Node Icon / Dot */}
                  <div className="absolute left-4 sm:left-8 -translate-x-1/2 top-6 z-10">
                    {exp.isCurrent ? (
                      <div className="relative flex items-center justify-center">
                        <span className="absolute w-5 h-5 rounded-full bg-blue-500/40 animate-ping" />
                        <span className="relative w-4 h-4 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 border-2 border-[#0a0a0f] shadow-lg shadow-blue-500/50" />
                      </div>
                    ) : (
                      <div className="w-3.5 h-3.5 rounded-full bg-[#111118] border-2 border-gray-600 group-hover:border-blue-400 group-hover:scale-125 transition-all duration-300" />
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-6 sm:p-7 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/20">
                    {/* Top Header Row */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                            {exp.role}
                          </h3>
                          {exp.isCurrent && (
                            <span className="px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              Current Role
                            </span>
                          )}
                          <span className="px-2 py-0.5 text-[11px] font-medium text-gray-400 bg-white/5 border border-white/10 rounded-md">
                            {exp.type}
                          </span>
                        </div>

                        {/* Company & Note */}
                        <div className="flex flex-wrap items-center gap-x-2 text-sm text-gray-300 font-medium">
                          <span className="flex items-center gap-1.5 text-white">
                            <Building2 className="w-4 h-4 text-blue-400" />
                            {exp.company}
                          </span>
                          {exp.companyNote && (
                            <span className="text-xs text-blue-400/90 font-normal">
                              • {exp.companyNote}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Period & Location Badge */}
                      <div className="flex flex-row sm:flex-col items-start sm:items-end gap-1.5 shrink-0 text-xs">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          {exp.period}
                        </span>
                        {exp.location && (
                          <span className="hidden sm:inline-flex items-center gap-1 text-gray-400 text-[11px]">
                            <MapPin className="w-3 h-3 text-gray-400" />
                            {exp.location}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mb-5">
                      {exp.description.map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70 mt-2 shrink-0 group-hover:bg-blue-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech & Skill Tags */}
                    <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs font-medium rounded-lg bg-white/[0.03] text-gray-300 border border-white/[0.06] group-hover:border-white/10 transition-colors"
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

          {/* Toggle Expand / Collapse for full 10 items */}
          {hasHiddenItems && (
            <div className="mt-10 text-center relative z-10 pl-12 sm:pl-20">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-200 cursor-pointer shadow-lg shadow-black/20"
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="w-4 h-4 text-blue-400" />
                    <span>Collapse Earlier History</span>
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-4 h-4 text-blue-400" />
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

