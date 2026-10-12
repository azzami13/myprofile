"use client";

import { useEffect, useState } from "react";
import type { Project } from "@/src/data/projects";

export default function ProjectsSection({ projects }: { projects: Project[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const project = projects.find((p) => p.slug === openSlug) ?? null;

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
      <div className="project-grid">
        {projects.map((p) => (
          <button type="button" className={`project-tile reveal ${p.portrait ? "is-portrait" : ""}`} key={p.slug} onClick={() => setOpenSlug(p.slug)}>
            <div className="tile-img" style={{ backgroundImage: `url("${p.image}")` }} role="img" aria-label={p.imageLabel}>
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
              </div>
              <span className="tile-more">
                Lihat detail <i>→</i>
              </span>
            </div>
          </button>
        ))}
      </div>

      {project && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={project.title} onClick={() => setOpenSlug(null)}>
          <div className="modal-panel" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setOpenSlug(null)} aria-label="Tutup">
              ✕
            </button>

            <span className="eyebrow">{project.category}</span>
            <h2 className="modal-title">{project.title}</h2>
            <p className="detail-sub">{project.subtitle}</p>
            <div className="chip-list">
              {project.stack.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>

            <div className={`modal-gallery ${project.portrait ? "portrait" : ""}`}>
              {project.images.map((img) => (
                <figure key={img.src}>
                  <div style={{ backgroundImage: `url("${img.src}")` }} role="img" aria-label={img.label} />
                  <figcaption>{img.label}</figcaption>
                </figure>
              ))}
            </div>

            <div className="detail-grid">
              <div className="detail-body">
                <section>
                  <h3>Ringkasan</h3>
                  <p>{project.overview}</p>
                  <p>
                    <strong>Fokus:</strong> {project.outcome}
                  </p>
                </section>
                <section>
                  <h3>Kontribusi Utama</h3>
                  <ul className="check-list">
                    {project.contributions.map((c) => (
                      <li key={c}>{c}</li>
                    ))}
                  </ul>
                </section>
              </div>
              <aside className="detail-side">
                <div className="info-card">
                  <h3>Informasi</h3>
                  <dl>
                    <dt>Kategori</dt>
                    <dd>{project.category}</dd>
                    <dt>Peran</dt>
                    <dd>{project.role}</dd>
                    <dt>Teknologi</dt>
                    <dd>{project.stack.join(", ")}</dd>
                  </dl>
                </div>
                <div className="info-card">
                  <h3>Prototipe &amp; Produk</h3>
                  <div className="link-list">
                    {project.links.map((l) =>
                      l.href ? (
                        <a key={l.label} className="btn primary" href={l.href} target="_blank" rel="noreferrer">
                          {l.label} ↗
                        </a>
                      ) : (
                        <span key={l.label} className="btn disabled" aria-disabled="true">
                          {l.label} · Segera hadir
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

