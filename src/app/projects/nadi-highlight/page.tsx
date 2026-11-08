import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "MyPharma Mobile & Dashboard — Nadi Project Highlight",
  description:
    "Project by Andi Yusup Sinaga: end-to-end medical e-commerce platform for purchasing over-the-counter and prescription medications, with an admin dashboard.",
  alternates: { canonical: "/projects/nadi-highlight" },
  openGraph: {
    type: "article",
    url: "/projects/nadi-highlight",
    title: "MyPharma Mobile & Dashboard — Nadi Project Highlight | Andi Yusup Sinaga",
    description:
      "End-to-end medical e-commerce platform for purchasing over-the-counter and prescription medications.",
    images: [{ url: "/project-nadi.png", alt: "MyPharma mobile app and dashboard" }],
  },
  twitter: { card: "summary_large_image", images: ["/project-nadi.png"] },
};

const accent = "#ff6f61";

const meta = [
  { label: "Product", value: "MyPharma Mobile & Dashboard" },
  { label: "Timeline", value: "April 2022" },
  { label: "Platform", value: "Mobile App & Web Dashboard" },
  { label: "Designer", value: "Andi Sinaga" },
];

const mobileFlows = [
  {
    title: "Homepage & Search",
    description:
      "Health categories, featured doctors and products, with search results across the e-commerce catalogue.",
  },
  {
    title: "Product Detail",
    description:
      "Variations, dosage, ingredients, reviews and clear RX-required cautions, with options to upload a prescription or consult a doctor.",
  },
  {
    title: "Cart & Checkout",
    description:
      "Shipping method selection, delivery address and payment through virtual accounts and Malaysian online banking.",
  },
  {
    title: "Refund Status Progress",
    description:
      "Step-by-step refund tracking for customers, from waiting for approval to bank account input and payment delivered.",
  },
];

const dashboardFlows = [
  {
    title: "Incoming Prescription Dashboard",
    description:
      "Pharmacy admins review incoming prescriptions and process RX orders in one place.",
  },
  {
    title: "Refund Dashboard",
    description:
      "Admins filter refunds by status, chat with buyers, check bank details and upload refund payment evidence.",
  },
  {
    title: "Customer Subscription",
    description:
      "An overview of customer subscriptions with key numbers at a glance.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4 sm:mb-5">
      <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: accent }} />
      <span className="text-xs sm:text-sm font-semibold text-cream/85 uppercase tracking-wider">
        {children}
      </span>
    </div>
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
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-cream/85 hover:text-coral transition-colors mb-8 sm:mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <SectionLabel>Nadi Healthcare · Project Highlight</SectionLabel>

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
            alt="MyPharma mobile app and dashboard screens"
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
      </div>
    </main>
  );
}
