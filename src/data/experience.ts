export interface ExperienceItem {
  id: string;
  company: string;
  companyNote?: string;
  role: string;
  period: string;
  type: "Full-time" | "Contract" | "Freelance" | "Lead";
  isCurrent?: boolean;
  location?: string;
  description: string[];
  technologies: string[];
  accentColor: string;
  category: "design" | "engineering" | "leadership";
}

export const experiences: ExperienceItem[] = [
  {
    id: "oldo-digital",
    company: "OLDO DIGITAL",
    companyNote: "MyTelkomsel App Official Vendor",
    role: "UI/UX Designer",
    period: "May 2025 - Present",
    type: "Contract",
    isCurrent: true,
    location: "Jakarta, Indonesia",
    description: [
      "Responsible for revamping MyTelkomsel App Onboarding flow and Homepage to drive higher user engagement and retention.",
      "Conduct in-depth market visits and qualitative user interviews to gather direct feedback from diverse user personas across Indonesia.",
      "Collaborate cross-functionally with Telkomsel stakeholders and engineering squads to ensure pixel-perfect design delivery.",
    ],
    technologies: ["Figma", "User Research", "Mobile App UX", "Design Systems", "Usability Testing"],
    accentColor: "#ef4444", // Telkomsel signature red/crimson accent
    category: "design",
  },
  {
    id: "bumipa-medika",
    company: "BUMIPA MEDIKA INDONESIA",
    role: "UI/UX Designer",
    period: "August 2024 - April 2025",
    type: "Full-time",
    isCurrent: false,
    location: "Jakarta, Indonesia",
    description: [
      "Analyzed and architected complex ERP Application modules tailored to critical company business processes and workflows.",
      "Served as an associate developer to bridge design and technical implementation within the Odoo ERP Application framework.",
      "Standardized UI components for healthcare supply chain management and clinic operational software.",
    ],
    technologies: ["Odoo ERP", "Systems Design", "Information Architecture", "Prototyping", "B2B SaaS"],
    accentColor: "#3b82f6",
    category: "design",
  },
  {
    id: "freelance-isafe-halalfi",
    company: "Freelance (iSafe & HalalFi)",
    role: "QA Manual Tester & Lead Designer",
    period: "February 2024 - August 2024",
    type: "Freelance",
    isCurrent: false,
    location: "Remote",
    description: [
      "Led end-to-end product design as Lead Designer for the HalalFi Blockchain platform, crafting compliant Web3 finance experiences.",
      "Executed manual QA test cases, bug tracking, and release quality verification for the iSafe application.",
      "Synthesized user testing results to iterate quickly on token transaction flows and secure authentication interfaces.",
    ],
    technologies: ["Web3 / Blockchain", "QA Manual Testing", "Fintech UX", "Figma", "Design Leadership"],
    accentColor: "#10b981",
    category: "leadership",
  },
  {
    id: "pashouses",
    company: "PASHOUSES",
    role: "Senior Product Designer",
    period: "November 2022 - January 2024",
    type: "Full-time",
    isCurrent: false,
    location: "Jakarta, Indonesia",
    description: [
      "Owned end-to-end design implementation across both desktop web platforms and internal mobile applications (Canvassing Tracker, Point-of-Interest Search).",
      "Partnered with Product Managers and leadership to identify overlooked friction points, streamline prop-tech transactions, and elevate user experience.",
      "Led the design team, managed daily sprint tickets, and mentored junior designers through design critiques and reviews.",
      "Conducted on-ground usability testing sessions and published data-backed UX case studies for key stakeholders.",
    ],
    technologies: ["PropTech", "Design Leadership", "Mobile App", "Web Platform", "Design Systems", "Usability Testing"],
    accentColor: "#8b5cf6",
    category: "leadership",
  },
  {
    id: "nadi-healthcare",
    company: "NADI HEALTHCARE MALAYSIA",
    role: "Senior UX Designer",
    period: "March 2022 - November 2022",
    type: "Full-time",
    isCurrent: false,
    location: "Kuala Lumpur, Malaysia (Remote)",
    description: [
      "Spearheaded wireframing and low-fidelity prototypes for healthcare modules, notably 'My Pharma' medical e-commerce and digital refund automation.",
      "Facilitated usability testing to gain deep behavioral insights and eliminate cognitive overload in prescription verification workflows.",
      "Worked hands-on with front-end developers to ensure seamless interaction transitions and accessibility compliance.",
    ],
    technologies: ["HealthTech", "E-Commerce", "UX Research", "Interactive Prototyping", "Design Handoff"],
    accentColor: "#06b6d4",
    category: "design",
  },
  {
    id: "dasa-aprillindo",
    company: "DASA APRILINDO SENTOSA",
    role: "UI/UX Designer",
    period: "February 2021 - March 2022",
    type: "Full-time",
    isCurrent: false,
    location: "Jakarta, Indonesia",
    description: [
      "Led the Mobile Apps design team for the National Logistics Ecosystem (NLE Indonesia) mobile application.",
      "Designed the comprehensive NLE Desktop web portal end-to-end, harmonizing multi-agency government & enterprise logistics workflows.",
      "Built cohesive design tokens and reusable interface libraries to accelerate multi-platform frontend development.",
    ],
    technologies: ["Enterprise Logistics", "NLE Indonesia", "Design Systems", "Mobile UI", "Web App"],
    accentColor: "#f59e0b",
    category: "design",
  },
  {
    id: "traval-co",
    company: "TRAVAL.CO",
    role: "UI/UX Engineer",
    period: "February 2020 - January 2021",
    type: "Full-time",
    isCurrent: false,
    location: "Jakarta, Indonesia",
    description: [
      "Redesigned and rebuilt core Traval.co customer experience features across responsive desktop and mobile viewports.",
      "Architected and implemented a dynamic Trip Filter search feature, significantly improving travel discovery speed.",
      "Collaborated closely between design ideation and code implementation using modern web technologies.",
    ],
    technologies: ["UI/UX Engineering", "TravelTech", "Frontend Development", "Responsive Design", "JavaScript"],
    accentColor: "#3b82f6",
    category: "engineering",
  },
  {
    id: "tirto-id",
    company: "TIRTO.ID",
    role: "UI/UX Designer and Developer",
    period: "December 2017 - January 2020",
    type: "Full-time",
    isCurrent: false,
    location: "Jakarta, Indonesia",
    description: [
      "Co-led the desktop site redesign for Tirto.id, one of Indonesia's premier investigative journalism portals.",
      "Designed and coded award-winning interactive Visual Reports, combining data journalism, infographics, and dynamic web animations.",
      "Optimized reader engagement, typography scale, page speed, and mobile responsiveness.",
    ],
    technologies: ["Interactive Journalism", "Data Visualization", "Frontend Development", "CSS/HTML5", "UI Design"],
    accentColor: "#ec4899",
    category: "engineering",
  },
  {
    id: "sumber-karya-coprinos",
    company: "PT SUMBER KARYA COPRINOS",
    role: "Front End Developer / Freelance",
    period: "July 2016 - December 2017",
    type: "Freelance",
    isCurrent: false,
    location: "Jakarta, Indonesia",
    description: [
      "Engineered the E-Kinerja web application for the Ministry of Public Works and Public Housing (PUPR) as UI/UX & Frontend Engineer.",
      "Built the Hospital Information Management System (SIMRS) interface for RSUD Suradadi with high data reliability.",
      "Transformed business logic requirements into intuitive forms, dashboards, and role-based access control panels.",
    ],
    technologies: ["E-Government", "Healthcare SIMRS", "PUPR", "Frontend Dev", "Information Architecture"],
    accentColor: "#6366f1",
    category: "engineering",
  },
  {
    id: "ibm-indonesia",
    company: "IBM INDONESIA",
    role: "Team Leader IT Operational",
    period: "June 2012 - July 2016",
    type: "Full-time",
    isCurrent: false,
    location: "Jakarta, Indonesia",
    description: [
      "Led IT operational teams including frontline IT support and 3rd party vendor engineering squads on a day-to-day basis.",
      "Managed and reported mission-critical change requests for IBM IGA Indonesia to IGA ASEAN regional headquarters.",
      "Managed AIX enterprise servers, scheduled enterprise backups, and ensured high-availability disaster recovery compliance.",
    ],
    technologies: ["Enterprise IT", "AIX Unix", "Team Leadership", "Disaster Recovery", "IT Operations"],
    accentColor: "#2563eb",
    category: "leadership",
  },
];

