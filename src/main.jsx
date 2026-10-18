import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowDown, ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, ChevronRight, Code2, Database, Download, ExternalLink, Github, GraduationCap, Award, BarChart3, ClipboardCheck, FileSpreadsheet, TrendingUp, Layers3, Linkedin, Mail, Menu, Moon, ShieldCheck, Sparkles, Sun, X } from 'lucide-react'
import './styles.css'

const projects = [
  {
    id: 'douen', images: ['/projects/douen-1.png'], number: '01', category: 'Machine Learning · Cybersecurity', title: 'Douen', subtitle: 'AI-powered security operations analytics',
    description: 'An ensemble-based security analytics pipeline for 2.8M CICIDS2017 network flows, with supervised intrusion detection, anomaly identification and correlated alert visualizations.',
    tags: ['Python', 'Machine Learning', 'Polars', 'DuckDB', 'Streamlit'],
    github: 'https://github.com/182bry/Douen',
    accent: 'violet', symbol: '◈',
    details: ['Analyzed 2.8 million CICIDS2017 network-flow records spanning 14 attack categories in a four-person university team.', 'The final ensemble achieved a reported weighted F1 of 0.9982; SQL injection F1 improved from 0.20 to 0.50 compared with the general model.', 'A demonstration reduced 5,000 raw alerts to 215 correlated events (95.7% reduction), with six Streamlit dashboard panels for investigation.', 'Used XGBoost, Random Forest, CTGAN and Isolation Forest; the report discusses rare-class and temporal-split limitations.'],
    note: 'Four-person university team project. Results are from the project report, not an independently validated production deployment. Team contributions are credited collectively.'
  },
  {
    id: 'taxi', images: ['/projects/taxi-1.png', '/projects/taxi-2.png'], number: '02', category: 'Data Science · MLOps', title: 'NYC Taxi Analytics & Prediction', subtitle: 'From machine learning experiments to an API',
    description: 'A machine learning workflow for taxi trip prediction, bringing together model development, evaluation, experiment tracking and an API.',
    tags: ['Python', 'Random Forest', 'MLflow', 'FastAPI', 'Docker'],
    github: 'https://github.com/182bry/COMP3610A4',
    accent: 'blue', symbol: '⌁',
    details: ['Developed and evaluated predictive modelling approaches using NYC taxi data.', 'Explored experiment tracking and exposing model predictions through an API.', 'Focused on making the machine learning workflow more reproducible and deployable.'],
    note: 'Exact metrics and implementation details should be cross-checked with the repository before publishing.'
  },
  {
    id: 'internship', images: ['/projects/internship-1.png'], number: '03', category: 'Software Engineering · Web', title: 'Techtonic Internship Platform', subtitle: 'A role-based recruitment workflow',
    description: 'A team software engineering project exploring a structured workflow for internship listings, applicants and shortlisting decisions.',
    tags: ['Flask', 'Python', 'REST APIs', 'Testing', 'Team Project'],
    github: 'https://github.com/COMP3613FinalProject/SWEN-2-PROJECT',
    accent: 'mint', symbol: '⌘',
    details: ['Modelled workflows for student, staff and employer roles.', 'Worked within a team software engineering process.', 'Explored backend application design, role-based access and testing.'],
    note: 'Team project. Features are described as team work.'
  },
  {
    id: 'snackbox', images: ['/projects/snackbox-1.png', '/projects/snackbox-2.png', '/projects/snackbox-3.png', '/projects/snackbox-4.png', '/projects/snackbox-5.png', '/projects/snackbox-6.png'], number: '04', category: 'E-Commerce · Web Systems', title: 'SnackBox TT', subtitle: 'Caribbean commerce, thoughtfully designed',
    description: 'An academic e-commerce platform for Caribbean snacks, curated subscription boxes and corporate hampers, with a business model spanning B2C and B2B.',
    tags: ['WordPress', 'WooCommerce', 'MySQL', 'Cloud Hosting'],
    github: null,
    accent: 'peach', symbol: '✳',
    details: ['Designed a commerce experience featuring a product catalogue, shopping cart and checkout flow.', 'Documented a three-tier architecture using WordPress, WooCommerce and MySQL.', 'Explored subscriptions, corporate ordering, payment options and platform security.'],
    note: 'Based on the INFO3608 project report. A public live demo has not been provided.'
  }
]

