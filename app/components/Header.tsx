'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#why', label: 'Why Us' },
  { href: 'tel:+15551234567', label: 'Call' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/98 backdrop-blur-md z-50 border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition">
          <Logo variant="dark" showWordmark={false} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-12 flex-1 justify-center">
          <a href="/#services" className="text-navy font-medium hover:text-gold transition text-sm">
            Services
          </a>
          <a href="/#why" className="text-navy font-medium hover:text-gold transition text-sm">
            Why Us
          </a>
        </nav>

        {/* CTA Button */}
        <Link
          href="/free-inspection"
          className="bg-gold hover:bg-gold-light text-navy font-bold py-2 px-6 rounded-lg transition text-sm hidden md:inline-block"
        >
          Free Inspection
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
        >
          <div className="flex flex-col gap-1.5">
            <span className="w-5 h-0.5 bg-navy transition" />
            <span className="w-5 h-0.5 bg-navy transition" />
            <span className="w-5 h-0.5 bg-navy transition" />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-3">
          <a
            href="/#services"
            onClick={() => setMenuOpen(false)}
            className="text-navy hover:text-gold font-medium py-2 text-sm"
          >
            Services
          </a>
          <a
            href="/#why"
            onClick={() => setMenuOpen(false)}
            className="text-navy hover:text-gold font-medium py-2 text-sm"
          >
            Why Us
          </a>
          <Link
            href="/free-inspection"
            onClick={() => setMenuOpen(false)}
            className="bg-gold text-navy font-bold py-2 px-4 rounded text-center text-sm mt-2"
          >
            Free Inspection
          </Link>
        </div>
      )}
    </header>
  )
}
