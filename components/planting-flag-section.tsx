import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function PlantingFlagSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Planting the flag</h2>
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Expedition to the Edge</h3>
            <div className="text-gray-600 leading-relaxed mb-8">
              <p>
                In June 2018, the crew of infinity embarked on an incredible journey through the Northwest Passage to
                help spread the message of global unity. These heroes have raised the EarthFlag on the Arctic ice on
                September 21st, known as the International Day of Peace.
              </p>
            </div>
            <Button variant="outline" className="px-8 py-3 text-sm font-medium bg-transparent">
              MORE JOURNALS
            </Button>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
              <img
                src="/arctic-expedition-with-flag-planting-ceremony-on-i.jpg"
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
        </div>
      </div>
    </section>
  )
}
