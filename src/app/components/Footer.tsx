"use client";

import Link from "next/link";

export function Footer() {
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