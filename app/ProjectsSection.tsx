"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/src/data/projects";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("Semua");
  const project = projects.find((p) => p.slug === openSlug) ?? null;

  const categories = [
    { label: "Semua", match: (_: Project) => true },
    { label: "Akademik", match: (p: Project) => p.projectType === "Tugas Akhir / Akademik" || p.projectType === "Proyek Akademik" },
    { label: "Magang", match: (p: Project) => p.projectType === "Magang Industri" },
    { label: "Klien", match: (p: Project) => p.projectType === "Proyek Klien" }
  ];

  const filteredProjects = projects.filter((categories.find((c) => c.label === filter) ?? categories[0]).match);

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenSlug(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <>
      <div className="project-filter-bar" role="tablist">
        {categories.map((cat) => (
          <button
            key={cat.label}
            type="button"
            className={`filter-btn ${filter === cat.label ? "active" : ""}`}
            onClick={() => setFilter(cat.label)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {filteredProjects.map((p) => (
          <button
            type="button"
            className={`project-tile ${p.portrait ? "is-portrait" : ""}`}
            key={p.slug}
            onClick={() => setOpenSlug(p.slug)}
          >
            <div
              className="tile-img"
              style={{ backgroundImage: `url("${p.image}")` }}
              role="img"
              aria-label={p.imageLabel}
            >
              <span className="tile-num">{p.number}</span>
            </div>
            <div className="tile-body">
              <span className="project-category">{p.category}</span>
              <h3>{p.title}</h3>
              <p>{p.subtitle}</p>
              <div className="chip-list small">
                {p.stack.slice(0, 4).map((t) => (
                  <span key={t}>{t}</span>
                ))}
                {p.stack.length > 4 && <span>+{p.stack.length - 4}</span>}
              </div>
              <span className="tile-more">
                Lihat detail <i>→</i>
              </span>
            </div>
          </button>
        ))}
      </div>

      {project && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label={project.title}
          onClick={() => setOpenSlug(null)}
        >
          <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modal-close"
              onClick={() => setOpenSlug(null)}
              aria-label="Tutup jendela detail"
            >
              ✕
            </button>

            <div className="modal-header-meta">
              <span className="eyebrow">{project.category}</span>
              <span className="type-pill">{project.projectType}</span>
            </div>
            <h2 className="modal-title">{project.title}</h2>
            <p className="detail-sub">{project.subtitle}</p>

            <div className="chip-list">
              {project.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            {/* Galeri Screenshot */}
            <div className="modal-gallery-wrapper">
              <h3 className="section-mini-title">Galeri Antarmuka &amp; Dokumentasi</h3>
              <div className={`modal-gallery ${project.portrait ? "portrait" : ""}`}>
                {project.images.map((img) => (
                  <figure key={img.src}>
                    <div
                      style={{ backgroundImage: `url("${img.src}")` }}
                      role="img"
                      aria-label={img.label}
                    />
                    <figcaption>{img.label}</figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="detail-grid">
              <div className="detail-body">
                <section>
                  <h3>Ringkasan Sistem</h3>
                  <p>{project.overview}</p>
                </section>

                <section>
                  <h3>Latar Belakang &amp; Tujuan</h3>
                  <p><strong>Latar Belakang:</strong> {project.background}</p>
                  <p><strong>Tujuan:</strong> {project.objectives}</p>
                  <p className="outcome-box">
                    <strong>Fokus &amp; Hasil:</strong> {project.outcome}
                  </p>
                </section>

                <section>
                  <h3>Tantangan Teknis &amp; Solusi</h3>
                  <p>{project.challenges}</p>
                </section>

                <section>
                  <h3>Peran &amp; Kontribusi Nyata</h3>
                  <ul className="check-list">
                    {project.contributions.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <aside className="detail-side">
                <div className="info-card">
                  <h3>Informasi Proyek</h3>
                  <dl>
                    <dt>Kategori</dt>
                    <dd>{project.category}</dd>
                    <dt>Jenis Proyek</dt>
                    <dd>{project.projectType}</dd>
                    <dt>Peran Saya</dt>
                    <dd>{project.role}</dd>
                    <dt>Stack Teknologi</dt>
                    <dd>{project.stack.join(", ")}</dd>
                  </dl>
                </div>

                <div className="info-card">
                  <h3>Tautan &amp; Sumber Daya</h3>
                  <div className="link-list">
                    {project.links.map((l) =>
                      l.href ? (
                        <a
                          key={l.label}
                          className="btn primary"
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {l.label} ↗
                        </a>
                      ) : (
                        <span key={l.label} className="btn disabled" aria-disabled="true">
                          {l.label} · Informasi internal / segera hadir
                        </span>
                      )
                    )}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
