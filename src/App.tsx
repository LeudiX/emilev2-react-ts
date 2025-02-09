import './App.css'

import HeroContainer from './components/HeroContainer'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Carousel from './components/Carousel'
import ScrollToTop from './components/shared/ScrollToTop'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <HeroContainer/>
      <ScrollToTop/>
      <Hero/>
      <Gallery/>
      <Carousel/>
      <About/>
      <Footer/>
    </>
  )
}


export default App
