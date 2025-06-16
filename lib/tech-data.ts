// Technology data structure with detailed information
export interface TechData {
  id: string
  name: string
  logo: string
  category: "frontend" | "backend" | "mobile" | "database" | "cloud" | "ai-ml"
  description: string
  features: string[]
  advantages: string[]
  disadvantages: string[]
  useCases: string[]
  exampleWebsites: Array<{
    name: string
    url: string
    description: string
  }>
  resources: Array<{
    name: string
    url: string
    type: "documentation" | "tutorial" | "community" | "tool"
  }>
}

// Sample data for React
const reactData: TechData = {
  id: "react",
  name: "React",
  logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
  category: "frontend",
  description:
    "React is a JavaScript library for building user interfaces. It allows developers to create reusable UI components and efficiently update the DOM when data changes.",
  features: [
    "Component-based architecture",
    "Virtual DOM for efficient rendering",
    "JSX syntax for combining HTML and JavaScript",
    "Unidirectional data flow",
    "Rich ecosystem of libraries and tools",
  ],
  advantages: [
    "High performance with virtual DOM",
    "Reusable components reduce development time",
    "Strong community support and extensive documentation",
    "Backed by Facebook/Meta",
    "Flexible integration with other libraries",
  ],
  disadvantages: [
    "Steep learning curve for beginners",
    "Requires additional libraries for complete solutions",
    "Frequent updates can lead to compatibility issues",
  ],
  useCases: [
    "Single-page applications",
    "Progressive web apps",
    "Interactive UIs",
    "Dashboard and analytics interfaces",
    "E-commerce platforms",
  ],
  exampleWebsites: [
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      description: "The social media giant uses React extensively in its web interface.",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      description: "Instagram's web application is built with React.",
    },
    {
      name: "Netflix",
      url: "https://www.netflix.com",
      description: "Netflix uses React for its browser interface.",
    },
  ],
  resources: [
    {
      name: "Official Documentation",
      url: "https://reactjs.org/docs/getting-started.html",
      type: "documentation",
    },
    {
      name: "React DevTools",
      url: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",
      type: "tool",
    },
    {
      name: "React Community",
      url: "https://reactjs.org/community/support.html",
      type: "community",
    },
  ],
}

// Sample data for Next.js
const nextjsData: TechData = {
  id: "nextjs",
  name: "Next.js",
  logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/next_js.png",
  category: "frontend",
  description:
    "Next.js is a React framework that enables server-side rendering, static site generation, and other performance optimizations for React applications.",
  features: [
    "Server-side rendering (SSR)",
    "Static site generation (SSG)",
    "Incremental static regeneration",
    "API routes",
    "File-based routing",
    "Built-in CSS and Sass support",
    "Image optimization",
  ],
  advantages: [
    "Improved SEO with server-side rendering",
    "Fast page loads with automatic code splitting",
    "Developer experience with hot module replacement",
    "Built-in TypeScript support",
    "Vercel deployment integration",
  ],
  disadvantages: [
    "More complex than plain React for simple applications",
    "Some features require specific deployment environments",
    "Learning curve for advanced features",
  ],
  useCases: [
    "E-commerce websites",
    "Blogs and content sites",
    "Marketing websites",
    "Dashboards and admin panels",
    "Progressive web applications",
  ],
  exampleWebsites: [
    {
      name: "TikTok",
      url: "https://www.tiktok.com",
      description: "TikTok's web experience is built with Next.js.",
    },
    {
      name: "Twitch",
      url: "https://www.twitch.tv",
      description: "The popular streaming platform uses Next.js.",
    },
    {
      name: "Hulu",
      url: "https://www.hulu.com",
      description: "Hulu's streaming service web interface is built with Next.js.",
    },
  ],
  resources: [
    {
      name: "Official Documentation",
      url: "https://nextjs.org/docs",
      type: "documentation",
    },
    {
      name: "Learn Next.js",
      url: "https://nextjs.org/learn",
      type: "tutorial",
    },
    {
      name: "Next.js GitHub",
      url: "https://github.com/vercel/next.js",
      type: "community",
    },
  ],
}

// Sample data for Node.js
const nodejsData: TechData = {
  id: "nodejs",
  name: "Node.js",
  logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/node_js.png",
  category: "backend",
  description:
    "Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine, allowing developers to run JavaScript on the server side.",
  features: [
    "Non-blocking I/O operations",
    "Event-driven architecture",
    "NPM package ecosystem",
    "Cross-platform compatibility",
    "Built-in modules for networking, file system, etc.",
  ],
  advantages: [
    "JavaScript across the full stack",
    "High performance for I/O operations",
    "Large ecosystem of libraries",
    "Active community and corporate support",
    "Excellent for real-time applications",
  ],
  disadvantages: [
    "Not ideal for CPU-intensive tasks",
    "Callback hell (though mitigated with modern JS features)",
    "Single-threaded nature (though worker threads are available)",
  ],
  useCases: [
    "API servers",
    "Real-time applications (chat, gaming)",
    "Streaming applications",
    "Microservices",
    "Command-line tools",
  ],
  exampleWebsites: [
    {
      name: "Netflix",
      url: "https://www.netflix.com",
      description: "Netflix uses Node.js for its API services.",
    },
    {
      name: "PayPal",
      url: "https://www.paypal.com",
      description: "PayPal migrated from Java to Node.js for its advantages in I/O operations.",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com",
      description: "LinkedIn uses Node.js for its mobile app backend.",
    },
  ],
  resources: [
    {
      name: "Official Documentation",
      url: "https://nodejs.org/en/docs/",
      type: "documentation",
    },
    {
      name: "Node.js Best Practices",
      url: "https://github.com/goldbergyoni/nodebestpractices",
      type: "tutorial",
    },
    {
      name: "Node.js Foundation",
      url: "https://foundation.nodejs.org/",
      type: "community",
    },
  ],
}

// Sample data for React Native
const reactNativeData: TechData = {
  id: "react-native",
  name: "React Native",
  logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
  category: "mobile",
  description:
    "React Native is a framework for building native mobile applications using React and JavaScript, allowing developers to create cross-platform apps with a single codebase.",
  features: [
    "Cross-platform development",
    "Native components",
    "Hot reloading",
    "Access to native APIs",
    "Component-based architecture",
    "Large ecosystem of libraries",
  ],
  advantages: [
    "Code reuse across platforms",
    "Faster development time",
    "Native performance",
    "Live reloading for faster iteration",
    "Strong community support",
  ],
  disadvantages: [
    "Performance limitations for complex animations",
    "Native module integration can be complex",
    "Larger app size compared to fully native apps",
  ],
  useCases: [
    "Cross-platform mobile apps",
    "Prototyping and MVPs",
    "Apps with moderate complexity",
    "Business and enterprise applications",
    "Social media apps",
  ],
  exampleWebsites: [
    {
      name: "Instagram",
      url: "https://www.instagram.com",
      description: "Instagram uses React Native for its mobile app.",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com",
      description: "Facebook uses React Native in parts of its mobile app.",
    },
    {
      name: "Discord",
      url: "https://discord.com",
      description: "Discord's mobile app is built with React Native.",
    },
  ],
  resources: [
    {
      name: "Official Documentation",
      url: "https://reactnative.dev/docs/getting-started",
      type: "documentation",
    },
    {
      name: "React Native Community",
      url: "https://github.com/react-native-community",
      type: "community",
    },
    {
      name: "Expo",
      url: "https://expo.dev/",
      type: "tool",
    },
  ],
}

// Sample data for MongoDB
const mongodbData: TechData = {
  id: "mongodb",
  name: "MongoDB",
  logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mongodb.png",
  category: "database",
  description:
    "MongoDB is a document-oriented NoSQL database that stores data in flexible, JSON-like documents, making it easier to work with data in modern applications.",
  features: [
    "Document-oriented storage",
    "Flexible schema design",
    "Horizontal scaling with sharding",
    "High availability with replica sets",
    "Aggregation framework",
    "Full-text search",
    "Geospatial indexing",
  ],
  advantages: [
    "Schema flexibility for rapid development",
    "Horizontal scalability",
    "JSON-like document structure",
    "High performance for read/write operations",
    "Native support for JavaScript in queries",
  ],
  disadvantages: [
    "Less suitable for complex transactions",
    "Higher storage requirements",
    "Limited JOIN capabilities compared to SQL",
  ],
  useCases: [
    "Content management systems",
    "Mobile applications",
    "Real-time analytics",
    "Catalog and product information",
    "IoT data storage",
  ],
  exampleWebsites: [
    {
      name: "Forbes",
      url: "https://www.forbes.com",
      description: "Forbes uses MongoDB for its content management system.",
    },
    {
      name: "eBay",
      url: "https://www.ebay.com",
      description: "eBay uses MongoDB for various data storage needs.",
    },
    {
      name: "Coinbase",
      url: "https://www.coinbase.com",
      description: "Coinbase uses MongoDB for its cryptocurrency exchange platform.",
    },
  ],
  resources: [
    {
      name: "Official Documentation",
      url: "https://docs.mongodb.com/",
      type: "documentation",
    },
    {
      name: "MongoDB University",
      url: "https://university.mongodb.com/",
      type: "tutorial",
    },
    {
      name: "MongoDB Atlas",
      url: "https://www.mongodb.com/cloud/atlas",
      type: "tool",
    },
  ],
}

// Sample data for AWS
const awsData: TechData = {
  id: "aws",
  name: "AWS",
  logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png",
  category: "cloud",
  description:
    "Amazon Web Services (AWS) is a comprehensive cloud computing platform offering over 200 services from data centers globally.",
  features: [
    "Elastic Compute Cloud (EC2)",
    "Simple Storage Service (S3)",
    "Lambda serverless computing",
    "DynamoDB NoSQL database",
    "CloudFront CDN",
    "Route 53 DNS service",
    "Extensive IAM security",
  ],
  advantages: [
    "Comprehensive service offering",
    "Global infrastructure",
    "Pay-as-you-go pricing",
    "High reliability and uptime",
    "Advanced security features",
  ],
  disadvantages: ["Complex pricing structure", "Steep learning curve", "Potential for unexpected costs"],
  useCases: [
    "Web application hosting",
    "Big data processing",
    "Disaster recovery",
    "Enterprise applications",
    "IoT backends",
  ],
  exampleWebsites: [
    {
      name: "Netflix",
      url: "https://www.netflix.com",
      description: "Netflix runs almost entirely on AWS for its streaming service.",
    },
    {
      name: "Airbnb",
      url: "https://www.airbnb.com",
      description: "Airbnb uses AWS for its infrastructure needs.",
    },
    {
      name: "Expedia",
      url: "https://www.expedia.com",
      description: "Expedia migrated to AWS for improved scalability.",
    },
  ],
  resources: [
    {
      name: "AWS Documentation",
      url: "https://docs.aws.amazon.com/",
      type: "documentation",
    },
    {
      name: "AWS Training and Certification",
      url: "https://aws.amazon.com/training/",
      type: "tutorial",
    },
    {
      name: "AWS Console",
      url: "https://aws.amazon.com/console/",
      type: "tool",
    },
  ],
}

// Sample data for TensorFlow
const tensorflowData: TechData = {
  id: "tensorflow",
  name: "TensorFlow",
  logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tensorflow.png",
  category: "ai-ml",
  description:
    "TensorFlow is an open-source machine learning framework developed by Google that provides a comprehensive ecosystem of tools for building and deploying ML models.",
  features: [
    "Flexible architecture",
    "Eager execution",
    "Keras integration",
    "TensorFlow Extended (TFX) for production",
    "TensorFlow.js for browser-based ML",
    "TensorFlow Lite for mobile and IoT",
    "Model optimization tools",
  ],
  advantages: [
    "Production-ready deployment options",
    "Strong visualization with TensorBoard",
    "Excellent for deep learning",
    "Backed by Google",
    "Large community and resources",
  ],
  disadvantages: [
    "Steeper learning curve than some alternatives",
    "Can be heavyweight for simple models",
    "API changes between versions",
  ],
  useCases: [
    "Image and speech recognition",
    "Natural language processing",
    "Recommendation systems",
    "Time series forecasting",
    "Anomaly detection",
  ],
  exampleWebsites: [
    {
      name: "Google Products",
      url: "https://www.google.com",
      description: "Google uses TensorFlow across many of its products and services.",
    },
    {
      name: "Airbnb",
      url: "https://www.airbnb.com",
      description: "Airbnb uses TensorFlow for personalized recommendations.",
    },
    {
      name: "Twitter",
      url: "https://www.twitter.com",
      description: "Twitter uses TensorFlow for timeline ranking and recommendations.",
    },
  ],
  resources: [
    {
      name: "Official Documentation",
      url: "https://www.tensorflow.org/learn",
      type: "documentation",
    },
    {
      name: "TensorFlow Tutorials",
      url: "https://www.tensorflow.org/tutorials",
      type: "tutorial",
    },
    {
      name: "TensorFlow Hub",
      url: "https://tfhub.dev/",
      type: "tool",
    },
  ],
}

