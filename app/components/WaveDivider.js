export default function WaveDivider({ topColor, bottomColor }) {
  return (
    <svg
      viewBox="0 0 900 50"
      preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: '50px', background: bottomColor, marginTop: '-1px' }}
      aria-hidden="true"
    >
      <path
        d={`M0 50 C150 0 300 0 450 50 C600 100 750 0 900 50 L900 0 L0 0Z`}
        fill={topColor}
      />
    </svg>
  )
}