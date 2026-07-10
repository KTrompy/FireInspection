'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

interface FormState {
  business_name: string
  contact_name: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zip_code: string
  inspection_type: string
  preferred_date: string
  additional_notes: string
}

export default function Home() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [showForm, setShowForm] = useState(false)

  const [formData, setFormData] = useState<FormState>({
    business_name: '',
    contact_name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    inspection_type: 'fire',
    preferred_date: '',
    additional_notes: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error: supabaseError } = await supabase
        .from('inspections')
        .insert([formData])

      if (supabaseError) {
        setError(`Error: ${supabaseError.message}`)
        setLoading(false)
        return
      }

      setSubmitted(true)
      setFormData({
        business_name: '',
        contact_name: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip_code: '',
        inspection_type: 'fire',
        preferred_date: '',
        additional_notes: '',
      })
      setShowForm(false)

      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-orange-600 rounded flex items-center justify-center text-white font-bold text-lg">
              SG
            </div>
            <div className="font-bold text-xl text-gray-900">SecureGuard</div>
          </div>

          <div className="hidden md:flex gap-12 flex-1 justify-center text-gray-700">
            <a href="#services" className="hover:text-red-600 transition font-medium text-sm">Services</a>
            <a href="#why" className="hover:text-red-600 transition font-medium text-sm">Why Us</a>
            <a href="#contact" className="hover:text-red-600 transition font-medium text-sm">Contact</a>
          </div>

          <a href="tel:+15551234567" className="hidden sm:block text-red-600 font-bold hover:text-red-700">
            (555) 123-4567
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen w-full pt-20">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-10"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-between max-w-7xl mx-auto px-6">
          <div className="flex-1 text-white z-10">
            <h1 className="text-7xl font-bold mb-6 leading-tight">
              Comprehensive<br />Fire & Security<br />Inspections
            </h1>
            <p className="text-2xl text-gray-200 mb-8 max-w-2xl font-light">
              Professional certified specialists protecting your property, your business, and your peace of mind
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowForm(true)}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 text-lg font-bold hover:shadow-2xl transition"
              >
                Book Inspection
              </button>
              <a
                href="tel:+15551234567"
                className="border-2 border-white text-white px-8 py-4 text-lg font-bold hover:bg-white hover:bg-opacity-10 transition"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="hidden lg:block flex-1 h-96 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 to-orange-400/20 rounded-2xl flex items-center justify-center text-6xl">
              🔴
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-16 text-center">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white group hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">🔧</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Fire Safety Inspection</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Comprehensive evaluation of fire detection systems, suppression equipment, and emergency protocols
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Sprinkler system testing</li>
                  <li>✓ Fire alarm verification</li>
                  <li>✓ Emergency exit inspection</li>
                  <li>✓ Detailed compliance report</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white group hover:shadow-2xl transition">
              <div className="h-48 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center overflow-hidden">
                <div className="text-6xl">📹</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Security Systems</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Professional assessment of CCTV, access controls, and monitoring systems
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ CCTV system evaluation</li>
                  <li>✓ Access control testing</li>
                  <li>✓ Alarm system verification</li>
                  <li>✓ Upgrade recommendations</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white group hover:shadow-2xl transition ring-2 ring-red-600">
              <div className="h-48 bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-white text-4xl font-bold">
                Popular
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Package</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Full property safety evaluation combining fire and security system inspections
                </p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>✓ Complete system audit</li>
                  <li>✓ Integration testing</li>
                  <li>✓ Comprehensive reporting</li>
                  <li>✓ Consultation & planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">Why Choose Us</h2>
              <ul className="space-y-6">
                {[
                  '20+ Years of Industry Experience',
                  'Certified Fire Safety Specialists',
                  'End-to-End Solutions',
                  'Fully Compliant & Certified',
                  'Free Initial Inspection',
                  '24/7 Emergency Support'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-lg text-gray-700">
                    <span className="text-red-600 text-2xl font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-96 rounded-xl flex items-center justify-center text-6xl">
              🏢
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '20+', label: 'Years Experience' },
              { number: '500+', label: 'Properties Inspected' },
              { number: '24/7', label: 'Emergency Support' },
              { number: '100%', label: 'Satisfaction Guarantee' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16">What Our Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Office Manager, Tech Startup',
                text: 'SecureGuard provided the most thorough inspection we\'ve had. Their team was professional and efficient.'
              },
              {
                name: 'James Chen',
                role: 'Owner, Retail Store',
                text: 'After SecureGuard\'s inspection, we fixed several issues we didn\'t even know we had. Best investment in safety.'
              },
              {
                name: 'Lisa Rodriguez',
                role: 'Facilities Manager, Hospital',
                text: 'We\'ve worked with SecureGuard for 5 years. Responsive, knowledgeable, and invaluable compliance support.'
              }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-800 p-8 rounded-lg border border-gray-700">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6 bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Protect Your Property?</h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            Schedule your professional fire and security inspection today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowForm(true)}
              className="bg-white text-red-600 px-8 py-4 font-bold text-lg hover:bg-gray-100 transition"
            >
              Book Now
            </button>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white px-8 py-4 font-bold text-lg hover:bg-white hover:bg-opacity-10 transition"
            >
              Call (555) 123-4567
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 flex items-center justify-between">
              <h3 className="text-3xl font-bold">Request Your Inspection</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-white text-2xl hover:opacity-80 transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              {submitted && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✓ Request submitted! We'll contact you within 24 hours.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="contact_name"
                  value={formData.contact_name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name *"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="Phone *"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                placeholder="Property Address *"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />

              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="City"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  maxLength={2}
                  placeholder="State"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600"
                />
                <input
                  type="text"
                  name="zip_code"
                  value={formData.zip_code}
                  onChange={handleChange}
                  required
                  placeholder="ZIP"
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600"
                />
              </div>

              <select
                name="inspection_type"
                value={formData.inspection_type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600"
              >
                <option value="fire">Fire Safety Only</option>
                <option value="security">Security Systems Only</option>
                <option value="both">Both (Fire & Security)</option>
              </select>

              <textarea
                name="additional_notes"
                value={formData.additional_notes}
                onChange={handleChange}
                rows={3}
                placeholder="Additional notes..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold py-4 text-lg hover:shadow-xl transition disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-orange-600 rounded flex items-center justify-center text-white font-bold">
                  SG
                </div>
                <span className="font-bold text-white">SecureGuard</span>
              </div>
              <p className="text-sm leading-relaxed">
                Professional fire safety and security inspections protecting your property and peace of mind.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-red-400 transition">Fire Safety</a></li>
                <li><a href="#services" className="hover:text-red-400 transition">Security Systems</a></li>
                <li><a href="#services" className="hover:text-red-400 transition">Complete Package</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#why" className="hover:text-red-400 transition">About Us</a></li>
                <li><a href="#" className="hover:text-red-400 transition">Certifications</a></li>
                <li><a href="#" className="hover:text-red-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="tel:+15551234567" className="hover:text-red-400 transition">📞 (555) 123-4567</a></li>
                <li><a href="mailto:info@secureguard.com" className="hover:text-red-400 transition">📧 info@secureguard.com</a></li>
                <li>🕐 24/7 Emergency Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>&copy; 2024 SecureGuard. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
