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

export default function ScientistBI() {
  return (
    <main>
      <section className={styles.header}>
        <div className={styles.inner}>
          <Link href="/projects" className={styles.back}>← Back to projects</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className={styles.tags}>
              {['Product', 'Business Intelligence', 'Requirements', 'Prioritization', 'Life Sciences'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <h1 className={styles.heading}>Scientist.com's First In-House BI Tool</h1>
            <p className={styles.subheading}>
              Scientist.com's suppliers had never seen their own data on the platform. We built the company's first in-house BI tool from the ground up: procurement dashboards for customers and digital reporting for suppliers. Today it's the primary reporting source for internal teams, customers, and suppliers.
            </p>
            <div className={styles.meta}>
              <span><strong>Type</strong> Business Intelligence · Product</span>
              <span><strong>Company</strong> Scientist.com</span>
              <span><strong>Role</strong> Business Intelligence Analyst · led cross-functional delivery</span>
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
              { task: 'Adoption', num: 'Primary source', desc: 'Now the main reporting source for internal teams, customers, and suppliers' },
              { task: 'Supplier milestone', num: 'Digital-first', desc: 'Gave suppliers their first view of procurement and spend data on the platform' },
              { task: 'Scope', num: 'End-to-end', desc: 'Requirements, priorities, and launch plan across engineering, data science, customer success, and supplier success' },
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
              Scientist.com is a marketplace for scientific research, connecting biotech and pharma companies with research suppliers. Before this project, <strong>neither side could really see their own activity on the platform.</strong> Customers couldn't check procurement status or spend trends, and suppliers had no digital view of their orders or volume. Reporting was manual and slow. As a founding member of the BI team, I led the cross-functional work to change that.
            </p>
          </FadeIn>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>How it came together</p></FadeIn>
          {[
            {
              num: '01',
              title: 'Talking to users and setting priorities',
              desc: 'I started with stakeholder interviews across sales, customer success, and leadership to understand what each audience needed to answer. Then I mapped those questions to the data we had and turned them into requirements and a prioritized list of what to build first.',
              methods: ['Stakeholder interviews', 'Requirements', 'Prioritization', 'Data audit'],
              finding: 'Customers and suppliers wanted different things. Customers cared about spend and procurement status, and suppliers cared about order volume and how they were doing on the platform. So we planned two separate reporting experiences instead of one.',
            },
            {
              num: '02',
              title: 'Building it with engineering',
              desc: 'I worked directly with engineering to define the data behind each report: the grain, the aggregations, and the business logic. We built the reports into the product itself instead of using a standalone BI tool.',
              methods: ['SQL', 'Data modeling', 'Cross-functional collaboration', 'Custom reporting'],
              finding: 'Building inside the product took more coordination with the devs, but the reports feel like part of the platform. That mattered a lot for getting suppliers to actually use them.',
            },
            {
              num: '03',
              title: 'Launching to suppliers',
              desc: 'We put together a launch plan with customer success and supplier success and rolled out the supplier reporting, Scientist.com\'s first digital reporting for suppliers. For a lot of them, it was the first time seeing their own data in one place.',
              methods: ['Launch plan', 'Stakeholder QA', 'Data validation', 'Rollout'],
              finding: 'These were outside users seeing data about themselves for the first time, so accuracy and framing needed extra care. Getting them to trust the numbers mattered as much as the numbers.',
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
              { title: 'Deeper supplier analytics', body: 'The first reports built trust. Next could be trend views, benchmarking, and recommendations that help suppliers do better on the platform.' },
              { title: 'Proactive alerts', body: 'Instead of waiting for someone to pull a report, flag anomalies or stalled procurement and let people know.' },
              { title: 'Data science integration', body: 'Pair the reporting with the data science team\'s models so people see predictions next to the history.' },
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
