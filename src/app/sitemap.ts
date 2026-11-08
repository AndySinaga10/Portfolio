import type { MetadataRoute } from "next";
import { caseStudies } from "@/data/caseStudies";
import { SITE_URL } from "@/lib/site";

// Date the homepage content last changed. Update it when editing the homepage.
const homeLastModified = "2026-11-08";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, lastModified: homeLastModified },
    ...caseStudies.map((study) => ({
      url: `${SITE_URL}/projects/${study.slug}`,
      lastModified: study.lastModified,
    })),
  ];
}
