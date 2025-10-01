"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"
import { LazyImage } from "@/components/lazy-image"

export function OneTribeSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0">
        <LazyImage
          src="/underwater-ocean-view-with-fish-swimming-in-blue-w.jpg"
          alt="Underwater ocean view with fish"
          className="w-full h-full"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/60 via-blue-800/50 to-blue-900/70" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection animation="fade-in" delay={100}>
            <Badge variant="secondary" className="mb-8 bg-white/10 text-white border-white/20 backdrop-blur-sm">
              Our Mission
            </Badge>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">Uniting Humanity</h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <p className="text-xl md:text-2xl mb-12 text-blue-100 font-medium whitespace-nowrap">Through one symbol</p>
          </AnimatedSection>

          <AnimatedSection animation="scale-up" delay={400}>
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm transform transition-all duration-300 hover:bg-white/15 hover:scale-105">
              <CardContent className="p-8 md:p-12">
                <p className="text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
                  The mission and ultimate objective is the adoption and recognition of the Flag of Humanity by every human being and human organization.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={500}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
