import Link from "next/link"
import { notFound } from "next/navigation"
import { ExternalLink, ArrowLeft, CheckCircle, XCircle } from "lucide-react"
import { techDataMap } from "@/lib/tech-data"

export default function TechPage({ params }: { params: { slug: string } }) {
  const techData = techDataMap[params.slug]

  if (!techData) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12">
          <div className="w-24 h-24 bg-[#1a1a1a] rounded-xl p-4 flex items-center justify-center">
            <img
              src={techData.logo || "/placeholder.svg"}
              alt={`${techData.name} logo`}
              className="max-w-full max-h-full object-contain"
            />
          </div>
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-xs font-medium mb-2">
              {techData.category.charAt(0).toUpperCase() + techData.category.slice(1)}
            </div>
            <h1 className="text-4xl font-bold mb-2">{techData.name}</h1>
            <p className="text-gray-400 max-w-3xl">{techData.description}</p>
          </div>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {techData.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Pros and Cons */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Pros & Cons</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Advantages */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-green-500">Advantages</h3>
                  <ul className="space-y-3">
                    {techData.advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Disadvantages */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-red-500">Disadvantages</h3>
                  <ul className="space-y-3">
                    {techData.disadvantages.map((disadvantage, index) => (
                      <li key={index} className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{disadvantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Common Use Cases</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {techData.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Example Websites */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Websites Using {techData.name}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {techData.exampleWebsites.map((website, index) => (
                  <a
                    key={index}
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1a1a1a] p-4 rounded-lg hover:bg-[#252525] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{website.name}</h3>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                    <p className="text-sm text-gray-400">{website.description}</p>
                  </a>
                ))}
              </div>
            </section>
          </div>

          {/* Right column - Resources */}
          <div>
            <div className="bg-[#1a1a1a] rounded-lg p-6 sticky top-20">
              <h2 className="text-xl font-bold mb-4">Resources</h2>
              <div className="space-y-4">
                {techData.resources.map((resource, index) => (
                  <a
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#252525] p-4 rounded-lg hover:bg-[#303030] transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium">{resource.name}</h3>
                      <ExternalLink className="h-4 w-4 text-gray-400" />
                    </div>
                    <span className="text-xs px-2 py-1 bg-[#3a3a3a] rounded-full text-gray-300">
                      {resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#303030]">
                <h3 className="font-semibold mb-3">Need help with {techData.name}?</h3>
                <p className="text-sm text-gray-400 mb-4">
                  Our team of experts can help you implement {techData.name} in your next project.
                </p>
                <Link
                  href="/contact"
                  className="block w-full py-2 px-4 bg-gradient-to-r from-orange-500 to-pink-600 text-white text-center rounded-lg hover:opacity-90 transition-opacity"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
