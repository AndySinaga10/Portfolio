import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const projectSlugs = ["pashouses", "nadi-refund", "nadi-highlight"];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    ...projectSlugs.map((slug) => ({
      url: `${SITE_URL}/projects/${slug}`,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    })),
  ];
}
