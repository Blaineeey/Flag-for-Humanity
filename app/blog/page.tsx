import type { Metadata } from "next"
import { Header } from "@/components/header"
import { BlogList } from "@/components/blog-list"

export const metadata: Metadata = {
  title: "Blog | Flag of Humanity",
  description:
    "Read stories, insights, and updates about the Flag of Humanity movement - uniting our global community under one symbol.",
  keywords: [
    "Flag of Humanity blog",
    "global unity stories",
    "humanity movement",
    "world community",
    "environmental awareness",
    "global citizenship",
  ],
  openGraph: {
    title: "Blog | Flag of Humanity",
    description:
      "Read stories, insights, and updates about the Flag of Humanity movement - uniting our global community under one symbol.",
    url: "https://flagofhumanity.org/blog",
    siteName: "Flag of Humanity",
    images: [
      {
        url: "/Globe.jpg",
        width: 1200,
        height: 630,
        alt: "Flag of Humanity Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Flag of Humanity",
    description:
      "Read stories, insights, and updates about the Flag of Humanity movement.",
    images: ["/Globe.jpg"],
  },
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-6 py-20 pt-32">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Stories
            </h1>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Discover inspiring stories, insights, and updates from pioneers around the world who are helping spread the message of unity through the Flag of Humanity.
            </p>
          </div>
          <BlogList />
        </div>
      </div>
    </main>
  )
}
