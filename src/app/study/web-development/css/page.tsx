"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CSSPathPage() {
  const [isGenerating, setIsGenerating] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [generatedContent, setGeneratedContent] = useState<any[]>([]);
  const [aiThinking, setAiThinking] = useState(true);

  const cssSections = [
    {
      title: "What is CSS?",
      icon: "🎨",
      content:
        "CSS stands for Cascading Style Sheets. It makes your webpages colorful, stylish, and beautiful. While HTML is the skeleton, CSS is like the clothes and decorations!",
      simpleExample:
        "Think of HTML as the body and CSS as the clothes and makeup that make it look nice.",
      code: `h1 {
  color: blue;
}
p {
  font-size: 18px;
  color: gray;
}`,
      tips: [
        "CSS controls colors, fonts, and layouts",
        "It works together with HTML",
        "You can make websites look modern and attractive",
      ],
    },
    {
      title: "Selectors",
      icon: "🏷️",
      content:
        "Selectors help you target which part of the HTML you want to style. They tell CSS: 'Style this element'.",
      simpleExample:
        "It's like pointing your finger at the thing you want to decorate.",
      code: `/* Select all paragraphs */
p {
  color: red;
}

/* Select element with id */
#title {
  font-size: 30px;
}

/* Select element with class */
.button {
  background: green;
  color: white;
}`,
      tips: [
        "Use element name: p, h1, div",
        "Use #id for unique elements",
        "Use .class for groups of elements",
      ],
    },
    {
      title: "Box Model",
      icon: "📦",
      content:
        "Every element in CSS is like a box. It has content, padding, border, and margin.",
      simpleExample:
        "Imagine a gift box – the text is the gift, padding is bubble wrap, border is the box walls, margin is the space outside.",
      code: `div {
  margin: 20px;
  padding: 10px;
  border: 2px solid black;
}`,
      tips: [
        "Margin = space outside",
        "Padding = space inside",
        "Border = line around element",
      ],
    },
    {
      title: "Flexbox",
      icon: "🧩",
      content:
        "Flexbox helps arrange elements in rows or columns easily. It's great for centering and layouts.",
      simpleExample:
        "Think of flexbox as a box where items can stretch, shrink, and align neatly.",
      code: `container {
  display: flex;
  justify-content: center;
  align-items: center;
}`,
      tips: ["display: flex activates it", "justify-content = horizontal", "align-items = vertical"],
    },
    {
      title: "CSS Grid",
      icon: "🔲",
      content:
        "Grid is a 2D layout system. It allows you to design web pages like drawing a table with rows and columns.",
      simpleExample:
        "Imagine graph paper – you place items inside the boxes.",
      code: `container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}`,
      tips: ["Grid is for complex layouts", "Use rows and columns", "Combine with Flexbox sometimes"],
    },
    {
      title: "Animations",
      icon: "✨",
      content:
        "CSS lets you animate elements with keyframes and transitions. It makes your site feel alive!",
      simpleExample:
        "It's like adding motion to your decorations so they sparkle and move.",
      code: `@keyframes move {
  from { left: 0px; }
  to { left: 200px; }
}

div {
  position: relative;
  animation: move 2s infinite;
}`,
      tips: [
        "Use @keyframes for animations",
        "Use transition for smooth effects",
        "Animations make UI interactive",
      ],
    },
  ];

  useEffect(() => {
    const thinkingTimer = setTimeout(() => {
      setAiThinking(false);
    }, 2000);

    const generationTimer = setTimeout(() => {
      setIsGenerating(false);
    }, 3000);

    return () => {
      clearTimeout(thinkingTimer);
      clearTimeout(generationTimer);
    };
  }, []);

  useEffect(() => {
    if (!isGenerating) {
      const interval = setInterval(() => {
        setCurrentSection((prev) => {
          const next = prev + 1;
          if (next < cssSections.length) {
            setGeneratedContent((prev) => [...prev, cssSections[next]]);
            return next;
          }
          return prev;
        });
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isGenerating]);

  if (aiThinking) {
    return (
      <main className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">AI is preparing your CSS lesson...</h2>
          <p className="text-gray-300 mb-6">Making design simple and fun!</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg blur-3xl opacity-20 animate-pulse"></div>
          <h1 className="text-4xl font-bold mb-4 text-white relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-400">
            🎨 Learn CSS - Easy Way!
          </h1>
          <p className="text-lg text-gray-300 mb-8 relative z-10">
            Your AI teacher is making CSS super fun to understand. Let's style your first webpage together!
          </p>
        </div>

        {/* Lessons */}
        <div className="space-y-6">
          {generatedContent.map((lesson, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:border-green-500 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              style={{ animation: "slideInUp 0.6s ease-out" }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full filter blur-3xl opacity-10"></div>

              {/* Lesson Header */}
              <div className="flex items-center mb-4 relative z-10">
                <div className="text-3xl mr-4">{lesson.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{lesson.title}</h2>
                  <div className="flex items-center text-sm text-green-400">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    AI Teacher Approved ✅
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <p className="text-gray-300 mb-4 text-lg leading-relaxed relative z-10">{lesson.content}</p>

              {/* Simple Example */}
              <div className="bg-green-900 bg-opacity-30 border border-green-700 rounded-lg p-4 mb-4 relative z-10">
                <h4 className="text-green-300 font-semibold mb-2">💡 Simple Example:</h4>
                <p className="text-green-200">{lesson.simpleExample}</p>
              </div>

              {/* Code Example */}
              <div className="bg-gray-800 rounded-lg p-4 mb-4 relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-green-400 font-semibold">📝 Try This Code:</span>
                  <button className="text-gray-400 hover:text-white transition-colors text-sm">
                    Copy Code 📋
                  </button>
                </div>
                <pre className="text-green-400 text-sm overflow-x-auto">
                  <code>{lesson.code}</code>
                </pre>
              </div>

              {/* Key Points */}
              <div className="bg-yellow-900 bg-opacity-30 border border-yellow-700 rounded-lg p-4 relative z-10">
                <h4 className="text-yellow-300 font-semibold mb-3 flex items-center">
                  <span className="text-xl mr-2">🎯</span>
                  Remember These Key Points:
                </h4>
                <ul className="space-y-2">
                  {lesson.tips.map((tip: string, tipIndex: number) => (
                    <li key={tipIndex} className="text-yellow-200 flex items-start">
                      <span className="text-yellow-400 mr-2 font-bold">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Loading more lessons */}
          {isGenerating && (
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 border-2 border-green-500 border-t-transparent rounded-full animate-spin mr-3"></div>
                <span className="text-white font-semibold text-lg">AI Teacher is preparing more lessons...</span>
              </div>
              <p className="text-gray-300">Making sure styling stays simple!</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-12 bg-gray-900 border border-gray-700 rounded-xl p-6 text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500 rounded-full filter blur-3xl opacity-10"></div>
          <h3 className="text-xl font-bold text-white mb-2 relative z-10">🎉 Great Job Learning CSS!</h3>
          <p className="text-gray-300 mb-4 relative z-10">You're becoming a designer! Keep styling and experimenting!</p>
          <div className="flex justify-center space-x-4 relative z-10">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
              Practice More 🚀
            </button>
            <Link href="/study/web-development/css/quiz">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                Take Quiz 📝
              </button>
            </Link>
          </div>
        </div>

        {/* Floating AI Assistant */}
        <div className="fixed bottom-6 right-6">
          <button className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full text-xs flex items-center justify-center text-white font-bold">AI</span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
