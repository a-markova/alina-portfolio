'use client'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.sig}>Alina Markova, 2026</span>
        <div className={styles.links}>
          <a href="https://linkedin.com/in/alinamarkova" target="_blank" rel="noopener">LinkedIn</a>
          <a href="https://github.com/rsm-amarkova" target="_blank" rel="noopener">GitHub</a>
          <a href="mailto:alina@markov.com">Email</a>
        </div>
      </div>
    </footer>
  )
}