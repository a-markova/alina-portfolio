'use client'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './GaudyFrame.module.css'

// Carved shell / acanthus fan — the gaudier the better
function Shell({ className }) {
  const lobes = [-64, -42, -21, 0, 21, 42, 64]
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      {lobes.map(a => (
        <ellipse key={a} cx="20" cy="17" rx="4.2" ry="13" transform={`rotate(${a} 20 31)`} />
      ))}
      {lobes.map(a => (
        <line key={`v${a}`} x1="20" y1="29" x2="20" y2="8" transform={`rotate(${a} 20 31)`} className={styles.vein} />
      ))}
      <path d="M8 33 Q4 27 9 25 Q12 25 11 29" className={styles.scroll} />
      <path d="M32 33 Q36 27 31 25 Q28 25 29 29" className={styles.scroll} />
      <circle cx="20" cy="31" r="5" />
      <circle cx="20" cy="31" r="2" className={styles.jewel} />
    </svg>
  )
}

function Ornaments({ variant }) {
  return <>
    <Shell className={`${styles.orn} ${styles.crest}`} />
    {variant !== 'oval' && <>
      <Shell className={`${styles.orn} ${styles.tl}`} />
      <Shell className={`${styles.orn} ${styles.tr}`} />
      <Shell className={`${styles.orn} ${styles.bl}`} />
      <Shell className={`${styles.orn} ${styles.br}`} />
    </>}
  </>
}

/* ── seasonal decor ── */

const seasonFor = m => (m >= 2 && m <= 4 ? 'spring' : m >= 5 && m <= 7 ? 'summer' : m >= 8 && m <= 10 ? 'fall' : 'winter')
const PARTICLES = {
  fall:   { cls: styles.leaf,   colors: ['#c4512a', '#d98a2b', '#8a3a1a'] },
  winter: { cls: styles.flake,  colors: ['#fff'] },
  spring: { cls: styles.petalP, colors: ['#f4b6c6', '#fbd3dd', '#e58aa0'] },
}

function SeasonDecor({ season }) {
  const p = PARTICLES[season]
  return <>
    {season === 'winter' && (
      <svg className={styles.snowcap} viewBox="0 0 160 30" preserveAspectRatio="none" aria-hidden="true">
        <path d="M2 24 Q6 10 22 12 Q34 2 52 9 Q66 0 82 8 Q98 1 112 9 Q128 3 140 12 Q156 10 158 24 Q150 30 140 25 Q130 31 118 26 Q100 32 84 26 Q66 32 50 26 Q34 31 22 26 Q10 31 2 24 Z" fill="#fff" stroke="#dfe7f0" />
      </svg>
    )}
    {season === 'spring' && [0, 1, 2].map(k => (
      <svg key={k} className={`${styles.blossom} ${styles['b' + k]}`} viewBox="0 0 40 40" aria-hidden="true">
        {[0, 72, 144, 216, 288].map(a => <ellipse key={a} cx="20" cy="11" rx="6" ry="9" fill="#f7c3d0" stroke="#e58aa0" transform={`rotate(${a} 20 20)`} />)}
        <circle cx="20" cy="20" r="4" fill="#f2c94c" />
      </svg>
    ))}
    {season === 'fall' && (
      <svg className={styles.pumpkin} viewBox="0 0 60 46" aria-hidden="true">
        <path d="M30 10 Q31 3 36 1" stroke="#4a6b2a" strokeWidth="3" fill="none" strokeLinecap="round" />
        <ellipse cx="18" cy="28" rx="13" ry="16" fill="#d9731e" /><ellipse cx="42" cy="28" rx="13" ry="16" fill="#d9731e" />
        <ellipse cx="30" cy="28" rx="13" ry="17" fill="#ec8a2c" />
        <path d="M30 12 V44 M20 13 Q16 28 20 43 M40 13 Q44 28 40 43" stroke="#b85a14" strokeWidth="1.2" fill="none" />
      </svg>
    )}
    {season === 'summer' && (
      <div className={styles.beePath} aria-hidden="true">
        <svg className={styles.bee} viewBox="0 0 30 20">
          <ellipse cx="11" cy="6" rx="5" ry="4" fill="#e6f2ff" opacity=".85" /><ellipse cx="17" cy="5" rx="5" ry="4" fill="#e6f2ff" opacity=".85" />
          <ellipse cx="15" cy="12" rx="9" ry="6" fill="#f2c94c" />
          <path d="M12 6.5 v11 M17 6 v12" stroke="#2b2118" strokeWidth="2.4" />
          <circle cx="23" cy="11" r="1" fill="#2b2118" />
        </svg>
      </div>
    )}
    {p && [0, 1, 2, 3].map(i => (
      <span key={i} className={`${styles.particle} ${p.cls}`} aria-hidden="true"
        style={{ left: `${10 + i * 24}%`, animationDelay: `${i * 1.7}s`, animationDuration: `${6 + (i % 3)}s`, background: p.colors[i % p.colors.length] }} />
    ))}
  </>
}

