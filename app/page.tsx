import Link from 'next/link'
import Image from 'next/image'

const SERVICES = [
  {
    title: 'Design',
    description: 'Fire detection system design, security system design, life safety system design, and complete system planning from concept to implementation.',
    image: '/design.jpg',
    link: '/services/design'
  },
  {
    title: 'Installation',
    description: 'Experienced certified project managers and installation personnel providing efficient and effective installation of fire and security systems.',
    image: '/installation.jpg',
    link: '/services/installation'
  },
  {
    title: 'Inspections & Maintenance',
    description: 'Regular inspections and maintenance to ensure your systems operate at peak performance. We service systems we installed and those we did not.',
    image: '/maintenance.jpg',
    link: '/services/maintenance'
  },
]

const PRODUCTS = [
  {
    title: 'Fire Systems',
    items: ['Fire Detection & Alarms', 'Gas Suppression', 'Extinguishers & Hose Reels', 'Fire Stopping']
  },
  {
    title: 'Security Systems',
    items: ['CCTV Systems', 'Access Control', 'Boom Gates & Turnstiles', 'Intercom Systems']
  },
  {
    title: 'Life Safety',
    items: ['Voice Evacuation', 'Emergency Lighting', 'PA Systems', 'Sound Masking']
  },
]

export default function Home() {
  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <section className="relative w-full h-96 md:h-[500px] bg-navy text-white flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy to-dark-gray opacity-80"></div>

        <div className="relative w-full max-w-6xl mx-auto px-6 py-20">
          <p className="text-accent font-semibold text-sm md:text-base mb-4 uppercase tracking-wide">
            Design | Installation | Maintenance
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
            Fire And Security Systems
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-8 text-gray-300">
            Trojan Integrated Solutions
          </p>
          <p className="text-sm md:text-base text-gray-400 mb-8 max-w-xl">
            EST 1997 | Protecting Lives and Assets
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/free-inspection"
              className="bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-8 text-lg transition duration-300 inline-block"
            >
              Our Services
            </Link>
            <Link
              href="/free-inspection"
              className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold py-4 px-8 text-lg transition duration-300 inline-block"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid with Images */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link key={service.title} href={service.link}>
                <div className="group cursor-pointer">
                  <div className="relative h-64 md:h-80 bg-light-gray overflow-hidden mb-6">
                    <div className="w-full h-full bg-gradient-to-br from-light-gray to-gray-300 flex items-center justify-center text-6xl">
                      {service.title === 'Design' && '✏️'}
                      {service.title === 'Installation' && '🔧'}
                      {service.title === 'Inspections & Maintenance' && '📋'}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <span className="text-accent font-semibold hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our Products
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            List of our Products Offering Below:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <div key={product.title} className="bg-white p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-6 text-accent">
                  {product.title}
                </h3>
                <ul className="space-y-3">
                  {product.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span className="text-accent font-bold mt-1">-</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-out Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-80 bg-gradient-to-br from-light-gray to-gray-300 flex items-center justify-center text-8xl rounded-lg">
                📞
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                24/7 Emergency Support
              </h2>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                We provide a standard call-out procedure for each system with 24-hour after-sales service. We endeavour to respond telephonically within the hour and on-site within 4 hours of being notified.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                A qualified technician will respond with the necessary tools and parts to attend to the fault. We provide emergency support across the entire region.
              </p>

              <Link
                href="tel:+15551234567"
                className="bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-8 text-lg transition duration-300 inline-block"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* In-house Design Section */}
      <section className="py-20 px-6 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                In-House Design Capability
              </h2>

              <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                We pride ourselves on our ability to design projects from concept to 'as-built' status using CAD capabilities. Our designs range from equipment layouts to detailed schematics.
              </p>

              <p className="text-gray-600 leading-relaxed mb-8 text-lg font-semibold">
                We typically perform the following in-house designs:
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  'Equipment Layouts',
                  'Block Diagrams',
                  'Wiring Schematics',
                  'Conduit and Wire Way Layouts',
                  'System Diagrams'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700 text-lg">
                    <span className="text-accent font-bold text-xl">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/free-inspection"
                className="bg-accent hover:bg-accent-dark text-white font-semibold py-4 px-8 text-lg transition duration-300 inline-block"
              >
                Contact Us
              </Link>
            </div>

            <div>
              <div className="w-full h-96 bg-gradient-to-br from-light-gray to-gray-300 flex items-center justify-center text-8xl rounded-lg">
                🎨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 px-6 bg-navy text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Highly Qualified, Time Served Professionals
          </h2>
          <p className="text-xl text-accent mb-12 font-semibold">
            Saving Lives. Protecting Assets.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <p className="text-2xl font-bold mb-2">Licensed & Insured</p>
              <p className="text-gray-300">Fully certified and compliant with all regulations</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-2">20+ Years Experience</p>
              <p className="text-gray-300">Trusted by hundreds of facilities across the region</p>
            </div>
            <div>
              <p className="text-2xl font-bold mb-2">NFPA Certified</p>
              <p className="text-gray-300">All installations meet industry standards</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
