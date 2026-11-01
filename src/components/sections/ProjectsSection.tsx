"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    company: "Pashouses",
    title: "Projects Highlight at Pashouses",
    teaser: "Public Website & Internal Mobile App",
    tags: ["Web App", "Mobile App", "Usability Testing"],
    accent: "#652b4e",
    thumbnail: "/pashouses.png",
    figmaUrl:
      "https://www.figma.com/proto/pcmGZ7erTE2zQ5uDVuIGLd/Andi-Y-Sinaga-Portfolio?node-id=763-37601&t=HiNVFLpoYApCKg1G-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=51%3A30&show-proto-sidebar=1",
  },
  {
    id: 2,
    company: "Nadi Healthcare",
    title: "Nadi Refund System UX Case",
    teaser: "Transforming Traditional Refund into Semi-Automation",
    tags: ["Healthcare", "Mobile App", "UX Research"],
    accent: "#0891b2",
    thumbnail: "/nadi-refund.png",
    figmaUrl:
      "https://www.figma.com/proto/pcmGZ7erTE2zQ5uDVuIGLd/Andi-Y-Sinaga-Portfolio?node-id=461-69&t=HiNVFLpoYApCKg1G-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=51%3A30&show-proto-sidebar=1",
  },
  {
    id: 3,
    company: "Nadi Healthcare",
    title: "Project Highlight at Nadi",
    teaser: "My Pharma — Medical E-Commerce Platform",
    tags: ["E-Commerce", "Pharma", "Product Design"],
    accent: "#6366f1",
    thumbnail: "/nadi-highlight.png",
    figmaUrl:
      "https://www.figma.com/proto/pcmGZ7erTE2zQ5uDVuIGLd/Andi-Y-Sinaga-Portfolio?node-id=752-6276&t=HiNVFLpoYApCKg1G-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=51%3A30&show-proto-sidebar=1",
  },
  {
    id: 4,
    company: "Nadi Healthcare",
    title: "MyPharma Prototype",
    teaser: "UX Prototyping & Usability Testing",
    tags: ["Prototype", "Mobile App", "Usability Testing"],
    accent: "#10b981",
    thumbnail: "/mypharma.png",
    figmaUrl:
      "https://www.figma.com/proto/t5RYxCI2jBDkibPeoBbqly/MyPharma?page-id=0%3A1&node-id=10668-22517&starting-point-node-id=9270%3A50419&t=WCuLU1hc0AVaewNI-1&fuid=1519166877991708250",
  },
  {
    id: 5,
    company: "National Logistic Ecosystem",
    title: "Mobile NLE Prototype",
    teaser: "Booking & Documentation for Logistics Providers",
    tags: ["Logistics", "Mobile App", "Enterprise"],
    accent: "#ef4444",
    thumbnail: "/nle-mobile.png",
    figmaUrl:
      "https://www.figma.com/proto/9K22neTq3AJiY9YZ4sRrTI/Mobile-NLE?page-id=0%3A1&node-id=2-80271&viewport=1647%2C1158%2C0.11&t=ae2U95m6ipWg1HSD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A80271&show-proto-sidebar=1",
  },
  {
    id: 6,
    company: "National Logistic Ecosystem",
    title: "NLE Multi Destination UX Case",
    teaser: "Solving Multi-Destination Design in Government Platform",
    tags: ["Government", "UX Case", "Logistics"],
    accent: "#f97316",
    thumbnail: "/nle-multi.png",
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
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="group relative block rounded-2xl sm:rounded-3xl overflow-hidden border border-white/[0.08] hover:border-white/25 transition-all duration-300"
      style={{ aspectRatio: "4/3" }}
    >
      {/* ── Full-bleed thumbnail ── */}
      <Image
        src={project.thumbnail}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        priority={index < 2}
      />

      {/* ── Scrim: dark gradient from bottom ── */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.15) 35%, rgba(0,0,0,0.65) 65%, rgba(0,0,0,0.88) 100%)",
        }}
      />

      {/* ── Accent tint overlay (subtle) ── */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
        style={{ backgroundColor: project.accent }}
      />

      {/* ── Top bar: company label + arrow ── */}
      <div className="absolute top-0 left-0 right-0 flex items-start justify-between p-4 sm:p-5 z-10">
        {/* Company pill */}
        <div
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md border border-white/10"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        >
          <div
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ backgroundColor: project.accent }}
          />
          <span className="text-[10px] sm:text-[11px] font-semibold text-white/80 uppercase tracking-widest">
            {project.company}
          </span>
        </div>

        {/* Arrow button */}
        <div
          className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-white/70 group-hover:text-white transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 backdrop-blur-md border border-white/10 shrink-0"
          style={{ backgroundColor: "rgba(0,0,0,0.40)" }}
        >
          <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
        </div>
      </div>

      {/* ── Top accent line ── */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-20 opacity-70 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        }}
      />

      {/* ── Bottom: title + teaser + tags ── */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
        {/* Title */}
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white leading-snug mb-1 drop-shadow-sm">
          {project.title}
        </h3>

        {/* Teaser */}
        <p
          className="text-[11px] sm:text-xs font-medium mb-3 drop-shadow-sm opacity-90"
          style={{ color: project.accent }}
        >
          {project.teaser}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 sm:px-2.5 py-0.5 text-[9px] sm:text-[10px] font-semibold rounded-full border backdrop-blur-sm"
              style={{
                color: project.accent,
                backgroundColor: `rgba(0,0,0,0.50)`,
                borderColor: `${project.accent}50`,
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
    <section
      id="projects"
      className="py-16 sm:py-24 lg:py-32 relative overflow-x-clip"
    >
      {/* Continuing ambient glow from hero on the left */}
      <div
        aria-hidden="true"
        className="absolute -top-36 sm:-top-48 -left-32 sm:-left-44 w-[320px] sm:w-[580px] h-[360px] sm:h-[650px] rounded-full opacity-20 pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, #482439 0%, transparent 70%)",
        }}
      />

      {/* Background gradient */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[800px] h-[200px] sm:h-[400px] rounded-full opacity-[0.05] pointer-events-none blur-3xl"
        style={{ background: "radial-gradient(circle, #652b4e, transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section header */}
        <motion.header
          ref={headerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="inline-block px-3.5 py-1 sm:px-4 sm:py-1.5 bg-white/5 text-[#a05070] text-xs sm:text-sm font-semibold rounded-full mb-3 sm:mb-4 border border-white/10">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
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
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49h4.588c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49zm-4.587 7.51h3.117v-6.038H8.148c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019zm.001 1.471h3.117v3.117c0 1.665-1.355 3.019-3.019 3.019s-3.019-1.355-3.019-3.019 1.354-3.019 3.019-3.019h-.098z" />
              </svg>
            </div>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-semibold text-white">
                Click any project card
              </p>
              <p className="text-[11px] sm:text-xs text-gray-400">
                Opens the design prototype in Figma
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
