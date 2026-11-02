import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Nadi Refund System — UX Case Study",
  description:
    "UX case study by Andi Yusup Sinaga: transforming traditional medical service refund workflows into a seamless semi-automated experience at Nadi Healthcare.",
  alternates: { canonical: "/projects/nadi-refund" },
  openGraph: {
    type: "article",
    url: "/projects/nadi-refund",
    title: "Nadi Refund System UX Case Study | Andi Yusup Sinaga",
    description:
      "Transforming traditional medical service refund workflows into a seamless semi-automated experience.",
    images: [{ url: "/thumbnail-nadi-refund.png", alt: "Nadi refund system UX case study" }],
  },
  twitter: { card: "summary_large_image", images: ["/thumbnail-nadi-refund.png"] },
};

const accent = "#0891b2";

const meta = [
  { label: "Role", value: "UX Designer" },
  { label: "Timeline", value: "August 2022" },
  { label: "Responsibilities", value: "Wireframe, User Flow, UI Design" },
  { label: "Product", value: "Nadi Health (MVP)" },
];

const process = ["Empathise", "Define", "Ideate", "Design", "Test / Understand"];

const painPoints = [
  "Communication media is not simple",
  "Refund status, payment evidence and user data are not stored in one place",
  "Not well organized, Excel must be updated after every conversation",
  "Must manually check which users already gave their bank account info",
  "Human-error prone: manual contact and manual updates",
  "Hard to sort users who have or haven't been refunded",
];

const gains = [
  "User data is organized in one system",
  "Bank accounts and refund status are easy to manage",
  "Filter users that are not yet refunded",
  "Chat with users directly from the system",
  "Approve, reject and sort refunds via the system",
];

const ideations = [
  {
    title: "Order Detail",
    body: "Tapping a product in Activities used to jump straight to track & trace. I added a new Order Detail screen in between, with refund status and track & trace entry points, so users have one clear place to start.",
  },
  {
    title: "Notification",
    body: "Notifications report order progress, track & trace, and refund status. Tapping one deep-links to the relevant screen, while Activities leads to Order Detail with delivery status, partially refunded products and the refund status button.",
  },
  {
    title: "Partial Product Refund",
    body: "When the warehouse admin rejects an order, the system initiates a full refund. If only some products are unavailable, unchecked items are flagged for refund on packing, and the mobile order detail updates each product's status.",
  },
  {
    title: "Iteration",
    body: "In lo-fi testing the delivery status sat too close to the refund flags, which could mislead users into reading it as part of the refund. I moved the delivery status to the top of the screen.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 mb-4 sm:mb-5">
      <div className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: accent }} />
      <span className="text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider">
        {children}
      </span>
    </div>
  );
}

export default function NadiRefundProjectPage() {
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

        <SectionLabel>Nadi Healthcare · UX Case Study</SectionLabel>

        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
          Nadi Refund System UX Case
        </h1>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mb-10">
          Transforming traditional medical service refund workflows into a
          seamless semi-automated experience.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          {["Healthcare", "Mobile App", "UX Research"].map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-xs font-medium rounded-full border"
              style={{
                color: accent,
                backgroundColor: `${accent}18`,
                borderColor: `${accent}35`,
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-black/40 border border-white/[0.08] mb-12">
          <Image
            src="/thumbnail-nadi-refund.png"
            alt="Nadi refund system screens"
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
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 sm:p-5"
            >
              <p className="text-[11px] sm:text-xs text-gray-500 uppercase tracking-wider mb-1.5">
                {item.label}
              </p>
              <p className="text-sm sm:text-base font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <section className="mb-16 sm:mb-20">
          <SectionLabel>Project Overview</SectionLabel>
          <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
            <p>
              NADI strives to enhance healthcare delivery through a digital
              platform for better and more accessible healthcare. Already
              operating offline in Malaysia, Nadi set out to build a medical
              app that handles the end-to-end journey, from doctor consultation
              until the medicine arrives at the user&rsquo;s door.
            </p>
            <p>
              This refund system helps the finance admin move the refund
              process from fully manual to semi-manual, managed by the system,
              preventing human errors that waste real money and impact the
              company&rsquo;s financial flow.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-7">
            <h3 className="text-lg sm:text-xl font-bold mb-3">The Problem</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              The existing refund procedure was fully manual: WhatsApp for
              communication and Microsoft Excel for data storage. It was error
              prone, difficult to manage, and made user information hard to
              find.
            </p>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-7">
            <h3 className="text-lg sm:text-xl font-bold mb-3">The Goal</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Make the procedure semi-manual so admins can easily reach users,
              the system stores the data, and a step-by-step flow (using the
              Zeigarnik effect) shows the right information to both customers
              and Nadi admins.
            </p>
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <SectionLabel>My Design Process</SectionLabel>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl mb-6">
            I gathered information from the team using the existing procedure:
            how they used it, what was difficult, and how they thought it could
            be better. I aligned with the engineering team on constraints and
            limitations, then validated lo-fi and hi-fi designs with the
            product team and product owner.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {process.map((step, i) => (
              <span
                key={step}
                className="px-4 py-2 text-xs sm:text-sm font-medium rounded-full border border-white/10 bg-white/[0.03] text-gray-200"
              >
                <span style={{ color: accent }} className="mr-1.5 font-semibold">
                  {i + 1}
                </span>
                {step}
              </span>
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20">
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-7">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Pain Points</h3>
            <ul className="space-y-2.5">
              {painPoints.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-gray-400 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-red-400/80 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-7">
            <h3 className="text-lg sm:text-xl font-bold mb-4">Gains</h3>
            <ul className="space-y-2.5">
              {gains.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-gray-400 leading-relaxed">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: accent }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mb-16 sm:mb-20">
          <SectionLabel>Problem Solving</SectionLabel>
          <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-3xl">
            All refund data needs to live in one place. The system can ask
            users for their bank account, let them input it, and surface it on
            the admin screen. Together with the other teams, I designed a new
            flow and system so every refund scenario is prepared for.
          </p>
        </section>

        <section className="mb-16 sm:mb-20">
          <SectionLabel>Ideation</SectionLabel>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {ideations.map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5 sm:p-6"
              >
                <h3 className="text-base sm:text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionLabel>Full Case Study</SectionLabel>
          <div className="relative w-full overflow-hidden rounded-2xl sm:rounded-3xl bg-black/40 border border-white/[0.08]">
            <Image
              src="/nadi-refund-case-study-v2.jpg"
              alt="Nadi refund system full case study — affinity diagram, pain points, user flow, lo-fi and final designs for mobile and admin dashboard"
              width={1600}
              height={18189}
              sizes="(max-width: 768px) 100vw, 1024px"
              className="w-full h-auto"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
