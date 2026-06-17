import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Azzam Izzuddin | Software Engineering Portfolio",
  description:
    "Personal web profile and portfolio for Muhammad Azzam Izzuddin, covering full-stack development, WebGIS, mobile development, system analysis, and deployment.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
