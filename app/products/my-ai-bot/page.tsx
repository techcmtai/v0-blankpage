import Image from "next/image"
import Link from "next/link"
import { Bot, Check, MessageSquare, Globe, Zap, BarChart2, ArrowRight } from "lucide-react"

export default function MyAIBotPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-black text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-90 z-10"></div>
          <Image
            src="/futuristic-ai-chatbot.png"
            alt="AI Bot Background"
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
                My AI Bot
              </span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Transform your customer support with our intelligent AI chatbot solution. Provide instant, personalized
              responses 24/7 while reducing support costs and improving customer satisfaction.
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
              Our AI Bot comes packed with everything you need to deliver exceptional customer experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="h-6 w-6" />,
                title: "Natural Language Processing",
                description: "Understands customer queries in natural language and responds in a conversational manner",
              },
              {
                icon: <Globe className="h-6 w-6" />,
                title: "Multi-channel Integration",
                description: "Deploy on your website, mobile app, Facebook Messenger, WhatsApp, and more",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Instant Responses",
                description: "Provide immediate answers to customer questions, 24/7, without any wait time",
              },
              {
                icon: <Bot className="h-6 w-6" />,
                title: "Customizable Personality",
                description: "Tailor your bot's tone, language, and responses to match your brand identity",
              },
              {
                icon: <BarChart2 className="h-6 w-6" />,
                title: "Analytics Dashboard",
                description: "Gain insights into customer interactions, common questions, and satisfaction levels",
              },
              {
                icon: <Check className="h-6 w-6" />,
                title: "Human Handoff",
                description: "Seamlessly transfer complex conversations to human agents when necessary",
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose My AI Bot?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI chatbot solution delivers measurable results for businesses of all sizes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                {[
                  "Reduce customer support costs by up to 30%",
                  "Improve response times from hours to seconds",
                  "Increase customer satisfaction with instant support",
                  "Scale your support team without adding headcount",
                  "Gather valuable customer insights through conversations",
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
                src="/ai-chatbot-dashboard.png"
                alt="AI Bot Dashboard"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your customer support?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of businesses already using My AI Bot to deliver exceptional customer experiences
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
