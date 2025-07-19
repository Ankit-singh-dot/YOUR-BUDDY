import React from 'react'
import { Link } from 'react-router-dom'

const YearCards = () => {
  const years = [
    {
      year: "1st Year",
      description: "Foundation courses and basic concepts",
      subjects: [
        "Mathematics-1",
        "Physics",
        "AI-ML",
        "C-programming",
        "Communication Skills",
        "Mathematics - 2",
        "DECO",
        "Python Programming",
        "Data Structures",
        "EVS",
        "Verbal Communication",
      ],
      color: "from-blue-500 to-cyan-500",
      icon: "🎓",
    },
    {
      year: "2nd Year",
      description: "Core engineering fundamentals",
      subjects: [
        "Discrete Structure",
        "Introduction to cloud Computing ",
        "Design and Analysis of Algorithms",
        "OOPS",
        "Cyber Security",
        "Emerging Technologies",
        "Fundamentals in Quantitative Aptitude",
      ],
      color: "from-purple-500 to-pink-500",
      icon: "⚡",
    },
    {
      year: "3rd Year",
      description: "Advanced specialization courses",
      subjects: [
        "Database Systems",
        "Operating Systems",
        "Computer Networks",
        "Software Engineering",
      ],
      color: "from-green-500 to-teal-500",
      icon: "🚀",
    },
    {
      year: "4th Year",
      description: "Final year projects and electives",
      subjects: ["AI/ML", "Cloud Computing", "Cybersecurity", "Project Work"],
      color: "from-orange-500 to-red-500",
      icon: "🎯",
    },
  ];

  return (
    <section id="year-cards" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Academic Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access comprehensive study materials, previous year question papers, and question banks 
            organized by year for your convenience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {years.map((yearData, index) => (
            <div
              key={yearData.year}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${yearData.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative p-8 h-full flex flex-col">
                <div className="text-6xl mb-6 text-center group-hover:scale-110 transition-transform duration-300">
                  {yearData.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-gray-900 transition-colors duration-300">
                  {yearData.year}
                </h3>
                
                <p className="text-gray-600 mb-6 text-center flex-grow">
                  {yearData.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {yearData.subjects.map((subject, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${yearData.color} mr-3`}></div>
                      {subject}
                    </div>
                  ))}
                </div>
                
                <Link to="/notes" className={`w-full py-3 px-6 rounded-full bg-gradient-to-r ${yearData.color} text-white font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center`}>
                  View Resources
                </Link>
              </div>
              
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${yearData.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              What You'll Find Here
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📚</span>
                </div>
                <span className="font-semibold text-gray-700">Study Notes</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📝</span>
                </div>
                <span className="font-semibold text-gray-700">Previous Year Papers</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">❓</span>
                </div>
                <span className="font-semibold text-gray-700">Question Banks</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YearCards 