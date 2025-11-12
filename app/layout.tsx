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
  title: "Alex Au-Yeung | Technical Leader & Founder",
  description: "Technical Leader & Founder with 20+ years building and scaling digital products across startups, adtech, and ecommerce. Full-stack engineer specializing in React, NextJS, Flutter, and AI-driven products.",
  keywords: ["Alex Au-Yeung", "Full Stack Developer", "Technical Leader", "CTO", "React", "NextJS", "Flutter", "AI Products"],
  authors: [{ name: "Alex Au-Yeung" }],
  openGraph: {
    title: "Alex Au-Yeung | Technical Leader & Founder",
    description: "Technical Leader & Founder with 20+ years building and scaling digital products",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
