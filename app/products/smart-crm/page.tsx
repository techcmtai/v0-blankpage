import Image from "next/image"
import Link from "next/link"
import { BarChart3, Check, Users, Mail, Calendar, PieChart, ArrowRight } from "lucide-react"

export default function SmartCRMPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-10"></div>
          <Image
            src="/modern-crm-dashboard.png"
            alt="Smart CRM Background"
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
                Smart CRM Solution
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Streamline your customer relationships with our AI-powered CRM. Track leads, manage sales pipelines, and
              gain actionable insights to boost your revenue.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#demo"
                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-md font-medium hover:shadow-lg transition-shadow"
              >
                Request Demo
              </Link>
              <Link
                href="#features"
                className="px-6 py-3 bg-white/10 rounded-md font-medium hover:bg-white/20 transition-colors"
              >
                Explore Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Smart CRM comes with everything you need to manage customer relationships effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                title: "Contact Management",
                description: "Organize and manage all your contacts, leads, and customers in one centralized database",
              },
              {
                icon: <BarChart3 className="h-6 w-6" />,
                title: "Sales Pipeline",
                description: "Visualize and track your sales process from lead to close with customizable stages",
              },
              {
                icon: <Mail className="h-6 w-6" />,
                title: "Email Integration",
                description: "Sync with your email to track all customer communications in one place",
              },
              {
                icon: <Calendar className="h-6 w-6" />,
                title: "Task Management",
                description: "Schedule and track tasks, appointments, and follow-ups to stay organized",
              },
              {
                icon: <PieChart className="h-6 w-6" />,
                title: "Advanced Analytics",
                description: "Gain insights into sales performance, customer behavior, and team productivity",
              },
              {
                icon: <Check className="h-6 w-6" />,
                title: "Mobile Access",
                description: "Access your CRM on the go with our mobile app for iOS and Android",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Smart CRM?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our CRM solution delivers measurable results for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Increase sales conversion rates by up to 25%",
                  "Improve customer retention through better relationship management",
                  "Enhance team collaboration and communication",
                  "Make data-driven decisions with comprehensive analytics",
                  "Streamline sales processes and reduce administrative work",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center text-white mr-3">
                      <Check className="h-4 w-4" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-auto overflow-hidden rounded-lg">
              <Image
                src="/crm-dashboard.png"
                alt="Smart CRM Dashboard"
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black text-white">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your sales process?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of businesses already using Smart CRM to boost their sales and improve customer relationships
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-600 rounded-md font-medium hover:shadow-lg transition-shadow"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
