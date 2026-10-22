import { useEffect, useRef, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "@fontsource/geist-sans/400.css"
import "@fontsource/geist-sans/500.css"
import "@fontsource/geist-sans/600.css"
import "@fontsource/geist-mono/400.css"
import "@fontsource/geist-mono/500.css"
import "@fontsource/schoolbell"
import "@fontsource/kalam/400.css"
import "@fontsource/kalam/700.css"
import "./paper.css"
import { Terminal } from "./Terminal"
import { useSendReviewMutation } from "../store/api"
import { experienceData } from "../component/experienceData"
import profileimage from "../assets/profile picture.jpg"
import collegemigration from "../assets/collagemigration.png"
import tedcillion from "../assets/tedcillion.png"
import realestate from "../assets/realestate.png"
import techwavehost from "../assets/techwavehost.png"
import elandlord from "../assets/e-landlord.png"
import logo from "../assets/logo2.png"

const ELANDLORD_IMAGE = elandlord

const NAV = [
  ["Work", "#work"],
  ["How I ship", "#ship"],
  ["Experience", "#experience"],
  ["Contact", "#contact"],
]

const CORE = [
  {
    tag: "Founder",
    title: "e-landlord",
    sub: "Property management · Nigeria",
    problem: "Renting in Nigeria runs on agents, cash and paperwork. Tenants overpay fees, landlords chase rent.",
    desc: "e-landlord connects landlords and tenants directly. Landlords list homes, track rent and manage tenants. Tenants find a place, pay and report repairs, without the middlemen.",
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "GitHub Actions", "Vercel"],
    link: "https://e-landlord.com.ng",
    linkLabel: "Visit e-landlord.com.ng",
    image: ELANDLORD_IMAGE,
    caption: "e-landlord.com.ng",
    r: "-2.5deg",
  },
  {
    tag: "Core project",
    title: "Immigration Student Dashboard",
    sub: "Study abroad · Students",
    problem: "Students applying abroad juggle emails, documents and visa deadlines with no single view of progress.",
    desc: "One dashboard where students track applications, documents, programmes and visa milestones, plus a public site to discover programmes and get guidance.",
    stack: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "REST API", "Vercel"],
    link: "https://collegemigrationmain.vercel.app",
    linkLabel: "View live project",
    image: collegemigration,
    caption: "student dashboard",
    r: "2deg",
  },
]

const OTHER_WORK = [
  { title: "Tedcillion", desc: "Booking and guidance for travel, study and work permits.", link: "https://www.tedcillionservices.com/", img: tedcillion },
  { title: "Xlens Studio", desc: "Galleries and virtual tours for an architecture studio.", link: "https://xlensstudio.onrender.com", img: realestate },
  { title: "Techwavehost", desc: "Hosting, domains and email for small businesses.", link: "https://techwavehost.com/", img: techwavehost },
]

const PIPELINE = [
  ["Code", "React, Next.js and Node, reviewed through Git pull requests."],
  ["Test", "GitHub Actions runs lint and tests on every push."],
  ["Build", "Docker images give the same build everywhere."],
  ["Preview", "Vercel preview links for every branch."],
  ["Ship", "Merging to main deploys to production automatically."],
]

const TOOLBOX = [
  ["Frontend", ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"]],
  ["Backend", ["Node.js", "Express", "PHP / Laravel", "PostgreSQL", "MySQL"]],
  ["DevOps", ["Docker", "GitHub Actions", "Vercel CI/CD", "Git / GitHub"]],
  ["Product", ["User research", "Figma", "System design", "Performance"]],
]

const useReveal = () => {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target) }
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Scroll speed raises the swing amplitude (--amp) of every hanging card, then it settles.
// Writes a CSS variable directly, so React never re-renders while scrolling.
const useScrollJolt = (ref) => {
  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    let last = window.scrollY, amp = 1.6, raf
    const tick = () => {
      const y = window.scrollY
      const v = Math.min(Math.abs(y - last), 80)
      last = y
      amp = Math.max(1.6, Math.min(10, amp * 0.94 + v * 0.12))
      el.style.setProperty("--amp", amp.toFixed(2))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [ref])
}

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="wrap">
        <div className="nav-in">
          <a href="#top" className="brand" aria-label="Hincas, home"><img className="brand-logo" src={logo} alt="Hincas logo" /></a>
          <nav className="nav-links">
            {NAV.map(([l, h]) => <a key={h} href={h}>{l}</a>)}
          </nav>
          <a href="/Ologungba Olajide.pdf" target="_blank" rel="noopener noreferrer" className="btn ghost">Résumé</a>
          <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open}>{open ? "CLOSE" : "MENU"}</button>
        </div>
        {open && (
          <div className="mobile-menu">
            {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
            <a href="/Ologungba Olajide.pdf" target="_blank" rel="noopener noreferrer">Résumé</a>
          </div>
        )}
      </div>
    </header>
  )
}

