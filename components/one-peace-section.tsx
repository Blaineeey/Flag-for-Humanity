export function OnePeaceSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/beautiful-ice-glacier-landscape-with-blue-and-whit.jpg')`,
        }}
      />

      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-blue-900/30" />

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">One state of peace</h2>
        <p className="text-xl md:text-2xl text-blue-100">Caring for each other and the life around us</p>
      </div>
    </section>
  )
}
