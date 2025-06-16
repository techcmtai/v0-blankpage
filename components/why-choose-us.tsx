"use client"

interface WhyChooseUsProps {
  title: string
  description: string
  points: {
    title: string
    description: string
  }[]
}

export function WhyChooseUs({ title, description, points }: WhyChooseUsProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-950 text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all"
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center mb-4">
                <span className="font-bold">{index + 1}</span>
              </div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-400">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
