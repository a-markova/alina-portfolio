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

export default function AIEnablement() {
  return (
    <main>
      <section className={styles.header}>
        <div className={styles.inner}>
          <Link href="/projects" className={styles.back}>← Back to projects</Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className={styles.tags}>
              {['AI Enablement', 'Product', 'Process Improvement', 'LLMs', 'APIs'].map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
            <h1 className={styles.heading}>AI Enablement at Scientist.com</h1>
            <p className={styles.subheading}>
              A couple of the manual processes I've helped automate this year, and how I've been sharing what I've learned with the rest of the company.
            </p>
            <div className={styles.meta}>
              <span><strong>Type</strong> AI Enablement · Process Improvement</span>
              <span><strong>Company</strong> Scientist.com</span>
              <span><strong>Role</strong> Business Intelligence Analyst</span>
              <span><strong>Timeline</strong> 2026</span>
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
              { task: 'Savings review', num: '70%+', desc: 'less time on my monthly review, and I still make the final call' },
              { task: 'Supplier success', num: '2 hrs → seconds', desc: 'for the supplier team\'s monthly subscription check' },
              { task: 'Workshops', num: '10-30', desc: 'people at a typical monthly AI workshop' },
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
          <FadeIn><p className={styles.eyebrow}>Background</p></FadeIn>
          <FadeIn delay={0.1}>
            <p className={styles.prose}>
              Most of my AI work this year started with noticing something someone did by hand every month and asking how it actually worked. Not all of it ended up needing AI. One of these projects uses an LLM, and the other is just an API, which turned out to be the better fit.
            </p>
          </FadeIn>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.blushBand}>
        <div className={styles.inner}>
          <FadeIn><p className={styles.eyebrow}>What I worked on</p></FadeIn>
          {[
            {
              num: '01',
              title: 'The supplier subscription checklist',
              desc: "I was working with the supplier success team on a reporting project that involved supplier subscriptions. When I asked how they kept track of who had what, they showed me a checklist where they added a checkmark image next to each of a couple dozen suppliers, after reading through PDFs from the CRM. Honestly, I was impressed they never missed one. But it took about two hours every month.",
              methods: ['User interviews', 'Process mapping', 'Vendor options', 'API'],
              label: 'What we did',
              finding: "I checked with the CRM's admin to see what our subscription included, and there were both API and MCP options. Since we only needed to read the data, the API made the most sense. It was cheaper, and we could always add the MCP later. I worked with the AI enablement and dev teams to set it up, and the monthly check now takes seconds.",
            },
            {
              num: '02',
              title: 'My monthly savings review',
              desc: "Every month I review the customer savings we report to make sure they're accurate. I'd done this by hand for months, so I knew what usually needed correcting and how to judge how big an issue was. I put that into a workflow where scripts and set steps handle all the numbers, so the results come out the same every time.",
              methods: ['LLMs', 'Python scripts', 'Human in the loop', 'Workflow design'],
              label: 'How it works',
              finding: "The one place the LLM makes a judgment call is reading a platform proposal and deciding whether it's actually comparable to the winning one. I used to do that part myself, but it knows a lot more about scientific processes than I do. It gives me its call, how confident it is, and the details it noticed, and I decide what's correct. It feels more like having an assistant than handing off my job. Review time is down over 70%.",
            },
            {
              num: '03',
              title: 'Sharing it',
              desc: "I built a knowledge base for my team out of markdown files, organized so AI tools can find the context they need without using a ton of tokens. I also help with the company's monthly AI workshops, which usually have 10 to 30 people, and sometimes I lead the session.",
              methods: ['Knowledge management', 'Markdown', 'Workshops', 'Teaching'],
              label: "How it's going",
              finding: "My sessions are mostly about efficiency, but my favorite part is when people show what they've built, like onboarding tools and playbooks. The feedback has been really positive.",
            },
          ].map((task, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className={styles.taskBlock}>
                <div className={styles.taskLeft}>
                  <div className={styles.taskNum}>Part {task.num}</div>
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
          <FadeIn><p className={styles.eyebrow}>Things I keep in mind</p></FadeIn>
          <div className={styles.takeawayGrid}>
            {[
              { title: 'Ask how the work gets done first', body: 'Both of these started with asking how something actually worked, before thinking about tools.' },
              { title: 'Use AI where it\'s needed', body: 'I\'d rather have scripts and APIs handle the numbers so they\'re reproducible, and save the LLM for the steps that need reasoning.' },
              { title: 'Keep a person in the loop', body: 'Someone should always make the final call, ideally someone who\'s done the work by hand.' },
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
