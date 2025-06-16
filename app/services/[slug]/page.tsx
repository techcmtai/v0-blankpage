import { notFound } from "next/navigation"
import { ServiceHero } from "@/components/service-hero"
import { SubServices } from "@/components/sub-services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { DevelopmentProcess } from "@/components/development-process"
import { ScheduleMeeting } from "@/components/schedule-meeting"
import { ServiceFAQs } from "@/components/service-faqs"
import { GetQuotation } from "@/components/get-quotation"
import {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Code,
  Shield,
  Palette,
  Megaphone,
  BarChart3,
  Database,
  Server,
  ShoppingCart,
  type LucideIcon,
} from "lucide-react"

// Define the types for our service data
interface ServicePageData {
  title: string
  description: string
  heroImage: string
  subServices: {
    title: string
    description: string
    icon?: string
  }[]
  whyChooseUs: {
    title: string
    description: string
    points: {
      title: string
      description: string
    }[]
  }
  process: {
    title: string
    description: string
    steps: {
      number: number
      title: string
      description: string
    }[]
  }
  faqs: {
    question: string
    answer: string
  }[]
}

// Import all service data
import webDevelopmentData from "@/lib/service-pages/web-development"
import mobileAppDevelopmentData from "@/lib/service-pages/mobile-app-development"
import aiMlSolutionsData from "@/lib/service-pages/ai-ml-solutions"
import cloudServicesData from "@/lib/service-pages/cloud-services"
import customSoftwareData from "@/lib/service-pages/custom-software"
import softwareSupportData from "@/lib/service-pages/software-support"
import cybersecurityData from "@/lib/service-pages/cybersecurity"
import uiUxDesignData from "@/lib/service-pages/ui-ux-design"
import ecommerceData from "@/lib/service-pages/e-commerce"
import digitalMarketingData from "@/lib/service-pages/digital-marketing"
import dataAnalyticsData from "@/lib/service-pages/data-analytics"
import apiDevelopmentData from "@/lib/service-pages/api-development"

// Map slugs to their respective data
const serviceDataMap: Record<string, ServicePageData> = {
  "web-development": webDevelopmentData,
  "mobile-app-development": mobileAppDevelopmentData,
  "ai-ml-solutions": aiMlSolutionsData,
  "cloud-services": cloudServicesData,
  "custom-software": customSoftwareData,
  "software-support": softwareSupportData,
  cybersecurity: cybersecurityData,
  "ui-ux-design": uiUxDesignData,
  "e-commerce": ecommerceData,
  "digital-marketing": digitalMarketingData,
  "data-analytics": dataAnalyticsData,
  "api-development": apiDevelopmentData,
}

// Map service slugs to their respective icons
const serviceIconMap: Record<string, LucideIcon> = {
  "web-development": Globe,
  "mobile-app-development": Smartphone,
  "ai-ml-solutions": Brain,
  "cloud-services": Cloud,
  "custom-software": Code,
  "software-support": Server,
  cybersecurity: Shield,
  "ui-ux-design": Palette,
  "e-commerce": ShoppingCart,
  "digital-marketing": Megaphone,
  "data-analytics": BarChart3,
  "api-development": Database,
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const { slug } = params

  // Get the service data based on the slug
  const serviceData = serviceDataMap[slug]

  // If the service doesn't exist, return 404
  if (!serviceData) {
    notFound()
  }

  // Get the icon for this service
  const ServiceIcon = serviceIconMap[slug] || Globe

  return (
    <main className="min-h-screen bg-black">
      {/* 1. Hero Section */}
      <ServiceHero
        title={serviceData.title}
        description={serviceData.description}
        image={serviceData.heroImage}
        icon={ServiceIcon}
      />

      {/* 2. Sub-services Section */}
      <SubServices
        title={`Our ${serviceData.title} Services`}
        description="We offer a comprehensive range of solutions tailored to your business needs."
        services={serviceData.subServices}
      />

      {/* 3. Why Choose Us Section */}
      <WhyChooseUs
        title={serviceData.whyChooseUs.title}
        description={serviceData.whyChooseUs.description}
        points={serviceData.whyChooseUs.points}
      />

      {/* 4. Development Process Section */}
      <DevelopmentProcess
        title={serviceData.process.title}
        description={serviceData.process.description}
        steps={serviceData.process.steps}
      />

      {/* 5. Schedule Meeting Section */}
      <ScheduleMeeting />

      {/* 6. FAQs Section */}
      <ServiceFAQs title={`Frequently Asked Questions About ${serviceData.title}`} faqs={serviceData.faqs} />

      {/* 7. Get Quotation Section */}
      <GetQuotation
        title={`Get a Free ${serviceData.title} Quotation`}
        description="Fill out the form below to receive a custom quote for your project."
        service={serviceData.title}
      />
    </main>
  )
}
