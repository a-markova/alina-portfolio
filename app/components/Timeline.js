'use client'
import { useRef, useEffect, useState } from 'react'
import * as d3 from 'd3'
import { useInView, motion, AnimatePresence } from 'framer-motion'
import styles from './Timeline.module.css'
import HandMark from './HandMark'

// Order = chronological. First item = top-left start.
const events = [
  { id: 'born', date: 'May 2002', title: 'Born', type: 'life', size: 'large',
    desc: 'Happy childhood, loving family!' },
  { id: 'undergrad', date: 'Sep 2021', title: 'Started at UC San Diego', type: 'school', size: 'large', img: '/images/timeline/undergrad.jpg', pos: '40% 62%',
    desc: 'I explored a lot of majors before landing on Economics. The department gave me flexibility to pursue data analytics, finance, and even some dance!' },
  { id: 'internships', date: '2024', title: 'The Internship Era', type: 'work', size: 'medium', img: '/images/timeline/internships.jpg', pos: '0% 50%',
    desc: 'Getting to try on as many hats as I want. Wealth Management, Consulting, and FP&A. My favorite part was the people I got to meet.' },
  { id: 'ta', date: 'Mar 2024', title: 'Teaching Assistant', type: 'work', size: 'large', img: '/images/timeline/ta.jpg', pos: '35% 40%',
    desc: 'My gateway to grad school, debt-free. The most schemed-out chapter of my life: 800 hours of TAing, and I negotiated my fees to come out net positive.' },
  { id: 'grad-bs', date: 'Jun 2025', title: 'Graduated: BS Economics', type: 'school', size: 'large', img: '/images/timeline/grad-bs.jpg', pos: '50% 22%',
    desc: 'Graduation came up unexpectedly! Good thing I was headed right back into school.' },
  { id: 'msba', date: 'Jul 2025', title: 'UC San Diego Grad School', type: 'school', size: 'large', img: ['/images/timeline/grad-bs.jpg', '/images/timeline/msba.jpg'], pos: ['50% 22%', '50% 45%'], badge: 'x2',
    desc: "What a time. I think anyone you ask about grad school will start with a sigh. Then, hopefully, they'll say it was all worth it <3" },
  { id: 'business-analyst', date: 'Jun 2026', title: 'Business Analyst', type: 'work', size: 'large', img: '/images/timeline/scientist-fpa.jpg', pos: '45% 50%', badge: 'x2',
    desc: 'Here I am today: a business analyst at a company I love, adding to my skillset while working toward a mission I respect.', current: true },
]

const COLORS = { life: '#a3020c', school: '#4A7C6F', work: '#6B1A2A' }
const PETALS = { life: '#f2a7b5', school: '#a9cfc3', work: '#d9909f' }
const SIZES = { large: 17, medium: 12, small: 9 }

// Layout constants
const VB_W = 800          // viewBox width
const MARGIN_X = 140
const ROW_H = 200         // vertical distance between rows
const TOP_PAD = 80
const PER_ROW = 3         // nodes per horizontal sweep

