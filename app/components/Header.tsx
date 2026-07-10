'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top bar with phone numbers */}
      <div className="bg-navy text-white py-2 px-6">
        <div className="max-w-6xl mx-auto text-sm flex flex-col md:flex-row gap-4 md:gap-8">
          <a href="tel:+15551234567" className="hover:text-accent transition">
            📞 (555) 123-4567
          </a>
          <a href="mailto:info@trojansolutions.com" className="hover:text-accent transition">
            ✉️ info@trojansolutions.com
          </a>
          <span className="text-accent font-semibold">24/7 Emergency Support</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="py-6 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-3">
            <Image
              src="/the1.png"
              alt="Trojan Integrated Solutions"
              width={45}
              height={45}
              className="rounded"
            />
            <div className="hidden sm:block">
              <p className="text-lg font-bold text-navy leading-tight">Trojan</p>
              <p className="text-xs text-gray-600">Integrated Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-12 flex-1 justify-center">
            <a href="/" className="text-navy hover:text-accent font-medium transition">
              Home
            </a>
            <a href="#services" className="text-navy hover:text-accent font-medium transition">
              Services
            </a>
            <a href="#products" className="text-navy hover:text-accent font-medium transition">
              Products
            </a>
            <a href="/free-inspection" className="text-navy hover:text-accent font-medium transition">
              Contact
            </a>
          </nav>

          {/* CTA Button */}
          <Link
            href="/free-inspection"
            className="hidden md:inline-block bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 transition duration-300"
          >
            Free Audit
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded transition"
          >
            <div className="flex flex-col gap-1.5">
              <span className="w-6 h-0.5 bg-navy transition" />
              <span className="w-6 h-0.5 bg-navy transition" />
              <span className="w-6 h-0.5 bg-navy transition" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4">
          <a
            href="/"
            onClick={() => setMenuOpen(false)}
            className="text-navy hover:text-accent font-medium py-2 transition"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
            className="text-navy hover:text-accent font-medium py-2 transition"
          >
            Services
          </a>
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="text-navy hover:text-accent font-medium py-2 transition"
          >
            Products
          </a>
          <a
            href="/free-inspection"
            onClick={() => setMenuOpen(false)}
            className="text-navy hover:text-accent font-medium py-2 transition"
          >
            Contact
          </a>
          <Link
            href="/free-inspection"
            className="bg-accent hover:bg-accent-dark text-white font-semibold py-3 px-6 text-center rounded transition duration-300 mt-2"
          >
            Free Audit
          </Link>
        </div>
      )}
    </header>
  )
}
