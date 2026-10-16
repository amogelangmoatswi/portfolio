import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Amogelang Moatswi - Full-Stack Developer & Designer",
  description:
    "Personal portfolio of Amogelang Moatswi: Full-stack developer, graphic designer, and IT specialist with a background in Network Security and Computer Forensics.",
  openGraph: {
    title: "Amogelang Moatswi - Full-Stack Developer & Designer",
    description:
      "Full-stack developer, graphic designer, and IT specialist based in Botswana.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amogelang Moatswi - Full-Stack Developer & Designer",
    description:
      "Full-stack developer, graphic designer, and IT specialist based in Botswana.",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning data-scroll-behavior="smooth">
      <body className="font-sans bg-background text-foreground flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-grow pt-16">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}