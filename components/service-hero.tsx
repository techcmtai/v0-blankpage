"use client"

import Image from "next/image"
import type { LucideIcon } from "lucide-react"

interface ServiceHeroProps {
  title: string
  description: string
  image: string
  icon?: LucideIcon
}

export function ServiceHero({ title, description, image, icon: Icon }: ServiceHeroProps) {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover opacity-40" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {Icon && (
            <div className="mb-6 flex justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center">
                <Icon className="h-8 w-8 text-white" />
              </div>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-600">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#get-quotation"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium hover:opacity-90 transition-all"
            >
              Get Started
            </a>
            <a
              href="#why-choose-us"
              className="px-8 py-3 rounded-full border border-white/30 text-white font-medium hover:bg-white/10 transition-all"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
