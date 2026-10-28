"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

// Expertise categories with detailed descriptions
const expertise = [
  {
    title: "UI Design",
    icon: "🎨",
    color: "#2563eb",
    bgColor: "#eff6ff",
    borderColor: "#bfdbfe",
    description:
      "Crafting visually stunning interfaces that align with brand identity. Expert in creating cohesive design systems, pixel-perfect layouts, and responsive designs that work seamlessly across all devices.",
    highlights: ["Visual Design", "Component Libraries", "Design Systems", "Responsive Layouts"],
  },
  {
    title: "UX Research",
    icon: "🔬",
    color: "#7c3aed",
    bgColor: "#f5f3ff",
    borderColor: "#ddd6fe",
    description:
      "Conducting comprehensive user research to uncover insights that drive design decisions. From user interviews to competitive analysis, ensuring every design choice is backed by real user data.",
    highlights: ["User Interviews", "Usability Testing", "Journey Mapping", "A/B Testing"],
  },
  {
    title: "Product Design",
    icon: "🎯",
    color: "#059669",
    bgColor: "#ecfdf5",
    borderColor: "#a7f3d0",
    description:
      "Bridging business goals with user needs through strategic product design. Experienced in leading end-to-end product cycles from ideation to launch, ensuring measurable impact on key metrics.",
    highlights: ["Product Strategy", "Feature Prioritization", "Roadmapping", "Metrics-Driven Design"],
  },
  {
    title: "Prototyping",
    icon: "⚡",
    color: "#f59e0b",
    bgColor: "#fffbeb",
    borderColor: "#fde68a",
    description:
      "Building interactive prototypes to validate concepts quickly. From low-fidelity wireframes to high-fidelity clickable prototypes that communicate design intent effectively to stakeholders.",
    highlights: ["Interactive Prototypes", "Micro-interactions", "Wireframing", "User Flow Testing"],
  },
];

// Tools organized by category
const toolCategories = [
  {
    category: "Design & Prototyping",
    tools: [
      { name: "Figma", icon: "🎨", desc: "Primary design tool" },
      { name: "Sketch", icon: "💎", desc: "Design & prototyping" },
      { name: "Adobe XD", icon: "✏️", desc: "UI design" },
      { name: "Protopie", icon: "⚡", desc: "Advanced interactions" },
      { name: "InVision", icon: "🖥️", desc: "Prototyping" },
      { name: "Principle", icon: "🎭", desc: "Motion design" },
    ],
  },
  {
    category: "Research & Analytics",
    tools: [
      { name: "Maze", icon: "🔬", desc: "Usability testing" },
      { name: "Hotjar", icon: "📊", desc: "User analytics" },
      { name: "Miro", icon: "🗂️", desc: "Collaborative workshops" },
      { name: "Optimal Workshop", icon: "🎯", desc: "Card sorting" },
      { name: "Google Analytics", icon: "📈", desc: "Data insights" },
      { name: "Lookback", icon: "🎥", desc: "User recordings" },
    ],
  },
  {
    category: "Collaboration & Documentation",
    tools: [
      { name: "Notion", icon: "📝", desc: "Documentation" },
      { name: "Jira", icon: "🏗️", desc: "Project management" },
      { name: "Confluence", icon: "📚", desc: "Knowledge base" },
      { name: "Zeplin", icon: "📐", desc: "Design handoff" },
      { name: "Slack", icon: "💬", desc: "Team communication" },
      { name: "Linear", icon: "⚡", desc: "Issue tracking" },
    ],
  },
];

// Design process steps
const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "User research, stakeholder interviews, competitive analysis, and market research to understand the problem space.",
    icon: "🔍",
    color: "#eff6ff",
    border: "#bfdbfe",
    accent: "#2563eb",
  },
  {
    step: "02",
    title: "Define",
    desc: "Synthesizing research into actionable insights—user personas, journey maps, problem statements, and design principles.",
    icon: "🎯",
    color: "#f5f3ff",
    border: "#ddd6fe",
    accent: "#7c3aed",
  },
  {
    step: "03",
    title: "Design",
    desc: "Ideation, wireframing, visual design, and interactive prototyping to bring solutions to life.",
    icon: "✏️",
    color: "#fef3c7",
    border: "#fde68a",
    accent: "#f59e0b",
  },
  {
    step: "04",
    title: "Deliver",
    desc: "Usability testing, design handoff, developer collaboration, and iteration based on feedback.",
    icon: "🚀",
    color: "#ecfdf5",
    border: "#a7f3d0",
    accent: "#059669",
  },
];

