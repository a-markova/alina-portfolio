import Hero from './components/Hero'
import WaveDivider from './components/WaveDivider'
import Currently from './components/Currently'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <WaveDivider topColor="var(--white)" bottomColor="var(--blush)" />
      <Currently />
      <WaveDivider topColor="var(--blush)" bottomColor="var(--white)" />
      <Experience />
      <WaveDivider topColor="var(--white)" bottomColor="var(--blush)" />
      <Projects />
      <Footer />
    </main>
  )
}