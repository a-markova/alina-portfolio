export const metadata = {
  // child pages (each project / post) keep the "… | Alina Markova" suffix
  title: { default: 'Blog', template: '%s | Alina Markova' },
  description: 'Notes on analytics, statistics, and the occasional tangent.',
}

export default function Layout({ children }) {
  return children
}
