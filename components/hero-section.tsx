export function HeroSection() {
  return (
    <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-visible">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url('/Globe.jpg')` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Text */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">Flag of Humanity</h1>
        <p className="text-xl md:text-2xl mb-2 text-white/90">One symbol of belonging.</p>
        <p className="text-lg md:text-xl text-white/80">When we belong, we care for one another.</p>
      </div>

      {/* Overlapping flag between sections */}
      <img
        src="/flag.png"
        alt="Flag of Humanity"
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2
          h-28 md:h-40 w-auto z-30 drop-shadow-xl pointer-events-none
        "
      />
    </section>
  )
}
