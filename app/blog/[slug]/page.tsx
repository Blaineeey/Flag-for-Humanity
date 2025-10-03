import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { blogPosts } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { LazyImage } from "@/components/lazy-image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Flag of Humanity",
    }
  }

  return {
    title: `${post.title} | Flag of Humanity Blog`,
    description: post.excerpt,
    keywords: [...post.tags, "Flag of Humanity", "global unity"],
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://flagofhumanity.org/blog/${post.slug}`,
      siteName: "Flag of Humanity",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-6 py-20 pt-32">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link href="/blog">
            <Button
              variant="ghost"
              className="mb-8 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transform transition-all duration-200 hover:scale-105"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Stories
            </Button>
          </Link>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden mb-8 shadow-lg">
            <LazyImage
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gray-100 text-gray-700 hover:bg-gray-200"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex items-center text-gray-600 mb-8 pb-8 border-b border-gray-200">
            <span className="font-medium">By {post.author}</span>
            <span className="mx-3">•</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          {/* Content */}
          <article className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed space-y-6">
              {post.content.split("\n\n").map((paragraph, index) => {
                // Check if paragraph is a heading (starts with **)
                if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                  return (
                    <h2 key={index} className="text-3xl font-bold text-gray-900 mt-12 mb-6">
                      {paragraph.replace(/\*\*/g, "")}
                    </h2>
                  )
                }
                return (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                )
              })}
            </div>
          </article>

          {/* Related Posts Navigation */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h3 className="text-3xl font-bold text-gray-900 mb-8">Continue Reading</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts
                .filter((p) => p.id !== post.id)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group block p-6 rounded-xl border bg-white shadow-sm hover:shadow-lg transition-all motion-safe:duration-300 hover:-translate-y-1"
                  >
                    <h4 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700">
                      {relatedPost.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
