import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BlueprintSection } from "@/components/blueprint-section"
import { OneTribeSection } from "@/components/one-tribe-section"
import { PlantingFlagSection } from "@/components/planting-flag-section"
import { StoriesSection } from "@/components/stories-section"
import { StoriesGallery } from "@/components/stories-gallery"
import { OnePeaceSection } from "@/components/one-peace-section"
import { UniteHumanity } from "@/components/unite-humanity"

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
      <StoriesSection />
      <section id="get-involved">
        <OnePeaceSection />
      </section>
      <UniteHumanity />
      <StoriesGallery />
    </main>
  )
}
