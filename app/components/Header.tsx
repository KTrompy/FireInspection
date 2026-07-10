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
    <header className="fixed top-0 w-full bg-white z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span className="w-6 h-0.5 bg-navy" />
          <span className="w-6 h-0.5 bg-navy" />
          <span className="w-6 h-0.5 bg-navy" />
        </button>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((v) => !v)}
          className="hidden md:flex flex-col gap-1.5"
        >
          <span className="w-6 h-0.5 bg-navy" />
          <span className="w-6 h-0.5 bg-navy" />
          <span className="w-6 h-0.5 bg-navy" />
        </button>

        <Link href="/" className="flex-shrink-0">
          <Logo variant="dark" />
        </Link>

        <nav className="hidden lg:flex gap-10 flex-1 justify-center text-gray-700">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-brand-red transition font-medium text-sm">
              {link.label}
            </a>
          ))}
        </nav>

        <Link
          href="/free-inspection"
          className="hidden sm:flex items-center gap-3 bg-gold hover:bg-gold-light text-navy px-5 py-3 text-sm font-bold tracking-wide transition text-center leading-snug"
        >
          <span>
            FREE FIRE
            <br />
            SYSTEM INSPECTION
          </span>
          <span aria-hidden className="text-lg">&rarr;</span>
        </Link>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-gray-700 hover:text-brand-red font-medium text-sm"
            >
              {link.label}
            </a>
          ))}
          <Link
            href="/free-inspection"
            onClick={() => setMenuOpen(false)}
            className="bg-gold text-navy px-5 py-3 text-sm font-bold text-center"
          >
            FREE FIRE SYSTEM INSPECTION
          </Link>
        </div>
      )}
    </header>
  )
}
