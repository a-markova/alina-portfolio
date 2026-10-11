import styles from './TabbyCat.module.css'

// Grey-brown mackerel tabbies with white socks + white muzzle, facing right.
// variant 0 is a touch darker, variant 1 a touch lighter with a white chest.
const COATS = [
  { base: '#77705f', dark: '#37322a', light: '#a39a89' },
  { base: '#857d6d', dark: '#423c33', light: '#b0a796' },
]
const WHITE = '#f4f1ea'

function Leg({ x, cls, coat }) {
  return (
    <g className={cls}>
      <rect x={x} y="37" width="6.5" height="15" rx="3.2" fill={coat.base} />
      <path d={`M${x} 42 h6.5 M${x} 45.5 h6.5`} stroke={coat.dark} strokeWidth="1.3" />
      <rect x={x - 0.3} y="47.5" width="7.1" height="5" rx="2.5" fill={WHITE} />
    </g>
  )
}

export default function TabbyCat({ variant = 0, walking = true, flip = false, size = 80 }) {
  const c = COATS[variant % COATS.length]
  return (
    <svg
      width={size} height={size * 0.7}
      viewBox="0 0 80 56"
      className={`${styles.cat} ${walking ? styles.walking : ''}`}
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
      aria-hidden="true"
    >
      {/* Tail — banded, dark tip */}
      <g className={styles.tail}>
        <path d="M19 31 Q8 28 8 17 Q8 9 14 8" stroke={c.base} strokeWidth="5.5" strokeLinecap="round" fill="none" />
        <path d="M19 31 Q8 28 8 17 Q8 9 14 8" stroke={c.dark} strokeWidth="5.5" strokeDasharray="2.2 4" fill="none" />
        <path d="M10.5 10 Q11.5 8 14 8" stroke={c.dark} strokeWidth="5.5" strokeLinecap="round" fill="none" />
      </g>

      {/* Far legs (slightly shaded) */}
      <g opacity="0.82">
        <Leg x={26} cls={`${styles.leg} ${styles.legB}`} coat={c} />
        <Leg x={53} cls={`${styles.leg} ${styles.legA}`} coat={c} />
      </g>

      {/* Body */}
      <ellipse cx="38" cy="33" rx="21" ry="12" fill={c.base} />
      <ellipse cx="39" cy="40" rx="15" ry="4.5" fill={c.light} opacity="0.75" />
      {/* Dorsal line + mackerel stripes */}
      <path d="M20 27 Q38 19 56 25" stroke={c.dark} strokeWidth="2.6" strokeLinecap="round" fill="none" />
      {[23, 29, 35, 41, 47, 53].map((x, i) => (
        <path key={x} d={`M${x} ${23 - (i > 0 && i < 5 ? 1.5 : 0)} Q${x - 3} 31 ${x} 39`} stroke={c.dark} strokeWidth="2" strokeLinecap="round" fill="none" />
      ))}

      {/* Near legs */}
      <Leg x={21} cls={`${styles.leg} ${styles.legA}`} coat={c} />
      <Leg x={48} cls={`${styles.leg} ${styles.legB}`} coat={c} />

      {/* Head */}
      <g className={styles.head}>
        <polygon points="52,17 51,5 59,13" fill={c.base} />
        <polygon points="67,13 74,6 72,18" fill={c.base} />
        <polygon points="53.5,15 53,8 57.5,13" fill="#d9a3a8" />
        <polygon points="68,13.5 72,9 71,16" fill="#d9a3a8" />
        <circle cx="62" cy="23" r="11.5" fill={c.base} />
        {variant === 1 && <ellipse cx="58" cy="35" rx="5" ry="4" fill={WHITE} />}
        {/* forehead "M" + cheek stripes */}
        <path d="M57 15 L59 19 L62 14.5 L65 19 L67 15" stroke={c.dark} strokeWidth="1.3" fill="none" strokeLinejoin="round" />
        <path d="M51.5 23 Q54 24 55 26.5 M51.5 26.5 Q53.5 27 54.5 29" stroke={c.dark} strokeWidth="1.1" fill="none" />
        <path d="M72.5 22.5 Q70.5 24 70 26.5" stroke={c.dark} strokeWidth="1.1" fill="none" />
        {/* white muzzle + chin */}
        <ellipse cx="64" cy="28.5" rx="6.5" ry="4.8" fill={WHITE} />
        <ellipse cx="63.5" cy="32" rx="3.5" ry="2" fill={WHITE} />
        {/* eyes: green-gold almonds with slit pupils */}
        <ellipse cx="58.5" cy="21.5" rx="2.6" ry="2" fill="#b3b04a" />
        <ellipse cx="67.5" cy="21.5" rx="2.6" ry="2" fill="#b3b04a" />
        <ellipse cx="58.5" cy="21.5" rx="0.7" ry="1.8" fill="#151310" />
        <ellipse cx="67.5" cy="21.5" rx="0.7" ry="1.8" fill="#151310" />
        <circle cx="59.2" cy="20.8" r="0.45" fill="#fff" />
        <circle cx="68.2" cy="20.8" r="0.45" fill="#fff" />
        {/* nose + whiskers */}
        <path d="M62.3 26 h3 l-1.5 1.8 z" fill="#c98b93" />
        <path d="M60 28.5 L50 27 M60 29.5 L50.5 31 M68 28.5 L78 27 M68 29.5 L77.5 31" stroke="#e8e2d6" strokeWidth="0.6" />
      </g>
    </svg>
  )
}
