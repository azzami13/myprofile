import { site } from "@/src/data/site";
import SiteHeader from "./Header";
import HeroCarousel from "./HeroCarousel";
import ThemeLamp from "./ThemeLamp";
import ProjectsSection from "./ProjectsSection";
import { projects, portfolioFile } from "@/src/data/projects";

const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  `Halo Azzam, saya melihat portofolio Anda di mazaproject.my.id dan ingin berdiskusi terkait peluang kerja/proyek.`
)}`;

export default function Home() {
  return (
    <main>
      <Header />
      <ThemeLamp />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <SiteHeader
      nav={site.nav}
      cta="Hubungi Saya"
      ctaHref={whatsappLink}
      shortName={site.shortName}
    />
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <span className="hero-hello reveal">Halo, saya</span>
        <h1 className="reveal">{site.name}</h1>
        <p className="hero-title">
          Fresh Graduate D3 Teknik Informatika Politeknik Negeri Bandung dengan fokus pada{" "}
          <strong>software engineering</strong>, <strong>analisis sistem</strong>, dan{" "}
          <strong>software quality assurance</strong>.
        </p>
        <p className="hero-description">
          Berpengalaman membangun aplikasi web, mobile, dan WebGIS dari analisis kebutuhan, implementasi sistem, hingga pengujian.
        </p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            Lihat Proyek
          </a>
          <a className="btn secondary" href={site.resumeFile} target="_blank" rel="noreferrer">
            Unduh CV
          </a>
          <a className="btn secondary" href={portfolioFile} download="Portofolio_Azzam.pdf">
            Portofolio
          </a>
        </div>
      </div>
      <aside className="hero-portrait" aria-label="Foto profil Muhammad Azzam Izzuddin">
        <HeroCarousel />
      </aside>
    </section>
  );
}

function About() {
  return (
    <section id="profile" className="section-shell split-section">
      <div>
        
        <h2>Tentang saya</h2>
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

function Education() {
  return (
    <section id="education" className="section-shell section-block compact-block">
      <SectionHeading
        eyebrow="Pendidikan"
        title="Pendidikan"
        body=""
      />
      <div className="education-list">
        {site.education.map((edu) => (
          <article className="experience-card reveal" key={edu.institution}>
            <div className="experience-head">
              <div>
                <h3>{edu.program}</h3>
                <p>
                  <strong>{edu.institution}</strong> • {edu.status}
                </p>
              </div>
              <span>{edu.year}</span>
            </div>
            <div className="contribution-box" style={{ marginTop: "14px" }}>
              <h5>Tugas Akhir: {edu.finalProject.title}</h5>
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.65" }}>
                {edu.finalProject.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section-shell section-block">
      <SectionHeading
        eyebrow="Keahlian"
        title="Keahlian"
        body=""
      />
      <div className="skill-categories-grid">
        {site.skillCategories.map((cat) => (
          <article className="skill-cat-card reveal" key={cat.group}>
            <div className="skill-cat-head">
              <h3>{cat.group}</h3>
              <p>{cat.description}</p>
            </div>
            <div className="skill-subgroups">
              {cat.subgroups.map((sub) => (
                <div className="skill-subgroup-item" key={sub.name}>
                  <h4>{sub.name}</h4>
                  <div className="chip-list">
                    {sub.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
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
        title="Pengalaman"
        body=""
      />
      <div className="experience-list">
        {site.experience.map((item) => (
          <article className="experience-card reveal" key={item.company}>
            <div className="experience-head">
              <div>
                <span className="exp-type-tag">{item.type}</span>
                <h3>{item.role}</h3>
                <p className="exp-meta">
                  <strong>{item.company}</strong> • {item.location}
                </p>
              </div>
              <span className="exp-period">{item.period}</span>
            </div>
            <div className="chip-list small">
              {item.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <ul className="exp-points">
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
        eyebrow="Proyek"
        title="Proyek pilihan"
        body="Klik salah satu proyek untuk melihat detailnya."
      />
      <ProjectsSection projects={projects} />
    </section>
  );
}

function Contact() {
  const links = [
    { label: "Email", value: site.email, href: `mailto:${site.email}` },
    { label: "WhatsApp", value: site.phone, href: whatsappLink },
    { label: "LinkedIn", value: "azzamizzuddin", href: site.linkedin },
    { label: "GitHub", value: "azzami13", href: site.github },
    { label: "Instagram", value: "@mazzazu", href: site.instagram }
  ];
  return (
    <section id="contact" className="section-shell contact-wrap">
      <div className="contact-box reveal">
        <h2>Mari terhubung.</h2>
        <p>
          Terbuka untuk posisi software developer, system analyst, atau QA, serta kerja sama proyek. Berbasis di{" "}
          {site.location}.
        </p>
        <div className="contact-actions">
          <a className="btn primary" href={whatsappLink} target="_blank" rel="noreferrer">
            Chat WhatsApp
          </a>
          <a className="btn secondary" href={`mailto:${site.email}`}>
            Kirim Email
          </a>
        </div>
        <ul className="contact-links">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} target={l.href.startsWith("mailto") ? undefined : "_blank"} rel="noreferrer">
                <span>{l.label}</span>
                <strong>{l.value}</strong>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>{site.name}</strong>
        <p>{site.headline}</p>
      </div>
      <div className="footer-links">
        <a href="#home">Kembali ke atas ↑</a>
      </div>
    </footer>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <div className="section-heading">
      
      <h2>{title}</h2>
      {body && <p>{body}</p>}
    </div>
  );
}
