"use client"

import { useState } from "react"
import { blogPosts } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"
import { LazyImage } from "@/components/lazy-image"
import Link from "next/link"

export function BlogList() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  // Filter posts by selected tag
  const filteredPosts = selectedTag
    ? blogPosts.filter((post) => post.tags.includes(selectedTag))
    : blogPosts

  return (
    <div className="space-y-12">
      {/* Tag Filter */}
      <AnimatedSection animation="fade-up" delay={100}>
        <div className="flex flex-wrap gap-2 justify-center">
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            onClick={() => setSelectedTag(null)}
            className={
              selectedTag === null
                ? "bg-gray-900 text-white hover:bg-gray-800"
                : "border-gray-300 text-gray-700 hover:bg-gray-50"
            }
          >
            All Posts
          </Button>
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              onClick={() => setSelectedTag(tag)}
              className={
                selectedTag === tag
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }
            >
              {tag}
            </Button>
          ))}
        </div>
      </AnimatedSection>

      {/* Blog Posts Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post, index) => (
          <AnimatedSection key={post.id} animation="fade-up" delay={index * 100} duration={500}>
            <Link
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border bg-white shadow-sm overflow-hidden transition-all motion-safe:duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
            >
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-blue-400/40 transition-[box-shadow,transform,ring] motion-safe:duration-300" />

              <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                <LazyImage
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform motion-safe:duration-300 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity motion-safe:duration-300" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
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

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-600 mb-3">
                  By {post.author} • {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>

                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          </AnimatedSection>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No posts found with the selected tag.</p>
        </div>
      )}
    </div>
  )
}
