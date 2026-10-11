'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Currently.module.css'
import HandMark from './HandMark'

const entries = [
  {
    title: 'Client & Supplier Reporting',
    subtitle: 'Scientist.com · Business Intelligence',
    date: 'Jun 2026',
    approach: 'Partnered with dev and data science to launch a new reporting tool for clients and suppliers, on schedule. Now building out the reports that show both sides the value of the platform.',
    methodology: 'Custom HTML visualizations on top of SQL, plus internal tooling that makes reports faster to build, maintain, and scale. Mentored our summer intern through shipping their first supplier reports.',
    tags: ['BI', 'SQL', 'HTML/CSS/JS', 'Cross-functional', 'Mentorship'],
    accentTag: 'BI',
  },
  {
    title: 'AI Savings Validation',
    subtitle: 'Scientist.com · AI & Automation',
    date: 'Ongoing',
    approach: 'Brought AI into the monthly savings validation process, cutting review time by over 70%.',
    methodology: 'Integrating LLMs to handle the repetitive checks so people only review what needs a human eye. Always on the lookout for the next manual process to automate.',
    tags: ['AI', 'LLMs', 'Automation', 'Python', 'Process Improvement'],
    accentTag: 'AI',
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
          <HandMark kind="line">Currently</HandMark>
        </motion.p>
        {entries.map((entry, i) => (
          <NowCard key={i} entry={entry} i={i} />
        ))}
      </div>
    </section>
  )
}