'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './blog.module.css'

const posts = [
  {
    slug: 'max-diff',
    date: 'May 27, 2026',
    title: 'MaxDiff Analysis of MSBA Class Preferences',
    description: 'Using MaxDiff surveys to understand how MSBA students rank their elective preferences.',
    tags: ['Survey analysis', 'MaxDiff'],
    href: '/blog/max-diff',
  },
  {
    slug: 'poisson-regression',
    date: 'May 17, 2026',
    title: 'Poisson Regression and Maximum Likelihood Estimation',
    description: 'Does Blueprinty\'s software help engineering firms win more patents? A case study using Poisson regression and MLE on 1,500 firms.',
    tags: ['Statistics', 'Python', 'ML'],
    href: '/blog/poisson-regression',
  },
  {
    slug: 'diff-diff',
    date: 'Apr 28, 2026',
    title: 'Replication of Card and Krueger (1994)',
    description: 'Does raising the minimum wage kill jobs? Replicating a landmark difference-in-differences study.',
    tags: ['Statistics', 'Econometrics'],
    href: '/blog/diff-diff',
  },
  {
    slug: 'ab-testing',
    date: 'Apr 15, 2026',
    title: 'A/B Testing a Call to Action',
    description: 'Classical frequentist statistics via simulation, using a website CTA A/B test as the example.',
    tags: ['Statistics', 'Simulation', 'Bayesian'],
    href: '/blog/ab-testing',
  },
]

function PostCard({ post, i }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const Tag = post.external ? 'a' : Link
  const extraProps = post.external ? { target: '_blank', rel: 'noopener' } : {}

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: i * 0.1 }}>
      <Tag href={post.href} className={styles.card} {...extraProps}>
        <div className={styles.cardTop}>
          <span className={styles.date}>{post.date}</span>
          <div className={styles.tags}>
            {post.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
        </div>
        <div className={styles.title}>{post.title}</div>
        <div className={styles.desc}>{post.description}</div>
        <span className={styles.link}>{post.external ? 'Read post ↗' : 'Read post →'}</span>
      </Tag>
    </motion.div>
  )
}

export default function Blog() {
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
            <p className={styles.eyebrow}>Writing</p>
            <h1 className={styles.heading}>Blog</h1>
            <p className={styles.subheading}>
              Notes on analytics, statistics, and the occasional tangent.
            </p>
          </motion.div>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '50px', background: 'var(--blush)', marginTop: '-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          {posts.length === 0 ? (
            <p className={styles.empty}>Posts coming soon.</p>
          ) : (
            <div className={styles.list}>
              {posts.map((p, i) => <PostCard key={p.slug} post={p} i={i} />)}
            </div>
          )}
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