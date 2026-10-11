'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './Hero.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }
  })
}

export default function Hero() {
  return (
    <section className={styles.hero}>

      <svg className={styles.floralBg} viewBox="0 0 300 420" fill="none" aria-hidden="true">
        <path d="M150 12 C150 12 115 56 76 76 C37 96 12 82 5 114 C-2 146 26 168 46 202 C66 236 54 270 72 292 C90 314 128 302 150 324" stroke="#E8173A" strokeWidth="1.3" strokeLinecap="round" />
        <path d="M150 12 C150 12 185 56 224 76 C263 96 288 82 295 114 C302 146 274 168 254 202 C234 236 246 270 228 292 C210 314 172 302 150 324" stroke="#E8173A" strokeWidth="1.3" strokeLinecap="round" />
        <ellipse cx="76" cy="76" rx="18" ry="10" fill="#E8173A" opacity="0.6" transform="rotate(-30 76 76)" />
        <ellipse cx="224" cy="76" rx="18" ry="10" fill="#E8173A" opacity="0.6" transform="rotate(30 224 76)" />
        <ellipse cx="46" cy="202" rx="15" ry="9" fill="#7A9E8E" opacity="0.7" transform="rotate(-45 46 202)" />
        <ellipse cx="254" cy="202" rx="15" ry="9" fill="#7A9E8E" opacity="0.7" transform="rotate(45 254 202)" />
        <circle cx="150" cy="12" r="11" fill="#E8173A" opacity="0.6" />
        <circle cx="150" cy="324" r="9" fill="#7A9E8E" opacity="0.5" />
      </svg>

      <div className={styles.inner}>

        {/* LEFT column */}
        <div>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
            <p className={styles.eyebrow}>Data analytics · Business · Strategy</p>
            <h1 className={styles.name}>
              Alina<br /><em className={styles.nameAccent}>Markova</em>
            </h1>
            <p className={styles.tagline}>
              Welcome to my website! The intention is to be as candid as LinkedIn allows. You can view my professional projects, artistic creations, and (of course) hobbies. I hope you enjoy. 
            </p>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1} className={styles.btns}>
            <Link href="/projects" className={styles.btnFilled}>View projects</Link>
            <a href="/files/resume.pdf" className={styles.btnOutline} download>Download resume</a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2} className={styles.portraitCluster}>
            <div className={styles.phone}>
              <a href="mailto:alina@markov.com" className={styles.phoneLink} title="Email">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" /><polyline points="2,7 12,13 22,7" />
                </svg>
              </a>
              <a href="https://linkedin.com/in/alinamarkova" target="_blank" rel="noopener" className={styles.phoneLink} title="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="3" />
                  <line x1="8" y1="11" x2="8" y2="17" />
                  <line x1="8" y1="7" x2="8" y2="8" />
                  <path d="M12 11v6M12 14c0-2 6-3 6 1v2" />
                </svg>
              </a>
              <a href="https://github.com/rsm-amarkova" target="_blank" rel="noopener" className={styles.phoneLink} title="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
                </svg>
              </a>
            </div>
            <div className={styles.portraitWrap}>
              <Image
                src="/images/Alina_Beach.jpg"
                alt="Alina Markova"
                width={480}
                height={600}
                className={styles.portrait}
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* RIGHT column */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
          <div className={styles.statGrid}>
            {[
              { num: 'Cross-Functional Experience', label: 'Analytics, Reporting, Consulting' },
              { num: '3 Years of Experience', label: 'Founding member of Business Intelligence team @ Scientist.com' },
              { num: 'Biotech & Pharma', label: '' },
              { num: 'East of Eden', label: 'Book of the month' },
            ].map((s, i) => (
              <motion.div key={i} className={styles.stat} whileHover={{ scale: 1.02 }} transition={{ duration: 0.15 }}>
            <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </motion.div>
            ))}
          </div>
          <div className={styles.chips}>
            {['SQL', 'Python', 'Tableau', 'Power BI', 'R', 'ML', 'AI', 'Agentic AI', 'Snowflake', 'GenAI', 'Polars', 'Google Analytics'].map(c => (
              <span key={c} className={styles.chip}>{c}</span>
            ))}
          </div>
        </motion.div>

      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <span>Scroll</span>
        <svg className={styles.scrollArrow} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--red)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6,9 12,15 18,9" />
        </svg>
      </div>   </section>
  )
}