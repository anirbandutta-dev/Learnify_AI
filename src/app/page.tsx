"use client";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="container-max pl-2 pr-4 py-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="Learnify AI Logo" className="h-12 w-auto" />
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-brand-700">Home</Link>
              <Link href="/quiz" className="hover:text-brand-700">Quiz</Link>
              <Link href="/study-material" className="hover:text-brand-700">Study Material</Link>
              <Link href="/about" className="hover:text-brand-700">About</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden inline-flex items-center p-2 rounded hover:bg-gray-100"
              aria-label="Toggle Menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-brand-700" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/quiz" className="hover:text-brand-700" onClick={() => setOpen(false)}>Quiz</Link>
            <Link href="/study-material" className="hover:text-brand-700" onClick={() => setOpen(false)}>Study Material</Link>
            <Link href="/about" className="hover:text-brand-700" onClick={() => setOpen(false)}>About</Link>
          </nav>
        )}
      </div>
    </header>
  );
}

export default function Home() {
  const { isSignedIn, user } = useUser();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Learnify AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Your AI-powered learning companion for personalized education and skill development.
          </p>

          <div className="flex justify-center gap-4 mb-12">
            {isSignedIn ? (
              <div className="text-center">
                <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">
                  Welcome back, {user?.firstName || user?.emailAddresses[0]?.emailAddress}!
                </p>
                <SignOutButton>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    Sign Out
                  </button>
                </SignOutButton>
              </div>
            ) : (
              <SignInButton>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition-colors">
                  Get Started
                </button>
              </SignInButton>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                AI-Powered Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Personalized learning paths powered by advanced AI algorithms.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Interactive Quizzes
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Test your knowledge with dynamic, adaptive quizzes.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Progress Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Monitor your learning journey with detailed analytics.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
