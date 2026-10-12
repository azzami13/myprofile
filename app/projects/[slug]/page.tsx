import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { site } from "@/src/data/site";
import { projects } from "@/src/data/projects";
import SiteHeader from "../../Header";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return { title: p ? `${p.title} | ${site.name}` : site.name, description: p?.overview };
}

const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Halo Azzam, saya melihat portofolio Anda dan ingin berdiskusi.")}`;

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((x) => x.slug === params.slug);
  if (index < 0) notFound();
  const p = projects[index];
  const next = projects[(index + 1) % projects.length];
  const [hero, ...rest] = p.images;

  return (
    <main>
      <SiteHeader nav={site.nav} cta="Hubungi Saya" ctaHref={whatsappLink} shortName={site.shortName} basePath="/" />
      <div className="section-shell detail">
        <Link href="/#projects" className="back-link">← Semua proyek</Link>

        <header className="detail-head">
          <span className="eyebrow reveal">{p.category}</span>
          <h1 className="reveal">{p.title}</h1>
          <p className="detail-sub">{p.subtitle}</p>
          <div className="chip-list">
            {p.stack.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </header>

        <div className="detail-cover reveal" style={{ backgroundImage: `url("${hero.src}")` }} role="img" aria-label={hero.label} />

        <div className="detail-grid">
          <div className="detail-body">
            <section className="reveal">
              <h2>Ringkasan</h2>
              <p>{p.overview}</p>
              <p><strong>Fokus:</strong> {p.outcome}</p>
            </section>

            <section className="reveal">
              <h2>Kontribusi Utama</h2>
              <ul className="check-list">
                {p.contributions.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="detail-side reveal">
            <div className="info-card">
              <h3>Informasi</h3>
              <dl>
                <dt>Kategori</dt><dd>{p.category}</dd>
                <dt>Peran</dt><dd>{p.role}</dd>
                <dt>Teknologi</dt><dd>{p.stack.join(", ")}</dd>
              </dl>
            </div>
            <div className="info-card">
              <h3>Prototipe &amp; Produk</h3>
              <div className="link-list">
                {p.links.map((l) =>
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

        {rest.length > 0 && (
          <section className="reveal">
            <h2 className="detail-h2">Galeri</h2>
            <div className="detail-gallery">
              {rest.map((img) => (
                <figure key={img.src}>
                  <div style={{ backgroundImage: `url("${img.src}")` }} role="img" aria-label={img.label} />
                  <figcaption>{img.label}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}

        <Link href={`/projects/${next.slug}`} className="next-project reveal">
          <span>Proyek berikutnya</span>
          <strong>{next.title} →</strong>
        </Link>
      </div>
    </main>
  );
}

