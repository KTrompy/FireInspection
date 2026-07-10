import Link from 'next/link'

const CARE_CARDS = [
  {
    title: 'Inspection',
    description:
      'Our certified technicians conduct thorough fire system inspections in compliance with NFPA codes and local fire regulations. We identify faults, assess risk, and provide detailed reports — keeping your premises safe and legally compliant.',
  },
  {
    title: 'Installation',
    description:
      'From design to commissioning, we install complete fire detection and suppression systems tailored to your facility. All installations meet UL standards and are carried out by accredited specialists with years of industry experience.',
  },
  {
    title: 'Routine Maintenance',
    description:
      'Regular servicing is critical to ensuring your fire systems perform when it matters most. Our maintenance plans keep your equipment in peak condition, reduce downtime, and ensure full compliance with annual inspection requirements.',
  },
]

const SERVICE_COLUMNS = [
  {
    title: 'Fire Systems',
    items: ['Fire Detection & Alarms', 'Extinguishers & Hose Reels', 'Fire Stopping', 'Sprinkler Systems'],
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M28 8v4M20 14l-3-3M36 14l3-3"
          stroke="#b8934c"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <rect x="20" y="18" width="16" height="26" rx="3" stroke="#b8934c" strokeWidth="1.6" />
        <path d="M24 24h8M24 30h8M24 36h5" stroke="#b8934c" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'CCTV Systems',
    items: ['CCTV', 'CCTV Recording Systems', 'Remote Monitoring'],
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 28c5-9 13-14 20-14s15 5 20 14c-5 9-13 14-20 14S13 37 8 28Z"
          stroke="#b8934c"
          strokeWidth="1.6"
        />
        <circle cx="28" cy="28" r="6" stroke="#b8934c" strokeWidth="1.6" />
        <circle cx="28" cy="28" r="1.8" fill="#b8934c" />
      </svg>
    ),
  },
  {
    title: 'Access Control Systems',
    items: ['Access Control Systems', 'Alarm Monitoring', 'Intercom Systems'],
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="19" r="2.2" fill="#b8934c" />
        <path d="M28 26v14" stroke="#b8934c" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Gas Suppression',
    items: ['Gas Suppression Products', 'Suppression System Design', 'Cylinder Servicing'],
    icon: (
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M28 8c6 9 11 15.5 11 22.5C39 38 34 44 28 44s-11-6-11-13.5C17 23.5 22 17 28 8Z"
          stroke="#b8934c"
          strokeWidth="1.6"
        />
      </svg>
    ),
  },
]

const WHY_CHOOSE_US = [
  '20+ Years of Industry Experience',
  'Licensed & Skilled Team',
  'End-to-End Fire & Security Solutions',
  'Fully Compliant & Certified',
  'Free Initial Inspection',
  '24/7 Emergency Support',
]

const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'Office Manager, Tech Startup',
    text: "Trojan Integrated Solutions provided the most thorough inspection we've had. Their team was professional and efficient.",
  },
  {
    name: 'James Chen',
    role: 'Owner, Retail Store',
    text: "After Trojan Integrated Solutions' inspection, we fixed several issues we didn't even know we had. Best investment in safety.",
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Facilities Manager, Hospital',
    text: "We've worked with Trojan Integrated Solutions for 5 years. Responsive, knowledgeable, and invaluable compliance support.",
  },
]

function ArrowBullet() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
      <path d="M5 5h11v11" stroke="#0f1e38" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 5 5 16" stroke="#0f1e38" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full pt-24 blueprint-bg flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-gold rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-red rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 py-20 z-10">
          <div className="mb-6 inline-block">
            <span className="inline-block bg-gold/20 text-gold px-4 py-2 rounded-full text-sm font-semibold">
              🔒 Professional Fire &amp; Security Solutions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
            Trojan Integrated
            <br />
            <span className="bg-gradient-to-r from-gold to-gold-light bg-clip-text text-transparent">Solutions</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed">
            Certified fire safety and security specialists protecting your property, your business, and your peace of mind with industry-leading expertise and 24/7 support.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/free-inspection"
              className="group relative bg-gradient-to-r from-gold to-gold-light hover:from-gold-light hover:to-gold text-navy px-8 py-4 text-lg font-bold transition transform hover:scale-105 hover:shadow-2xl rounded-lg flex items-center gap-2"
            >
              <span>Book Your Free Inspection</span>
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
            <a
              href="tel:+15551234567"
              className="border-2 border-gold text-white px-8 py-4 text-lg font-bold hover:bg-gold hover:text-navy transition rounded-lg"
            >
              ☎️ Call Now
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-gold text-2xl font-bold">20+</p>
              <p className="text-gray-300 text-sm">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-gold text-2xl font-bold">24/7</p>
              <p className="text-gray-300 text-sm">Emergency Support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-gold text-2xl font-bold">100%</p>
              <p className="text-gray-300 text-sm">Certified Team</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
              <p className="text-gold text-2xl font-bold">FREE</p>
              <p className="text-gray-300 text-sm">Initial Assessment</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 px-6 z-10">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-gray-300 border-t border-white/20 pt-6">
            <p className="font-medium">✓ Licensed &amp; Insured | NFPA Certified</p>
            <a href="tel:+15551234567" className="font-semibold text-gold hover:text-gold-light transition">
              (555) 123-4567 &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Care cards */}
      <section className="py-24 px-6 bg-panel">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">Our Core Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive fire and security solutions tailored to your facility's unique needs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {CARE_CARDS.map((card, index) => (
              <div key={card.title} className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-brand-red"></div>

                <div className="p-8 relative z-10">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition">
                    <span className="text-xl">
                      {index === 0 && '🔍'}
                      {index === 1 && '⚙️'}
                      {index === 2 && '🛡️'}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-navy mb-4">{card.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{card.description}</p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-brand-red/5 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 blueprint-bg">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Comprehensive Service Suite</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">From fire detection to access control, we provide complete integrated solutions</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {SERVICE_COLUMNS.map((col) => (
              <div key={col.title} className="group bg-gradient-to-br from-navy-light to-navy-lighter p-8 rounded-xl border border-gold/20 hover:border-gold/60 transition hover:shadow-2xl hover:shadow-gold/20">
                <div className="mb-6 group-hover:scale-110 group-hover:text-gold transition duration-300">{col.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gold transition">{col.title}</h3>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="text-gray-300 text-sm flex items-start gap-2">
                      <span className="text-gold mt-1 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-24 px-6 bg-panel relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-navy mb-4">Why Choose Trojan?</h2>
            <p className="text-gray-600 text-lg">Industry-leading expertise and commitment to your safety</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item} className="group flex items-start gap-4 p-6 bg-white rounded-lg border-2 border-transparent hover:border-gold transition shadow-md hover:shadow-lg">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-gold to-gold-light rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                  <span className="text-navy font-bold">✓</span>
                </div>
                <div>
                  <p className="text-lg font-semibold text-navy">{item}</p>
                </div>
              </div>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section id="contact" className="py-24 px-6 blueprint-bg">
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-300 text-lg">See what our clients have to say</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="group relative bg-gradient-to-br from-navy-light/80 to-navy-lighter/80 backdrop-blur-sm p-8 rounded-xl border border-gold/30 hover:border-gold/60 transition hover:shadow-2xl hover:shadow-gold/20">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-200 mb-8 italic leading-relaxed text-lg">&ldquo;{testimonial.text}&rdquo;</p>
                <div className="flex items-start gap-3 pt-6 border-t border-white/10">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-navy font-bold text-lg">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
