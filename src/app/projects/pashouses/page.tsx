import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Pashouses Project Highlight — Web, Mobile App & Usability Testing",
  description:
    "Case study by Andi Yusup Sinaga: Pashouses public website and internal mobile app featuring canvassing tracker and usability testing reports.",
  alternates: { canonical: "/projects/pashouses" },
  openGraph: {
    type: "article",
    url: "/projects/pashouses",
    title: "Pashouses Project Highlight | Andi Yusup Sinaga",
    description:
      "Public website and internal mobile app featuring canvassing tracker and usability testing reports.",
    images: [{ url: "/thumbnail-pashouses.png", alt: "Pashouses project highlight" }],
  },
  twitter: { card: "summary_large_image", images: ["/thumbnail-pashouses.png"] },
};

const highlights = [
  {
    title: "Public Marketing Website",
    description:
      "A conversion-focused property listing site that helps prospective buyers discover and compare housing projects.",
  },
  {
    title: "Canvassing Tracker",
    description:
      "An internal mobile app for the field sales team to log visits, track leads, and monitor canvassing coverage in real time.",
  },
  {
    title: "Usability Testing",
    description:
      "Structured usability testing sessions that validated the end-to-end property sales workflow and surfaced friction points before launch.",
  },
];

export default function PashousesProjectPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-12 sm:py-20">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-8 sm:mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to projects
        </Link>

        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#e07a9e" }} />
          <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Pashouses
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Projects Highlight at Pashouses
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-10">
          Public website and internal mobile app featuring canvassing tracker
          and usability testing reports.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {["Web App", "Mobile App", "Usability Testing"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full border"
              style={{
                color: "#e07a9e",
                backgroundColor: "#e07a9e18",
                borderColor: "#e07a9e35",
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-black/40 border border-white/[0.08] mb-12">
          <Image
            src="/thumbnail-pashouses.png"
            alt="Pashouses project screens"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-6"
            >
              <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="flex items-center gap-2 mb-6 sm:mb-8">
            <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#e07a9e" }} />
            <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider">
              Full Project Breakdown
            </span>
          </div>

          <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-black/40 border border-white/[0.08]">
            <Image
              src="/pashouses-project-breakdown.jpg"
              alt="Pashouses full project breakdown — canvassing tracker, cluster marker, Instagram-integrated posting, WhatsApp chat, leads distribution, and KPR calculator flows"
              width={1600}
              height={11200}
              sizes="(max-width: 768px) 100vw, 1024px"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
