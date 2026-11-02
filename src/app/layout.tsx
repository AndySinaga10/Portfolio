import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL, person, siteDescription, siteTitle } from "@/lib/site";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
    <html lang="en" suppressHydrationWarning className={`${plusJakarta.variable} h-full antialiased`}>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-[#0a0a0f] text-white overflow-x-hidden selection:bg-[#482439]/50 selection:text-white"
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
