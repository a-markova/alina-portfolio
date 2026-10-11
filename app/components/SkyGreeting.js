'use client'
import { useEffect, useId, useState } from 'react'
import styles from './SkyGreeting.module.css'

// Painted sky at the top of Home: clouds part to reveal a sun (or moon) that
// matches the visitor's local time. Replays whenever someone navigates to Home.
const SKIES = {
  morning: { top: '#b9a7dc', bottom: '#ffd6b8', orb: '#ffb36b', glow: 'rgba(255,179,107,.6)', cloud: '#fff3ec', shade: '#e2b9c3', hello: 'good morning', ink: '#3d2230' },
  midday:  { top: '#3f80d0', bottom: '#a9d2f3', orb: '#ffe066', glow: 'rgba(255,224,102,.65)', cloud: '#ffffff', shade: '#c4d8ef', hello: 'good afternoon', ink: '#1e3550' },
  evening: { top: '#3b2a5a', bottom: '#ef8a55', orb: '#ff7a3d', glow: 'rgba(255,122,61,.6)', cloud: '#f6b7a0', shade: '#8a5378', hello: 'good evening', ink: '#fff7ee' },
  night:   { top: '#0e1530', bottom: '#2f3366', orb: '#f4efd6', glow: 'rgba(244,239,214,.35)', cloud: '#3c4170', shade: '#232750', hello: 'good night', ink: '#fff7ee' },
}
const periodFor = h => (h < 5 ? 'night' : h < 11 ? 'morning' : h < 17 ? 'midday' : h < 21 ? 'evening' : 'night')

const LEFT_PUFFS = [[40, 240, 60], [120, 205, 72], [215, 185, 84], [320, 192, 76], [410, 220, 62], [80, 290, 80], [230, 285, 90], [390, 280, 70], [170, 160, 48], [275, 150, 56]]
const RIGHT_PUFFS = [[390, 228, 58], [470, 195, 78], [565, 178, 86], [665, 192, 74], [760, 225, 64], [430, 288, 74], [590, 285, 92], [750, 288, 76], [520, 148, 52], [620, 140, 58]]

function CloudBank({ puffs, sky, className, filterId }) {
  return (
    <svg className={className} viewBox="0 0 800 280" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <defs>
        <filter id={filterId} x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="3" seed="7" />
          <feDisplacementMap in="SourceGraphic" scale="18" />
        </filter>
      </defs>
      <g filter={`url(#${filterId})`}>
        <g fill={sky.shade}>{puffs.map(([x, y, r], i) => <circle key={i} cx={x + 6} cy={y + 12} r={r} />)}</g>
        <g fill={sky.cloud}>{puffs.map(([x, y, r], i) => <circle key={i} cx={x} cy={y} r={r} />)}</g>
      </g>
    </svg>
  )
}

export default function SkyGreeting() {
  const [period, setPeriod] = useState(null)
  const uid = useId().replace(/:/g, '')
  useEffect(() => setPeriod(periodFor(new Date().getHours())), [])
  const sky = period && SKIES[period]

  return (
    <div className={styles.band} aria-hidden={!sky}>
      {sky && (
        <div className={styles.sky} style={{ background: `linear-gradient(${sky.top}, ${sky.bottom})` }}>
          {period === 'night' && Array.from({ length: 30 }, (_, i) => (
            <span key={i} className={styles.star} style={{ left: `${(i * 37) % 100}%`, top: `${(i * 23) % 60}%`, animationDelay: `${(i % 7) * 0.4}s` }} />
          ))}
          <div className={`${styles.orb} ${period === 'night' ? styles.moon : ''}`}
            style={{ background: sky.orb, boxShadow: `0 0 36px 16px ${sky.glow}, 0 0 110px 46px ${sky.glow}` }} />
          <CloudBank puffs={LEFT_PUFFS} sky={sky} filterId={`brushL${uid}`} className={`${styles.clouds} ${styles.cloudsL}`} />
          <CloudBank puffs={RIGHT_PUFFS} sky={sky} filterId={`brushR${uid}`} className={`${styles.clouds} ${styles.cloudsR}`} />
          <p className={styles.hello} style={{ color: sky.ink }}>{sky.hello}</p>
        </div>
      )}
    </div>
  )
}
