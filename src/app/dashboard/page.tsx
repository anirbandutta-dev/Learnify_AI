"use client"
import Link from "next/link";

export default function QuizPromoCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-4 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Quiz Completion Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 border border-gray-700 rounded-xl p-6 mb-12 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="flex flex-col md:flex-row items-center relative z-10">
            <div className="flex-1 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-3">Complete Your Skills Assessment</h2>
              <p className="text-gray-300 mb-4">
                Take our AI-powered quiz to unlock your personalized dashboard with tailored recommendations, 
                progress tracking, and customized learning path.
              </p>
              <ul className="text-gray-300 space-y-2 mb-6">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Personalized skill analysis
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customized learning recommendations
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Detailed progress analytics
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0">
              <Link href="/quiz/web-development">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 极 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Start Assessment Quiz
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}