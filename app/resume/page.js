'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import styles from './resume.module.css'

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
                  AI Powered Customer Analytics · Agentic AI · Business Intelligence Systems · Scalable Analytics · Web Mining & Recommender Systems · Project Management
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
                      <div className={styles.entryTitle}>Business Analyst</div>
                      <div className={styles.entryOrg}>Scientist.com</div>
                    </div>
                    <div className={styles.entryMeta}>
                      <span className={styles.entryDate}>Jun. 2026 – Present</span>
                      <span className={styles.entryLocation}>San Diego, CA</span>
                    </div>
                  </div>
                  <ul className={styles.bullets}>
                    <li>Partnered with dev and data science to launch a new reporting tool for clients and suppliers, delivered on schedule.</li>
                    <li>Built custom HTML visualizations and internal tools that streamline how reports are developed, maintained, and scaled.</li>
                    <li>Integrated AI/LLMs into the savings validation process, cutting monthly review time by over 70%.</li>
                    <li>Created new client and supplier reports that demonstrate platform value and support growth.</li>
                    <li>Mentored a summer intern through delivering their first supplier reports.</li>
                  </ul>
                </div>

                <div className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <div className={styles.entryTitle}>Financial Planner & Analyst Intern</div>
                      <div className={styles.entryOrg}>Scientist.com</div>
                    </div>
                    <div className={styles.entryMeta}>
                      <span className={styles.entryDate}>Jun. 2024 – Jul. 2025</span>
                      <span className={styles.entryLocation}>San Diego, CA</span>
                    </div>
                  </div>
                  <ul className={styles.bullets}>
                    <li>Created SQL-powered executive dashboards translating financial and operational data into decision-ready insights for leadership.</li>
                    <li>Assisted in building multi-year revenue and budget forecasts in Adaptive Insights in support of an upcoming transaction.</li>
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
                    <li>Analyzed market, competitor, and channel performance for EdTech clients, contributing to a 19% reduction in marketing costs.</li>
                    <li>Led user testing across acquisition and onboarding stages, increasing positive engagement by 22%.</li>
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
                  { label: 'Programming & Data', value: 'Python (pandas, polars, seaborn, numpy, sklearn, pyspark) · SQL · R · Snowflake · HTML/CSS/JS' },
                  { label: 'AI & Automation', value: 'LLM Integration · AI Agents · Prompt Engineering · Claude Code · Workflow & Report Automation' },
                  { label: 'BI & Analytics', value: 'Power BI · Tableau · Apache Superset · A/B Testing · Google Analytics' },
                  { label: 'Enterprise & Finance', value: 'NetSuite · Workday Adaptive Planning · Salesforce' },
                  { label: 'Decision Support', value: 'Excel (Advanced) · Adaptive Insights · Bloomberg' },
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
                        <span className={styles.entryTag}>MSBA Industry Capstone — Team Lead</span>
                      </div>
                    </div>
                    <div className={styles.entryMeta}>
                      <span className={styles.entryDate}>Jan. – Jun. 2026</span>
                    </div>
                  </div>
                  <ul className={styles.bullets}>
                    <li>Led a 4-person team designing a demand transference framework for Petco's inventory and planning teams.</li>
                    <li>Architected a new method for stock prioritization improving pre-existing baseline assumptions by 82M.</li>
                  </ul>
                </div>

                <div className={styles.entry}>
                  <div className={styles.entryHeader}>
                    <div>
                      <div className={styles.entryTitle}>
                        Variance Intelligence Agent
                        <span className={styles.entryTag}>Live Nation</span>
                      </div>
                    </div>
                    <div className={styles.entryMeta}>
                      <span className={styles.entryDate}>Jan. – Jun. 2026</span>
                    </div>
                  </div>
                  <ul className={styles.bullets}>
                    <li>Designed an agentic pipeline for post-event performance reporting, automating comparison of projections against actuals.</li>
                    <li>Built an LLM-orchestrated reasoning loop combining structured SQL results with web search to explain forecast misses.</li>
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
                  { title: 'Robert S. Sullivan Award for Exemplary Leadership', desc: 'Awarded by the UCSD Rady School of Management MSBA program.' },
                  { title: 'MSBA Cohort Representative', desc: 'Voice of a 160-member cohort, working with faculty to advocate for student needs and career-focused initiatives.' },
                  { title: 'Teaching Assistant', desc: 'Supported coursework and provided tutoring to reinforce quantitative and analytical concepts.' },
                ].map((l, i) => (
                  <div key={i} className={styles.leadershipItem}>
                    <span className={styles.leadershipTitle}>{l.title}</span>
                    <span className={styles.leadershipDesc}> — {l.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerSig}>Alina Markova, 2026</span>
          <a href="/files/resume.pdf" download className={styles.footerDownload}>Download PDF ↓</a>
        </div>
      </footer>
    </main>
  )
}
