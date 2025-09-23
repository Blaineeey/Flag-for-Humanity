"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { LazyImage } from "@/components/lazy-image"

export function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-visible">
      <div className="absolute inset-0 z-0">
        <LazyImage src="/Globe.jpg" alt="Earth from space" className="w-full h-full" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-10" />

      <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto">
        <AnimatedSection animation="fade-in" delay={200}>
          <Badge variant="secondary" className="mb-6 bg-white/10 text-white border-white/20 backdrop-blur-sm">
            One Earth. One Flag.
          </Badge>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={400}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 text-balance leading-[0.9] tracking-tight">
            Flag of Humanity
          </h1>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={600}>
          <div className="space-y-4 mb-12">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-white/95 text-balance leading-relaxed">
              One symbol of belonging.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto text-pretty leading-relaxed">
              When we belong, we care for one another.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">

          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection animation="scale-up" delay={1000}>
        <img
          src="/flag.png"
          alt="Flag of Humanity"
          className="
            absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
            h-32 md:h-48 w-auto z-30 drop-shadow-2xl pointer-events-none
            transition-all duration-300 hover:scale-105 animate-pulse
          "
        />
      </AnimatedSection>
            <img
        src="/flag.png"
        alt="Flag of Humanity"
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
          h-28 md:h-40 w-auto z-30 drop-shadow-xl pointer-events-none
        "
      />
    </section>
  )
}