// Export a map of all technology data
export const techDataMap: Record<string, TechData> = {
  react: reactData,
  nextjs: nextjsData,
  nodejs: nodejsData,
  "react-native": reactNativeData,
  mongodb: mongodbData,
  aws: awsData,
  tensorflow: tensorflowData,
  // Add Bootstrap data
  bootstrap: {
    id: "bootstrap",
    name: "Bootstrap",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bootstrap.png",
    category: "frontend",
    description:
      "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
    features: [
      "Responsive grid system",
      "Pre-styled components",
      "JavaScript plugins",
      "Customizable themes",
      "Extensive documentation",
      "Cross-browser compatibility",
    ],
    advantages: [
      "Rapid development",
      "Consistent design",
      "Mobile-first approach",
      "Large community support",
      "Regular updates",
    ],
    disadvantages: [
      "Sites can look similar without customization",
      "Large file size if using all components",
      "Learning curve for advanced customization",
    ],
    useCases: [
      "Admin dashboards",
      "Corporate websites",
      "E-commerce platforms",
      "Prototyping",
      "Responsive web applications",
    ],
    exampleWebsites: [
      {
        name: "Spotify",
        url: "https://www.spotify.com",
        description: "Spotify uses Bootstrap for parts of their web interface.",
      },
      {
        name: "Twitter",
        url: "https://twitter.com",
        description: "Twitter originally created Bootstrap for internal use.",
      },
      {
        name: "Bloomberg",
        url: "https://www.bloomberg.com",
        description: "Bloomberg uses Bootstrap for their responsive design.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://getbootstrap.com/docs/",
        type: "documentation",
      },
      {
        name: "Bootstrap Themes",
        url: "https://themes.getbootstrap.com/",
        type: "tool",
      },
      {
        name: "Stack Overflow Bootstrap Tag",
        url: "https://stackoverflow.com/questions/tagged/bootstrap-5",
        type: "community",
      },
    ],
  },
  // Add more technologies as needed for all tech stacks in the TechTabs component

  // Vue.js
  vuejs: {
    id: "vuejs",
    name: "Vue.js",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vue_js.png",
    category: "frontend",
    description:
      "Vue.js is a progressive JavaScript framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.",
    features: [
      "Virtual DOM",
      "Component-based architecture",
      "Reactive and composable",
      "Template syntax",
      "Transitions and animations",
      "Routing with vue-router",
      "State management with Vuex",
    ],
    advantages: [
      "Gentle learning curve",
      "Flexible integration options",
      "Detailed documentation",
      "Small size (20KB gzipped)",
      "Performance optimization",
    ],
    disadvantages: [
      "Smaller ecosystem than React",
      "Fewer large-scale enterprise adoptions",
      "Some plugins lack maintenance",
    ],
    useCases: [
      "Single-page applications",
      "Progressive web apps",
      "Interactive web interfaces",
      "Prototyping",
      "Enterprise dashboards",
    ],
    exampleWebsites: [
      {
        name: "Alibaba",
        url: "https://www.alibaba.com",
        description: "The e-commerce giant uses Vue.js for its web applications.",
      },
      {
        name: "GitLab",
        url: "https://gitlab.com",
        description: "GitLab's web interface is built with Vue.js.",
      },
      {
        name: "Behance",
        url: "https://www.behance.net",
        description: "Adobe's Behance platform uses Vue.js.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://vuejs.org/guide/introduction.html",
        type: "documentation",
      },
      {
        name: "Vue CLI",
        url: "https://cli.vuejs.org/",
        type: "tool",
      },
      {
        name: "Vue Forum",
        url: "https://forum.vuejs.org/",
        type: "community",
      },
    ],
  },

  // Angular
  angular: {
    id: "angular",
    name: "Angular",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/angular.png",
    category: "frontend",
    description:
      "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.",
    features: [
      "Component-based architecture",
      "TypeScript integration",
      "Dependency injection",
      "RxJS for reactive programming",
      "Comprehensive routing",
      "Form handling",
      "HTTP client",
    ],
    advantages: [
      "Full-featured framework",
      "Strong typing with TypeScript",
      "Enterprise-level support from Google",
      "Consistent code structure",
      "Comprehensive CLI tools",
    ],
    disadvantages: [
      "Steeper learning curve",
      "Heavier than some alternatives",
      "Verbose syntax",
      "Migration challenges between versions",
    ],
    useCases: [
      "Enterprise applications",
      "Dynamic web applications",
      "Progressive web apps",
      "Large-scale single-page applications",
      "Cross-platform mobile development with Ionic",
    ],
    exampleWebsites: [
      {
        name: "Google Cloud Platform",
        url: "https://cloud.google.com",
        description: "Google's cloud services platform uses Angular.",
      },
      {
        name: "Microsoft Office Home",
        url: "https://www.office.com",
        description: "Microsoft's Office web applications use Angular.",
      },
      {
        name: "Forbes",
        url: "https://www.forbes.com",
        description: "Forbes uses Angular for its web platform.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://angular.io/docs",
        type: "documentation",
      },
      {
        name: "Angular CLI",
        url: "https://cli.angular.io/",
        type: "tool",
      },
      {
        name: "Angular Community",
        url: "https://angular.io/community",
        type: "community",
      },
    ],
  },

  // TypeScript
  typescript: {
    id: "typescript",
    name: "TypeScript",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png",
    category: "frontend",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    features: [
      "Static typing",
      "Type inference",
      "Interfaces and type definitions",
      "Generics",
      "Enums",
      "Advanced object-oriented features",
      "ECMAScript compatibility",
    ],
    advantages: [
      "Catch errors during development",
      "Better IDE support and tooling",
      "Improved code maintainability",
      "Enhanced refactoring capabilities",
      "Scales to large codebases",
    ],
    disadvantages: [
      "Additional compilation step",
      "Learning curve for type system",
      "Can be overly verbose for simple projects",
      "Type definition maintenance",
    ],
    useCases: [
      "Large-scale JavaScript applications",
      "Enterprise software",
      "Team-based development",
      "Libraries and frameworks",
      "Complex frontend applications",
    ],
    exampleWebsites: [
      {
        name: "Slack",
        url: "https://slack.com",
        description: "Slack's web client is built with TypeScript.",
      },
      {
        name: "Asana",
        url: "https://asana.com",
        description: "Asana's web application uses TypeScript.",
      },
      {
        name: "Airbnb",
        url: "https://www.airbnb.com",
        description: "Airbnb uses TypeScript in parts of their frontend.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://www.typescriptlang.org/docs/",
        type: "documentation",
      },
      {
        name: "TypeScript Playground",
        url: "https://www.typescriptlang.org/play",
        type: "tool",
      },
      {
        name: "DefinitelyTyped",
        url: "https://github.com/DefinitelyTyped/DefinitelyTyped",
        type: "community",
      },
    ],
  },

  // Tailwind CSS
  tailwindcss: {
    id: "tailwindcss",
    name: "Tailwind CSS",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png",
    category: "frontend",
    description:
      "Tailwind CSS is a utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.",
    features: [
      "Utility-first approach",
      "Responsive design system",
      "Dark mode support",
      "JIT (Just-In-Time) compiler",
      "Custom variants",
      "Plugin system",
      "PurgeCSS integration",
    ],
    advantages: [
      "Rapid UI development",
      "No naming conventions needed",
      "Highly customizable",
      "Small production bundle size",
      "Consistent design system",
    ],
    disadvantages: [
      "HTML can become verbose",
      "Learning curve for utility approach",
      "Different mindset from traditional CSS",
      "Can be challenging for designers used to CSS",
    ],
    useCases: [
      "Modern web applications",
      "Responsive websites",
      "Design systems",
      "Prototyping",
      "Component libraries",
    ],
    exampleWebsites: [
      {
        name: "Vercel",
        url: "https://vercel.com",
        description: "Vercel's website is built with Tailwind CSS.",
      },
      {
        name: "Shopify Polaris",
        url: "https://polaris.shopify.com",
        description: "Shopify's design system uses Tailwind CSS.",
      },
      {
        name: "Netflix Jobs",
        url: "https://jobs.netflix.com",
        description: "Netflix's jobs portal uses Tailwind CSS.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://tailwindcss.com/docs",
        type: "documentation",
      },
      {
        name: "Tailwind UI",
        url: "https://tailwindui.com/",
        type: "tool",
      },
      {
        name: "Tailwind CSS Discord",
        url: "https://discord.gg/tailwindcss",
        type: "community",
      },
    ],
  },

  // HTML
  html: {
    id: "html",
    name: "HTML",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png",
    category: "frontend",
    description:
      "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser.",
    features: [
      "Semantic elements",
      "Form controls",
      "Media embedding",
      "Canvas for graphics",
      "Responsive design support",
      "Accessibility features",
    ],
    advantages: [
      "Universal browser support",
      "Easy to learn and use",
      "Semantic structure improves SEO",
      "Backward compatibility",
      "Integration with other web technologies",
    ],
    disadvantages: [
      "Limited functionality without CSS and JavaScript",
      "Browser inconsistencies",
      "No native state management",
    ],
    useCases: ["Web pages", "Email templates", "Documentation", "Static content", "Structure for web applications"],
    exampleWebsites: [
      {
        name: "Wikipedia",
        url: "https://www.wikipedia.org",
        description: "Wikipedia uses HTML for its content structure.",
      },
      {
        name: "MDN Web Docs",
        url: "https://developer.mozilla.org",
        description: "Mozilla's documentation site uses semantic HTML.",
      },
      {
        name: "W3C",
        url: "https://www.w3.org",
        description: "The World Wide Web Consortium's website uses HTML standards.",
      },
    ],
    resources: [
      {
        name: "MDN HTML Guide",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        type: "documentation",
      },
      {
        name: "W3Schools HTML Tutorial",
        url: "https://www.w3schools.com/html/",
        type: "tutorial",
      },
      {
        name: "HTML Validator",
        url: "https://validator.w3.org/",
        type: "tool",
      },
    ],
  },

  // CSS
  css: {
    id: "css",
    name: "CSS",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png",
    category: "frontend",
    description:
      "CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML.",
    features: [
      "Selectors and specificity",
      "Box model",
      "Flexbox and Grid layouts",
      "Animations and transitions",
      "Media queries for responsive design",
      "Custom properties (variables)",
    ],
    advantages: [
      "Separation of content and presentation",
      "Consistent styling across pages",
      "Responsive design capabilities",
      "Reduced page size with external stylesheets",
      "Browser caching improves load times",
    ],
    disadvantages: [
      "Browser compatibility issues",
      "Cascade complexity in large projects",
      "Debugging can be challenging",
      "No native logic or conditionals",
    ],
    useCases: [
      "Website styling",
      "Responsive layouts",
      "Animations and transitions",
      "Print styling",
      "Mobile-first design",
    ],
    exampleWebsites: [
      {
        name: "Apple",
        url: "https://www.apple.com",
        description: "Apple's website showcases advanced CSS techniques.",
      },
      {
        name: "Dribbble",
        url: "https://dribbble.com",
        description: "Dribbble uses CSS for its design-focused interface.",
      },
      {
        name: "CSS-Tricks",
        url: "https://css-tricks.com",
        description: "A website dedicated to teaching CSS techniques.",
      },
    ],
    resources: [
      {
        name: "MDN CSS Guide",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        type: "documentation",
      },
      {
        name: "CSS-Tricks",
        url: "https://css-tricks.com",
        type: "tutorial",
      },
      {
        name: "Can I Use",
        url: "https://caniuse.com/",
        type: "tool",
      },
    ],
  },

  // Svelte
  svelte: {
    id: "svelte",
    name: "Svelte",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/svelte.png",
    category: "frontend",
    description:
      "Svelte is a radical new approach to building user interfaces. Whereas traditional frameworks like React and Vue do the bulk of their work in the browser, Svelte shifts that work into a compile step that happens when you build your app.",
    features: [
      "Compile-time framework",
      "No virtual DOM",
      "Truly reactive",
      "Less boilerplate code",
      "Built-in animations",
      "Scoped styling",
    ],
    advantages: [
      "Smaller bundle sizes",
      "Better runtime performance",
      "Simple and intuitive syntax",
      "No framework runtime overhead",
      "Built-in state management",
    ],
    disadvantages: [
      "Smaller ecosystem than React or Vue",
      "Fewer third-party components",
      "Less mature tooling",
      "Fewer job opportunities",
    ],
    useCases: [
      "Interactive web applications",
      "Data visualization",
      "Micro-frontends",
      "Progressive web apps",
      "Static sites with SvelteKit",
    ],
    exampleWebsites: [
      {
        name: "The New York Times",
        url: "https://www.nytimes.com",
        description: "The New York Times uses Svelte for interactive articles.",
      },
      {
        name: "Chess.com",
        url: "https://www.chess.com",
        description: "Chess.com uses Svelte for parts of their interface.",
      },
      {
        name: "Spotify",
        url: "https://open.spotify.com",
        description: "Spotify has used Svelte for some of their web experiences.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://svelte.dev/docs",
        type: "documentation",
      },
      {
        name: "Svelte Tutorial",
        url: "https://svelte.dev/tutorial",
        type: "tutorial",
      },
      {
        name: "Svelte Society",
        url: "https://sveltesociety.dev/",
        type: "community",
      },
    ],
  },

  // Redux
  redux: {
    id: "redux",
    name: "Redux",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redux.png",
    category: "frontend",
    description:
      "Redux is a predictable state container for JavaScript apps, often used with React. It helps you write applications that behave consistently and are easy to test.",
    features: [
      "Single source of truth",
      "State is read-only",
      "Changes made with pure functions",
      "Time-travel debugging",
      "Middleware support",
      "DevTools for debugging",
    ],
    advantages: [
      "Predictable state management",
      "Centralized application state",
      "Debugging capabilities",
      "Preserves state across page refreshes",
      "Large ecosystem of middleware",
    ],
    disadvantages: [
      "Boilerplate code",
      "Learning curve",
      "Overkill for simple applications",
      "Performance considerations for large states",
    ],
    useCases: [
      "Complex state management",
      "Large-scale applications",
      "Applications with many user interactions",
      "Collaborative environments",
      "Applications requiring undo/redo functionality",
    ],
    exampleWebsites: [
      {
        name: "Instagram",
        url: "https://www.instagram.com",
        description: "Instagram uses Redux for state management in its web app.",
      },
      {
        name: "Khan Academy",
        url: "https://www.khanacademy.org",
        description: "Khan Academy uses Redux for its learning platform.",
      },
      {
        name: "Airbnb",
        url: "https://www.airbnb.com",
        description: "Airbnb uses Redux in parts of its web application.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://redux.js.org/",
        type: "documentation",
      },
      {
        name: "Redux Toolkit",
        url: "https://redux-toolkit.js.org/",
        type: "tool",
      },
      {
        name: "Redux DevTools",
        url: "https://github.com/reduxjs/redux-devtools",
        type: "tool",
      },
    ],
  },

  // Webpack
  webpack: {
    id: "webpack",
    name: "Webpack",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/webpack.png",
    category: "frontend",
    description:
      "Webpack is a static module bundler for modern JavaScript applications. It builds a dependency graph that includes every module your application needs, then packages all of those modules into one or more bundles.",
    features: [
      "Code splitting",
      "Loaders for different file types",
      "Plugin system",
      "Hot Module Replacement",
      "Tree shaking",
      "Dynamic imports",
    ],
    advantages: [
      "Optimized bundle size",
      "Development server with hot reloading",
      "Comprehensive asset management",
      "Environment-specific configurations",
      "Rich ecosystem of loaders and plugins",
    ],
    disadvantages: [
      "Complex configuration",
      "Steep learning curve",
      "Build performance for large projects",
      "Frequent updates requiring configuration changes",
    ],
    useCases: [
      "Single-page applications",
      "Progressive web apps",
      "Static site generation",
      "Enterprise web applications",
      "JavaScript libraries and frameworks",
    ],
    exampleWebsites: [
      {
        name: "Facebook",
        url: "https://www.facebook.com",
        description: "Facebook uses Webpack for bundling its web application.",
      },
      {
        name: "Twitter",
        url: "https://twitter.com",
        description: "Twitter uses Webpack in its build process.",
      },
      {
        name: "Shopify",
        url: "https://www.shopify.com",
        description: "Shopify uses Webpack for its admin interface.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://webpack.js.org/concepts/",
        type: "documentation",
      },
      {
        name: "Webpack Academy",
        url: "https://webpack.academy/",
        type: "tutorial",
      },
      {
        name: "Create App",
        url: "https://createapp.dev/",
        type: "tool",
      },
    ],
  },

  // Vite
  vite: {
    id: "vite",
    name: "Vite",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/vite.png",
    category: "frontend",
    description:
      "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of a dev server that provides rich feature enhancements over native ES modules and a build command.",
    features: [
      "Lightning-fast cold server start",
      "Instant hot module replacement (HMR)",
      "True on-demand compilation",
      "CSS preprocessing support",
      "TypeScript support",
      "JSX support",
    ],
    advantages: [
      "Extremely fast development server",
      "Optimized builds with Rollup",
      "No bundling during development",
      "Framework-agnostic",
      "Simple configuration",
    ],
    disadvantages: [
      "Newer with less community solutions",
      "Some plugins from webpack ecosystem not available",
      "Requires modern browsers for development",
    ],
    useCases: [
      "React applications",
      "Vue applications",
      "Svelte applications",
      "Static site generation",
      "Modern web applications",
    ],
    exampleWebsites: [
      {
        name: "Vitest",
        url: "https://vitest.dev",
        description: "Vitest is built with Vite.",
      },
      {
        name: "VueUse",
        url: "https://vueuse.org",
        description: "VueUse documentation is built with Vite.",
      },
      {
        name: "Astro",
        url: "https://astro.build",
        description: "Astro uses Vite as its build engine.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://vitejs.dev/guide/",
        type: "documentation",
      },
      {
        name: "Awesome Vite",
        url: "https://github.com/vitejs/awesome-vite",
        type: "community",
      },
      {
        name: "Vite Plugin Collection",
        url: "https://github.com/vitejs/vite/tree/main/packages",
        type: "tool",
      },
    ],
  },

  // Sass
  sass: {
    id: "sass",
    name: "Sass",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sass.png",
    category: "frontend",
    description:
      "Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into CSS. It extends CSS with features like variables, nested rules, mixins, and functions.",
    features: [
      "Variables",
      "Nested rules",
      "Mixins and functions",
      "Inheritance",
      "Partials and imports",
      "Control directives (if/else, for loops)",
    ],
    advantages: [
      "Reduces repetition in CSS",
      "Better organization with partials",
      "Mathematical operations",
      "Compatibility with all CSS versions",
      "Large community and resources",
    ],
    disadvantages: [
      "Requires compilation step",
      "Can lead to overly specific selectors",
      "Learning curve for advanced features",
      "Debugging can be harder with compiled code",
    ],
    useCases: [
      "Large-scale websites",
      "Design systems",
      "Theme customization",
      "Complex UI components",
      "CSS frameworks",
    ],
    exampleWebsites: [
      {
        name: "GitHub",
        url: "https://github.com",
        description: "GitHub uses Sass for its styling.",
      },
      {
        name: "Airbnb",
        url: "https://www.airbnb.com",
        description: "Airbnb uses Sass in its frontend codebase.",
      },
      {
        name: "Shopify",
        url: "https://www.shopify.com",
        description: "Shopify uses Sass for its theming system.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://sass-lang.com/documentation",
        type: "documentation",
      },
      {
        name: "Sass Guidelines",
        url: "https://sass-guidelin.es/",
        type: "tutorial",
      },
      {
        name: "Sassmeister",
        url: "https://www.sassmeister.com/",
        type: "tool",
      },
    ],
  },

  // Material UI
  materialui: {
    id: "materialui",
    name: "Material UI",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/material_ui.png",
    category: "frontend",
    description:
      "Material UI is a popular React UI framework that implements Google's Material Design. It provides a comprehensive suite of UI tools and components to help developers build web applications.",
    features: [
      "Comprehensive component library",
      "Customizable theming",
      "Responsive design",
      "Server-side rendering support",
      "TypeScript support",
      "Accessibility features",
    ],
    advantages: [
      "Professional and consistent UI",
      "Well-documented components",
      "Active development and community",
      "Customizable to match brand guidelines",
      "Responsive out of the box",
    ],
    disadvantages: [
      "Bundle size can be large",
      "Opinionated design system",
      "Learning curve for customization",
      "Performance considerations for complex UIs",
    ],
    useCases: [
      "Admin dashboards",
      "Data-heavy applications",
      "Enterprise applications",
      "Cross-platform web apps",
      "Rapid prototyping",
    ],
    exampleWebsites: [
      {
        name: "NASA",
        url: "https://www.nasa.gov",
        description: "NASA uses Material UI for some of its web applications.",
      },
      {
        name: "Unity",
        url: "https://unity.com",
        description: "Unity uses Material UI components in its web platform.",
      },
      {
        name: "Shutterstock",
        url: "https://www.shutterstock.com",
        description: "Shutterstock uses Material UI in its contributor portal.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://mui.com/material-ui/getting-started/",
        type: "documentation",
      },
      {
        name: "Material UI Templates",
        url: "https://mui.com/templates/",
        type: "tool",
      },
      {
        name: "Material UI GitHub",
        url: "https://github.com/mui/material-ui",
        type: "community",
      },
    ],
  },

  // Express
  express: {
    id: "express",
    name: "Express",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/express.png",
    category: "backend",
    description:
      "Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.",
    features: [
      "Middleware architecture",
      "Routing system",
      "Template engine support",
      "Error handling",
      "Static file serving",
      "HTTP utility methods",
    ],
    advantages: [
      "Minimalist and unopinionated",
      "Easy to learn and use",
      "Large ecosystem of middleware",
      "High performance",
      "Flexible routing",
    ],
    disadvantages: [
      "Minimal structure can lead to inconsistent code",
      "No built-in ORM",
      "Manual handling of async operations",
      "Requires additional libraries for many features",
    ],
    useCases: [
      "RESTful APIs",
      "Web applications",
      "Real-time services",
      "Microservices",
      "Single-page application backends",
    ],
    exampleWebsites: [
      {
        name: "MySpace",
        url: "https://myspace.com",
        description: "MySpace uses Express for its API.",
      },
      {
        name: "Uber",
        url: "https://www.uber.com",
        description: "Uber uses Express for some of its services.",
      },
      {
        name: "Fox Sports",
        url: "https://www.foxsports.com",
        description: "Fox Sports uses Express in its backend.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://expressjs.com/",
        type: "documentation",
      },
      {
        name: "Express Generator",
        url: "https://expressjs.com/en/starter/generator.html",
        type: "tool",
      },
      {
        name: "Express GitHub",
        url: "https://github.com/expressjs/express",
        type: "community",
      },
    ],
  },

  // Python
  python: {
    id: "python",
    name: "Python",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/python.png",
    category: "backend",
    description:
      "Python is a high-level, interpreted programming language known for its readability and versatility. It supports multiple programming paradigms and has a comprehensive standard library.",
    features: [
      "Simple, readable syntax",
      "Dynamic typing",
      "Automatic memory management",
      "Comprehensive standard library",
      "Support for multiple paradigms",
      "Extensive third-party packages",
    ],
    advantages: [
      "Easy to learn and read",
      "Rapid development",
      "Cross-platform compatibility",
      "Strong community support",
      "Versatile for many applications",
    ],
    disadvantages: [
      "Slower execution compared to compiled languages",
      "Global Interpreter Lock (GIL) limits concurrency",
      "High memory usage",
      "Runtime errors due to dynamic typing",
    ],
    useCases: [
      "Web development (Django, Flask)",
      "Data analysis and visualization",
      "Machine learning and AI",
      "Automation and scripting",
      "Scientific computing",
    ],
    exampleWebsites: [
      {
        name: "Instagram",
        url: "https://www.instagram.com",
        description: "Instagram uses Python with Django for its backend.",
      },
      {
        name: "Spotify",
        url: "https://www.spotify.com",
        description: "Spotify uses Python for data analysis and backend services.",
      },
      {
        name: "Dropbox",
        url: "https://www.dropbox.com",
        description: "Dropbox was largely built with Python.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://docs.python.org/3/",
        type: "documentation",
      },
      {
        name: "Python Package Index (PyPI)",
        url: "https://pypi.org/",
        type: "tool",
      },
      {
        name: "Real Python",
        url: "https://realpython.com/",
        type: "tutorial",
      },
    ],
  },

  // Django
  django: {
    id: "django",
    name: "Django",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/django.png",
    category: "backend",
    description:
      "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the model-template-view architectural pattern.",
    features: [
      "ORM (Object-Relational Mapping)",
      "Admin interface",
      "Authentication system",
      "URL routing",
      "Template engine",
      "Form handling",
      "Security features",
    ],
    advantages: [
      "Rapid development",
      "Batteries included philosophy",
      "Scalability",
      "Security out of the box",
      "DRY (Don't Repeat Yourself) principle",
    ],
    disadvantages: [
      "Monolithic structure",
      "Steep learning curve for beginners",
      "Can be overkill for simple applications",
      "Slower than some lightweight frameworks",
    ],
    useCases: [
      "Content management systems",
      "E-commerce platforms",
      "Social media sites",
      "Scientific computing platforms",
      "Enterprise applications",
    ],
    exampleWebsites: [
      {
        name: "Instagram",
        url: "https://www.instagram.com",
        description: "Instagram is built with Django.",
      },
      {
        name: "Pinterest",
        url: "https://www.pinterest.com",
        description: "Pinterest uses Django for its backend.",
      },
      {
        name: "Mozilla",
        url: "https://www.mozilla.org",
        description: "Mozilla uses Django for several of its sites.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://docs.djangoproject.com/",
        type: "documentation",
      },
      {
        name: "Django Girls Tutorial",
        url: "https://tutorial.djangogirls.org/",
        type: "tutorial",
      },
      {
        name: "Django Packages",
        url: "https://djangopackages.org/",
        type: "community",
      },
    ],
  },

  // Java
  java: {
    id: "java",
    name: "Java",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png",
    category: "backend",
    description:
      "Java is a class-based, object-oriented programming language designed for portability and cross-platform compatibility. It's known for its 'write once, run anywhere' capability.",
    features: [
      "Platform independence",
      "Object-oriented programming",
      "Automatic memory management",
      "Strong type checking",
      "Multithreading support",
      "Rich standard library",
    ],
    advantages: [
      "Platform independence",
      "Strong community and corporate support",
      "Robust and secure",
      "Scalable for enterprise applications",
      "Backward compatibility",
    ],
    disadvantages: ["Verbose syntax", "Higher memory consumption", "Slower startup time", "Complex for simple tasks"],
    useCases: [
      "Enterprise applications",
      "Android app development",
      "Web applications (with Spring)",
      "Big data technologies",
      "Financial services applications",
    ],
    exampleWebsites: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        description: "LinkedIn uses Java for its backend services.",
      },
      {
        name: "Netflix",
        url: "https://www.netflix.com",
        description: "Netflix uses Java for many of its backend systems.",
      },
      {
        name: "Amazon",
        url: "https://www.amazon.com",
        description: "Amazon uses Java extensively in its infrastructure.",
      },
    ],
    resources: [
      {
        name: "Oracle Java Documentation",
        url: "https://docs.oracle.com/en/java/",
        type: "documentation",
      },
      {
        name: "Baeldung",
        url: "https://www.baeldung.com/",
        type: "tutorial",
      },
      {
        name: "Maven Central Repository",
        url: "https://mvnrepository.com/",
        type: "tool",
      },
    ],
  },

  // Spring Boot
  spring: {
    id: "spring",
    name: "Spring Boot",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring_boot.png",
    category: "backend",
    description:
      "Spring Boot is an extension of the Spring framework that simplifies the process of building production-ready applications. It uses convention over configuration to get applications up and running quickly.",
    features: [
      "Auto-configuration",
      "Standalone applications",
      "Embedded servers",
      "Production-ready features",
      "Spring ecosystem integration",
      "Dependency management",
    ],
    advantages: [
      "Rapid application development",
      "Microservices support",
      "Production-ready defaults",
      "Large ecosystem of starters",
      "Excellent documentation and community",
    ],
    disadvantages: [
      "Learning curve for beginners",
      "Can be heavyweight for simple applications",
      "Memory consumption",
      "Complex configuration for advanced scenarios",
    ],
    useCases: [
      "RESTful APIs",
      "Microservices",
      "Enterprise applications",
      "Batch processing",
      "Cloud-native applications",
    ],
    exampleWebsites: [
      {
        name: "Netflix",
        url: "https://www.netflix.com",
        description: "Netflix uses Spring Boot for some of its microservices.",
      },
      {
        name: "Ticketmaster",
        url: "https://www.ticketmaster.com",
        description: "Ticketmaster uses Spring Boot for its backend.",
      },
      {
        name: "Capital One",
        url: "https://www.capitalone.com",
        description: "Capital One uses Spring Boot for financial services.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://spring.io/projects/spring-boot",
        type: "documentation",
      },
      {
        name: "Spring Initializr",
        url: "https://start.spring.io/",
        type: "tool",
      },
      {
        name: "Baeldung Spring Tutorials",
        url: "https://www.baeldung.com/spring-tutorial",
        type: "tutorial",
      },
    ],
  },

  // PHP
  php: {
    id: "php",
    name: "PHP",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/php.png",
    category: "backend",
    description:
      "PHP is a popular general-purpose scripting language especially suited for web development. It's embedded in HTML and interpreted on the server side.",
    features: [
      "Server-side scripting",
      "Command line scripting",
      "Desktop application development",
      "Database integration",
      "Cross-platform compatibility",
      "Large standard library",
    ],
    advantages: [
      "Easy to learn and use",
      "Wide hosting availability",
      "Large community and resources",
      "Extensive framework ecosystem",
      "Good database integration",
    ],
    disadvantages: [
      "Inconsistent function naming",
      "Security concerns if not properly implemented",
      "Performance limitations for high-load applications",
      "Loosely typed language can lead to bugs",
    ],
    useCases: [
      "Dynamic websites",
      "Content management systems",
      "E-commerce platforms",
      "Customer portals",
      "API development",
    ],
    exampleWebsites: [
      {
        name: "Facebook",
        url: "https://www.facebook.com",
        description: "Facebook was originally built with PHP and still uses it.",
      },
      {
        name: "WordPress",
        url: "https://wordpress.org",
        description: "WordPress is built with PHP.",
      },
      {
        name: "Wikipedia",
        url: "https://www.wikipedia.org",
        description: "Wikipedia runs on MediaWiki, which is built with PHP.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://www.php.net/docs.php",
        type: "documentation",
      },
      {
        name: "PHP The Right Way",
        url: "https://phptherightway.com/",
        type: "tutorial",
      },
      {
        name: "Packagist",
        url: "https://packagist.org/",
        type: "tool",
      },
    ],
  },

  // Laravel
  laravel: {
    id: "laravel",
    name: "Laravel",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/laravel.png",
    category: "backend",
    description:
      "Laravel is a PHP web application framework with expressive, elegant syntax. It aims to make the development process enjoyable while providing the features needed for modern web development, such as routing, templating, and database interaction.",
    features: [
      "Eloquent ORM",
      "Artisan console",
      "Blade templating engine",
      "Routing system",
      "Authentication and authorization",
      "Testing tools",
      "Task scheduling",
    ],
    advantages: [
      "Developer-friendly syntax",
      "Rapid development",
      "Large community and ecosystem",
      "Security features",
      "Testing support",
    ],
    disadvantages: [
      "Can be slower than some alternatives",
      "Steep learning curve for advanced features",
      "Overhead for simple applications",
      "Database-heavy approach",
    ],
    useCases: [
      "Web applications",
      "RESTful APIs",
      "E-commerce platforms",
      "Content management systems",
      "Social networking sites",
    ],
    exampleWebsites: [
      {
        name: "Laracasts",
        url: "https://laracasts.com",
        description: "Laracasts is built with Laravel.",
      },
      {
        name: "AsgardCMS",
        url: "https://asgardcms.com",
        description: "AsgardCMS is a modular CMS built with Laravel.",
      },
      {
        name: "OctoberCMS",
        url: "https://octobercms.com",
        description: "OctoberCMS is a free, open-source, self-hosted CMS platform based on the Laravel PHP Framework.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://laravel.com/docs",
        type: "documentation",
      },
      {
        name: "Laracasts",
        url: "https://laracasts.com",
        type: "tutorial",
      },
      {
        name: "Laravel News",
        url: "https://laravel-news.com",
        type: "community",
      },
    ],
  },

  // Ruby on Rails
  rubyonrails: {
    id: "rubyonrails",
    name: "Ruby on Rails",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rails.png",
    category: "backend",
    description:
      "Ruby on Rails is a server-side web application framework written in Ruby under the MIT License. Rails is a model–view–controller (MVC) framework, providing default structures for a database, a web service, and web pages.",
    features: [
      "Convention over configuration",
      "Active Record ORM",
      "RESTful routing",
      "Scaffolding",
      "Testing framework",
      "Asset pipeline",
    ],
    advantages: [
      "Rapid development",
      "Large community and ecosystem",
      "DRY (Don't Repeat Yourself) principle",
      "Convention over configuration",
      "Testing support",
    ],
    disadvantages: [
      "Performance can be an issue",
      "Steep learning curve for beginners",
      "Monolithic structure",
      "Debugging can be challenging",
    ],
    useCases: [
      "Web applications",
      "E-commerce platforms",
      "Social networking sites",
      "Content management systems",
      "Project management tools",
    ],
    exampleWebsites: [
      {
        name: "GitHub",
        url: "https://github.com",
        description: "GitHub was originally built with Ruby on Rails.",
      },
      {
        name: "Airbnb",
        url: "https://www.airbnb.com",
        description: "Airbnb was originally built with Ruby on Rails.",
      },
      {
        name: "Shopify",
        url: "https://www.shopify.com",
        description: "Shopify is built with Ruby on Rails.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://guides.rubyonrails.org/",
        type: "documentation",
      },
      {
        name: "Rails Tutorial",
        url: "https://www.railstutorial.org/",
        type: "tutorial",
      },
      {
        name: "Ruby Toolbox",
        url: "https://www.ruby-toolbox.com/",
        type: "community",
      },
    ],
  },

  // PostgreSQL
  postgresql: {
    id: "postgresql",
    name: "PostgreSQL",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png",
    category: "database",
    description:
      "PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads.",
    features: [
      "ACID compliance",
      "Advanced indexing",
      "Full-text search",
      "Geospatial data support",
      "JSON support",
      "Concurrency control",
    ],
    advantages: ["Data integrity", "Scalability", "Extensibility", "Open source", "Large community and ecosystem"],
    disadvantages: [
      "Performance can be an issue for some workloads",
      "Configuration can be complex",
      "Steep learning curve for advanced features",
      "Resource intensive",
    ],
    useCases: [
      "Web applications",
      "Mobile applications",
      "Geospatial applications",
      "Data warehousing",
      "Financial applications",
    ],
    exampleWebsites: [
      {
        name: "Instagram",
        url: "https://www.instagram.com",
        description: "Instagram uses PostgreSQL for some of its data storage needs.",
      },
      {
        name: "Spotify",
        url: "https://www.spotify.com",
        description: "Spotify uses PostgreSQL for some of its data storage needs.",
      },
      {
        name: "Twitch",
        url: "https://www.twitch.tv",
        description: "Twitch uses PostgreSQL for some of its data storage needs.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://www.postgresql.org/docs/",
        type: "documentation",
      },
      {
        name: "PostgreSQL Tutorial",
        url: "https://www.postgresqltutorial.com/",
        type: "tutorial",
      },
      {
        name: "Planet PostgreSQL",
        url: "https://planet.postgresql.org/",
        type: "community",
      },
    ],
  },

  // MySQL
  mysql: {
    id: "mysql",
    name: "MySQL",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png",
    category: "database",
    description:
      "MySQL is an open-source relational database management system (RDBMS). Its name is a combination of 'My', the name of co-founder Michael Widenius's daughter, and 'SQL', the abbreviation for Structured Query Language.",
    features: ["ACID compliance", "Replication", "Partitioning", "Stored procedures", "Triggers", "Views"],
    advantages: ["Easy to use", "Scalability", "Performance", "Open source", "Large community and ecosystem"],
    disadvantages: [
      "Limited support for advanced features",
      "Performance can be an issue for some workloads",
      "Licensing can be complex",
      "Security vulnerabilities",
    ],
    useCases: ["Web applications", "E-commerce platforms", "Content management systems", "Logging", "Data warehousing"],
    exampleWebsites: [
      {
        name: "YouTube",
        url: "https://www.youtube.com",
        description: "YouTube uses MySQL for some of its data storage needs.",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com",
        description: "Facebook uses MySQL for some of its data storage needs.",
      },
      {
        name: "Twitter",
        url: "https://www.twitter.com",
        description: "Twitter uses MySQL for some of its data storage needs.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://dev.mysql.com/doc/",
        type: "documentation",
      },
      {
        name: "MySQL Tutorial",
        url: "https://www.mysqltutorial.org/",
        type: "tutorial",
      },
      {
        name: "MySQL Performance Blog",
        url: "https://www.mysqlperformanceblog.com/",
        type: "community",
      },
    ],
  },

  // SQLite
  sqlite: {
    id: "sqlite",
    name: "SQLite",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sqlite.png",
    category: "database",
    description:
      "SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine. SQLite is the most used database engine in the world.",
    features: [
      "Self-contained",
      "Serverless",
      "Zero-configuration",
      "Transactional",
      "Full-featured SQL",
      "Cross-platform",
    ],
    advantages: ["Easy to use", "Small footprint", "Fast performance", "Reliable", "Cross-platform"],
    disadvantages: ["Limited concurrency", "Limited scalability", "No user management", "No network access"],
    useCases: ["Embedded devices", "Mobile applications", "Desktop applications", "Testing", "Small websites"],
    exampleWebsites: [
      {
        name: "Adobe",
        url: "https://www.adobe.com",
        description: "Adobe uses SQLite in some of its products.",
      },
      {
        name: "Apple",
        url: "https://www.apple.com",
        description: "Apple uses SQLite in some of its products.",
      },
      {
        name: "Google",
        url: "https://www.google.com",
        description: "Google uses SQLite in some of its products.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://www.sqlite.org/docs.html",
        type: "documentation",
      },
      {
        name: "SQLite Tutorial",
        url: "https://www.sqlitetutorial.net/",
        type: "tutorial",
      },
      {
        name: "SQLite Forum",
        url: "https://sqlite.org/forum/",
        type: "community",
      },
    ],
  },

  // DynamoDB
  dynamodb: {
    id: "dynamodb",
    name: "DynamoDB",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/aws.png",
    category: "database",
    description:
      "Amazon DynamoDB is a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability.",
    features: [
      "Key-value and document data models",
      "Serverless",
      "Automatic scaling",
      "Built-in security",
      "In-memory caching",
      "Global tables",
    ],
    advantages: ["Scalability", "Performance", "Availability", "Fully managed", "Serverless"],
    disadvantages: ["Limited query capabilities", "No ACID transactions", "Vendor lock-in", "Cost can be high"],
    useCases: ["Web applications", "Mobile applications", "Gaming", "Ad tech", "IoT"],
    exampleWebsites: [
      {
        name: "Amazon",
        url: "https://www.amazon.com",
        description: "Amazon uses DynamoDB for some of its data storage needs.",
      },
      {
        name: "Netflix",
        url: "https://www.netflix.com",
        description: "Netflix uses DynamoDB for some of its data storage needs.",
      },
      {
        name: "Airbnb",
        url: "https://www.airbnb.com",
        description: "Airbnb uses DynamoDB for some of its data storage needs.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://docs.aws.amazon.com/dynamodb/",
        type: "documentation",
      },
      {
        name: "DynamoDB Developer Guide",
        url: "https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/",
        type: "tutorial",
      },
      {
        name: "AWS DynamoDB Forum",
        url: "https://forums.aws.amazon.com/forum.jspa?forumID=80",
        type: "community",
      },
    ],
  },

  // Redis
  redis: {
    id: "redis",
    name: "Redis",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/redis.png",
    category: "database",
    description:
      "Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes and streams.",
    features: [
      "In-memory data storage",
      "Key-value data model",
      "Pub/Sub messaging",
      "Transactions",
      "Lua scripting",
      "Data persistence",
    ],
    advantages: ["Fast performance", "Scalability", "Versatility", "Open source", "Large community and ecosystem"],
    disadvantages: [
      "Data loss on server failure",
      "Memory limitations",
      "No ACID transactions",
      "Configuration can be complex",
    ],
    useCases: ["Caching", "Session management", "Real-time analytics", "Message queue", "Leaderboard"],
    exampleWebsites: [
      {
        name: "Twitter",
        url: "https://www.twitter.com",
        description: "Twitter uses Redis for some of its data storage needs.",
      },
      {
        name: "GitHub",
        url: "https://github.com",
        description: "GitHub uses Redis for some of its data storage needs.",
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
        description: "Stack Overflow uses Redis for some of its data storage needs.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://redis.io/documentation",
        type: "documentation",
      },
      {
        name: "Redis Tutorial",
        url: "https://redislabs.com/ebook/redis-in-action/",
        type: "tutorial",
      },
      {
        name: "Redis Community",
        url: "https://redis.com/community/",
        type: "community",
      },
    ],
  },

  // Google Cloud Platform
  gcp: {
    id: "gcp",
    name: "Google Cloud Platform",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/google_cloud.png",
    category: "cloud",
    description:
      "Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search and YouTube.",
    features: ["Compute Engine", "Cloud Storage", "App Engine", "Kubernetes Engine", "Cloud Functions", "Cloud SQL"],
    advantages: ["Scalability", "Performance", "Innovation", "Global infrastructure", "Competitive pricing"],
    disadvantages: ["Complex pricing structure", "Steep learning curve", "Vendor lock-in", "Limited market share"],
    useCases: ["Web applications", "Mobile applications", "Big data analytics", "Machine learning", "IoT"],
    exampleWebsites: [
      {
        name: "Google",
        url: "https://www.google.com",
        description: "Google uses GCP for many of its services.",
      },
      {
        name: "Spotify",
        url: "https://www.spotify.com",
        description: "Spotify uses GCP for some of its services.",
      },
      {
        name: "Snapchat",
        url: "https://www.snapchat.com",
        description: "Snapchat uses GCP for some of its services.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://cloud.google.com/docs/",
        type: "documentation",
      },
      {
        name: "Google Cloud Training",
        url: "https://cloud.google.com/training/",
        type: "tutorial",
      },
      {
        name: "Google Cloud Community",
        url: "https://cloud.google.com/community/",
        type: "community",
      },
    ],
  },

  // Azure
  azure: {
    id: "azure",
    name: "Azure",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/microsoft_azure.png",
    category: "cloud",
    description:
      "Microsoft Azure is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers.",
    features: ["Virtual Machines", "Blob Storage", "App Service", "Kubernetes Service", "Functions", "SQL Database"],
    advantages: [
      "Hybrid cloud capabilities",
      "Integration with Microsoft products",
      "Global infrastructure",
      "Enterprise-grade security",
      "Competitive pricing",
    ],
    disadvantages: [
      "Complex pricing structure",
      "Steep learning curve",
      "Vendor lock-in",
      "Limited open-source support",
    ],
    useCases: ["Web applications", "Mobile applications", "Big data analytics", "Machine learning", "IoT"],
    exampleWebsites: [
      {
        name: "Microsoft",
        url: "https://www.microsoft.com",
        description: "Microsoft uses Azure for many of its services.",
      },
      {
        name: "Accenture",
        url: "https://www.accenture.com",
        description: "Accenture uses Azure for some of its services.",
      },
      {
        name: "HP",
        url: "https://www.hp.com",
        description: "HP uses Azure for some of its services.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://docs.microsoft.com/en-us/azure/",
        type: "documentation",
      },
      {
        name: "Microsoft Azure Training",
        url: "https://docs.microsoft.com/en-us/learn/azure/",
        type: "tutorial",
      },
      {
        name: "Microsoft Azure Community",
        url: "https://azure.microsoft.com/en-us/community/",
        type: "community",
      },
    ],
  },

  // Docker
  docker: {
    id: "docker",
    name: "Docker",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/docker.png",
    category: "cloud",
    description:
      "Docker is a set of platform as a service (PaaS) products that use OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels.",
    features: ["Containerization", "Image registry", "Orchestration", "Networking", "Security", "Portability"],
    advantages: ["Consistency", "Portability", "Scalability", "Isolation", "Efficiency"],
    disadvantages: ["Security vulnerabilities", "Complexity", "Resource overhead", "Learning curve"],
    useCases: ["Web applications", "Microservices", "Continuous integration", "Continuous deployment", "DevOps"],
    exampleWebsites: [
      {
        name: "Spotify",
        url: "https://www.spotify.com",
        description: "Spotify uses Docker for some of its services.",
      },
      {
        name: "Netflix",
        url: "https://www.netflix.com",
        description: "Netflix uses Docker for some of its services.",
      },
      {
        name: "Airbnb",
        url: "https://www.airbnb.com",
        description: "Airbnb uses Docker for some of its services.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://docs.docker.com/",
        type: "documentation",
      },
      {
        name: "Docker Tutorial",
        url: "https://www.docker.com/101-tutorial/",
        type: "tutorial",
      },
      {
        name: "Docker Community",
        url: "https://www.docker.com/community/",
        type: "community",
      },
    ],
  },

  // Kubernetes
  kubernetes: {
    id: "kubernetes",
    name: "Kubernetes",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kubernetes.png",
    category: "cloud",
    description:
      "Kubernetes is an open-source container orchestration system for automating application deployment, scaling, and management.",
    features: [
      "Automated deployments",
      "Scaling",
      "Load balancing",
      "Self-healing",
      "Service discovery",
      "Rollouts and rollbacks",
    ],
    advantages: ["Scalability", "Availability", "Portability", "Automation", "Flexibility"],
    disadvantages: ["Complexity", "Steep learning curve", "Resource overhead", "Security vulnerabilities"],
    useCases: ["Web applications", "Microservices", "Continuous integration", "Continuous deployment", "DevOps"],
    exampleWebsites: [
      {
        name: "Google",
        url: "https://www.google.com",
        description: "Google uses Kubernetes for some of its services.",
      },
      {
        name: "Spotify",
        url: "https://www.spotify.com",
        description: "Spotify uses Kubernetes for some of its services.",
      },
      {
        name: "Airbnb",
        url: "https://www.airbnb.com",
        description: "Airbnb uses Kubernetes for some of its services.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://kubernetes.io/docs/home/",
        type: "documentation",
      },
      {
        name: "Kubernetes Tutorial",
        url: "https://kubernetes.io/docs/tutorials/",
        type: "tutorial",
      },
      {
        name: "Kubernetes Community",
        url: "https://kubernetes.io/community/",
        type: "community",
      },
    ],
  },

  // TensorFlow
  pytorch: {
    id: "pytorch",
    name: "PyTorch",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/pytorch.png",
    category: "ai-ml",
    description:
      "PyTorch is an open source machine learning framework that accelerates the path from research prototyping to production deployment.",
    features: [
      "Dynamic computation graph",
      "GPU acceleration",
      "Python-first",
      "Extensive library support",
      "Cloud support",
      "Community support",
    ],
    advantages: ["Flexibility", "Ease of use", "Performance", "Community support", "Cloud support"],
    disadvantages: [
      "Steep learning curve",
      "Limited production deployment options",
      "Debugging can be challenging",
      "Memory management",
    ],
    useCases: [
      "Computer vision",
      "Natural language processing",
      "Reinforcement learning",
      "Generative models",
      "Research",
    ],
    exampleWebsites: [
      {
        name: "Facebook",
        url: "https://www.facebook.com",
        description: "Facebook uses PyTorch for some of its services.",
      },
      {
        name: "Tesla",
        url: "https://www.tesla.com",
        description: "Tesla uses PyTorch for some of its services.",
      },
      {
        name: "Salesforce",
        url: "https://www.salesforce.com",
        description: "Salesforce uses PyTorch for some of its services.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://pytorch.org/docs/stable/index.html",
        type: "documentation",
      },
      {
        name: "PyTorch Tutorials",
        url: "https://pytorch.org/tutorials/",
        type: "tutorial",
      },
      {
        name: "PyTorch Community",
        url: "https://pytorch.org/community/",
        type: "community",
      },
    ],
  },

  // Keras
  keras: {
    id: "keras",
    name: "Keras",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/keras.png",
    category: "ai-ml",
    description:
      "Keras is an API designed for human beings, not machines. Keras follows best practices for reducing cognitive load: it offers consistent & simple APIs, it minimizes the number of user actions required for common use cases, and it provides clear and actionable feedback upon user error.",
    features: ["Easy to use", "Modular", "Extensible", "Python-first", "Multi-backend support", "Community support"],
    advantages: ["Rapid prototyping", "Ease of use", "Flexibility", "Community support", "Multi-backend support"],
    disadvantages: [
      "Limited performance",
      "Debugging can be challenging",
      "Memory management",
      "Limited production deployment options",
    ],
    useCases: ["Computer vision", "Natural language processing", "Generative models", "Research", "Education"],
    exampleWebsites: [
      {
        name: "Netflix",
        url: "https://www.netflix.com",
        description: "Netflix uses Keras for some of its services.",
      },
      {
        name: "Yelp",
        url: "https://www.yelp.com",
        description: "Yelp uses Keras for some of its services.",
      },
      {
        name: "Square",
        url: "https://www.squareup.com",
        description: "Square uses Keras for some of its services.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://keras.io/api/",
        type: "documentation",
      },
      {
        name: "Keras Tutorials",
        url: "https://keras.io/examples/",
        type: "tutorial",
      },
      {
        name: "Keras Community",
        url: "https://discuss.keras.io/",
        type: "community",
      },
    ],
  },

  // scikit-learn
  scikitlearn: {
    id: "scikitlearn",
    name: "scikit-learn",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/scikit_learn.png",
    category: "ai-ml",
    description:
      "scikit-learn is a free software machine learning library for the Python programming language. It features various classification, regression and clustering algorithms, and is designed to interoperate with the Python numerical and scientific libraries NumPy and SciPy.",
    features: [
      "Classification",
      "Regression",
      "Clustering",
      "Dimensionality reduction",
      "Model selection",
      "Preprocessing",
    ],
    advantages: ["Easy to use", "Versatile", "Well-documented", "Community support", "Python-first"],
    disadvantages: [
      "Limited deep learning support",
      "Debugging can be challenging",
      "Memory management",
      "Limited scalability",
    ],
    useCases: ["Classification", "Regression", "Clustering", "Dimensionality reduction", "Model selection"],
    exampleWebsites: [
      {
        name: "Yelp",
        url: "https://www.yelp.com",
        description: "Yelp uses scikit-learn for some of its services.",
      },
      {
        name: "Evernote",
        url: "https://www.evernote.com",
        description: "Evernote uses scikit-learn for some of its services.",
      },
      {
        name: "OkCupid",
        url: "https://www.okcupid.com",
        description: "OkCupid uses scikit-learn for some of its services.",
      },
    ],
    resources: [
      {
        name: "Official Documentation",
        url: "https://scikit-learn.org/stable/documentation.html",
        type: "documentation",
      },
      {
        name: "scikit-learn Tutorials",
        url: "https://scikit-learn.org/stable/tutorial/index.html",
        type: "tutorial",
      },
      {
        name: "scikit-learn Community",
        url: "https://scikit-learn.org/stable/support.html",
        type: "community",
      },
    ],
  },
  // Add these new technology entries to the techDataMap object at the end of the file

  // Ruby
  ruby: {
    id: "ruby",
    name: "Ruby",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ruby.png",
    category: "backend",
    description:
      "Ruby is a dynamic, open-source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.",
    features: [
      "Dynamic typing",
      "Object-oriented programming",
      "Garbage collection",
      "Metaprogramming capabilities",
      "Rich standard library",
      "Blocks and closures",
    ],
    advantages: [
      "Developer happiness and productivity",
      "Elegant and readable syntax",
      "Strong community and ecosystem",
      "Great for web development with Rails",
      "Excellent for scripting and automation",
    ],
    disadvantages: [
      "Performance can be slower than compiled languages",
      "Memory usage can be high",
      "Concurrency model limitations",
      "Less suitable for CPU-intensive applications",
    ],
    useCases: [
      "Web development with Ruby on Rails",
      "DevOps and automation",
      "Prototyping and MVPs",
      "Content management systems",
      "E-commerce platforms",
    ],
    exampleWebsites: [
      {
        name: "GitHub",
        url: "https://github.com",
        description: "GitHub was originally built with Ruby on Rails.",
      },
      {
        name: "Airbnb",
        url: "https://www.airbnb.com",
        description: "Airbnb's platform was initially built with Ruby on Rails.",
      },
      {
        name: "Shopify",
        url: "https://www.shopify.com",
        description: "Shopify's e-commerce platform is built with Ruby on Rails.",
      },
    ],
    resources: [
      {
        name: "Official Ruby Documentation",
        url: "https://www.ruby-lang.org/en/documentation/",
        type: "documentation",
      },
      {
        name: "Ruby on Rails Guides",
        url: "https://guides.rubyonrails.org/",
        type: "tutorial",
      },
      {
        name: "RubyGems",
        url: "https://rubygems.org/",
        type: "tool",
      },
    ],
  },

  // Go
  go: {
    id: "go",
    name: "Go",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/go.png",
    category: "backend",
    description:
      "Go (or Golang) is an open-source programming language designed at Google. It is statically typed, compiled, and syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency.",
    features: [
      "Static typing with type inference",
      "Garbage collection",
      "Built-in concurrency with goroutines",
      "Fast compilation",
      "Simple syntax",
      "Cross-platform support",
    ],
    advantages: [
      "Excellent performance",
      "Built for scalability",
      "Strong standard library",
      "Simplified dependency management",
      "Fast compilation times",
    ],
    disadvantages: [
      "Less expressive than some languages",
      "No generics (prior to Go 1.18)",
      "Limited metaprogramming capabilities",
      "Verbose error handling",
    ],
    useCases: [
      "Cloud and network services",
      "Web servers and APIs",
      "DevOps and site reliability tools",
      "Distributed systems",
      "Command-line applications",
    ],
    exampleWebsites: [
      {
        name: "Docker",
        url: "https://www.docker.com",
        description: "Docker is built with Go.",
      },
      {
        name: "Kubernetes",
        url: "https://kubernetes.io",
        description: "Kubernetes is written in Go.",
      },
      {
        name: "Cloudflare",
        url: "https://www.cloudflare.com",
        description: "Cloudflare uses Go for many of its services.",
      },
    ],
    resources: [
      {
        name: "Official Go Documentation",
        url: "https://golang.org/doc/",
        type: "documentation",
      },
      {
        name: "Go by Example",
        url: "https://gobyexample.com/",
        type: "tutorial",
      },
      {
        name: "Go Playground",
        url: "https://play.golang.org/",
        type: "tool",
      },
    ],
  },

  // Rust
  rust: {
    id: "rust",
    name: "Rust",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/rust.png",
    category: "backend",
    description:
      "Rust is a multi-paradigm, high-level, general-purpose programming language designed for performance and safety, especially safe concurrency. It enforces memory safety without using garbage collection.",
    features: [
      "Memory safety without garbage collection",
      "Concurrency without data races",
      "Zero-cost abstractions",
      "Pattern matching",
      "Type inference",
      "Minimal runtime",
    ],
    advantages: [
      "Memory safety guarantees",
      "Excellent performance",
      "Fearless concurrency",
      "Strong type system",
      "Growing ecosystem",
    ],
    disadvantages: [
      "Steep learning curve",
      "Longer compilation times",
      "Strict compiler",
      "Smaller ecosystem than more established languages",
    ],
    useCases: [
      "Systems programming",
      "WebAssembly applications",
      "Command-line tools",
      "Network services",
      "Embedded systems",
    ],
    exampleWebsites: [
      {
        name: "Discord",
        url: "https://discord.com",
        description: "Discord uses Rust for parts of its backend.",
      },
      {
        name: "Dropbox",
        url: "https://www.dropbox.com",
        description: "Dropbox uses Rust for performance-critical components.",
      },
      {
        name: "Cloudflare",
        url: "https://www.cloudflare.com",
        description: "Cloudflare uses Rust for performance-critical services.",
      },
    ],
    resources: [
      {
        name: "The Rust Programming Language Book",
        url: "https://doc.rust-lang.org/book/",
        type: "documentation",
      },
      {
        name: "Rust by Example",
        url: "https://doc.rust-lang.org/rust-by-example/",
        type: "tutorial",
      },
      {
        name: "Rust Playground",
        url: "https://play.rust-lang.org/",
        type: "tool",
      },
    ],
  },

  // GraphQL
  graphql: {
    id: "graphql",
    name: "GraphQL",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/graphql.png",
    category: "backend",
    description:
      "GraphQL is a query language for APIs and a runtime for executing those queries with your existing data. It provides a complete and understandable description of the data in your API and gives clients the power to ask for exactly what they need.",
    features: [
      "Hierarchical query structure",
      "Strong typing system",
      "Single endpoint",
      "Introspection",
      "Real-time updates with subscriptions",
      "Schema definition language",
    ],
    advantages: [
      "Reduced over-fetching and under-fetching",
      "Strongly typed schema",
      "Versioning without breaking changes",
      "Detailed error messages",
      "Excellent developer tools",
    ],
    disadvantages: [
      "Complexity for simple APIs",
      "Caching challenges",
      "Potential performance issues with nested queries",
      "Learning curve for teams familiar with REST",
    ],
    useCases: [
      "Mobile applications",
      "Complex web applications",
      "Microservices architecture",
      "APIs with multiple clients",
      "Real-time applications",
    ],
    exampleWebsites: [
      {
        name: "GitHub",
        url: "https://github.com",
        description: "GitHub's API v4 is built with GraphQL.",
      },
      {
        name: "Facebook",
        url: "https://www.facebook.com",
        description: "Facebook developed GraphQL and uses it extensively.",
      },
      {
        name: "Shopify",
        url: "https://www.shopify.com",
        description: "Shopify's Storefront API uses GraphQL.",
      },
    ],
    resources: [
      {
        name: "GraphQL Official Documentation",
        url: "https://graphql.org/learn/",
        type: "documentation",
      },
      {
        name: "How to GraphQL",
        url: "https://www.howtographql.com/",
        type: "tutorial",
      },
      {
        name: "GraphQL Playground",
        url: "https://github.com/graphql/graphql-playground",
        type: "tool",
      },
    ],
  },

  // Flutter
  flutter: {
    id: "flutter",
    name: "Flutter",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/flutter.png",
    category: "mobile",
    description:
      "Flutter is Google's UI toolkit for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase using the Dart programming language.",
    features: [
      "Hot reload for fast development",
      "Rich set of pre-designed widgets",
      "Native performance",
      "Custom painting and animations",
      "Internationalization support",
      "Accessibility features",
    ],
    advantages: [
      "Single codebase for multiple platforms",
      "Fast development cycle",
      "Beautiful and customizable UI",
      "Great performance",
      "Strong Google support",
    ],
    disadvantages: [
      "Larger app size",
      "Relatively young ecosystem",
      "Limited access to some native features",
      "Dart language learning curve",
    ],
    useCases: [
      "Cross-platform mobile apps",
      "Progressive web applications",
      "Desktop applications",
      "Material Design applications",
      "MVP development",
    ],
    exampleWebsites: [
      {
        name: "Google Ads",
        url: "https://ads.google.com",
        description: "Google Ads mobile app is built with Flutter.",
      },
      {
        name: "Alibaba",
        url: "https://www.alibaba.com",
        description: "Alibaba uses Flutter in some of its apps.",
      },
      {
        name: "eBay",
        url: "https://www.ebay.com",
        description: "eBay Motors app is built with Flutter.",
      },
    ],
    resources: [
      {
        name: "Flutter Documentation",
        url: "https://flutter.dev/docs",
        type: "documentation",
      },
      {
        name: "Flutter Codelabs",
        url: "https://flutter.dev/docs/codelabs",
        type: "tutorial",
      },
      {
        name: "Flutter DevTools",
        url: "https://flutter.dev/docs/development/tools/devtools",
        type: "tool",
      },
    ],
  },

  // Swift
  swift: {
    id: "swift",
    name: "Swift",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/swift.png",
    category: "mobile",
    description:
      "Swift is a powerful and intuitive programming language developed by Apple for iOS, macOS, watchOS, and tvOS app development. It's designed to be safe, fast, and expressive.",
    features: [
      "Type safety",
      "Automatic memory management",
      "Optionals for handling nil values",
      "Powerful error handling",
      "Protocol-oriented programming",
      "First-class functions",
    ],
    advantages: [
      "Modern and expressive syntax",
      "Performance close to C",
      "Strong typing prevents many bugs",
      "Interoperability with Objective-C",
      "Open source with growing community",
    ],
    disadvantages: [
      "Limited to Apple ecosystem (primarily)",
      "Frequent language changes",
      "Smaller community than some languages",
      "Limited server-side adoption",
    ],
    useCases: [
      "iOS applications",
      "macOS applications",
      "watchOS applications",
      "tvOS applications",
      "Server-side Swift applications",
    ],
    exampleWebsites: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        description: "LinkedIn's iOS app is built with Swift.",
      },
      {
        name: "Lyft",
        url: "https://www.lyft.com",
        description: "Lyft's iOS app is built with Swift.",
      },
      {
        name: "Airbnb",
        url: "https://www.airbnb.com",
        description: "Airbnb's iOS app uses Swift.",
      },
    ],
    resources: [
      {
        name: "Swift Documentation",
        url: "https://swift.org/documentation/",
        type: "documentation",
      },
      {
        name: "Apple Swift Resources",
        url: "https://developer.apple.com/swift/resources/",
        type: "tutorial",
      },
      {
        name: "Swift Playgrounds",
        url: "https://www.apple.com/swift/playgrounds/",
        type: "tool",
      },
    ],
  },

  // Kotlin
  kotlin: {
    id: "kotlin",
    name: "Kotlin",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/kotlin.png",
    category: "mobile",
    description:
      "Kotlin is a modern, statically typed programming language that runs on the Java Virtual Machine. It's officially supported by Google for Android development and combines object-oriented and functional programming features.",
    features: [
      "Null safety",
      "Extension functions",
      "Coroutines for asynchronous programming",
      "Data classes",
      "Smart casts",
      "Interoperability with Java",
    ],
    advantages: [
      "Concise and expressive syntax",
      "Improved safety over Java",
      "Full Java interoperability",
      "First-class support for Android",
      "Multiplatform capabilities",
    ],
    disadvantages: [
      "Compilation speed can be slower than Java",
      "Smaller community than Java",
      "Learning curve for Java developers",
      "Some advanced features can be complex",
    ],
    useCases: [
      "Android app development",
      "Server-side applications",
      "Web development with Kotlin/JS",
      "Cross-platform mobile development",
      "Data science with Kotlin",
    ],
    exampleWebsites: [
      {
        name: "Pinterest",
        url: "https://www.pinterest.com",
        description: "Pinterest's Android app is built with Kotlin.",
      },
      {
        name: "Trello",
        url: "https://trello.com",
        description: "Trello's Android app is built with Kotlin.",
      },
      {
        name: "Evernote",
        url: "https://evernote.com",
        description: "Evernote's Android app uses Kotlin.",
      },
    ],
    resources: [
      {
        name: "Kotlin Documentation",
        url: "https://kotlinlang.org/docs/home.html",
        type: "documentation",
      },
      {
        name: "Kotlin Koans",
        url: "https://play.kotlinlang.org/koans/",
        type: "tutorial",
      },
      {
        name: "Kotlin Playground",
        url: "https://play.kotlinlang.org/",
        type: "tool",
      },
    ],
  },

  // Android
  android: {
    id: "android",
    name: "Android",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/android.png",
    category: "mobile",
    description:
      "Android is a mobile operating system developed by Google, based on a modified version of the Linux kernel and other open source software, designed primarily for touchscreen mobile devices such as smartphones and tablets.",
    features: [
      "Open-source platform",
      "Rich UI framework",
      "Background processing",
      "SQLite database integration",
      "Inter-application communication",
      "Hardware access APIs",
    ],
    advantages: [
      "Large market share",
      "Open ecosystem",
      "Flexible customization",
      "Rich development tools",
      "Multiple device form factors",
    ],
    disadvantages: [
      "Device fragmentation",
      "Security concerns",
      "Varying performance across devices",
      "Complex testing requirements",
    ],
    useCases: [
      "Mobile applications",
      "Tablet applications",
      "TV applications",
      "Wearable applications",
      "IoT device interfaces",
    ],
    exampleWebsites: [
      {
        name: "Google Play",
        url: "https://play.google.com",
        description: "Google's app store for Android applications.",
      },
      {
        name: "WhatsApp",
        url: "https://www.whatsapp.com",
        description: "WhatsApp's Android app is one of the most popular messaging apps.",
      },
      {
        name: "Instagram",
        url: "https://www.instagram.com",
        description: "Instagram's Android app has millions of users worldwide.",
      },
    ],
    resources: [
      {
        name: "Android Developers",
        url: "https://developer.android.com/",
        type: "documentation",
      },
      {
        name: "Android Codelabs",
        url: "https://developer.android.com/codelabs",
        type: "tutorial",
      },
      {
        name: "Android Studio",
        url: "https://developer.android.com/studio",
        type: "tool",
      },
    ],
  },

  // iOS
  ios: {
    id: "ios",
    name: "iOS",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/ios.png",
    category: "mobile",
    description:
      "iOS is Apple's mobile operating system that runs on iPhone, iPad, and iPod Touch devices. It's known for its user-friendly interface, security features, and seamless integration with other Apple products.",
    features: [
      "Swift and Objective-C support",
      "UIKit and SwiftUI frameworks",
      "Core Data for persistence",
      "Push notifications",
      "App Store distribution",
      "Strong security model",
    ],
    advantages: [
      "High-quality user experience",
      "Strong security and privacy",
      "Consistent platform updates",
      "Excellent development tools",
      "Affluent user base",
    ],
    disadvantages: [
      "Closed ecosystem",
      "Strict App Store guidelines",
      "Development requires Mac hardware",
      "Higher development costs",
    ],
    useCases: [
      "iPhone applications",
      "iPad applications",
      "Enterprise mobile solutions",
      "Gaming applications",
      "Augmented reality experiences",
    ],
    exampleWebsites: [
      {
        name: "App Store",
        url: "https://www.apple.com/app-store/",
        description: "Apple's app store for iOS applications.",
      },
      {
        name: "Uber",
        url: "https://www.uber.com",
        description: "Uber's iOS app is used by millions of users.",
      },
      {
        name: "Spotify",
        url: "https://www.spotify.com",
        description: "Spotify's iOS app is one of the most popular music streaming apps.",
      },
    ],
    resources: [
      {
        name: "iOS Developer Documentation",
        url: "https://developer.apple.com/documentation/",
        type: "documentation",
      },
      {
        name: "Apple Developer Tutorials",
        url: "https://developer.apple.com/tutorials/",
        type: "tutorial",
      },
      {
        name: "Xcode",
        url: "https://developer.apple.com/xcode/",
        type: "tool",
      },
    ],
  },

  // Firebase
  firebase: {
    id: "firebase",
    name: "Firebase",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/firebase.png",
    category: "database",
    description:
      "Firebase is Google's platform that helps you quickly develop high-quality apps, grow your user base, and earn more money. It includes products for building, improving app quality, growing your business, and more.",
    features: [
      "Real-time database",
      "Authentication services",
      "Cloud storage",
      "Hosting services",
      "Cloud functions",
      "Analytics and crash reporting",
    ],
    advantages: [
      "Quick setup and integration",
      "Real-time data synchronization",
      "Scalable infrastructure",
      "Cross-platform support",
      "Comprehensive suite of tools",
    ],
    disadvantages: [
      "Limited query capabilities",
      "Potential vendor lock-in",
      "Pricing can be expensive at scale",
      "Limited offline capabilities",
    ],
    useCases: [
      "Mobile applications",
      "Web applications",
      "Real-time collaborative apps",
      "Serverless applications",
      "MVP development",
    ],
    exampleWebsites: [
      {
        name: "The New York Times",
        url: "https://www.nytimes.com",
        description: "The New York Times uses Firebase for some of its digital products.",
      },
      {
        name: "Duolingo",
        url: "https://www.duolingo.com",
        description: "Duolingo uses Firebase for its mobile app infrastructure.",
      },
      {
        name: "Venmo",
        url: "https://venmo.com",
        description: "Venmo uses Firebase for parts of its mobile application.",
      },
    ],
    resources: [
      {
        name: "Firebase Documentation",
        url: "https://firebase.google.com/docs",
        type: "documentation",
      },
      {
        name: "Firebase Codelabs",
        url: "https://firebase.google.com/codelabs",
        type: "tutorial",
      },
      {
        name: "Firebase Console",
        url: "https://console.firebase.google.com/",
        type: "tool",
      },
    ],
  },

  // Supabase
  supabase: {
    id: "supabase",
    name: "Supabase",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/supabase.png",
    category: "database",
    description:
      "Supabase is an open-source Firebase alternative providing all the backend features developers need to build a product: a Postgres database, authentication, instant APIs, edge functions, realtime subscriptions, and storage.",
    features: [
      "PostgreSQL database",
      "Authentication and authorization",
      "Auto-generated APIs",
      "Real-time subscriptions",
      "Storage for large files",
      "Edge functions",
    ],
    advantages: [
      "Open-source architecture",
      "SQL database with full capabilities",
      "PostgreSQL extensions support",
      "Self-hosting option",
      "Developer-friendly tools",
    ],
    disadvantages: [
      "Newer platform with evolving features",
      "Smaller community than Firebase",
      "Limited managed regions",
      "Some advanced features still in development",
    ],
    useCases: [
      "Web applications",
      "Mobile applications",
      "Real-time applications",
      "Data-heavy applications",
      "Open-source projects",
    ],
    exampleWebsites: [
      {
        name: "Vercel",
        url: "https://vercel.com",
        description: "Vercel integrates with Supabase for database functionality.",
      },
      {
        name: "Netlify",
        url: "https://www.netlify.com",
        description: "Netlify offers Supabase integration for its users.",
      },
      {
        name: "Deno",
        url: "https://deno.land",
        description: "Deno has examples and integrations with Supabase.",
      },
    ],
    resources: [
      {
        name: "Supabase Documentation",
        url: "https://supabase.com/docs",
        type: "documentation",
      },
      {
        name: "Supabase Tutorials",
        url: "https://supabase.com/docs/guides/getting-started",
        type: "tutorial",
      },
      {
        name: "Supabase Dashboard",
        url: "https://app.supabase.com/",
        type: "tool",
      },
    ],
  },

  // Elasticsearch
  elasticsearch: {
    id: "elasticsearch",
    name: "Elasticsearch",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/elasticsearch.png",
    category: "database",
    description:
      "Elasticsearch is a distributed, RESTful search and analytics engine capable of addressing a growing number of use cases. It centrally stores your data for lightning fast search, fine‑tuned relevancy, and powerful analytics.",
    features: [
      "Full-text search",
      "Distributed architecture",
      "RESTful API",
      "Analytics capabilities",
      "Schema-free JSON documents",
      "Real-time data and analytics",
    ],
    advantages: [
      "Fast search performance",
      "Scalability",
      "Flexibility with document structure",
      "Rich query language",
      "Comprehensive analytics",
    ],
    disadvantages: [
      "Resource intensive",
      "Learning curve for advanced features",
      "Eventual consistency model",
      "Complex cluster management",
    ],
    useCases: ["Site search", "Application search", "Enterprise search", "Log analytics", "Security analytics"],
    exampleWebsites: [
      {
        name: "Wikipedia",
        url: "https://www.wikipedia.org",
        description: "Wikipedia uses Elasticsearch for its search functionality.",
      },
      {
        name: "GitHub",
        url: "https://github.com",
        description: "GitHub uses Elasticsearch for code search.",
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
        description: "Stack Overflow uses Elasticsearch for its search capabilities.",
      },
    ],
    resources: [
      {
        name: "Elasticsearch Documentation",
        url: "https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html",
        type: "documentation",
      },
      {
        name: "Elastic Academy",
        url: "https://www.elastic.co/training/",
        type: "tutorial",
      },
      {
        name: "Kibana",
        url: "https://www.elastic.co/kibana/",
        type: "tool",
      },
    ],
  },

  // Oracle
  oracle: {
    id: "oracle",
    name: "Oracle",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/oracle.png",
    category: "database",
    description:
      "Oracle Database is a multi-model database management system produced and marketed by Oracle Corporation. It is one of the most trusted and widely-used relational database engines, offering a high level of security, scalability, and reliability.",
    features: [
      "Relational database management",
      "High availability",
      "Advanced security features",
      "Partitioning for large tables",
      "In-memory processing",
      "Automated management",
    ],
    advantages: [
      "Enterprise-grade reliability",
      "Robust security features",
      "Excellent performance for large datasets",
      "Comprehensive support options",
      "Advanced analytics capabilities",
    ],
    disadvantages: ["High licensing costs", "Complex administration", "Resource intensive", "Vendor lock-in concerns"],
    useCases: [
      "Enterprise applications",
      "Financial systems",
      "Customer relationship management",
      "Supply chain management",
      "Data warehousing",
    ],
    exampleWebsites: [
      {
        name: "Salesforce",
        url: "https://www.salesforce.com",
        description: "Salesforce uses Oracle databases for some of its services.",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        description: "LinkedIn has used Oracle databases for parts of its infrastructure.",
      },
      {
        name: "Bank of America",
        url: "https://www.bankofamerica.com",
        description: "Bank of America uses Oracle for its banking systems.",
      },
    ],
    resources: [
      {
        name: "Oracle Database Documentation",
        url: "https://docs.oracle.com/en/database/",
        type: "documentation",
      },
      {
        name: "Oracle Learning Library",
        url: "https://apexapps.oracle.com/pls/apex/f?p=44785:1",
        type: "tutorial",
      },
      {
        name: "Oracle SQL Developer",
        url: "https://www.oracle.com/database/technologies/appdev/sqldeveloper-landing.html",
        type: "tool",
      },
    ],
  },

  // Google Cloud Platform (GCP)
  gcp: {
    id: "gcp",
    name: "Google Cloud Platform",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gcp.png",
    category: "cloud",
    description:
      "Google Cloud Platform (GCP) is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, and YouTube.",
    features: [
      "Compute Engine (VMs)",
      "Cloud Storage",
      "BigQuery for analytics",
      "Kubernetes Engine",
      "Cloud Functions",
      "AI and machine learning tools",
    ],
    advantages: [
      "Strong data analytics capabilities",
      "Global network infrastructure",
      "Integrated AI and ML services",
      "Competitive pricing",
      "Strong security measures",
    ],
    disadvantages: [
      "Fewer global regions than some competitors",
      "Steeper learning curve for beginners",
      "Frequent service changes",
      "Complex pricing structure",
    ],
    useCases: [
      "Big data processing",
      "Machine learning applications",
      "Web and mobile applications",
      "Enterprise applications",
      "IoT solutions",
    ],
    exampleWebsites: [
      {
        name: "Spotify",
        url: "https://www.spotify.com",
        description: "Spotify uses Google Cloud Platform for its data processing.",
      },
      {
        name: "Snapchat",
        url: "https://www.snapchat.com",
        description: "Snapchat uses Google Cloud Platform for its infrastructure.",
      },
      {
        name: "Twitter",
        url: "https://twitter.com",
        description: "Twitter uses Google Cloud Platform for data processing.",
      },
    ],
    resources: [
      {
        name: "Google Cloud Documentation",
        url: "https://cloud.google.com/docs",
        type: "documentation",
      },
      {
        name: "Google Cloud Training",
        url: "https://cloud.google.com/training",
        type: "tutorial",
      },
      {
        name: "Google Cloud Console",
        url: "https://console.cloud.google.com/",
        type: "tool",
      },
    ],
  },

  // DigitalOcean
  digitalocean: {
    id: "digitalocean",
    name: "Digital Ocean",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/digital_ocean.png",
    category: "cloud",
    description:
      "DigitalOcean is a cloud infrastructure provider focused on simplifying web infrastructure for software developers. It offers virtual machines (Droplets), managed Kubernetes, managed databases, and more.",
    features: [
      "Virtual machines (Droplets)",
      "Managed Kubernetes",
      "Managed databases",
      "Object storage",
      "Load balancers",
      "Serverless functions",
    ],
    advantages: [
      "Simple and intuitive interface",
      "Predictable pricing",
      "Developer-friendly documentation",
      "Fast deployment",
      "Global data center coverage",
    ],
    disadvantages: [
      "Fewer services than larger cloud providers",
      "Limited enterprise support options",
      "Fewer compliance certifications",
      "Limited advanced features",
    ],
    useCases: [
      "Web application hosting",
      "Development and testing environments",
      "Small to medium business applications",
      "Content delivery",
      "DevOps workflows",
    ],
    exampleWebsites: [
      {
        name: "GitLab",
        url: "https://about.gitlab.com",
        description: "GitLab uses DigitalOcean for some of its infrastructure.",
      },
      {
        name: "Ghost",
        url: "https://ghost.org",
        description: "Ghost offers one-click installations on DigitalOcean.",
      },
      {
        name: "Discourse",
        url: "https://www.discourse.org",
        description: "Discourse can be easily deployed on DigitalOcean.",
      },
    ],
    resources: [
      {
        name: "DigitalOcean Documentation",
        url: "https://docs.digitalocean.com/",
        type: "documentation",
      },
      {
        name: "DigitalOcean Tutorials",
        url: "https://www.digitalocean.com/community/tutorials",
        type: "tutorial",
      },
      {
        name: "DigitalOcean Control Panel",
        url: "https://cloud.digitalocean.com/",
        type: "tool",
      },
    ],
  },

  // Terraform
  terraform: {
    id: "terraform",
    name: "Terraform",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/terraform.png",
    category: "cloud",
    description:
      "Terraform is an open-source infrastructure as code software tool created by HashiCorp. It enables users to define and provision data center infrastructure using a declarative configuration language.",
    features: [
      "Infrastructure as code",
      "Multi-cloud support",
      "Declarative configuration",
      "Resource graph",
      "Plan and apply workflow",
      "Provider ecosystem",
    ],
    advantages: [
      "Version-controlled infrastructure",
      "Consistent environments",
      "Automation capabilities",
      "Multi-provider support",
      "Community and ecosystem",
    ],
    disadvantages: [
      "Learning curve for complex deployments",
      "State management challenges",
      "Limited testing capabilities",
      "Debugging can be difficult",
    ],
    useCases: [
      "Cloud infrastructure provisioning",
      "Multi-cloud deployments",
      "Infrastructure version control",
      "Environment consistency",
      "DevOps automation",
    ],
    exampleWebsites: [
      {
        name: "GitHub",
        url: "https://github.com",
        description: "GitHub uses Terraform for infrastructure management.",
      },
      {
        name: "Uber",
        url: "https://www.uber.com",
        description: "Uber uses Terraform for cloud infrastructure.",
      },
      {
        name: "Slack",
        url: "https://slack.com",
        description: "Slack uses Terraform for infrastructure provisioning.",
      },
    ],
    resources: [
      {
        name: "Terraform Documentation",
        url: "https://www.terraform.io/docs",
        type: "documentation",
      },
      {
        name: "HashiCorp Learn",
        url: "https://learn.hashicorp.com/terraform",
        type: "tutorial",
      },
      {
        name: "Terraform Cloud",
        url: "https://app.terraform.io/",
        type: "tool",
      },
    ],
  },

  // Nginx
  nginx: {
    id: "nginx",
    name: "Nginx",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/nginx.png",
    category: "cloud",
    description:
      "Nginx (pronounced 'engine-x') is an open-source web server that can also be used as a reverse proxy, load balancer, mail proxy, and HTTP cache. It's known for its high performance, stability, rich feature set, and low resource consumption.",
    features: [
      "Web server capabilities",
      "Reverse proxy functionality",
      "Load balancing",
      "Caching",
      "SSL/TLS termination",
      "WebSocket support",
    ],
    advantages: [
      "High performance",
      "Low resource usage",
      "Scalability",
      "Reliability",
      "Active development and community",
    ],
    disadvantages: [
      "Configuration complexity",
      "Limited dynamic module support",
      "Some features require commercial version",
      "Steeper learning curve than Apache",
    ],
    useCases: [
      "Web server for static content",
      "Reverse proxy for application servers",
      "Load balancer for distributed systems",
      "API gateway",
      "Content caching",
    ],
    exampleWebsites: [
      {
        name: "Netflix",
        url: "https://www.netflix.com",
        description: "Netflix uses Nginx for content delivery.",
      },
      {
        name: "Dropbox",
        url: "https://www.dropbox.com",
        description: "Dropbox uses Nginx for its web infrastructure.",
      },
      {
        name: "WordPress.com",
        url: "https://wordpress.com",
        description: "WordPress.com uses Nginx for its web server needs.",
      },
    ],
    resources: [
      {
        name: "Nginx Documentation",
        url: "https://nginx.org/en/docs/",
        type: "documentation",
      },
      {
        name: "Nginx Blog",
        url: "https://www.nginx.com/blog/",
        type: "tutorial",
      },
      {
        name: "Nginx Amplify",
        url: "https://www.nginx.com/products/nginx-amplify/",
        type: "tool",
      },
    ],
  },

  // NumPy
  numpy: {
    id: "numpy",
    name: "NumPy",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/numpy.png",
    category: "ai-ml",
    description:
      "NumPy is a library for the Python programming language, adding support for large, multi-dimensional arrays and matrices, along with a large collection of high-level mathematical functions to operate on these arrays.",
    features: [
      "N-dimensional array objects",
      "Broadcasting functions",
      "Linear algebra operations",
      "Fourier transform capabilities",
      "Random number generation",
      "Integration with C/C++",
    ],
    advantages: [
      "High performance with vectorized operations",
      "Memory efficiency",
      "Comprehensive mathematical functions",
      "Integration with other scientific libraries",
      "Well-documented and maintained",
    ],
    disadvantages: [
      "Steep learning curve for beginners",
      "Limited to numerical data",
      "Memory constraints for very large datasets",
      "Single-threaded by default",
    ],
    useCases: ["Data analysis", "Machine learning", "Scientific computing", "Image processing", "Financial modeling"],
    exampleWebsites: [
      {
        name: "Spotify",
        url: "https://www.spotify.com",
        description: "Spotify uses NumPy for music recommendation algorithms.",
      },
      {
        name: "Netflix",
        url: "https://www.netflix.com",
        description: "Netflix uses NumPy for content recommendation systems.",
      },
      {
        name: "NASA",
        url: "https://www.nasa.gov",
        description: "NASA uses NumPy for scientific data analysis.",
      },
    ],
    resources: [
      {
        name: "NumPy Documentation",
        url: "https://numpy.org/doc/",
        type: "documentation",
      },
      {
        name: "NumPy Tutorials",
        url: "https://numpy.org/learn/",
        type: "tutorial",
      },
      {
        name: "NumPy GitHub",
        url: "https://github.com/numpy/numpy",
        type: "community",
      },
    ],
  },

  // Pandas
  pandas: {
    id: "pandas",
    name: "Pandas",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/pandas.png",
    category: "ai-ml",
    description:
      "Pandas is a fast, powerful, flexible and easy to use open source data analysis and manipulation tool, built on top of the Python programming language. It offers data structures and operations for manipulating numerical tables and time series.",
    features: [
      "DataFrame object for data manipulation",
      "Series object for one-dimensional data",
      "Data alignment and integrated handling of missing data",
      "Reshaping and pivoting of datasets",
      "Time series functionality",
      "Input/output tools for multiple formats",
    ],
    advantages: [
      "Intuitive data manipulation",
      "Efficient handling of large datasets",
      "Flexible data structures",
      "Comprehensive data analysis tools",
      "Strong integration with other libraries",
    ],
    disadvantages: [
      "Memory usage for large datasets",
      "Performance limitations for very large data",
      "Learning curve for advanced features",
      "Limited multi-threading capabilities",
    ],
    useCases: [
      "Data cleaning and preparation",
      "Data analysis and exploration",
      "Time series analysis",
      "Financial data analysis",
      "Machine learning preprocessing",
    ],
    exampleWebsites: [
      {
        name: "Instacart",
        url: "https://www.instacart.com",
        description: "Instacart uses Pandas for data analysis.",
      },
      {
        name: "J.P. Morgan",
        url: "https://www.jpmorgan.com",
        description: "J.P. Morgan uses Pandas for financial data analysis.",
      },
      {
        name: "Airbnb",
        url: "https://www.airbnb.com",
        description: "Airbnb uses Pandas for data processing and analysis.",
      },
    ],
    resources: [
      {
        name: "Pandas Documentation",
        url: "https://pandas.pydata.org/docs/",
        type: "documentation",
      },
      {
        name: "Pandas Tutorials",
        url: "https://pandas.pydata.org/docs/getting_started/index.html",
        type: "tutorial",
      },
      {
        name: "Pandas GitHub",
        url: "https://github.com/pandas-dev/pandas",
        type: "community",
      },
    ],
  },

  // Jupyter
  jupyter: {
    id: "jupyter",
    name: "Jupyter",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jupyter_notebook.png",
    category: "ai-ml",
    description:
      "Jupyter is an open-source web application that allows you to create and share documents that contain live code, equations, visualizations, and narrative text. It's widely used for data cleaning and transformation, numerical simulation, statistical modeling, data visualization, and machine learning.",
    features: [
      "Interactive code execution",
      "Rich media output",
      "Markdown support",
      "Multiple language kernels",
      "Notebook sharing",
      "Extension ecosystem",
    ],
    advantages: [
      "Interactive data exploration",
      "Literate programming approach",
      "Reproducible research",
      "Language agnostic",
      "Strong visualization capabilities",
    ],
    disadvantages: [
      "Version control challenges",
      "Performance limitations for large datasets",
      "Limited production deployment options",
      "Notebook structure can lead to poor code organization",
    ],
    useCases: [
      "Data analysis and exploration",
      "Machine learning prototyping",
      "Educational content",
      "Scientific research",
      "Data visualization",
    ],
    exampleWebsites: [
      {
        name: "Google Colab",
        url: "https://colab.research.google.com",
        description: "Google's Jupyter notebook environment in the cloud.",
      },
      {
        name: "Kaggle",
        url: "https://www.kaggle.com",
        description: "Kaggle uses Jupyter notebooks for data science competitions.",
      },
      {
        name: "IBM Watson Studio",
        url: "https://www.ibm.com/cloud/watson-studio",
        description: "IBM Watson Studio incorporates Jupyter notebooks.",
      },
    ],
    resources: [
      {
        name: "Jupyter Documentation",
        url: "https://jupyter.org/documentation",
        type: "documentation",
      },
      {
        name: "Jupyter Tutorials",
        url: "https://jupyter.org/try",
        type: "tutorial",
      },
      {
        name: "JupyterLab",
        url: "https://jupyterlab.readthedocs.io/",
        type: "tool",
      },
    ],
  },

  // MATLAB
  matlab: {
    id: "matlab",
    name: "MATLAB",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/matlab.png",
    category: "ai-ml",
    description:
      "MATLAB (Matrix Laboratory) is a programming and numeric computing platform used by engineers and scientists to analyze data, develop algorithms, and create models. It allows matrix manipulations, function plotting, algorithm implementation, user interface creation, and interfacing with programs in other languages.",
    features: [
      "Matrix-based language",
      "Extensive math function library",
      "Data visualization tools",
      "App development capabilities",
      "Toolboxes for specialized domains",
      "Integration with other languages",
    ],
    advantages: [
      "Powerful mathematical computation",
      "Comprehensive visualization capabilities",
      "Domain-specific toolboxes",
      "Strong industry adoption",
      "Excellent documentation and support",
    ],
    disadvantages: [
      "Expensive licensing",
      "Proprietary software",
      "Performance limitations for certain tasks",
      "Steeper learning curve for programming concepts",
    ],
    useCases: [
      "Signal processing",
      "Image and video processing",
      "Control systems",
      "Computational finance",
      "Computational biology",
    ],
    exampleWebsites: [
      {
        name: "MathWorks",
        url: "https://www.mathworks.com",
        description: "The company that develops and sells MATLAB.",
      },
      {
        name: "NASA",
        url: "https://www.nasa.gov",
        description: "NASA uses MATLAB for various scientific computing tasks.",
      },
      {
        name: "Tesla",
        url: "https://www.tesla.com",
        description: "Tesla uses MATLAB for automotive engineering applications.",
      },
    ],
    resources: [
      {
        name: "MATLAB Documentation",
        url: "https://www.mathworks.com/help/matlab/",
        type: "documentation",
      },
      {
        name: "MATLAB Academy",
        url: "https://matlabacademy.mathworks.com/",
        type: "tutorial",
      },
      {
        name: "MATLAB Central",
        url: "https://www.mathworks.com/matlabcentral/",
        type: "community",
      },
    ],
  },

  // Apache Spark
  spark: {
    id: "spark",
    name: "Apache Spark",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/apache_spark.png",
    category: "ai-ml",
    description:
      "Apache Spark is an open-source unified analytics engine for large-scale data processing. It provides an interface for programming entire clusters with implicit data parallelism and fault tolerance.",
    features: [
      "In-memory processing",
      "Real-time stream processing",
      "SQL and DataFrames",
      "Machine learning library (MLlib)",
      "Graph processing (GraphX)",
      "Multiple language APIs",
    ],
    advantages: [
      "Speed (up to 100x faster than Hadoop MapReduce)",
      "Ease of use with high-level APIs",
      "Versatility for various data tasks",
      "Integration with many data sources",
      "Active community and development",
    ],
    disadvantages: [
      "Memory consumption",
      "Small file problem",
      "Expensive for small datasets",
      "Steep learning curve for optimization",
    ],
    useCases: [
      "Big data processing",
      "Real-time analytics",
      "Machine learning at scale",
      "Data integration",
      "Interactive data analysis",
    ],
    exampleWebsites: [
      {
        name: "Netflix",
        url: "https://www.netflix.com",
        description: "Netflix uses Spark for real-time stream processing.",
      },
      {
        name: "Uber",
        url: "https://www.uber.com",
        description: "Uber uses Spark for real-time analytics.",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com",
        description: "LinkedIn uses Spark for data processing and analytics.",
      },
    ],
    resources: [
      {
        name: "Apache Spark Documentation",
        url: "https://spark.apache.org/docs/latest/",
        type: "documentation",
      },
      {
        name: "Spark Tutorials",
        url: "https://spark.apache.org/examples.html",
        type: "tutorial",
      },
      {
        name: "Databricks Community Edition",
        url: "https://community.cloud.databricks.com/",
        type: "tool",
      },
    ],
  },

  // Databricks
  databricks: {
    id: "databricks",
    name: "Databricks",
    logo: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/databricks.png",
    category: "ai-ml",
    description:
      "Databricks is a unified data analytics platform that accelerates innovation by unifying data science, engineering, and business. It was founded by the creators of Apache Spark and provides a cloud-based platform for processing big data and implementing machine learning.",
    features: [
      "Collaborative notebooks",
      "Integrated workflows",
      "Automated cluster management",
      "Delta Lake integration",
      "MLflow for ML lifecycle",
      "SQL analytics",
    ],
    advantages: [
      "Simplified big data processing",
      "Collaborative environment",
      "Optimized Spark performance",
      "Integrated ML lifecycle",
      "Enterprise security features",
    ],
    disadvantages: [
      "Cost can be high for large deployments",
      "Vendor lock-in concerns",
      "Learning curve for new users",
      "Limited customization compared to raw Spark",
    ],
    useCases: [
      "Data engineering",
      "Data science and ML",
      "Business analytics",
      "Real-time analytics",
      "Data lake management",
    ],
    exampleWebsites: [
      {
        name: "Comcast",
        url: "https://www.comcast.com",
        description: "Comcast uses Databricks for data analytics.",
      },
      {
        name: "Shell",
        url: "https://www.shell.com",
        description: "Shell uses Databricks for big data processing.",
      },
      {
        name: "HSBC",
        url: "https://www.hsbc.com",
        description: "HSBC uses Databricks for financial analytics.",
      },
    ],
    resources: [
      {
        name: "Databricks Documentation",
        url: "https://docs.databricks.com/",
        type: "documentation",
      },
      {
        name: "Databricks Academy",
        url: "https://academy.databricks.com/",
        type: "tutorial",
      },
      {
        name: "Databricks Community",
        url: "https://community.databricks.com/",
        type: "community",
      },
    ],
  },
}

// Helper function to get technology data by ID
export function getTechDataById(id: string): TechData | undefined {
  return techDataMap[id]
}

// Helper function to get all technologies by category
export function getTechDataByCategory(category: string): TechData[] {
  return Object.values(techDataMap).filter((tech) => tech.category === category)
}

// Helper function to get all technology IDs
export function getAllTechIds(): string[] {
  return Object.keys(techDataMap)
}

// Make sure all functions are properly exported at the end of the file

// Also ensure the techDataMap is properly exported
