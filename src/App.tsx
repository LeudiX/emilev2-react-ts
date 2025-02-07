import './App.css'

import HeroContainer from './components/HeroContainer'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Carousel from './components/Carousel'


function App() {
  return (
    <>
      <HeroContainer/>
      <Hero/>
      <Gallery/>
      <Carousel/>
      <About/>
      <footer className="p-3 text-center">
        <h6 className="mb-3">Émile Racine</h6>
        <p>designbyracine © All CopyRights Reserved 2025</p>
      </footer>
    </>
  )
}


export default App
