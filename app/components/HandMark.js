'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './HandMark.module.css'

// A pen mark that draws itself around/under its text when scrolled into view.
// kind: 'line' | 'double' | 'circle'
export default function HandMark({ kind = 'line', children }) {
  const ref = useRef()
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 1 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <span ref={ref} className={`${styles.mark} ${on ? styles.on : ''}`}>
      {children}
      {kind === 'circle' ? (
        <svg className={styles.circle} viewBox="0 0 200 80" preserveAspectRatio="none" aria-hidden="true">
          <path pathLength="1" d="M104 8 C36 2 4 28 14 52 C26 78 162 80 188 50 C204 28 168 2 84 12" />
        </svg>
      ) : (
        <svg className={styles.line} viewBox="0 0 200 24" preserveAspectRatio="none" aria-hidden="true">
          <path pathLength="1" d="M3 14 C40 5 80 20 120 10 S180 7 197 12" />
          {kind === 'double' && <path pathLength="1" d="M10 21 C60 15 120 23 190 17" className={styles.second} />}
        </svg>
      )}
    </span>
  )
}
