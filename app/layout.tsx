import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins"
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0f1e" }
  ],
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mazaproject.my.id"),
  title: "Muhammad Azzam Izzuddin | Software Developer · System Analyst · Software QA",
  description:
    "Portofolio profesional Muhammad Azzam Izzuddin (Fresh Graduate D3 Teknik Informatika Polban): software engineering, Full-Stack Web, Mobile, WebGIS, Analisis Sistem, dan Software QA.",
  keywords: [
    "Muhammad Azzam Izzuddin",
    "Azzam",
    "Software Engineer",
    "Software Developer",
    "Full-Stack Developer",
    "System Analyst",
    "Software QA",
    "Junior QA Software",
    "WebGIS",
    "Politeknik Negeri Bandung",
    "Polban",
    "Next.js",
    "Django",
    "Kotlin",
    "PostgreSQL"
  ],
  authors: [{ name: "Muhammad Azzam Izzuddin", url: "https://www.mazaproject.my.id" }],
  creator: "Muhammad Azzam Izzuddin",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://www.mazaproject.my.id",
    title: "Muhammad Azzam Izzuddin | Portfolio Software Engineering & Analisis Sistem",
    description:
      "Portofolio profesional Muhammad Azzam Izzuddin: Software engineering, aplikasi web & mobile, WebGIS cagar budaya, sistem kasir, rekrutmen, dan analisis kebutuhan sistem.",
    siteName: "Portofolio Muhammad Azzam Izzuddin",
    images: [
      {
        url: "/images/profile-azzam.jpg",
        width: 800,
        height: 1000,
        alt: "Muhammad Azzam Izzuddin"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Azzam Izzuddin | Software Developer & System Analyst",
    description: "Portofolio fresh graduate D3 Teknik Informatika Polban: Web, Mobile, WebGIS, dan Software QA.",
    images: ["/images/profile-azzam.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="dark")document.documentElement.dataset.theme="dark"}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="id" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
