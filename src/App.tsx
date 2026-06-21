import { Navigation, AttackCursor, Hero, About, Certifications, Leadership, Projects, Contact, Footer } from './components'
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <AttackCursor />
      <Navigation />
      <Hero />
      <About />
      <Certifications />
      <Leadership />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
