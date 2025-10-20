// pages/cv.js
import Head from "next/head"

export default function CV() {
  
  const technologies = [
    "JavaScript ES6+","TypeScript","React.js","Next.js","Vite","MySQL","SupaBase",
    "Tailwind CSS","Astro","HTML5 & CSS3","Framer Motion","Git","SEO","Accesibilidad",
    "Optimización Web","Responsive Design",
  ]
  const tools = [
    "GitHub","VS Code","Figma","Deploy/Vercel/Netlify","Chrome DevTools","Google ADS",
    "GIMP","Inkscape","CapCut","TexturePackerGUI","AI Tools","Cubase",
    "AI Powered Development","Bash","PowerShell",
  ]
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Proyectos Freelance",
      period: "2023 – Presente",
      points: [
        "Desarrollo de aplicaciones web con React/Next.js y Tailwind.",
        "Optimización de rendimiento (Lighthouse, Core Web Vitals) y accesibilidad.",
        "Integración con APIs, SSR/SSG y despliegues en Vercel.",
      ],
    },
    {
      title: "Desarrollador Web (Freelance)",
      company: "Proyectos para clientes",
      period: "2022 – Presente",
      points: [
        "Landing pages y sitios corporativos con foco en UX/UI.",
        "Animaciones con Framer Motion y componentes reutilizables.",
        "Automatizaciones ligeras con IA para mejorar productividad.",
      ],
    },
    {
      title: "Técnico de Software & Producción Digital",
      company: "Litocopias.com · El Vigía (VE)",
      period: "2012 – 2016",
      points: [
        "Instalación y configuración de sistemas Windows y software especializado.",
        "Soporte a usuarios, mantenimiento y optimización de equipos.",
        "Diseño y edición de material gráfico y académico.",
      ],
    },
    {
      title: "Técnico de Sistemas Informáticos",
      company: "TDH Studios · Mérida (VE)",
      period: "2010 – 2012",
      points: [
        "Mantenimiento y soporte de equipos y redes.",
        "Colaboración en producción audiovisual y diseño.",
      ],
    },
  ]
  const education = [
    { title: "Desarrollo Web Frontend", institution: "Autodidacta — Cursos Online", period: "2020 – Presente" },
    { title: "Pedagogía en Lenguajes", institution: "UPEL", period: "2013 – 2016" },
    { title: "Téc. Mantenimiento de Equipos Informáticos", institution: "INCE", period: "2010 – 2013" },
  ]
  const diplomas = [
    "Iniciación a HTML, CSS y JS — Centro de Desarrollo de Competencias Digitales C-LM",
    "Fundamentos de Ingeniería de Software — Platzi",
    "Diseño y Programación Web — AIEP / Fundación Telefónica Movistar / SENCE",
    "Programación con JavaScript — AIEP / Fundación Telefónica Movistar / SENCE",
    "Diseño Web con HTML5+CSS — AIEP / Fundación Telefónica Movistar / SENCE",
    "Fundamentos de Ciberseguridad — Google (Coursera)",
  ]

  const name = "Maurizio Caballero"
  const role = "Frontend Developer · Analista de Datos"
  const location = "Santiago, Chile (Remoto / Híbrido)"
  const email = "livemauriz@gmail.com"
  const website = "maurizio.dev"
  const github = "github.com/Mauriizio"
  const linkedin = "linkedin.com/in/maurizio-caballero-286a56219"

  return (
    <>
      <Head>
        <title>{name} — CV</title>
        <meta name="robots" content="noindex,nofollow"/>
      </Head>

      {/* Contenedor A4 centrado (ver estilos abajo en globals.css) */}
      <main className="cv-page">
        {/* Header */}
        <header className="cv-header">
          <h1 className="cv-name">{name}</h1>
          <p className="cv-role">{role}</p>
          <p className="cv-meta">
            {location} · <a href={`mailto:${email}`}>{email}</a> · <a href={`https://${website}`} target="_blank" rel="noreferrer">{website}</a>
          </p>
          <p className="cv-meta">
            <a href={`https://${github}`} target="_blank" rel="noreferrer">{github}</a> ·{" "}
            <a href={`https://${linkedin}`} target="_blank" rel="noreferrer">{linkedin}</a>
          </p>
          <p className="cv-meta">Telefono: +569 23927777</p>
          
        </header>

        {/* Bloque 2 columnas: Tecnologías / Herramientas */}
        <section className="cv-grid-2">
          <div>
            <h2 className="cv-h2">Tecnologías</h2>
            <ul className="cv-chips">
              {technologies.map((t) => (<li key={t} className="cv-chip">{t}</li>))}
            </ul>
          </div>
          <div>
            <h2 className="cv-h2">Herramientas</h2>
            <ul className="cv-chips">
              {tools.map((t) => (<li key={t} className="cv-chip">{t}</li>))}
            </ul>
          </div>
        </section>

        {/* Experiencia */}
        <section className="cv-section">
          <h2 className="cv-h2">Experiencia</h2>
          {experiences.map((e, i) => (
            <article key={i} className="cv-item">
              <div className="cv-item-head">
                <h3 className="cv-h3">{e.title}</h3>
                <span className="cv-period">{e.period}</span>
              </div>
              <p className="cv-company">{e.company}</p>
              <ul className="cv-ul">
                {e.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </article>
          ))}
        </section>

        {/* Educación & Certificaciones en 2 columnas */}
        <section className="cv-grid-2">
          <div>
            <h2 className="cv-h2">Educación</h2>
            {education.map((ed, i) => (
              <div key={i} className="cv-item-slim">
                <div className="cv-item-head">
                  <h3 className="cv-h3">{ed.title}</h3>
                  <span className="cv-period">{ed.period}</span>
                </div>
                <p className="cv-company">{ed.institution}</p>
              </div>
            ))}
          </div>
          <div>
            <h2 className="cv-h2">Certificaciones</h2>
            <ul className="cv-ul tight">
              {diplomas.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </div>
        </section>

        {/* Botón imprimir (oculto en PDF) */}
        <div className="cv-actions no-print">
          <button onClick={() => window.print()} className="cv-btn">Descargar PDF</button>
        </div>
      </main>
    </>
  )
}
