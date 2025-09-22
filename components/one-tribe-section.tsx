export function OneTribeSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/underwater-ocean-view-with-fish-swimming-in-blue-w.jpg')`,
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-blue-900/40" />

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">Uniting Humanity</h2>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">Through one symbol</p>
        <div className="max-w-3xl mx-auto text-lg text-blue-100 leading-relaxed">
          <p>
            The mission and ultimate objective is the adoption and recognition of the Flag of Humanity by every human being and human organization.
          </p>
        </div>
      </div>
    </section>
  )
}
