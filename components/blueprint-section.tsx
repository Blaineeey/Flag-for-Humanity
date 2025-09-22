"use client"

import { useState, useId } from "react"
import { Button } from "@/components/ui/button"
import clsx from "clsx"

const MEDIA_LIBRARY_URL =
  "https://uon.earth/earthflag/medialibrary/8439355465762758656"

type TabKey = "symbol" | "color" | "proportion"

const TAB_CONTENT: Record<TabKey, {
  leftTitle: string; leftBody: string;
  rightTitle: string; rightBody: string;
  imgSrc: string; imgAlt: string;
}> = {
  symbol: {
    leftTitle: "Symbol",
    leftBody: " The symbol on the Flag of Humanity is the Seed of Life — an ancient, universal motif found across many cultures. It is a cornerstone of sacred geometry and a visual expression of harmony and creation.",
    rightTitle: "Seed of Life",
    rightBody: "The Seed of Life represents unity in constant transformation, reminding us that all things are connected.",
    imgSrc: "/symbol.png",
    imgAlt: "Symbol",
  },
  color: {
    leftTitle: "Color",
    leftBody: "The flag’s deep blue represents the sky, the oceans, and all that lies between. It is the colour of unity, trust, and peace — qualities essential for humanity’s shared future.",
    rightTitle: "Contrast & Accessibility",
    rightBody: "This unique shade is derived from Earth’s balance of 29% land and 71% water, encoded in the RGB value 0,74,181.",
    imgSrc: "/Color.png",
    imgAlt: "Color swatches",
  },
  proportion: {
    leftTitle: "Proportion",
    leftBody: "The golden ratio can be found in many patterns in nature and many human creations.",
    rightTitle: "Construction",
    rightBody: "The Golden Ratio, also known as Phi, is derived from the Golden Rectangle. This is the ratio of the Flag of Humanity, usually approached in production as 8:5.",
    imgSrc: "/proportion.png",
    imgAlt: "Proportion",
  },
}

export function BlueprintSection() {
  const [open, setOpen] = useState(false) // hidden by default
  const [active, setActive] = useState<TabKey>("symbol")
  const panelId = useId()
  const c = TAB_CONTENT[active]

  return (
    // padding-top gives breathing room below the overlapping flag
    <section className="pt-24 md:pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Removed the flag image here */}

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Blueprint</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
          A proposal for the flag of Humanity
        </p>

        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-10">
          <p>
            The Flag of Humanity was inspired by the cosmos and our home planet. The creators have
            dedicated the design to the commons under the CC0 licence, meaning it is free for anyone
            to use without restriction and cannot be claimed by any single individual or organisation.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button asChild variant="outline" className="px-8 py-3 text-sm font-medium bg-transparent">
            <a href={MEDIA_LIBRARY_URL} target="_blank" rel="noopener noreferrer">
              DOWNLOAD PDF
            </a>
          </Button>

          <Button
            type="button"
            variant="outline"
            className="px-8 py-3 text-sm font-medium bg-transparent"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen(v => !v)}
          >
            {open ? "HIDE DESIGN" : "MORE ON DESIGN"}
          </Button>
        </div>

        {/* Collapsible content */}
        <div
          id={panelId}
          className={clsx(
            "mx-auto w-full max-w-6xl overflow-hidden transition-[grid-template-rows] duration-300",
            open ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
          )}
          aria-hidden={!open}
        >
          <div className="min-h-0">
            {/* First row */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 md:gap-x-0 gap-y-10
                            items-stretch md:divide-x-2 md:divide-gray-900
                            min-h-[160px] md:min-h-[160px]">
              <div className="text-left px-6 flex flex-col justify-center">
                <h3 className="text-4xl font-extrabold text-gray-900 mb-3">{c.leftTitle}</h3>
                <p className="text-gray-700">{c.leftBody}</p>
              </div>
              <div className="px-6 flex items-center justify-center">
                <img src={c.imgSrc} alt={c.imgAlt} className="h-48 w-auto object-contain" />
              </div>
              <div className="text-left px-6 flex flex-col justify-center">
                <h3 className="text-4xl font-extrabold text-gray-900 mb-3">{c.rightTitle}</h3>
                <p className="text-gray-700">{c.rightBody}</p>
              </div>
            </div>

            {/* Second row */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 md:gap-x-0 gap-y-10
                            items-stretch md:divide-x-2 md:divide-gray-900
                            min-h-[160px] md:min-h-[160px]">
              <div className="text-left px-6 flex flex-col justify-center">
                <h3 className="text-4xl font-extrabold text-gray-900 mb-3">Creative commons</h3>
                <p className="text-gray-700">
                  All rights to the EarthFlag design have been granted to the commons by its creators.
                </p>
              </div>
              <div className="px-6 flex items-center justify-center">
                <img
                  src="PBD.png"
                  alt="CC0 1.0 Universal (mock)"
                  className="h-32 w-auto object-contain"
                />
              </div>
              <div className="text-left px-6 flex flex-col justify-center">
                <h3 className="text-4xl font-extrabold text-gray-900 mb-3">Free to use</h3>
                <p className="text-gray-700">
                  It can be used without any limitation by any-body and claimed by no-body.
                </p>
              </div>
            </div>

            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Design detail"
              className="mt-10 mb-2 flex items-center justify-center gap-4 text-sm"
            >
              {(["symbol", "color", "proportion"] as TabKey[]).map((key, i) => (
                <div key={key} className="flex items-center gap-4">
                  <button
                    role="tab"
                    aria-selected={active === key}
                    onClick={() => setActive(key)}
                    className={`uppercase tracking-wide ${
                      active === key ? "text-gray-900 font-semibold" : "text-gray-500 hover:text-gray-800"
                    }`}
                  >
                    {key}
                  </button>
                  {i < 2 && <span aria-hidden className="text-gray-400 select-none">|</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
