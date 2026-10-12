export type ProjectLink = {
  label: string;
  href: string;
  kind: "demo" | "prototype" | "repo" | "doc";
};

export type ProjectItem = {
  number: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "WebGIS / Tugas Akhir" | "Proyek Magang" | "Aplikasi Mobile" | "Sistem Web & Database" | "Proyek Klien";
  projectType: "Tugas Akhir / Akademik" | "Magang Industri" | "Proyek Akademik" | "Proyek Klien";
  role: string;
  image: string;
  imageLabel: string;
  portrait?: boolean;
  overview: string;
  background: string;
  objectives: string;
  outcome: string;
  challenges: string;
  stack: string[];
  contributions: string[];
  gallery: { src: string; label: string }[];
  images: { src: string; label: string }[];
  links: ProjectLink[];
};

export const projects: ProjectItem[] = [
  {
    number: "01",
    slug: "cimitage-tourism",
    title: "Cimitage Tourism",
    subtitle: "WebGIS aset cagar budaya dan optimasi rute wisata Sakoci Kota Cimahi",
    category: "WebGIS / Tugas Akhir",
    projectType: "Tugas Akhir / Akademik",
    role: "Full-Stack Developer, GIS & System Analyst",
    image: "/images/cimitage-map.png",
    imageLabel: "Peta interaktif WebGIS persebaran cagar budaya Cimahi",
    overview: "Sistem informasi geografis berbasis web terintegrasi yang menyajikan pemetaan interaktif aset cagar budaya di Kota Cimahi serta mendukung operasional pemesanan dan optimasi rute perjalanan bus wisata Sakoci.",
    background: "Potensi wisata sejarah cagar budaya Kota Cimahi membutuhkan media digital terpusat yang informatif bagi masyarakat serta rute operasional bus Sakoci yang teroptimasi secara efisien.",
    objectives: "Menyediakan katalog spasial cagar budaya interaktif, modul pemesanan tiket paket wisata, serta kalkulasi rute wisata terpendek berbasis jaringan jalan nyata.",
    outcome: "Memusatkan seluruh data aset cagar budaya terverifikasi dan menghasilkan rute wisata efektif yang mendukung operasional dinas/operator pariwisata.",
    challenges: "Pengolahan layer spasial dari OSM/QGIS, integrasi PostGIS dengan Leaflet, serta penerapan kalkulasi matriks jarak rute graf dengan algoritma Dijkstra.",
    stack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "PostGIS", "Leaflet.js", "QGIS", "OSM", "OSRM", "Dijkstra"],
    contributions: [
      "Menyiapkan, membersihkan, dan mengonversi data spasial jaringan jalan serta titik cagar budaya Cimahi menggunakan QGIS dan OSM/GeoJSON.",
      "Merancang basis data spasial relasional memanfaatkan PostgreSQL dan ekstensi PostGIS.",
      "Membangun antarmuka peta interaktif responsif dengan Leaflet.js yang mendukung pencarian, filter kategori sejarah, dan popup informasi multimedia.",
      "Merancang dan mengimplementasikan modul alur pemesanan tiket paket wisata Sakoci (reguler & privat).",
      "Menerapkan konsep optimasi rute wisata berbasis graf dan matriks jarak jalan raya menggunakan algoritma Dijkstra.",
      "Menyusun dasbor admin dan operator untuk pengelolaan jadwal perjalanan, verifikasi reservasi, dan pelaporan."
    ],
    gallery: [
      { src: "/images/cimitage-dashboard.png", label: "Dasbor pemesanan dan manajemen operasional admin" },
      { src: "/images/cimitage-no1.jpg", label: "Dokumentasi antarmuka dan presentasi sistem Cimitage" },
      { src: "/images/cimitage-no2.jpg", label: "Dokumentasi pengujian fitur dan pemetaan cagar budaya" }
    ],
    images: [
      { src: "/images/cimitage-map.png", label: "Peta interaktif WebGIS persebaran cagar budaya Cimahi" },
      { src: "/images/cimitage-dashboard.png", label: "Dasbor pemesanan dan manajemen operasional admin" },
      { src: "/images/cimitage-no1.jpg", label: "Dokumentasi antarmuka dan presentasi sistem Cimitage" },
      { src: "/images/cimitage-no2.jpg", label: "Dokumentasi pengujian fitur dan pemetaan cagar budaya" }
    ],
    links: [
      { label: "Lihat Produk", href: "", kind: "demo" },
      { label: "Prototipe Figma", href: "", kind: "prototype" },
      { label: "Repositori GitHub", href: "", kind: "repo" }
    ]
  },
  {
    number: "02",
    slug: "tukangkomputer",
    title: "TukangKomputer Website",
    subtitle: "Platform marketplace dan manajemen layanan servis komputer terpadu",
    category: "Proyek Magang",
    projectType: "Magang Industri",
    role: "Full-Stack Developer & Analyst (PT Labtech Inovasi Indonesia)",
    image: "/images/tukangkomputer-home.png",
    imageLabel: "Beranda portal marketplace produk dan layanan komputer",
    overview: "Platform digital marketplace dan layanan perbaikan perangkat komputer yang mengintegrasikan alur pemesanan jasa teknisi, transaksi sparepart, pelacakan pengerjaan real-time, serta analitik harga pasar.",
    background: "Kebutuhan perbaikan komputer sering kali menghadapi kendala transparansi proses servis, estimasi harga, dan pemantauan status pengerjaan oleh pelanggan.",
    objectives: "Membangun sistem terpusat yang memudahkan konsultasi servis, pemesanan suku cadang, pelacakan status pengerjaan secara langsung, dan manajemen admin.",
    outcome: "Mempercepat alur penanganan pesanan servis, memberikan transparansi progres pengerjaan lewat WebSocket, dan menyediakan referensi harga pasar yang akurat.",
    challenges: "Sinkronisasi status pengerjaan live melalui WebSocket, arsitektur skema GraphQL yang modular, serta otomatisasi pengambilan data komparasi harga pasar.",
    stack: ["Django", "GraphQL", "Next.js", "PostgreSQL", "WebSocket", "Web Scraping", "Python", "Tailwind CSS"],
    contributions: [
      "Menyusun dokumen Software Requirements Specification (SRS) untuk mendefinisikan ruang lingkup, use case, dan modul transaksi.",
      "Mengembangkan layanan backend dan GraphQL schema menggunakan Django & PostgreSQL untuk modul katalog, pengguna, dan order servis.",
      "Membangun antarmuka frontend responsif menggunakan Next.js dengan arsitektur komponen bersih.",
      "Mengimplementasikan integrasi WebSocket untuk pembaruan status pelacakan servis secara real-time ke layar pelanggan.",
      "Merancang alur web scraping terstruktur untuk agregasi referensi harga komponen perangkat keras.",
      "Melakukan pengujian fungsionalitas, pembuatan dokumentasi API teknis, dan verifikasi alur transaksi."
    ],
    gallery: [
      { src: "/images/tukangkomputer-tracking.png", label: "Halaman pelacakan status pengerjaan servis real-time" },
      { src: "/images/tukangkomputer-admin.png", label: "Dasbor admin pengelolaan order dan katalog layanan" },
      { src: "/images/tukangkomputer-no1.jpg", label: "Dokumentasi teknis dan alur perancangan TukangKomputer" }
    ],
    images: [
      { src: "/images/tukangkomputer-home.png", label: "Beranda portal marketplace produk dan layanan komputer" },
      { src: "/images/tukangkomputer-tracking.png", label: "Halaman pelacakan status pengerjaan servis real-time" },
      { src: "/images/tukangkomputer-admin.png", label: "Dasbor admin pengelolaan order dan katalog layanan" },
      { src: "/images/tukangkomputer-no1.jpg", label: "Dokumentasi teknis dan alur perancangan TukangKomputer" }
    ],
    links: [
      { label: "Lihat Produk", href: "", kind: "demo" },
      { label: "Prototipe Figma", href: "", kind: "prototype" },
      { label: "Repositori GitHub", href: "", kind: "repo" }
    ]
  },
  {
    number: "03",
    slug: "kalium-mobile",
    title: "Kalium Mobile Application",
    subtitle: "Aplikasi mobile pencatatan asupan nutrisi, konsumsi air, dan pelacakan pola hidup sehat",
    category: "Aplikasi Mobile",
    projectType: "Proyek Akademik",
    role: "Mobile Developer & UI/UX Designer",
    portrait: true,
    image: "/images/kalium-dashboard.png",
    imageLabel: "Dasbor mobile pemantauan kalori dan ringkasan aktivitas Kalium",
    overview: "Aplikasi mobile native Android modern yang membantu pengguna mencatat dan memantau pola asupan gizi harian, kebutuhan cairan tubuh, riwayat olahraga, serta rekomendasi gaya hidup sehat.",
    background: "Banyak pengguna kesulitan menjaga konsistensi pola makan sehat dan hidrasi harian tanpa alat bantu pencatatan yang cepat, intuitif, dan dapat berjalan secara luring.",
    objectives: "Menyediakan aplikasi Android yang responsif, mudah digunakan dalam sekali klik, dengan penyimpanan data lokal aman dan sinkronisasi server.",
    outcome: "Membantu pengguna memantau target kalori dan konsumsi air harian secara visual dan terstruktur dalam satu aplikasi mobile mandiri.",
    challenges: "Manajemen state yang reaktif menggunakan Jetpack Compose, perancangan database lokal Room dengan skema terstruktur, dan sinkronisasi API data nutrisi.",
    stack: ["Kotlin", "Jetpack Compose", "Android Studio", "Room Database", "PostgreSQL", "REST API", "Figma", "MVVM"],
    contributions: [
      "Merancang konsep UI/UX mobile yang clean, fokus, dan interaktif menggunakan Figma.",
      "Mengembangkan seluruh antarmuka aplikasi Android native secara deklaratif menggunakan Jetpack Compose.",
      "Membangun modul pencatatan konsumsi nutrisi harian, kalkulasi kalori otomatis, dan histori makanan.",
      "Mengimplementasikan fitur smart water reminder dan visualisasi tracker hidrasi.",
      "Mengelola arsitektur penyimpanan lokal berbasis Room Database serta alur sinkronisasi data ke PostgreSQL via REST API."
    ],
    gallery: [
      { src: "/images/kalium-food.png", label: "Layar pencatatan asupan makanan dan kalkulator nutrisi" },
      { src: "/images/kalium-water.png", label: "Layar pengingat konsumsi air dan profil personal" }
    ],
    images: [
      { src: "/images/kalium-dashboard.png", label: "Dasbor mobile pemantauan kalori dan ringkasan aktivitas Kalium" },
      { src: "/images/kalium-food.png", label: "Layar pencatatan asupan makanan dan kalkulator nutrisi" },
      { src: "/images/kalium-water.png", label: "Layar pengingat konsumsi air dan profil personal" }
    ],
    links: [
      { label: "Unduh APK / Demo", href: "", kind: "demo" },
      { label: "Prototipe Figma", href: "", kind: "prototype" },
      { label: "Repositori GitHub", href: "", kind: "repo" }
    ]
  },
  {
    number: "04",
    slug: "sikahim",
    title: "SIKAHIM",
    subtitle: "Sistem informasi manajemen kegiatan masjid, pendaftaran jamaah, dan evaluasi",
    category: "Sistem Web & Database",
    projectType: "Proyek Akademik",
    role: "Full-Stack Developer & Database Designer",
    image: "/images/sikahim-home.png",
    imageLabel: "Beranda portal sistem informasi kegiatan masjid SIKAHIM",
    overview: "Sistem manajemen operasional masjid berbasis web untuk mengelola publikasi agenda dakwah, registrasi peserta kajian, evaluasi kegiatan, dan notifikasi jamaah secara sistematis.",
    background: "Administrasi kegiatan masjid sering kali masih dicatat manual di buku agenda, menyebabkan kesulitan pengarsipan data jamaah dan rekap evaluasi kepanitiaan.",
    objectives: "Mendigitalkan publikasi agenda, menyederhanakan formulir pendaftaran jamaah secara online, dan mengotomasi rekap evaluasi kegiatan DKM.",
    outcome: "Memudahkan pengurus DKM dalam mengelola puluhan agenda kegiatan masjid secara transparan, rapi, dan terintegrasi dalam satu sistem basis data relasional.",
    challenges: "Penerapan logika integritas data tingkat database menggunakan stored procedure, triggers, dan query analytics di PostgreSQL.",
    stack: ["Laravel", "PHP", "PostgreSQL", "Tailwind CSS", "SQL Stored Procedures & Triggers", "Figma"],
    contributions: [
      "Mengembangkan alur modul manajemen jadwal kajian/kegiatan dan formulir pendaftaran jamaah secara daring.",
      "Membangun fungsionalitas CRUD lengkap untuk modul kegiatan, kepanitiaan, penilaian evaluasi, dan notifikasi pengumuman.",
      "Mengimplementasikan sistem autentikasi bertingkat (pengurus DKM, panitia, jamaah umum).",
      "Merancang skema relasional PostgreSQL yang kokoh, dilengkapi SQL Function, Triggers integritas, dan Views ringkasan data.",
      "Melakukan pengujian performa query basis data dan penyusunan panduan dokumentasi sistem."
    ],
    gallery: [
      { src: "/images/sikahim-detail.png", label: "Detail agenda kegiatan dan portal registrasi peserta" },
      { src: "/images/sikahim-no1.jpg", label: "Dokumentasi antarmuka dan implementasi sistem SIKAHIM" }
    ],
    images: [
      { src: "/images/sikahim-home.png", label: "Beranda portal sistem informasi kegiatan masjid SIKAHIM" },
      { src: "/images/sikahim-detail.png", label: "Detail agenda kegiatan dan portal registrasi peserta" },
      { src: "/images/sikahim-no1.jpg", label: "Dokumentasi antarmuka dan implementasi sistem SIKAHIM" }
    ],
    links: [
      { label: "Lihat Produk", href: "", kind: "demo" },
      { label: "Prototipe Figma", href: "", kind: "prototype" },
      { label: "Repositori GitHub", href: "", kind: "repo" }
    ]
  },
  {
    number: "05",
    slug: "dopamin-cafe",
    title: "Sistem Manajemen Keuangan & Kasir — Dopamin Cafe",
    subtitle: "Sistem POS kasir, transaksi penjualan, manajemen menu, dan rekap keuangan Dopamin Cafe Cimahi",
    category: "Proyek Klien",
    projectType: "Proyek Klien",
    role: "Full-Stack Developer & Analyst",
    image: "/images/dopamin-no1.png",
    imageLabel: "Antarmuka sistem kasir dan penjualan Dopamin Cafe",
    overview: "Sistem informasi manajemen kasir (Point of Sale) dan pencatatan keuangan operasional Dopamin Cafe di Cimahi untuk mendokumentasikan transaksi penjualan harian, stok menu, dan laporan kas secara rapi.",
    background: "Operasional kafe membutuhkan pencatatan transaksi yang cepat di meja kasir serta kemudahan pemilik dalam memantau laporan omset penjualan tanpa selisih hitung manual.",
    objectives: "Menyediakan aplikasi kasir web yang andal untuk input order cepat, pengelolaan harga dan status stok menu, serta rekapitulasi buku kas masuk dan keluar.",
    outcome: "Meningkatkan efisiensi pelayanan pemesanan kasir, meminimalisir kesalahan perhitungan manual, dan mempermudah rekap laporan keuangan harian kafe.",
    challenges: "Perancangan UI kasir yang responsif untuk layar kasir/tablet, kalkulasi otomatis diskon & pajak, serta konsistensi rekonsiliasi data kas.",
    stack: ["Web Development", "PHP / Laravel", "PostgreSQL / MySQL", "Tailwind CSS", "JavaScript", "System Analysis"],
    contributions: [
      "Melakukan analisis alur kerja operasional kasir dan kebutuhan pembukuan bersama pengelola kafe.",
      "Merancang dan mengembangkan antarmuka kasir cepat (Point of Sale) dengan kategorisasi menu dan kalkulasi otomatis.",
      "Membangun modul manajemen menu, harga, status ketersediaan stok bahan baku, dan riwayat transaksi.",
      "Mengembangkan fitur rekapitulasi laporan keuangan (penjualan harian, mingguan, bulanan) dengan export data.",
      "Melakukan pengujian transaksi bersama tim operasional dan dokumentasi petunjuk penggunaan kasir."
    ],
    gallery: [
      { src: "/images/dopamin-no2.png", label: "Modul transaksi dan rincian pemesanan kasir" },
      { src: "/images/dopamin-no3.png", label: "Pengelolaan menu kafe dan penyesuaian harga" },
      { src: "/images/dopamin-no4.png", label: "Laporan rekapitulasi omset dan riwayat penjualan" },
      { src: "/images/dopamin-no5.png", label: "Pengaturan administrasi dan data operasional kafe" }
    ],
    images: [
      { src: "/images/dopamin-no1.png", label: "Antarmuka sistem kasir dan penjualan Dopamin Cafe" },
      { src: "/images/dopamin-no2.png", label: "Modul transaksi dan rincian pemesanan kasir" },
      { src: "/images/dopamin-no3.png", label: "Pengelolaan menu kafe dan penyesuaian harga" },
      { src: "/images/dopamin-no4.png", label: "Laporan rekapitulasi omset dan riwayat penjualan" },
      { src: "/images/dopamin-no5.png", label: "Pengaturan administrasi dan data operasional kafe" }
    ],
    links: [
      { label: "Lihat Produk", href: "", kind: "demo" },
      { label: "Prototipe Figma", href: "", kind: "prototype" },
      { label: "Dokumentasi", href: "", kind: "doc" }
    ]
  },
  {
    number: "06",
    slug: "sultan-resto",
    title: "Sistem Manajemen Rekrutmen Karyawan — Sultan Resto",
    subtitle: "Portal penerimaan berkas pelamar kerja, seleksi administratif, dan manajemen rekrutmen Sultan Resto Pekanbaru",
    category: "Proyek Klien",
    projectType: "Proyek Klien",
    role: "Full-Stack Developer & System Analyst",
    image: "/images/sultanresto-no1.png",
    imageLabel: "Portal pendaftaran pelamar dan form unggah berkas Sultan Resto",
    overview: "Sistem manajemen rekrutmen karyawan (E-Recruitment) untuk Sultan Resto di Pekanbaru guna mendigitalkan penerimaan berkas pelamar kerja, penyaringan kualifikasi pelamar, dan penilaian tahap seleksi HR.",
    background: "Proses rekrutmen manual dengan berkas fisik sering menyebabkan penumpukan dokumen kertas, kesulitan pelacakan status kandidat, dan lambatnya koordinasi tim penilai.",
    objectives: "Membangun portal rekrutmen daring untuk pengunggahan CV & berkas pelamar serta dasbor admin HR untuk penilaian kandidat secara transparan.",
    outcome: "Mempercepat screening berkas pelamar kerja secara terpusat, mengeliminasi risiko berkas hilang, dan mempermudah penetapan status kelulusan kandidat.",
    challenges: "Validasi file unggahan dokumen persyaratan, struktur data kandidat yang fleksibel sesuai posisi yang dilamar, dan hak akses tim seleksi.",
    stack: ["Web Development", "PHP / Framework", "MySQL / PostgreSQL", "Bootstrap / Tailwind CSS", "System Documentation"],
    contributions: [
      "Menganalisis alur tahapan seleksi calon karyawan restoran bersama manajemen Sultan Resto Pekanbaru.",
      "Membangun portal registrasi pelamar publik dengan form biodata dan unggah dokumen persyaratan digital.",
      "Mengembangkan dasbor administratif HR untuk evaluasi kandidat, filter kualifikasi posisi, dan update status seleksi.",
      "Mengimplementasikan sistem notifikasi status seleksi berkas bagi calon pelamar.",
      "Melakukan pengujian alur pendaftaran, upload keamanan file, dan penyerahan panduan operasional sistem."
    ],
    gallery: [
      { src: "/images/sultanresto-no2.png", label: "Dasbor admin HR rekapitulasi data pelamar kerja" },
      { src: "/images/sultanresto-no3.png", label: "Formulir detail kualifikasi dan berkas kandidat" },
      { src: "/images/sultanresto-no4.png", label: "Panel evaluasi dan penetapan status kelulusan rekrutmen" }
    ],
    images: [
      { src: "/images/sultanresto-no1.png", label: "Portal pendaftaran pelamar dan form unggah berkas Sultan Resto" },
      { src: "/images/sultanresto-no2.png", label: "Dasbor admin HR rekapitulasi data pelamar kerja" },
      { src: "/images/sultanresto-no3.png", label: "Formulir detail kualifikasi dan berkas kandidat" },
      { src: "/images/sultanresto-no4.png", label: "Panel evaluasi dan penetapan status kelulusan rekrutmen" }
    ],
    links: [
      { label: "Lihat Produk", href: "", kind: "demo" },
      { label: "Prototipe Figma", href: "", kind: "prototype" },
      { label: "Dokumentasi", href: "", kind: "doc" }
    ]
  }
];

export type Project = ProjectItem;
export const portfolioFile = "/files/Portofolio_Azzam.pdf";