const professionalProjects = [
  { icon: BarChart3, name: 'PriceSmart Sales Intelligence', label: 'Dashboard automation · Commercial analytics', metric: '4 locations · 5 business lines', description: 'Developed an Excel-based reporting system with SKU-level sales and volume comparisons, monthly and YTD/YoY views, product performance classifications, and management-ready KPI dashboards.', tools: ['Excel', 'Power Query', 'PivotTables', 'XLOOKUP'] },
  { icon: ClipboardCheck, name: 'Product Availability Monitoring', label: 'Operational analytics · Exception reporting', metric: '4 weekly reporting periods', description: 'Consolidated weekly store availability reports to distinguish persistent and recurring gaps from temporary issues, helping prioritize products for review.', tools: ['Excel', 'Data Cleaning', 'Trend Analysis'] },
  { icon: FileSpreadsheet, name: 'Accounts Receivable Aging Analysis', label: 'Data reconciliation · Reporting workflow', metric: 'Account-to-store mapping', description: 'Worked on mapping customer account codes to individual retail locations and developing pivot-based views of aging balances. Validation and source reconciliation were part of the work.', tools: ['Excel', 'XLOOKUP', 'PivotTables', 'Reconciliation'] },
  { icon: TrendingUp, name: 'Forecasting & Commercial Planning', label: 'Variance analysis · Executive reporting', metric: 'SKU-level comparisons', description: 'Compared sales projections with actual performance, investigated product-level variances, and prepared analysis to support commercial reviews and promotional planning.', tools: ['Excel', 'Forecast Analysis', 'Reporting'] }
]

const skills = [
  { label: 'Data & Analytics', items: ['Python', 'SQL', 'Excel', 'Power Query', 'PivotTables', 'Data Visualization'] },
  { label: 'Machine Learning', items: ['Random Forest', 'XGBoost', 'Feature Engineering', 'Model Evaluation', 'MLflow'] },
  { label: 'Development & Tools', items: ['Java', 'C++', 'Flask', 'FastAPI', 'Git / GitHub', 'Streamlit', 'DuckDB', 'Polars'] }
]

