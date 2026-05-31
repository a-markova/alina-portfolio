'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Experience.module.css'

const jobs = [
  {
    date: 'Jun 2024 – Jul 2025',
    role: 'FP&A Analyst',
    org: 'Scientist.com',
    desc: 'Liaison connecting data science, finance, and accounting teams across open-ended ad-hoc analytical projects, translating quantitative findings into actionable financial insights.',
  },
  {
    date: 'Apr 2026 – Present',
    role: 'Marketing Analyst',
    org: 'Mercury Insurance',
    desc: 'Embedded in a cross-functional team to analyze the customer acquisition funnel — identifying conversion drop-off points, building reporting dashboards, and surfacing data-driven recommendations to optimize channel performance.',
  },
]

function TlItem({ job, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      className={styles.item}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.12, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className={styles.date}>{job.date}</div>
      <div>
        <div className={styles.role}>{job.role}</div>
        <div className={styles.org}>{job.org}</div>
        <div className={styles.desc}>{job.desc}</div>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <motion.p
          ref={ref}
          className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.p>
        {jobs.map((job, i) => <TlItem key={i} job={job} i={i} />)}
      </div>
    </section>
  )
}