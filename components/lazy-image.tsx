"use client"

import { useState } from "react"
import { useIntersectionObserver } from "@/hooks/use-intersection-observer"
import { cn } from "@/lib/utils"

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  onLoad?: () => void
}

export function LazyImage({
  src,
  alt,
  className,
  placeholder = "/placeholder.svg?height=400&width=600",
  onLoad,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "100px",
  })

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
  }

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* Placeholder */}
      <img
        src={placeholder || "/placeholder.svg"}
        alt=""
        className={cn(
          "absolute inset-0 w-full h-full object-cover transition-opacity duration-300",
          isLoaded ? "opacity-0" : "opacity-100",
        )}
        aria-hidden="true"
      />

      {/* Actual image */}
      {isIntersecting && (
        <img
          src={hasError ? placeholder : src}
          alt={alt}
          className={cn(
            "w-full h-full object-cover transition-all duration-500",
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-105",
          )}
          onLoad={handleLoad}
          onError={handleError}
        />
      )}

      {/* Loading shimmer effect */}
      {!isLoaded && isIntersecting && (
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      )}
    </div>
  )
}
