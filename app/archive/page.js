'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './archive.module.css'

const entries = [
  {
    date: 'Mid 2026',
    project: 'Petco Product Substitution Model',
    description: 'MSBA capstone. Demand transference framework for inventory planning; improved baseline assumptions by 82M.',
    tags: ['ML', 'Python', 'SQL', 'Capstone'],
    href: '/projects/petco',
  },
  {
    date: 'Mid 2026',
    project: 'Variance Intelligence Agent',
    description: 'Agentic pipeline for Live Nation comparing revenue projections to actuals with LLM-generated explanations.',
    tags: ['AI Agent', 'LLM', 'Python', 'SQL'],
    href: '/projects/variance-agent',
  },
  {
    date: 'Early 2026',
    project: 'Rent the Runway ML',
    description: 'Sentiment, event type, and fit prediction on 190k+ reviews.',
    tags: ['NLP', 'scikit-learn', 'Python'],
    href: '/projects/rent-the-runway',
  },
  {
    date: 'Early 2026',
    project: 'Uplift Modeling — Creative Gaming',
    description: 'Causal ML to identify persuadables and maximize ad ROI.',
    tags: ['XGBoost', 'Polars', 'RCT'],
    href: '/projects/uplift-model',
  },
]

function Row({ entry, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.tr
      ref={ref}
      initial={{ opacity: 0, x: -16 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.08 }}
      className={styles.row}
    >
      <td className={styles.tdDate}>{entry.date}</td>
      <td className={styles.tdProject}>
        <a href={entry.href} className={styles.projectLink}>{entry.project}</a>
        <span className={styles.projectDesc}>{entry.description}</span>
      </td>
      <td className={styles.tdTags}>
        {entry.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
      </td>
    </motion.tr>
  )
}

export default function Archive() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <main>
      <section className={styles.header}>
        <div className={styles.inner}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className={styles.eyebrow}>History</p>
            <h1 className={styles.heading}>Archive</h1>
            <p className={styles.subheading}>
              A running log of what I've worked on. Updated as projects complete.
            </p>
          </motion.div>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Date</th>
                <th className={styles.th}>Project</th>
                <th className={styles.th}>Tags</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e, i) => <Row key={i} entry={e} i={i} />)}
            </tbody>
          </table>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerSig}>Alina Markova, 2026</span>
          <div className={styles.footerLinks}>
            <a href="https://linkedin.com/in/alinamarkova" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/rsm-amarkova" target="_blank" rel="noopener">GitHub</a>
            <a href="mailto:alina@markov.com">Email</a>
          </div>
        </div>
      </footer>
    </main>
  )
}