'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Signature.module.css'

// "Alina Markova" signs itself, like the bottom corner of a canvas.
export default function Signature({ year = 2026 }) {
  const ref = useRef()
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.6 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <span ref={ref} className={`${styles.wrap} ${on ? styles.on : ''}`}>
      <svg className={styles.sig} viewBox="0 0 520 130" role="img" aria-label={`Alina Markova, ${year}`}>
        <text x="10" y="95">Alina Markova</text>
      </svg>
      <span className={styles.year} aria-hidden="true">’{String(year).slice(-2)}</span>
    </span>
  )
}