const HEADLINE = "I build products that solve everyday problems.".split("  ")

const HANGING = [
  { cls: "me", img: profileimage, cap: "that's me", x: "8%", y: "40px", r: "-3deg", dur: "3.4s", delay: "0s", in: ".5s" },
  { cls: "house", img: ELANDLORD_IMAGE, cap: "e-landlord", x: "52%", y: "52px", r: "3deg", dur: "4s", delay: "-1.2s", in: ".8s" },
]

const CODE_BG = `import { Landlord, Tenant } from "@e-landlord/core"

export async function listProperty(landlord, data) {
  const property = await db.property.create({ data })
  await notify(landlord, "Property is live")
  return property
}

// CI: lint -> test -> docker build -> vercel deploy
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm ci && npm test
      - run: docker build -t e-landlord .

FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci --omit=dev
CMD ["node", "server.js"]

const student = await dashboard.track({
  applications: true,
  visa: "in-progress",
})

if (problem.isReal) build(solution)
git commit -m "ship it"
git push origin main`

const Hero = () => (
  <section className="hero" id="top">
    <div className="wrap hero-grid">
      <div>
        <span className="mono">Founder · Full-stack developer</span>
       
        <h1>
          {HEADLINE.map((w, i) => (
            <span key={i} className={`word ${w === "solve" ? "scribble ink" : ""}`} style={{ "--i": i }}>{w}{" "}</span>
          ))}
        </h1>
        <p>Founder of e-landlord.com.ng<span className="hero-sticker">live</span><br />I turn real problems people face into simple, working software.</p>
        <div className="hero-cta">
          <a href="#work" className="btn">See my products</a>
          <a href="#contact" className="btn ghost">Say hello</a>
        </div>
      </div>
      <div className="line-stage" aria-hidden="true">
        <svg className="rope" viewBox="0 0 600 90" preserveAspectRatio="none">
          <path d="M0 10 Q 300 80 600 18" />
        </svg>
        {HANGING.map((h) => (
          <div key={h.cap} className={`hang ${h.cls}`} style={{ "--w": h.w, "--x": h.x, "--y": h.y, "--in": h.in }}>
            <figure className="polaroid swing" style={{ "--r": h.r, "--dur": h.dur, "--delay": h.delay }}>
              <span className="pin" />
              {h.img
                ? <img src={h.img} alt="" />
                : <div className="slot"><div><b>e-landlord</b><span className="mono">.com.ng</span></div></div>}
              <figcaption>{h.cap}</figcaption>
            </figure>
          </div>
        ))}
        <Terminal />
      </div>
    </div>
  </section>
)

const Ticker = () => {
  const items = ["Rent without middlemen", "Students track visas in one place", "Docker", "GitHub Actions", "Vercel CI/CD", "Built in Lagos for everyone"]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...items, ...items].map((t, i) => <span key={i}>{t} <b>✳</b></span>)}
      </div>
    </div>
  )
}

const Work = () => (
  <section className="section" id="work">
    <div className="wrap">
      <h2 className="sec-title reveal">Problems I&apos;m <span className="ink">solving</span>.</h2>
      {CORE.map((c, i) => (
        <article key={c.title} className={`case ${i % 2 ? "flip" : ""}`}>
          <a href={c.link} target="_blank" rel="noopener noreferrer" className="case-media polaroid swing" style={{ "--r": c.r, "--dur": i ? "4.2s" : "3.6s", "--delay": i ? "-1s" : "0s" }}>
            <span className="pin" />
            {c.image
              ? <img src={c.image} alt={c.title} />
              : <div className="slot"><div><b>e-landlord.com.ng</b><span className="mono">Rent directly, no middlemen</span></div></div>}
            <figcaption>{c.caption}</figcaption>
          </a>
          <div className="reveal">
            <span className="dashed-tag">{c.tag}</span>
            <h3>{c.title}</h3>
            <div className="mono sub">{c.sub}</div>
            <p><strong className="accent">The problem:</strong> {c.problem}</p>
            <p>{c.desc}</p>
            <div className="stack">{c.stack.map((s) => <span key={s}>{s}</span>)}</div>
            <div className="case-links">
              <a href={c.link} target="_blank" rel="noopener noreferrer" className="ink-link" style={{ fontSize: 22 }}>{c.linkLabel} ↗</a>
            </div>
          </div>
        </article>
      ))}

      <h2 className="sec-title reveal" style={{ fontSize: "clamp(32px,3.6vw,48px)", marginTop: 48 }}>Also built for clients</h2>
      <div className="notes">
        {OTHER_WORK.map((w, i) => (
          <a key={w.title} href={w.link} target="_blank" rel="noopener noreferrer" className="note swing" style={{ "--dur": `${3.4 + i * 0.5}s`, "--delay": `${-i * 0.7}s` }}>
            <span className="tape" />
            <img src={w.img} alt={w.title} loading="lazy" />
            <h4>{w.title}</h4>
            <p>{w.desc}</p>
            <span className="ink-link">Open site ↗</span>
          </a>
        ))}
      </div>
    </div>
  </section>
)

