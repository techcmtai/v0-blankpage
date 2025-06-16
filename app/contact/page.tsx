"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  CheckCircle,
} from "lucide-react"

// Office locations data
const officeLocations = [
  {
    city: "San Francisco",
    address: "123 Tech Plaza, San Francisco, CA 94105",
    phone: "+1 (415) 555-1234",
    email: "sf@completrix.com",
    hours: "Mon-Fri: 9AM-6PM",
    image: "/san-francisco-skyline.png",
  },
  {
    city: "New York",
    address: "456 Digital Avenue, New York, NY 10001",
    phone: "+1 (212) 555-5678",
    email: "nyc@completrix.com",
    hours: "Mon-Fri: 9AM-6PM",
    image: "/new-york-skyline.png",
  },
  {
    city: "London",
    address: "789 Innovation Lane, London, UK EC2A 4NE",
    phone: "+44 20 5555 9876",
    email: "london@completrix.com",
    hours: "Mon-Fri: 9AM-6PM",
    image: "/london-skyline.png",
  },
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [activeLocation, setActiveLocation] = useState(0)
  const [formErrors, setFormErrors] = useState<Record<string, string>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate form
    const errors: Record<string, string> = {}
    if (!formState.name.trim()) errors.name = "Name is required"
    if (!formState.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      errors.email = "Email is invalid"
    }
    if (!formState.message.trim()) errors.message = "Message is required"

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }

    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      })

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/modern-office-meeting-room.png" alt="Contact Us" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">
              Get in Touch
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your vision to life.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
              <p className="text-gray-400 mb-8">
                Ready to start your project or have questions? Reach out to us using the contact form or through any of
                the methods below.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email Us</h3>
                    <a
                      href="mailto:info@completrix.com"
                      className="text-gray-400 hover:text-orange-500 transition-colors"
                    >
                      info@completrix.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Call Us</h3>
                    <a href="tel:+11234567890" className="text-gray-400 hover:text-orange-500 transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Headquarters</h3>
                    <address className="text-gray-400 not-italic">123 Tech Plaza, San Francisco, CA 94105</address>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Business Hours</h3>
                    <p className="text-gray-400">Monday - Friday: 9AM - 6PM</p>
                    <p className="text-gray-400">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#1a1a1a] flex items-center justify-center text-gray-400 hover:text-white hover:bg-orange-500 transition-colors"
                >
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#1a1a1a] rounded-lg p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-gray-400 mb-6">
                    Your message has been received. We'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        />
                        {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        />
                        {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
                        Service You're Interested In
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                      >
                        <option value="">Select a service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Custom Software">Custom Software</option>
                        <option value="AI/ML Solutions">AI/ML Solutions</option>
                        <option value="Cloud Services">Cloud Services</option>
                        <option value="UI/UX Design">UI/UX Design</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                      ></textarea>
                      {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium rounded-md hover:opacity-90 transition-opacity flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="h-5 w-5 ml-2" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Offices</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">Visit us at one of our office locations around the world.</p>
          </div>

          {/* Office Tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {officeLocations.map((location, index) => (
              <button
                key={index}
                onClick={() => setActiveLocation(index)}
                className={`px-6 py-3 rounded-md transition-colors ${
                  activeLocation === index
                    ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                    : "bg-[#1a1a1a] text-gray-300 hover:bg-[#252525]"
                }`}
              >
                {location.city}
              </button>
            ))}
          </div>

          {/* Office Details */}
          <div className="bg-[#1a1a1a] rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-4">{officeLocations[activeLocation].city} Office</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-orange-500 mr-3 mt-1" />
                    <address className="text-gray-300 not-italic">{officeLocations[activeLocation].address}</address>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-orange-500 mr-3" />
                    <a
                      href={`tel:${officeLocations[activeLocation].phone}`}
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {officeLocations[activeLocation].phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-orange-500 mr-3" />
                    <a
                      href={`mailto:${officeLocations[activeLocation].email}`}
                      className="text-gray-300 hover:text-orange-500 transition-colors"
                    >
                      {officeLocations[activeLocation].email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-orange-500 mr-3" />
                    <p className="text-gray-300">{officeLocations[activeLocation].hours}</p>
                  </div>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <Image
                  src={officeLocations[activeLocation].image || "/placeholder.svg"}
                  alt={`${officeLocations[activeLocation].city} Office`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">Locate our headquarters on the map below.</p>
          </div>

          <div className="rounded-lg overflow-hidden h-[400px] relative">
            <Image src="/san-francisco-tech-district-map.png" alt="Map Location" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">Find answers to common questions about working with us.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-[#1a1a1a] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">How quickly can you start on my project?</h3>
              <p className="text-gray-400">
                We typically begin new projects within 1-2 weeks of finalizing the agreement. For urgent needs, we can
                sometimes accommodate faster timelines.
              </p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">What is your typical project process?</h3>
              <p className="text-gray-400">
                Our process includes discovery, planning, design, development, testing, and launch phases. We maintain
                regular communication throughout to ensure alignment with your vision.
              </p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">Do you offer ongoing support after launch?</h3>
              <p className="text-gray-400">
                Yes, we offer various support and maintenance packages to ensure your solution continues to perform
                optimally after launch. We can tailor these to your specific needs.
              </p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                What information do you need to provide a quote?
              </h3>
              <p className="text-gray-400">
                To provide an accurate quote, we need to understand your project goals, requirements, timeline, and
                budget constraints. The more details you can provide, the more precise our estimate will be.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
