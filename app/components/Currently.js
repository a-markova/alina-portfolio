'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Currently.module.css'

const entries = [
  {
    title: 'Petco Product Substitution Model',
    subtitle: 'MSBA Capstone · Industry Partner Project',
    date: 'April 2026',
    approach: 'Researching substitution literature to ground a model in customer behavior rather than product similarity alone.',
    methodology: 'Collaborative research with Petco data scientists. Building toward a behavior-driven substitution recommendation framework.',
    tags: ['Capstone', 'ML', 'SQL', 'Substitution', 'Literature Review'],
    accentTag: 'Capstone',
  },
  {
    title: 'Variance Intelligence Agent',
    subtitle: 'Live Nation · Analytics Engineering',
    date: 'April 2026',
    approach: 'Agentic pipeline comparing revenue and attendance projections to actuals, surfacing explanations autonomously through internal data and external research.',
    methodology: 'LLM-orchestrated reasoning loop combining structured SQL results with web search to distinguish signal from noise in forecast misses.',
    tags: ['AI Agent', 'Python', 'SQL', 'LLM', 'FP&A'],
    accentTag: 'AI Agent',
  },
]

function NowCard({ entry, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className={styles.cardTop}>
        <div className={styles.liveBadge}>
          <div className={styles.liveDot} />
          <span className={styles.liveText}>Live</span>
        </div>
        <span className={styles.datePill}>{entry.date}</span>
      </div>
      <div className={styles.nowLabel}>Now</div>
      <div className={styles.title}>{entry.title}</div>
      <div className={styles.subtitle}>{entry.subtitle}</div>
      <div className={styles.fields}>
        <div>
          <span className={styles.fieldLabel}>Approach</span>
          <span className={styles.fieldBody}>{entry.approach}</span>
        </div>
        <div>
          <span className={styles.fieldLabel}>Methodology</span>
          <span className={styles.fieldBody}>{entry.methodology}</span>
        </div>
      </div>
      <div className={styles.tagRow}>
        {entry.tags.map(tag => (
          <span key={tag} className={`${styles.tag} ${tag === entry.accentTag ? styles.accent : ''}`}>
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Currently() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className={styles.section} id="currently">
      <div className={styles.inner}>
        <motion.p
          ref={ref}
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Currently
        </motion.p>
        {entries.map((entry, i) => (
          <NowCard key={i} entry={entry} i={i} />
        ))}
      </div>
    </section>
  )
}