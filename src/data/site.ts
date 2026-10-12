export const site = {
  name: "Muhammad Azzam Izzuddin", shortName: "Azzam",
  title: "Mahasiswa Rekayasa Perangkat Lunak · Full-stack Developer · System Analyst",
  tagline: "Saya mengembangkan aplikasi web, mobile, dan WebGIS untuk kebutuhan yang jelas.",
  location: "Cimahi, Jawa Barat, Indonesia", phone: "0813-1329-0722", whatsapp: "6281313290722",
  email: "azzamizzuddin.13@gmail.com", github: "https://github.com/azzami13", linkedin: "#",
  instagram: "https://instagram.com/mazzazu", resumeFile: "/files/resume-azzam.pdf",
  nav: [
    { label: "Profil", href: "#profile" }, { label: "Keahlian", href: "#skills" }, { label: "Pengalaman", href: "#experience" }, { label: "Proyek", href: "#projects" }, { label: "Kontak", href: "#contact" }
  ],
  about: [
    "Saya adalah mahasiswa Teknik Informatika di Politeknik Negeri Bandung. Pengalaman saya mencakup pengembangan full-stack, aplikasi mobile, WebGIS, dan analisis sistem.",
    "Saya terbiasa menerjemahkan kebutuhan pengguna menjadi dokumen kebutuhan, rancangan sistem, kode yang mudah dipelihara, dan alur produk yang dapat digunakan."
  ],
  highlights: [
    "Analisis kebutuhan, SRS, BPMN, UML, ERD, dan dokumentasi alur sistem.",
    "Pengembangan frontend dan backend dengan Next.js, Django, NestJS, Laravel, GraphQL, REST API, WebSocket, dan PostgreSQL.",
    "WebGIS serta konsep optimasi rute dengan Leaflet, PostGIS, QGIS, OSM/GeoJSON, OSRM, dan Dijkstra.",
    "Kontrol versi, dokumentasi, dan alur implementasi menggunakan GitHub, Figma, serta laporan proyek terstruktur."
  ],
  skills: [
    { group: "Frontend", items: ["Next.js", "React", "Tailwind CSS", "HTML", "CSS", "Responsive UI"] },
    { group: "Backend & API", items: ["Django", "NestJS", "Laravel", "GraphQL", "REST API", "WebSocket", "TypeORM"] },
    { group: "Database & GIS", items: ["PostgreSQL", "PostGIS", "Room", "QGIS", "OSM/GeoJSON", "ERD", "PowerDesigner"] },
    { group: "Mobile & Tools", items: ["Kotlin", "Jetpack Compose", "Android Studio", "Figma", "Git/GitHub", "Project Documentation"] },
    { group: "Analysis & Soft Skills", items: ["SRS", "BPMN", "UML", "Use Case", "Testing", "Problem Solving", "Teamwork", "Communication"] }
  ],
  experience: [{
    role: "Magang Rekayasa Perangkat Lunak", company: "PT Labtech Inovasi Indonesia", location: "Bandung", period: "2025", stack: ["Django", "GraphQL", "Next.js", "PostgreSQL", "WebSocket", "Web Scraping"],
    points: [
      "Menganalisis kebutuhan bisnis dan menyusun SRS untuk menentukan ruang lingkup, fitur, aktor, serta alur sistem marketplace dan layanan.",
      "Mengembangkan layanan backend dan GraphQL API dengan Django dan PostgreSQL untuk modul produk, layanan, transaksi, dan manajemen pengguna.",
      "Membangun antarmuka responsif dengan Next.js serta mendukung pelacakan layanan dan pembaruan status real-time melalui WebSocket.",
      "Menyusun alur web scraping untuk mengumpulkan data harga pasar, serta mendukung pengujian, deployment, dan dokumentasi teknis."
    ]
  }],
  projects: [
    {
      number: "01", title: "Cimitage Tourism", subtitle: "WebGIS aset cagar budaya dan optimasi rute Sakoci", category: "WebGIS / Tugas Akhir", role: "Full-stack, GIS, analisis, dan deployment", image: "/images/cimitage-map.png", imageLabel: "Peta WebGIS interaktif dengan penanda cagar budaya",
      overview: "Sistem wisata berbasis WebGIS untuk menyajikan informasi aset cagar budaya dan mendukung operasional wisata Sakoci di Cimahi.", outcome: "Memusatkan data cagar budaya serta mendukung penentuan rute dan operasional wisata Sakoci melalui WebGIS.", stack: ["Next.js", "NestJS", "PostgreSQL", "PostGIS", "Leaflet", "QGIS", "OSM", "OSRM", "Dijkstra"],
      contributions: ["Menyiapkan data spasial dari OSM/QGIS untuk jaringan jalan dan tujuan cagar budaya di Cimahi.", "Merancang fitur peta interaktif untuk pencarian, filter, dan tampilan aset cagar budaya.", "Merancang alur pemesanan dan paket wisata Sakoci reguler maupun privat.", "Menerapkan konsep optimasi rute dengan logika jalur terpendek berbasis graf dan matriks jarak.", "Menyiapkan alur admin dan operator untuk pemantauan, pengelolaan data, serta penanganan perjalanan."],
      gallery: [{ src: "/images/cimitage-route.png", label: "Optimasi rute atau rekomendasi rute Sakoci" }, { src: "/images/cimitage-dashboard.png", label: "Dasbor pemesanan atau admin" }]
    },
    {
      number: "02", title: "TukangKomputer Website", subtitle: "Platform marketplace dan layanan komputer", category: "Proyek magang", role: "Full-stack developer", image: "/images/tukangkomputer-home.png", imageLabel: "Beranda marketplace atau daftar produk",
      overview: "Platform marketplace dan layanan produk komputer yang mencakup alur pelanggan, modul layanan, manajemen pengguna, data harga, dan pembaruan status real-time.", outcome: "Merapikan alur pencarian produk atau layanan, pengelolaan pesanan, dan pelacakan layanan secara digital.", stack: ["Django", "GraphQL", "Next.js", "PostgreSQL", "WebSocket", "Web Scraping"],
      contributions: ["Mendokumentasikan ruang lingkup fitur dan alur bisnis melalui SRS.", "Mengembangkan layanan backend dan logika API untuk alur marketplace serta layanan.", "Membangun halaman frontend responsif dan mengintegrasikan pemanggilan API.", "Menerapkan pembaruan status real-time dengan WebSocket.", "Mengumpulkan data harga pasar melalui alur scraping."],
      gallery: [{ src: "/images/tukangkomputer-tracking.png", label: "Halaman pesanan atau pelacakan layanan" }, { src: "/images/tukangkomputer-admin.png", label: "Dasbor admin atau diagram SRS" }]
    },
    {
      number: "03", title: "Kalium Mobile Application", subtitle: "Aplikasi pencatatan kesehatan", category: "Aplikasi mobile", role: "Mobile developer dan UI designer", image: "/images/kalium-dashboard.png", imageLabel: "Tampilan dasbor Kalium",
      overview: "Aplikasi mobile untuk mencatat asupan makanan harian, kebutuhan kalori, konsumsi air, aktivitas olahraga, dan rekomendasi gaya hidup sehat.", outcome: "Menyediakan pencatatan berbasis data untuk asupan makanan, air, dan aktivitas dalam satu aplikasi mobile.", stack: ["Kotlin", "Jetpack Compose", "Android Studio", "Room", "PostgreSQL", "Nutrition API", "Figma"],
      contributions: ["Merancang UI/UX mobile untuk fitur pencatatan kesehatan.", "Menerapkan pencatatan asupan makanan dan alur data nutrisi.", "Membangun konsep perhitungan kalori serta pelacakan aktivitas.", "Merancang fitur pengingat minum dan profil pengguna.", "Menggunakan konsep basis data lokal dengan Room serta sinkronisasi PostgreSQL/API daring."],
      gallery: [{ src: "/images/kalium-food.png", label: "Layar asupan makanan atau detail nutrisi" }, { src: "/images/kalium-water.png", label: "Layar pengingat minum atau profil" }]
    },
    {
      number: "04", title: "SIKAHIM", subtitle: "Sistem manajemen kegiatan masjid", category: "Sistem web dan basis data", role: "Frontend, basis data, dan pengembangan fitur", image: "/images/sikahim-home.png", imageLabel: "Beranda SIKAHIM atau daftar kegiatan",
      overview: "Sistem manajemen kegiatan masjid untuk mengelola acara, pendaftaran peserta, evaluasi, dan notifikasi otomatis bagi operasional DKM.", outcome: "Memusatkan jadwal kegiatan, pendaftaran peserta, evaluasi, dan notifikasi untuk kebutuhan DKM.", stack: ["Laravel", "PHP", "PostgreSQL", "Tailwind CSS", "SQL Function", "Trigger", "Procedure", "Figma"],
      contributions: ["Mengembangkan alur pengelolaan kegiatan dan pendaftaran daring.", "Membuat halaman CRUD untuk kegiatan, pengguna, evaluasi, dan notifikasi.", "Menerapkan autentikasi serta alur profil pengguna.", "Merancang fungsi, trigger, prosedur, dan view pada basis data relasional.", "Mendokumentasikan dan menguji perilaku sistem bersama tim."],
      gallery: [{ src: "/images/sikahim-detail.png", label: "Detail kegiatan atau fitur pendaftaran" }, { src: "/images/sikahim-erd.png", label: "Halaman evaluasi/admin atau ERD" }]
    }
  ]
};
