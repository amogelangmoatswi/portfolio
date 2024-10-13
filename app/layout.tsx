import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amogelang Moatswi - Developer Portfolio",
  description: "Personal portfolio of Amogelang Moatswi, showcasing skills in development, network engineering, and graphic design.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-backgrou flex flex-col min-h-screen`}>
        <NavBar />
        <main className="flex-grow pt-16">{children}</main>
      </body>
    </html>
  );
}