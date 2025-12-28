import React from 'react'
import Home from './conpponts/home/Home'
import About from './conpponts/about/About'
import Skills from './conpponts/skills/Skills'
import Portfolio from './conpponts/projects/Portfolio'
import Contact from './conpponts/contact/Contact'
import Footer from './conpponts/footer/Footer'
import Services from './conpponts/serveces/Services'
import Nave from './conpponts/nave/Nave'
function App() {
  return (
    <div>
      <Home />
      <Nave/> 
      <About />
      <Skills />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
