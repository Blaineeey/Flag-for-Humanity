export function Footer() {
  return (
    <footer className="bg-white pt-28 pb-28">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-6xl">
          {/* 3 columns with vertical separators */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-0 gap-y-12
                          items-stretch md:divide-x-2 md:divide-black py-6 md:py-10">
            {/* Col 1 */}
            <div className="px-6">
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Unite humanity
              </h3>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Why</h4>
              <p className="text-gray-700 leading-relaxed">
                In today’s world of growing chaos and separation, we aim to unite humanity 
                in its responsibility to care for each other, and the life around us.
              </p>
            </div>

            {/* Col 2 */}
            <div className="px-6">
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Universal symbol
              </h3>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">How</h4>
              <p className="text-gray-700 leading-relaxed">
                By proposing a universal symbol that everybody on the planet can subscribe to.
              </p>
            </div>

            {/* Col 3 */}
            <div className="px-6">
              <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                The EarthFlag
              </h3>
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">What</h4>
              <p className="text-gray-700 leading-relaxed">
                Ambassadors of the Flag of Humanity are invited to promote the global voluntary adoption 
                of the Flag of Humanity by any human being, by supporting people and projects that add to its legacy and adoption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
