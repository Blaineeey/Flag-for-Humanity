import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BlueprintSection } from "@/components/blueprint-section"
import { OneTribeSection } from "@/components/one-tribe-section"
import { PlantingFlagSection } from "@/components/planting-flag-section"
import { OnePeaceSection } from "@/components/one-peace-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <section id="blueprint">
        <BlueprintSection />
      </section>
      <section id="about">
        <OneTribeSection />
      </section>
      <section id="community">
        <PlantingFlagSection />
      </section>
      <section id="get-involved">
        <OnePeaceSection />
      </section>
      <Footer />
    </main>
  )
}
