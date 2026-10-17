'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './project.module.css'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  )
}

export default function UpliftModel() {
  return (
    <main>
      <section className={styles.header}>
        <div className={styles.inner}>
          <Link href="/projects" className={styles.back}>← Back to projects</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className={styles.tags}>
              {['Causal inference', 'Marketing analytics', 'Python', 'XGBoost', 'Polars'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <h1 className={styles.heading}>Stop targeting people who were going to buy anyway.</h1>
            <p className={styles.subheading}>
              Creative Gaming spent ad budget on customers who didn't need convincing. This uplift model finds the ones who do — and quantifies exactly how much profit that difference is worth.
            </p>
            <div className={styles.meta}>
              <span><strong>Type</strong> Marketing analytics · Causal ML</span>
              <span><strong>Dataset</strong> 120,000 users · RCT</span>
              <span><strong>Models</strong> Logistic · RF · XGBoost · MLP</span>
              <a href="https://github.com/a-markova/uplift_model_cg" target="_blank" rel="noopener" className={styles.ghLink}>View on GitHub ↗</a>
            </div>
          </motion.div>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>Results at a glance</p></FadeIn>
          <div className={styles.resultsGrid}>
            {[
              { task: 'Optimal target', num: 'Top 25%', desc: 'of users by uplift score maximizes incremental profit' },
              { task: 'Dataset', num: '120k', desc: 'users in randomized controlled trial' },
              { task: 'Models compared', num: '4', desc: 'logistic, random forest, XGBoost, neural network' },
            ].map((r, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={styles.resultCard}>
                  <div className={styles.resultTask}>{r.task}</div>
                  <div className={styles.resultNum}>{r.num}</div>
                  <div className={styles.resultDesc}>{r.desc}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--white)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 0 C150 50 300 50 450 0 C600 -50 750 50 900 0 L900 50 L0 50Z" fill="var(--blush)" />
      </svg>

      <section className={styles.whiteBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>The problem</p></FadeIn>
          <FadeIn delay={0.1}>
            <p className={styles.prose}>
              Creative Gaming launched a mobile game at $14.99 and sales lagged. They ran a randomized ad experiment — but the real question wasn't "does advertising work?" It was: <strong>who does advertising actually work on?</strong> A traditional propensity model finds users most likely to convert, but many would have bought regardless. Targeting them wastes budget. Worse, some users are put off by ads — targeting them loses money.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className={styles.insightBox}>
              <div className={styles.insightLabel}>The core insight</div>
              Maximizing conversion rate is not the same as maximizing profit. The goal is to find users whose behavior actually changes because of the ad — and only target them.
            </div>
          </FadeIn>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>The four customer segments</p></FadeIn>
          <div className={styles.segmentGrid}>
            {[
              { name: 'Persuadables', desc: 'Will convert only if shown the ad. The entire point of uplift modeling is to find these people.', action: 'Target', accent: true },
              { name: 'Sure things', desc: 'Will convert regardless of ads. Targeting them wastes budget with zero incremental gain.', action: 'Skip', accent: false },
              { name: 'Lost causes', desc: "Won't convert either way. No amount of advertising moves the needle.", action: 'Skip', accent: false },
              { name: 'Sleeping dogs', desc: 'Actually less likely to convert when shown an ad. Targeting them actively destroys value.', action: 'Avoid', accent: false },
            ].map((s, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={`${styles.segCard} ${s.accent ? styles.segAccent : ''}`}>
                  <div className={styles.segName}>{s.name}</div>
                  <div className={styles.segDesc}>{s.desc}</div>
                  <span className={`${styles.segAction} ${s.accent ? styles.segActionAccent : ''}`}>{s.action}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--white)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 0 C150 50 300 50 450 0 C600 -50 750 50 900 0 L900 50 L0 50Z" fill="var(--blush)" />
      </svg>

      <section className={styles.whiteBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>What I'd do differently</p></FadeIn>
          <div className={styles.takeawayGrid}>
            {[
              { title: 'Add cost constraints', body: 'Real campaigns have per-user ad costs that vary. A constrained optimization layer would make the profit model more production-ready.' },
              { title: 'Try X-learner', body: 'The X-learner handles imbalanced treatment/control splits better than T-learner — worth testing given typical RCT designs.' },
              { title: 'Calibrate probabilities', body: 'Raw model scores are not true probabilities. Platt scaling or isotonic regression would improve the profit extrapolation accuracy.' },
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={styles.takeaway}>
                  <div className={styles.takeawayTitle}>{t.title}</div>
                  <div className={styles.takeawayBody}>{t.body}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerSig}>Alina Markova, 2026</span>
          <Link href="/projects" className={styles.footerBack}>← All projects</Link>
        </div>
      </footer>
    </main>
  )
}