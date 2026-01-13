import React from 'react'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/projects/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Services from './components/serveces/Services'
import Nave from './components/nave/Nave'
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
