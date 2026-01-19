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
  title: {
    default: "Jahan Polymers Private Limited | Leading Manufacturer of Polycarbonate & Acrylic Sheets in Jaipur",
    template: "%s | Jahan Polymers Private Limited"
  },
  description: "Jahan Polymers Pvt Ltd is a premier manufacturer of high-quality JP JumboLite polycarbonate sheets, acrylic sheets, and customized plastic solutions based in Jaipur, Rajasthan.",
  keywords: ["Polycarbonate Sheet Manufacturer", "JP JumboLite", "Acrylic Sheets Jaipur", "Polycarbonate Compact Sheets", "Roofing Sheets", "Jahan Polymers Private Limited", "Jahan Ploymers", "Polycarbonate Diamond Sheets", "Polycarbonate Embossed Sheets"],
  authors: [{ name: "Jahan Polymers Pvt. Ltd." }],
  creator: "Jahan Polymers Private Limited",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jahanpolymers.com",
    title: "Jahan Polymers Private Limited | JP JumboLite",
    description: "Jahan Polymers Pvt Ltd - Manufacturer and Exporter of Polycarbonate Compact, Diamond, Embossed, and Roofing Sheets.",
    siteName: "Jahan Polymers Private Limited",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahan Polymers Private Limited | JP JumboLite",
    description: "Best Manufacturer of Polycarbonate & Acrylic Sheets in Jaipur (JP JumboLite).",
  },
  robots: {
    index: true,
    follow: true,
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Jahan Polymers Private Limited",
  "alternateName": "Jahan Ploymers",
  "url": "https://jahanpolymers.com",
  "logo": "https://jahanpolymers.com/icon.png",
  "foundingDate": "2023-01-16",
  "legalName": "Jahan Polymers Private Limited",
  "description": "Manufacturer and Exporter of JP JumboLite Polycarbonate and Acrylic Sheets.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "F-126-127, RIICO Industrial Area Bagru, Ext IInd, Bagru",
    "addressLocality": "Jaipur",
    "addressRegion": "Rajasthan",
    "postalCode": "303007",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "sales",
    "email": "jahanpolimars88@gmail.com"
  },
  "sameAs": [
    "https://www.facebook.com/people/Jahan-Polymers/61561305820022/#",
    "https://www.instagram.com/jp_jumbolite"
  ],
  "founder": [
    { "@type": "Person", "name": "Roshan Kumar Chhajer" },
    { "@type": "Person", "name": "Yash Choudhary" },
    { "@type": "Person", "name": "Vijeta Choudhary" }
  ]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
