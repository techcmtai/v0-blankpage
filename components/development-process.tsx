"use client"

interface DevelopmentProcessProps {
  title: string
  description: string
  steps: {
    number: number
    title: string
    description: string
  }[]
}

export function DevelopmentProcess({ title, description, steps }: DevelopmentProcessProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-pink-600 transform -translate-x-1/2" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Step number for mobile */}
                  <div className="md:hidden w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center mb-4">
                    <span className="font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>

                  {/* Step number for desktop */}
                  <div className="hidden md:flex w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 items-center justify-center z-10">
                    <span className="font-bold text-xl">{step.number}</span>
                  </div>

                  {/* Empty div for layout */}
                  <div className="md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
