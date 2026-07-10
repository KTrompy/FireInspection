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
      <section className="blueprint-bg pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center relative">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            BOOK YOUR FREE FIRE
            <br />
            SYSTEM AUDIT
          </h1>
          <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
            Fill in your details below and one of our certified specialists will be in touch to
            schedule your complimentary fire &amp; security system inspection.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-3xl mx-auto bg-white shadow-lg p-8 md:p-12">
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700">
              Request submitted successfully! We&apos;ll contact you shortly.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700">{error}</div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-navy mb-4">Your Information</h2>
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
              <h2 className="text-2xl font-semibold text-navy mb-4">Property Address</h2>
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
              <h2 className="text-2xl font-semibold text-navy mb-4">Inspection Details</h2>
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
              className="w-full bg-gold hover:bg-gold-light disabled:bg-gray-400 text-navy font-bold py-4 text-lg transition"
            >
              {loading ? 'Submitting...' : 'Book My Free Inspection'}
            </button>

            <p className="text-sm text-gray-600 text-center">* Required fields</p>
          </form>
        </div>
      </section>
    </div>
  )
}
