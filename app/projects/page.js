'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './projects.module.css'

const projects = [
  {
    slug: 'scientist-bi',
    type: 'Business Intelligence · Product',
    title: 'Scientist.com Custom BI Reports',
    desc: 'Launched the platform\'s first custom reporting experience — supplier dashboards giving partners their first taste of digital reporting, plus client-facing procurement analytics.',
    chips: ['SQL', 'Data Modeling', 'BI', 'Product'],
    image: '/images/scientist/cover.svg',
  },
  {
    slug: 'petco',
    type: 'Capstone · ML',
    title: 'Petco Product Substitution Model',
    desc: 'Led a 4-person team designing a demand transference framework for Petco\'s inventory and planning teams. Improved baseline assumptions by 82M.',
    chips: ['Python', 'SQL', 'ML', 'PyTorch'],
    image: '/images/petco/cover.svg',
  },
  {
    slug: 'variance-agent',
    type: 'AI Agent · Analytics Engineering',
    title: 'Variance Intelligence Agent',
    desc: 'Agentic pipeline for Live Nation that compares revenue projections to actuals and autonomously surfaces explanations using LLMs and web search.',
    chips: ['Python', 'LLM', 'SQL', 'RAG'],
    image: '/images/variance/cover.svg',
  },
  {
    slug: 'rent-the-runway',
    type: 'Machine learning · NLP',
    title: "Can a dress review predict if it'll fit?",
    desc: '190k+ Rent the Runway reviews across three ML tasks — sentiment, event type, and fit prediction.',
    chips: ['Python', 'scikit-learn', 'TF-IDF', 'NLP'],
    image: '/images/renttherunway/cover.jpeg',
  },
  {
    slug: 'uplift-model',
    type: 'Causal inference · Marketing',
    title: 'Stop targeting people who were going to buy anyway.',
    desc: 'Uplift modeling on 120k users from a randomized ad experiment to maximize incremental profit.',
    chips: ['XGBoost', 'Polars', 'pyrsm', 'RCT'],
    image: '/images/uplift/cover.jpeg',
  },
]

function ProjectCard({ p, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Link href={`/projects/${p.slug}`} className={styles.card}>
        <div className={styles.cardImage}>
          <Image
            src={p.image}
            alt={p.title}
            width={600}
            height={300}
            className={styles.coverImg}
          />
        </div>
        <div className={styles.cardBody}>
          <div className={styles.type}>{p.type}</div>
          <div className={styles.title}>{p.title}</div>
          <div className={styles.desc}>{p.desc}</div>
          <div className={styles.chips}>
            {p.chips.map(c => <span key={c} className={styles.chip}>{c}</span>)}
          </div>
          <span className={styles.link}>View project →</span>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ProjectsPage() {
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
            <p className={styles.eyebrow}>Work</p>
            <h1 className={styles.heading}>Projects</h1>
            <p className={styles.subheading}>
              A selection of analytical work spanning machine learning, causal inference, and business intelligence.
            </p>
          </motion.div>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '50px', background: 'var(--blush)', marginTop: '-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          <div className={styles.grid}>
            {projects.map((p, i) => <ProjectCard key={p.slug} p={p} i={i} />)}
          </div>
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