"use client"

import { useState } from "react"
import Link from "next/link"
import { Server, DatabaseIcon, CloudIcon, Brain, Smartphone, Globe } from "lucide-react"

type TabType = "frontend" | "backend" | "database" | "cloud" | "ai-ml" | "mobile"

export function TechTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend")

  const tabs = [
    { id: "frontend", label: "Frontend", icon: Globe },
    { id: "backend", label: "Backend", icon: Server },
    { id: "mobile", label: "Mobile Apps", icon: Smartphone },
    { id: "database", label: "Database", icon: DatabaseIcon },
    { id: "cloud", label: "Cloud", icon: CloudIcon },
    { id: "ai-ml", label: "AI / ML", icon: Brain },
  ]

  const techStacks = {
    frontend: [
      {
        id: "react",
        name: "React",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
      },
      {
        id: "nextjs",
        name: "Next.js",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png",
      },
      {
        id: "vuejs",
        name: "Vue.js",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vue_js.png",
      },
      {
        id: "angular",
        name: "Angular",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/angular.png",
      },
      {
        id: "typescript",
        name: "TypeScript",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png",
      },
      {
        id: "tailwindcss",
        name: "Tailwind CSS",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png",
      },
      {
        id: "html",
        name: "HTML",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png",
      },
      {
        id: "css",
        name: "CSS",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png",
      },
      {
        id: "svelte",
        name: "Svelte",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/svelte.png",
      },
      {
        id: "redux",
        name: "Redux",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redux.png",
      },
      {
        id: "webpack",
        name: "Webpack",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/webpack.png",
      },
      {
        id: "vite",
        name: "Vite",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png",
      },
      {
        id: "sass",
        name: "Sass",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sass.png",
      },
      {
        id: "bootstrap",
        name: "Bootstrap",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bootstrap.png",
      },
      {
        id: "materialui",
        name: "Material UI",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/material_ui.png",
      },
    ],
    backend: [
      {
        id: "nodejs",
        name: "Node.js",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png",
      },
      {
        id: "express",
        name: "Express",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png",
      },
      {
        id: "python",
        name: "Python",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png",
      },
      {
        id: "django",
        name: "Django",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/django.png",
      },
      {
        id: "java",
        name: "Java",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png",
      },
      {
        id: "spring",
        name: "Spring Boot",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring_boot.png",
      },
      {
        id: "php",
        name: "PHP",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/php.png",
      },
      {
        id: "laravel",
        name: "Laravel",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/laravel.png",
      },
      {
        id: "ruby",
        name: "Ruby",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ruby.png",
      },
      {
        id: "go",
        name: "Go",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/go.png",
      },
      {
        id: "rust",
        name: "Rust",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rust.png",
      },
      {
        id: "graphql",
        name: "GraphQL",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png",
      },
    ],
    mobile: [
      {
        id: "react-native",
        name: "React Native",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
      },
      {
        id: "flutter",
        name: "Flutter",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/flutter.png",
      },
      {
        id: "swift",
        name: "Swift",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/swift.png",
      },
      {
        id: "kotlin",
        name: "Kotlin",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kotlin.png",
      },
      {
        id: "android",
        name: "Android",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/android.png",
      },
      {
        id: "ios",
        name: "iOS",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ios.png",
      },
    ],
    database: [
      {
        id: "mongodb",
        name: "MongoDB",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png",
      },
      {
        id: "postgresql",
        name: "PostgreSQL",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png",
      },
      {
        id: "mysql",
        name: "MySQL",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png",
      },
      {
        id: "redis",
        name: "Redis",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png",
      },
      {
        id: "firebase",
        name: "Firebase",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/firebase.png",
      },
      {
        id: "supabase",
        name: "Supabase",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/supabase.png",
      },
      {
        id: "elasticsearch",
        name: "Elasticsearch",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png",
      },
      {
        id: "sqlite",
        name: "SQLite",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sqlite.png",
      },
      {
        id: "oracle",
        name: "Oracle",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/oracle.png",
      },
    ],
    cloud: [
      {
        id: "aws",
        name: "AWS",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png",
      },
      {
        id: "azure",
        name: "Azure",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png",
      },
      {
        id: "gcp",
        name: "Google Cloud",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png",
      },
      {
        id: "docker",
        name: "Docker",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png",
      },
      {
        id: "kubernetes",
        name: "Kubernetes",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png",
      },
      {
        id: "digitalocean",
        name: "Digital Ocean",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/digital_ocean.png",
      },
      {
        id: "terraform",
        name: "Terraform",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/terraform.png",
      },
      {
        id: "nginx",
        name: "Nginx",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nginx.png",
      },
    ],
    "ai-ml": [
      {
        id: "tensorflow",
        name: "TensorFlow",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tensorflow.png",
      },
      {
        id: "python",
        name: "Python",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png",
      },
      {
        id: "numpy",
        name: "NumPy",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/numpy.png",
      },
      {
        id: "pandas",
        name: "Pandas",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/pandas.png",
      },
      {
        id: "jupyter",
        name: "Jupyter",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jupyter_notebook.png",
      },
      {
        id: "matlab",
        name: "MATLAB",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/matlab.png",
      },
      {
        id: "spark",
        name: "Apache Spark",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/apache_spark.png",
      },
      {
        id: "databricks",
        name: "Databricks",
        logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/databricks.png",
      },
    ],
  }

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`flex items-center px-4 py-3 mx-1 my-1 rounded-md transition-colors ${
              activeTab === tab.id
                ? "bg-gradient-to-r from-orange-500 to-pink-600 text-white"
                : "bg-[#1a1a1a] text-gray-300 hover:bg-[#252525]"
            }`}
          >
            <tab.icon className="h-5 w-5 mr-2" />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-wrap gap-3 justify-center">
        {techStacks[activeTab].map((tech) => (
          <Link
            key={tech.id}
            href={`/tech/${tech.id}`}
            className="flex items-center bg-[#1a1a1a] p-3 rounded-full hover:bg-[#252525] transition-colors"
          >
            <div className="w-8 h-8 flex items-center justify-center mr-2">
              <img
                src={tech.logo || "/placeholder.svg"}
                alt={`${tech.name} logo`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <span className="text-white text-sm font-medium mr-1">{tech.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
