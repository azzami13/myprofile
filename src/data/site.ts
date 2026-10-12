export const site = {
  name: "Muhammad Azzam Izzuddin",
  shortName: "Azzam",
  headline: "Informatics Engineering Graduate | Software Developer | System Analyst | Software QA",
  title: "Lulusan D3 Teknik Informatika · Software Developer · System Analyst · Software QA",
  tagline: "Lulusan D3 Teknik Informatika Politeknik Negeri Bandung. Terbiasa membangun aplikasi web, mobile, dan WebGIS dari tahap analisis kebutuhan, pengembangan fitur, hingga penjaminan mutu.",
  location: "Cimahi, Jawa Barat, Indonesia",
  phone: "0813-1329-0722",
  whatsapp: "6281313290722",
  email: "azzamizzuddin.13@gmail.com",
  github: "https://github.com/azzami13",
  linkedin: "https://www.linkedin.com/in/azzamizzuddin", // URL profil LinkedIn
  instagram: "https://instagram.com/mazzazu",
  resumeFile: "/files/resume-azzam.pdf",
  portfolioFile: "/files/Portofolio_Azzam.pdf",
  nav: [
    { label: "Profil", href: "#profile" },
    { label: "Pendidikan", href: "#education" },
    { label: "Keahlian", href: "#skills" },
    { label: "Pengalaman", href: "#experience" },
    { label: "Proyek", href: "#projects" },
    { label: "Kontak", href: "#contact" }
  ],
  about: [
    "Saya adalah lulusan D3 Teknik Informatika Politeknik Negeri Bandung yang berfokus pada software engineering, analisis sistem, dan penjaminan kualitas aplikasi.",
    "Memiliki pengalaman membangun aplikasi web, mobile, dan WebGIS melalui proyek akademik, kolaborasi proyek klien nyata, serta program magang industri. Terbiasa menerjemahkan kebutuhan bisnis menjadi spesifikasi sistem (SRS, UML, BPMN), implementasi antarmuka & backend terintegrasi, hingga pengujian dan dokumentasi teknis."
  ],
  highlights: [
    "Analisis kebutuhan bisnis, penyusunan SRS, diagram BPMN, UML, ERD, serta arsitektur basis data relasional.",
    "Pengembangan full-stack web menggunakan Next.js, React, Tailwind CSS, Django, NestJS, Laravel, REST API, GraphQL, dan WebSocket.",
    "Pengembangan aplikasi mobile berbasis Android dengan Kotlin, Jetpack Compose, Room Database, dan arsitektur MVVM.",
    "Pengolahan data spasial dan WebGIS menggunakan Leaflet, PostGIS, QGIS, OSM/GeoJSON, serta konsep optimasi rute OSRM & Dijkstra.",
    "Software Quality Assurance dengan sertifikasi Junior QA Software: penyusunan test case, pengujian fungsionalitas, identifikasi defect, dan dokumentasi mutu perangkat lunak.",
    "Kontrol versi dan kolaborasi tim profesional menggunakan Git/GitHub, Figma UI/UX, dan penyusunan laporan teknis terstandar."
  ],
  education: [
    {
      institution: "Politeknik Negeri Bandung (Polban)",
      program: "D3 Teknik Informatika",
      status: "Fresh Graduate",
      year: "2022 - 2025",
      finalProject: {
        title: "Cimitage Tourism",
        description: "Pengembangan sistem WebGIS interaktif pemetaan cagar budaya dan optimasi rute operasional wisata Sakoci di Kota Cimahi menggunakan Next.js, NestJS, PostgreSQL, PostGIS, Leaflet, dan algoritma Dijkstra."
      },
      notes: "Fokus keilmuan pada Software Engineering, Analisis Sistem, Basis Data Spasial, dan Software Quality Assurance."
    }
  ],
  skillCategories: [
    {
      group: "Software Development",
      description: "Pengembangan antarmuka modern, backend service, dan aplikasi mobile.",
      subgroups: [
        { name: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "TypeScript", "HTML5", "CSS3", "Responsive UI"] },
        { name: "Backend & Services", items: ["Django", "NestJS", "Laravel", "Node.js"] },
        { name: "API & Komunikasi Data", items: ["RESTful API", "GraphQL", "WebSocket", "TypeORM"] },
        { name: "Mobile Development", items: ["Kotlin", "Jetpack Compose", "Android Studio"] }
      ]
    },
    {
      group: "Database & WebGIS",
      description: "Manajemen data relasional, pemetaan spasial, dan algoritma rute graf.",
      subgroups: [
        { name: "Database & ORM", items: ["PostgreSQL", "PostGIS", "Room Database", "MySQL"] },
        { name: "Geospatial & WebGIS", items: ["QGIS", "Leaflet.js", "OpenStreetMap (OSM)", "GeoJSON"] },
        { name: "Optimasi Jalur", items: ["OSRM (Open Source Routing Machine)", "Algoritma Dijkstra", "Graph Distance Matrix"] }
      ]
    },
    {
      group: "System Analysis",
      description: "Analisis kebutuhan sistem, pemodelan alur proses, dan dokumentasi arsitektur.",
      subgroups: [
        { name: "Analisis & Dokumen Kebutuhan", items: ["Software Requirements Specification (SRS)", "Analisis Kebutuhan Pengguna & Fungsional", "Use Case Specification"] },
        { name: "Pemodelan Sistem & Data", items: ["BPMN (Business Process)", "UML (Class, Sequence, Activity)", "ERD (Entity Relationship)", "PowerDesigner"] }
      ]
    },
    {
      group: "Software Quality Assurance",
      description: "Penjaminan mutu, metodologi pengujian fungsionalitas, dan sertifikasi profesi.",
      subgroups: [
        { name: "Pengujian Perangkat Lunak", items: ["Dasar Pengujian Software", "Penyusunan Test Case & Test Scenario", "Identifikasi & Pelaporan Defect", "Dokumentasi Pengujian Mutu"] },
        { name: "Sertifikasi", items: ["Sertifikasi Junior QA Software"] }
      ]
    },
    {
      group: "Tools & Collaboration",
      description: "Alat bantu kerja, kontrol versi tim, dan desain antarmuka.",
      subgroups: [
        { name: "Alat Kerja & Kolaborasi", items: ["Git & GitHub", "Figma (UI/UX Design)", "Postman", "VS Code", "Dokumentasi Proyek Teknis"] }
      ]
    }
  ],
  experience: [
    {
      role: "Magang Software Engineering",
      company: "PT Labtech Inovasi Indonesia",
      location: "Bandung, Jawa Barat",
      period: "2025",
      type: "Magang Industri",
      stack: ["Django", "GraphQL", "Next.js", "PostgreSQL", "WebSocket", "Web Scraping", "SRS Documentation"],
      points: [
        "Menganalisis kebutuhan proses bisnis serta menyusun dokumen Software Requirements Specification (SRS) untuk memetakan ruang lingkup, modul produk, manajemen layanan, aktor, dan alur transaksi.",
        "Mengembangkan layanan backend dan GraphQL API menggunakan Django dan PostgreSQL untuk penanganan modul katalog produk, transaksi, dan autentikasi pengguna.",
        "Membangun antarmuka frontend interaktif dan responsif menggunakan Next.js, terintegrasi dengan pemanggilan GraphQL API.",
        "Menerapkan mekanisme komunikasi real-time menggunakan WebSocket untuk pelacakan pembaruan status pemesanan dan progres layanan secara langsung.",
        "Menyusun dan mengimplementasikan alur web scraping terstruktur untuk pengumpulan dan komparasi data referensi harga pasar.",
        "Mendukung aktivitas software testing fungsionalitas, deployment sistem, serta penyusunan dokumentasi teknis implementasi."
      ]
    }
  ]
};
