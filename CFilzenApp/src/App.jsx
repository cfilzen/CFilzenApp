import { useEffect, useState } from 'react'

/* ====== EDIT YOUR CONTENT HERE ====== */
const PROFILE = {
  name: 'Chris Filzen',
  role: 'Senior Software Engineer',
  email: 'cfilzen@gmail.com',
    about: [
    'I am a senior software engineer who builds and maintains reliable systems on the Microsoft stack. My core is .NET, SQL, and Azure, and I care about code that is easy to run, easy to change, and easy for the next person to understand.',
    'AI has been my focus for the past year. My team uses Claude Code day to day, and I am learning where it speeds up real work, where it needs guardrails, and how to fold it into a sound engineering process.',
    'Away from the keyboard I am an outdoorsman: golf, hunting, fishing, and yardwork. I also enjoy woodworking, gaming on a rainy day, and tech videos and podcasts. I am married, a father of five, and a grandfather of three.',
  ],
  facts: [
    ['Location', 'Carrollton, GA'],
    ['Focus', '.NET, SQL, Azure'],
    ['Learning', 'AI-assisted development'],
    ['Daily tools', 'Claude Code'],
    ['Off the clock', 'Golf, hunting, fishing, woodworking'],
  ],
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/chrisfilzen/' },
    { label: 'GitHub', href: 'https://github.com/cfilzen' },
  ],
  resumePdf: '/resume.pdf', // drop your PDF in /public/resume.pdf
}
const EXPERIENCE = [
  {
    "when": "2015 – Present, Kennesaw, GA",
    "title": "Senior .NET / Core Developer",
    "org": "Aaron's, Inc.",
    "summary": "Create and maintain web and service-based applications, with an emphasis on automated continuous integration and deployment.",
    "points": [
      "Helped cut daily autopay processing time by more than 50%.",
      "Helped migrate payments between providers, including building two token conversion services needed during the transitions.",
      "Maintain and improve the backend payment gateway service, which calls the payment provider's APIs.",
      "Build new internal endpoints the business needs in the payments area, using .NET, ServiceStack, Dapper, and SQL.",
      "Help maintain the internal payments website used by support agents.",
      "Monitor autopay, the payments UI, and the backend services they call, and respond to processing issues. Write KQL queries in Application Insights.",
      "Built our Slack hooks and helped build LaunchDarkly feature-flag integrations.",
      "Build and maintain payment reporting for other teams using SQL.",
      "Completed multiple framework upgrades and regular package updates for security patches. Took part in compliance audits and handle PII with care.",
      "Run automated builds and deployments with Bitbucket, Azure Pipelines, and Octopus.",
      "Use Claude Code daily to write and improve code, and built a Slack-command tool for maintenance and outage banners."
    ]
  },
  {
    "when": "2008 – 2015, Marietta, GA",
    "title": ".NET Team Lead / Systems Specialist",
    "org": "Mohawk Industries",
    "summary": "Led requirements, design, development, and maintenance of internal and external applications and web services using Agile, while staying an active developer.",
    "points": [
      "Led internal and external development teams to meet project deliverables and deadlines.",
      "Gathered business requirements with users and turned them into technical requirements.",
      "Built a centralized payment gateway integration that tokenized card data, keeping PCI-sensitive data out of Mohawk systems.",
      "Exposed internal AS/400 and ERP systems to applications through API management (Sentinet).",
      "Built shared services: FedEx and UPS rate and return, a promotions service, an exception-logging center, and a SQL master-data repository.",
      "Delivered websites and intranet apps on Ektron CMS and .NET. The corporate site earned a silver Stevie Award (American Business Awards).",
      "Ran code reviews, technical documentation, environment setup, and SOX compliance."
    ]
  },
  {
    "when": "1997 – 2008",
    "title": "IT Consultant / .NET Developer",
    "org": "BTG Enterprises, Inc.",
    "summary": "Started in network administration and PC support, then moved into .NET development in 2005.",
    "points": [
      "Built and maintained client networks, hosting environments, and SQL Server back ends.",
      "Developed custom applications in VB and C# and wrote SQL stored procedures and scripts.",
      "Recommended system architectures based on application designs and best practices."
    ]
  }
]
const EDUCATION = [
  {
    "title": "Chattahoochee Technical College",
    "org": "Associate degree, Computer Programming"
  },
  {
    "title": "Northeastern University",
    "org": "Three years of coursework"
  }
]
const SKILLS = [
  [
    "Languages & frameworks",
    [
      "C#",
      ".NET / .NET Core",
      "ASP.NET MVC",
      "ServiceStack",
      "Dapper",
      "LINQ",
      "JavaScript",
      "jQuery",
      "Angular",
      "HTML / CSS"
    ]
  ],
  [
    "Data",
    [
      "SQL Server",
      "Stored procedures",
      "SSRS",
      "SSIS"
    ]
  ],
  [
    "Cloud & DevOps",
    [
      "Azure",
      "Kubernetes",
      "Azure Pipelines",
      "Octopus Deploy",
      "TeamCity",
      "Git",
      "GitHub",
      "Bitbucket",
      "Application Insights"
    ]
  ],
  [
    "Architecture & practice",
    [
      "Microservices",
      "web services (SOAP",
      "JSON)",
      "API management",
      "SOLID",
      "Agile"
    ]
  ],
  [
    "Payment devices",
    [
      "Ingenico Lane/7000",
      "SRED devices"
    ]
  ],
  [
    "AI",
    [
      "Claude Code"
    ]
  ]
]
const PROJECTS = [
  {
    "name": "Internal payment gateway API",
    "desc": "Backend service between our payment applications and the payment provider's APIs.",
    "tech": ".NET, ServiceStack, App Insights, Dapper, SQL"
  },
  {
    "name": "Internal payments UI backend API",
    "desc": "The API behind the internal payments website that support agents use.",
    "tech": ".NET, ServiceStack, App Insights, Dapper, SQL"
  },
  {
    "name": "Maintenance and outage banners",
    "desc": "Slack commands that show maintenance and outage banners to associates. Built with Claude Code.",
    "tech": "Slack, Claude Code"
  },
  {
    "name": "chrisfilzen.com",
    "desc": "This site, modernized with Claude.",
    "tech": "React, Vite, Azure Static Web Apps"
  }
]
const AI_NOTES = [
  "I use Claude daily to write clean, safe, efficient code and to suggest improvements to existing code.",
  "I am learning to set up repositories and skill files so Claude performs better and works more efficiently.",
  "I recently used Claude to build Slack commands that show maintenance and outage banners to associates.",
  "I keep up with the Claude docs, and formal AI courses are planned."
]
const SUMMARY = "Senior software engineer with 25+ years of experience building backend and server-side applications on .NET, SQL Server, and Azure. Recent work centers on payment systems, automated CI/CD, and AI-assisted development with Claude Code. I turn business requirements into clear technical designs, and I put a lot of weight on approachability and empathy in team work."
/* ==================================== */

