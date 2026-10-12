import { site } from "@/src/data/site";
import Link from "next/link";
import SiteHeader from "./Header";
import HeroCarousel from "./HeroCarousel";
import ThemeLamp from "./ThemeLamp";
import ProjectsSection from "./ProjectsSection";
import { projects, portfolioFile } from "@/src/data/projects";

const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  `Halo Azzam, saya melihat portofolio Anda dan ingin berdiskusi.`
)}`;

export default function Home() {
  return (
    <main>
      <Header />
      <ThemeLamp />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return <SiteHeader nav={site.nav} cta="Hubungi Saya" ctaHref={whatsappLink} shortName={site.shortName} />;
}

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <span className="eyebrow reveal">Portofolio pribadi</span>
        <h1 className="reveal">{site.name}</h1>
        <p className="hero-title">{site.title}</p>
        <p>{site.tagline}</p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            Lihat Proyek
          </a>
          <a className="btn accent" href={portfolioFile} download="Portofolio_Azzam.pdf">Unduh Portofolio</a>
          <a className="btn secondary" href={site.resumeFile} target="_blank" rel="noreferrer">
            Unduh CV
          </a>
        </div>
      </div>
      <aside className="hero-portrait" aria-label="Foto Muhammad Azzam Izzuddin">
        <HeroCarousel />
      </aside>
    </section>
  );
}

function About() {
  return (
    <section id="profile" className="section-shell split-section">
      <div>
        <span className="eyebrow reveal">Profil</span>
        <h2>Dari kebutuhan pengguna hingga aplikasi siap digunakan.</h2>
      </div>
      <div className="about-content reveal">
        {site.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <div className="highlight-list">
          {site.highlights.map((item) => (
            <div key={item} className="highlight-item">
              <span>✓</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell section-block">
      <SectionHeading
        eyebrow="Keahlian"
        title="Membangun aplikasi web, mobile, dan WebGIS."
        body="Keahlian yang digunakan dalam proyek mencakup analisis kebutuhan, pengembangan antarmuka dan API, pengolahan data, hingga dokumentasi implementasi."
      />
      <div className="skill-grid">
        {site.skills.map((skill) => (
          <article className="skill-card reveal" key={skill.group}>
            <h3>{skill.group}</h3>
            <div className="chip-list">
              {skill.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section-shell section-block compact-block">
      <SectionHeading
        eyebrow="Pengalaman"
        title="Pengalaman magang di pengembangan perangkat lunak."
        body="Di PT Labtech Inovasi Indonesia, saya mengerjakan analisis kebutuhan, pengembangan API dan frontend, pembaruan real-time, scraping, pengujian, serta dokumentasi teknis."
      />
      <div className="experience-list">
        {site.experience.map((item) => (
          <article className="experience-card reveal" key={item.company}>
            <div className="experience-head">
              <div>
                <h3>{item.role}</h3>
                <p>
                  {item.company} • {item.location}
                </p>
              </div>
              <span>{item.period}</span>
            </div>
            <div className="chip-list small">
              {item.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-shell section-block">
      <SectionHeading
        eyebrow="Proyek pilihan"
        title="Empat proyek, dengan konteks dan kebutuhan yang berbeda."
        body="Pilih salah satu proyek untuk melihat detail, galeri, prototipe, dan tautan produknya."
      />
      <ProjectsSection projects={projects} />
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <div>
        <span className="eyebrow reveal">Kontak</span>
        <h2>Mari bicarakan proyek atau kesempatan berikutnya.</h2>
        <p>
          Saya terbuka untuk diskusi proyek, magang, kolaborasi, atau kesempatan lain di bidang pengembangan perangkat lunak.
        </p>
      </div>
      <div className="contact-card reveal">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={whatsappLink} target="_blank" rel="noreferrer">
          {site.phone}
        </a>
        <a href={site.github} target="_blank" rel="noreferrer">
          github.com/azzami13
        </a>
        <a href={site.instagram} target="_blank" rel="noreferrer">
          instagram.com/mazzazu
        </a>
        <span>{site.location}</span>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span>© {new Date().getFullYear()} {site.name}.</span>
      <a href="#home">Kembali ke atas ↑</a>
    </footer>
  );
}

function ImageSlot({
  src,
  label,
  title,
  compact = false
}: {
  src: string;
  label: string;
  title: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`image-slot ${compact ? "compact" : ""}`}
      style={{
        backgroundImage: `url("${src}")`
      }}
      aria-label={label}
    >
      <div>
        <strong>{title}</strong>
        <span>{label}</span>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow reveal">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}