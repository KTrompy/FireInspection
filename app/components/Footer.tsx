import Link from 'next/link'
import Logo from './Logo'

const FOOTER_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/free-inspection', label: 'Free Inspection' },
  { href: '/#services', label: 'Services' },
  { href: '/#why', label: 'Why Us' },
]

export default function Footer() {
  return (
    <footer className="blueprint-bg text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-14">
          <div>
            <Logo variant="light" showWordmark={false} className="mb-6" />
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
              SECUREGUARD
              <br />
              FIRE &amp; SECURITY
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <svg width="80" height="80" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20 3 L34 8 V19 C34 27.5 28.5 33.8 20 37 C11.5 33.8 6 27.5 6 19 V8 Z"
                  fill="rgba(255,255,255,0.06)"
                  stroke="#c8322c"
                  strokeWidth="1.6"
                />
                <path
                  d="M20 11c1.6 2 2.6 3.4 2.6 5.2 0 1.1-.6 2-1.5 2.4 1.7-.2 3-1.6 3-3.4 0-1.1-.4-2-.9-2.8 2.3 1.6 3.8 4.3 3.8 7.1 0 3.7-3 6.7-6.9 6.7s-6.9-3-6.9-6.7c0-2.9 1.6-5.5 3.9-7.1-.4.7-.6 1.4-.6 2.2 0 1 .4 1.9 1.1 2.5-.4-.5-.6-1.1-.6-1.8 0-1.7 1.2-3.1 3-4.3z"
                  fill="#b8934c"
                />
              </svg>
            </div>
          </div>

          <div className="md:justify-self-end md:text-right">
            <ul className="space-y-2 mb-6">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-gold-light transition">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-1 text-sm">
              <p>
                <a href="mailto:info@secureguard.com" className="hover:text-gold-light transition">
                  info@secureguard.com
                </a>
              </p>
              <p>
                <a href="tel:+15551234567" className="hover:text-gold-light transition">
                  Tel: (555) 123-4567
                </a>
              </p>
              <p>24/7 Emergency Support</p>
            </div>

            <p className="mt-4">
              <Link href="/privacy" className="text-sm underline hover:text-gold-light transition">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>

        <div className="mb-10">
          <Link
            href="/free-inspection"
            className="text-xl md:text-2xl font-semibold text-white underline decoration-gold underline-offset-4 hover:text-gold-light transition"
          >
            Ready to Become Fire Compliant? Reach Out Today
          </Link>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
          <p>&copy; 2026 SecureGuard. All rights reserved. | Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  )
}