const SCRIPT = [
  ['whoami', PROFILE.name],
  ['cat role.txt', PROFILE.role],
  ['echo $STATUS', 'Open to good conversations'],
]

function Terminal() {
  const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const total = SCRIPT.reduce((n, [c, o]) => n + c.length + o.length, 0)
  const [n, setN] = useState(reduce ? total : 0)
  useEffect(() => {
    if (n >= total) return
    const id = setTimeout(() => setN(n + 1), 38)
    return () => clearTimeout(id)
  }, [n, total])

  let left = n
  const rows = SCRIPT.map(([cmd, out]) => {
    const c = cmd.slice(0, Math.max(0, left)); left -= cmd.length
    const o = left > 0 ? out.slice(0, left) : ''; left -= out.length
    return { c, o, showOut: left > -out.length && c.length === cmd.length }
  })
  return (
    <div className="term" role="img" aria-label={`${PROFILE.name}, ${PROFILE.role}`}>
      <div className="term-bar"><i /><i /><i /><span>chris@filzen ~</span></div>
      <div className="term-body" aria-hidden="true">
        {rows.map((r, i) => (
          <div key={i}>
            {(r.c || i === 0) && <div className="cmd"><b>$</b> {r.c}</div>}
            {r.showOut && <div className={i === 0 ? 'out big' : 'out'}>{r.o}{n < total && <span className="caret" />}</div>}
          </div>
        ))}
        {n >= total && <div className="cmd"><b>$</b> <span className="caret" /></div>}
      </div>
    </div>
  )
}

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((x) => (
        <li key={x.title + x.when}>
          {x.when && <div className="when">{x.when}</div>}
          <h3>{x.title} <span>at {x.org}</span></h3>
          {x.summary && <p className="summ">{x.summary}</p>}
          {x.points && <ul>{x.points.map((p) => <li key={p}>{p}</li>)}</ul>}
        </li>
      ))}
    </ol>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => document.documentElement.dataset.theme || 'dark')
  const [imgOk, setImgOk] = useState(true)
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  return (
    <>
      <header className="nav">
        <a href="#top" className="logo">cf</a>
        <nav aria-label="Main">
          <a href="#about">About</a><a href="#projects">Projects</a><a href="#resume">Resume</a><a href="#contact">Contact</a>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap"><Terminal /></section>

        <section id="about" className="wrap about">
          <div>
            <h2>About</h2>
            {PROFILE.about.map((p) => <p key={p}>{p}</p>)}
            <dl>{PROFILE.facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          </div>
          <div className="photo">
            {imgOk
              ? <img src="/headshot.jpg" alt={`Portrait of ${PROFILE.name}`} onError={() => setImgOk(false)} />
              : <div className="ph" aria-hidden="true">CF</div>}
          </div>
        </section>

        <section id="projects" className="wrap">
          <h2>Projects</h2>
          <ul className="projects">
            {PROJECTS.map((p) => (
              <li key={p.name}><h3>{p.name}</h3><p>{p.desc}</p><p className="tech">{p.tech}</p></li>
            ))}
          </ul>
          <h3 className="sub">Working with AI</h3>
          <ul className="ai">{AI_NOTES.map((n) => <li key={n}>{n}</li>)}</ul>
        </section>

        <section id="resume" className="wrap">
          <h2>Resume</h2>
          <p className="lead">{SUMMARY}</p>
          <h3 className="sub">Experience</h3><Timeline items={EXPERIENCE} />
          <h3 className="sub">Education</h3><Timeline items={EDUCATION} />
          <h3 className="sub">Skills</h3>
          {SKILLS.map(([g, items]) => (
            <div className="skillrow" key={g}><h4>{g}</h4><ul className="chips">{items.map((i) => <li key={i}>{i}</li>)}</ul></div>
          ))}
          <a className="btn" href={PROFILE.resumePdf} download>Download resume (PDF)</a>
        </section>

        <section id="contact" className="wrap contact">
          <h2>Contact</h2>
          <p>The best way to reach me is email. I am based in Carrollton, GA.</p>
          <a className="btn primary" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
          {PROFILE.links.length > 0 && <p className="links">{PROFILE.links.map((l) => <a key={l.href} href={l.href} rel="noopener">{l.label}</a>)}</p>}
        </section>
      </main>
      <footer className="wrap foot">© {new Date().getFullYear()} {PROFILE.name}</footer>
    </>
  )
}
