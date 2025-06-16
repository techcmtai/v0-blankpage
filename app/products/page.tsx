import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { products } from "@/lib/products-data"

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-10"></div>
          <Image
            src="/placeholder.svg?height=1080&width=1920&query=modern digital products showcase with futuristic interface"
            alt="Products Background"
            width={1920}
            height={1080}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="max-w-screen-xl mx-auto px-4 py-20 md:py-28 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">
                Our Products
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Discover our innovative software solutions designed to transform your business operations, enhance
              customer experiences, and drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Products Showcase */}
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our suite of powerful software solutions built to address your business challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 flex flex-col"
                >
                  <div className="h-48 bg-gradient-to-r from-orange-500 to-pink-600 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-20 w-20 text-white" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-semibold mb-3">{product.title}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <div className="mt-auto">
                      <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-2 mb-6">
                        {product.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center text-white mr-2 mt-0.5">
                              <span className="text-xs">✓</span>
                            </div>
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link
                        href={product.href}
                        className="inline-flex items-center text-orange-600 font-medium hover:text-orange-500 transition-colors"
                      >
                        Learn more
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need a custom solution?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Our team of experts can build tailored software solutions to address your unique business challenges
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white rounded-md font-medium hover:shadow-lg transition-shadow"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
