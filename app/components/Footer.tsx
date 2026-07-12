import Link from 'next/link'
import Image from 'next/image'
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
              TROJAN INTEGRATED
              <br />
              SOLUTIONS
            </h2>
          </div>

          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Image
                src="/the1.png"
                alt="Trojan Integrated Solutions Logo"
                width={150}
                height={150}
              />
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
                <a href="mailto:info@trojansolutions.com" className="hover:text-gold-light transition">
                  info@trojansolutions.com
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
          <p>&copy; 2026 Trojan Integrated Solutions. All rights reserved. | Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  )
}
