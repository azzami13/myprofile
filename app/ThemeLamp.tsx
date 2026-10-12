"use client";

import { useEffect, useRef, useState } from "react";

/** Lampu gantung kecil: tarik talinya untuk ganti tema terang/gelap. */
export default function ThemeLamp() {
  const [dark, setDark] = useState(false);
  const [pulling, setPulling] = useState(false);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => {
    setDark(document.documentElement.dataset.theme === "dark");
    return () => window.clearTimeout(timer.current);
  }, []);

  const pull = () => {
    setPulling(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setPulling(false), 450);
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <div className={`lamp ${dark ? "off" : "on"} ${pulling ? "pulling" : ""}`}>
      <span className="lamp-wire" aria-hidden="true" />
      <span className="lamp-shade" aria-hidden="true" />
      <span className="lamp-bulb" aria-hidden="true" />
      <span className="lamp-glow" aria-hidden="true" />
      <button
        type="button"
        className="lamp-cord"
        onClick={pull}
        aria-label={dark ? "Nyalakan lampu (tema terang)" : "Matikan lampu (tema gelap)"}
        title="Tarik untuk ganti tema"
      >
        <span className="lamp-string" />
        <span className="lamp-knob" />
      </button>
    </div>
  );
}

