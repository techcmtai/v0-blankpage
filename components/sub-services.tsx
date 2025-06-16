"use client"

import {
  Globe,
  ShoppingCart,
  Code,
  Smartphone,
  FileText,
  RefreshCw,
  MousePointer,
  Wrench,
  Zap,
  Brain,
  Cloud,
  Shield,
  Palette,
  Megaphone,
  BarChart3,
  Share2,
  Database,
  LineChart,
  LifeBuoy,
  Server,
  Lock,
  Cpu,
  Layers,
  Settings,
  Users,
  MessageSquare,
  Bell,
  HardDrive,
  Network,
  GitBranch,
  Wifi,
  Bluetooth,
  Tablet,
  Monitor,
  PenTool,
  Sliders,
  LayoutGrid,
  Search,
  TrendingUp,
  PieChart,
  DollarSign,
  CreditCard,
  ShoppingBag,
  Truck,
  Award,
  Headphones,
  Mail,
  Calendar,
  Clock,
  Map,
  MapPin,
  Bookmark,
  Star,
  Heart,
  ThumbsUp,
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Download,
  Upload,
  ExternalLink,
  Eye,
  EyeOff,
  Filter,
  Flag,
  Folder,
  FolderPlus,
  Gift,
  Home,
  Info,
  Link,
  List,
  Loader,
  LogOut,
  Maximize,
  Minimize,
  MoreHorizontal,
  MoreVertical,
  Package,
  Paperclip,
  Percent,
  Phone,
  Play,
  Plus,
  Power,
  Printer,
  Radio,
  Save,
  Scissors,
  Send,
  Settings2,
  Share,
  Slash,
  Trash,
  Trash2,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Video,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Watch,
  X,
  XCircle,
  XSquare,
  ZoomIn,
  ZoomOut,
  type LucideIcon,
  ImageIcon,
} from "lucide-react"

interface SubService {
  title: string
  description: string
  icon?: string
}

interface SubServicesProps {
  title: string
  description: string
  services: {
    title: string
    description: string
    icon?: string
  }[]
}

// Map of icon names to Lucide components
const iconMap: Record<string, LucideIcon> = {
  Globe,
  ShoppingCart,
  Code,
  Smartphone,
  FileText,
  RefreshCw,
  MousePointer,
  Wrench,
  Zap,
  Brain,
  Cloud,
  Shield,
  Palette,
  Megaphone,
  BarChart3,
  Share2,
  Database,
  LineChart,
  LifeBuoy,
  Server,
  Lock,
  Cpu,
  Layers,
  Settings,
  Users,
  MessageSquare,
  Bell,
  HardDrive,
  Network,
  GitBranch,
  Wifi,
  Bluetooth,
  Tablet,
  Monitor,
  PenTool,
  Image: ImageIcon,
  Sliders,
  LayoutGrid,
  Search,
  TrendingUp,
  PieChart,
  DollarSign,
  CreditCard,
  ShoppingBag,
  Truck,
  Award,
  Headphones,
  Mail,
  Calendar,
  Clock,
  Map,
  MapPin,
  Bookmark,
  Star,
  Heart,
  ThumbsUp,
  Activity,
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Download,
  Upload,
  ExternalLink,
  Eye,
  EyeOff,
  Filter,
  Flag,
  Folder,
  FolderPlus,
  Gift,
  Home,
  Info,
  Link,
  List,
  Loader,
  LogOut,
  Maximize,
  Minimize,
  MoreHorizontal,
  MoreVertical,
  Package,
  Paperclip,
  Percent,
  Phone,
  Play,
  Plus,
  Power,
  Printer,
  Radio,
  Save,
  Scissors,
  Send,
  Settings2,
  Share,
  Slash,
  Trash,
  Trash2,
  User,
  UserCheck,
  UserMinus,
  UserPlus,
  UserX,
  Video,
  Volume,
  Volume1,
  Volume2,
  VolumeX,
  Watch,
  X,
  XCircle,
  XSquare,
  ZoomIn,
  ZoomOut,
  // Add Apple icon
  Apple: Smartphone, // Using Smartphone as a fallback for Apple since Lucide doesn't have an Apple icon
}

export function SubServices({ title, description, services }: SubServicesProps) {
  return (
    <section className="w-full py-16 md:py-24 bg-black text-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">{description}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Get the icon component if it exists
            const IconComponent = service.icon && iconMap[service.icon]

            return (
              <div
                key={index}
                className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-orange-500/50 transition-all"
              >
                {IconComponent && (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-orange-500 to-pink-600 flex items-center justify-center mb-4">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                )}
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
