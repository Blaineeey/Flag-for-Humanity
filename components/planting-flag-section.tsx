"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, X, ExternalLink } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { LazyImage } from "@/components/lazy-image"
import clsx from "clsx"

type Panel = "none" | "resellers" | "share"

export function PlantingFlagSection() {
  const [panel, setPanel] = useState<Panel>("none")

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
                  href="https://uon.earth/earthflag/followflag"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                      More pioneer stories
                </a>
                </Button>

                <Button
                  variant="outline"
                  className="px-6 py-3 text-sm bg-transparent transform transition-all duration-200 hover:scale-105"
                  onClick={() => setPanel((p) => (p === "resellers" ? "none" : "resellers"))}
                  aria-expanded={panel === "resellers"}
                >
                  Get your flag
                </Button>

                <Button
                  variant="outline"
                  className="px-6 py-3 text-sm bg-transparent transform transition-all duration-200 hover:scale-105"
                  onClick={() => setPanel((p) => (p === "share" ? "none" : "share"))}
                  aria-expanded={panel === "share"}
                >
                  Share your story
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

        {/* Below section panels */}
        <AnimatedSection animation="fade-up" delay={500}>
          <div
            className={clsx(
              "mt-16 transition-all duration-300",
              panel === "none" ? "opacity-0 pointer-events-none -translate-y-2" : "opacity-100 translate-y-0",
            )}
            aria-hidden={panel === "none"}
          >
            {/* Resellers panel */}
            {panel === "resellers" && (
              <div className="bg-white border rounded-2xl shadow-sm p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">All resellers we know</h3>
                  </div>
                  <Button size="icon" variant="ghost" onClick={() => setPanel("none")} aria-label="Close">
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Box 1 with photo — enhanced hover */}
                  <a
                    href="https://earthflag.store/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block rounded-xl border bg-white/50 overflow-hidden transition-all motion-safe:duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                  >
                    {/* subtle gradient ring on hover */}
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-blue-400/40 transition-[box-shadow,transform,ring] motion-safe:duration-300" />

                    <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                      <LazyImage
                        src="/Earthflag.png"
                        alt="earthflag.store"
                        className="w-full h-full object-cover transition-transform motion-safe:duration-300 group-hover:scale-105"
                      />
                      {/* gradient overlay */}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity motion-safe:duration-300" />
                      {/* corner badge */}
                      <div className="pointer-events-none absolute right-3 top-3 flex items-center rounded-full bg-white/90 backdrop-blur px-2 py-1 text-xs font-medium text-gray-700 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all motion-safe:duration-300">
                        Visit <ExternalLink className="ml-1 h-3 w-3" />
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-lg font-semibold text-gray-900 group-hover:underline">earthflag.store</div>
                      <p className="text-gray-600 mt-1">EarthFlag</p>
                    </div>
                  </a>

                  {/*hover effect */}
                  <a
                    href="https://www.hemptex.earth/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block rounded-xl border bg-white/50 overflow-hidden transition-all motion-safe:duration-300 hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60"
                  >
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-blue-400/40 transition-[box-shadow,transform,ring] motion-safe:duration-300" />

                    <div className="aspect-[16/9] overflow-hidden bg-gray-100">
                      <LazyImage
                        src="/Hemptex.png"
                        alt="hemptex.earth"
                        className="w-full h-full object-cover transition-transform motion-safe:duration-300 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity motion-safe:duration-300" />
                      <div className="pointer-events-none absolute right-3 top-3 flex items-center rounded-full bg-white/90 backdrop-blur px-2 py-1 text-xs font-medium text-gray-700 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all motion-safe:duration-300">
                        Visit <ExternalLink className="ml-1 h-3 w-3" />
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="text-lg font-semibold text-gray-900 group-hover:underline">hemptex.earth</div>
                      <p className="text-gray-600 mt-1">Hemptex</p>
                    </div>
                  </a>
                </div>
              </div>
            )}

            {/* Share your story panel */}
            {panel === "share" && (
              <div className="bg-white border rounded-2xl shadow-sm p-6 md:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Share your story</h3>
                    <p className="text-gray-600 mt-1">
                      Send a short note and a thumbnail images. We love to feature pioneer stories!
                    </p>
                  </div>
                  <Button size="icon" variant="ghost" onClick={() => setPanel("none")} aria-label="Close">
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4 sm:items-center">
                  <Button asChild className="px-6">
                    <a
                      href={`mailto:bart@earthflag.org?subject=Story%20submission%20for%20EarthFlag&body=Hi%20Bart%2C%0D%0A%0D%0AMy%20story%3A%20%5Badd%20a%20few%20lines%5D%0D%0A%0D%0AThumbnail%20details%3A%20%5Battach%20a%20photo%20to%20this%20email%5D%0D%0A%0D%0AThanks!`}
                    >
                      Email Us!
                    </a>
                  </Button>
                  <p className="text-sm text-gray-600"></p>
                </div>
              </div>
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
