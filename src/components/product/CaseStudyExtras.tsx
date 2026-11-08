import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { caseStudies, getCaseStudy } from "@/data/caseStudies";
import { SITE_URL } from "@/lib/site";

// Closes a case study page with its structured data and a link to the next case study.
export default function CaseStudyExtras({ slug }: { slug: string }) {
  const study = getCaseStudy(slug);
  const url = `${SITE_URL}/projects/${slug}`;
  const index = caseStudies.indexOf(study);
  const next = caseStudies[(index + 1) % caseStudies.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CreativeWork",
        "@id": `${url}#case-study`,
        name: study.title,
        headline: `${study.title} case study`,
        description: study.description,
        url,
        image: `${SITE_URL}${study.image}`,
        temporalCoverage: study.period,
        dateModified: study.lastModified,
        inLanguage: "en",
        author: { "@id": `${SITE_URL}/#person` },
        creator: { "@id": `${SITE_URL}/#person` },
        about: { "@type": "Organization", name: study.company },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Projects", item: `${SITE_URL}/#projects` },
          { "@type": "ListItem", position: 3, name: study.title, item: url },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <nav aria-label="Next case study" className="mt-16 border-t-4 border-coral pt-8 sm:mt-24">
        <Link
          href={`/projects/${next.slug}`}
          className="group grid grid-cols-1 items-center gap-6 sm:grid-cols-2 sm:gap-8"
        >
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-widest">Next case study</p>
            <p className="mb-4 font-display text-4xl font-extrabold leading-none transition-colors group-hover:text-coral sm:text-5xl">
              {next.title}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider">
              Read case study
              <ArrowRight
                aria-hidden="true"
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
              />
            </span>
          </div>
          <div className="relative aspect-[1200/630] overflow-hidden bg-plum-deep">
            <Image
              src={next.image}
              alt={next.imageAlt}
              fill
              sizes="(max-width: 640px) 100vw, 480px"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
          </div>
        </Link>
      </nav>
    </>
  );
}
