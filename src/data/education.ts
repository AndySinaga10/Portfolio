export interface EducationItem {
  id: string;
  institution: string;
  institutionShort: string;
  degree: string;
  field: string;
  period: string;
  startYear: string;
  endYear: string;
  location: string;
  level: "Bachelor's Degree" | "Associate Degree" | "Professional Program";
  description: string;
  highlights: string[];
  accentColor: string;
}

export const educations: EducationItem[] = [
  {
    id: "ui",
    institution: "University of Indonesia",
    institutionShort: "UI",
    degree: "Bachelor of Computer Science (S.Kom)",
    field: "Computer Science",
    period: "January 2012 - June 2016",
    startYear: "2012",
    endYear: "2016",
    location: "Depok, West Java, Indonesia",
    level: "Bachelor's Degree",
    description:
      "Comprehensive study in computer science theory, software engineering methodologies, data structures, algorithms, and human-computer interaction (HCI).",
    highlights: [
      "Human-Computer Interaction & UI/UX Principles",
      "Software Engineering & Object-Oriented Architecture",
      "Algorithms, Data Structures & Database Management",
      "Interactive Multimedia & Information Systems",
    ],
    accentColor: "#facc15", // Makara UI gold/yellow
  },
  {
    id: "pnj",
    institution: "State Polytechnic of Jakarta",
    institutionShort: "PNJ",
    degree: "Associate Degree in Engineering (A.Md)",
    field: "Telematika (Telecommunications & Informatics)",
    period: "September 2008 - June 2011",
    startYear: "2008",
    endYear: "2011",
    location: "Depok, West Java, Indonesia",
    level: "Associate Degree",
    description:
      "Hands-on technical engineering education bridging telecommunications hardware, computer networking, embedded logic, and network programming.",
    highlights: [
      "Telecommunication Networks & Signal Processing",
      "Computer Network Protocols & Server Administration",
      "Embedded Systems & Hardware-Software Interfaces",
      "Practical Industrial Engineering Projects",
    ],
    accentColor: "#3b82f6", // PNJ blue
  },
  {
    id: "ccit-ftui",
    institution: "CEP CCIT FTUI",
    institutionShort: "CCIT FTUI",
    degree: "Professional Computing & IT Diploma",
    field: "Software Engineering",
    period: "September 2008 - June 2010",
    startYear: "2008",
    endYear: "2010",
    location: "Faculty of Engineering, University of Indonesia",
    level: "Professional Program",
    description:
      "Intensive software engineering curriculum by the Continuing Education Program - Center for Computing and Information Technology FTUI.",
    highlights: [
      "Core & Enterprise Software Development",
      "Relational Database Design & SQL Optimization",
      "Web Technologies, Scripting & Client-Server Systems",
      "Agile Project Delivery & Software Quality Assurance",
    ],
    accentColor: "#8b5cf6", // Violet
  },
];

