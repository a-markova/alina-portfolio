'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './Projects.module.css'
import HandMark from './HandMark'

const projects = [
  {
    type: 'Business Intelligence · Product',
    title: 'Scientist.com Custom BI Reports',
    desc: 'Launched the platform\'s first custom reporting experience — supplier dashboards giving partners their first taste of digital reporting, plus client-facing procurement analytics.',
    chips: ['SQL', 'Data Modeling', 'BI', 'Product'],
    href: '/projects/scientist-bi',
  },
  {
    type: 'Capstone · ML',
    title: 'Petco Product Substitution Model',
    desc: 'Led a 4-person team designing a demand transference framework for Petco\'s inventory and planning teams. Improved baseline assumptions by 82M.',
    chips: ['Python', 'SQL', 'ML', 'PyTorch'],
    href: '/projects/petco',
  },
  {
    type: 'AI Agent · Analytics Engineering',
    title: 'Variance Intelligence Agent',
    desc: 'Agentic pipeline for Live Nation that compares revenue projections to actuals and autonomously surfaces explanations using LLMs and web search.',
    chips: ['Python', 'LLM', 'SQL', 'RAG'],
    href: '/projects/variance-agent',
  },
  {
    type: 'Machine learning · NLP',
    title: "Can a dress review predict if it'll fit?",
    desc: '190k+ Rent the Runway reviews across three ML tasks — sentiment, event type, and fit prediction.',
    chips: ['Python', 'scikit-learn', 'TF-IDF', 'NLP'],
    href: '/projects/rent-the-runway',
  },
  {
    type: 'Causal inference · Marketing',
    title: 'Stop targeting people who were going to buy anyway.',
    desc: 'Uplift modeling on 120k users from a randomized ad experiment to maximize incremental profit.',
    chips: ['XGBoost', 'Polars', 'pyrsm', 'RCT'],
    href: '/projects/uplift-model',
  },
]

function ProjectCard({ p, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={p.href} className={styles.card}>
        <div className={styles.type}>{p.type}</div>
        <div className={styles.title}>{p.title}</div>
        <div className={styles.desc}>{p.desc}</div>
        <div className={styles.chips}>
          {p.chips.map(c => <span key={c} className={styles.chip}>{c}</span>)}
        </div>
        <span className={styles.link}>View project →</span>
      </Link>
    </motion.div>
  )
}

export default function Projects() {
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
          <HandMark kind="double">Projects</HandMark>
        </motion.p>
        <div className={styles.grid}>
          {projects.map((p, i) => <ProjectCard key={i} p={p} i={i} />)}
        </div>
      </div>
    </section>
  )
}