const Ship = () => (
  <section className="section" id="ship">
    <div className="wrap">
      <h2 className="sec-title reveal">From idea to <span className="ink">live product</span>.</h2>
      <div className="torn reveal">
                <div className="pipeline">
          {PIPELINE.map(([t, d], i) => (
            <div key={t} className="pipe">
              <h5>{t}{i < PIPELINE.length - 1 && <span> →</span>}</h5>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="toolbox reveal">
        {TOOLBOX.map(([h, list]) => (
          <div key={h}>
            <h6 className="mono">{h}</h6>
            <ul>{list.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Experience = () => (
  <section className="section" id="experience">
    <div className="wrap">
      <h2 className="sec-title reveal">Where I&apos;ve <span className="ink">worked</span>.</h2>
      <div className="xp-list">
        <div className="xp reveal">
          <span className="mono">Present</span>
          <div>
            <h4>e-landlord</h4>
            <div className="role">Founder · Lagos</div>
            <ul>
              <li>Founded a platform that lets landlords and tenants rent directly.</li>
              <li>Lead product design, frontend, APIs, database and infrastructure.</li>
              <li>Ship with Docker, GitHub Actions and Vercel CI/CD.</li>
            </ul>
          </div>
        </div>
        {experienceData.map((x) => (
          <div key={x.companyname} className="xp reveal">
            <span className="mono">{x.duration.replace(/[–—]/g, "-")}</span>
            <div>
              <div className="head">
                <img src={x.logo} alt="" />
                <div>
                  <h4>{x.companyname}</h4>
                  <div className="role">{x.position.trim()}, {x.location.trim()}</div>
                </div>
              </div>
              <ul>{x.about.map((a, i) => <li key={i}>{a.descrip}</li>)}</ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const EMPTY = { firstName: "", email: "", subject: "", message: "" }

const Contact = () => {
  const [sendReview, { isLoading }] = useSendReviewMutation()
  const [form, setForm] = useState(EMPTY)
  const [err, setErr] = useState("")
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErr("")
    try {
      await sendReview(form).unwrap()
      toast.success("Message sent. I'll reply soon.")
      setForm(EMPTY)
    } catch {
      setErr("Your message didn't send. Please try again, or reach me on WhatsApp.")
    }
  }

  return (
    <section className="section" id="contact">
      <div className="wrap contact-grid">
        <div className="reveal">
          <span className="mono">Say hello</span>
          <p className="contact-big">
            Tell me the problem you want solved. I&apos;ll tell you <span className="ink-link">straight</span> how software can help.
          </p>
          <div className="contact-links">
            <a className="ink-link" href="https://github.com/Hollajay" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            <a className="ink-link" href="https://www.linkedin.com/in/ologunagba-olajide-786b94307" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a className="ink-link" href="https://wa.me/+2348119923671" target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
          </div>
        </div>
        <form className="form-card reveal" style={{ "--r": ".6deg" }} onSubmit={handleSubmit}>
          <span className="tape" />
          <div className="field"><label className="mono" htmlFor="f-name">Name</label><input id="f-name" required value={form.firstName} onChange={set("firstName")} /></div>
          <div className="field"><label className="mono" htmlFor="f-email">Email</label><input id="f-email" required type="email" value={form.email} onChange={set("email")} /></div>
          <div className="field"><label className="mono" htmlFor="f-sub">Subject</label><input id="f-sub" value={form.subject} onChange={set("subject")} /></div>
          <div className="field"><label className="mono" htmlFor="f-msg">Message</label><textarea id="f-msg" required rows={4} value={form.message} onChange={set("message")} /></div>
          {err && <p className="form-err" role="alert">{err}</p>}
          <button type="submit" className="btn" disabled={isLoading}>{isLoading ? "Sending..." : "Send message"}</button>
        </form>
      </div>
      <ToastContainer position="bottom-right" />
    </section>
  )
}

const Footer = () => (
  <footer className="footer">
    <div className="wrap footer-row">
      <span className="brand"><img className="brand-logo" src={logo} alt="Hincas logo" /></span>
      <span className="mono">© {new Date().getFullYear()} Hincas · Ologunagba Olajide</span>
      <a href="#top" className="ink-link">Back to top ↑</a>
    </div>
  </footer>
)

export const Home = () => {
  const root = useRef(null)
  useReveal()
  useScrollJolt(root)
  return (
    <div className="paper" ref={root}>
      <pre className="code-bg" aria-hidden="true">{`${CODE_BG}\n\n${CODE_BG}`}</pre>
      <Nav />
      <Hero />
      <Ticker />
      <Work />
      <Ship />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
