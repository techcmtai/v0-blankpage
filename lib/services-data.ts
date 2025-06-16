import {
  Globe,
  Smartphone,
  Brain,
  Cloud,
  Code,
  Server,
  Shield,
  Palette,
  ShoppingCart,
  Megaphone,
  BarChart3,
  Database,
  type LucideIcon,
} from "lucide-react"

export interface Service {
  title: string
  description: string
  href: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: "Web Development",
    description: "Create responsive, high-performance websites and web applications.",
    href: "/services/web-development",
    icon: Globe,
  },
  {
    title: "Mobile App Development",
    description: "Build native and cross-platform mobile applications for iOS and Android.",
    href: "/services/mobile-app-development",
    icon: Smartphone,
  },
  {
    title: "AI & ML Solutions",
    description: "Implement artificial intelligence and machine learning solutions for your business.",
    href: "/services/ai-ml-solutions",
    icon: Brain,
  },
  {
    title: "Cloud Services",
    description: "Leverage cloud technologies for scalable and reliable infrastructure.",
    href: "/services/cloud-services",
    icon: Cloud,
  },
  {
    title: "Custom Software",
    description: "Develop tailored software solutions to meet your specific business needs.",
    href: "/services/custom-software",
    icon: Code,
  },
  {
    title: "Software Support",
    description: "Get ongoing maintenance and support for your software applications.",
    href: "/services/software-support",
    icon: Server,
  },
  {
    title: "Cybersecurity",
    description: "Protect your digital assets with comprehensive security solutions.",
    href: "/services/cybersecurity",
    icon: Shield,
  },
  {
    title: "UI/UX Design",
    description: "Create intuitive and engaging user interfaces and experiences.",
    href: "/services/ui-ux-design",
    icon: Palette,
  },
  {
    title: "E-Commerce",
    description: "Build and optimize online stores and e-commerce platforms.",
    href: "/services/e-commerce",
    icon: ShoppingCart,
  },
  {
    title: "Digital Marketing",
    description: "Grow your online presence and reach with digital marketing strategies.",
    href: "/services/digital-marketing",
    icon: Megaphone,
  },
  {
    title: "Data Analytics",
    description: "Gain insights from your data with advanced analytics solutions.",
    href: "/services/data-analytics",
    icon: BarChart3,
  },
  {
    title: "API Development",
    description: "Create robust APIs for seamless integration between systems.",
    href: "/services/api-development",
    icon: Database,
  },
]
