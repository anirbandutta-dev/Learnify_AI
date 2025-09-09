"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function HTMLPage() {
  const [isGenerating, setIsGenerating] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);
  const [generatedContent, setGeneratedContent] = useState<any[]>([]);
  const [aiThinking, setAiThinking] = useState(true);

  const htmlSections = [
    {
      title: "What is HTML?",
      icon: "🌐",
      content: "HTML stands for HyperText Markup Language. Think of it as the skeleton or framework of a website. Just like how you need bones to build a body, you need HTML to build a webpage!",
      simpleExample: "HTML is like the structure of a house - it tells us where the walls, doors, and windows go.",
      code: `<!DOCTYPE html>
<html>
<head>
    <title>My First Webpage</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first webpage.</p>
</body>
</html>`,
      tips: ["HTML is easy to learn", "It's like writing with special labels", "Every webpage uses HTML"]
    },
    {
      title: "Basic HTML Tags",
      icon: "🏷️",
      content: "HTML uses 'tags' to create different parts of a webpage. Tags are like labels that tell the computer what each part is. They always come in pairs - an opening tag and a closing tag.",
      simpleExample: "Think of tags like putting labels on boxes - <h1> means 'this is a big heading' and </h1> means 'end of heading'.",
      code: `<h1>This is a big heading</h1>
<h2>This is a smaller heading</h2>
<p>This is a paragraph with some text.</p>
<strong>This text is bold</strong>
<em>This text is italic</em>`,
      tips: ["Tags always come in pairs", "Opening tag: <tag>", "Closing tag: </tag>", "Some tags don't need closing"]
    },
    {
      title: "Making Lists",
      icon: "📝",
      content: "You can make lists in HTML just like you make lists on paper. There are two types: ordered lists (with numbers) and unordered lists (with bullet points).",
      simpleExample: "Ordered lists are like numbered steps in a recipe. Unordered lists are like shopping lists with bullet points.",
      code: `<!-- Shopping List (unordered) -->
<ul>
    <li>Milk</li>
    <li>Bread</li>
    <li>Eggs</li>
</ul>

<!-- Recipe Steps (ordered) -->
<ol>
    <li>Mix the ingredients</li>
    <li>Bake for 20 minutes</li>
    <li>Let it cool</li>
</ol>`,
      tips: ["ul = unordered list (bullet points)", "ol = ordered list (numbers)", "li = list item", "Always use li inside ul or ol"]
    },
    {
      title: "Adding Images",
      icon: "🖼️",
      content: "You can add pictures to your webpage using the img tag. This tag is special because it doesn't need a closing tag. You just need to tell it where the picture is located.",
      simpleExample: "It's like putting a photo in a frame - you just need to tell the computer where to find the photo.",
      code: `<img src="my-photo.jpg" alt="A beautiful sunset">
<img src="cat.png" alt="A cute cat" width="200" height="150">
<img src="https://example.com/image.jpg" alt="Image from internet">`,
      tips: ["src tells where the image is", "alt describes the image", "width and height control size", "Images make webpages interesting"]
    },
    {
      title: "Creating Links",
      icon: "🔗",
      content: "Links let people click and go to other pages or websites. They're like doors that take you from one room to another on the internet!",
      simpleExample: "Links are like signposts that point to other places. When you click them, you travel to that place.",
      code: `<a href="https://www.google.com">Visit Google</a>
<a href="about.html">About Us</a>
<a href="mailto:teacher@school.com">Email the teacher</a>
<a href="tel:123-456-7890">Call us</a>`,
      tips: ["href tells where the link goes", "Text between tags is clickable", "Links can go to other websites", "Links can also open emails or make calls"]
    },
    {
      title: "Making Tables",
      icon: "📊",
      content: "Tables help organize information in rows and columns, just like a spreadsheet. They're great for showing data like grades, schedules, or any organized information.",
      simpleExample: "Tables are like grids on paper - you put information in boxes that are arranged in rows and columns.",
      code: `<table border="1">
    <tr>
        <th>Subject</th>
        <th>Grade</th>
    </tr>
    <tr>
        <td>Math</td>
        <td>A+</td>
    </tr>
    <tr>
        <td>Science</td>
        <td>A</td>
    </tr>
</table>`,
      tips: ["table = the whole table", "tr = table row", "th = table header (bold)", "td = table data (normal text)"]
    },
    {
      title: "HTML Forms",
      icon: "📋",
      content: "Forms let people enter information on your webpage, like their name, email, or answers to questions. It's like having a digital form that people can fill out.",
      simpleExample: "Forms are like digital worksheets - people can type their answers and submit them.",
      code: `<form>
    <label>Your Name:</label>
    <input type="text" name="name">
    
    <label>Your Age:</label>
    <input type="number" name="age">
    
    <label>Your Email:</label>
    <input type="email" name="email">
    
    <button type="submit">Submit</button>
</form>`,
      tips: ["form = the container for inputs", "input = where people type", "label = describes what to enter", "button = submits the form"]
    },
    {
      title: "Colors and Styling",
      icon: "🎨",
      content: "You can make your webpage colorful and pretty! While HTML creates the structure, you can add colors, change fonts, and make things look nice.",
      simpleExample: "It's like decorating your room - HTML builds the walls, and colors make it look beautiful!",
      code: `<h1 style="color: blue;">Blue Heading</h1>
<p style="color: red; font-size: 20px;">Big red text</p>
<div style="background-color: yellow;">Yellow background</div>
<span style="color: green;">Green text</span>`,
      tips: ["style attribute adds colors", "color changes text color", "background-color changes background", "font-size changes text size"]
    }
  ];

  useEffect(() => {
    // Simulate AI thinking and content generation
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
        setCurrentSection(prev => {
          const next = prev + 1;
          if (next < htmlSections.length) {
            setGeneratedContent(prev => [...prev, htmlSections[next]]);
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
            <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-4">AI is preparing your HTML lesson...</h2>
          <p className="text-gray-300 mb-6">Making it super easy to understand!</p>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header with gradient effect */}
        <div className="text-center mb-12 relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-3xl opacity-20 animate-pulse"></div>
          <h1 className="text-4xl font-bold mb-4 text-white relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            🌐 Learn HTML - Easy Way!
          </h1>
          <p className="text-lg text-gray-300 mb-8 relative z-10">
            Your AI teacher is making HTML super simple to understand. Let's build your first webpage together!
          </p>
        </div>

        {/* AI Status */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-4 mb-8 shadow-lg">
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-full p-2 mr-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white font-semibold">AI Teacher Status</h3>
              <p className="text-gray-300 text-sm">
                {isGenerating ? "Preparing your lesson..." : `Ready! ${generatedContent.length} lessons loaded`}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-400 text-sm font-medium">Ready to Learn!</span>
            </div>
          </div>
        </div>

        {/* Lessons */}
        <div className="space-y-6">
          {generatedContent.map((lesson, index) => (
            <div 
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
              style={{ animation: 'slideInUp 0.6s ease-out' }}
            >
              {/* Glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-10"></div>
              
              {/* Lesson Header */}
              <div className="flex items-center mb-4 relative z-10">
                <div className="text-3xl mr-4">{lesson.icon}</div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{lesson.title}</h2>
                  <div className="flex items-center text-sm text-blue-400">
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
              <div className="bg-blue-900 bg-opacity-30 border border-blue-700 rounded-lg p-4 mb-4 relative z-10">
                <h4 className="text-blue-300 font-semibold mb-2">💡 Simple Example:</h4>
                <p className="text-blue-200">{lesson.simpleExample}</p>
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
                  {lesson.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-yellow-200 flex items-start">
                      <span className="text-yellow-400 mr-2 font-bold">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          {/* Loading Animation */}
          {isGenerating && (
            <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 text-center shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin mr-3"></div>
                <span className="text-white font-semibold text-lg">AI Teacher is preparing more lessons...</span>
              </div>
              <p className="text-gray-300">Making sure everything is easy to understand!</p>
            </div>
          )}
        </div>

        {/* Fun Footer */}
        <div className="mt-12 bg-gray-900 border border-gray-700 rounded-xl p-6 text-center shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>
          <h3 className="text-xl font-bold text-white mb-2 relative z-10">🎉 Great Job Learning HTML!</h3>
          <p className="text-gray-300 mb-4 relative z-10">You're becoming a web developer! Keep practicing and you'll be amazing!</p>
          <div className="flex justify-center space-x-4 relative z-10">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Practice More 🚀
            </button>
            <Link href="/study/web-development/html/quiz">
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors">
                Take Quiz 📝
              </button>
            </Link>
          </div>
        </div>

        {/* AI Chat Assistant */}
        <div className="fixed bottom-6 right-6">
          <button className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-300 group">
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