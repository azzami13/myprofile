import { site } from "@/src/data/site";

const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
  `Halo Azzam, saya melihat web profile kamu dan ingin berdiskusi.`
)}`;

export default function Home() {
  return (
    <main>
      <Header />
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
  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label={`${site.name} home`}>
        <span className="brand-mark">A</span>
        <span>{site.shortName}</span>
      </a>
      <nav className="nav" aria-label="Main navigation">
        {site.nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-cta" href={whatsappLink} target="_blank" rel="noreferrer">
        Contact
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-shell">
      <div className="hero-copy">
        <span className="eyebrow">Personal Web Profile</span>
        <h1>{site.name}</h1>
        <p className="hero-title">{site.title}</p>
        <p>{site.tagline}</p>
        <div className="hero-actions">
          <a className="btn primary" href="#projects">
            View Projects
          </a>
          <a className="btn secondary" href={site.resumeFile} target="_blank" rel="noreferrer">
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="profile" className="section-shell split-section">
      <div>
        <span className="eyebrow">About Me</span>
        <h2>Software engineering student who works from analysis to deployment.</h2>
      </div>
      <div className="about-content">
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
        eyebrow="Core Skills"
        title="Skill set for web, mobile, GIS, analysis, and deployment."
        body="Bagian ini dibuat sebagai ringkasan kemampuan teknis dan non-teknis yang bisa langsung dibaca recruiter atau calon mitra project."
      />
      <div className="skill-grid">
        {site.skills.map((skill) => (
          <article className="skill-card" key={skill.group}>
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
        eyebrow="Experience"
        title="Internship and real project exposure."
        body="Pengalaman kerja ditulis dengan fokus pada kontribusi software engineering: analisis kebutuhan, pengembangan API, frontend, database, realtime, scraping, testing, dan deployment."
      />
      <div className="experience-list">
        {site.experience.map((item) => (
          <article className="experience-card" key={item.company}>
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
        eyebrow="Selected Projects"
        title="Portfolio utama untuk menunjukkan kemampuan end-to-end."
        body="Kumpulan project yang mewakili pengalaman analisis kebutuhan, pengembangan aplikasi, database, mobile, dan WebGIS."
      />
      <div className="project-stack">
        {site.projects.map((project) => (
          <article className="project-card" key={project.title}>
            <div className="project-main">
              <div className="project-number">{project.number}</div>
              <div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <h4>{project.subtitle}</h4>
                <p>{project.overview}</p>
                <p className="outcome"><strong>Value:</strong> {project.outcome}</p>
                <div className="project-role">Role: {project.role}</div>
                <div className="chip-list small">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-media">
              <ImageSlot src={project.image} label={project.imageLabel} title={project.title} />
              <div className="project-gallery">
                {project.gallery.map((image) => (
                  <ImageSlot key={image.src} src={image.src} label={image.label} title={project.title} compact />
                ))}
              </div>
            </div>
            <div className="contribution-box">
              <h5>Main Contributions</h5>
              <ul>
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section-shell contact-section">
      <div>
        <span className="eyebrow">Contact</span>
        <h2>Let&apos;s connect and build something useful.</h2>
        <p>
          Terbuka untuk diskusi project, internship, kolaborasi, atau kesempatan software engineering lainnya.
        </p>
      </div>
      <div className="contact-card">
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
      <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
      <a href="#home">Back to top ↑</a>
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
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}
