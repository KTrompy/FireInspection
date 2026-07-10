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

const initialState: FormState = {
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
}

export default function FreeInspectionPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState<FormState>(initialState)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error: supabaseError } = await supabase.from('inspections').insert([formData])

      if (supabaseError) {
        setError(`Error: ${supabaseError.message}`)
        setLoading(false)
        return
      }

      setSubmitted(true)
      setFormData(initialState)
    } catch {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full bg-panel">
      <section className="blueprint-bg pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-6 inline-block">
            <span className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold">
              ✓ 100% Free - No Obligation
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4">
            Your FREE Fire &amp;
            <br />
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Security Audit</span>
          </h1>

          <p className="text-gray-200 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Fill in your details below and one of our certified specialists will contact you to schedule your complimentary comprehensive fire &amp; security system inspection—completely free, with no obligation.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-2xl p-8 md:p-12 border-t-4 border-gold">
          {submitted && (
            <div className="mb-6 p-6 bg-green-50 border-2 border-green-400 text-green-700 rounded-lg font-semibold flex items-center gap-3">
              <span className="text-2xl">✓</span>
              <div>
                <p className="font-bold">Request submitted successfully!</p>
                <p className="text-sm">We&apos;ll contact you shortly to confirm your appointment.</p>
              </div>
            </div>
          )}

          {error && (
            <div className="mb-6 p-6 bg-red-50 border-2 border-red-400 text-red-700 rounded-lg font-semibold">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <span className="text-gold text-3xl">📋</span>
                Your Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First name *</label>
                  <input
                    type="text"
                    name="contact_name"
                    value={formData.contact_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Business name</label>
                  <input
                    type="text"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <span className="text-gold text-3xl">📍</span>
                Property Address
              </h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City *</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State *</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    maxLength={2}
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
                  <input
                    type="text"
                    name="zip_code"
                    value={formData.zip_code}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-navy mb-6 flex items-center gap-2">
                <span className="text-gold text-3xl">🔍</span>
                Inspection Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Inspection Type *</label>
                  <select
                    name="inspection_type"
                    value={formData.inspection_type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                  >
                    <option value="fire">Fire Safety Inspection</option>
                    <option value="security">Security System Inspection</option>
                    <option value="both">Both (Fire &amp; Security)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                  <input
                    type="date"
                    name="preferred_date"
                    value={formData.preferred_date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Additional Notes</label>
                <textarea
                  name="additional_notes"
                  value={formData.additional_notes}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 focus:ring-2 focus:ring-gold focus:border-transparent"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-gold to-gold-light hover:shadow-2xl disabled:bg-gray-400 text-navy font-bold py-4 text-lg transition rounded-lg transform hover:scale-105 disabled:cursor-not-allowed"
            >
              {loading ? '⏳ Submitting...' : '✓ Book My Free Inspection'}
            </button>

            <p className="text-sm text-gray-600 text-center">* Required fields</p>
          </form>
        </div>
      </section>
    </div>
  )
}
