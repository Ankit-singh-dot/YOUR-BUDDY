import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const stats = [
    { number: '5000+', label: 'Students Helped', icon: '👥' },
    { number: '50+', label: 'Subjects', icon: '📚' },
    { number: '1000+', label: 'Resources', icon: '📄' },
    { number: '24/7', label: 'Access', icon: '🌐' }
  ]

  const features = [
    {
      title: 'Comprehensive Study Materials',
      description: 'Access detailed notes, previous year question papers, and question banks for all subjects.',
      icon: '📖',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Year-wise Organization',
      description: 'Resources are systematically organized by academic years for easy navigation.',
      icon: '🗂️',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Regular Updates',
      description: 'New materials and resources are added regularly to keep you updated.',
      icon: '🔄',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Mobile Friendly',
      description: 'Access all resources on any device with our responsive design.',
      icon: '📱',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const team = [
    {
      name: 'Ankit Singh Rajput',
      role: 'Creator & Developer',
      description: 'I am a student at IILM University who built this project to help my juniors and peers. This is an independent, unofficial resource for students.',
      avatar: '👨‍💻',
      social: {
        github: 'https://github.com/ankitsinghrajput',
        linkedin: 'https://linkedin.com/in/ankitsinghrajput',
        instagram: 'https://instagram.com/ankitsinghrajput'
      }
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <div className="mb-4 p-4 bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 rounded">
            <strong>Disclaimer:</strong> This website is an independent student project and is <span className="font-semibold">not officially affiliated with or endorsed by IILM University</span>. It is made by a student, for students.
          </div>
        </div>
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            About This Project
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            This is a student-made, unofficial resource hub for IILM University students. The goal is to make it easier for juniors and peers to access notes, previous year question papers, and question banks. All content is contributed by students, for students.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why I Built This
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Helping Juniors & Peers
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  As a student, I noticed that many of my juniors struggled to find reliable notes, question banks, and previous year papers. I created this website to make it easier for everyone to access and share resources.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This is a personal project, not an official university platform. All resources are shared by students, for students.
                </p>
              </div>
              <div className="text-center">
                <div className="w-64 h-64 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-8xl">🎓</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full flex items-center justify-center mb-6`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Who Made This?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">{member.avatar}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                  >
                    🐙
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                  >
                    💼
                  </a>
                  <a
                    href={member.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300"
                  >
                    📸
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Join the Student Community
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Be part of our growing community of students helping each other. Share your notes, question banks, and tips to make learning easier for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/notes"
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Explore Resources
              </Link>
              <a
                href="#contact"
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 