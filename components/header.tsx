"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/flagforhuminity.png"
            alt="EarthFlag Foundation"
            width={200}
            height={40}
            className="h-10 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#blueprint"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Blueprint
          </a>
          <a
            href="#about"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
          >
            About
          </a>
          <a
            href="#community"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Community
          </a>
          <a
            href="#get-involved"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Get Involved
          </a>
          <a
            href="#organization"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Organization
          </a>
          <a
            href="#contact"
            className="text-white/80 hover:text-white transition-colors text-sm font-medium uppercase tracking-wider"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}
