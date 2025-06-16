"use client"

import type React from "react"

import { useRef, useEffect, useState } from "react"
import {
  Clock,
  Code2,
  Users,
  Calendar,
  CheckCircle,
  CalendarDays,
  Clock3,
  User,
  Mail,
  Briefcase,
  MessageSquare,
  Phone,
  ChevronLeft,
  ChevronRight,
  Shield,
  Wrench,
  BarChart3,
  Video,
} from "lucide-react"
import Link from "next/link"
import { Counter } from "@/components/counter"
import { TechTabs } from "@/components/tech-tabs"
import { services } from "@/lib/services-data" // Import services from the data file

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const [isStatsVisible, setIsStatsVisible] = useState(false)
  const [meetingState, setMeetingState] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "", // Add this new field
    meetingType: "video",
    date: "",
    time: "",
    timezone: "UTC",
    topic: "",
  })
  const [meetingErrors, setMeetingErrors] = useState<Record<string, string>>({})
  const [isScheduling, setIsScheduling] = useState(false)
  const [isScheduled, setIsScheduled] = useState(false)
  const [selectedDate, setSelectedDate] = useState<string>("")
  const [availableTimes, setAvailableTimes] = useState<string[]>([])
  const [reasonsActiveSlide, setReasonsActiveSlide] = useState(0)
  const [testimonialActiveSlide, setTestimonialActiveSlide] = useState(0)
  const [typedText, setTypedText] = useState("")
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const codingTexts = [
    "function init() { return new Promise(); }",
    "const data = await fetch('/api/data');",
    "import React, { useState } from 'react';",
    "export default function App() { return <div>Hello</div>; }",
    '<Completrix code="amazing" />',
  ]

  // Typing effect for code snippets
  useEffect(() => {
    const text = codingTexts[currentTextIndex]
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(text.substring(0, typedText.length + 1))
        setTypingSpeed(150)

        if (typedText.length === text.length) {
          // Pause at the end of typing
          setTypingSpeed(2000)
          setIsDeleting(true)
        }
      } else {
        setTypedText(text.substring(0, typedText.length - 1))
        setTypingSpeed(50)

        if (typedText.length === 0) {
          setIsDeleting(false)
          setCurrentTextIndex((currentTextIndex + 1) % codingTexts.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [typedText, currentTextIndex, isDeleting, typingSpeed, codingTexts])

  // Check if stats section is visible for triggering animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsStatsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  // Handle meeting form input changes
  const handleMeetingInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setMeetingState((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (meetingErrors[name]) {
      setMeetingErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }

    // Generate available times when date is selected
    if (name === "date") {
      setSelectedDate(value)
      generateAvailableTimes(value)
    }
  }

  // Generate available times based on selected date
  const generateAvailableTimes = (date: string) => {
    // This is a simplified example - in a real app, you would fetch available times from your backend
    // For now, we'll generate some sample times
    const times = []
    const dayOfWeek = new Date(date).getDay()

    // Weekdays (Monday-Friday)
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      for (let hour = 9; hour <= 17; hour++) {
        times.push(`${hour}:00`)
        if (hour < 17) times.push(`${hour}:30`)
      }
    }
    // Weekend (Saturday-Sunday)
    else {
      for (let hour = 10; hour <= 15; hour++) {
        times.push(`${hour}:00`)
        if (hour < 15) times.push(`${hour}:30`)
      }
    }

    setAvailableTimes(times)
  }

  // Validate meeting form
  const validateMeetingForm = () => {
    const errors: Record<string, string> = {}

    if (!meetingState.fullName.trim()) errors.fullName = "Full name is required"
    if (!meetingState.email.trim()) {
      errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(meetingState.email)) {
      errors.email = "Email is invalid"
    }
    if (!meetingState.date) errors.date = "Please select a date"
    if (!meetingState.time) errors.time = "Please select a time"
    if (!meetingState.topic.trim()) errors.topic = "Please provide a meeting topic"

    return errors
  }

  // Handle meeting form submission
  const handleMeetingSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const errors = validateMeetingForm()
    if (Object.keys(errors).length > 0) {
      setMeetingErrors(errors)
      return
    }

    setIsScheduling(true)

    // Simulate form submission
    setTimeout(() => {
      setIsScheduling(false)
      setIsScheduled(true)
      setMeetingState({
        fullName: "",
        email: "",
        companyName: "",
        phone: "",
        meetingType: "video",
        date: "",
        time: "",
        timezone: "UTC",
        topic: "",
      })
      setSelectedDate("")
      setAvailableTimes([])

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsScheduled(false)
      }, 5000)
    }, 1500)
  }

  // Get min date (today) for date picker
  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split("T")[0]
  }

  // Get max date (3 months from now) for date picker
  const getMaxDate = () => {
    const maxDate = new Date()
    maxDate.setMonth(maxDate.getMonth() + 3)
    return maxDate.toISOString().split("T")[0]
  }

  // Handle smooth scroll to services section
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-section")
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  }

  // Stats data
  const stats = [
    {
      value: 8,
      suffix: "+",
      label: "Years of experience",
      icon: Calendar,
    },
    {
      value: 1250,
      suffix: "+",
      label: "Projects Completed",
      icon: Code2,
    },
    {
      value: 75,
      suffix: "+",
      label: "Skilled Developers",
      icon: Users,
    },
    {
      value: 15,
      suffix: "",
      label: "Days, Average Completion time",
      icon: Clock,
    },
  ]

  // Meeting types
  const meetingTypes = [
    { id: "video", label: "Video Call", icon: Video },
    { id: "phone", label: "Phone Call", icon: Phone },
  ]

  // Timezones
  const timezones = [
    "UTC",
    "UTC+1 (CET)",
    "UTC+2 (EET)",
    "UTC+3 (MSK)",
    "UTC+4 (GST)",
    "UTC+5 (PKT)",
    "UTC+5:30 (IST)",
    "UTC+8 (CST)",
    "UTC+9 (JST)",
    "UTC+10 (AEST)",
    "UTC-5 (EST)",
    "UTC-6 (CST)",
    "UTC-7 (MST)",
    "UTC-8 (PST)",
  ]

  return (
    <main className="min-h-screen">
      {/* Hero Section with Gradient Background and Enhanced Coding Animation */}
      <section className="relative w-full h-screen bg-black overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 opacity-30">
            <div
              className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-pink-600/20 animate-pulse"
              style={{ animationDuration: "8s" }}
            ></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-pink-600/10 blur-3xl"></div>
        </div>

        {/* Enhanced Coding Animation Background */}
        <div className="absolute inset-0 z-10 opacity-20">
          <div className="code-rain"></div>

          {/* Floating Code Snippets */}
          <div className="floating-code-snippets">
            <div className="code-snippet code-snippet-1">
              <pre>{"const api = await fetch('/data');"}</pre>
            </div>
            <div className="code-snippet code-snippet-2">
              <pre>{"function optimize() { return true; }"}</pre>
            </div>
            <div className="code-snippet code-snippet-3">
              <pre>{"import React from 'react';"}</pre>
            </div>
            <div className="code-snippet code-snippet-4">
              <pre>{"export default App;"}</pre>
            </div>
            <div className="code-snippet code-snippet-5">
              <pre>{"const [state, setState] = useState();"}</pre>
            </div>
          </div>
        </div>

        {/* Typing Effect Terminal */}
        <div className="absolute z-10 bottom-32 left-1/2 transform -translate-x-1/2 w-11/12 md:w-3/4 lg:w-1/2 max-w-3xl">
          <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-gray-700 p-4 terminal-window">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <div className="ml-4 text-xs text-gray-400">developer@completrix:~</div>
            </div>
            <div className="font-mono text-sm text-green-400">
              <span className="text-blue-400">$ </span>
              <span className="typing-text">{typedText}</span>
              <span className="typing-cursor">|</span>
            </div>
          </div>
        </div>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20 p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 max-w-4xl drop-shadow-[0_2px_4px_rgba(249,115,22,0.5)] text-shadow-lg">
            Transforming Ideas into Powerful Digital Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl drop-shadow-[0_2px_3px_rgba(219,39,119,0.5)]">
            Custom software development services tailored to your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-medium rounded-md transition-all duration-300 shadow-[0_4px_14px_rgba(249,115,22,0.25)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.3)]"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium rounded-md transition-all duration-300 backdrop-blur-sm shadow-[0_4px_14px_rgba(249,115,22,0.25)] hover:shadow-[0_6px_20px_rgba(219,39,119,0.3)]"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* New Scroll Down Indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20 focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-full"
          aria-label="Scroll down to services"
        >
          <div className="h-12 w-5 rounded-full border-2 border-white flex items-center justify-center scroll-container relative overflow-hidden">
            <div className="h-2 w-2 bg-white rounded-full absolute scroll-dot"></div>
          </div>
        </button>
      </section>

      {/* Services Section */}
      <section id="services-section" className="py-16 px-4 md:px-8" style={{ backgroundColor: "rgb(15, 15, 15)" }}>
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Services</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We offer a comprehensive range of digital solutions to help businesses transform and thrive in the digital
              landscape.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              // Create a list of service items based on the service title
              const serviceItems = getServiceItems(service.title)

              return (
                <Link
                  key={index}
                  href={service.href} // Use the exact href from services-data.ts
                  className="bg-[#1a1a1a] rounded-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover-gradient-border group"
                  style={{
                    position: "relative",
                    padding: "2px", // This creates space for our gradient border
                    background: "linear-gradient(to right, #1a1a1a, #1a1a1a)", // Default background same as card
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "linear-gradient(to right, #f97316, #db2777)" // Orange-500 to Pink-600
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "linear-gradient(to right, #1a1a1a, #1a1a1a)"
                  }}
                  aria-label={`Learn more about ${service.title}`}
                >
                  <div className="bg-[#1a1a1a] rounded-lg p-6 flex flex-col h-full" style={{ height: "100%" }}>
                    {/* Service Icon and Title stacked vertically and aligned left */}
                    <div className="flex flex-col items-start mb-5">
                      <div className="mb-3">
                        <service.icon className="h-10 w-10 text-gray-300 group-hover:text-orange-500 transition-colors" />
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-orange-500 transition-colors">
                        {service.title}
                      </h3>
                    </div>

                    {/* Service Items - Now with smaller text */}
                    <ul className="space-y-1 text-gray-400 mb-4 flex-grow text-xs">
                      {serviceItems.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center">
                          <span className="text-orange-500 mr-2 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link - Positioned at bottom right */}
                    <div className="flex justify-end mt-auto">
                      <span className="text-orange-500 group-hover:text-pink-600 transition-colors inline-flex items-center text-sm">
                        Learn more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section - Full width background */}
      <section ref={statsRef} className="pb-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12 pt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">We are Trusted across the globe</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {isStatsVisible ? <Counter end={stat.value} suffix={stat.suffix} /> : <span>0{stat.suffix}</span>}
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technologies we use at Completrix</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to deliver robust, scalable, and innovative solutions for our
              clients.
            </p>
          </div>

          <TechTabs />
        </div>
      </section>

      {/* Schedule Meeting Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Schedule a Meeting</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Book a consultation with our expert software developers to discuss your project requirements and explore
                solutions.
              </p>
            </div>

            {/* Meeting Scheduling Form */}
            <div className="bg-[#1a1a1a] rounded-lg p-6 md:p-10">
              {isScheduled ? (
                <div className="flex flex-col items-center justify-center py-10">
                  <div className="bg-gradient-to-r from-orange-500/20 to-pink-600/20 rounded-full p-4 mb-6">
                    <CheckCircle className="h-16 w-16 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Meeting Scheduled!</h3>
                  <p className="text-gray-400 text-center max-w-md">
                    Your meeting has been scheduled successfully. You will receive a confirmation email with meeting
                    details and calendar invitation shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleMeetingSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name Field */}
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                        Full Name <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={meetingState.fullName}
                          onChange={handleMeetingInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-[#252525] border ${
                            meetingErrors.fullName ? "border-red-500" : "border-gray-700"
                          } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500`}
                          placeholder="John Doe"
                        />
                      </div>
                      {meetingErrors.fullName && <p className="mt-1 text-sm text-red-500">{meetingErrors.fullName}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="meetingEmail" className="block text-sm font-medium text-gray-300 mb-1">
                        Email Address <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="email"
                          id="meetingEmail"
                          name="email"
                          value={meetingState.email}
                          onChange={handleMeetingInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-[#252525] border ${
                            meetingErrors.email ? "border-red-500" : "border-gray-700"
                          } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500`}
                          placeholder="john@example.com"
                        />
                      </div>
                      {meetingErrors.email && <p className="mt-1 text-sm text-red-500">{meetingErrors.email}</p>}
                    </div>

                    {/* Phone Number Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number <span className="text-gray-500">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={meetingState.phone}
                          onChange={handleMeetingInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-[#252525] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="+1 (123) 456-7890"
                        />
                      </div>
                    </div>

                    {/* Company Name Field */}
                    <div>
                      <label htmlFor="companyName" className="block text-sm font-medium text-gray-300 mb-1">
                        Company Name <span className="text-gray-500">(Optional)</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Briefcase className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={meetingState.companyName}
                          onChange={handleMeetingInputChange}
                          className="w-full pl-10 pr-4 py-3 bg-[#252525] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    {/* Meeting Type Field */}
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3">Meeting Type</label>
                      <div className="grid grid-cols-2 gap-4">
                        {meetingTypes.map((type) => (
                          <div
                            key={type.id}
                            className={`flex items-center p-3 rounded-md cursor-pointer transition-all ${
                              meetingState.meetingType === type.id
                                ? "bg-gradient-to-r from-orange-500/20 to-pink-600/20 border border-orange-500"
                                : "bg-[#252525] border border-gray-700 hover:border-gray-500"
                            }`}
                            onClick={() => setMeetingState((prev) => ({ ...prev, meetingType: type.id }))}
                          >
                            <type.icon className="h-5 w-5 mr-2 text-gray-300" />
                            <span className="text-white">{type.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Date Field */}
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-1">
                        Date <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CalendarDays className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          min={getMinDate()}
                          max={getMaxDate()}
                          value={meetingState.date}
                          onChange={handleMeetingInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-[#252525] border ${
                            meetingErrors.date ? "border-red-500" : "border-gray-700"
                          } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500`}
                        />
                      </div>
                      {meetingErrors.date && <p className="mt-1 text-sm text-red-500">{meetingErrors.date}</p>}
                    </div>

                    {/* Time Field */}
                    <div>
                      <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-1">
                        Time <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Clock3 className="h-5 w-5 text-gray-500" />
                        </div>
                        <select
                          id="time"
                          name="time"
                          value={meetingState.time}
                          onChange={handleMeetingInputChange}
                          disabled={!selectedDate}
                          className={`w-full pl-10 pr-4 py-3 bg-[#252525] border ${
                            meetingErrors.time ? "border-red-500" : "border-gray-700"
                          } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                            !selectedDate ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          <option value="">Select a time slot</option>
                          {availableTimes.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                      {!selectedDate && <p className="mt-1 text-sm text-gray-500">Please select a date first</p>}
                      {meetingErrors.time && <p className="mt-1 text-sm text-red-500">{meetingErrors.time}</p>}
                    </div>

                    {/* Timezone Field */}
                    <div>
                      <label htmlFor="timezone" className="block text-sm font-medium text-gray-300 mb-1">
                        Timezone
                      </label>
                      <select
                        id="timezone"
                        name="timezone"
                        value={meetingState.timezone}
                        onChange={handleMeetingInputChange}
                        className="w-full px-4 py-3 bg-[#252525] border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                      >
                        {timezones.map((timezone) => (
                          <option key={timezone} value={timezone}>
                            {timezone}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Meeting Topic Field */}
                    <div className="md:col-span-2">
                      <label htmlFor="topic" className="block text-sm font-medium text-gray-300 mb-1">
                        Meeting Topic <span className="text-orange-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                          type="text"
                          id="topic"
                          name="topic"
                          value={meetingState.topic}
                          onChange={handleMeetingInputChange}
                          className={`w-full pl-10 pr-4 py-3 bg-[#252525] border ${
                            meetingErrors.topic ? "border-red-500" : "border-gray-700"
                          } rounded-md text-white focus:outline-none focus:ring-2 focus:ring-orange-500`}
                          placeholder="e.g., Website Development Consultation, Mobile App Project Discussion"
                        />
                      </div>
                      {meetingErrors.topic && <p className="mt-1 text-sm text-red-500">{meetingErrors.topic}</p>}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-center mt-8">
                    <button
                      type="submit"
                      disabled={isScheduling}
                      className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-medium rounded-md transition-all duration-300 flex items-center justify-center min-w-[200px]"
                    >
                      {isScheduling ? (
                        <span className="flex items-center">
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
                          Processing...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Schedule Meeting <CalendarDays className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Reasons to Join Section - Carousel */}
      <section className="py-20 bg-[#0f0f0f] border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Why Choose Completrix</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Partner with us to transform your ideas into powerful digital solutions that drive growth and
                innovation.
              </p>
            </div>

            {/* Reasons Carousel */}
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${reasonsActiveSlide * 100}%)` }}
                >
                  {/* Slide 1 */}
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Reason 1 */}
                      <div className="bg-[#1a1a1a] rounded-lg p-6 transition-transform hover:translate-y-[-8px]">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mb-6">
                          <Code2 className="h-7 w-7 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Technical Excellence</h3>
                        <p className="text-gray-400">
                          Our team of skilled developers stays at the cutting edge of technology to deliver robust,
                          scalable, and future-proof solutions.
                        </p>
                      </div>

                      {/* Reason 2 */}
                      <div className="bg-[#1a1a1a] rounded-lg p-6 transition-transform hover:translate-y-[-8px]">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mb-6">
                          <Users className="h-7 w-7 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Dedicated Team</h3>
                        <p className="text-gray-400">
                          Work with a dedicated team that's committed to understanding your business needs and
                          delivering tailored solutions.
                        </p>
                      </div>

                      {/* Reason 3 */}
                      <div className="bg-[#1a1a1a] rounded-lg p-6 transition-transform hover:translate-y-[-8px]">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mb-6">
                          <Clock className="h-7 w-7 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Timely Delivery</h3>
                        <p className="text-gray-400">
                          We pride ourselves on meeting deadlines without compromising on quality, ensuring your project
                          launches on schedule.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 */}
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Reason 4 */}
                      <div className="bg-[#1a1a1a] rounded-lg p-6 transition-transform hover:translate-y-[-8px]">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mb-6">
                          <Shield className="h-7 w-7 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Security First</h3>
                        <p className="text-gray-400">
                          We implement industry-leading security practices to protect your data and applications from
                          potential threats.
                        </p>
                      </div>

                      {/* Reason 5 */}
                      <div className="bg-[#1a1a1a] rounded-lg p-6 transition-transform hover:translate-y-[-8px]">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mb-6">
                          <Wrench className="h-7 w-7 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Ongoing Support</h3>
                        <p className="text-gray-400">
                          Our relationship doesn't end at deployment. We provide continuous support and maintenance to
                          ensure long-term success.
                        </p>
                      </div>

                      {/* Reason 6 */}
                      <div className="bg-[#1a1a1a] rounded-lg p-6 transition-transform hover:translate-y-[-8px]">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500/20 to-pink-600/20 flex items-center justify-center mb-6">
                          <BarChart3 className="h-7 w-7 text-orange-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-3">Results-Driven</h3>
                        <p className="text-gray-400">
                          We focus on delivering solutions that generate real business value and measurable results for
                          your organization.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => setReasonsActiveSlide((prev) => (prev > 0 ? prev - 1 : 1))}
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 focus:outline-none"
                aria-label="Previous slide"
              >
                <ChevronLeft
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </ChevronLeft>
              </button>
              <button
                onClick={() => setReasonsActiveSlide((prev) => (prev < 1 ? prev + 1 : 0))}
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 focus:outline-none"
                aria-label="Next slide"
              >
                <ChevronRight
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </ChevronRight>
              </button>

              {/* Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => setReasonsActiveSlide(index)}
                    className={`w-3 h-3 rounded-full focus:outline-none transition-colors ${
                      reasonsActiveSlide === index
                        ? "bg-gradient-to-r from-orange-500 to-pink-600"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[1200px] h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/futuristic-tech-office.png"
                alt="Completrix services banner"
                className="w-full h-full object-cover brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 flex flex-col justify-center px-12 md:px-24">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                  Transform Your Business with Cutting-Edge Technology
                </h2>
                <p className="text-xl text-gray-200 mb-8 max-w-lg">
                  Partner with Completrix to bring your digital vision to life with our expert development team.
                </p>
                <div>
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-600 hover:to-pink-700 text-white font-medium rounded-md transition-all duration-300 inline-block"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Carousel */}
      <section className="py-20 bg-[#0f0f0f] border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Clients Say</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-pink-600 mx-auto mb-6"></div>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about working with Completrix.
              </p>
            </div>

            {/* Testimonials Carousel */}
            <div className="relative">
              {/* Carousel Container */}
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${testimonialActiveSlide * 100}%)` }}
                >
                  {/* Slide 1 - Multiple testimonials */}
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Testimonial 1 */}
                      <div className="bg-[#1a1a1a] rounded-lg p-8 relative h-full">
                        {/* Quote mark */}
                        <div className="absolute top-6 right-6 text-6xl text-gray-700 opacity-50 leading-none">"</div>

                        <p className="text-gray-300 mb-6 relative z-10">
                          Completrix transformed our outdated platform into a modern, user-friendly system that has
                          significantly improved our customer engagement. Their team was professional, responsive, and
                          delivered beyond our expectations.
                        </p>

                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                            JD
                          </div>
                          <div className="ml-4">
                            <h4 className="text-white font-semibold">John Doe</h4>
                            <p className="text-gray-400 text-sm">CTO, TechInnovate Inc.</p>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial 2 */}
                      <div className="bg-[#1a1a1a] rounded-lg p-8 relative h-full">
                        {/* Quote mark */}
                        <div className="absolute top-6 right-6 text-6xl text-gray-700 opacity-50 leading-none">"</div>

                        <p className="text-gray-300 mb-6 relative z-10">
                          We approached Completrix with a complex e-commerce project, and they delivered a solution that
                          not only met our requirements but also improved our conversion rates by 40%. Their attention
                          to detail and technical expertise is impressive.
                        </p>

                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                            SJ
                          </div>
                          <div className="ml-4">
                            <h4 className="text-white font-semibold">Sarah Johnson</h4>
                            <p className="text-gray-400 text-sm">Marketing Director, ShopEase</p>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial 3 */}
                      <div className="bg-[#1a1a1a] rounded-lg p-8 relative h-full">
                        {/* Quote mark */}
                        <div className="absolute top-6 right-6 text-6xl text-gray-700 opacity-50 leading-none">"</div>

                        <p className="text-gray-300 mb-6 relative z-10">
                          The mobile app developed by Completrix has revolutionized how we interact with our customers.
                          The team's expertise in UI/UX design and development resulted in an intuitive app that our
                          users love. Highly recommended!
                        </p>

                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                            RP
                          </div>
                          <div className="ml-4">
                            <h4 className="text-white font-semibold">Robert Parker</h4>
                            <p className="text-gray-400 text-sm">CEO, MobileFirst Solutions</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2 - Multiple testimonials */}
                  <div className="w-full flex-shrink-0 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {/* Testimonial 4 */}
                      <div className="bg-[#1a1a1a] rounded-lg p-8 relative h-full">
                        {/* Quote mark */}
                        <div className="absolute top-6 right-6 text-6xl text-gray-700 opacity-50 leading-none">"</div>

                        <p className="text-gray-300 mb-6 relative z-10">
                          Working with Completrix on our AI-powered analytics platform was a game-changer. Their team's
                          technical knowledge and collaborative approach ensured that we got exactly what we needed, on
                          time and within budget.
                        </p>

                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                            AL
                          </div>
                          <div className="ml-4">
                            <h4 className="text-white font-semibold">Amanda Lee</h4>
                            <p className="text-gray-400 text-sm">Product Manager, DataVision Analytics</p>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial 5 */}
                      <div className="bg-[#1a1a1a] rounded-lg p-8 relative h-full">
                        {/* Quote mark */}
                        <div className="absolute top-6 right-6 text-6xl text-gray-700 opacity-50 leading-none">"</div>

                        <p className="text-gray-300 mb-6 relative z-10">
                          Completrix helped us migrate our legacy system to a modern cloud architecture. The transition
                          was smooth, and we've seen significant improvements in performance and reliability. Their
                          team's expertise in cloud technologies is exceptional.
                        </p>

                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                            MK
                          </div>
                          <div className="ml-4">
                            <h4 className="text-white font-semibold">Michael Kim</h4>
                            <p className="text-gray-400 text-sm">IT Director, Global Solutions</p>
                          </div>
                        </div>
                      </div>

                      {/* Testimonial 6 */}
                      <div className="bg-[#1a1a1a] rounded-lg p-8 relative h-full">
                        {/* Quote mark */}
                        <div className="absolute top-6 right-6 text-6xl text-gray-700 opacity-50 leading-none">"</div>

                        <p className="text-gray-300 mb-6 relative z-10">
                          The e-commerce platform Completrix built for us has transformed our business. Sales have
                          increased by 65% since launch, and the user experience feedback has been overwhelmingly
                          positive. They truly understand what makes a successful online store.
                        </p>

                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl">
                            LR
                          </div>
                          <div className="ml-4">
                            <h4 className="text-white font-semibold">Lisa Rodriguez</h4>
                            <p className="text-gray-400 text-sm">Owner, Boutique Essentials</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={() => setTestimonialActiveSlide((prev) => (prev > 0 ? prev - 1 : 1))}
                className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 focus:outline-none"
                aria-label="Previous testimonials"
              >
                <ChevronLeft
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </ChevronLeft>
              </button>
              <button
                onClick={() => setTestimonialActiveSlide((prev) => (prev < 1 ? prev + 1 : 0))}
                className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 focus:outline-none"
                aria-label="Next testimonials"
              >
                <ChevronRight
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </ChevronRight>
              </button>

              {/* Indicators */}
              <div className="flex justify-center mt-8 space-x-2">
                {[0, 1].map((index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialActiveSlide(index)}
                    className={`w-3 h-3 rounded-full focus:outline-none transition-colors ${
                      testimonialActiveSlide === index
                        ? "bg-gradient-to-r from-orange-500 to-pink-600"
                        : "bg-gray-600 hover:bg-gray-500"
                    }`}
                    aria-label={`Go to testimonial slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center">
              <Link
                href="/clients"
                className="inline-flex items-center text-orange-500 hover:text-pink-600 transition-colors"
              >
                View more success stories
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
        </div>
      </section>
    </main>
  )
}

// Helper function to get service items based on service title
function getServiceItems(serviceTitle: string): string[] {
  switch (serviceTitle) {
    case "Web Development":
      return [
        "Custom Website Development",
        "E-commerce Website Development",
        "Web Application Development",
        "CMS Development",
        "Progressive Web Apps",
      ]
    case "Mobile App Development":
      return [
        "Android App Development",
        "iOS App Development",
        "Cross-Platform App Development",
        "Hybrid App Development",
        "App Maintenance & Support",
      ]
    case "AI/ML Solutions":
      return [
        "Chatbot Development",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Applications",
        "AI Model Training & Deployment",
      ]
    case "Cloud Services":
      return [
        "Cloud Application Development",
        "Cloud Migration",
        "Cloud Infrastructure Setup",
        "DevOps & CI/CD Automation",
        "Data Backup & Disaster Recovery",
      ]
    case "Custom Software":
      return [
        "Enterprise Software Development",
        "ERP & CRM Solutions",
        "Inventory & Billing Software",
        "POS (Point of Sale) Systems",
        "SaaS Product Development",
      ]
    case "Software Support":
      return [
        "Bug Fixes & Troubleshooting",
        "Performance Optimisation",
        "Version Upgrades",
        "Security Patches",
        "SLA-Based Support Services",
      ]
    case "Cybersecurity":
      return [
        "Vulnerability Assessment",
        "Application Security",
        "Data Encryption Solutions",
        "Secure Authentication Systems",
        "Compliance Management",
      ]
    case "UI/UX Design":
      return [
        "Wireframing & Prototyping",
        "Website & App UI Design",
        "UX Research & Testing",
        "Responsive Design",
        "Brand Identity & Graphics",
      ]
    case "E-commerce":
      return [
        "Custom E-commerce Platforms",
        "Marketplace Development",
        "Shopping Cart Integration",
        "Payment Gateway Integration",
        "Order & Inventory Management",
      ]
    case "Digital Marketing":
      return [
        "SEO & SEM",
        "Social Media Marketing",
        "Paid Ad Campaigns",
        "Email Marketing",
        "Content Creation & Strategy",
      ]
    case "Data Analytics & BI":
      return [
        "Dashboard & Reporting Tools",
        "Business Intelligence Solutions",
        "Data Visualisation",
        "Data Warehousing",
        "ETL Services",
      ]
    case "API Development":
      return [
        "Custom API Development",
        "Third-party API Integration",
        "Payment, SMS, Maps, and Shipping APIs",
        "RESTful and GraphQL APIs",
        "API Migration & Deployment",
      ]
    default:
      return [
        "Custom Development",
        "Maintenance & Support",
        "Consulting Services",
        "Integration Services",
        "Training & Documentation",
      ]
  }
}
