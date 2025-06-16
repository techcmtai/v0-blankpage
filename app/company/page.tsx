"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Users,
  Target,
  Eye,
  Award,
  Heart,
  Lightbulb,
  Briefcase,
  Globe,
  ChevronDown,
  ChevronUp,
  Mail,
  Linkedin,
  Twitter,
  Github,
  MapPin,
  Phone,
} from "lucide-react"

export default function CompanyPage() {
  const [activeTab, setActiveTab] = useState("mission")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  // Company core values
  const coreValues = [
    {
      icon: Heart,
      title: "Passion",
      description: "We're passionate about technology and delivering solutions that make a difference.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every project, focusing on quality and attention to detail.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and collaborative partnerships with our clients.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace innovation and continuously explore new technologies and approaches.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable results that drive business growth for our clients.",
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We maintain open and honest communication throughout the development process.",
    },
  ]

  // Team members data
  const teamMembers = [
    {
      name: "Anurag Singh",
      role: "Founder & CTO",
      bio: "With over 15 years of experience in software development and business leadership, Alex founded Completrix with a vision to create innovative digital solutions that transform businesses.",
      image: "/professional-ceo-portrait.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Samantha Lee",
      role: "CTO",
      bio: "Samantha brings 12+ years of expertise in software architecture and emerging technologies. She leads our technical strategy and ensures we stay at the cutting edge of development practices.",
      image: "/professional-female-cto.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Design",
      bio: "Michael is an award-winning UX/UI designer with a passion for creating intuitive, beautiful interfaces that delight users while driving business results.",
      image: "/placeholder.svg?key=39i4m",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Priya Patel",
      role: "Lead Developer",
      bio: "Priya is a full-stack development expert specializing in scalable architecture. She leads our development team and mentors junior developers.",
      image: "/professional-female-developer.png",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "David Kim",
      role: "AI & ML Specialist",
      bio: "David has pioneered several AI implementations for enterprise clients. He leads our machine learning initiatives and keeps us at the forefront of AI innovation.",
      image: "/placeholder.svg?key=a2jh6",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Emma Wilson",
      role: "Project Manager",
      bio: "Emma ensures our projects are delivered on time and within budget. Her exceptional organizational skills and client communication make complex projects run smoothly.",
      image: "/placeholder.svg?key=m9jjz",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
  ]

  // Company timeline data
  const timelineEvents = [
    {
      year: 2015,
      title: "Company Founded",
      description:
        "Completrix was founded with a mission to deliver innovative software solutions to businesses of all sizes.",
    },
    {
      year: 2016,
      title: "First Major Client",
      description:
        "Secured our first enterprise client and delivered a successful e-commerce platform that increased their sales by 45%.",
    },
    {
      year: 2017,
      title: "Team Expansion",
      description:
        "Grew our team to 15 talented developers, designers, and project managers to handle increasing client demand.",
    },
    {
      year: 2018,
      title: "Mobile Development Division",
      description:
        "Launched our dedicated mobile app development division to focus on creating exceptional mobile experiences.",
    },
    {
      year: 2019,
      title: "International Expansion",
      description: "Opened our first international office and began serving clients across Europe and Asia.",
    },
    {
      year: 2020,
      title: "AI & ML Department",
      description:
        "Established our AI and Machine Learning department to help clients leverage the power of artificial intelligence.",
    },
    {
      year: 2021,
      title: "Industry Recognition",
      description: "Received multiple industry awards for our innovative solutions and client satisfaction.",
    },
    {
      year: 2022,
      title: "Cloud Services Launch",
      description: "Expanded our service offerings to include comprehensive cloud migration and management solutions.",
    },
    {
      year: 2023,
      title: "50+ Team Members",
      description: "Reached the milestone of 50+ team members and 200+ successfully completed projects.",
    },
  ]

  // Expertise areas
  const expertiseAreas = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "From responsive websites to complex web applications, we create digital experiences that engage users and drive conversions.",
    },
    {
      icon: Briefcase,
      title: "Enterprise Solutions",
      description:
        "Custom software solutions designed to streamline operations, improve efficiency, and drive growth for businesses.",
    },
    {
      icon: Lightbulb,
      title: "AI & Machine Learning",
      description:
        "Cutting-edge AI solutions that provide actionable insights, automate processes, and create competitive advantages.",
    },
  ]

  // FAQ data
  const faqs = [
    {
      question: "What makes Completrix different from other development companies?",
      answer:
        "At Completrix, we combine technical excellence with a deep understanding of business needs. Our collaborative approach means we work as an extension of your team, not just as vendors. We focus on delivering solutions that drive real business value, not just meeting technical requirements.",
    },
    {
      question: "How does your development process work?",
      answer:
        "Our development process follows an agile methodology with regular client touchpoints. We begin with a discovery phase to understand your needs, create a detailed project plan, develop in iterative sprints with continuous feedback, and provide ongoing support after launch. This ensures transparency and allows for adjustments throughout the project.",
    },
    {
      question: "What size companies do you typically work with?",
      answer:
        "We work with companies of all sizes, from startups to large enterprises. Our flexible approach allows us to scale our services to meet the needs of any organization, whether you need a complete digital transformation or assistance with a specific project.",
    },
    {
      question: "How do you ensure the quality of your deliverables?",
      answer:
        "Quality is built into every step of our process. We implement rigorous code reviews, automated testing, and manual QA procedures. Our developers follow industry best practices, and we maintain comprehensive documentation. Before delivery, all projects undergo thorough testing to ensure they meet our high standards.",
    },
    {
      question: "What happens after my project is completed?",
      answer:
        "Our relationship doesn't end at project completion. We offer various support and maintenance packages to ensure your solution continues to perform optimally. Many of our clients maintain long-term partnerships with us for ongoing development, updates, and strategic technology guidance.",
    },
  ]

  return (
    <main className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image src="/futuristic-tech-office.png" alt="Completrix Office" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">
              About Completrix
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            We're a team of passionate technologists dedicated to transforming businesses through innovative digital
            solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#team"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-medium rounded-md hover:opacity-90 transition-opacity"
            >
              Meet Our Team
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 bg-transparent border-2 border-orange-500 text-white font-medium rounded-md hover:bg-orange-500/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Tabs Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Completrix</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Learn about our company's mission, vision, values, and the team behind Completrix.
            </p>
          </div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {["mission", "vision", "story"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-md transition-colors ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                    : "bg-[#1a1a1a] text-gray-300 hover:bg-[#252525]"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-[#1a1a1a] rounded-lg p-8 mb-12">
            {activeTab === "mission" && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-300 mb-6">
                  At Completrix, our mission is to empower businesses through innovative technology solutions that drive
                  growth, efficiency, and competitive advantage. We are committed to delivering exceptional value
                  through our expertise in software development, digital transformation, and emerging technologies.
                </p>
                <p className="text-gray-300">
                  We believe that technology should be an enabler, not a barrier. That's why we focus on creating
                  intuitive, scalable solutions that solve real business problems and create measurable impact. Our
                  collaborative approach ensures that we understand your unique challenges and deliver solutions that
                  exceed expectations.
                </p>
              </div>
            )}

            {activeTab === "vision" && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-300 mb-6">
                  We envision a world where businesses of all sizes can harness the full potential of technology to
                  innovate, grow, and make a positive impact. Completrix aims to be at the forefront of this
                  transformation, recognized globally as a trusted partner that consistently delivers cutting-edge
                  solutions with integrity and excellence.
                </p>
                <p className="text-gray-300">
                  Our vision extends beyond just building software; we strive to build lasting relationships with our
                  clients, becoming their long-term technology partner. We continuously invest in our team's growth and
                  in emerging technologies to ensure we remain at the cutting edge of innovation.
                </p>
              </div>
            )}

            {activeTab === "story" && (
              <div className="animate-fadeIn">
                <h3 className="text-2xl font-bold mb-4">Our Story</h3>
                <p className="text-gray-300 mb-6">
                  Completrix was founded in 2015 by a group of passionate technologists who saw a gap in the market for
                  a development company that truly understood both technology and business. Starting with a small team
                  of five developers, we quickly gained a reputation for delivering high-quality solutions that drove
                  real business results.
                </p>
                <p className="text-gray-300 mb-6">
                  As our client base grew, so did our team and expertise. We expanded our services beyond web
                  development to include mobile applications, enterprise solutions, AI and machine learning, and cloud
                  services. Today, we're proud to have a diverse team of over 75 experts across multiple disciplines,
                  serving clients around the globe.
                </p>
                <p className="text-gray-300">
                  Throughout our journey, we've remained true to our founding principles: technical excellence, client
                  partnership, and a commitment to innovation. These values continue to guide us as we grow and evolve
                  in an ever-changing technological landscape.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-lg p-6 transition-transform hover:translate-y-[-8px]">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mb-6">
                  <value.icon className="h-7 w-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our talented team of experts is passionate about creating innovative solutions that drive business
              success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-[#1a1a1a] rounded-lg overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-orange-400">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/careers"
              className="inline-flex items-center text-orange-500 hover:text-pink-600 transition-colors"
            >
              Join our growing team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              From our humble beginnings to where we are today, explore the key milestones in our company's history.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-pink-600"></div>

            {/* Timeline Events */}
            <div className="relative z-10">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 border-4 border-[#0f0f0f] z-20"></div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="bg-[#1a1a1a] rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105">
                      <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 text-xs font-medium mb-2">
                        {event.year}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-gray-300">{event.description}</p>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="w-full md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We specialize in a range of technologies and services to deliver comprehensive solutions for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-lg p-8 text-center transition-transform hover:translate-y-[-8px]"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mx-auto mb-6">
                  <area.icon className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-[#1a1a1a] rounded-lg p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">200+</span>
              </div>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">75+</span>
              </div>
              <p className="text-gray-400">Team Members</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">15+</span>
              </div>
              <p className="text-gray-400">Countries Served</p>
            </div>
            <div className="bg-[#1a1a1a] rounded-lg p-6 text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text">8+</span>
              </div>
              <p className="text-gray-400">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Find answers to common questions about working with Completrix.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4 bg-[#1a1a1a] rounded-lg overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-medium text-white">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-orange-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-orange-500" />
                  )}
                </button>
                <div
                  className={`px-6 pb-6 transition-all duration-300 ease-in-out ${
                    expandedFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="bg-gradient-to-r from-orange-500/10 to-pink-600/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how Completrix can help you achieve your digital goals and drive growth through innovative
                technology solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Email Us</p>
                    <a href="mailto:info@completrix.com" className="text-white hover:text-orange-500 transition-colors">
                      info@completrix.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Call Us</p>
                    <a href="tel:+11234567890" className="text-white hover:text-orange-500 transition-colors">
                      +1 (123) 456-7890
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Visit Us</p>
                    <address className="text-white not-italic">123 Tech Plaza, San Francisco, CA</address>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-medium rounded-md transition-all duration-300 inline-block"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
