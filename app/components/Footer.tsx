import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-navy text-gray-300">
      {/* Main Footer */}
      <div className="py-16 px-6 border-b border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <Image
                src="/the1.png"
                alt="Trojan Integrated Solutions"
                width={40}
                height={40}
                className="mb-4 rounded"
              />
              <h3 className="text-white font-bold text-lg mb-2">Trojan Integrated Solutions</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Fire & Security Systems Integrators since 1997. Saving lives and protecting assets.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold mb-6">Services</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/services/design" className="hover:text-accent transition">
                    Design
                  </a>
                </li>
                <li>
                  <a href="/services/installation" className="hover:text-accent transition">
                    Installation
                  </a>
                </li>
                <li>
                  <a href="/services/maintenance" className="hover:text-accent transition">
                    Inspections & Maintenance
                  </a>
                </li>
                <li>
                  <a href="/services/trade-sales" className="hover:text-accent transition">
                    Trade Sales
                  </a>
                </li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-white font-bold mb-6">Products</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Fire Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    CCTV Systems
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Access Control
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition">
                    Voice Evacuation
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="tel:+15551234567" className="hover:text-accent transition block">
                    <p className="text-white font-semibold">(555) 123-4567</p>
                    <p className="text-gray-400">Main Office</p>
                  </a>
                </li>
                <li>
                  <a href="mailto:info@trojansolutions.com" className="hover:text-accent transition block">
                    <p className="text-white font-semibold">info@trojansolutions.com</p>
                    <p className="text-gray-400">Email</p>
                  </a>
                </li>
                <li>
                  <p className="text-accent font-semibold">24/7 Emergency Support</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 Trojan Integrated Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-accent transition">
              Privacy Policy
            </a>
            <a href="/faqs" className="hover:text-accent transition">
              FAQs
            </a>
            <a href="/free-inspection" className="hover:text-accent transition">
              Maintenance Request
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
