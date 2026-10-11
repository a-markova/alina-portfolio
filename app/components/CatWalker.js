'use client'
import { useEffect, useState } from 'react'
import styles from './CatWalker.module.css'
import TabbyCat from './TabbyCat'

// Easter egg: typing "meow" anywhere sends both cats sprinting across the page.
// Frames on screen hear 'cats:run' and get knocked crooked as the cats pass.
const RUN_MS = 3200
const START = 120 // px off the left edge
const END = 140   // px past the right edge

export default function CatWalker() {
  const [run, setRun] = useState(0)

  useEffect(() => {
    let buf = ''
    const onKey = e => {
      const t = e.target
      if (t?.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t?.tagName)) return
      if (e.metaKey || e.ctrlKey || e.altKey || e.key.length !== 1) return
      buf = (buf + e.key.toLowerCase()).slice(-4)
      if (buf !== 'meow') return
      buf = ''
      setRun(r => r + 1)
      window.dispatchEvent(new CustomEvent('cats:run', { detail: { duration: RUN_MS, start: START, end: END } }))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (!run) return
    const t = setTimeout(() => setRun(0), RUN_MS + 900)
    return () => clearTimeout(t)
  }, [run])

  if (!run) return null

  return (
    <div key={run} className={styles.parade} aria-hidden="true">
      <div className={styles.runner}>
        <TabbyCat variant={0} size={96} />
        <span className={styles.mrrp}>mrrp!</span>
      </div>
      <div className={`${styles.runner} ${styles.runner2}`}>
        <TabbyCat variant={1} size={88} />
      </div>
    </div>
  )
}
