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
    text: "SecureGuard provided the most thorough inspection we've had. Their team was professional and efficient.",
  },
  {
    name: 'James Chen',
    role: 'Owner, Retail Store',
    text: "After SecureGuard's inspection, we fixed several issues we didn't even know we had. Best investment in safety.",
  },
  {
    name: 'Lisa Rodriguez',
    role: 'Facilities Manager, Hospital',
    text: "We've worked with SecureGuard for 5 years. Responsive, knowledgeable, and invaluable compliance support.",
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
      <section className="relative min-h-screen w-full pt-24 blueprint-bg flex items-center">
        <div className="relative w-full max-w-7xl mx-auto px-6 py-20">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.05] mb-8 tracking-tight">
            SecureGuard
            <br />
            Fire &amp; Security
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl font-light">
            Certified fire safety and security specialists protecting your property, your business, and your peace of mind
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/free-inspection"
              className="bg-gold hover:bg-gold-light text-navy px-8 py-4 text-lg font-bold transition"
            >
              Book Inspection
            </Link>
            <a
              href="tel:+15551234567"
              className="border-2 border-white text-white px-8 py-4 text-lg font-bold hover:bg-white hover:bg-opacity-10 transition"
            >
              Call Now
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-gray-300 border-t border-white/10 pt-6">
            <p className="font-medium">Certified Fire &amp; Security Specialists</p>
            <a href="tel:+15551234567" className="font-semibold text-white hover:text-gold-light transition">
              Call Now (555) 123-4567 &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Care cards */}
      <section className="py-24 px-6 bg-panel">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {CARE_CARDS.map((card) => (
            <div key={card.title} className="bg-white/60 p-8">
              <h3 className="text-2xl font-bold text-navy mb-4">{card.title}</h3>
              <p className="text-gray-700 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 blueprint-bg">
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">Our Services</h2>

          <div className="grid md:grid-cols-4 gap-px bg-white/10">
            {SERVICE_COLUMNS.map((col) => (
              <div key={col.title} className="bg-navy p-8 flex flex-col items-start">
                <div className="mb-6">{col.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="text-gray-300 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-24 px-6 bg-panel">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-12 text-center md:text-left">Why Choose Us</h2>
          <ul className="grid md:grid-cols-2 gap-x-16 gap-y-8">
            {WHY_CHOOSE_US.map((item) => (
              <li key={item} className="flex items-center gap-4 text-lg text-gray-800">
                <ArrowBullet />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section id="contact" className="py-24 px-6 blueprint-bg">
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">What Our Clients Say</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="bg-navy-light p-8 border border-white/10">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold-light">
                      &#9733;
                    </span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">&ldquo;{testimonial.text}&rdquo;</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
