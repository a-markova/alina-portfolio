import Hero from './components/Hero'
import SkyGreeting from './components/SkyGreeting'
import WaveDivider from './components/WaveDivider'
import Currently from './components/Currently'
import Timeline from './components/Timeline'
import Projects from './components/Projects'
import Footer from './components/Footer'
import GaudyFrame from './components/GaudyFrame'

export default function Home() {
  return (
    <main>
      <SkyGreeting />
      <Hero />
      <WaveDivider topColor="var(--white)" bottomColor="var(--blush)" />

      {/* Currently — paintings hung in both margins */}
      <div style={{ position: 'relative' }}>
        <Currently />
        <GaudyFrame src="/images/paintings/superbloom.jpg" alt="Painting of a mountain superbloom" caption="superbloom" variant="gold" side="right" top="40px" tilt={3} />
        <GaudyFrame src="/images/paintings/bouquet.jpg" alt="Painting of a flower bouquet on lavender" caption="bouquet" variant="oval" side="left" top="150px" tilt={-2} />
      </div>

      <WaveDivider topColor="var(--blush)" bottomColor="var(--white)" />
      <div style={{ position: 'relative' }}>
        <Timeline />
        <GaudyFrame src="/images/paintings/cottage.jpg" alt="Painting of a cottage behind red flowers" caption="the cottage" variant="shabby" side="left" top="70px" tilt={-3} />
        <GaudyFrame src="/images/paintings/dusk.jpg" alt="Painting of a stormy sky over a meadow" caption="stormy sky" variant="silver" side="right" top="320px" tilt={2} />
      </div>
      <WaveDivider topColor="var(--white)" bottomColor="var(--blush)" />

      {/* Projects — paintings in both margins */}
      <div style={{ position: 'relative' }}>
        <Projects />
        <GaudyFrame src="/images/paintings/meadow.jpg" alt="Painting of a wildflower meadow" caption="flower field" variant="gold" side="left" top="80px" tilt={-4} />
        <GaudyFrame src="/images/paintings/lilies.jpg" alt="Pastel drawing of pink stargazer lilies" caption="stargazers" variant="pink" side="right" top="220px" tilt={2.5} />
      </div>

      <Footer />
    </main>
  )
}