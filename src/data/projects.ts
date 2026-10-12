import { site } from "./site";

export type ProjectLink = { label: string; href: string; kind: "demo" | "prototype" | "repo" | "doc" };

const slugs = ["cimitage-tourism", "tukangkomputer", "kalium-mobile", "sikahim"];

/**
 * Data tambahan per proyek. Isi `links` dengan URL asli (demo/prototipe/repo) nanti.
 * Link kosong ("") akan tampil sebagai "Segera hadir".
 */
const extras: Record<string, { images: { src: string; label: string }[]; links: ProjectLink[]; portrait?: boolean }> = {
  "cimitage-tourism": {
    images: [
      { src: "/images/cimitage-map.png", label: "Peta WebGIS interaktif dengan penanda cagar budaya" },
      { src: "/images/cimitage-dashboard.png", label: "Dasbor pemesanan atau admin" },
      { src: "/images/cimitage-no1.jpg", label: "Dokumentasi Cimitage Tourism" },
      { src: "/images/cimitage-no2.jpg", label: "Dokumentasi Cimitage Tourism" }
    ],
    links: [
      { label: "Lihat Produk", href: "", kind: "demo" },
      { label: "Prototipe Figma", href: "", kind: "prototype" },
      { label: "Repositori", href: "", kind: "repo" }
    ]
  },
  tukangkomputer: {
    images: [
      { src: "/images/tukangkomputer-home.png", label: "Beranda marketplace atau daftar produk" },
      { src: "/images/tukangkomputer-tracking.png", label: "Halaman pesanan atau pelacakan layanan" },
      { src: "/images/tukangkomputer-admin.png", label: "Dasbor admin" },
      { src: "/images/tukangkomputer-no1.jpg", label: "Dokumentasi TukangKomputer" }
    ],
    links: [
      { label: "Lihat Produk", href: "", kind: "demo" },
      { label: "Prototipe Figma", href: "", kind: "prototype" },
      { label: "Repositori", href: "", kind: "repo" }
    ]
  },
  "kalium-mobile": {
    portrait: true,
    images: [
      { src: "/images/kalium-dashboard.png", label: "Tampilan dasbor Kalium" },
      { src: "/images/kalium-food.png", label: "Layar asupan makanan atau detail nutrisi" },
      { src: "/images/kalium-water.png", label: "Layar pengingat minum atau profil" }
    ],
    links: [
      { label: "Unduh Aplikasi", href: "", kind: "demo" },
      { label: "Prototipe Figma", href: "", kind: "prototype" },
      { label: "Repositori", href: "", kind: "repo" }
    ]
  },
  sikahim: {
    images: [
      { src: "/images/sikahim-home.png", label: "Beranda SIKAHIM atau daftar kegiatan" },
      { src: "/images/sikahim-detail.png", label: "Detail kegiatan atau fitur pendaftaran" },
      { src: "/images/sikahim-no1.jpg", label: "Dokumentasi SIKAHIM" }
    ],
    links: [
      { label: "Lihat Produk", href: "", kind: "demo" },
      { label: "Prototipe Figma", href: "", kind: "prototype" },
      { label: "Repositori", href: "", kind: "repo" }
    ]
  }
};

export const projects = site.projects.map((p, i) => {
  const slug = slugs[i];
  return { ...p, slug, images: extras[slug].images, links: extras[slug].links, portrait: extras[slug].portrait ?? false };
});

export type Project = (typeof projects)[number];

export const portfolioFile = "/files/Portofolio_Azzam.pdf";

