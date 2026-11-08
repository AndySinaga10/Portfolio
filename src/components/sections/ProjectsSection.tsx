import { ArrowRight, ArrowUpRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FigmaPrototypeLink from "@/components/product/FigmaPrototypeLink";

const caseStudies = [
  {
    company: "Pashouses",
    title: "Pashouses",
    teaser: "Public website and internal mobile app featuring canvassing tracker and usability testing reports.",
    tags: ["Web App", "Mobile App", "Usability Testing"],
    thumbnail: "/thumbnail-pashouses.png",
    href: "/projects/pashouses",
  },
  {
    company: "Nadi Healthcare",
    title: "Nadi Refund System",
    teaser: "Transforming traditional medical service refund workflows into a seamless semi-automated experience.",
    tags: ["Healthcare", "Mobile App", "UX Research"],
    thumbnail: "/thumbnail-nadi-refund.png",
    href: "/projects/nadi-refund",
  },
  {
    company: "Nadi Healthcare",
    title: "MyPharma Mobile & Dashboard",
    teaser: "End-to-end medical e-commerce platform for purchasing over-the-counter and prescription medications.",
    tags: ["E-Commerce", "Pharma", "Product Design"],
    thumbnail: "/project-nadi.png",
    href: "/projects/nadi-highlight",
  },
];

const moreWork = [
  {
    company: "Nadi Healthcare",
    title: "MyPharma Prototype",
    teaser: "Interactive high-fidelity prototyping and usability testing to validate user flows and stress points.",
    isFigmaPrototype: true,
    thumbnail: "/mypharma-proto.png",
    href: "https://www.figma.com/proto/t5RYxCI2jBDkibPeoBbqly/MyPharma?page-id=0%3A1&node-id=10668-22517&starting-point-node-id=9270%3A50419&t=WCuLU1hc0AVaewNI-1&fuid=1519166877991708250",
  },
  {
    company: "National Logistic Ecosystem",
    title: "Mobile NLE Prototype",
    teaser: "Nationwide logistics ecosystem app covering booking transactions and cargo documentation.",
    isFigmaPrototype: true,
    thumbnail: "/Mobile-NLE.png",
    href: "https://www.figma.com/proto/9K22neTq3AJiY9YZ4sRrTI/Mobile-NLE?page-id=0%3A1&node-id=2-80271&viewport=1647%2C1158%2C0.11&t=ae2U95m6ipWg1HSD-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A80271&show-proto-sidebar=1",
  },
  {
    company: "National Logistic Ecosystem",
    title: "NLE Multi Destination UX Case",
    teaser: "Solving complex multi-destination tracking and logistical data workflows in a government ecosystem.",
    isFigmaPrototype: false,
    thumbnail: "/NLE-UX.png",
    href: "https://drive.google.com/file/d/1YhNFQ42cHVETDVe_RYhKYxwqbP0fZNHe/view",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-cream text-plum">
      <div className="mx-auto max-w-screen-2xl px-6 py-24 md:px-10 lg:py-32">
        <h2 className="section-title mb-16 font-black uppercase lg:mb-20">
          Selected
          <br />
          <span className="text-coral-ink">Work</span>
        </h2>

        <div className="flex flex-col gap-20 lg:gap-32">
          {caseStudies.map((project, index) => {
            const flipped = index % 2 === 1;
            return (
              <Link key={project.href} href={project.href} className="group block">
                <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
                  <div
                    className={`relative aspect-[846/471] overflow-hidden bg-plum lg:col-span-8 ${
                      flipped ? "lg:order-2" : ""
                    }`}
                  >
                    <Image
                      src={project.thumbnail}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 66vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className={`lg:col-span-4 ${flipped ? "lg:order-1 lg:pr-8" : "lg:pl-8"}`}>
                    <p className="mb-4 text-xs font-bold uppercase tracking-widest">
                      Case study {String(index + 1).padStart(2, "0")} &middot; {project.company}
                    </p>
                    <h3 className="mb-4 text-4xl font-extrabold leading-none transition-colors group-hover:text-coral-ink md:text-5xl">
                      {project.title}
                    </h3>
                    <p className="mb-6 text-lg leading-relaxed">{project.teaser}</p>
                    <ul className="mb-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-plum px-3 py-1 text-xs font-bold uppercase tracking-wider"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                      Read case study
                      <ArrowRight
                        aria-hidden="true"
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <h3 className="mb-10 mt-24 border-t-4 border-plum pt-6 text-3xl font-extrabold uppercase tracking-tight md:text-4xl lg:mt-32">
          Prototypes &amp; documents
        </h3>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
          {moreWork.map((project) => {
            const cardClass = "group flex flex-col";
            const cardBody = (
              <>
                <div className="relative mb-5 aspect-[846/471] overflow-hidden bg-plum">
                  <Image
                    src={project.thumbnail}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-widest">{project.company}</p>
                <h4 className="mb-3 text-2xl font-extrabold leading-tight transition-colors group-hover:text-coral-ink">
                  {project.title}
                </h4>
                <p className="mb-4 leading-relaxed">{project.teaser}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
                  {project.isFigmaPrototype ? (
                    <>
                      Try the prototype
                      <Play aria-hidden="true" className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Open PDF case study
                      <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                      <span className="sr-only">(opens in a new tab)</span>
                    </>
                  )}
                </span>
              </>
            );

            return project.isFigmaPrototype ? (
              <FigmaPrototypeLink
                key={project.title}
                href={project.href}
                title={project.title}
                className={cardClass}
              >
                {cardBody}
              </FigmaPrototypeLink>
            ) : (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {cardBody}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
