import React from 'react'
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Ankit-singh-dot",
      icon: <FaGithub />,
      color: "hover:bg-gray-800",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/_ankitsig",
      icon: <RiInstagramFill />,
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ankit-raj-4b1343320/",
      icon: <FaLinkedin />,
      color: "hover:bg-blue-600",
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contact Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions about the resources? Want to contribute or connect? 
            Feel free to reach out through any of these platforms.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📧</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Email</h3>
            <p className="text-gray-300 mb-4">Drop me a line anytime</p>
            <a 
              href="mailto:contact@iilm.edu.in" 
              className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
            >
              contact@iilm.edu.in
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">📍</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-gray-300 mb-4">IILM University (Student Project)</p>
            <p className="text-gray-300">
              Greater Noida, UP
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-2xl">🌐</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <p className="text-gray-300 mb-4">Connect with me online</p>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>
        </div> */}

        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-8">Follow Me</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center space-x-3 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105 ${social.color}`}
              >
                <span className="text-xl">{social.icon}</span>
                <span className="font-semibold">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/20 pt-12 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              IILM University Notes (Student Project)
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              This website is an independent student project and is <span className="font-semibold">not officially affiliated with or endorsed by IILM University</span>. All resources are shared by students, for students.
            </p>
          </div>
          
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <span className="text-red-400 animate-pulse">❣️</span>
              <span>by</span>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ankit $ingh
            </div>
            <p className="text-sm text-gray-500">
              ©ankitsingh 2023. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 