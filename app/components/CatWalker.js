'use client'
import { useEffect, useState, useRef } from 'react'
import styles from './CatWalker.module.css'

// Two brown tabbies with white socks, drawn in SVG
function TabbyCat({ flip }) {
  return (
    <svg
      width="72" height="52"
      viewBox="0 0 72 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      {/* Body */}
      <ellipse cx="36" cy="34" rx="20" ry="13" fill="#A0622A" />
      {/* Tabby body stripes */}
      <path d="M22 30 Q36 26 50 30" stroke="#7A4518" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
      <path d="M20 36 Q36 32 52 36" stroke="#7A4518" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
      <path d="M23 42 Q36 38 49 42" stroke="#7A4518" strokeWidth="1" strokeLinecap="round" opacity="0.4"/>
      {/* Head */}
      <ellipse cx="54" cy="26" rx="11" ry="10" fill="#A0622A" />
      {/* Ears */}
      <polygon points="46,18 44,10 50,17" fill="#A0622A" />
      <polygon points="62,18 64,10 58,17" fill="#A0622A" />
      <polygon points="47,17 45,12 50,17" fill="#D4879E" opacity="0.7"/>
      <polygon points="61,17 63,12 58,17" fill="#D4879E" opacity="0.7"/>
      {/* Face markings */}
      <path d="M48 24 Q50 22 52 24" stroke="#7A4518" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
      <path d="M56 24 Q58 22 60 24" stroke="#7A4518" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
      {/* Eyes */}
      <ellipse cx="50" cy="25" rx="2.5" ry="2" fill="#2D5A1B" />
      <ellipse cx="58" cy="25" rx="2.5" ry="2" fill="#2D5A1B" />
      <circle cx="50" cy="25" r="1.2" fill="#111" />
      <circle cx="58" cy="25" r="1.2" fill="#111" />
      <circle cx="50.7" cy="24.3" r="0.5" fill="white" />
      <circle cx="58.7" cy="24.3" r="0.5" fill="white" />
      {/* Nose */}
      <ellipse cx="54" cy="28.5" rx="1.2" ry="0.8" fill="#D4879E" />
      {/* Whiskers */}
      <line x1="54" y1="29" x2="43" y2="27" stroke="#C8A882" strokeWidth="0.7" opacity="0.8"/>
      <line x1="54" y1="29.5" x2="43" y2="30" stroke="#C8A882" strokeWidth="0.7" opacity="0.8"/>
      <line x1="54" y1="29" x2="65" y2="27" stroke="#C8A882" strokeWidth="0.7" opacity="0.8"/>
      <line x1="54" y1="29.5" x2="65" y2="30" stroke="#C8A882" strokeWidth="0.7" opacity="0.8"/>
      {/* Tail */}
      <path d="M16 34 Q8 28 10 20 Q12 14 16 18" stroke="#A0622A" strokeWidth="5" strokeLinecap="round" fill="none"/>
      <path d="M16 34 Q8 28 10 20 Q12 14 16 18" stroke="#7A4518" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5"/>
      {/* White socks — front legs */}
      <rect x="43" y="44" width="6" height="7" rx="3" fill="#A0622A" />
      <rect x="43" y="47" width="6" height="5" rx="2.5" fill="#F0EDE8" />
      <rect x="52" y="44" width="6" height="7" rx="3" fill="#A0622A" />
      <rect x="52" y="47" width="6" height="5" rx="2.5" fill="#F0EDE8" />
      {/* White socks — back legs */}
      <rect x="20" y="43" width="6" height="7" rx="3" fill="#A0622A" />
      <rect x="20" y="46" width="6" height="5" rx="2.5" fill="#F0EDE8" />
      <rect x="29" y="44" width="6" height="7" rx="3" fill="#A0622A" />
      <rect x="29" y="47" width="6" height="5" rx="2.5" fill="#F0EDE8" />
    </svg>
  )
}

export default function CatWalker() {
  const [visible, setVisible] = useState(false)
  const [flip, setFlip] = useState(false)
  const [catIndex, setCatIndex] = useState(0)
  const dirRef = useRef(false)

  useEffect(() => {
    let timeout

    function sendCat() {
      const goRight = !dirRef.current
      dirRef.current = goRight
      setFlip(!goRight)
      setCatIndex(prev => (prev + 1) % 2)
      setVisible(true)

      // Hide after the walk animation completes (~12s)
      timeout = setTimeout(() => {
        setVisible(false)
        // Schedule next cat after 40-70s
        timeout = setTimeout(sendCat, 40000 + Math.random() * 30000)
      }, 12000)
    }

    // First cat appears after 8-15s
    timeout = setTimeout(sendCat, 8000 + Math.random() * 7000)
    return () => clearTimeout(timeout)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`${styles.walker} ${flip ? styles.walkRight : styles.walkLeft}`}
      title="one of my cats 🐱"
    >
      <div className={styles.legs}>
        <TabbyCat flip={flip} />
      </div>
    </div>
  )
}
