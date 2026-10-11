import styles from './GaudyFrame.module.css'

// Carved shell / acanthus fan — the gaudier the better
function Shell({ className }) {
  const lobes = [-64, -42, -21, 0, 21, 42, 64]
  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      {lobes.map(a => (
        <ellipse key={a} cx="20" cy="17" rx="4.2" ry="13" transform={`rotate(${a} 20 31)`} />
      ))}
      {lobes.map(a => (
        <line key={`v${a}`} x1="20" y1="29" x2="20" y2="8" transform={`rotate(${a} 20 31)`} className={styles.vein} />
      ))}
      <path d="M8 33 Q4 27 9 25 Q12 25 11 29" className={styles.scroll} />
      <path d="M32 33 Q36 27 31 25 Q28 25 29 29" className={styles.scroll} />
      <circle cx="20" cy="31" r="5" />
      <circle cx="20" cy="31" r="2" className={styles.jewel} />
    </svg>
  )
}

/**
 * A real painting hung in the page margin in an over-the-top flea market frame.
 * variant: 'gold' | 'silver' | 'shabby' | 'pink' | 'oval'
 * sold: crosses out the price and slaps a red gallery dot on the frame
 * side: 'left' | 'right' — which page margin it hangs in; pass null and a
 *   `style` with your own left/right to position it against a container instead
 */
export default function GaudyFrame({
  src, alt, caption, price, variant = 'gold', side = 'right', top = '60px', tilt = 0, sold = false, style,
}) {
  return (
    <div
      className={`${styles.hang} ${side ? styles[side] : ''}`}
      data-variant={variant}
      style={{ top, '--tilt': `${tilt}deg`, ...style }}
    >
      <div className={styles.swing}>
        <span className={styles.nail} aria-hidden="true" />
        <svg className={styles.wire} viewBox="0 0 100 30" preserveAspectRatio="none" aria-hidden="true">
          <polyline points="14,30 50,1 86,30" />
        </svg>

        <figure className={styles.frame}>
          <Shell className={`${styles.orn} ${styles.crest}`} />
          {variant !== 'oval' && <>
            <Shell className={`${styles.orn} ${styles.tl}`} />
            <Shell className={`${styles.orn} ${styles.tr}`} />
            <Shell className={`${styles.orn} ${styles.bl}`} />
            <Shell className={`${styles.orn} ${styles.br}`} />
          </>}

          <div className={styles.mat}>
            <img src={src} alt={alt} className={styles.img} loading="lazy" />
          </div>

          {caption && <figcaption className={styles.plaque}>{caption}</figcaption>}
          {sold && <span className={styles.soldDot} title="sold!" aria-label="sold" />}
          {(price || sold) && (
            <span className={styles.tag}>
              {sold ? <><s className={styles.struck}>{price}</s> SOLD!</> : price}
            </span>
          )}
        </figure>
      </div>
    </div>
  )
}
