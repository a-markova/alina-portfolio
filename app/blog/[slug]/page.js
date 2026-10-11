import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import styles from './post.module.css'
import 'katex/dist/katex.min.css'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'

export default async function BlogPost({ params }) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(raw)

  return (
    <main>
      <section className={styles.header}>
        <div className={styles.inner}>
          <Link href="/blog" className={styles.back}>← Back to blog</Link>
          <div className={styles.meta}>
            <span className={styles.date}>{data.date}</span>
            <div className={styles.tags}>
              {(data.tags || []).map(t => (
                <span key={t} className={styles.tag}>{t}</span>
              ))}
            </div>
          </div>
          <h1 className={styles.heading}>{data.title}</h1>
        </div>
      </section>

      <svg viewBox="0 0 900 50" preserveAspectRatio="none" style={{ display:'block', width:'100%', height:'50px', background:'var(--blush)', marginTop:'-1px' }} aria-hidden="true">
        <path d="M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z" fill="var(--white)" />
      </svg>

      <section className={styles.body}>
        <div className={styles.prose}>
          <MDXRemote
            source={content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkMath],
                rehypePlugins: [rehypeKatex],
              }
            }}
          />
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerSig}>Alina Markova, 2026</span>
          <Link href="/blog" className={styles.footerBack}>← All posts</Link>
        </div>
      </footer>
    </main>
  )
}