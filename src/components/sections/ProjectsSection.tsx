"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    company: "Pashouses",
    title: "Projects Highlight at Pashouses",
    subtitle: "Public Website & Mobile App",
    description:
      "This is my Project Highlight for Pashouses including Public Website desktop and internal mobile app like canvassing tracker, pencarian titik tertentu, etc. I'm also doing usability testing in Pashouses for some feature, and the report is showed in the portfolio detail.",
    tags: ["Web App", "Mobile App", "Usability Testing"],
    accent: "#3b82f6",
    figmaUrl:
      "https://www.figma.com/proto/pcmGZ7erTE2zQ5uDVuIGLd/Andi-Y-Sinaga-Portfolio?node-id=763-37601&t=HiNVFLpoYApCKg1G-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=51%3A30&show-proto-sidebar=1",
  },
  {
    id: 2,
    company: "Nadi Healthcare",
    title: "Nadi Refund System UX Case",
    subtitle: "Semi-automation System",
    description:
      "Nadi Healthcare is the medical services that have already run in offline platform, so they willing to digitalize that services to mobile app at beginning, the refund system is also already running in traditional method and this project is to make it semi-automation.",
    tags: ["Healthcare", "Mobile App", "UX Research"],
    accent: "#0891b2",
    figmaUrl:
      "https://www.figma.com/proto/pcmGZ7erTE2zQ5uDVuIGLd/Andi-Y-Sinaga-Portfolio?node-id=461-69&t=HiNVFLpoYApCKg1G-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=51%3A30&show-proto-sidebar=1",
  },
  {
    id: 3,
    company: "Nadi Healthcare",
    title: "Project Highlight at Nadi",
    subtitle: "My Pharma Medical E-Commerce",
    description:
      "Nadi have big product team and I responsible to manage feature called My Pharma. My Pharma is medical e-commerce to provide online transaction for user. user can directly buy non-RX required medicine or can upload prescription for RX Required product.",
    tags: ["E-Commerce", "Pharma", "Product Design"],
    accent: "#8b5cf6",
    figmaUrl:
      "https://www.figma.com/proto/pcmGZ7erTE2zQ5uDVuIGLd/Andi-Y-Sinaga-Portfolio?node-id=752-6276&t=HiNVFLpoYApCKg1G-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=51%3A30&show-proto-sidebar=1",
  },
  {
    id: 4,
    company: "Nadi Healthcare",
    title: "MyPharma Prototype",
    subtitle: "UX Prototyping & Usability Testing",
    description:
      "As a UX Designer i'm also responsible to prototyping the design to make sure the flow, the feel, the look, the experience is meet the requirements and expectation for best output, but not for forget to test the usability to take out stress point from User.",
    tags: ["Prototype", "Mobile App", "Usability Testing"],
    accent: "#10b981",
    figmaUrl:
      "https://www.figma.com/proto/t5RYxCI2jBDkibPeoBbqly/MyPharma?page-id=0%3A1&node-id=10668-22517&starting-point-node-id=9270%3A50419&t=WCuLU1hc0AVaewNI-1&fuid=1519166877991708250",
  },
  {
    id: 5,
    company: "National Logistic Ecosystem",
    title: "Mobile NLE Prototype",
    subtitle: "Booking & Documentation App",
    description:
      "Mobile NLE is a national wide application that use by Logistic Provider that registered in National Logistic Ecosystem. this app is cover booking transaction and documentation for Trucking, Shipping, and another logistic ecosystem.",
    tags: ["Logistics", "Mobile App", "Enterprise"],
    accent: "#ef4444",
    figmaUrl:
      "https://www.figma.com/proto/9K22neTq3AJiY9YZ4sRrTI/Mobile-NLE?page-id=0%3A1&node-id=2-80271&viewport=1647%2C1158%2C0.11&t=ae2U95m6ipWg1HSD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A80271&show-proto-sidebar=1",
  },
  {
    id: 6,
    company: "National Logistic Ecosystem",
    title: "NLE Multi Destination UX Case",
    subtitle: "Government Logistic Platform",
    description:
      "NLE is a government project to build online ecosystem for logistic procedure in indonesia, so this app will centralize tracking, request, and complete system in database. in this case we will the multi destination design problem that occurred during the development.",
    tags: ["Government", "UX Case", "Logistics"],
    accent: "#f97316",
    figmaUrl:
      "https://drive.google.com/file/d/1YhNFQ42cHVETDVe_RYhKYxwqbP0fZNHe/view",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.a
      ref={ref}
      href={project.figmaUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative block bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 hover:border-white/20 hover:bg-white/[0.05] active:bg-white/[0.07] transition-all duration-300 overflow-hidden"
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] opacity-60 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        }}
      />

      {/* Hover glow */}
      <div
        className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl pointer-events-none"
        style={{ backgroundColor: project.accent }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Company & Arrow */}
        <div className="flex items-center justify-between mb-3.5 sm:mb-4">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full shrink-0"
              style={{ backgroundColor: project.accent }}
            />
            <span className="text-[11px] sm:text-xs font-semibold text-gray-400 uppercase tracking-wider">
              {project.company}
            </span>
          </div>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-white/10 group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0">
            <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-white transition-colors leading-snug">
          {project.title}
        </h3>
        <p
          className="text-xs sm:text-sm font-medium mb-3 sm:mb-4"
          style={{ color: project.accent }}
        >
          {project.subtitle}
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-5 sm:mb-6 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs font-medium rounded-full border"
              style={{
                color: project.accent,
                backgroundColor: `${project.accent}12`,
                borderColor: `${project.accent}25`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}

export default function ProjectsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[200px] sm:h-[400px] rounded-full opacity-[0.05] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent)" }}
      />

      <div className="relative max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 bg-white/5 text-blue-400 text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 border border-white/10">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            A selection of projects I&rsquo;ve led or contributed to — spanning
            product design, UX research, and design systems.
          </p>
        </motion.header>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Figma CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 sm:mt-14 text-center"
        >
          <div className="inline-flex items-center gap-3 px-4 sm:px-6 py-3 bg-white/5 rounded-2xl border border-white/10 max-w-full text-left">
            <div className="w-8 h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49h4.588c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49zm-4.587 7.51h3.117v-6.038H8.148c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019zm.001 1.471h3.117v3.117c0 1.665-1.355 3.019-3.019 3.019s-3.019-1.355-3.019-3.019 1.354-3.019 3.019-3.019h-.098z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-white">Click any project card</p>
              <p className="text-[11px] sm:text-xs text-gray-400">Opens the design prototype in Figma</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
