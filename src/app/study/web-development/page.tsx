"use client"
import Link from "next/link";
import { useState, useEffect } from "react";

export default function WebDevelopmentPathPage() {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [aiThinking, setAiThinking] = useState(true);

  useEffect(() => {
    // Simulate AI loading
    const timer = setTimeout(() => {
      setAiThinking(false);
      setProgress(35); // Simulated progress
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const techData = [
    { 
      name: "HTML", 
      colorClass: "from-orange-500 to-red-600", 
      borderColor: "hover:border-orange-500",
      tagColor: "bg-orange-900 bg-opacity-40 text-orange-300",
      icon: "M12 17.56l4.07-1.13.55-6.1H9.38L9.2 8.3h7.6l.2-1.99H7l.56 6.01h6.89l-.23 2.58-2.22.6-2.22-.6-.14-1.66h-2l.29 3.19L12 17.56M4.07 3h15.86L18.5 19.2L12 21l-6.5-1.8L4.07 3z", 
      desc: "Structure",
      aiTip: "Start with semantic HTML5 tags for better SEO and accessibility"
    },
    { 
      name: "CSS", 
      colorClass: "from-blue-500 to-blue-700", 
      borderColor: "hover:border-blue-500",
      tagColor: "bg-blue-900 bg-opacity-40 text-blue-300",
      icon: "M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3H5z", 
      desc: "Style",
      aiTip: "Master Flexbox and Grid before moving to CSS frameworks"
    },
    { 
      name: "JavaScript", 
      colorClass: "from-yellow-500 to-yellow-600", 
      borderColor: "hover:border-yellow-500",
      tagColor: "bg-yellow-900 bg-opacity-40 text-yellow-300",
      icon: "M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-2.35v5.74c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.73.83m5.14-1.36c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.03.73l1.59-1.02c-.55-.96-1.33-1.33-2.65-1.33-1.56 0-2.57 1-2.57 2.35 0 1.34.76 1.93 2.05 2.5l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.58 1.01z", 
      desc: "Interactivity",
      aiTip: "Focus on ES6+ features, async programming, and DOM manipulation"
    },
    { 
      name: "React", 
      colorClass: "from-cyan-500 to-blue-600", 
      borderColor: "hover:border-cyan-500",
      tagColor: "bg-cyan-900 bg-opacity-40 text-cyan-300",
      icon: "M14.4 13.6c-.8 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.9 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6m-4.8 0c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.8 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6M12 16.8c2.3 0 4.9-1.1 6.9-2.9.4-.3.1-.9-.4-.9-3.6 0-7.2.1-10.9 0-.5 0-.8.6-.4.9 2 2 4.5 2.9 6.8 2.9m9.8-5.3c.1-.6.2-1.3.2-1.9 0-.7-.1-1.3-.2-1.9.7-1.2 1-2.6 1-4 0-4.4-3.6-8-8-8s-8 3.6-8 8c0 1.4.3 2.8 1 4-.1.6-.2 1.3-.2 1.9 0 .7.1 1.3.2 1.9-.7 1.2-1 2.6-1 4 0 4.4 3.6 8 8 8s8-3.6 8-8c0-1.4-.3-2.8-1-4m-2.4 4.8c-.2 0-.4-.1-.6-.2-2-1.3-4.8-1.5-7.7-.7-.5.1-1-.2-1.2-.7-.1-.5.2-1 .7-1.2 3.4-1 6.7-.7 9.2.8.4.3.5 1 .2 1.4-.2.3-.5.4-.8.4m1-10c.3 0 .6-.2.8-.5.3-.4.2-1-.2-1.4-2.5-1.5-5.8-1.8-9.2-.8-.5.2-1-.1-1.2-.6-.2-.5.1-1 .6-1.2 2.9-.8 5.7-.6 7.7.7.2.1.4.2.6.2.2 0 .4 0 .6-.2 2-1.3 4.8-1.5 7.7-.7.5.2.8.7.6 1.2-.2.5-.7.8-1.2.6-2.9-.8-5.7-.6-7.7.7-.2.1-.4.2-.6.2z", 
      desc: "Framework",
      aiTip: "Learn hooks early - they're the modern way to build React components"
    },
    { 
      name: "Node.js", 
      colorClass: "from-green-500 to-green-700", 
      borderColor: "hover:border-green-500",
      tagColor: "bg-green-900 bg-opacity-40 text-green-300",
      icon: "M18.09 10.29v2.47c0 .14-.07.29-.19.38l-4.82 2.76c-.07.05-.15.07-.22.07-.07 0-.15-.02-.22-.07-.14-.07-.22-.22-.22-.38v-2.47c0-.14.07-.29.22-.38l4.82-2.76c.07-.05.15-.07.22-.07.07 0 .15.02.22.07.12.09.19.24.19.38zm-5.73 2.76l4.07-2.33-4.07-2.33-4.07 2.33 4.07 2.33zm-4.45-1.15v2.47c0 .14-.07.29-.22.38-.07.05-.15.07-.22.07-.07 0-.15-.02-.22-.07l-4.82-2.76c-.12-.09-.19-.24-.19-.38v-2.47c0-.14.07-.29.22-.38.14-.07.3-.07.44 0l4.82 2.76c.12.09.19.24.19.38zm-4.63-3.7l4.07 2.33-4.07 2.33-4.07-2.33 4.07-2.33zm9.26-2.33l4.07 2.33-4.07 2.33-4.07-2.33 4.07-2.33zm4.63 1.15v2.47c0 .14.07.29.22.38.07.05.15.07.22.07.07 0 .15-.02.22-.07l4.82-2.76c.12-.09.19-.24.19-.38v-2.47c0-.14-.07-.29-.22-.38-.14-.07-.3-.07-.44 0l-4.82 2.76c-.12.09-.19.24-.19.38zm-9.26-2.33l4.07 2.33-4.07 2.33-4.07-2.33 4.07-2.33z", 
      desc: "Backend",
      aiTip: "Start with Express.js and understand middleware concepts"
    }
  ];

  const levelsData = [
    { 
      title: "Level 1: HTML & CSS", 
      description: "Understand semantic HTML and modern CSS including Flexbox and Grid.", 
      color: "blue", 
      tags: ["Tags", "Forms", "Flexbox", "Grid"], 
      weeks: 2,
      aiResources: "12 videos, 8 articles, 3 projects"
    },
    { 
      title: "Level 2: JavaScript Fundamentals", 
      description: "Master variables, functions, arrays, objects, and asynchronous programming.", 
      color: "yellow", 
      tags: ["ES6+", "DOM", "Async", "APIs"], 
      weeks: 3,
      aiResources: "15 videos, 10 articles, 5 projects"
    },
    { 
      title: "Level 3: React Basics", 
      description: "Learn components, hooks, state management, and routing.", 
      color: "cyan", 
      tags: ["Components", "Hooks", "State", "JSX"], 
      weeks: 4,
      aiResources: "18 videos, 12 articles, 4 projects"
    },
    { 
      title: "Level 4: Backend with Node.js", 
      description: "Build REST APIs, work with databases, and authentication.", 
      color: "green", 
      tags: ["Express", "MongoDB", "Auth", "APIs"], 
      weeks: 5,
      aiResources: "20 videos, 15 articles, 6 projects"
    },
    { 
      title: "Level 5: Full-Stack Project", 
      description: "Combine frontend and backend into a production-ready application.", 
      color: "purple", 
      tags: ["Deployment", "Testing", "CI/CD", "Optimization"], 
      weeks: 6,
      aiResources: "25 videos, 20 articles, 1 capstone project"
    }
  ];

  const tagColors: Record<string, string> = {
    blue: "bg-blue-900 bg-opacity-40 text-blue-300",
    yellow: "bg-yellow-900 bg-opacity-40 text-yellow-300",
    cyan: "bg-cyan-900 bg-opacity-40 text-cyan-300",
    green: "bg-green-900 bg-opacity-40 text-green-300",
    purple: "bg-purple-900 bg-opacity-40 text-purple-300"
  };

  const borderColors: Record<string, string> = {
    blue: "hover:border-blue-500",
    yellow: "hover:border-yellow-500",
    cyan: "hover:border-cyan-500",
    green: "hover:border-green-500",
    purple: "hover:border-purple-500"
  };

  if (aiThinking) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-white mt-4">AI is generating your personalized learning path...</h2>
          <p className="text-gray-400 mt-2">Analyzing optimal learning sequence based on successful developers</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* AI Header Section */}
        <div className="text-center mb-12 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-3xl opacity-20 animate-pulse"></div>
          <h1 className="text-4xl font-bold mb-4 text-white relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            AI-Powered Web Development Path
          </h1>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
            Our AI has analyzed thousands of successful developers to create this optimized learning journey. 
            Follow this structured roadmap to become a full-stack web developer.
          </p>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-bounce"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-ping"></div>
        </div>

        {/* AI Recommendation Bar */}
        <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl p-4 mb-12 flex items-center">
          <div className="bg-blue-500 rounded-full p-2 mr-4">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div>
            <h3 className="text-white font-semibold">AI Recommendation</h3>
            <p className="text-gray-300 text-sm">Based on your learning history, we recommend starting with JavaScript fundamentals.</p>
          </div>
          <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-300">
            Apply Suggestion
          </button>
        </div>

        {/* Tech Button Path */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-white mb-6 text-center">Core Technologies Path</h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-6 lg:space-x-8">
            {techData.map((tech, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Arrow between technologies */}
                {index > 0 && (
                  <>
                    <div className="md:flex items-center justify-center hidden absolute -left-8 top-1/2 transform -translate-y-1/2">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <div className="flex md:hidden items-center justify-center mb-4">
                      <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </>
                )}
                
                <div 
                  className="flex flex-col items-center relative"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                >
                  <Link href={`/study/web-development/${tech.name.toLowerCase()}`}>
                    <button className={`w-24 h-24 lg:w-28 lg:h-28 bg-gradient-to-br ${tech.colorClass} rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center group cursor-pointer relative overflow-hidden`}>
                      {/* Glow effect when hovered */}
                      {hoveredTech === tech.name && (
                        <div className="absolute inset-0 bg-white bg-opacity-20 animate-pulse rounded-xl"></div>
                      )}
                      <svg className="w-12 h-12 lg:w-14 lg:h-14 text-white relative z-10" viewBox="0 0 24 24">
                        <path fill="currentColor" d={tech.icon} />
                      </svg>
                      <span className="text-white font-semibold mt-2 text-sm relative z-10">{tech.name}</span>
                      
                      {/* AI Badge */}
                      <div className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-1">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </button>
                  </Link>
                  <p className="text-gray-400 text-sm mt-2 text-center">{tech.desc}</p>
                  
                  {/* AI-generated tooltip */}
                  {hoveredTech === tech.name && (
                    <div className="absolute top-full mt-2 bg-gray-800 border border-gray-700 rounded-lg p-3 shadow-lg z-20 max-w-xs left-1/2 transform -translate-x-1/2">
                      <div className="text-blue-400 text-xs font-semibold mb-1 flex items-center">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        AI SUGGESTION
                      </div>
                      <p className="text-white text-sm">{tech.aiTip}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AI Progress Tracker */}
        <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl p-6 mb-12">
          <h3 className="text-white font-semibold mb-4 flex items-center">
            <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 极" />
            </svg>
            Your AI-Generated Progress
          </h3>
          <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full transition-all duration-1000" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="flex justify-between text-sm text-gray-400">
            <span>{progress}% Complete</span>
            <span>Estimated completion: {Math.round((100 - progress) / 5)} weeks</span>
          </div>
        </div>

        {/* Learning Path Levels with AI Enhancements */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-white mb-2 flex items-center">
            <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 极" />
            </svg>
            AI-Curated Learning Path
          </h2>
          
          {levelsData.map((level, index) => (
            <div key={index} className={`bg-gray-900 border border-gray-700 rounded-xl p-6 ${borderColors[level.color]} transition-all duration-300 relative group`}>
              {/* AI Recommendation Dot */}
              <div className="absolute -left-2 top-6 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-semibold text-white">{level.title}</h3>
                <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {level.weeks} weeks
                </span>
              </div>
              
              <p className="text-gray-300 mb-4">{level.description}</p>
              
              <div className="flex space-x-3 mb-4">
                {level.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className={`px-3 py-1 ${tagColors[level.color]} rounded-full text-sm`}>
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center text-sm text-gray-400">
                <svg className="w-4 h-4 mr-1 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                AI-recommended resources: {level.aiResources}
              </div>
              
              <button className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5">
                Start Level
              </button>
            </div>
          ))}
        </section>

        {/* AI Chat Assistant */}
        <div className="fixed bottom-6 right-6">
          <button className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">AI</span>
          </button>
        </div>
      </div>
    </main>
  );
}