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

export default function ScientistBI() {
  return (
    <main>
      <section className={styles.header}>
        <div className={styles.inner}>
          <Link href="/projects" className={styles.back}>← Back to projects</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className={styles.tags}>
              {['Business Intelligence', 'Product', 'SQL', 'Data Modeling', 'Stakeholder Management'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <h1 className={styles.heading}>Scientist.com's First Custom BI Reports</h1>
            <p className={styles.subheading}>
              Scientist.com's suppliers had never seen their own data on the platform. We built the first custom reporting experience from the ground up — procurement dashboards for customers and digital reporting for suppliers that gave them a real window into their platform activity for the first time.
            </p>
            <div className={styles.meta}>
              <span><strong>Type</strong> Business Intelligence · Product</span>
              <span><strong>Company</strong> Scientist.com</span>
              <span><strong>Role</strong> Business Analyst — end-to-end ownership</span>
              <span><strong>Launched</strong> 2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>Impact at a glance</p></FadeIn>
          <div className={styles.resultsGrid}>
            {[
              { task: 'First ever', num: 'Custom BI', desc: 'Scientist.com\'s first custom reporting experience for customers and suppliers' },
              { task: 'Supplier milestone', num: 'Digital-first', desc: 'Gave suppliers their first view of procurement and spend data on the platform' },
              { task: 'Scope', num: 'End-to-end', desc: 'Requirements, data modeling, dev collaboration, and stakeholder delivery' },
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
              Scientist.com is a marketplace for scientific research — connecting biotech and pharma clients with suppliers worldwide. Before this project, <strong>neither side had visibility into their own activity on the platform.</strong> Customers couldn't see procurement status or spend trends. Suppliers had no digital window into orders, volume, or platform engagement. Reporting was ad-hoc, manual, and slow. I was brought in as the founding analytics hire to change that.
            </p>
          </FadeIn>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>How we built it</p></FadeIn>
          {[
            {
              num: '01',
              title: 'Requirements & data discovery',
              desc: 'Started with stakeholder interviews across sales, customer success, and leadership to understand what questions each audience needed answered. Then mapped those questions to the available data.',
              methods: ['Stakeholder interviews', 'SQL', 'Data audit', 'Requirements docs'],
              finding: 'Customer and supplier needs were fundamentally different — customers wanted spend visibility and procurement status, suppliers wanted order volume and platform performance. Two separate reporting surfaces, not one.',
            },
            {
              num: '02',
              title: 'Data modeling & dev collaboration',
              desc: 'Worked directly with the engineering team to define the data models powering each report — specifying grain, aggregations, and business logic. Built the reporting layer in close collaboration with devs rather than in a standalone BI tool.',
              methods: ['SQL', 'Data modeling', 'Cross-functional collaboration', 'Custom reporting'],
              finding: 'Building custom within the product (vs. a standalone BI tool) meant tighter dev collaboration but a much better user experience — the reports felt native to the platform, which mattered for supplier adoption.',
            },
            {
              num: '03',
              title: 'Supplier-facing launch',
              desc: 'Designed and launched the supplier reporting experience — Scientist.com\'s first digital reporting product for suppliers. For many, this was their first time seeing their own procurement and spend data surfaced in one place.',
              methods: ['Product design', 'Stakeholder QA', 'Data validation', 'Launch'],
              finding: 'The supplier reports required extra care around data accuracy and framing — these were external users seeing platform data about themselves for the first time. Getting the trust layer right mattered as much as the data layer.',
            },
          ].map((task, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={styles.taskBlock}>
                <div className={styles.taskLeft}>
                  <div className={styles.taskNum}>Phase {task.num}</div>
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
          <FadeIn><p className={styles.eyebrow}>What's next</p></FadeIn>
          <div className={styles.takeawayGrid}>
            {[
              { title: 'Deeper supplier analytics', body: 'The initial reports established trust. The next phase is richer analytics — trend views, benchmarking, and recommendations that help suppliers optimize their platform presence.' },
              { title: 'Proactive alerting', body: 'Moving from passive reporting to active intelligence: surface anomalies, flag stalled procurement, and notify stakeholders before they need to pull a report.' },
              { title: 'Data science integration', body: 'Combining the reporting foundation with the data science team\'s models to deliver predictive signals alongside historical analytics.' },
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
