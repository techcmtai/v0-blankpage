"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react"
import { services } from "@/lib/services-data"
import { products } from "@/lib/products-data"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedMobileService, setExpandedMobileService] = useState(false)
  const [expandedMobileProduct, setExpandedMobileProduct] = useState(false)
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
  const menuTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const megaMenuRef = useRef<HTMLDivElement>(null)
  const navItemsRef = useRef<(HTMLLIElement | null)[]>([])

  // Improved hover handling with timeout
  const handleOpenMegaMenu = (menuType: string) => {
    if (menuTimeoutRef.current) {
      clearTimeout(menuTimeoutRef.current)
      menuTimeoutRef.current = null
    }
    setActiveMegaMenu(menuType)
  }

  const handleCloseMegaMenu = () => {
    // Use a small timeout to allow moving between elements
    menuTimeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null)
    }, 150) // Slightly longer timeout for better usability
  }

  // Handle clicks outside the mega menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        activeMegaMenu &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        !navItemsRef.current.some((ref) => ref && ref.contains(event.target as Node))
      ) {
        setActiveMegaMenu(null)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [activeMegaMenu])

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (menuTimeoutRef.current) {
        clearTimeout(menuTimeoutRef.current)
      }
    }
  }, [])

  // Close mega menu when screen size changes or on scroll
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setActiveMegaMenu(null)
      }
    }

    const handleScroll = () => {
      if (activeMegaMenu) {
        setActiveMegaMenu(null)
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [activeMegaMenu])

  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false)
      setExpandedMobileService(false)
      setExpandedMobileProduct(false)
    }

    window.addEventListener("popstate", handleRouteChange)

    return () => {
      window.removeEventListener("popstate", handleRouteChange)
    }
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent, menuType: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault()
      setActiveMegaMenu(activeMegaMenu === menuType ? null : menuType)
    } else if (e.key === "Escape" && activeMegaMenu) {
      setActiveMegaMenu(null)
    }
  }

  const navItems = [
    { name: "Company", href: "/company" },
    { name: "Services", href: "#", hasMegaMenu: true },
    { name: "Products", href: "/products", hasMegaMenu: true },
    { name: "Projects", href: "/projects" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      {/* Main Navbar */}
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between h-12">
          {/* Logo and Navigation - Left Side */}
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex-shrink-0 mr-6">
              <Link href="/" className="font-semibold text-lg">
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text font-bold">
                  Completrix
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center">
              <ul className="flex items-center space-x-3 lg:space-x-4">
                {navItems.map((item, index) => (
                  <li
                    key={item.name}
                    ref={(el) => (navItemsRef.current[index] = el)}
                    className="relative"
                    onMouseEnter={item.hasMegaMenu ? () => handleOpenMegaMenu(item.name) : undefined}
                    onMouseLeave={item.hasMegaMenu ? handleCloseMegaMenu : undefined}
                  >
                    <Link
                      href={item.href}
                      className="opacity-80 hover:opacity-100 transition-opacity py-3 flex items-center text-xs lg:text-sm whitespace-nowrap"
                      onClick={() => setActiveMegaMenu(null)}
                      onKeyDown={item.hasMegaMenu ? (e) => handleKeyDown(e, item.name) : undefined}
                      tabIndex={0}
                      role={item.hasMegaMenu ? "button" : undefined}
                      aria-expanded={item.hasMegaMenu ? activeMegaMenu === item.name : undefined}
                      aria-haspopup={item.hasMegaMenu ? "true" : undefined}
                    >
                      {item.name}
                      {item.hasMegaMenu && <ChevronDown className="ml-1 h-3 w-3 transition-transform" />}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA Buttons - Right Side */}
          <div className="flex items-center space-x-2">
            <Link
              href="/schedule-meeting"
              className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium rounded-md border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
              onClick={() => setActiveMegaMenu(null)}
            >
              Book a Call
            </Link>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center px-4 py-1.5 text-xs font-medium rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:from-orange-600 hover:to-pink-700 transition-all shadow-md hover:shadow-lg"
              onClick={() => setActiveMegaMenu(null)}
            >
              Get Quote
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden ml-2">
              <button
                className="opacity-80 hover:opacity-100 transition-opacity"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileMenuOpen}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Menu</span>
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* Mega Menu - Full Width */}
      {activeMegaMenu && (
        <div
          ref={megaMenuRef}
          className="absolute left-0 right-0 bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-lg overflow-hidden z-40 hidden md:block border-t border-gray-700"
          onMouseEnter={() => handleOpenMegaMenu(activeMegaMenu)}
          onMouseLeave={handleCloseMegaMenu}
          role="menu"
          aria-orientation="vertical"
        >
          <div className="max-w-screen-2xl mx-auto px-4 md:px-8 py-6">
            {activeMegaMenu === "Services" && (
              <>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h3 className="text-base md:text-lg font-semibold text-white">Our Services</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                  {services.map((service) => (
                    <Link
                      key={service.title}
                      href={service.href}
                      className="group flex items-start p-2 md:p-3 rounded-lg hover:bg-gray-700 transition-colors border border-transparent hover:border-gray-600"
                      onClick={() => setActiveMegaMenu(null)}
                      role="menuitem"
                    >
                      <div className="flex-shrink-0 flex items-center justify-center h-8 w-8 md:h-10 md:w-10 rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white">
                        <service.icon className="h-4 w-4 md:h-6 md:w-6" />
                      </div>
                      <div className="ml-3 md:ml-4 flex-1">
                        <div className="flex items-center">
                          <p className="text-sm md:text-base font-medium text-white group-hover:text-orange-400 transition-colors">
                            {service.title}
                          </p>
                          <ChevronRight className="ml-1 h-3 w-3 md:h-4 md:w-4 text-gray-400 group-hover:text-orange-400 transition-colors" />
                        </div>
                        <p className="mt-1 text-xs md:text-sm text-gray-400 line-clamp-2">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {activeMegaMenu === "Products" && (
              <>
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h3 className="text-base md:text-lg font-semibold text-white">Our Products</h3>
                  <Link
                    href="/products"
                    className="text-xs md:text-sm font-medium text-orange-400 hover:text-orange-300 flex items-center"
                    onClick={() => setActiveMegaMenu(null)}
                  >
                    View all products
                    <ChevronRight className="ml-1 h-3 w-3 md:h-4 md:w-4" />
                  </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {products.map((product) => (
                    <Link
                      key={product.title}
                      href={product.href}
                      className="group flex flex-col p-4 rounded-lg hover:bg-gray-700 transition-colors border border-transparent hover:border-gray-600"
                      onClick={() => setActiveMegaMenu(null)}
                      role="menuitem"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white">
                          <product.icon className="h-6 w-6" />
                        </div>
                        <div className="ml-4 flex-1">
                          <p className="text-base font-medium text-white group-hover:text-orange-400 transition-colors">
                            {product.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-400">{product.description}</p>
                        </div>
                      </div>
                      <div className="mt-4 pl-14">
                        <p className="text-xs font-medium text-gray-300 mb-2">Key Features:</p>
                        <ul className="text-xs text-gray-400 space-y-1">
                          {product.features.slice(0, 3).map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-orange-400 mr-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black z-50 md:hidden">
          <div className="flex flex-col h-full">
            <div className="h-12 px-4 flex items-center justify-between">
              <Link href="/" className="font-semibold text-lg" onClick={() => setMobileMenuOpen(false)}>
                <span className="bg-gradient-to-r from-orange-500 to-pink-600 text-transparent bg-clip-text font-bold">
                  Completrix
                </span>
              </Link>
              <button
                className="opacity-80 hover:opacity-100 transition-opacity"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <ul className="flex flex-col py-4 px-4 space-y-4 text-lg">
                {navItems.map((item) => (
                  <li key={item.name}>
                    {item.name === "Services" ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full py-2 text-left"
                          onClick={() => setExpandedMobileService(!expandedMobileService)}
                          aria-expanded={expandedMobileService}
                        >
                          <span>{item.name}</span>
                          <ChevronRight
                            className={`h-5 w-5 transition-transform ${expandedMobileService ? "rotate-90" : ""}`}
                          />
                        </button>

                        {expandedMobileService && (
                          <div className="mt-2 pl-4 space-y-2 bg-gray-900 rounded-lg p-3">
                            {services.map((service) => (
                              <Link
                                key={service.title}
                                href={service.href}
                                className="flex items-center py-2 text-sm opacity-80 hover:opacity-100"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white mr-3">
                                  <service.icon className="h-3 w-3" />
                                </div>
                                <div>
                                  <div className="font-medium">{service.title}</div>
                                  <div className="text-xs text-gray-400">{service.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : item.name === "Products" ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full py-2 text-left"
                          onClick={() => setExpandedMobileProduct(!expandedMobileProduct)}
                          aria-expanded={expandedMobileProduct}
                        >
                          <span>{item.name}</span>
                          <ChevronRight
                            className={`h-5 w-5 transition-transform ${expandedMobileProduct ? "rotate-90" : ""}`}
                          />
                        </button>

                        {expandedMobileProduct && (
                          <div className="mt-2 pl-4 space-y-2 bg-gray-900 rounded-lg p-3">
                            {products.map((product) => (
                              <Link
                                key={product.title}
                                href={product.href}
                                className="flex items-center py-2 text-sm opacity-80 hover:opacity-100"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-6 w-6 rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white mr-3">
                                  <product.icon className="h-3 w-3" />
                                </div>
                                <div>
                                  <div className="font-medium">{product.title}</div>
                                  <div className="text-xs text-gray-400">{product.description}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link href={item.href} className="block py-2" onClick={() => setMobileMenuOpen(false)}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}

                {/* Mobile CTA Buttons */}
                <li className="pt-2 flex flex-col space-y-2">
                  <Link
                    href="/schedule-meeting"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Book a Call
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-orange-500 to-pink-600 text-white hover:from-orange-600 hover:to-pink-700 transition-all"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Quote
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
