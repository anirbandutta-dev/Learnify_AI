"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CSSQuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [quizStarted, setQuizStarted] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showAIDashboard, setShowAIDashboard] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const allQuestions = [
    {
      question: "What does CSS stand for?",
      options: [
        "Cascading Style Sheets",
        "Creative Style Sheets", 
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      correct: 0,
      explanation: "CSS stands for Cascading Style Sheets - it's the language used to style web pages!",
      category: "CSS Basics"
    },
    {
      question: "Which property is used to change the background color?",
      options: ["color", "background-color", "bgcolor", "background"],
      correct: 3,
      explanation: "The background property is a shorthand that can be used to set the background color of an element.",
      category: "CSS Properties"
    },
    {
      question: "Which CSS property controls the text size?",
      options: [
        "text-size",
        "font-size",
        "text-style",
        "font-style"
      ],
      correct: 1,
      explanation: "The font-size property is used to specify the size of text.",
      category: "CSS Text Styling"
    },
    {
      question: "Which property is used to change the font of an element?",
      options: ["font-family", "font-style", "font-weight", "font-size"],
      correct: 0,
      explanation: "The font-family property specifies the font for text.",
      category: "CSS Text Styling"
    },
    {
      question: "How do you select an element with id 'demo'?",
      options: [
        ".demo",
        "#demo",
        "*demo",
        "demo"
      ],
      correct: 1,
      explanation: "The # symbol is used to select elements by their id attribute.",
      category: "CSS Selectors"
    },
    {
      question: "How do you select elements with class name 'test'?",
      options: [".test", "#test", "*test", "test"],
      correct: 0,
      explanation: "The . symbol is used to select elements by their class attribute.",
      category: "CSS Selectors"
    },
    {
      question: "What is the correct CSS syntax to make all paragraph elements bold?",
      options: [
        "p {font-weight: bold;}",
        "p {text-size: bold;}",
        "p.all {font-weight: bold;}",
        "all.p {text-size: bold;}"
      ],
      correct: 0,
      explanation: "The font-weight property with value 'bold' makes text bold.",
      category: "CSS Syntax"
    },
    {
      question: "Which property is used to change the left margin of an element?",
      options: ["margin-left", "padding-left", "indent", "left-margin"],
      correct: 0,
      explanation: "The margin-left property sets the left margin of an element.",
      category: "CSS Box Model"
    },
    {
      question: "Which CSS property controls the spacing between elements?",
      options: [
        "spacing",
        "margin",
        "padding",
        "border"
      ],
      correct: 2,
      explanation: "The padding property defines the space between an element's content and its border.",
      category: "CSS Box Model"
    },
    {
      question: "Which CSS property is used to change the text color of an element?",
      options: ["text-color", "color", "font-color", "text-style"],
      correct: 1,
      explanation: "The color property is used to set the color of text.",
      category: "CSS Text Styling"
    },
    {
      question: "Which CSS property controls the text alignment?",
      options: [
        "text-align",
        "align",
        "text-alignment",
        "font-align"
      ],
      correct: 0,
      explanation: "The text-align property specifies the horizontal alignment of text in an element.",
      category: "CSS Text Styling"
    },
    {
      question: "What is the correct CSS syntax for making all the <p> elements bold?",
      options: ["p {font-weight: bold;}", "p {font: bold;}", "<p style='font-size: bold'>", "<p style='text-size: bold'>"],
      correct: 2,
      explanation: "The font-weight property with value 'bold' makes text bold.",
      category: "CSS Syntax"
    },
    {
      question: "How do you display a border like this: 'Solid red border'?",
      options: [
        "border: solid red;",
        "border-color: red; border-style: solid;",
        "border-color: red solid;",
        "border: red solid;"
      ],
      correct: 3,
      explanation: "The border shorthand property can be written as 'border: red solid;' with the color first and then the style.",
      category: "CSS Borders"
    },
    {
      question: "How do you make each word in a text start with a capital letter?",
      options: ["text-transform: capitalize;", "text-transform: uppercase;", "text-style: capital;", "font-transform: capitalize;"],
      correct: 0,
      explanation: "The text-transform property with value 'capitalize' transforms the first character of each word to uppercase.",
      category: "CSS Text Styling"
    },
    {
      question: "Which property is used to change the font size of an element?",
      options: [
        "font-size",
        "text-size",
        "font-style",
        "text-style"
      ],
      correct: 0,
      explanation: "The font-size property sets the size of text.",
      category: "CSS Text Styling"
    }
  ];

  // Function to get random questions
  const getRandomQuestions = () => {
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 15);
  };

  const [questions, setQuestions] = useState(getRandomQuestions());

  useEffect(() => {
    if (quizStarted && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && quizStarted) {
      handleNextQuestion();
    }
  }, [timeLeft, quizStarted]);

  const handleAnswerSelect = (answerIndex: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answerIndex);
    const correct = answerIndex === questions[currentQuestion].correct;
    setIsCorrect(correct);
    
    // Store user's answer
    setUserAnswers([...userAnswers, answerIndex]);
    
    if (correct) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
      setTimeLeft(30);
    } else {
      setShowResult(true);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeLeft(30);
    setUserAnswers([]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setQuizStarted(false);
    setTimeLeft(30);
    setIsCorrect(null);
    setQuestions(getRandomQuestions());
    setShowAIDashboard(false);
    setUserAnswers([]);
  };

  const viewAIDashboard = () => {
    setShowAIDashboard(true);
  };

  // Function to analyze user performance and generate AI suggestions
  const getAISuggestions = () => {
    const categoryPerformance: Record<string, { correct: number, total: number }> = {};
    
    // Calculate performance by category
    questions.forEach((question, index) => {
      const category = question.category;
      if (!categoryPerformance[category]) {
        categoryPerformance[category] = { correct: 0, total: 0 };
      }
      categoryPerformance[category].total += 1;
      if (userAnswers[index] === question.correct) {
        categoryPerformance[category].correct += 1;
      }
    });

    // Find weakest categories
    const weakCategories = Object.entries(categoryPerformance)
      .filter(([_, stats]) => stats.correct / stats.total < 0.7)
      .map(([category]) => category);

    // Generate personalized suggestions
    const suggestions = [];
    
    if (weakCategories.length > 0) {
      suggestions.push({
        title: "Focus Areas",
        description: `Based on your quiz performance, you should focus on: ${weakCategories.join(', ')}.`,
        resources: weakCategories.map(cat => `${cat} practice exercises`),
        priority: "High"
      });
    }

    // General suggestions based on score
    const percentage = (score / questions.length) * 100;
    
    if (percentage < 60) {
      suggestions.push({
        title: "Foundation Building",
        description: "You're still building your CSS foundation. Focus on core concepts before moving to advanced topics.",
        resources: ["CSS basics tutorial", "Interactive coding exercises"],
        priority: "Medium"
      });
    } else if (percentage < 80) {
      suggestions.push({
        title: "Practice Makes Perfect",
        description: "You have a good grasp of CSS basics. Now practice with real projects to solidify your knowledge.",
        resources: ["Build a personal website", "Create a responsive layout"],
        priority: "Medium"
      });
    } else {
      suggestions.push({
        title: "Advanced Topics",
        description: "You've mastered CSS basics! Now explore advanced topics to become a CSS expert.",
        resources: ["CSS animations", "Advanced layouts with Grid and Flexbox", "CSS preprocessors like Sass"],
        priority: "Low"
      });
    }

    // Time-based suggestion
    const avgTimePerQuestion = (30 * questions.length - timeLeft) / questions.length;
    if (avgTimePerQuestion < 10) {
      suggestions.push({
        title: "Speed and Accuracy",
        description: "You're answering quickly! Make sure you're not rushing - accuracy is more important than speed.",
        resources: ["Code review practice", "Debugging exercises"],
        priority: "Medium"
      });
    } else if (avgTimePerQuestion > 20) {
      suggestions.push({
        title: "Time Management",
        description: "You're taking your time with questions. Try to improve your speed while maintaining accuracy.",
        resources: ["CSS cheat sheets", "Quick reference guides"],
        priority: "Medium"
      });
    }

    return suggestions;
  };

  if (!quizStarted) {
    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              🎨 CSS Quiz Challenge
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Test your CSS knowledge with our fun and interactive quiz! 15 random questions to challenge your styling skills.
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-6">Quiz Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-blue-900 bg-opacity-30 rounded-lg p-4">
                <div className="text-3xl mb-2">📝</div>
                <h3 className="text-lg font-semibold text-white mb-2">Questions</h3>
                <p className="text-blue-300">15 Questions</p>
              </div>
              <div className="bg-green-900 bg-opacity-30 rounded-lg p-4">
                <div className="text-3xl mb-2">⏱️</div>
                <h3 className="text-lg font-semibold text-white mb-2">Time Limit</h3>
                <p className="text-green-300">30 seconds per question</p>
              </div>
              <div className="bg-purple-900 bg-opacity-30 rounded-lg p-4">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-lg font-semibold text-white mb-2">Topics</h3>
                <p className="text-purple-300">CSS Basics to Advanced</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={startQuiz}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-xl font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              Start Quiz 🚀
            </button>
            <div>
              <Link
                href="/study/web-development/css"
                className="text-gray-400 hover:text-white transition-colors"
              >
                ← Back to CSS Lessons
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  if (showAIDashboard) {
    const aiSuggestions = getAISuggestions();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* AI Header Section */}
          <div className="text-center mb-12 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur-3xl opacity-20 animate-pulse"></div>
            <h1 className="text-4xl font-bold mb-4 text-white relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              AI-Powered Learning Dashboard
            </h1>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto relative z-10">
              Based on your quiz performance, here's your personalized learning path with AI recommendations.
            </p>
          </div>

          {/* Quiz Results Summary */}
          <div className="bg-gray-800 bg-opacity-50 border border-gray-700 rounded-xl p-6 mb-8">
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5极H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h极2a2 2 0 012 2" />
              </svg>
              Your Quiz Results
            </h3>
            <div className="flex justify-between items-center">
              <div>
                <div className="text-3极xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {score}/{questions.length}
                </div>
                <div className="text-gray-300">{percentage}% Correct</div>
              </div>
              <div className="text-right">
                <div className="text-green-400 font-semibold">CSS Knowledge</div>
                <div className="text-gray-400 text-sm">Skill Level: {score >= 12 ? "Advanced" : score >= 8 ? "Intermediate" : "Beginner"}</div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mt-4">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <svg className="w-6 h-6 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI-Powered Learning Recommendations
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {aiSuggestions.map((suggestion, index) => (
                <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-6">
                  <div className="flex items-start justify-between mb极-4">
                    <h3 className="text-xl font-semibold text-white">{suggestion.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      suggestion.priority === "High" ? "bg-red-500 text-white" :
                      suggestion.priority === "Medium" ? "bg-yellow-500 text-black" :
                      "bg-green-500 text-white"
                    }`}>
                      {suggestion.priority} Priority
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{suggestion.description}</p>
                  <div>
                    <h4 className="text-sm font-semib极old text-blue-400 mb-2">Recommended Resources:</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      {suggestion.resources.map((resource, i) => (
                        <li key={i} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                          {resource}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Study Plan */}
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 mb-8">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-yellow-400" fill="none" stroke="currentColor" viewBox="极0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Personalized Study Plan
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                <span className="text-gray-300">CSS Fundamentals Review</span>
                <span className="text-blue-400 text-sm">2 hours</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                <span className="text-gray-300">Interactive Practice Exercises</span>
                <span className="text-blue-400 text-sm">3 hours</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                <span className="text-gray-300">Build a Small Project</span>
                <span className="text-blue-400 text-sm">5 hours</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-800 rounded-lg">
                <span className="text-gray-300">Take Advanced CSS Quiz</span>
                <span className="text-blue-400 text-sm">1 hour</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="text-center space-x-4">
            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Retry Quiz 🔄
            </button>
            <Link
              href="/study/web-development/css"
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 inline-block"
            >
              Continue Learning 📚
            </Link>
          </div>
        </div>
      </main>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    const getMessage = () => {
      if (percentage >= 80) return "🎉 Excellent! You're a CSS master!";
      if (percentage >= 60) return "👍 Good job! You're getting the hang of CSS!";
      if (percentage >= 40) return "📚 Not bad! Keep studying and you'll improve!";
      return "💪 Don't give up! Practice makes perfect!";
    };

    return (
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">Quiz Complete! 🎊</h1>
            <p className="text-xl text-gray-300 mb-8">{getMessage()}</p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 mb-8">
            <div className="text-6xl mb-4">🏆</div>
            <h2 className="text-3xl font-bold text-white mb-4">Your Score</h2>
            <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              {score}/{questions.length}
            </div>
            <div className="text-2xl text-gray-300 mb-6">{percentage}%</div>
            
            <div className="w-full bg-gray-700 rounded-full h-4 mb-6">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-600 h-4 rounded-full transition-all duration-1000"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="bg-green-900 bg-opacity-30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-300 mb-2">✅ Correct Answers</h3>
                <p className="text-2xl font-bold text-white">{score}</p>
              </div>
              <div className="bg-red-900 bg-opacity-30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-300 mb-2">❌ Incorrect Answers</h3>
                <p className="text-2xl font-bold text-white">{questions.length - score}</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={viewAIDashboard}
              className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white text-lg font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl mr-4"
            >
              View AI Recommendations 🤖
            </button>
            <button
              onClick={resetQuiz}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl mr-4"
            >
              Try Again 🔄
            </button>
            <Link
              href="/study/web-development/css"
              className="bg-gray-700 hover:bg-gray-600 text-white text-lg font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl inline-block"
            >
              Back to Lessons 📚
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">CSS Quiz</h1>
          <div className="flex justify-center items-center space-x-8 text-gray-300">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span className="flex items-center">
              ⏱️ {timeLeft}s
            </span>
            <span>Score: {score}</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-700 rounded-full h-2 mb-8">
          <div 
            className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>

        {/* Question Card */}
        <div className="bg-gray-900 border border-gray-700 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={selectedAnswer !== null}
                className={`w-full p-4 rounded-lg text-left transition-all duration-300 ${
                  selectedAnswer === index
                    ? isCorrect
                      ? 'bg-green-600 text-white'
                      : 'bg-red-600 text-white'
                    : selectedAnswer !== null && index === questions[currentQuestion].correct
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600'
                } ${
                  selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer hover:border-blue-500'
                }`}
              >
                <span className="font-semibold mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>

          {/* Explanation */}
          {selectedAnswer !== null && (
            <div className="mt-6 p-4 bg-blue-900 bg-opacity-30 border border-blue-700 rounded-lg">
              <h3 className="text-blue-300 font-semibold mb-2">💡 Explanation:</h3>
              <p className="text-blue-200">{questions[currentQuestion].explanation}</p>
            </div>
          )}
        </div>

        {/* Next Button */}
        {selectedAnswer !== null && (
          <div className="text-center">
            <button
              onClick={handleNextQuestion}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-bold py-3 px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              {currentQuestion < questions.length - 1 ? 'Next Question →' : 'Finish Quiz 🏁'}
            </button>
          </div>
        )}
      </div>
    </main>
  );
}