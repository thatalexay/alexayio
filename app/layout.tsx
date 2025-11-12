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
  keywords: [
    "Alex Au-Yeung",
    "Full Stack Developer",
    "Technical Leader",
    "CTO",
    "Fractional CTO",
    "React Developer",
    "NextJS",
    "Flutter",
    "AI Products",
    "Product Architecture",
    "Startup CTO",
    "Hong Kong Developer",
    "Melbourne Developer",
    "Livestream Commerce",
    "Adtech",
    "Ecommerce",
  ],
  authors: [{ name: "Alex Au-Yeung", url: "https://a-y.io" }],
  creator: "Alex Au-Yeung",
  publisher: "Alex Au-Yeung",
  metadataBase: new URL("https://a-y.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Alex Au-Yeung | Technical Leader & Founder",
    description: "Technical Leader & Founder with 20+ years building and scaling digital products across startups, adtech, and ecommerce.",
    url: "https://a-y.io",
    siteName: "Alex Au-Yeung Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/profile-500x500.jpg",
        width: 500,
        height: 500,
        alt: "Alex Au-Yeung - Technical Leader & Founder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Au-Yeung | Technical Leader & Founder",
    description: "Technical Leader & Founder with 20+ years building and scaling digital products",
    images: ["/profile-500x500.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when you set them up
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
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
