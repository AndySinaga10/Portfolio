import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#f8f7f4] text-[#1a1a2e]">
        {children}
      </body>
    </html>
  );
}
