import Link from "next/link";
export default function StudyPage() {
  return (
    <main className="min-h-screen bg-black px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-white">AI-Powered Learning Roadmaps</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Explore personalized learning paths tailored by AI. Select a roadmap to begin your structured learning journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Web Development Card */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700">
          <div className="h-2 bg-blue-500"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-900 bg-opacity-60 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Web Development</h3>
            </div>
            <p className="text-gray-200 mb-6">
              Master front-end and back-end technologies to build responsive, modern websites and web applications.
            </p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Levels: 5</span>
              <span className="text-sm text-gray-300">Duration: 20 weeks</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <Link href="/study/web-development" className="w-full mt-6 inline-block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
              Start Learning Path
            </Link>
          </div>
        </div>

        {/* App Development Card */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700">
          <div className="h-2 bg-green-500"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-green-900 bg-opacity-60 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">App Development</h3>
            </div>
            <p className="text-gray-200 mb-6">
              Learn to create cross-platform mobile applications using modern frameworks and development practices.
            </p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Levels: 4</span>
              <span className="text-sm text-gray-300">Duration: 16 weeks</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
              Start Learning Path
            </button>
          </div>
        </div>

        {/* Cyber Security Card */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700">
          <div className="h-2 bg-red-500"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-red-900 bg-opacity-60 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Cyber Security</h3>
            </div>
            <p className="text-gray-200 mb-6">
              Develop skills to protect systems, networks, and programs from digital attacks and security breaches.
            </p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Levels: 5</span>
              <span className="text-sm text-gray-300">Duration: 22 weeks</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-red-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <button className="w-full mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
              Start Learning Path
            </button>
          </div>
        </div>

        {/* IoT Card */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700">
          <div className="h-2 bg-purple-500"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-purple-900 bg-opacity-60 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Internet of Things</h3>
            </div>
            <p className="text-gray-200 mb-6">
              Learn to design, build, and program connected devices and systems that collect and exchange data.
            </p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Levels: 6</span>
              <span className="text-sm text-gray-300">Duration: 24 weeks</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-purple-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <button className="w-full mt-6 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
              Start Learning Path
            </button>
          </div>
        </div>

        {/* Artificial Intelligence Card */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700">
          <div className="h-2 bg-yellow-500"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-yellow-900 bg-opacity-60 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Artificial Intelligence</h3>
            </div>
            <p className="text-gray-200 mb-6">
              Explore the fundamentals of AI, including problem solving, knowledge representation, and reasoning systems.
            </p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Levels: 7</span>
              <span className="text-sm text-gray-300">Duration: 28 weeks</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-yellow-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <button className="w-full mt-6 bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
              Start Learning Path
            </button>
          </div>
        </div>

        {/* Machine Learning Card */}
        <div className="bg-gray-900 bg-opacity-70 backdrop-filter backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-700">
          <div className="h-2 bg-pink-500"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="bg-pink-900 bg-opacity-60 p-3 rounded-lg mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Machine Learning</h3>
            </div>
            <p className="text-gray-200 mb-6">
              Master algorithms and statistical models that computer systems use to perform tasks without explicit instructions.
            </p>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-300">Levels: 8</span>
              <span className="text-sm text-gray-300">Duration: 32 weeks</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2.5">
              <div className="bg-pink-600 h-2.5 rounded-full" style={{ width: '0%' }}></div>
            </div>
            <button className="w-full mt-6 bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg transition-colors duration-300">
              Start Learning Path
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 border border-gray-700">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center shadow-md mx-auto mb-4">
              <span className="text-blue-400 font-bold text-xl">1</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Choose Your Path</h3>
            <p className="text-gray-300">Select a learning roadmap that matches your career goals and interests.</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center shadow-md mx-auto mb-4">
              <span className="text-blue-400 font-bold text-xl">2</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">AI-Powered Learning</h3>
            <p className="text-gray-300">Our AI tailors the content to your learning pace and style for optimal results.</p>
          </div>
          <div className="text-center">
            <div className="bg-gray-800 w-14 h-14 rounded-full flex items-center justify-center shadow-md mx-auto mb-4">
              <span className="text-blue-400 font-bold text-xl">3</span>
            </div>
            <h3 className="font-semibold text-lg mb-2 text-white">Track Progress</h3>
            <p className="text-gray-300">Monitor your advancement through each level and celebrate your achievements.</p>
          </div>
        </div>
      </div>
    </main>
  );
}