import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "EarthFlag Foundation - One Earth. One Flag.",
  description:
    "A proposal for the flag of planet Earth. One symbol of belonging. When we belong, we protect what we love.",
  keywords: [
    "Earth flag",
    "humanity flag",
    "global unity",
    "planet Earth",
    "world flag",
    "environmental protection",
    "global community",
    "one earth",
  ],
  authors: [{ name: "EarthFlag Foundation" }],
  creator: "EarthFlag Foundation",
  publisher: "EarthFlag Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://earthflag.org"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "EarthFlag Foundation - One Earth. One Flag.",
    description:
      "A proposal for the flag of planet Earth. One symbol of belonging. When we belong, we protect what we love.",
    url: "https://earthflag.org",
    siteName: "EarthFlag Foundation",
    images: [
      {
        url: "/Globe.jpg",
        width: 1200,
        height: 630,
        alt: "Earth from space - EarthFlag Foundation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EarthFlag Foundation - One Earth. One Flag.",
    description:
      "A proposal for the flag of planet Earth. One symbol of belonging. When we belong, we protect what we love.",
    images: ["/Globe.jpg"],
    creator: "@earthflag",
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
    google: "your-google-verification-code",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
