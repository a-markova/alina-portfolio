'use client'
import Image from 'next/image'
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

export default function RentTheRunway() {
  return (
    <main>
      <section className={styles.header}>
        <div className={styles.inner}>
          <Link href="/projects" className={styles.back}>← Back to projects</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className={styles.tags}>
              {['Machine learning', 'NLP', 'Python', 'scikit-learn', 'TF-IDF'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <h1 className={styles.heading}>Can a dress review predict if it'll fit?</h1>
            <p className={styles.subheading}>
              Three prediction tasks on 190,000+ Rent the Runway reviews — using customer language and body metadata to predict sentiment, event type, and fit. The short answer: text is powerful, fit is hard.
            </p>
            <div className={styles.meta}>
              <span><strong>Type</strong> Academic · ML</span>
              <span><strong>Dataset</strong> 190k+ RTR reviews</span>
              <span><strong>Models</strong> Logistic Regression · TF-IDF</span>
              <a href="https://a-markova.github.io/renttherunway/" target="_blank" rel="noopener" className={styles.ghLink}>View on GitHub ↗</a>
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
              { task: 'Task 1 · Sentiment', num: '+8.9pp', desc: 'accuracy lift over baseline' },
              { task: 'Task 2 · Event type', num: '+18.7pp', desc: 'largest gain — text carries event signal' },
              { task: 'Task 3 · Fit', num: '+0.2pp', desc: 'fit is selection-biased' },
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
              Rent the Runway sits on a gold mine of behavioral data — not just what customers rented, but what they said about it. This project asks: <strong>how much can we learn from a review?</strong> We built three separate classifiers on the same dataset, each targeting a different prediction problem, to understand where customer language is genuinely predictive — and where the data has natural limits.
            </p>
          </FadeIn>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>Three tasks, one dataset</p></FadeIn>
          {[
            {
              num: '01',
              title: 'Rating sentiment prediction',
              desc: 'Reviews bucketed into negative / neutral / positive to address heavy 5-star skew. The model learns sentiment from review text alone.',
              methods: ['TF-IDF unigrams + bigrams', 'Logistic regression', '3-class'],
              finding: 'Positive sentiment is easy to catch. Neutral is where errors cluster — the language between "fine" and "great" is genuinely ambiguous.',
              matrix: 'https://a-markova.github.io/renttherunway/matrix_task1.png',
              caption: 'Confusion matrix · TF-IDF + Logistic Regression · 73.6% accuracy',
            },
            {
              num: '02',
              title: 'Event category prediction',
              desc: 'Predicting what occasion the customer rented for — restricted to top 5 event categories to reduce sparse-label noise.',
              methods: ['TF-IDF unigrams + bigrams', 'Logistic regression', 'Top-5 labels'],
              finding: '"Wedding" and "formal affair" bleed into each other constantly. The model struggles where humans would too.',
              matrix: 'https://a-markova.github.io/renttherunway/matrix_task2.png',
              caption: 'Confusion matrix · TF-IDF + Logistic Regression · 53.5% accuracy',
            },
            {
              num: '03',
              title: 'Fit prediction',
              desc: 'Using structured metadata — height, weight, size, age, body type — to predict whether an item ran small, true to fit, or large.',
              methods: ['StandardScaler', 'OneHotEncoder', 'Logistic regression'],
              finding: 'Customers self-select toward items likely to fit. The dominant "fit" class makes beating baseline nearly impossible — which is itself a useful business insight.',
              matrix: 'https://a-markova.github.io/renttherunway/matrix_task3.png',
              caption: 'Confusion matrix · Logistic Regression + metadata · 73.8% accuracy',
            },
          ].map((task, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={styles.taskBlock}>
                <div className={styles.taskLeft}>
                  <div className={styles.taskNum}>Task {task.num}</div>
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
                <div className={styles.taskRight}>
                  <div className={styles.matrixWrap}>
                    <img src={task.matrix} alt={`Confusion matrix task ${task.num}`} className={styles.matrixImg} />
                    <div className={styles.matrixCaption}>{task.caption}</div>
                  </div>
                </div>
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
          <FadeIn><p className={styles.eyebrow}>What I'd do differently</p></FadeIn>
          <div className={styles.takeawayGrid}>
            {[
              { title: 'Try transformer embeddings', body: 'TF-IDF misses semantic similarity. Sentence embeddings would likely close the gap on Task 2.' },
              { title: 'Model fit as a ranking problem', body: 'Binary or ranking approaches might work better than 3-class given how dominant the fit class is.' },
              { title: 'Combine text + metadata', body: 'Tasks 1-2 used only text; Task 3 only structure. A combined model could surface richer signals.' },
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