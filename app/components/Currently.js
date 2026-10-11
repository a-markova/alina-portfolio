'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './Currently.module.css'

const entries = [
  {
    title: 'Custom BI Reports — Scientist.com',
    subtitle: 'Scientist.com · Business Intelligence',
    date: 'Jun 2026',
    approach: 'Partnered with the dev team to build Scientist.com\'s first custom reporting experience for both customers and suppliers — giving partners their first look at digital reporting on the platform.',
    methodology: 'Designing procurement and spend dashboards end-to-end: requirements gathering, data modeling, and stakeholder reviews. Own all reporting needs across the company.',
    tags: ['BI', 'SQL', 'Data Modeling', 'Stakeholder Management', 'Product'],
    accentTag: 'BI',
  },
  {
    title: 'Data Science Collaboration',
    subtitle: 'Scientist.com · Analytics & Data Science',
    date: 'Ongoing',
    approach: 'Working side-by-side with the data science team to bring analytical insights into client-facing products and internal tooling.',
    methodology: 'Translating business questions into analytical requirements, scoping projects with DS, and leading delivery of client-facing initiatives end-to-end.',
    tags: ['Analytics', 'Python', 'SQL', 'Cross-functional', 'Client-facing'],
    accentTag: 'Analytics',
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