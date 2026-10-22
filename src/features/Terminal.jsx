import { useEffect, useState } from "react"

// Each snippet is typed, held, then erased before the next one starts.
const SNIPPETS = [
  `if (idea.isNew && idea.solvesRealProblem) {\n  startCoding();\n}`,
  `if (build.fails) {\n  readTheLogs();      // don't panic\n} else {\n  deploy("vercel --prod");\n}`,
  `while (!product.isPerfect) {\n  ship();\n  listenTo(users);\n  iterate();\n}`,
  `try {\n  stayConsistent();\n} catch (burnout) {\n  rest();\n  return comeBackStronger();\n}`,
  `const rent = landlord.connect(tenant, {\n  middlemen: 0,\n  paperwork: "digital",\n});`,
  `if (users.haveAProblem) {\n  build(solution);\n} else {\n  keepListening();\n}`,
]

const TOKENS = /(\/\/[^\n]*)|("[^"\n]*"?)|\b(if|else|while|try|catch|return|const)\b|\b(\d+)\b|([A-Za-z_]\w*)(?=\()/g

const highlight = (code) => {
  const out = []
  let last = 0
  code.replace(TOKENS, (m, c, s, k, n, f, i) => {
    if (i > last) out.push(code.slice(last, i))
    const cls = c ? "c" : s ? "s" : k ? "k" : n ? "n" : "f"
    out.push(<span key={i} className={cls}>{m}</span>)
    last = i + m.length
    return m
  })
  if (last < code.length) out.push(code.slice(last))
  return out
}

export const Terminal = () => {
  const [idx, setIdx] = useState(0)
  const [len, setLen] = useState(0)
  const [phase, setPhase] = useState("type")

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLen(SNIPPETS[0].length)
      return
    }
    const full = SNIPPETS[idx]
    let t
    if (phase === "type") {
      if (len < full.length) t = setTimeout(() => setLen(len + 1), full[len] === "\n" ? 140 : 32 + Math.random() * 45)
      else t = setTimeout(() => setPhase("erase"), 2200)
    } else {
      if (len > 0) t = setTimeout(() => setLen(len - 1), 14)
      else t = setTimeout(() => { setIdx((idx + 1) % SNIPPETS.length); setPhase("type") }, 350)
    }
    return () => clearTimeout(t)
  }, [idx, len, phase])

  return (
    <div className="terminal" role="img" aria-label="Terminal showing developer mindset snippets">
      <div className="term-bar"><i /><i /><i /><span>hincas@founder: ~/mindset.js</span></div>
      <pre className="term-body">
        <span className="prompt">❯ </span>node mindset.js{"\n\n"}
        {highlight(SNIPPETS[idx].slice(0, len))}
        <span className="caret" />
      </pre>
    </div>
  )
}
