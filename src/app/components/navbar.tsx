"use client";

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

export default Navbar;