"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import ProjectCard from "@/components/product/ProjectCard";

const projects = [
  {
    id: 1,
    company: "Pashouses",
    title: "Projects Highlight at Pashouses",
    description:
      "This is my Project Highlight for Pashouses including Public Website desktop and internal mobile app like canvassing tracker, pencarian titik tertentu, etc. I'm also doing usability testing in Pashouses for some feature, and the report is showed in the portfolio detail.",
    tags: ["Web App", "Mobile App", "Usability Testing"],
    accent: "#2563eb",
    accentBg: "#eff6ff",
    thumbnail: "/pashouses.png",
    figmaUrl: "https://www.figma.com/proto/pcmGZ7erTE2zQ5uDVuIGLd/Andi-Y-Sinaga-Portfolio?node-id=763-37601&t=HiNVFLpoYApCKg1G-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=51%3A30&show-proto-sidebar=1",
  },
  {
    id: 2,
    company: "Nadi Healthcare",
    title: "Nadi Refund System UX Case",
    description:
      "Nadi Healthcare is the medical services that have already run in offline platform, so they willing to digitalize that services to mobile app at beginning, the refund system is also already running in traditional method and this project is to make it semi-automation.",
    tags: ["Healthcare", "Mobile App", "UX Research"],
    accent: "#0891b2",
    accentBg: "#ecfeff",
    thumbnail: "/nadi-refund.png",
    figmaUrl: "https://www.figma.com/proto/pcmGZ7erTE2zQ5uDVuIGLd/Andi-Y-Sinaga-Portfolio?node-id=461-69&t=HiNVFLpoYApCKg1G-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=51%3A30&show-proto-sidebar=1",
    reversed: true,
  },
  {
    id: 3,
    company: "Nadi Healthcare",
    title: "Project Highlight at Nadi",
    description:
      "Nadi have big product team and I responsible to manage feature called My Pharma. My Pharma is medical e-commerce to provide online transaction for user. user can directly buy non-RX required medicine or can upload prescription for RX Required product.",
    tags: ["E-Commerce", "Pharma", "Product Design"],
    accent: "#7c3aed",
    accentBg: "#f5f3ff",
    thumbnail: "/nadi-highlight.png",
    figmaUrl: "https://www.figma.com/proto/pcmGZ7erTE2zQ5uDVuIGLd/Andi-Y-Sinaga-Portfolio?node-id=752-6276&t=HiNVFLpoYApCKg1G-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=51%3A30&show-proto-sidebar=1",
  },
  {
    id: 4,
    company: "Nadi Healthcare",
    title: "MyPharma Prototype",
    description:
      "As a UX Designer i'm also responsible to prototyping the design to make sure the flow, the feel, the look, the experience is meet the requirements and expectation for best output, but not for forget to test the usability to take out stress point from User.",
    tags: ["Prototype", "Mobile App", "Usability Testing"],
    accent: "#059669",
    accentBg: "#ecfdf5",
    thumbnail: "/mypharma.png",
    figmaUrl: "https://www.figma.com/proto/t5RYxCI2jBDkibPeoBbqly/MyPharma?page-id=0%3A1&node-id=10668-22517&starting-point-node-id=9270%3A50419&t=WCuLU1hc0AVaewNI-1&fuid=1519166877991708250",
    reversed: true,
  },
  {
    id: 5,
    company: "National Logistic Ecosystem",
    title: "Mobile NLE Prototype",
    description:
      "Mobile NLE is a national wide application that use by Logistic Provider that registered in National Logistic Ecosystem. this app is cover booking transaction and documentation for Trucking, Shipping, and another logistic ecosystem.",
    tags: ["Logistics", "Mobile App", "Enterprise"],
    accent: "#dc2626",
    accentBg: "#fef2f2",
    thumbnail: "/nle-mobile.png",
    figmaUrl: "https://www.figma.com/proto/9K22neTq3AJiY9YZ4sRrTI/Mobile-NLE?page-id=0%3A1&node-id=2-80271&viewport=1647%2C1158%2C0.11&t=ae2U95m6ipWg1HSD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A80271&show-proto-sidebar=1",
  },
  {
    id: 6,
    company: "National Logistic Ecosystem",
    title: "NLE Multi Destination UX Case",
    description:
      "NLE is a government project to build online ecosystem for logistic procedure in indonesia, so this app will centralize tracking, request, and complete system in database. in this case we will the multi destination design problem that occurred during the development.",
    tags: ["Government", "UX Case", "Logistics"],
    accent: "#ea580c",
    accentBg: "#fff7ed",
    thumbnail: "/nle-multi.png",
    figmaUrl: "https://drive.google.com/file/d/1YhNFQ42cHVETDVe_RYhKYxwqbP0fZNHe/view",
    reversed: true,
  },
];

export default function ProjectsSection() {
  const [headerRef, headerVisible] = useScrollReveal<HTMLElement>();
  const [ctaRef, ctaVisible] = useScrollReveal<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <header
          ref={headerRef}
          className="text-center mb-16"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-semibold rounded-full mb-4 border border-blue-100">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-base leading-relaxed">
            A selection of projects I&rsquo;ve led or contributed to — spanning product
            design, UX research, and design systems. Click to view in Figma.
          </p>
        </header>

        {/* Project cards */}
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Note about Figma */}
        <div
          ref={ctaRef}
          className="mt-12 text-center"
          style={{
            opacity: ctaVisible ? 1 : 0,
            transform: ctaVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="w-8 h-8 bg-[#F24E1E] rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49 2.014-4.49 4.49s2.014 4.49 4.49 4.49h4.588c2.476 0 4.49-2.014 4.49-4.49s-2.014-4.49-4.49-4.49zm-4.587 7.51h3.117v-6.038H8.148c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.019 3.019 3.019zm.001 1.471h3.117v3.117c0 1.665-1.355 3.019-3.019 3.019s-3.019-1.355-3.019-3.019 1.354-3.019 3.019-3.019h-.098z"/>
              </svg>
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-[#1a1a2e]">View designs in Figma</p>
              <p className="text-xs text-gray-500">Click any project to open the Figma file</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
