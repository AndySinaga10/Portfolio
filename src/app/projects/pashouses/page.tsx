import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CaseStudyExtras from "@/components/product/CaseStudyExtras";
import { getCaseStudy } from "@/data/caseStudies";

const study = getCaseStudy("pashouses");
const ogTitle = `${study.title} Case Study | Andi Yusup Sinaga`;

export const metadata: Metadata = {
  title: `${study.title} Case Study`,
  description: study.description,
  alternates: { canonical: "/projects/pashouses" },
  openGraph: {
    type: "article",
    url: "/projects/pashouses",
    title: ogTitle,
    description: study.description,
    images: [{ url: study.image, width: 1200, height: 630, alt: study.imageAlt }],
  },
  twitter: { card: "summary_large_image", title: ogTitle, images: [study.image] },
};

const accent = "#ff6f61";

const meta = [
  { label: "Role", value: "Senior Product Designer" },
  { label: "Timeline", value: "Oct 2022 – Jan 2024" },
  { label: "Platform", value: "Web & Mobile App" },
  { label: "Product", value: "Pashouses & DashSales" },
];

const scope = [
  {
    title: "Public Marketing Website",
    description:
      "A conversion-focused property listing site that helps prospective buyers discover and compare housing projects.",
  },
  {
    title: "Internal Sales App",
    description:
      "DashSales, an internal mobile app for the field sales team to manage inventory, log visits, track leads and monitor canvassing coverage.",
  },
  {
    title: "Usability Testing",
    description:
      "Structured usability testing sessions that validated the end-to-end property sales workflow and surfaced friction points before launch.",
  },
];

const features = [
  {
    title: "Canvassing Tracker",
    description:
      "Sales staff see their assigned areas in a to-do list, start a task and record the visit with a running timer, notes and quick access to leads. Finishing asks for confirmation, because the person submitting is responsible for the area they visited. A history tab then shows each visit's status and the route walked on the map.",
  },
  {
    title: "Cluster Marker",
    description:
      "The inventory map groups nearby houses into numbered clusters and shows individual houses by price. Staff can search by location or cluster name, switch between map and list, and tap a marker to open a property summary without leaving the map.",
  },
  {
    title: "Create Post, Integrated with Instagram",
    description:
      "Staff enter a property's J-Code, choose up to ten photos and review a generated description with specifications and hashtags before posting. The Next button stays disabled while too many photos are selected, and a failed upload offers a clear way to try again.",
  },
  {
    title: "Chat, Integrated with WhatsApp",
    description:
      "A conversation list and contact directory keep buyer chats inside the app. Each contact can hold structured details such as lead source, area, price range, the house of interest and property preferences, so the next conversation starts with context.",
  },
  {
    title: "Leads Distribution",
    description:
      "A push notification announces a new lead with the house and visit schedule. Staff can take or reject it from New Leads, follow up from My Leads, and review Missed and Rejected items. Rejecting asks for a reason, such as an out-of-range location or a schedule conflict, and quick replies speed up the first message.",
  },
  {
    title: "KPR Affordability Calculator",
    description:
      "On web and mobile, buyers enter their monthly income, existing installments and available down payment. The result shows the house price they can afford, the suggested maximum installment and the down payment required, followed by recommended houses by area, terms and answers to common questions.",
  },
];

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-cream/85 sm:mb-5 sm:text-sm">
      <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
      {children}
    </h2>
  );
}

export default function PashousesProjectPage() {
  return (
    <main className="min-h-screen bg-plum text-cream">
      <div className="mx-auto max-w-5xl px-6 pb-12 pt-28 sm:px-8 sm:pb-20 sm:pt-32">
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-cream/85 transition-colors hover:text-coral sm:mb-12"
        >
          <ArrowLeft aria-hidden="true" className="h-4 w-4" />
          Back to projects
        </Link>

        <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cream/85 sm:text-sm">
          <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
          Pashouses &middot; Project Highlight
        </p>

        <h1 className="mb-4 font-display text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-7xl">
          Designing the tools behind property sales
        </h1>

        <p className="mb-10 max-w-2xl text-sm leading-relaxed text-cream/85 sm:text-base">
          Public website and internal mobile app featuring canvassing tracker and usability
          testing reports.
        </p>

        <ul className="mb-12 flex flex-wrap gap-2">
          {["Web App", "Mobile App", "Usability Testing"].map((tag) => (
            <li
              key={tag}
              className="border border-coral/40 bg-coral/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-coral"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="relative mb-12 w-full overflow-hidden bg-plum-deep">
          <Image
            src="/thumbnail-pashouses.png"
            alt="Pashouses DashSales inventory, canvassing tracker and KPR calculator shown on three phones"
            width={1600}
            height={900}
            sizes="(max-width: 768px) 100vw, 1024px"
            className="h-auto w-full object-cover"
            priority
          />
        </div>

        <dl className="mb-16 grid grid-cols-2 gap-4 sm:mb-20 sm:grid-cols-4 sm:gap-6">
          {meta.map((item) => (
            <div key={item.label} className="flex flex-col-reverse justify-end bg-plum-deep p-4 sm:p-5">
              <dd className="text-sm font-semibold sm:text-base">{item.value}</dd>
              <dt className="mb-1.5 text-[11px] uppercase tracking-wider text-cream/75 sm:text-xs">
                {item.label}
              </dt>
            </div>
          ))}
        </dl>

        <section className="mb-16 sm:mb-20">
          <SectionHeading>Project Overview</SectionHeading>
          <div className="max-w-3xl space-y-4 text-sm leading-relaxed text-cream/85 sm:text-base">
            <p>
              Pashouses is an Indonesian property platform that helps people buy and sell houses,
              with listings across Greater Jakarta and support that extends to home financing
              (KPR). As Senior Product Designer, I owned design across the public website and the
              internal mobile tools the sales team used in the field.
            </p>
            <p>
              Property sales happens on the move. Staff travel between housing clusters, follow up
              with buyers over chat and promote listings on social media. The goal of this work was
              to bring those jobs into one mobile tool, so that visits, leads and conversations
              could be tracked in one place.
            </p>
            <p>
              Beyond the screens, I led the design team, managed daily sprint tickets, mentored
              junior designers through critiques, and ran on-ground usability testing with the
              people using the product.
            </p>
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <SectionHeading>Project Scope</SectionHeading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {scope.map((item) => (
              <div key={item.title} className="bg-plum-deep p-5 sm:p-6">
                <h3 className="mb-2 text-base font-semibold sm:text-lg">{item.title}</h3>
                <p className="text-xs leading-relaxed text-cream/85 sm:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <SectionHeading>Key Features</SectionHeading>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {features.map((item) => (
              <div key={item.title} className="bg-plum-deep p-5 sm:p-6">
                <h3 className="mb-2 text-base font-semibold sm:text-lg">{item.title}</h3>
                <p className="text-xs leading-relaxed text-cream/85 sm:text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading>Full Project Breakdown</SectionHeading>
          <div className="relative w-full overflow-hidden bg-plum-deep">
            <Image
              src="/pashouses-project-breakdown.jpg"
              alt="Pashouses full project breakdown: canvassing tracker, cluster marker, Instagram-integrated posting, WhatsApp chat, leads distribution, and KPR calculator flows"
              width={1600}
              height={11200}
              sizes="(max-width: 768px) 100vw, 1024px"
              className="h-auto w-full"
            />
          </div>
        </section>

        <CaseStudyExtras slug="pashouses" />
      </div>
    </main>
  );
}
