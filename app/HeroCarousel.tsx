"use client";

import { useEffect, useRef, useState } from "react";

const slides = [
  { src: "/images/profile-azzam.jpg", caption: "Turning ideas into useful experiences" },
  { src: "/images/profile-azzam-2.jpg", caption: "Building clean, reliable software" },
  { src: "/images/profile-azzam-3.jpg", caption: "Always learning, always shipping" }
];

const FALLBACK = slides[0].src;

export default function HeroCarousel() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % slides.length), 4200);
    return () => window.clearInterval(id);
  }, [paused, i]);

  const go = (n: number) => setI((n + slides.length) % slides.length);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={(e) => (startX.current = e.clientX)}
      onPointerUp={(e) => {
        if (startX.current === null) return;
        const dx = e.clientX - startX.current;
        if (Math.abs(dx) > 40) go(i + (dx < 0 ? 1 : -1));
        startX.current = null;
      }}
      aria-roledescription="carousel"
      aria-label="Foto Muhammad Azzam Izzuddin"
    >
      <div className="carousel-frame">
        {slides.map((s, n) => (
          <img
            key={s.src}
            src={s.src}
            alt={`Foto ${n + 1} Muhammad Azzam Izzuddin`}
            className={`carousel-slide ${n === i ? "active" : n === (i - 1 + slides.length) % slides.length ? "prev" : ""}`}
            draggable={false}
            onError={(e) => {
              if (!e.currentTarget.src.endsWith(FALLBACK)) e.currentTarget.src = FALLBACK;
            }}
          />
        ))}
        <button type="button" className="car-arrow left" onClick={() => go(i - 1)} aria-label="Foto sebelumnya">‹</button>
        <button type="button" className="car-arrow right" onClick={() => go(i + 1)} aria-label="Foto berikutnya">›</button>
      </div>
      <p className="carousel-caption" key={i}>{slides[i].caption}</p>
      <div className="carousel-dots">
        {slides.map((_, n) => (
          <button key={n} type="button" className={n === i ? "on" : ""} onClick={() => go(n)} aria-label={`Foto ${n + 1}`} />
        ))}
      </div>
    </div>
  );
}
