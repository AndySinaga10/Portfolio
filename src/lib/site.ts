export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://andisinaga.web.id"
).replace(/\/$/, "");

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/andi-sinaga/" },
  { label: "GitHub", href: "https://github.com/AndySinaga10" },
  { label: "Instagram", href: "https://www.instagram.com/andysinagaa/" },
];

export const person = {
  name: "Andi Yusup Sinaga",
  shortName: "Andi Sinaga",
  jobTitle: "Senior UI/UX Product Designer",
  email: "andysinagaa@gmail.com",
  sameAs: socialLinks.map((link) => link.href),
};

export const siteTitle = `${person.name} (Andi Sinaga) — Senior UI/UX Product Designer`;

export const siteDescription =
  "Andi Yusup Sinaga is a Senior UI/UX Product Designer in Jakarta with 9+ years in user research, prototyping and design systems. Explore the case studies.";
