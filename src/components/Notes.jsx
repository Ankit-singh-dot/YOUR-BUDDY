import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Notes = () => {
  const [selectedYear, setSelectedYear] = useState('1st')
  const [selectedSubject, setSelectedSubject] = useState('all')

  const years = [
    { id: '1st', name: '1st Year', color: 'from-blue-500 to-cyan-500' },
    { id: '2nd', name: '2nd Year', color: 'from-purple-500 to-pink-500' },
    { id: '3rd', name: '3rd Year', color: 'from-green-500 to-teal-500' },
    { id: '4th', name: '4th Year', color: 'from-orange-500 to-red-500' }
  ]

  const subjects = {
    "1st": [
      {
        id: "mathematics",
        name: "Maths-1",
        icon: "📐",
        resources: {
          notes: "/resources/maths-1/notes",
          pyq: "/resources/maths-1/pyq",
          qb: "/resources/maths-1/qb",
          syllabus: "/resources/maths-1/syllabus",
        },
      },
      {
        id: "physics",
        name: "Physics",
        icon: "⚛️",
        resources: {
          notes: "/resources/maths-1/notes",
          pyq: "/resources/maths-1/pyq",
          qb: "/resources/maths-1/qb",
          syllabus: "/resources/maths-1/syllabus",
        },
      },
      {
        id: "Communication-skills",
        name: "Communication-skills",
        icon: "🗣️",
        resources: {
          notes: "/resources/maths-1/notes",
          pyq: "/resources/maths-1/pyq",
          qb: "/resources/maths-1/qb",
          syllabus: "/resources/maths-1/syllabus",
        },
      },
      {
        id: "C-programming",
        name: "C-programming",
        icon: "💻",
        resources: {
          notes: "/resources/maths-1/notes",
          pyq: "/resources/maths-1/pyq",
          qb: "/resources/maths-1/qb",
          syllabus: "/resources/maths-1/syllabus",
        },
      },
      { id: "AI-ML", name: "AI-ML", icon: "💻" },
    ],
    "2nd": [
      { id: "data-structures", name: "Data Structures", icon: "🔗" },
      { id: "digital-logic", name: "Digital Logic", icon: "🔌" },
      { id: "computer-org", name: "Computer Organization", icon: "💻" },
      { id: "programming", name: "Programming", icon: "💡" },
    ],
    "3rd": [
      { id: "database", name: "Database Systems", icon: "🗄️" },
      { id: "os", name: "Operating Systems", icon: "⚙️" },
      { id: "networks", name: "Computer Networks", icon: "🌐" },
      { id: "software-eng", name: "Software Engineering", icon: "🏗️" },
    ],
    "4th": [
      { id: "ai-ml", name: "AI/ML", icon: "🤖" },
      { id: "cloud", name: "Cloud Computing", icon: "☁️" },
      { id: "cybersecurity", name: "Cybersecurity", icon: "🔒" },
      { id: "project", name: "Project Work", icon: "🎯" },
    ],
  };

  const resourceTypes = [
    { type: 'notes', name: 'Study Notes', icon: '📝', color: 'bg-blue-100 text-blue-600' },
    { type: 'pyq', name: 'Previous Year Papers', icon: '📄', color: 'bg-purple-100 text-purple-600'},
    { type: 'qb', name: 'Question Banks', icon: '❓', color: 'bg-green-100 text-green-600'},
    { type: 'syllabus', name: 'Syllabus', icon: '📋', color: 'bg-orange-100 text-orange-600'},
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
            Academic Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive study materials, previous year question papers, and question banks 
            organized by year and subject for your academic success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-800 mb-6">Select Year</h3>
              <div className="space-y-3">
                {years.map((year) => (
                  <button
                    key={year.id}
                    onClick={() => setSelectedYear(year.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      selectedYear === year.id
                        ? `bg-gradient-to-r ${year.color} text-white shadow-lg`
                        : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                    }`}
                  >
                    <div className="font-semibold">{year.name}</div>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Resource Types</h3>
                <div className="space-y-3">
                  {resourceTypes.map((resource) => (
                    <div key={resource.type} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${resource.color}`}>
                        <span className="text-sm">{resource.icon}</span>
                      </div>
                      <span className="font-medium text-gray-700">{resource.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-800">
                  {years.find(y => y.id === selectedYear)?.name} Resources
                </h2>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedSubject('all')}
                    className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                      selectedSubject === 'all'
                        ? 'bg-gray-700 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    All Subjects
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {subjects[selectedYear]?.map((subject) => (
                  <div
                    key={subject.id}
                    className="group bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="text-3xl">{subject.icon}</div>
                      <h3 className="text-xl font-bold text-gray-800">{subject.name}</h3>
                    </div>

                    <div className="space-y-3">
                      {resourceTypes.map((resource) => (
                        <div
                          key={resource.type}
                          className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer group-hover:shadow-md"
                        >
                          <div className="flex items-center space-x-3">
                            <div className={`w-6 h-6 rounded-full flex items-center justify-center ${resource.color}`}>
                              <span className="text-xs">{resource.icon}</span>
                            </div>
                            <span className="font-medium text-gray-700">{resource.name}</span>
                          </div>
                          <button className="px-3 py-1 bg-gray-700 text-white text-sm rounded-full hover:bg-red-400 transition-colors duration-300">
                            View
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Need Help Finding Resources?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Can't find what you're looking for? Our team is here to help you locate the right study materials.
                  </p>
                  <Link
                    to="/#contact"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contact Support
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Notes 
