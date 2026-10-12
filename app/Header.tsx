"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type NavItem = { label: string; href: string };

const icons: Record<string, ReactNode> = {
  "#home": <path d="M3 11l9-8 9 8M5 10v10h5v-6h4v6h5V10" />,
  "#profile": (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 4-6 8-6s8 2 8 6" />
    </>
  ),
  "#education": (
    <>
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </>
  ),
  "#skills": <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0 0 12 3z" />,
  "#experience": <path d="M3 7h18v13H3zM8 7V4h8v3M3 13h18" />,
  "#projects": <path d="M3 6a2 2 0 0 1 2-2h4l2 3h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
  "#contact": (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </>
  )
};

export default function Header({
  nav,
  cta,
  ctaHref,
  shortName,
  basePath = ""
}: {
  nav: NavItem[];
  cta: string;
  ctaHref: string;
  shortName: string;
  basePath?: string;
}) {
  const items: NavItem[] = [{ label: "Beranda", href: "#home" }, ...nav];
  const [active, setActive] = useState(basePath ? "#projects" : "#home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      if (basePath) return;
      let current = "#home";
      for (const it of items) {
        const el = document.querySelector(it.href);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = it.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // scroll reveal
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0, rootMargin: "0px 0px -4% 0px" }
    );
    els.forEach((el) => io.observe(el));
    // fallback: never leave content hidden if the observer misses an element (e.g. tall cards on mobile)
    const fallback = window.setTimeout(() => els.forEach((el) => el.classList.add("in")), 2500);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <a href={basePath + "#home"} className="brand" aria-label={`Beranda ${shortName}`}>
        <span className="brand-mark">A</span>
        <span className="brand-name">{shortName}</span>
      </a>
      <nav className="nav" aria-label="Navigasi utama">
        {items.map((item) => (
          <a
            key={item.href}
            href={basePath + item.href}
            className={active === item.href ? "active" : ""}
            aria-label={item.label}
            aria-current={active === item.href ? "true" : undefined}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              {icons[item.href]}
            </svg>
            <span className="tip">{item.label}</span>
          </a>
        ))}
      </nav>
      <a className="header-cta" href={ctaHref} target="_blank" rel="noreferrer">
        {cta}
      </a>
    </header>
  );
}

