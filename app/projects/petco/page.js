'use client'
import Link from 'next/link'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './project.module.css'
import Signature from '../../components/Signature'

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
              {['Retail Analytics', 'SQL', 'Python', 'Basket Analysis', 'Inventory Planning'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <h1 className={styles.heading}>Petco Product Substitution & Demand Transference</h1>
            <p className={styles.subheading}>
              When a product goes out of stock, where does that demand go? We spent a lot of this project looking for the answer in a model, and ended up finding it in how people actually fill their baskets.
            </p>
            <div className={styles.meta}>
              <span><strong>Type</strong> MSBA Industry Capstone · Project Lead</span>
              <span><strong>Partner</strong> Petco</span>
              <span><strong>Team</strong> 4 people</span>
              <span><strong>Timeline</strong> Mar. – Jun. 2026</span>
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
              { task: 'Inventory impact', num: '$82M', desc: 'immediate inventory impact from the departments we prioritized' },
              { task: 'The improvement', num: 'Defensible', desc: 'a prioritization that is clear and supported by numbers, not assumptions' },
              { task: 'Role', num: 'Project Lead', desc: 'on a 4-person team' },
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
              Petco wanted to understand how demand shifts when products are out of stock, so their inventory and planning teams could prioritize the right things. The tricky part is that you can't see what someone would have bought instead. <strong>All you can observe is what actually ended up in their purchase.</strong>
            </p>
          </FadeIn>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>How it went</p></FadeIn>
          {[
            {
              num: '01',
              title: 'Looking for it in a model',
              desc: "We started where most people would: research on substitution and stockouts, Petco's existing baseline, and product-level data. For a long time we were convinced the solution was in a model somewhere, and we kept looking for the right one.",
              methods: ['Literature review', 'Baseline review', 'Product attributes'],
              label: 'Where we got stuck',
              finding: "The product level was too granular to show a clear pattern. Looking back, we were trying to predict something we couldn't observe. You can't look into someone's head, you can only see what they bought.",
            },
            {
              num: '02',
              title: 'Basket dominance',
              desc: "So we went back to the one thing we could observe: purchase orders. We looked at them at the department level and measured how often a department dominated the dollar share of a purchase. The departments that regularly made up most of the basket got prioritized.",
              methods: ['SQL', 'Python', 'Purchase order data', 'Basket analysis'],
              label: 'What worked',
              finding: "Moving up from products to departments is what made the pattern show up. The real improvement over Petco's baseline is that the prioritization is clear, defensible, and supported by numbers. The departments we prioritized carry $82M in immediate inventory impact.",
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
                    <div className={styles.findingLabel}>{task.label}</div>
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
          <FadeIn><p className={styles.eyebrow}>Where it could go from here</p></FadeIn>
          <div className={styles.takeawayGrid}>
            {[
              { title: 'A smaller prediction model', body: "Now that the important departments are narrowed down, the product attributes are a lot more focused. Petco could explore a smaller model from here instead of trying to predict everything at once." },
              { title: 'What I would tell us at the start', body: "Start with what you can actually observe. We lost a lot of time assuming the answer had to be a model." },
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
          <Signature year={2026} />
          <Link href="/projects" className={styles.footerBack}>← All projects</Link>
        </div>
      </footer>
    </main>
  )
}
