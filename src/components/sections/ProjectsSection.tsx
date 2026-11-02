"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    company: "Pashouses",
    title: "Projects Highlight at Pashouses",
    teaser: "Public website and internal mobile app featuring canvassing tracker and usability testing reports.",
    tags: ["Web App", "Mobile App", "Usability Testing"],
    accent: "#e07a9e",
    thumbnail: "/thumbnail-pashouses.png",
    href: "/projects/pashouses",
    external: false,
  },
  {
    id: 2,
    company: "Nadi Healthcare",
    title: "Nadi Refund System UX Case",
    teaser: "Transforming traditional medical service refund workflows into a seamless semi-automated experience.",
    tags: ["Healthcare", "Mobile App", "UX Research"],
    accent: "#0891b2",
    thumbnail: "/thumbnail-nadi-refund.png",
    href: "/projects/nadi-refund",
    external: false,
  },
  {
    id: 3,
    company: "Nadi Healthcare",
    title: "Project Highlight at Nadi",
    teaser: "End-to-end medical e-commerce platform for purchasing over-the-counter and prescription medications.",
    tags: ["E-Commerce", "Pharma", "Product Design"],
    accent: "#6366f1",
    thumbnail: "/project-nadi.png",
    href: "/projects/nadi-highlight",
    external: false,
  },
  {
    id: 4,
    company: "Nadi Healthcare",
    title: "MyPharma Prototype",
    teaser: "Interactive high-fidelity prototyping and usability testing to validate user flows and stress points.",
    tags: ["Prototype", "Mobile App", "Usability Testing"],
    accent: "#10b981",
    thumbnail: "/mypharma-proto.png",
    href: "https://www.figma.com/proto/t5RYxCI2jBDkibPeoBbqly/MyPharma?page-id=0%3A1&node-id=10668-22517&starting-point-node-id=9270%3A50419&t=WCuLU1hc0AVaewNI-1&fuid=1519166877991708250",
    external: true,
  },
  {
    id: 5,
    company: "National Logistic Ecosystem",
    title: "Mobile NLE Prototype",
    teaser: "Nationwide logistics ecosystem app covering booking transactions and cargo documentation.",
    tags: ["Logistics", "Mobile App", "Enterprise"],
    accent: "#ef4444",
    thumbnail: "/Mobile-NLE.png",
    href: "https://www.figma.com/proto/9K22neTq3AJiY9YZ4sRrTI/Mobile-NLE?page-id=0%3A1&node-id=2-80271&viewport=1647%2C1158%2C0.11&t=ae2U95m6ipWg1HSD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A80271&show-proto-sidebar=1",
    external: true,
  },
  {
    id: 6,
    company: "National Logistic Ecosystem",
    title: "NLE Multi Destination UX Case",
    teaser: "Solving complex multi-destination tracking and logistical data workflows in a government ecosystem.",
    tags: ["Government", "UX Case", "Logistics"],
    accent: "#f97316",
    thumbnail: "/NLE-UX.png",
    href: "https://drive.google.com/file/d/1YhNFQ42cHVETDVe_RYhKYxwqbP0fZNHe/view",
    external: true,
  },
];

const MotionLink = motion(Link);

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const Card = project.external ? motion.a : MotionLink;
  const linkProps = project.external
    ? { href: project.href, target: "_blank", rel: "noopener noreferrer" }
    : { href: project.href };

  return (
    <Card
      ref={ref}
      {...linkProps}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1] as const,
      }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative flex flex-col bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-2xl sm:rounded-3xl hover:border-white/20 hover:bg-white/[0.05] active:bg-white/[0.07] transition-all duration-300 overflow-hidden"
    >
      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-20 opacity-60 group-hover:opacity-100 transition-opacity"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        }}
      />

      {/* Hover ambient glow */}
      <div
        className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500 blur-3xl pointer-events-none z-0"
        style={{ backgroundColor: project.accent }}
      />

      {/* ── Thumbnail (Unobstructed 846/471 visual on top) ── */}
      <div
        className="relative w-full overflow-hidden rounded-t-2xl sm:rounded-t-3xl bg-black/40 border-b border-white/[0.06]"
        style={{ aspectRatio: "846/471" }}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          priority={index < 2}
        />
      </div>

      {/* ── Dedicated Text Section (Below thumbnail) ── */}
      <div className="relative z-10 flex flex-col flex-1 p-5 sm:p-6 md:p-7">
        {/* Company & Arrow button */}
        <div className="flex items-center justify-between mb-3">
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
        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white mb-2 group-hover:text-white transition-colors leading-snug">
          {project.title}
        </h3>

        {/* Teaser (ringkas & efisien) */}
        <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5 line-clamp-2">
          {project.teaser}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 sm:px-3 py-1 text-[10px] sm:text-[11px] font-medium rounded-full border"
              style={{
                color: project.accent,
                backgroundColor: `${project.accent}18`,
                borderColor: `${project.accent}35`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Card>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
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
          className="mt-12 sm:mt-16 text-center"
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
