export const site = {
  name: "Muhammad Azzam Izzuddin",
  shortName: "Azzam",
  title: "Software Engineering Student | Full-Stack Developer | System Analyst",
  tagline: "Building practical web, mobile, and WebGIS software solutions.",
  location: "Cimahi, West Java, Indonesia",
  phone: "0813-1329-0722",
  whatsapp: "6281313290722",
  email: "azzamizzuddin.13@gmail.com",
  github: "https://github.com/azzami13",
  linkedin: "#",
  instagram: "https://instagram.com/mazzazu",
  resumeFile: "/files/resume-azzam.pdf",
  nav: [
    { label: "Profile", href: "#profile" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ],
  about: [
    "I am an Informatics Engineering student at Politeknik Negeri Bandung with hands-on experience in full-stack development, mobile development, WebGIS, and system analysis.",
    "My work focuses on translating real user problems into documented requirements, clear system design, maintainable code, and usable product flows."
  ],
  highlights: [
    "Requirements analysis, SRS, BPMN, UML, ERD, and system workflow documentation.",
    "Frontend and backend development using Next.js, Django, NestJS, Laravel, GraphQL, REST API, WebSocket, and PostgreSQL.",
    "WebGIS and route optimization concepts using Leaflet, PostGIS, QGIS, OSM/GeoJSON, OSRM, and Dijkstra.",
    "Version control, documentation, and implementation workflows using GitHub, Figma, and structured project reports."
  ],
  skills: [
    {
      group: "Frontend",
      items: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS", "Responsive UI"]
    },
    {
      group: "Backend & API",
      items: ["Django", "NestJS", "Laravel", "GraphQL", "REST API", "WebSocket", "TypeORM"]
    },
    {
      group: "Database & GIS",
      items: ["PostgreSQL", "PostGIS", "Room", "QGIS", "OSM/GeoJSON", "ERD", "PowerDesigner"]
    },
    {
      group: "Mobile & Tools",
      items: ["Kotlin", "Jetpack Compose", "Android Studio", "Figma", "Git/GitHub", "Project Documentation"]
    },
    {
      group: "Analysis & Soft Skills",
      items: ["SRS", "BPMN", "UML", "Use Case", "Testing", "Problem Solving", "Teamwork", "Communication"]
    }
  ],
  experience: [
    {
      role: "Software Engineering Intern",
      company: "PT Labtech Inovasi Indonesia",
      location: "Bandung",
      period: "2025",
      stack: ["Django", "GraphQL", "Next.js", "PostgreSQL", "WebSocket", "Web Scraping"],
      points: [
        "Analyzed business requirements and produced SRS documentation to define scope, features, actors, and system workflows for a marketplace and service platform.",
        "Developed backend services and GraphQL APIs using Django and PostgreSQL to support product, service, transaction, and user-management modules.",
        "Built responsive frontend interfaces using Next.js and supported real-time service tracking/status updates with WebSocket.",
        "Created web scraping workflows to collect market pricing data and supported testing, deployment, and technical documentation."
      ]
    }
  ],
  projects: [
    {
      number: "01",
      title: "Cimitage Tourism",
      subtitle: "WebGIS Aset Cagar Budaya dan Optimasi Rute Sakoci",
      category: "WebGIS / Final Project",
      role: "Full-stack, GIS, Analysis, Deploy",
      image: "/images/cimitage-map.png",
      imageLabel: "Screenshot interactive WebGIS map with heritage markers",
      overview:
        "A WebGIS-based tourism system designed to support cultural heritage asset information and Sakoci tourism operations in Cimahi.",
      outcome:
        "Helps centralize cultural heritage data, reduce manual route decision-making, and support tourism operations through a data-driven WebGIS platform.",
      stack: ["Next.js", "NestJS", "PostgreSQL", "PostGIS", "Leaflet", "QGIS", "OSM", "OSRM", "Dijkstra"],
      contributions: [
        "Prepared spatial data from OSM/QGIS for Cimahi road network and heritage destinations.",
        "Designed interactive map features for search, filter, and heritage asset display.",
        "Designed booking and tour package flows for regular/private Sakoci trips.",
        "Implemented route optimization concept using graph-based shortest path logic and distance matrix.",
        "Prepared admin/operator workflows for monitoring, data management, and trip handling."
      ],
      gallery: [
        { src: "/images/cimitage-route.png", label: "Route optimization / recommended Sakoci route" },
        { src: "/images/cimitage-dashboard.png", label: "Booking or admin dashboard" }
      ]
    },
    {
      number: "02",
      title: "TukangKomputer Website",
      subtitle: "Marketplace and Service Platform",
      category: "Internship Project",
      role: "Full-stack Developer",
      image: "/images/tukangkomputer-home.png",
      imageLabel: "Screenshot marketplace homepage or product listing",
      overview:
        "A marketplace and service platform for computer-related products and services, including customer flows, service modules, user management, pricing data, and real-time status updates.",
      outcome:
        "Provides a more organized digital workflow for computer product/service discovery, order management, and service tracking.",
      stack: ["Django", "GraphQL", "Next.js", "PostgreSQL", "WebSocket", "Web Scraping"],
      contributions: [
        "Documented feature scope and business workflow through SRS.",
        "Developed backend services and API logic for marketplace/service flows.",
        "Built responsive frontend screens and integrated API calls.",
        "Implemented real-time status updates using WebSocket.",
        "Collected market pricing data through scraping workflows."
      ],
      gallery: [
        { src: "/images/tukangkomputer-tracking.png", label: "Service order or tracking page" },
        { src: "/images/tukangkomputer-admin.png", label: "Admin dashboard or SRS diagram" }
      ]
    },
    {
      number: "03",
      title: "Kalium Mobile Application",
      subtitle: "Health Monitoring System",
      category: "Mobile App",
      role: "Mobile Developer & UI Designer",
      image: "/images/kalium-dashboard.png",
      imageLabel: "Screenshot Kalium dashboard screen",
      overview:
        "A mobile health monitoring application designed to help users manage daily food intake, calorie needs, water consumption, exercise activity, and healthy lifestyle recommendations.",
      outcome:
        "Supports users in building healthier habits using data-based tracking and simple mobile interaction.",
      stack: ["Kotlin", "Jetpack Compose", "Android Studio", "Room", "PostgreSQL", "Nutrition API", "Figma"],
      contributions: [
        "Designed clean mobile UI/UX for health tracking features.",
        "Implemented food intake logging and nutrition-related data flow.",
        "Built calorie calculation and activity tracking concepts.",
        "Designed water reminder and user profile features.",
        "Used local database concepts with Room and online PostgreSQL/API synchronization."
      ],
      gallery: [
        { src: "/images/kalium-food.png", label: "Food intake or nutrition detail screen" },
        { src: "/images/kalium-water.png", label: "Water reminder or profile screen" }
      ]
    },
    {
      number: "04",
      title: "SIKAHIM",
      subtitle: "Mosque Activity Management System",
      category: "Web & Database System",
      role: "Frontend, Database, Feature Developer",
      image: "/images/sikahim-home.png",
      imageLabel: "Screenshot SIKAHIM homepage or event list",
      overview:
        "A mosque activity management system for managing events, participant registration, evaluations, and automated notifications for DKM operations.",
      outcome:
        "Improves DKM event management through centralized scheduling, participant registration, evaluation, and notification features.",
      stack: ["Laravel", "PHP", "PostgreSQL", "Tailwind CSS", "SQL Function", "Trigger", "Procedure", "Figma"],
      contributions: [
        "Developed event management and online registration flows.",
        "Created CRUD pages for activities, users, evaluations, and notifications.",
        "Implemented authentication and user profile flows.",
        "Designed relational database functions, triggers, procedures, and views.",
        "Documented and tested system behavior with the team."
      ],
      gallery: [
        { src: "/images/sikahim-detail.png", label: "Activity detail or registration feature" },
        { src: "/images/sikahim-erd.png", label: "Evaluation/admin page or ERD" }
      ]
    }
  ]
};
