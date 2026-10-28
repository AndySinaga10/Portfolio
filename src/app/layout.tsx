import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

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
  title: "Andi Sinaga — UI/UX Product Designer",
  description:
    "Senior UI/UX Designer with 8+ years of experience crafting digital products that create impact.",
  openGraph: {
    title: "Andi Sinaga — UI/UX Product Designer",
    description: "Senior UI/UX Designer crafting digital products that create impact.",
    type: "website",
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0f] text-white overflow-x-hidden selection:bg-blue-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
