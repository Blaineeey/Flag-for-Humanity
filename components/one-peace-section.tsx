export function OnePeaceSection() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/water.jpg')` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/30" />

      {/* Centered content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">One state of peace</h2>
          <p className="text-xl md:text-2xl text-blue-100">
            Caring for each other and the life around us
          </p>
        </div>
      </div>
    </section>
  )
}
