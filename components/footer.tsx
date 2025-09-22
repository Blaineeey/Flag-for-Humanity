export function Footer() {
  return (
    <footer className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Unite humanity</h3>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">Why</h4>
            <p className="text-gray-600 leading-relaxed">
              In today’s world of growing chaos and separation, we aim to unite humanity 
              in its responsibility to care for each other, and the life around us.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Universal symbol</h3>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">How</h4>
            <p className="text-gray-600 leading-relaxed">
              By proposing a universal symbol that everybody on the planet can subscribe to.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The EarthFlag</h3>
            <h4 className="text-lg font-semibold text-gray-700 mb-4">What</h4>
            <p className="text-gray-600 leading-relaxed">
              Ambassadors of the Flag of Humanity are invited to promote the global voluntary adoption 
              of the Flag of Humanity by any human being, by supporting people and projects that add to its legacy and adoption.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