/* ── lightbox ── */

function Lightbox({ src, alt, caption, variant, medium, year, note, sold, onClose }) {
  const closeRef = useRef()
  useEffect(() => {
    closeRef.current?.focus()
    const onKey = e => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  const meta = [medium, year].filter(Boolean).join(' · ')

  return createPortal(
    <div className={styles.lightbox} onClick={onClose} role="dialog" aria-modal="true" aria-label={caption || alt}>
      <div className={styles.lbInner} onClick={e => e.stopPropagation()}>
        <div className={`${styles.palette} ${styles.lbFrame}`} data-variant={variant}>
          <figure className={styles.frame}>
            <Ornaments variant={variant} />
            <div className={styles.mat}><img src={src} alt={alt} className={styles.img} /></div>
            {caption && <figcaption className={styles.plaque}>{caption}</figcaption>}
          </figure>
        </div>
        <div className={styles.lbText}>
          {caption && <h3>{caption}</h3>}
          {meta && <p className={styles.lbMeta}>{meta}</p>}
          {sold && <span className={styles.lbSold}>sold!</span>}
          {note && <p>{note}</p>}
          <button ref={closeRef} className={styles.lbClose} onClick={onClose}>hang it back ✕</button>
        </div>
      </div>
    </div>,
    document.body,
  )
}

/**
 * A real painting hung in the page margin in an over-the-top flea market frame.
 * Click to take it off the wall; it dresses up for the season and gets knocked
 * crooked when the cats run past.
 *
 * variant: 'gold' | 'silver' | 'shabby' | 'pink' | 'oval'
 * sold: crosses out the price and slaps a red gallery dot on the frame
 * medium / year / note: optional details shown when the painting is enlarged
 * side: 'left' | 'right' — which page margin it hangs in; pass null and a
 *   `style` with your own left/right to position it against a container instead
 */
export default function GaudyFrame({
  src, alt, caption, price, variant = 'gold', side = 'right', top = '60px', tilt = 0, sold = false,
  medium, year, note, style,
}) {
  const ref = useRef()
  const [open, setOpen] = useState(false)
  const [knock, setKnock] = useState(0)
  const [season, setSeason] = useState(null)

  // seasonal decor follows the visitor's date
  useEffect(() => setSeason(seasonFor(new Date().getMonth())), [])

  // the cats (type "meow") bump any frame that's on screen as they run past
  useEffect(() => {
    const timers = []
    const onRun = ({ detail }) => {
      const r = ref.current?.getBoundingClientRect()
      if (!r || r.width === 0 || r.bottom < 0 || r.top > window.innerHeight) return
      const cx = r.left + r.width / 2
      const at = detail.duration * (cx + detail.start) / (window.innerWidth + detail.start + detail.end)
      timers.push(setTimeout(() => setKnock((Math.random() < 0.5 ? -1 : 1) * (6 + Math.random() * 5)), at))
    }
    window.addEventListener('cats:run', onRun)
    return () => { window.removeEventListener('cats:run', onRun); timers.forEach(clearTimeout) }
  }, [])

  const activate = () => (knock ? setKnock(0) : setOpen(true))

  return (
    <div
      className={`${styles.hang} ${styles.palette} ${side ? styles[side] : ''} ${knock ? styles.crooked : ''}`}
      data-variant={variant}
      style={{ top, '--tilt': `${tilt}deg`, ...style }}
    >
      <div className={styles.tilt} style={{ transform: `rotate(${knock}deg)` }}>
        <div
          className={styles.swing}
          role="button"
          tabIndex={0}
          aria-label={knock ? `Straighten ${caption || alt}` : `Enlarge ${caption || alt}`}
          onClick={activate}
          onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), activate())}
        >
          <span className={styles.nail} aria-hidden="true" />
          <svg className={styles.wire} viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
            <polyline points="14,30 50,1 86,30" />
          </svg>

          <figure ref={ref} className={styles.frame}>
            <Ornaments variant={variant} />

            <div className={styles.mat}>
              <img src={src} alt={alt} className={styles.img} />
            </div>

            {season && <SeasonDecor season={season} />}
            {caption && <figcaption className={styles.plaque}>{caption}</figcaption>}
            {sold && <span className={styles.soldDot} title="sold!" aria-label="sold" />}
            {(price || sold) && (
              <span className={styles.tag}>
                {sold ? <><s className={styles.struck}>{price}</s> SOLD!</> : price}
              </span>
            )}
          </figure>
        </div>
      </div>

      {open && (
        <Lightbox src={src} alt={alt} caption={caption} variant={variant} medium={medium} year={year}
          note={note} sold={sold} onClose={() => setOpen(false)} />
      )}
    </div>
  )
}
