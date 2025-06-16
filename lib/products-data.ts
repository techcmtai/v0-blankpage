import { Bot, BarChart3, GraduationCap } from "lucide-react"
import type { IconType } from "react-icons"

export interface Product {
  title: string
  description: string
  icon: IconType
  href: string
  features: string[]
  benefits: string[]
}

export const products: Product[] = [
  {
    title: "My AI Bot",
    description: "Intelligent AI chatbot solution for customer support and engagement",
    icon: Bot,
    href: "/products/my-ai-bot",
    features: [
      "Natural language processing capabilities",
      "Multi-channel integration (website, social media, messaging apps)",
      "Customizable responses and personality",
      "24/7 availability for customer inquiries",
      "Seamless handoff to human agents when needed",
      "Analytics dashboard for conversation insights",
    ],
    benefits: [
      "Reduce customer support costs by up to 30%",
      "Improve response times from hours to seconds",
      "Increase customer satisfaction with instant support",
      "Scale your support team without adding headcount",
      "Gather valuable customer insights through conversations",
    ],
  },
  {
    title: "Smart CRM Solution",
    description: "Comprehensive customer relationship management system with AI-powered insights",
    icon: BarChart3,
    href: "/products/smart-crm",
    features: [
      "Contact and lead management",
      "Sales pipeline visualization and tracking",
      "Email integration and automation",
      "Task and appointment scheduling",
      "Custom reporting and analytics",
      "Mobile access for on-the-go management",
    ],
    benefits: [
      "Increase sales conversion rates by up to 25%",
      "Improve customer retention through better relationship management",
      "Enhance team collaboration and communication",
      "Make data-driven decisions with comprehensive analytics",
      "Streamline sales processes and reduce administrative work",
    ],
  },
  {
    title: "Learning Management Solution",
    description: "Complete platform for creating, delivering, and tracking educational content",
    icon: GraduationCap,
    href: "/products/learning-management",
    features: [
      "Course creation and content management",
      "Student enrollment and progress tracking",
      "Interactive quizzes and assessments",
      "Discussion forums and collaboration tools",
      "Certification and badge system",
      "Comprehensive reporting and analytics",
    ],
    benefits: [
      "Reduce training costs while improving effectiveness",
      "Standardize learning experiences across your organization",
      "Track and measure learning outcomes with detailed analytics",
      "Increase engagement with interactive learning experiences",
      "Scale your training programs without additional resources",
    ],
  },
]
