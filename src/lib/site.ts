export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://andisinaga.web.id"
).replace(/\/$/, "");

export const person = {
  name: "Andi Yusup Sinaga",
  shortName: "Andi Sinaga",
  jobTitle: "Senior UI/UX Product Designer",
  email: "andysinagaa@gmail.com",
  sameAs: [
    "https://github.com/AndySinaga10",
    "https://www.linkedin.com/in/andi-sinaga-a0ba65114/",
  ],
};

export const siteTitle = `${person.name} (Andi Sinaga) — Senior UI/UX Product Designer`;

export const siteDescription =
  "Andi Yusup Sinaga (Andi Sinaga) is a Senior UI/UX Product Designer with 9+ years of experience in user-centered design, prototyping, and design systems. Explore case studies for Pashouses, Nadi Healthcare, and National Logistic Ecosystem.";
