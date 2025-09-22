import { Button } from "@/components/ui/button"

export function BlueprintSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Earth Flag Symbol */}
        <div className="mb-12">
          <div className="w-32 h-20 bg-blue-600 mx-auto flex items-center justify-center rounded-sm">
            <svg className="w-16 h-16 text-white" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
              <circle cx="50" cy="50" r="3" fill="currentColor" />
              <path d="M25 50 L75 50 M50 25 L50 75" stroke="currentColor" strokeWidth="2" />
              <path d="M35.86 35.86 L64.14 64.14 M64.14 35.86 L35.86 64.14" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">The Blueprint</h2>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto"> A proposal for the flag of Humanity</p>

        <div className="max-w-3xl mx-auto text-gray-600 leading-relaxed mb-12">
          <p>
            The Flag of Humanity was inspired by the cosmos and our home planet. The creators have 
            dedicated the design to the commons under the CC0 licence, meaning it is free for anyone 
            to use without restriction and cannot be claimed by any single individual or organisation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="px-8 py-3 text-sm font-medium bg-transparent">
            DOWNLOAD PDF
          </Button>
          <Button variant="outline" className="px-8 py-3 text-sm font-medium bg-transparent">
            MORE ON DESIGN
          </Button>
        </div>
      </div>
    </section>
  )
}
