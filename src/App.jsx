import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Experience from './components/Experience'
import TechStack from './components/TechStack'
import Profiles from './components/Profiles'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import ScrollCanvas from './components/common/ScrollCanvas'

export default function App() {
  return (
    <div className="bg-bg-primary text-txt-primary min-h-screen overflow-x-hidden relative">
      {/* Global scroll-synced animated background */}
      <ScrollCanvas />

      <div className="relative" style={{ zIndex: 1 }}>
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Achievements />
          <Projects />
          <Experience />
          <TechStack />
          <Profiles />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </div>
  )
}
