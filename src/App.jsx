import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import YearCards from './components/YearCards'
import Contact from './components/Contact'
import Notes from './components/Notes'
import About from './components/About'

const HomePage = () => {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault()
      const targetId = e.currentTarget.getAttribute('href')
      const targetSection = document.querySelector(targetId)
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    }

    const anchorLinks = document.querySelectorAll('a[href^="#"]')
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleSmoothScroll)
    })

    return () => {
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <section id="home">
        <Hero />
      </section>
      <YearCards />
      <Contact />
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes" element={<Notes />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
