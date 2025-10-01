"use client"

import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { LazyImage } from "@/components/lazy-image"

export function PlantingFlagSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* Planting the flag */}
            <AnimatedSection animation="fade-up" delay={100}>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Planting the flag</h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-6">Expedition to the Edge</h3>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={300}>
              <div className="text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                <p>
                  In June 2018, the crew of Infinity embarked on an incredible journey through the Northwest Passage to help spread the message of global unity. These heroes have raised the EarthFlag on the Arctic ice on September 21st, known as the international Day of Peace.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="px-6 py-3 text-sm bg-transparent transform transition-all duration-200 hover:scale-105"
                  asChild
                >
                  <a
                    href="https://uon.earth/earthflag/medialibrary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MORE JOURNALS
                  </a>
                </Button>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="slide-left" delay={300}>
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                <LazyImage
                  src="/water.jpg"
                  alt="Arctic expedition planting EarthFlag"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:bg-white transition-colors">
                    <Play className="w-6 h-6 text-gray-800 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
