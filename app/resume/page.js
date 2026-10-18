'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './resume.module.css'
import Signature from '../components/Signature'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}>
      {children}
    </motion.div>
  )
}

export default function Resume() {
  return (
    <main>
      <section className={styles.header} style={{ overflow: 'visible' }}>
        <div className={styles.inner} style={{ position: 'relative', overflow: 'visible' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.headerTop}
          >
            <div>
              <p className={styles.eyebrow}>Experience</p>
              <h1 className={styles.heading}>Resume</h1>
            </div>
            <a href="/files/resume.pdf" download className={styles.downloadBtn}>
              Download PDF ↓
            </a>
          </motion.div>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.body}>
        <div className={styles.inner}>

          {/* ── EDUCATION ── */}
          <FadeIn>
            <div className={styles.section}>
              <div className={styles.sectionLabel}>Education</div>
              <div className={styles.entries}>

                <div className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <div className={styles.entryTitle}>University of California San Diego</div>
                      <div className={styles.entrySubtitle}>MS Business Analytics, Spec. in ML & AI</div>
                    </div>
                    <div className={styles.entryMeta}>
                      <span className={styles.entryDate}>Jun. 2026</span>
                      <span className={styles.entryLocation}>La Jolla, CA</span>
                    </div>
                  </div>
                </div>

                <div className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <div className={styles.entryTitle}>University of California San Diego</div>
                      <div className={styles.entrySubtitle}>BS Business Economics, Minor in Finance</div>
                    </div>
                    <div className={styles.entryMeta}>
                      <span className={styles.entryDate}>Jun. 2025</span>
                      <span className={styles.entryLocation}>La Jolla, CA</span>
                    </div>
                  </div>
                </div>

                <div className={styles.coursework}>
                  <span className={styles.courseworkLabel}>Relevant coursework</span>
                  Project Management · Business Intelligence Systems · AI-Enabled Customer Analytics · Agentic AI · Web Mining & Recommender Systems
                </div>

              </div>
            </div>
          </FadeIn>

          {/* ── EXPERIENCE ── */}
          <FadeIn delay={0.05}>
            <div className={styles.section}>
              <div className={styles.sectionLabel}>Experience</div>
              <div className={styles.entries}>

                <div className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <div className={styles.entryTitle}>Business Intelligence Analyst</div>
                      <div className={styles.entryOrg}>Scientist.com</div>
                    </div>
                    <div className={styles.entryMeta}>
                      <span className={styles.entryDate}>Jun. 2026 – Present</span>
                      <span className={styles.entryLocation}>San Diego, CA</span>
                    </div>
                  </div>
                  <ul className={styles.bullets}>
                    <li>Founding member of the BI team; led cross-functional delivery of the company's first in-house BI tool, now the primary reporting source for internal teams, customers, and suppliers.</li>
                    <li>Partnered with engineering, data science, customer success, and supplier success to turn customer and business needs into requirements, priorities, and a launch plan.</li>
                    <li>Integrated LLMs into the savings validation workflow, cutting monthly review time by over 70%.</li>
                    <li>Identified a 2-hour monthly manual PDF review on the supplier success team; partnered with AI enablement and engineering to replace it with an API that runs in seconds.</li>
                    <li>Manage the team's intern, scoping projects and reviewing deliverables.</li>
                  </ul>
                </div>

                <div className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <div className={styles.entryTitle}>Financial Planning & Analysis (FP&A) Intern</div>
                      <div className={styles.entryOrg}>Scientist.com</div>
                    </div>
                    <div className={styles.entryMeta}>
                      <span className={styles.entryDate}>Jun. 2024 – Jul. 2025</span>
                      <span className={styles.entryLocation}>San Diego, CA</span>
                    </div>
                  </div>
                  <ul className={styles.bullets}>
                    <li>Supported multi-year revenue and budget forecasts in Adaptive Insights ahead of a company transaction.</li>
                    <li>Built SQL-powered executive summaries that gave leadership decision-ready views of financial and operational performance.</li>
                  </ul>
                </div>

                <div className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <div className={styles.entryTitle}>Consulting Intern</div>
                      <div className={styles.entryOrg}>Mentor Global Consultants</div>
                    </div>
                    <div className={styles.entryMeta}>
                      <span className={styles.entryDate}>Jan. 2024 – Apr. 2024</span>
                      <span className={styles.entryLocation}>San Diego, CA</span>
                    </div>
                  </div>
                  <ul className={styles.bullets}>
                    <li>Led user testing across acquisition and onboarding with 4 schools, turning findings into UX changes that raised positive engagement by 22%.</li>
                    <li>Analyzed market, competitor, and channel performance to shape an EdTech product launch, cutting marketing costs by 19%.</li>
                  </ul>
                </div>

              </div>
            </div>
          </FadeIn>

          {/* ── SKILLS ── */}
          <FadeIn delay={0.1}>
            <div className={styles.section}>
              <div className={styles.sectionLabel}>Skills & Competencies</div>
              <div className={styles.skillsGrid}>
                {[
                  { label: 'Product', value: 'Requirements gathering · Stakeholder management · Prioritization · User testing · A/B testing · Prototyping' },
                  { label: 'Technical', value: 'SQL · Python · Snowflake · HTML/CSS/JS · LLM integration & AI agents' },
                  { label: 'Tools', value: 'Apache Superset · Power BI · Tableau · GitHub · Slack · Salesforce · HubSpot · NetSuite · Google Analytics · Excel' },
                ].map((s, i) => (
                  <div key={i} className={styles.skillRow}>
                    <span className={styles.skillLabel}>{s.label}</span>
                    <span className={styles.skillValue}>{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* ── PROJECTS ── */}
          <FadeIn delay={0.15}>
            <div className={styles.section}>
              <div className={styles.sectionLabel}>Projects</div>
              <div className={styles.entries}>

                <div className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <div className={styles.entryTitle}>
                        Petco Product Substitution & Demand Transference
                        <span className={styles.entryTag}>Capstone · Project Lead</span>
                      </div>
                    </div>
                    <div className={styles.entryMeta}>
                      <span className={styles.entryDate}>Mar. – Jun. 2026</span>
                    </div>
                  </div>
                  <ul className={styles.bullets}>
                    <li>Led a 4-person team building a demand transference framework for Petco's inventory and planning teams.</li>
                    <li>Designed a clear, data-backed stock prioritization method based on basket dominance, with $82M in immediate inventory impact.</li>
                  </ul>
                </div>

                <div className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <div className={styles.entryTitle}>
                        Ad Targeting Uplift Model
                        <span className={styles.entryTag}>Creative Gaming</span>
                      </div>
                    </div>
                    <div className={styles.entryMeta}>
                      <span className={styles.entryDate}>Mar. – Jun. 2026</span>
                    </div>
                  </div>
                  <ul className={styles.bullets}>
                    <li>Analyzed a 120K-user randomized ad experiment and built uplift models to identify which users ads actually persuade; targeting the top 25% maximized incremental profit versus a conversion-based approach.</li>
                  </ul>
                </div>

              </div>
            </div>
          </FadeIn>

          {/* ── LEADERSHIP ── */}
          <FadeIn delay={0.2}>
            <div className={styles.section}>
              <div className={styles.sectionLabel}>Leadership & Recognition</div>
              <div className={styles.leadershipList}>
                {[
                  { title: 'Robert S. Sullivan Award for Exemplary Leadership', desc: 'Awarded by the UCSD Rady School of Management.' },
                  { title: 'MSBA Cohort Representative', desc: 'Voice of a 160-member cohort, working with faculty on student needs.' },
                  { title: 'Teaching Assistant, UCSD (2 years)', desc: 'Business in Healthcare, Ethics of Accounting, Financial Statement Analysis.' },
                ].map((l, i) => (
                  <div key={i} className={styles.leadershipItem}>
                    <span className={styles.leadershipTitle}>{l.title}</span>
                    <span className={styles.leadershipDesc}>: {l.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Signature year={2026} />
          <a href="/files/resume.pdf" download className={styles.footerDownload}>Download PDF ↓</a>
        </div>
      </footer>
    </main>
  )
}
