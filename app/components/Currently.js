'use client'
import Link from 'next/link'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Currently.module.css'
import HandMark from './HandMark'

const entries = [
  {
    title: 'First In-House BI Tool',
    subtitle: 'Scientist.com · Business Intelligence',
    date: 'Jun 2026',
    what: 'Founding member of the BI team. Led cross-functional delivery of the company\'s first in-house BI tool, now the primary reporting source for internal teams, customers, and suppliers.',
    how: 'Partnered with engineering, data science, customer success, and supplier success to turn customer and business needs into requirements, priorities, and a launch plan. I also manage the team\'s intern, scoping projects and reviewing deliverables.',
    tags: ['BI', 'Requirements', 'Prioritization', 'Cross-functional', 'Intern management'],
    accentTag: 'BI',
    href: '/projects/scientist-bi',
  },
  {
    title: 'AI Enablement',
    subtitle: 'Scientist.com · AI & Automation',
    date: 'Ongoing',
    what: 'Looking for manual work that can be automated. So far that\'s an LLM-assisted review that cut my monthly review time by over 70%, and an API that replaced a 2-hour monthly check for the supplier team.',
    how: 'Scripts handle the numbers, the LLM only helps where judgment is needed, and a person makes the final call. I also built my team an AI knowledge base and help run the monthly AI workshops.',
    tags: ['AI', 'LLMs', 'APIs', 'Automation', 'Workshops'],
    accentTag: 'AI',
    href: '/projects/ai-enablement',
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
          <span className={styles.fieldLabel}>What</span>
          <span className={styles.fieldBody}>{entry.what}</span>
        </div>
        <div>
          <span className={styles.fieldLabel}>How</span>
          <span className={styles.fieldBody}>{entry.how}</span>
        </div>
      </div>
      <div className={styles.tagRow}>
        {entry.tags.map(tag => (
          <span key={tag} className={`${styles.tag} ${tag === entry.accentTag ? styles.accent : ''}`}>
            {tag}
          </span>
        ))}
      </div>
      <Link href={entry.href} className={styles.caseLink}>Read the case study →</Link>
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