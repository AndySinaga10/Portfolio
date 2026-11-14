import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL, person, siteDescription, siteTitle } from "@/lib/site";

const satoshi = localFont({
  variable: "--font-satoshi",
  display: "swap",
  src: [
    { path: "./fonts/Satoshi-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-700.woff2", weight: "700", style: "normal" },
  ],
});

const cabinetGrotesk = localFont({
  variable: "--font-cabinet",
  display: "swap",
  src: [
    { path: "./fonts/CabinetGrotesk-800.woff2", weight: "800", style: "normal" },
    { path: "./fonts/CabinetGrotesk-900.woff2", weight: "900", style: "normal" },
  ],
});

export const viewport: Viewport = {
  themeColor: "#4a1538",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// Screenshot of the homepage hero. Give the file a new name when replacing it,
// because WhatsApp, LinkedIn and others cache a share image by its URL.
const ogImage = "/og/home.jpg";
const ogImageAlt =
  "Andi Yusup Sinaga, Senior UI/UX Product Designer, standing in front of the words Product Designer";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteTitle,
    template: `%s | ${person.name}`,
  },
  description: siteDescription,
  applicationName: `${person.name} Portfolio`,
  keywords: [
    "Andi Yusup Sinaga",
    "Andi Sinaga",
    "Andi Sinaga UI/UX",
    "Andi Yusup Sinaga UI/UX Designer",
    "UI/UX Designer",
    "Product Designer",
    "Senior UI/UX Designer",
    "UX Designer Indonesia",
    "Design System",
    "UX Case Study",
    "Portfolio",
  ],
  authors: [{ name: person.name, url: SITE_URL }],
  creator: person.name,
  publisher: person.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: `${person.name} Portfolio`,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
    images: [{ url: ogImage, width: 1200, height: 630, alt: ogImageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "design",
};

interface LayoutProps {
  children: React.ReactNode;
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${person.name} Portfolio`,
      alternateName: [person.shortName, `${person.shortName} Portfolio`],
      description: siteDescription,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: person.name,
      alternateName: [person.shortName, "Andi Y. Sinaga"],
      givenName: "Andi",
      additionalName: "Yusup",
      familyName: "Sinaga",
      jobTitle: person.jobTitle,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "ID",
      },
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of Indonesia" },
        { "@type": "CollegeOrUniversity", name: "State Polytechnic of Jakarta" },
      ],
      description: siteDescription,
      url: SITE_URL,
      image: `${SITE_URL}/Andi.png`,
      email: `mailto:${person.email}`,
      knowsAbout: [
        "UI Design",
        "UX Design",
        "Product Design",
        "Design Systems",
        "Prototyping",
        "Usability Testing",
        "UX Research",
      ],
      sameAs: person.sameAs,
      mainEntityOfPage: { "@id": `${SITE_URL}/#website` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning className={`${satoshi.variable} ${cabinetGrotesk.variable} h-full antialiased`}>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-cream text-plum overflow-x-hidden selection:bg-coral selection:text-plum"
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
