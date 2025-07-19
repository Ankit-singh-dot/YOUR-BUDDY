import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-red-500 via-black to-gray-500-600 bg-clip-text text-transparent mb-6 font-sans">
            IILM University Notes
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light">
            Unofficial, student-made resource hub
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            This website is created by a student for IILM University students. Access notes, previous year question papers, and question banks to help you in your academic journey. <span className="font-semibold text-red-600">This site is not officially affiliated with IILM University.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/notes" 
              className="px-8 py-4 bg-gradient-to-r from-gray-600 to-black text-white rounded-full font-semibold hover:from-black hover:to-white  transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Resources
            </Link>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-gray-300 text-black rounded-full font-semibold hover:bg-gray-600 hover:text-white transform hover:scale-105 transition-colors duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 