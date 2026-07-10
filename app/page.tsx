import Link from 'next/link'

const SERVICES = [
  {
    title: 'Fire Safety Inspection',
    description: 'NFPA-compliant thorough audits identifying vulnerabilities and compliance gaps',
    icon: '🔍',
    duration: '2-4 hours'
  },
  {
    title: 'System Installation',
    description: 'Complete fire detection, suppression, and alarm systems tailored to your facility',
    icon: '⚙️',
    duration: 'Custom timeline'
  },
  {
    title: 'Maintenance & Monitoring',
    description: 'Ongoing service plans ensuring peak performance and regulatory compliance',
    icon: '📊',
    duration: 'Scheduled quarterly'
  },
  {
    title: 'Emergency Support',
    description: '24/7 emergency response and system troubleshooting whenever you need it',
    icon: '📞',
    duration: 'Always available'
  },
]

const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'Office Manager, Tech Startup',
    text: "They found critical issues we didn't know existed. Professional, thorough, and they made the whole process simple.",
  },
  {
    name: 'James Chen',
    role: 'Owner, Retail Store',
    text: "Best investment in safety we've made. The inspection revealed exactly what we needed to prioritize.",
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Facilities Manager, Hospital',
    text: "5 years of partnership. They're responsive, knowledgeable, and our team trusts them completely.",
  },
]

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* HERO: Crystal clear value proposition */}
      <section className="relative w-full pt-32 pb-24 px-6 bg-gradient-to-b from-navy via-navy-light to-navy overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-red rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto z-10">
          {/* Main headline - clear intent */}
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Fire Safety Systems That Work
          </h1>

          {/* Subheading - immediate benefit */}
          <p className="text-xl md:text-2xl text-gold font-medium mb-8 max-w-3xl">
            Expert inspections, installations & maintenance from certified specialists
          </p>

          {/* Supporting copy - addresses the main problem */}
          <p className="text-lg text-gray-300 mb-12 max-w-2xl leading-relaxed">
            Your facility needs fire safety that actually protects. We provide NFPA-compliant systems and inspections so you can focus on running your business with complete peace of mind.
          </p>

          {/* Primary CTA - unmissable */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Link
              href="/free-inspection"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-navy font-bold text-lg py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule Free Inspection
              <span className="ml-2">→</span>
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center border-2 border-gold text-white hover:bg-gold/20 font-bold text-lg py-4 px-8 rounded-lg transition duration-300"
            >
              Call: (555) 123-4567
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap gap-6 text-gray-300 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gold text-lg">✓</span>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold text-lg">✓</span>
              <span>NFPA Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gold text-lg">✓</span>
              <span>24/7 Emergency Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT: What we do - simple grid */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Section intro */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Comprehensive fire safety solutions that work. Everything from initial assessment to ongoing maintenance.
            </p>
          </div>

          {/* Service cards - clean, scannable */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.title} className="group">
                <div className="mb-6 text-5xl">{service.icon}</div>
                <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <p className="text-xs text-gold font-semibold uppercase tracking-wider">
                  {service.duration}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONVERSION: Why choose us - authority & proof */}
      <section className="py-28 px-6 bg-panel">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Stats and credentials */}
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 leading-tight">
                20+ Years of Protecting Your Assets
              </h2>

              <div className="space-y-6 mb-12">
                <div className="pb-6 border-b border-gold/30">
                  <p className="text-gold font-bold text-2xl mb-2">500+</p>
                  <p className="text-gray-700">Facilities inspected & maintained across the region</p>
                </div>
                <div className="pb-6 border-b border-gold/30">
                  <p className="text-gold font-bold text-2xl mb-2">100%</p>
                  <p className="text-gray-700">Certified team with continuous industry training</p>
                </div>
                <div>
                  <p className="text-gold font-bold text-2xl mb-2">24/7</p>
                  <p className="text-gray-700">Emergency response available whenever you need us</p>
                </div>
              </div>

              <Link
                href="/free-inspection"
                className="inline-flex items-center text-gold hover:text-gold-light font-bold text-lg transition"
              >
                Schedule your free assessment
                <span className="ml-2">→</span>
              </Link>
            </div>

            {/* Right: Trust factors */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg border-l-4 border-gold shadow-sm">
                <p className="font-bold text-navy text-lg mb-2">NFPA Certified</p>
                <p className="text-gray-600 text-sm">All inspections meet National Fire Protection Association standards</p>
              </div>

              <div className="bg-white p-8 rounded-lg border-l-4 border-gold shadow-sm">
                <p className="font-bold text-navy text-lg mb-2">Compliance Guaranteed</p>
                <p className="text-gray-600 text-sm">We keep you compliant with all federal, state, and local fire codes</p>
              </div>

              <div className="bg-white p-8 rounded-lg border-l-4 border-gold shadow-sm">
                <p className="font-bold text-navy text-lg mb-2">Detailed Reporting</p>
                <p className="text-gray-600 text-sm">Clear, actionable reports that help you prioritize improvements</p>
              </div>

              <div className="bg-white p-8 rounded-lg border-l-4 border-gold shadow-sm">
                <p className="font-bold text-navy text-lg mb-2">Ongoing Support</p>
                <p className="text-gray-600 text-sm">Regular maintenance plans keep your systems working perfectly</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF: Testimonials - real voices */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-navy mb-4 text-center">
            Trusted by Industry Leaders
          </h2>
          <p className="text-center text-gray-600 text-lg mb-16 max-w-2xl mx-auto">
            Real results from real clients across different industries
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="bg-panel p-8 rounded-lg border border-gray-200">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-800 mb-6 leading-relaxed italic text-lg">
                  "{testimonial.text}"
                </p>

                {/* Attribution */}
                <div>
                  <p className="font-bold text-navy">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA: Make the ask clear */}
      <section className="py-28 px-6 bg-gradient-to-b from-navy-light to-navy">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Protect Your Facility?
          </h2>
          <p className="text-xl text-gold mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation inspection from our certified specialists
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/free-inspection"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-light text-navy font-bold text-lg py-5 px-10 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg"
            >
              Schedule Inspection Now
            </Link>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center justify-center border-2 border-gold text-white hover:bg-gold/20 font-bold text-lg py-5 px-10 rounded-lg transition duration-300"
            >
              Call: (555) 123-4567
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            No credit card required. 15-minute call to discuss your needs.
          </p>
        </div>
      </section>
    </div>
  )
}
