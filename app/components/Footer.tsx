import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Image
              src="/the1.png"
              alt="Trojan Integrated Solutions"
              width={40}
              height={40}
              className="mb-4"
            />
            <h3 className="text-white font-bold text-lg mb-2">Trojan Integrated Solutions</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Fire safety and security systems you can trust. Serving the region for 20+ years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gold transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/free-inspection" className="hover:text-gold transition">
                  Free Inspection
                </Link>
              </li>
              <li>
                <Link href="/#services" className="hover:text-gold transition">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+15551234567" className="hover:text-gold transition">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:info@trojansolutions.com" className="hover:text-gold transition">
                  info@trojansolutions.com
                </a>
              </li>
              <li className="text-gold font-semibold">
                24/7 Emergency Support
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 Trojan Integrated Solutions. All rights reserved.</p>
          <p>Licensed & Insured | NFPA Certified</p>
        </div>
      </div>
    </footer>
  )
}
