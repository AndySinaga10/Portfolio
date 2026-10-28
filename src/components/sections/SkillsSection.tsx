"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Search,
  PenTool,
  Layers,
  Palette,
  TestTube,
  Target,
  Lightbulb,
  Compass,
  Code,
  Rocket,
} from "lucide-react";

const skills = [
  {
    title: "User Research",
    description: "Conducting interviews, surveys, and usability studies to understand user needs and behaviors.",
    icon: Search,
    color: "#3b82f6",
  },
  {
    title: "Wireframing",
    description: "Creating low to high-fidelity wireframes that map user flows and information architecture.",
    icon: PenTool,
    color: "#8b5cf6",
  },
  {
    title: "Prototyping",
    description: "Building interactive prototypes in Figma and Protopie to validate concepts and test interactions.",
    icon: Layers,
    color: "#10b981",
  },
  {
    title: "Design Systems",
    description: "Developing scalable component libraries and design tokens for consistent product experiences.",
    icon: Palette,
    color: "#f59e0b",
  },
  {
    title: "Usability Testing",
    description: "Planning and executing usability tests to identify pain points and optimize user experience.",
    icon: TestTube,
    color: "#ef4444",
  },
  {
    title: "Product Strategy",
    description: "Aligning design decisions with business goals through data-driven insights and metrics.",
    icon: Target,
    color: "#0891b2",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    description: "User research, stakeholder interviews, competitive analysis, and market research.",
    icon: Lightbulb,
    color: "#3b82f6",
  },
  {
    step: "02",
    title: "Define",
    description: "Synthesizing research into personas, journey maps, and design principles.",
    icon: Compass,
    color: "#8b5cf6",
  },
  {
    step: "03",
    title: "Design",
    description: "Ideation, wireframing, visual design, and interactive prototyping.",
    icon: Code,
    color: "#10b981",
  },
  {
    step: "04",
    title: "Deliver",
    description: "Usability testing, design handoff, and iteration based on feedback.",
    icon: Rocket,
    color: "#f59e0b",
  },
];

export default function SkillsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
  const skillsRef = useRef(null);
  const isSkillsInView = useInView(skillsRef, { once: true, margin: "-60px" });
  const processRef = useRef(null);
  const isProcessInView = useInView(processRef, { once: true, margin: "-60px" });

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] rounded-full opacity-[0.04] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 bg-white/5 text-violet-400 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 border border-white/10">
            Expertise
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Skills &amp;{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Core competencies refined over 9+ years of shipping products that users love.
          </p>
        </motion.header>

        {/* Skills Grid */}
        <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-14 sm:mb-20">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isSkillsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.45,
                  delay: i * 0.06,
                  ease: [0.16, 1, 0.3, 1] as const,
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-xl sm:rounded-2xl p-4 sm:p-6 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <Icon className="w-5 h-5" style={{ color: skill.color }} />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">{skill.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Design Process */}
        <motion.div
          ref={processRef}
          initial={{ opacity: 0, y: 28 }}
          animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10"
        >
          <h3 className="text-lg sm:text-xl font-bold text-white mb-6 sm:mb-8 text-center">
            My Design Process
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.45,
                    delay: 0.15 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1] as const,
                  }}
                  className="relative text-center p-3 sm:p-0"
                >
                  {/* Step number */}
                  <span className="text-[11px] sm:text-xs font-bold text-gray-500 mb-2 sm:mb-3 block">
                    {step.step}
                  </span>

                  {/* Icon circle */}
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: step.color }} />
                  </div>

                  <h4 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
