import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jahan Polymers | Premium Polycarbonate Sheets Manufacturer",
    template: "%s | Jahan Polymers"
  },
  description: "India's leading manufacturer of high-quality Polycarbonate sheets. Specializing in Multiwall, Solid Compact, Diamond, and Embossed sheets. UV Protection, Unbreakable, and Best in Class durability.",
  keywords: ["Polycarbonate Sheets", "Jahan Polymers", "JumboLite", "Roofing Sheets", "Industrial Roofing", "Greenhouse Cladding", "Compact Polycarbonate", "Diamond Textured Sheets", "Jaipur Manufacturer"],
  authors: [{ name: "Jahan Polymers Pvt. Ltd." }],
  creator: "Jahan Polymers",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jahanpolymers.com",
    title: "Jahan Polymers | Premium Polycarbonate Sheets",
    description: "Discover superior quality Polycarbonate sheets for industrial, agricultural, and residential use. Engineered for strength and clarity.",
    siteName: "Jahan Polymers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahan Polymers | Premium Polycarbonate Solutions",
    description: "Leading manufacturer of UV-protected, high-impact Polycarbonate sheets.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-50 text-slate-900 overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
