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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                SG
              </div>
              <div>
                <div className="font-bold text-lg text-gray-900">SecureGuard</div>
                <div className="text-xs text-orange-600 font-medium">Fire & Security</div>
              </div>
            </div>

            <nav className="hidden md:flex gap-10 flex-1 justify-center">
              <a href="#services" className="text-sm text-gray-700 hover:text-orange-600 transition font-medium">Services</a>
              <a href="#testimonials" className="text-sm text-gray-700 hover:text-orange-600 transition font-medium">Testimonials</a>
              <a href="#why-us" className="text-sm text-gray-700 hover:text-orange-600 transition font-medium">Why Us</a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="tel:+15551234567" className="hidden sm:block text-orange-600 font-bold text-lg hover:text-orange-700">
                (555) 123-4567
              </a>
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transition text-sm"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-orange-50 to-white py-20 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Professional Safety Solutions
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Property. Fully Protected.
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Professional fire safety and security inspections you can trust. Protect your business, your home, and peace of mind.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setShowForm(true)}
                  className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-bold hover:shadow-lg transition text-lg"
                >
                  Request Inspection
                </button>
                <a
                  href="tel:+15551234567"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-orange-50 transition text-lg text-center"
                >
                  Call (555) 123-4567
                </a>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-orange-200 to-red-200 rounded-2xl h-96 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-6xl mb-4">🔒</div>
                <p className="text-gray-700 font-medium">Professional Inspection</p>
                <p className="text-gray-600 text-sm">Image placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Inspection Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete protection covering fire safety, security systems, and compliance
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Fire Safety */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border-t-4 border-red-600">
              <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.563 7.214A7 7 0 015.777 4m12.868 12.869c1.933-1.933 3.155-4.612 3.155-7.623 0-5.966-4.834-10.8-10.8-10.8-3.011 0-5.69 1.222-7.623 3.155m0 0A7 7 0 005.777 4m0 12.868c-1.933-1.933-3.155-4.612-3.155-7.623 0-5.966 4.834-10.8 10.8-10.8 3.011 0 5.69 1.222 7.623 3.155" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fire Safety Inspection</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Complete evaluation of fire detection systems, suppression equipment, and emergency protocols to keep your property safe.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-lg">✓</span>
                  <span>Sprinkler system testing & certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-lg">✓</span>
                  <span>Fire alarm verification</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 font-bold text-lg">✓</span>
                  <span>Emergency exit inspection</span>
                </li>
              </ul>
            </div>

            {/* Security Systems */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border-t-4 border-blue-600">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Security Systems</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Professional assessment of CCTV, access controls, and monitoring systems designed to protect what matters most.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span>CCTV system evaluation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span>Access control testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold text-lg">✓</span>
                  <span>Monitoring system verification</span>
                </li>
              </ul>
            </div>

            {/* Combined Package */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8 border-t-4 border-orange-600 relative md:ring-2 md:ring-orange-300">
              <div className="absolute -top-4 -right-4 bg-orange-600 text-white px-4 py-1 rounded-full text-sm font-bold">Popular</div>
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Complete Package</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Full property safety evaluation combining fire and security system inspections for complete peace of mind.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-lg">✓</span>
                  <span>Complete system audit</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-lg">✓</span>
                  <span>Integration testing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-600 font-bold text-lg">✓</span>
                  <span>Comprehensive reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Trusted by Hundreds
            </h2>
            <p className="text-xl text-gray-600">
              Real results from real clients who depend on us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mitchell",
                role: "Office Manager, Tech Startup",
                content: "SecureGuard provided the most thorough inspection we've had. Their team was professional, efficient, and gave us detailed recommendations. We feel completely confident about our safety now.",
                rating: 5
              },
              {
                name: "James Chen",
                role: "Owner, Retail Store",
                content: "After an inspection with SecureGuard, we fixed several issues we didn't even know we had. The report was clear and actionable. Best money we've spent on safety.",
                rating: 5
              },
              {
                name: "Lisa Rodriguez",
                role: "Facilities Manager, Hospital",
                content: "We've worked with SecureGuard for 5 years. They're responsive, knowledgeable, and their compliance support has been invaluable. Highly recommend them.",
                rating: 5
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-lg">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="py-20 px-4 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose SecureGuard
            </h2>
            <p className="text-xl text-gray-600">
              Industry expertise meets personal service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { number: "20+", label: "Years of Experience", icon: "⏱️" },
              { number: "500+", label: "Properties Inspected", icon: "🏢" },
              { number: "24/7", label: "Emergency Support", icon: "📞" },
              { number: "100%", label: "Satisfaction Guarantee", icon: "✨" },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md text-center hover:shadow-lg transition">
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Certified Professionals",
                desc: "Our team includes certified fire safety engineers and security specialists with extensive training, industry certifications, and years of hands-on experience."
              },
              {
                title: "Latest Technology",
                desc: "We use state-of-the-art diagnostic equipment and modern software to ensure thorough, accurate inspections that catch every detail."
              },
              {
                title: "Detailed Reporting",
                desc: "You'll receive comprehensive reports with clear findings, prioritized recommendations, and compliance documentation for your records."
              },
              {
                title: "Compliance Experts",
                desc: "We keep current on all local, state, and federal safety and security regulations to ensure your property meets every requirement."
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">✓</span> {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-red-600 text-white p-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold">Request Your Inspection</h3>
              <button
                onClick={() => setShowForm(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-8 space-y-4">
              {submitted && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✓ Request submitted successfully! We'll contact you within 24 hours.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Name *</label>
                  <input
                    type="text"
                    name="contact_name"
                    value={formData.contact_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Property Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  placeholder="123 Main Street"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="City"
                />
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  maxLength={2}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="State"
                />
                <input
                  type="text"
                  name="zip_code"
                  value={formData.zip_code}
                  onChange={handleChange}
                  required
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="ZIP"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Inspection Type *</label>
                  <select
                    name="inspection_type"
                    value={formData.inspection_type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="fire">Fire Safety</option>
                    <option value="security">Security Systems</option>
                    <option value="both">Both (Fire & Security)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Business Name</label>
                  <input
                    type="text"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="(optional)"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Notes</label>
                <textarea
                  name="additional_notes"
                  value={formData.additional_notes}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  placeholder="Any specific concerns..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold py-3 rounded-lg hover:shadow-lg transition disabled:opacity-50"
              >
                {loading ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* CTA Banner */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Protect Your Property?</h2>
          <p className="text-xl text-orange-100 mb-8">
            Get a professional inspection scheduled today. Call us or submit a request online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+15551234567"
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition text-lg"
            >
              Call (555) 123-4567
            </a>
            <button
              onClick={() => setShowForm(true)}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition text-lg"
            >
              Request Online
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                  SG
                </div>
                <span className="font-bold text-white">SecureGuard</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Professional fire safety and security inspections you can trust.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#services" className="hover:text-orange-400 transition">Fire Safety</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition">Security Systems</a></li>
                <li><a href="#services" className="hover:text-orange-400 transition">Complete Package</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#why-us" className="hover:text-orange-400 transition">About Us</a></li>
                <li><a href="#testimonials" className="hover:text-orange-400 transition">Testimonials</a></li>
                <li><a href="#" className="hover:text-orange-400 transition">Certifications</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">📞</span>
                  <a href="tel:+15551234567" className="hover:text-orange-400 transition">(555) 123-4567</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">📧</span>
                  <a href="mailto:info@secureguard.com" className="hover:text-orange-400 transition">info@secureguard.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-400">🕐</span>
                  <span>24/7 Emergency Support</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 SecureGuard. All rights reserved. | Licensed & Insured</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
