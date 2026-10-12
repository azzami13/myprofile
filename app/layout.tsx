import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Muhammad Azzam Izzuddin | Portofolio Rekayasa Perangkat Lunak",
  description:
    "Portofolio Muhammad Azzam Izzuddin: pengembangan full-stack, WebGIS, aplikasi mobile, analisis sistem, dan deployment.",
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
