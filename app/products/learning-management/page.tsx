import Image from "next/image"
import Link from "next/link"
import { GraduationCap, Check, BookOpen, Users, Award, BarChart2, ArrowRight } from "lucide-react"

export default function LearningManagementPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-10"></div>
          <Image
            src="/placeholder.svg?key=7w2rs"
            alt="Learning Management System Background"
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
                Learning Management Solution
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Empower your organization with our comprehensive learning platform. Create, deliver, and track educational
              content to drive knowledge and skills development.
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
              Our Learning Management Solution comes with everything you need to create effective learning experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-6 w-6" />,
                title: "Course Creation",
                description: "Build engaging courses with multimedia content, quizzes, and assignments",
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "User Management",
                description: "Easily manage students, instructors, and administrators with role-based access",
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Certification",
                description: "Issue certificates and badges upon course completion to recognize achievements",
              },
              {
                icon: <BarChart2 className="h-6 w-6" />,
                title: "Progress Tracking",
                description: "Monitor student progress, completion rates, and assessment scores",
              },
              {
                icon: <GraduationCap className="h-6 w-6" />,
                title: "Interactive Learning",
                description: "Engage learners with discussion forums, live sessions, and collaborative projects",
              },
              {
                icon: <Check className="h-6 w-6" />,
                title: "Mobile Learning",
                description: "Access courses on any device with our responsive design and mobile app",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our LMS?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our Learning Management Solution delivers measurable results for organizations of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Reduce training costs while improving effectiveness",
                  "Standardize learning experiences across your organization",
                  "Track and measure learning outcomes with detailed analytics",
                  "Increase engagement with interactive learning experiences",
                  "Scale your training programs without additional resources",
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
                src="/placeholder.svg?height=600&width=800&query=learning management system with course catalog and student progress tracking"
                alt="Learning Management Dashboard"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your training programs?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of organizations already using our Learning Management Solution to develop their talent
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
