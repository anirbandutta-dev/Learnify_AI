"use client";

import { SignInButton, SignOutButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-transparent backdrop-blur-md border-b border-gray-700">
      <div className="px-4 py-2 w-full">
        <div className="flex items-center justify-between">
          {/* 🔹 Logo (Left side) */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-finaly.png"
              alt="Learnify AI Logo"
              className="h-12 w-auto"
            />
          </Link>

          {/* 🔹 Desktop Nav (Right side) */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
            <Link href="/quiz" className="hover:text-yellow-400">
              Quiz
            </Link>
            <Link href="/study" className="hover:text-yellow-400">
              Study
            </Link>
            <Link href="/roadmap" className="hover:text-yellow-400">
              Roadmap
            </Link>
            <Link href="/about" className="hover:text-yellow-400">
              About
            </Link>
          </nav>

          {/* 🔹 Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center p-2 rounded hover:bg-white/10 text-white"
            aria-label="Toggle Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* 🔹 Mobile Nav */}
        {open && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 text-sm font-medium text-white border-t border-gray-700 mt-2 pt-4">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/quiz" onClick={() => setOpen(false)}>
              Quiz
            </Link>
            <Link href="/study" onClick={() => setOpen(false)}>
              Study
            </Link>
            <Link href="/roadmap" onClick={() => setOpen(false)}>
              Roadmap
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-transparent backdrop-blur-md text-white py-6 mt-16 border-t border-gray-700">
      <div className="px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Learnify AI. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-3 text-sm">
          <Link href="/privacy" className="hover:text-yellow-400">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-yellow-400">
            Terms
          </Link>
          <Link href="/contact" className="hover:text-yellow-400">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}

function FeatureCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="group bg-gray-100/20 backdrop-blur-lg p-6 rounded-xl shadow-md 
                 hover:shadow-yellow-400/50 hover:shadow-2xl transition-all duration-300 
                 hover:-translate-y-1 border border-white/10 relative z-10"
    >
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-yellow-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-200 group-hover:text-yellow-200 transition-colors">
        {description}
      </p>
    </Link>
  );
}

function Arrow() {
  return (
    <div className="hidden md:flex justify-center relative z-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6 text-yellow-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 12h16m0 0l-4-4m4 4l-4 4"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  const { isSignedIn, user } = useUser();

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/learnify-bg.mp4" type="video/mp4" />
      </video>

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10" />

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <main className="flex-1 container mx-auto px-4 py-16 relative z-10">
        <div className="text-center">
          {/* Hero */}
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to Learnify{" "}
            <span className="text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.9)]">
              AI
            </span>
          </h1>

          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Your AI-powered learning companion for personalized education and
            skill development.
          </p>

          {/* Auth Buttons */}
          <div className="flex justify-center gap-4 mb-12">
            {isSignedIn ? (
              <div className="text-center">
                <p className="text-lg text-gray-100 mb-4">
                  Welcome back,{" "}
                  {user?.firstName ||
                    user?.emailAddresses[0]?.emailAddress}
                  !
                </p>
                <SignOutButton>
                  <button
                    className="bg-black/40 hover:bg-black/60 backdrop-blur-md
               text-white font-medium py-3 px-8 rounded-lg transition-all
               border border-white/20 shadow-md
               hover:shadow-yellow-400/50 hover:shadow-2xl"
                  >
                    Sign Out
                  </button>
                </SignOutButton>
              </div>
            ) : (
              <SignInButton>
                <button
                  className="bg-black/40 hover:bg-black/60 backdrop-blur-md 
                           text-white font-medium py-3 px-8 rounded-lg transition-all 
                           border border-white/20 shadow-md 
                           hover:shadow-yellow-400/50 hover:shadow-2xl 
                           hover:text-yellow-400"
                >
                  Get Started
                </button>
              </SignInButton>
            )}
          </div>

          {/* Features */}
          <div className="grid gap-6 max-w-5xl mx-auto md:grid-cols-5 items-center relative z-10">
            <FeatureCard
              title="AI-Powered Learning"
              description="Personalized learning paths powered by advanced AI algorithms."
              link="/study"
            />
            <Arrow />
            <FeatureCard
              title="Interactive Quizzes"
              description="Test your knowledge with dynamic, adaptive quizzes."
              link="/study/web-development/html/quiz"
            />
            <Arrow />
            <FeatureCard
              title="Progress Tracking"
              description="Monitor your learning journey with detailed analytics."
              link="/dashboard"
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