export default function Timeline() {
  const wrapRef = useRef(null)
  const svgRef = useRef(null)
  const inView = useInView(wrapRef, { once: true, margin: '-80px' })
  const [hovered, setHovered] = useState(null)
  const [positions, setPositions] = useState([])

  const numRows = Math.ceil(events.length / PER_ROW)
  const height = TOP_PAD * 2 + (numRows - 1) * ROW_H

  useEffect(() => {
    if (!inView) return
    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove()

    // Compute serpentine positions
    const leftX = MARGIN_X
    const rightX = VB_W - MARGIN_X
    const pos = events.map((e, i) => {
      const row = Math.floor(i / PER_ROW)
      const idxInRow = i % PER_ROW
      const leftToRight = row % 2 === 0
      const t = idxInRow / (PER_ROW - 1) // 0..1 across the row
      const x = leftToRight ? leftX + t * (rightX - leftX) : rightX - t * (rightX - leftX)
      const y = TOP_PAD + row * ROW_H
      return { ...e, x, y, row, leftToRight }
    })
    setPositions(pos)

    const defs = svg.append('defs')
    const grad = defs.append('linearGradient').attr('id', 'pathGrad')
      .attr('x1', '0').attr('y1', '0').attr('x2', '0').attr('y2', '1')
    grad.append('stop').attr('offset', '0%').attr('stop-color', '#e8607a')
    grad.append('stop').attr('offset', '55%').attr('stop-color', '#a3020c')
    grad.append('stop').attr('offset', '100%').attr('stop-color', '#4a2a2f')

    const glow = defs.append('filter').attr('id', 'glow').attr('x', '-60%').attr('y', '-60%').attr('width', '220%').attr('height', '220%')
    glow.append('feGaussianBlur').attr('stdDeviation', '3.5').attr('result', 'b')
    const m = glow.append('feMerge')
    m.append('feMergeNode').attr('in', 'b')
    m.append('feMergeNode').attr('in', 'SourceGraphic')

    // Build a smooth serpentine path through all points
    const lineGen = d3.line().x(d => d.x).y(d => d.y).curve(d3.curveCatmullRom.alpha(0.6))
    const pathData = lineGen(pos)

    const path = svg.append('path')
      .attr('d', pathData)
      .attr('fill', 'none')
      .attr('stroke', 'url(#pathGrad)')
      .attr('stroke-width', 2.5)
      .attr('stroke-linecap', 'round')

    const totalLen = path.node().getTotalLength()
    path
      .attr('stroke-dasharray', `${totalLen} ${totalLen}`)
      .attr('stroke-dashoffset', totalLen)
      .transition().duration(1800).ease(d3.easeCubicInOut)
      .attr('stroke-dashoffset', 0)

    // Nodes
    pos.forEach((e, i) => {
      const g = svg.append('g')
        .attr('transform', `translate(${e.x}, ${e.y})`)
        .style('opacity', 0)
        .style('cursor', 'pointer')
      g.transition().delay(500 + i * 150).duration(500).style('opacity', 1)

      const r = SIZES[e.size]
      const color = COLORS[e.type]

      // petals tucked behind the node — they bloom open on hover
      const bloom = g.append('g')
      d3.range(6).forEach(k => {
        bloom.append('g').attr('transform', `rotate(${k * 60})`)
          .append('ellipse').attr('class', styles.petal)
          .attr('cx', 0).attr('cy', -r * 0.95).attr('rx', r * 0.6).attr('ry', r * 0.95)
          .attr('fill', PETALS[e.type]).style('transition-delay', `${k * 45}ms`)
      })

      if (e.type === 'life') {
        g.append('path')
          .attr('d', d3.symbol().type(d3.symbolStar).size(r * r * 9)())
          .attr('fill', color)
          .attr('filter', 'url(#glow)')
      } else {
        g.append('circle').attr('r', r).attr('fill', color)
        // inner white dot for depth
        g.append('circle').attr('r', r * 0.35).attr('fill', 'rgba(255,255,255,0.5)')
      }

      if (e.current) {
        const pulse = g.append('circle').attr('r', r).attr('fill', 'none').attr('stroke', color).attr('stroke-width', 2)
        const repeat = () => {
          pulse.attr('r', r).attr('opacity', 1)
            .transition().duration(1900).ease(d3.easeCubicOut)
            .attr('r', r + 20).attr('opacity', 0).on('end', repeat)
        }
        repeat()
      }

      g.append('circle').attr('r', r + 16).attr('fill', 'transparent')
        .on('mouseenter', () => { setHovered(e.id); g.classed(styles.bloomOn, true) })
        .on('mouseleave', () => { setHovered(null); g.classed(styles.bloomOn, false) })

      // Labels: date above, title below (or flipped on bottom row edges)
      const labelBelow = e.row % 2 === 0
      svg.append('text')
        .attr('x', e.x).attr('y', labelBelow ? e.y - r - 14 : e.y + r + 22)
        .attr('text-anchor', 'middle')
        .attr('font-family', 'Inter, sans-serif').attr('font-size', '10px')
        .attr('font-weight', '600').attr('letter-spacing', '0.08em')
        .attr('fill', '#7A6A6A').style('text-transform', 'uppercase')
        .style('opacity', 0).text(e.date.toUpperCase())
        .transition().delay(650 + i * 150).duration(500).style('opacity', 1)

      svg.append('text')
        .attr('x', e.x).attr('y', labelBelow ? e.y + r + 20 : e.y - r - 12)
        .attr('text-anchor', 'middle')
        .attr('font-family', 'Cormorant Garamond, serif').attr('font-size', '16px')
        .attr('font-weight', '500').attr('fill', '#1C1010')
        .style('opacity', 0).style('pointer-events', 'none').text(e.title)
        .transition().delay(700 + i * 150).duration(500).style('opacity', 1)
    })

    // Fireworks at Born (first node, top-left)
    const born = pos[0]
    const fwG = svg.append('g').attr('transform', `translate(${born.x}, ${born.y})`)
    const launch = () => {
      const n = 16
      const cols = ['#a3020c', '#e8607a', '#4A7C6F', '#f5a623', '#ffffff']
      for (let i = 0; i < n; i++) {
        const a = (i / n) * 2 * Math.PI
        const dist = 28 + Math.random() * 24
        fwG.append('circle').attr('r', 2.5).attr('cx', 0).attr('cy', 0)
          .attr('fill', cols[i % cols.length]).attr('opacity', 1)
          .transition().duration(1000 + Math.random() * 400).ease(d3.easeCubicOut)
          .attr('cx', Math.cos(a) * dist).attr('cy', Math.sin(a) * dist)
          .attr('opacity', 0).attr('r', 0.5).remove()
      }
    }
    const t = setTimeout(() => { launch(); const iv = setInterval(launch, 3500); if (svgRef.current) svgRef.current._fw = iv }, 900)
    return () => { clearTimeout(t); if (svgRef.current && svgRef.current._fw) clearInterval(svgRef.current._fw) }
  }, [inView, height])

  const he = positions.find(p => p.id === hovered)

  // Card placement: to the side of node, flipped if near right edge
  const cardPlacement = (e) => {
    const leftPct = (e.x / VB_W) * 100
    const topPct = (e.y / height) * 100
    const flip = leftPct > 55
    return { leftPct, topPct, flip }
  }

  return (
    <section className={styles.section} ref={wrapRef}>
      <div className={styles.inner}>
        <motion.p className={styles.eyebrow}
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <HandMark kind="circle">My Story</HandMark>
        </motion.p>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <svg width="15" height="15" viewBox="-8 -8 16 16"><path d={d3.symbol().type(d3.symbolStar).size(64)()} fill="#a3020c" /></svg>
            <span>Life</span>
          </div>
          <div className={styles.legendItem}><span className={styles.dotSchool} /><span>School</span></div>
          <div className={styles.legendItem}><span className={styles.dotWork} /><span>Work</span></div>
        </div>

        <div className={styles.timelineWrap}>
          <svg ref={svgRef} width="100%" height={height} viewBox={`0 0 ${VB_W} ${height}`} preserveAspectRatio="xMidYMin meet" className={styles.svg} />

          <AnimatePresence>
            {he && (() => {
              const { leftPct, topPct, flip } = cardPlacement(he)
              return (
                <motion.div
                  className={styles.card}
                  style={{
                    left: `${leftPct}%`,
                    top: `${topPct}%`,
                    transform: `translate(${flip ? 'calc(-100% - 30px)' : '30px'}, -50%)`,
                  }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className={styles.cardCircle}>
                    {[].concat(he.img || []).map((src, i, all) => (
                      <img key={src} src={src} alt={all.length > 1 ? '' : he.title}
                        className={`${styles.cardImg} ${all.length > 1 ? styles.cardHalf : ''}`}
                        style={he.pos && { objectPosition: [].concat(he.pos)[i] }} />
                    ))}
                    <div className={styles.cardOverlay} />
                  </div>
                  {he.badge && <span className={styles.cardBadge} aria-label="again">{he.badge}</span>}
                  <div className={styles.cardText}>
                    <div className={styles.cardDate}>{he.date}</div>
                    <div className={styles.cardTitle}>{he.title}</div>
                    <div className={styles.cardDesc}>{he.desc}</div>
                  </div>
                </motion.div>
              )
            })()}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
