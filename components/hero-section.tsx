export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/Globe.jpg')`,
          height: '100%',
        }}
      />


      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">One Earth. One Flag.</h1>
        <p className="text-xl md:text-2xl mb-2 text-white/90">One symbol of belonging.</p>
        <p className="text-lg md:text-xl text-white/80">When we belong, we protect what we love.</p>
      </div>
    </section>
  )
}
