export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  description: string;
  image: string;
  imageAlt: string;
  /** ISO 8601 date or interval covered by the project. */
  period: string;
  /** Date this page's content last changed. Update it when editing the page. */
  lastModified: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "pashouses",
    title: "Pashouses PropTech App",
    company: "Pashouses",
    description:
      "Canvassing tracker, lead distribution, chat and KPR calculator: how Andi Yusup Sinaga designed Pashouses' sales tools and property website.",
    image: "/og/pashouses.jpg",
    imageAlt: "Pashouses DashSales, tracker and KPR calculator shown on three phones",
    period: "2022-10/2024-01",
    lastModified: "2026-11-08",
  },
  {
    slug: "nadi-refund",
    title: "Nadi Refund System",
    company: "Nadi Healthcare",
    description:
      "UX case study by Andi Yusup Sinaga: transforming traditional medical service refund workflows into a seamless semi-automated experience at Nadi Healthcare.",
    image: "/og/nadi-refund.jpg",
    imageAlt: "Nadi refund system UX case study shown on four phone screens",
    period: "2022-08",
    lastModified: "2026-11-08",
  },
  {
    slug: "nadi-highlight",
    title: "MyPharma App & Dashboard",
    company: "Nadi Healthcare",
    description:
      "How Andi Yusup Sinaga designed MyPharma, a medical e-commerce app and pharmacy dashboard covering prescriptions, checkout, refunds and subscriptions.",
    image: "/og/nadi-highlight.jpg",
    imageAlt: "MyPharma medical e-commerce mobile app screens for Nadi Healthcare",
    period: "2022-04",
    lastModified: "2026-11-08",
  },
];

export function getCaseStudy(slug: string) {
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) throw new Error(`Unknown case study: ${slug}`);
  return study;
}
