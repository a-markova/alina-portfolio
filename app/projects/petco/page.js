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

export default function Petco() {
  return (
    <main>
      <section className={styles.header}>
        <div className={styles.inner}>
          <Link href="/projects" className={styles.back}>← Back to projects</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className={styles.tags}>
              {['Machine learning', 'SQL', 'Python', 'PyTorch', 'Demand Forecasting'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <h1 className={styles.heading}>Petco Product Substitution & Demand Transference</h1>
            <p className={styles.subheading}>
              When a product goes out of stock, where do customers go? We built a demand transference framework for Petco's inventory and planning teams — moving past pure product similarity to model how customer behavior drives substitution.
            </p>
            <div className={styles.meta}>
              <span><strong>Type</strong> MSBA Industry Capstone · Team Lead</span>
              <span><strong>Partner</strong> Petco</span>
              <span><strong>Team</strong> 4 people</span>
              <span><strong>Timeline</strong> Jan. – Jun. 2026</span>
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
              { task: 'Baseline improvement', num: '82M', desc: 'improvement over pre-existing baseline assumptions' },
              { task: 'Team size', num: '4', desc: 'cross-functional team with Petco data scientists' },
              { task: 'Approach', num: 'Behavior-driven', desc: 'substitution grounded in customer behavior, not just product similarity' },
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
              Petco's existing inventory planning relied on product-level similarity to model demand transference — if a product is out of stock, assume customers migrate to the nearest SKU. But <strong>customers don't think in SKUs</strong>. They think in brands, pack sizes, flavors, and habits. We set out to build a framework that models substitution the way customers actually behave, not the way a product catalog is organized.
            </p>
          </FadeIn>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>Our approach</p></FadeIn>
          {[
            {
              num: '01',
              title: 'Literature review & baseline audit',
              desc: 'We started by grounding the work in substitution research — academic literature on consumer choice, stockout response, and demand transference in retail. This shaped our model design from the start.',
              methods: ['Substitution theory', 'Consumer behavior research', 'Baseline gap analysis'],
              finding: 'Existing baseline used pure product-attribute similarity. We found the largest gaps where customer loyalty and pack-size preference mattered more than ingredient overlap.',
            },
            {
              num: '02',
              title: 'Behavior-driven feature engineering',
              desc: 'Rather than relying only on product attributes, we constructed features from observed purchase history — repeat buy rates, brand switching patterns, and cross-category behavior under stockout conditions.',
              methods: ['Python', 'SQL', 'Feature engineering', 'Transaction data'],
              finding: 'Brand loyalty was a stronger predictor of substitution direction than product category similarity in pet food and treats segments.',
            },
            {
              num: '03',
              title: 'Demand transference model',
              desc: 'We built a model that allocates demand from out-of-stock SKUs to in-stock alternatives, weighted by behavioral signals. Output feeds directly into inventory prioritization and buy decisions.',
              methods: ['PyTorch', 'Python', 'Cross-validation', 'Inventory planning integration'],
              finding: 'The framework improved pre-existing baseline assumptions by 82M — a meaningful shift for inventory and markdown planning.',
            },
          ].map((task, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={styles.taskBlock}>
                <div className={styles.taskLeft}>
                  <div className={styles.taskNum}>Step {task.num}</div>
                  <div className={styles.taskTitle}>{task.title}</div>
                  <p className={styles.taskDesc}>{task.desc}</p>
                  <div className={styles.methodPills}>
                    {task.methods.map(m => <span key={m} className={styles.methodPill}>{m}</span>)}
                  </div>
                  <div className={styles.finding}>
                    <div className={styles.findingLabel}>Key finding</div>
                    {task.finding}
                  </div>
                </div>
                <div className={styles.taskRight} />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--white)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 0 C150 50 300 50 450 0 C600 -50 750 50 900 0 L900 50 L0 50Z" fill="var(--blush)" />
      </svg>

      <section className={styles.whiteBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>What I'd do next</p></FadeIn>
          <div className={styles.takeawayGrid}>
            {[
              { title: 'Incorporate price elasticity', body: 'Substitution behavior changes when price gaps between alternatives are large. Adding elasticity signals would sharpen the model further.' },
              { title: 'Test on seasonal categories', body: 'Stockout behavior during peak seasons (holidays, flea season) likely differs from baseline — a seasonal variant would be worth validating.' },
              { title: 'Close the feedback loop', body: 'Tying model outputs back to realized demand post-stockout would let Petco continuously recalibrate transference weights.' },
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
