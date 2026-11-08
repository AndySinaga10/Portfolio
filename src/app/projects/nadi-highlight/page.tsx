import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CaseStudyExtras from "@/components/product/CaseStudyExtras";
import { getCaseStudy } from "@/data/caseStudies";

const study = getCaseStudy("nadi-highlight");
const ogTitle = `${study.title} Case Study | Andi Yusup Sinaga`;

export const metadata: Metadata = {
  title: `${study.title} Case Study`,
  description: study.description,
  alternates: { canonical: "/projects/nadi-highlight" },
  openGraph: {
    type: "article",
    url: "/projects/nadi-highlight",
    title: ogTitle,
    description: study.description,
    images: [{ url: study.image, width: 1200, height: 630, alt: study.imageAlt }],
  },
  twitter: { card: "summary_large_image", title: ogTitle, images: [study.image] },
};

const accent = "#ff6f61";

const meta = [
  { label: "Product", value: "MyPharma Mobile & Dashboard" },
  { label: "Timeline", value: "April 2022" },
  { label: "Platform", value: "Mobile App & Web Dashboard" },
  { label: "Designer", value: "Andi Yusup Sinaga" },
];

const mobileFlows = [
  {
    title: "Homepage & Search",
    description:
      "Health categories, featured doctors and products lead into the catalogue. Search keeps recent queries within reach and returns matching products in the same layout as browsing.",
  },
  {
    title: "Product Detail",
    description:
      "Variations, dosage, ingredients, safety information and reviews sit on one page, with clear states for available, unavailable and prescription-required products. RX items replace Add to Cart with options to upload a prescription or consult a doctor.",
  },
  {
    title: "Cart & Checkout",
    description:
      "The cart groups prescription items with their expiry dates and flags out-of-stock products. Checkout covers delivery address, shipping method and payment through virtual accounts and Malaysian online banking, with biometric confirmation.",
  },
  {
    title: "Refund Status Progress",
    description:
      "Step-by-step refund tracking for customers, from waiting for approval to bank account input and payment delivered, ending with the refund evidence.",
  },
  {
    title: "Customer Subscription",
    description:
      "Customers compare Basic, Platinum, Premium and Aged Care plans and their benefits, get notified before a plan ends, and manage renewal, upgrades and vouchers from My Subscription.",
  },
];

const dashboardFlows = [
  {
    title: "Incoming Prescription Dashboard",
    description:
      "Pharmacy admins review incoming prescriptions, check the uploaded document, add the prescribed products and summarise the purchase for the customer in one place.",
  },
  {
    title: "Refund Dashboard",
    description:
      "Admins filter refunds by status, chat with buyers, check bank details and upload refund payment evidence, with each order's progress shown step by step.",
  },
];

function SectionLabel({
  as: Tag = "h2",
  children,
}: {
  as?: "h2" | "p";
  children: React.ReactNode;
}) {
  return (
    <Tag className="mb-4 flex items-center gap-2 font-sans text-xs font-semibold uppercase tracking-wider text-cream/85 sm:mb-5 sm:text-sm">
      <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: accent }} />
      {children}
    </Tag>
  );
}

function FlowGrid({ items }: { items: { title: string; description: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
      {items.map((item) => (
        <div
          key={item.title}
          className="bg-plum-deep p-5 sm:p-6"
        >
          <h3 className="text-base sm:text-lg font-semibold text-cream mb-2">{item.title}</h3>
          <p className="text-xs sm:text-sm text-cream/85 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default function NadiHighlightProjectPage() {
  return (
    <main className="min-h-screen bg-plum text-cream">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 pt-28 pb-12 sm:pt-32 sm:pb-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-cream/85 hover:text-coral transition-colors mb-8 sm:mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <SectionLabel as="p">Nadi Healthcare · Project Highlight</SectionLabel>

        <h1 className="font-display text-5xl sm:text-7xl font-black uppercase leading-[0.95] tracking-tight mb-4">
          MyPharma Mobile and Dashboard
        </h1>

        <p className="text-cream/85 text-sm sm:text-base leading-relaxed max-w-2xl mb-10">
          End-to-end medical e-commerce platform for purchasing
          over-the-counter and prescription medications, paired with an admin
          dashboard for pharmacy operations.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {["E-Commerce", "Pharma", "Product Design"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-bold uppercase tracking-wider border"
              style={{
                color: accent,
                backgroundColor: `${accent}18`,
                borderColor: `${accent}55`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative w-full overflow-hidden bg-plum-deep mb-12">
          <Image
            src="/project-nadi.png"
            alt={study.imageAlt}
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20">
          {meta.map((item) => (
            <div
              key={item.label}
              className="bg-plum-deep p-4 sm:p-5"
            >
              <p className="text-[11px] sm:text-xs text-cream/75 uppercase tracking-wider mb-1.5">
                {item.label}
              </p>
              <p className="text-sm sm:text-base font-semibold text-cream">{item.value}</p>
            </div>
          ))}
        </div>

        <section className="mb-16 sm:mb-20">
          <SectionLabel>Project Overview</SectionLabel>
          <div className="space-y-4 text-sm sm:text-base text-cream/85 leading-relaxed max-w-3xl">
            <p>
              MyPharma is the medical e-commerce part of Nadi, a digital healthcare platform in
              Malaysia. As Senior UX Designer, I worked on the customer mobile app and the
              dashboard that pharmacy admins use to process orders behind it.
            </p>
            <p>
              Selling medicine differs from general e-commerce because not every product can go
              straight into the cart. The main design challenge was making that difference clear:
              prescription-required products are flagged throughout browsing, and their product
              pages lead customers to upload a prescription or consult a doctor instead.
            </p>
            <p>
              The same thinking connects both sides of the product. What a customer uploads on
              mobile arrives in the admin&rsquo;s prescription queue, and a refund started by an
              admin appears as a status the customer can follow, step by step.
            </p>
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <SectionLabel>Mobile App</SectionLabel>
          <FlowGrid items={mobileFlows} />
        </section>

        <section className="mb-16 sm:mb-20">
          <SectionLabel>Admin Dashboard</SectionLabel>
          <FlowGrid items={dashboardFlows} />
        </section>

        <section>
          <SectionLabel>Full Project Highlight</SectionLabel>
          <div className="relative w-full overflow-hidden bg-plum-deep">
            <Image
              src="/nadi-mypharma-highlight.jpg"
              alt="MyPharma full project highlight — homepage, search, product detail, cart, checkout, refund status, prescription dashboard, refund dashboard and customer subscription screens"
              width={1600}
              height={13155}
              sizes="(max-width: 768px) 100vw, 1024px"
              className="w-full h-auto"
            />
          </div>
        </section>

        <CaseStudyExtras slug="nadi-highlight" />
      </div>
    </main>
  );
}