function App() {
  const [theme, setTheme] = useState(() => { try { return localStorage.getItem('bj-theme') || 'light' } catch { return 'light' } })
  const [selected, setSelected] = useState(null)
  const [menu, setMenu] = useState(false)
  const [copied, setCopied] = useState(false)
  useEffect(() => { document.documentElement.dataset.theme = theme; try { localStorage.setItem('bj-theme', theme) } catch {} }, [theme])
  useEffect(() => { document.body.style.overflow = selected ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [selected])
  const toggleTheme = () => setTheme(t => t === 'light' ? 'dark' : 'light')
  const closeMenu = () => setMenu(false)
  const copyEmail = async () => { try { await navigator.clipboard.writeText('bryannajodha@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 1700) } catch { window.location.href = 'mailto:bryannajodha@gmail.com' } }
  return <>
    <div className="ambient ambient-a"/><div className="ambient ambient-b"/>
    <header className="site-header"><div className="container nav-wrap">
      <a href="#home" className="brand" onClick={closeMenu}>bj<span>.</span></a>
      <nav className={menu ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {[['About','#about'],['Projects','#projects'],['Experience','#experience'],['Skills','#skills']].map(([label,href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15}/></a>
      </nav>
      <div className="nav-actions"><button className="icon-button theme-button" aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'} title="Toggle color theme" onClick={toggleTheme}>{theme === 'light' ? <Moon size={19}/> : <Sun size={19}/>}</button><button className="icon-button mobile-menu" aria-label="Toggle navigation" onClick={() => setMenu(v => !v)}>{menu ? <X size={22}/> : <Menu size={22}/>}</button></div>
    </div></header>

    <main>
      <section id="home" className="hero container">
        <div className="hero-copy"><div className="eyebrow"><span className="status-dot"/> OPEN TO DATA & TECHNOLOGY OPPORTUNITIES</div>
          <p className="hello">Hello, I'm</p><h1>Bryanna<br/><span>Jodha.</span></h1>
          <p className="hero-lead">I turn <strong>complex data</strong> into clear insights and build technology that solves real problems.</p>
          <p className="hero-description">Computer Science graduate with a passion for data analytics, machine learning, business intelligence and thoughtfully built software.</p>
          <div className="hero-actions"><a className="btn btn-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="btn btn-outline" href="https://github.com/182bry" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a><a className="btn btn-outline" href="/BryannaJodhaResume.docx" download><Download size={17}/> Résumé</a></div>
          <div className="hero-bottom"><span><span className="tiny-square"/> Based in Trinidad & Tobago</span><a href="#about">Scroll to discover <ArrowDown size={14}/></a></div>
        </div>
        <div className="hero-art" aria-label="Abstract data visualization illustration"><div className="art-grid"/><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-center"><div className="art-center-icon"><Database size={34} strokeWidth={1.4}/></div><span>DATA × DESIGN</span></div><div className="floating-card card-one"><span className="mini-icon"><Code2 size={17}/></span><div><small>Building with</small><strong>Python + SQL</strong></div></div><div className="floating-card card-two"><span className="mini-icon purple"><Sparkles size={17}/></span><div><small>Exploring</small><strong>AI & Analytics</strong></div></div><div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div></div>
      </section>

      <section id="about" className="section container about-section"><div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>A little about <em>me.</em></h2></div><div className="about-grid"><div className="about-main"><p>I'm a Computer Science graduate from <strong>The University of the West Indies</strong>, where I earned <strong>First Class Honours</strong>.</p><p>My interests sit at the intersection of technology and business: making sense of messy datasets, designing useful analytical tools, and building systems that help people make better decisions.</p><p>At AMCO, part of the ANSA McAL Group, I've applied those skills to commercial analytics, automated Excel reporting and performance dashboards. My academic work spans machine learning, cybersecurity, software engineering and e-commerce.</p></div><div className="about-aside"><div className="stat"><strong>First Class</strong><span>BSc Computer Science</span></div><div className="stat"><strong>4+</strong><span>University projects to explore</span></div><div className="stat"><strong>2026</strong><span>Degree awarded</span></div></div></div></section>

      <section id="projects" className="section projects-section"><div className="container"><div className="section-heading split-heading"><div><span className="section-index">02 / SELECTED WORK</span><h2>Projects with <em>purpose.</em></h2></div><p>From predictive models to practical web systems, here's a selection of the problems I've explored and the tools I've used to solve them.</p></div><div className="project-grid">{projects.map(p => <article key={p.id} className={`project-card ${p.accent}`}><div className="project-art project-art-photo"><img src={p.images[0]} alt={`${p.title} actual project screenshot`} loading="lazy"/><span className="project-number">{p.number} / 04</span><span className="project-art-caption">PROJECT SCREENSHOT</span></div><div className="project-body"><div className="project-category">{p.category}</div><h3>{p.title}</h3><p className="project-subtitle">{p.subtitle}</p><p className="project-desc">{p.description}</p><div className="tags">{p.tags.slice(0,4).map(t => <span key={t}>{t}</span>)}</div><button className="project-link" onClick={() => setSelected(p)}>View case study <ArrowUpRight size={17}/></button></div></article>)}</div><div className="github-banner"><div><Github size={22}/><span>More experiments, coursework and code on GitHub.</span></div><a href="https://github.com/182bry" target="_blank" rel="noreferrer">Visit GitHub <ArrowUpRight size={16}/></a></div></div></section>

      <section id="experience" className="section container"><div className="section-heading"><span className="section-index">03 / EXPERIENCE</span><h2>Where data meets <em>business.</em></h2></div><div className="experience-card"><div className="experience-top"><div className="experience-icon"><BriefcaseBusiness size={25}/></div><div><h3>Sales Coordinator Intern <span>· Key Accounts</span></h3><p>Alstons Marketing Company Limited (AMCO) · ANSA McAL Group</p></div><span className="experience-date">2025–2026 · Multiple internship periods</span></div><div className="experience-content"><p>Built analytical tools and management reporting to make commercial performance easier to understand and act on.</p><ul><li>Designed and automated a PriceSmart sales tracker covering <strong>4 retail locations and 5 business lines</strong>, with SKU-level, YTD and YoY reporting.</li><li>Analyzed sales and volume performance to identify product trends, underperformers and commercial opportunities.</li><li>Developed recurring availability analyses and KPI dashboards using Excel, Power Query, PivotTables and advanced formulas.</li><li>Translated business requirements into reports, presentations and actionable insights for Key Accounts stakeholders.</li></ul><div className="professional-work"><div className="professional-work-heading"><span className="section-index">SELECTED PROFESSIONAL WORK</span><h4>Analytics projects at AMCO</h4><p>Examples of the reporting systems and business problems I worked on.</p></div><div className="professional-grid">{professionalProjects.map(project => <article className="professional-card" key={project.name}><div className="professional-card-top"><span className="professional-icon"><project.icon size={21}/></span><span className="professional-metric">{project.metric}</span></div><span className="professional-label">{project.label}</span><h5>{project.name}</h5><p>{project.description}</p><div className="tags">{project.tools.map(tool=><span key={tool}>{tool}</span>)}</div></article>)}</div></div><p className="confidentiality"><ShieldCheck size={16}/> These summaries describe professional work only. Confidential company data and proprietary dashboards are not published; any future demos will use synthetic data.</p></div></div></section>

      <section id="skills" className="section skills-section"><div className="container"><div className="section-heading"><span className="section-index">04 / TOOLKIT</span><h2>Tools of the <em>trade.</em></h2></div><div className="skills-grid">{skills.map((s,i) => <div className="skill-card" key={s.label}><div className="skill-card-title"><span className="skill-icon">{i===0?<Database size={22}/>:i===1?<Sparkles size={22}/>:<Layers3 size={22}/>}</span><h3>{s.label}</h3></div><div className="skill-pills">{s.items.map(t=><span key={t}>{t}</span>)}</div></div>)}</div></div></section>

      <section className="section container education-section"><div className="section-heading"><span className="section-index">05 / EDUCATION</span><h2>Built on <em>curiosity.</em></h2></div><div className="education-card"><GraduationCap size={28}/><div><h3>The University of the West Indies</h3><p>BSc Computer Science · First Class Honours</p><span>Dean's Honour Roll · Degree awarded July 2026</span></div><span className="edu-year">2023—2026</span></div><div className="education-card certificate-card"><Award size={28}/><div><h3>Google Data Analytics Professional Certificate</h3><p>Google · Professional Certificate</p><span>Data cleaning, analysis, visualization and communicating insights</span></div><span className="edu-year">May 2025</span></div></section>

      <section id="contact" className="contact-section"><div className="container contact-inner"><span className="section-index">06 / SAY HELLO</span><h2>Have a project in mind?<br/><em>Let's connect.</em></h2><p>I'm always interested in meaningful conversations about data, technology and opportunities to learn and contribute.</p><div className="contact-actions"><a className="btn btn-light" href="mailto:bryannajodha@gmail.com">Send me an email <ArrowUpRight size={18}/></a><button className="btn btn-ghost" onClick={copyEmail}>{copied ? <Check size={17}/> : <Mail size={17}/>} {copied ? 'Email copied!' : 'Copy email'}</button></div><div className="contact-links"><a href="https://github.com/182bry" target="_blank" rel="noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/bryanna-jodha-5ab6363aa/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn <ArrowUpRight size={14}/></a></div></div></section>
    </main>
    <footer><div className="container footer-inner"><a href="#home" className="brand">bj<span>.</span></a><span>© {new Date().getFullYear()} Bryanna Jodha · Built with React</span><a href="#home">Back to top ↑</a></div></footer>
    {selected && <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) setSelected(null) }} role="presentation"><div className="modal" role="dialog" aria-modal="true" aria-labelledby="case-title"><button className="modal-close icon-button" onClick={() => setSelected(null)} aria-label="Close project details"><X size={22}/></button><span className="section-index">PROJECT / {selected.number}</span><h2 id="case-title">{selected.title}</h2><p className="modal-subtitle">{selected.subtitle}</p><div className="project-gallery">{selected.images.map((src,i)=><figure key={src}><img src={src} alt={`${selected.title} screenshot ${i+1}`} loading="lazy"/><figcaption>{selected.title} · {i===0 ? "Project overview" : `Screen ${i+1}`}</figcaption></figure>)}</div><h3>Overview</h3><p>{selected.description}</p><h3>Project highlights</h3><ul>{selected.details.map(d=><li key={d}>{d}</li>)}</ul><h3>Technologies</h3><div className="tags">{selected.tags.map(t=><span key={t}>{t}</span>)}</div><p className="project-note">{selected.note}</p>{selected.github ? <a className="btn btn-primary modal-github" href={selected.github} target="_blank" rel="noreferrer"><Github size={17}/> View source on GitHub <ExternalLink size={15}/></a> : <p className="no-link">Project documentation available upon request.</p>}</div></div>}
  </>
}

createRoot(document.getElementById('root')).render(<App />)
