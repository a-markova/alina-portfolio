'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import GaudyFrame from '../components/GaudyFrame'
import HandMark from '../components/HandMark'
import Signature from '../components/Signature'
import styles from './about.module.css'

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}

export default function About() {
  return (
    <main>

      {/* ── HERO ── */}
      <section className={styles.heroSection} style={{ position: 'relative' }}>
        <GaudyFrame src="/images/paintings/dusk.jpg" alt="Painting of a stormy sky over a meadow" caption="stormy sky" variant="silver" side="left" top="110px" tilt={-3} />
        <GaudyFrame src="/images/paintings/wave.jpg" alt="Painting of a wave crashing on a rocky shore" caption="the wave" price="$8" sold variant="gold" side="right" top="200px" tilt={2.5} />
        <div className={styles.heroInner}>
          <motion.div
            className={styles.heroLeft}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className={styles.eyebrow}><HandMark kind="line">About me</HandMark></p>
            <h1 className={styles.heroName}>
              Data worker.<br />
              <em className={styles.accent}>with hobbies</em>
            </h1>
            <p className={styles.heroBio}>
              At work, I'm pulling data for internal teams, building reporting for external ones, and dabbling in data science and dev. My favorite part is connecting all the teams it takes to get a project across the finish line.
            </p>
            <p className={styles.heroBio}>
              At home, I'm always spending time with loved ones, trying to get outside, and fiddling with art projects!
            </p>
          </motion.div>

          <motion.div
            className={styles.heroRight}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className={styles.portraitWrap}>
              <Image
                src="/images/Alina_Headshot4.jpeg"
                alt="Alina Markova"
                width={320}
                height={380}
                className={styles.portrait}
                priority
              />
              <div className={styles.portraitAccent} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wave */}
      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '50px', background: 'var(--blush)', marginTop: '-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      {/* ── EDUCATION ── */}
      <section className={styles.blushBand}>
        <div className={styles.inner} style={{ position: 'relative', overflow: 'visible' }}>
          <FadeIn>
            <p className={styles.eyebrow}><HandMark kind="double">Education</HandMark></p>
          </FadeIn>
          <div className={styles.eduGrid}>
            {[
              {
                degree: 'MS Business Analytics (STEM)',
                school: 'UC San Diego — Rady School of Management',
                year: 'June 2026',
                note: 'Cohort Representative, Sullivan Award Recipient',
              },
              {
                degree: 'BS Business Economics',
                school: 'UC San Diego',
                year: 'June 2025',
                note: 'Focus in Finance and Data Analytics',
              },
            ].map((e, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={styles.eduCard}>
                  <div className={styles.eduDegree}>{e.degree}</div>
                  <div className={styles.eduSchool}>{e.school}</div>
                  <div className={styles.eduYear}>{e.year}</div>
                  <div className={styles.eduNote}>{e.note}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* painting in the right margin — clear of all content */}
          <GaudyFrame src="/images/paintings/meadow.jpg" alt="Painting of a wildflower meadow" caption="flower field" variant="shabby" side={null} top="-30px" tilt={2.5} style={{ right: '-168px', width: '130px' }} />
        </div>
      </section>

      {/* Wave */}
      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '50px', background: 'var(--white)', marginTop: '-1px' }} aria-hidden="true">
        <path d="M0 0 C150 50 300 50 450 0 C600 -50 750 50 900 0 L900 50 L0 50Z" fill="var(--blush)" />
      </svg>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <Signature year={2026} />
          <div className={styles.footerLinks}>
            <a href="https://linkedin.com/in/alinamarkova" target="_blank" rel="noopener">LinkedIn</a>
            <a href="https://github.com/a-markova" target="_blank" rel="noopener">GitHub</a>
            <a href="mailto:alina@markov.com">Email</a>
          </div>
        </div>
      </footer>

    </main>
  )
}
