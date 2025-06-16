"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, ArrowRight, Quote } from "lucide-react"

// Client logos data
const clientLogos = [
  { name: "TechCorp", logo: "/abstract-tech-logo.png" },
  { name: "HealthPlus", logo: "/healthcare-company-logo.png" },
  { name: "FinanceHub", logo: "/finance-company-logo.png" },
  { name: "EduLearn", logo: "/education-company-logo.png" },
  { name: "RetailPro", logo: "/abstract-retail-logo.png" },
  { name: "TravelWise", logo: "/travel-company-logo.png" },
  { name: "FoodDelight", logo: "/food-company-logo.png" },
  { name: "MediaMax", logo: "/generic-media-logo.png" },
  { name: "SportsFit", logo: "/generic-sports-logo.png" },
  { name: "HomeStyle", logo: "/placeholder.svg?height=200&width=200&query=home%20decor%20company%20logo" },
  { name: "GreenEnergy", logo: "/placeholder.svg?height=200&width=200&query=energy%20company%20logo" },
  { name: "AutoDrive", logo: "/placeholder.svg?height=200&width=200&query=automotive%20company%20logo" },
]

// Industries data
const industries = [
  "Healthcare",
  "Finance",
  "Education",
  "Retail",
  "Technology",
  "Travel",
  "Food & Beverage",
  "Media & Entertainment",
  "Sports & Fitness",
  "Home & Decor",
  "Energy",
  "Automotive",
]

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CTO, HealthPlus",
    company: "HealthPlus",
    image: "/placeholder.svg?height=200&width=200&query=professional%20woman%20headshot",
    quote:
      "Working with Completrix transformed our patient management system. Their team understood our unique challenges and delivered a solution that exceeded our expectations. The new system has improved our efficiency by 40% and received overwhelmingly positive feedback from both staff and patients.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO, TechCorp",
    company: "TechCorp",
    image: "/placeholder.svg?height=200&width=200&query=professional%20man%20headshot",
    quote:
      "Completrix helped us modernize our entire digital infrastructure. Their expertise in cloud solutions and AI implementation has given us a competitive edge in the market. The team was professional, responsive, and truly invested in our success.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director, RetailPro",
    company: "RetailPro",
    image: "/placeholder.svg?height=200&width=200&query=professional%20latina%20woman%20headshot",
    quote:
      "Our e-commerce platform developed by Completrix has been a game-changer for our business. Sales have increased by 65% since launch, and the user experience has received rave reviews from our customers. Their attention to detail and understanding of our brand was impressive.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    position: "CFO, FinanceHub",
    company: "FinanceHub",
    image: "/placeholder.svg?height=200&width=200&query=professional%20asian%20man%20headshot",
    quote:
      "The custom financial analytics dashboard Completrix built for us has revolutionized how we make decisions. The intuitive interface and powerful features have made complex data accessible to our entire team. Their understanding of both technology and finance made them the perfect partner.",
    rating: 4,
  },
  {
    id: 5,
    name: "Jessica Taylor",
    position: "Product Manager, EduLearn",
    company: "EduLearn",
    image: "/placeholder.svg?height=200&width=200&query=professional%20woman%20headshot%20glasses",
    quote:
      "Completrix delivered an exceptional learning platform that has transformed how we deliver education. Their team was collaborative, innovative, and committed to our vision. The platform has been instrumental in our growth and expansion into new markets.",
    rating: 5,
  },
  {
    id: 6,
    name: "Robert Wilson",
    position: "Operations Director, TravelWise",
    company: "TravelWise",
    image: "/placeholder.svg?height=200&width=200&query=professional%20older%20man%20headshot",
    quote:
      "The mobile app Completrix developed for our travel company has received outstanding feedback from users. Their team's attention to UX/UI design and performance optimization resulted in an app that's both beautiful and highly functional. We've seen a 50% increase in bookings since launch.",
    rating: 5,
  },
]

// Case studies data
const caseStudies = [
  {
    id: 1,
    client: "HealthPlus",
    title: "Revolutionizing Patient Care with Digital Innovation",
    description:
      "How we helped HealthPlus transform their patient management system and improve operational efficiency by 40%.",
    image: "/placeholder.svg?height=600&width=800&query=healthcare%20digital%20transformation",
    link: "#",
  },
  {
    id: 2,
    client: "TechCorp",
    title: "Cloud Migration & AI Implementation",
    description:
      "A comprehensive digital transformation that modernized TechCorp's infrastructure and introduced AI-powered analytics.",
    image: "/placeholder.svg?height=600&width=800&query=cloud%20migration%20and%20AI",
    link: "#",
  },
  {
    id: 3,
    client: "RetailPro",
    title: "E-commerce Platform Driving 65% Sales Growth",
    description:
      "How our custom e-commerce solution helped RetailPro expand their online presence and significantly increase sales.",
    image: "/placeholder.svg?height=600&width=800&query=ecommerce%20sales%20growth",
    link: "#",
  },
]

export default function ClientsPage() {
  const [activeIndustry, setActiveIndustry] = useState("All")
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&query=business%20partnership%20handshake"
            alt="Our Clients"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">
              Our Clients
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Trusted by innovative companies across industries to deliver exceptional digital solutions.
          </p>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Industry Leaders</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We're proud to work with innovative companies across various industries, helping them achieve their
              digital goals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-lg p-6 flex items-center justify-center transition-transform hover:scale-105"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.name}
                  width={120}
                  height={80}
                  className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our expertise spans across multiple industries, allowing us to deliver tailored solutions for diverse
              business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-lg p-6 text-center transition-colors hover:bg-gradient-to-r hover:from-orange-500/20 hover:to-pink-600/20"
              >
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with Completrix.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="bg-[#1a1a1a] rounded-lg p-8 mb-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="relative w-32 h-32 mx-auto md:mx-0">
                  <Image
                    src={testimonials[activeTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[activeTestimonial].name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <div className="mb-4">
                  <Quote className="h-10 w-10 text-orange-500/30" />
                </div>
                <p className="text-gray-300 text-lg italic mb-6">{testimonials[activeTestimonial].quote}</p>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonials[activeTestimonial].rating ? "text-orange-500 fill-orange-500" : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
                <h3 className="text-xl font-bold text-white">{testimonials[activeTestimonial].name}</h3>
                <p className="text-orange-500">{testimonials[activeTestimonial].position}</p>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeTestimonial === index ? "bg-gradient-to-r from-orange-500 to-pink-600" : "bg-[#1a1a1a]"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* More Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-lg p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < testimonial.rating ? "text-orange-500 fill-orange-500" : "text-gray-500"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote.substring(0, 150)}..."</p>
                <div className="flex items-center">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{testimonial.name}</h3>
                    <p className="text-sm text-orange-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Explore detailed case studies of how we've helped our clients overcome challenges and achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-[#1a1a1a] rounded-lg overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-70"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-orange-500 text-white text-xs rounded-full">{study.client}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                  <p className="text-gray-400 mb-4">{study.description}</p>
                  <a
                    href={study.link}
                    className="inline-flex items-center text-orange-500 hover:text-pink-600 transition-colors"
                  >
                    Read Case Study <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-orange-500/10 to-pink-600/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Growing List of Satisfied Clients</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help your business achieve its digital transformation goals with our expertise
              and innovative solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-medium rounded-md transition-all duration-300"
              >
                Contact Us
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-orange-500 text-white font-medium rounded-md hover:bg-orange-500/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
