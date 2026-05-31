'use client'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.name}>Alina Markova</span>
      <div className={styles.links}>
        <Link href="/" className={styles.active}>Home</Link>
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/archive">Archive</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/resume">Resume</Link>
      </div>
      <div className={styles.icons}>
        <a href="mailto:alina@markov.com" className={styles.icon} title="Email" aria-label="Email">
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="2,7 12,13 22,7"/>
          </svg>
        </a>
        <a href="https://linkedin.com/in/alinamarkova" target="_blank" rel="noopener" className={styles.icon} title="LinkedIn" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="3"/>
            <line x1="8" y1="11" x2="8" y2="17"/>
            <line x1="8" y1="7" x2="8" y2="8"/>
            <path d="M12 11v6M12 14c0-2 6-3 6 1v2"/>
          </svg>
        </a>
        <a href="https://github.com/rsm-amarkova" target="_blank" rel="noopener" className={styles.icon} title="GitHub" aria-label="GitHub">
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 00-1.3-3.2 4.2 4.2 0 00-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 00-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 00-.1 3.2A4.6 4.6 0 004 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>
          </svg>
        </a>
      </div>
    </nav>
  )
}