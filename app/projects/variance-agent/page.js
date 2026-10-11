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

export default function VarianceAgent() {
  return (
    <main>
      <section className={styles.header}>
        <div className={styles.inner}>
          <Link href="/projects" className={styles.back}>← Back to projects</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className={styles.tags}>
              {['AI Agent', 'Analytics Engineering', 'Python', 'LLM', 'SQL', 'RAG'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <h1 className={styles.heading}>Variance Intelligence Agent</h1>
            <p className={styles.subheading}>
              Post-event finance reporting is manual, slow, and misses context. This agentic pipeline for Live Nation automatically compares projections to actuals — and explains why they diverged, using both internal data and the open web.
            </p>
            <div className={styles.meta}>
              <span><strong>Type</strong> AI Agent · Analytics Engineering</span>
              <span><strong>Client</strong> Live Nation</span>
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
          <FadeIn><p className={styles.eyebrow}>What it does</p></FadeIn>
          <div className={styles.resultsGrid}>
            {[
              { task: 'Input', num: 'Projections', desc: 'Revenue and attendance forecasts for each event' },
              { task: 'Process', num: 'Autonomous', desc: 'LLM-orchestrated reasoning loop combining SQL and web search' },
              { task: 'Output', num: 'Explanations', desc: 'Natural language variance explanations with supporting evidence' },
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
              After every event, Live Nation's finance team has to explain why revenue came in above or below forecast. That process is manual: pull actuals from SQL, compare to projections in a spreadsheet, then search for context (weather, competing events, ticket sales timing) to explain the gaps. <strong>The analysis takes hours. The LLM can do it in seconds.</strong> We built an agentic pipeline that runs this reasoning loop automatically — querying structured data and external sources — and writes a variance explanation you can actually use.
            </p>
          </FadeIn>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>How it works</p></FadeIn>
          {[
            {
              num: '01',
              title: 'Structured data retrieval',
              desc: 'The agent pulls actuals from the data warehouse using SQL — revenue, attendance, ticket breakdowns — and computes variance against the stored projection for each event.',
              methods: ['SQL', 'Snowflake', 'Python', 'Data warehouse'],
              finding: 'Structuring the SQL output for the LLM context was the most important engineering decision — the quality of explanations scaled directly with how cleanly the numbers were presented.',
            },
            {
              num: '02',
              title: 'External context retrieval (RAG)',
              desc: 'For events with meaningful variance, the agent searches the open web for context: weather reports, competing events in the market, news about the artist, or regional factors that might explain the gap.',
              methods: ['Web search', 'RAG', 'LLM', 'Context grounding'],
              finding: 'Web search added explanatory power for outlier events — cases where internal data alone couldn\'t account for unusually high or low attendance.',
            },
            {
              num: '03',
              title: 'LLM reasoning loop',
              desc: 'An LLM orchestrates the full process: decides which tools to invoke, synthesizes structured and unstructured evidence, and produces a concise variance narrative that distinguishes signal from noise.',
              methods: ['LLM orchestration', 'Tool use', 'Prompt engineering', 'Chain of thought'],
              finding: 'Multi-step reasoning (not just retrieval) was key — the model needed to weigh contradictory signals and decide what was worth surfacing to a finance audience.',
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
              { title: 'Add cost constraint modeling', body: 'Right now the agent explains variance. A natural extension is forecasting: given current signals, what should we expect next quarter?' },
              { title: 'Structured citation output', body: 'Finance teams need to trust the explanations. Adding source citations for each claim would make the output auditable and presentation-ready.' },
              { title: 'Human-in-the-loop review', body: 'High-stakes variance explanations should have a review step before they reach a stakeholder. Building an approval workflow would be the next production milestone.' },
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
