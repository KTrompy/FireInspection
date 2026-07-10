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
    <footer className="blueprint-bg text-gray-300 pt-20 pb-8 px-6 relative">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-start mb-16">
          <div className="md:col-span-1">
            <Logo variant="light" showWordmark={false} className="mb-6" />
            <h2 className="text-3xl font-black text-white leading-tight tracking-tight mb-4">
              TROJAN
              <br />
              INTEGRATED
              <br />
              SOLUTIONS
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">Your trusted partner in fire safety and security solutions.</p>
          </div>

          <div className="flex justify-center">
            <div className="w-48 h-48 rounded-2xl bg-white/10 border border-gold/30 flex items-center justify-center hover:border-gold/60 transition shadow-xl">
              <Image
                src="/the1.png"
                alt="Trojan Integrated Solutions Logo"
                width={180}
                height={180}
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Quick Links</h3>
              <ul className="space-y-2">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-gray-300 hover:text-gold transition font-medium">
                      → {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-white mb-4 text-lg">Contact</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <a href="mailto:info@trojansolutions.com" className="text-gray-300 hover:text-gold transition">
                    📧 info@trojansolutions.com
                  </a>
                </p>
                <p>
                  <a href="tel:+15551234567" className="text-gray-300 hover:text-gold transition">
                    ☎️ (555) 123-4567
                  </a>
                </p>
                <p className="text-gold font-semibold">🔔 24/7 Emergency Support</p>
              </div>
            </div>
          </div>
        </div>

        <div className="my-12 bg-gradient-to-r from-gold/20 to-brand-red/20 p-8 rounded-xl border border-gold/30">
          <Link
            href="/free-inspection"
            className="flex items-center justify-between text-xl md:text-2xl font-bold text-white hover:text-gold transition group"
          >
            <span>✓ Ready to Become Fire Compliant?</span>
            <span className="group-hover:translate-x-2 transition">→</span>
          </Link>
          <p className="text-gray-300 mt-2">Schedule your free assessment with our certified specialists today</p>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>&copy; 2026 Trojan Integrated Solutions. All rights reserved.</p>
            <p className="font-semibold text-gray-400">✓ Licensed &amp; Insured | NFPA Certified</p>
            <Link href="/privacy" className="hover:text-gold transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
