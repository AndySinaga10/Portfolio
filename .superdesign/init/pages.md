# Page dependency trees

## `/`
- src/app/page.tsx
- src/app/layout.tsx, src/app/globals.css, src/lib/site.ts
- src/components/layout/Navbar.tsx, src/components/layout/Footer.tsx
- src/components/sections/HeroSection.tsx
- src/components/sections/ProjectsSection.tsx
- src/components/sections/ExperienceSection.tsx + src/data/experience.ts
- src/components/sections/EducationSection.tsx + src/data/education.ts
- src/components/sections/SkillsSection.tsx
- src/components/sections/ContactSection.tsx (posts to src/app/api/contact/route.ts)

## `/projects/*`
Each is a self-contained page.tsx using next/image, next/link and lucide-react, with data arrays inline.
