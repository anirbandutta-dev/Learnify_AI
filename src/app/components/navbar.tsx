"use client";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="container-max pl-2 pr-4 py-2"> {/* Adjust padding to reduce height */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Lernify AI Logo" 
                className="h-12 w-auto"
              />
          </Link>

          <div className="flex items-center gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 text-sm">
              <Link href="/" className="hover:text-brand-700">Home</Link>
              <Link href="/quiz" className="hover:text-brand-700">Quiz</Link>
              <Link href="/study-material" className="hover:text-brand-700">Study Material</Link>
              <Link href="/about" className="hover:text-brand-700">About</Link>
            </nav>

            {/* Auth Buttons - Desktop */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/login" className="btn-primary text-sm">
                Log In
              </Link>
              <Link href="/signup" className="btn-primary text-sm">
                Sign Up
              </Link>
            </div>

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
            
            {/* Mobile Auth Buttons */}
            <div className="flex flex-col gap-2 pt-4 border-t mt-4">
              <Link href="/login" className="btn-primary text-center" onClick={() => setOpen(false)}>
                Log In
              </Link>
              <Link href="/signup" className="btn-primary text-center" onClick={() => setOpen(false)}>
                Sign Up
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
