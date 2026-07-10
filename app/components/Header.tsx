'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const NAV_LINKS = [
  { href: '/#services', label: 'Services' },
  { href: '/#why', label: 'Why Us' },
  { href: '/#contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-lg border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="w-6 h-0.5 bg-navy transition" />
          <span className="w-6 h-0.5 bg-navy transition" />
          <span className="w-6 h-0.5 bg-navy transition" />
        </button>

        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition">
          <Logo variant="dark" />
        </Link>

        <nav className="hidden lg:flex gap-8 flex-1 justify-center text-navy">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gold font-semibold text-sm transition relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-gold to-gold-light group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <Link
          href="/free-inspection"
          className="hidden sm:flex items-center gap-3 bg-gradient-to-r from-gold to-gold-light hover:shadow-lg text-navy px-6 py-3 text-sm font-bold tracking-wide transition rounded-lg transform hover:scale-105"
        >
          <span>
            FREE INSPECTION
            <br />
            <span className="text-xs font-semibold">Book Now</span>
          </span>
          <span aria-hidden className="text-lg">→</span>
        </Link>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-gold/20 bg-white/98 backdrop-blur-md px-6 py-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-navy hover:text-gold font-semibold text-sm transition py-2"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/free-inspection"
            onClick={() => setMenuOpen(false)}
            className="bg-gradient-to-r from-gold to-gold-light text-navy px-6 py-3 text-sm font-bold text-center rounded-lg mt-2"
          >
            FREE FIRE SYSTEM INSPECTION
          </Link>
        </div>
      )}
    </header>
  )
}
