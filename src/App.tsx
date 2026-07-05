import './index.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Problem } from './components/Problem'
import { HowItWorks } from './components/HowItWorks'
import { Offer } from './components/Offer'
import { Results } from './components/Results'
import { WhoItsFor } from './components/WhoItsFor'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Offer />
      <Results />
      <WhoItsFor />
      <Cta />
      <Footer />
    </>
  )
}

export default App
