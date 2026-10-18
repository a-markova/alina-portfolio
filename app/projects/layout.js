export const metadata = {
  // child pages (each project / post) keep the "… | Alina Markova" suffix
  title: { default: 'Projects', template: '%s | Alina Markova' },
  description: 'Case studies from my work at Scientist.com and my MSBA at UC San Diego.',
}

export default function Layout({ children }) {
  return children
}