export default function SkillsSection() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLElement>();
  const [expertiseRef, expertiseVisible] = useScrollReveal<HTMLDivElement>();
  const [toolsRef, toolsVisible] = useScrollReveal<HTMLDivElement>();
  const [processRef, processVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <header
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="inline-block px-4 py-1.5 bg-purple-50 text-purple-700 text-sm font-semibold rounded-full mb-4 border border-purple-100">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
            Skills & Tools
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto">
            Tools and capabilities I&rsquo;ve refined over 8+ years of shipping products that users love.
          </p>
        </header>

        {/* Expertise Cards */}
        <div
          ref={expertiseRef}
          className="grid md:grid-cols-2 gap-6 mb-16"
          style={{
            opacity: expertiseVisible ? 1 : 0,
            transform: expertiseVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          {expertise.map((item, i) => (
            <div
              key={item.title}
              className="group relative bg-white rounded-2xl p-6 border hover:shadow-lg transition-all duration-300"
              style={{
                borderColor: item.borderColor,
                opacity: expertiseVisible ? 1 : 0,
                transform: expertiseVisible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease-out ${i * 80}ms, transform 0.5s ease-out ${i * 80}ms, box-shadow 0.3s ease`,
              }}
            >
              {/* Accent top bar */}
              <div
                className="absolute top-0 left-6 right-6 h-1 rounded-b-full"
                style={{ backgroundColor: item.color }}
              />

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ backgroundColor: item.bgColor }}
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {item.highlights.map((h) => (
                      <span
                        key={h}
                        className="px-2.5 py-1 text-xs font-semibold rounded-md"
                        style={{ color: item.color, backgroundColor: item.bgColor }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tools by Category */}
        <div
          ref={toolsRef}
          className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm mb-16"
          style={{
            opacity: toolsVisible ? 1 : 0,
            transform: toolsVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h3 className="text-xl font-bold text-[#1a1a2e] mb-8 text-center">Tools I Work With</h3>

          <div className="space-y-8">
            {toolCategories.map((cat, catIndex) => (
              <div
                key={cat.category}
                style={{
                  opacity: toolsVisible ? 1 : 0,
                  transform: toolsVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${catIndex * 150}ms, transform 0.5s ease-out ${catIndex * 150}ms`,
                }}
              >
                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">
                  {cat.category}
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {cat.tools.map((tool, toolIndex) => (
                    <div
                      key={tool.name}
                      className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-blue-50 border border-transparent hover:border-blue-100 transition-all duration-200"
                      style={{
                        opacity: toolsVisible ? 1 : 0,
                        transform: toolsVisible ? "scale(1)" : "scale(0.9)",
                        transition: `opacity 0.4s ease-out ${(catIndex * 150) + (toolIndex * 30)}ms, transform 0.4s ease-out ${(catIndex * 150) + (toolIndex * 30)}ms`,
                      }}
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                        {tool.icon}
                      </span>
                      <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 text-center">
                        {tool.name}
                      </span>
                      <span className="text-[10px] text-gray-400 text-center leading-tight">
                        {tool.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Design Process */}
        <div
          ref={processRef}
          className="bg-gradient-to-br from-[#1a1a2e] to-[#1e3a5f] rounded-3xl p-8 text-white"
          style={{
            opacity: processVisible ? 1 : 0,
            transform: processVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <h3 className="text-xl font-bold mb-8 text-center">My Design Process</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className="relative"
                style={{
                  opacity: processVisible ? 1 : 0,
                  transform: processVisible ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 0.5s ease-out ${i * 100}ms, transform 0.5s ease-out ${i * 100}ms`,
                }}
              >
                {/* Connector line (except last) */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-white/10 z-0" />
                )}

                <div
                  className="relative z-10 rounded-2xl p-5 border border-white/10"
                  style={{ backgroundColor: `${step.accent}15` }}
                >
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-lg"
                      style={{ backgroundColor: step.accent }}
                    >
                      {step.icon}
                    </div>
                    <span className="text-xs font-black text-white/30">{step.step}</span>
                  </div>

                  <h4 className="font-bold text-white mb-2">{step.title}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
