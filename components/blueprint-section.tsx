"use client"

import { useState, useId } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Eye, EyeOff } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { LazyImage } from "@/components/lazy-image"
import clsx from "clsx"

const MEDIA_LIBRARY_URL = "https://earthflag.store/product/earthflag-blueprint-pdf/"

type TabKey = "symbol" | "color" | "proportion"

const TAB_CONTENT: Record<
  TabKey,
  {
    leftTitle: string
    leftBody: string
    rightTitle: string
    rightBody: string
    imgSrc: string
    imgAlt: string
  }
> = {
  symbol: {
    leftTitle: "Symbol",
    leftBody:
      " The symbol on the Flag of Humanity is the Seed of Life — an ancient, universal motif found across many cultures. It is a cornerstone of sacred geometry and a visual expression of harmony and creation.",
    rightTitle: "Seed of Life",
    rightBody:
      "The Seed of Life represents unity in constant transformation, reminding us that all things are connected.",
    imgSrc: "/symbol.png",
    imgAlt: "Symbol",
  },
  color: {
    leftTitle: "Color",
    leftBody:
      "The flag's deep blue represents the sky, the oceans, and all that lies between. It is the colour of unity, trust, and peace — qualities essential for humanity's shared future.",
    rightTitle: "Contrast & Accessibility",
    rightBody:
      "This unique shade is derived from Earth's balance of 29% land and 71% water, encoded in the RGB value 0,74,181.",
    imgSrc: "/Color.png",
    imgAlt: "Color swatches",
  },
  proportion: {
    leftTitle: "Proportion",
    leftBody: "The golden ratio can be found in many patterns in nature and many human creations.",
    rightTitle: "Construction",
    rightBody:
      "The Golden Ratio, also known as Phi, is derived from the Golden Rectangle. This is the ratio of the Flag of Humanity, usually approached in production as 8:5.",
    imgSrc: "/proportion.png",
    imgAlt: "Proportion",
  },
}

export function BlueprintSection() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<TabKey>("symbol")
  const panelId = useId()
  const c = TAB_CONTENT[active]

  return (
    <section className="pt-32 md:pt-40 pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">

          <AnimatedSection animation="fade-up" delay={200}>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">The Blueprint</h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={300}>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              A proposal for the flag of Humanity
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={400}>
            <Card className="max-w-4xl mx-auto mb-12 border-0 shadow-lg transform transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8">
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  The Flag of Humanity was inspired by the cosmos and our home planet. The creators have dedicated the
                  design to the commons under the CC0 licence, meaning it is free for anyone to use without restriction
                  and cannot be claimed by any single individual or organisation.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={500}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              size="lg"
              className="px-8 font-semibold transform transition-all duration-200 hover:scale-105"
            >
              <a href={MEDIA_LIBRARY_URL} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                Open PDF
              </a>
            </Button>

            <Button
              type="button"
              variant="outline"
              size="lg"
              className="px-8 font-semibold bg-transparent transform transition-all duration-200 hover:scale-105"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <>
                  <EyeOff className="mr-2 h-4 w-4" />
                  Hide Design
                </>
              ) : (
                <>
                  <Eye className="mr-2 h-4 w-4" />
                  More on Design
                </>
              )}
            </Button>
          </div>
        </AnimatedSection>

        <div
          id={panelId}
          className={clsx(
            "mx-auto w-full max-w-7xl overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out",
            open ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]",
          )}
          aria-hidden={!open}
        >
          <div className="min-h-0">
            <div className="space-y-12 pt-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <AnimatedSection animation="slide-left" delay={100}>
                  <Card className="border-0 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-8 h-full flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{c.leftTitle}</h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">{c.leftBody}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-up" delay={200}>
                  <Card className="border-0 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-8 flex items-center justify-center">
                      <LazyImage
                        src={c.imgSrc || "/placeholder.svg"}
                        alt={c.imgAlt}
                        className="h-48 w-auto object-contain"
                      />
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="slide-right" delay={300}>
                  <Card className="border-0 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-8 h-full flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">{c.rightTitle}</h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">{c.rightBody}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <AnimatedSection animation="slide-left" delay={400}>
                  <Card className="border-0 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-8 h-full flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Creative Commons</h3>
                      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                        All rights to the EarthFlag design have been granted to the commons by its creators.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="scale-up" delay={500}>
                  <Card className="border-0 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-8 flex items-center justify-center">
                      <LazyImage src="PBD.png" alt="CC0 1.0 Universal" className="h-32 w-auto object-contain" />
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="slide-right" delay={600}>
                  <Card className="border-0 shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <CardContent className="p-8 h-full flex flex-col justify-center">
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Free to Use</h3>
                      <p className="text-gray-700 leading-relaxed">
                        It can be used without any limitation by any-body and claimed by no-body.
                      </p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>

              <AnimatedSection animation="fade-up" delay={700}>
                <div className="flex justify-center">
                  <Tabs
                    value={active}
                    onValueChange={(value) => setActive(value as TabKey)}
                    className="w-full max-w-md"
                  >
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger
                        value="symbol"
                        className="text-sm font-medium transition-all duration-200 hover:scale-105"
                      >
                        Symbol
                      </TabsTrigger>
                      <TabsTrigger
                        value="color"
                        className="text-sm font-medium transition-all duration-200 hover:scale-105"
                      >
                        Color
                      </TabsTrigger>
                      <TabsTrigger
                        value="proportion"
                        className="text-sm font-medium transition-all duration-200 hover:scale-105"
                      >
                        Proportion
                      </TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
