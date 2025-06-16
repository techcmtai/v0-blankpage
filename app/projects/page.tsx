"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Project categories
const categories = ["All", "Web Development", "Mobile Apps", "E-commerce", "AI/ML", "Cloud Solutions"]

// Project data
const projects = [
  {
    id: 1,
    title: "HealthTrack Patient Portal",
    description:
      "A comprehensive patient management system for healthcare providers with real-time analytics and secure patient communication.",
    category: "Web Development",
    image: "/modern-healthcare-dashboard.png",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "RetailGenius Mobile App",
    description:
      "An inventory management mobile application for retail businesses with barcode scanning and sales analytics.",
    category: "Mobile Apps",
    image: "/retail-mobile-app-interface.png",
    technologies: ["React Native", "Firebase", "Redux", "Stripe"],
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "LuxuryBrands E-commerce Platform",
    description:
      "A high-end e-commerce platform with personalized shopping experiences and integrated payment solutions.",
    category: "E-commerce",
    image: "/luxury-ecommerce-website.png",
    technologies: ["Next.js", "Shopify", "Tailwind CSS", "PostgreSQL"],
    link: "#",
    featured: true,
  },
  {
    id: 4,
    title: "SmartAgri Crop Analysis",
    description:
      "An AI-powered agricultural solution that analyzes crop health and provides actionable insights to farmers.",
    category: "AI/ML",
    image: "/agricultural-technology-dashboard.png",
    technologies: ["Python", "TensorFlow", "React", "Google Cloud"],
    link: "#",
    featured: false,
  },
  {
    id: 5,
    title: "FinTech Cloud Migration",
    description: "A comprehensive cloud migration strategy and implementation for a financial services company.",
    category: "Cloud Solutions",
    image: "/fintech-cloud-infrastructure.png",
    technologies: ["AWS", "Terraform", "Docker", "Kubernetes"],
    link: "#",
    featured: false,
  },
  {
    id: 6,
    title: "EduLearn Online Platform",
    description:
      "A feature-rich online learning platform with interactive courses, assessments, and student progress tracking.",
    category: "Web Development",
    image: "/education-learning-platform.png",
    technologies: ["Vue.js", "Django", "PostgreSQL", "Redis"],
    link: "#",
    featured: false,
  },
  {
    id: 7,
    title: "TravelBuddy Mobile App",
    description: "A travel companion app with itinerary planning, local recommendations, and real-time translations.",
    category: "Mobile Apps",
    image: "/travel-mobile-app.png",
    technologies: ["Flutter", "Firebase", "Google Maps API", "Stripe"],
    link: "#",
    featured: false,
  },
  {
    id: 8,
    title: "GreenMart Sustainable Shopping",
    description:
      "An e-commerce platform focused on eco-friendly and sustainable products with carbon footprint tracking.",
    category: "E-commerce",
    image: "/sustainable-ecommerce.png",
    technologies: ["Next.js", "Sanity.io", "Stripe", "Vercel"],
    link: "#",
    featured: false,
  },
]

// Case study data
const caseStudies = [
  {
    id: 1,
    title: "How We Increased Conversion Rates by 150% for HealthTrack",
    description:
      "Learn how our UX redesign and performance optimization led to a significant increase in user engagement and conversions for a healthcare platform.",
    image: "/healthcare-analytics-dashboard.png",
    link: "#",
  },
  {
    id: 2,
    title: "Scaling RetailGenius to Support 10,000+ Daily Users",
    description:
      "Discover the architecture and infrastructure decisions that allowed us to scale a retail management app to support thousands of concurrent users.",
    image: "/retail-app-scaling.png",
    link: "#",
  },
  {
    id: 3,
    title: "AI Implementation for SmartAgri: A Journey from Concept to Production",
    description:
      "A detailed look at how we developed and deployed machine learning models to analyze crop health and provide actionable insights to farmers.",
    image: "/agricultural-ai.png",
    link: "#",
  },
]

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920&query=modern%20tech%20project%20showcase"
            alt="Projects Showcase"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">
              Our Projects
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects and innovative solutions that have helped businesses thrive.
          </p>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Discover some of our most impactful and innovative work that showcases our expertise and capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <div key={project.id} className="bg-[#1a1a1a] rounded-lg overflow-hidden group">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-[#252525] text-gray-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <a
                      href={project.link}
                      className="inline-flex items-center text-orange-500 hover:text-pink-600 transition-colors"
                    >
                      View Project <ArrowRight className="h-4 w-4 ml-2" />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Portfolio</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Browse our complete portfolio of projects across various industries and technologies.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                    : "bg-[#1a1a1a] text-gray-300 hover:bg-[#252525]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-[#1a1a1a] rounded-lg overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-[#252525] text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-orange-500 hover:text-pink-600 transition-colors"
                  >
                    View Project <ArrowRight className="h-4 w-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Case Studies</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Dive deeper into our process, challenges, and solutions with detailed case studies from our most impactful
              projects.
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-orange-500/10 to-pink-600/10 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Something Amazing?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help bring your vision to life with our expertise in design, development, and
              digital strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-medium rounded-md transition-all duration-300"
              >
                Start a Project
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
