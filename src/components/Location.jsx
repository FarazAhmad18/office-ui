import useReveal from '../hooks/useReveal';

export default function Location() {
  const [tRef, tVis] = useReveal();
  const [cRef, cVis] = useReveal(0.1);

  return (
    <section id="location" aria-label="Office location in San Francisco Financial District" className="relative pt-28 lg:pt-40 pb-8 lg:pb-10 gradient-warm overflow-hidden">
      <div className="glow-orb w-[500px] h-[500px] bg-gold/[0.04] top-[-10%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={tRef} className={`text-center mb-16 reveal ${tVis ? 'vis' : ''}`}>
          <span className="text-[11px] tracking-[0.25em] uppercase text-gold font-medium">Our Location</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.08] text-dark mt-4">
            Find Us In<br /><em className="not-italic text-shine">San Francisco</em>
          </h2>
          <p className="text-muted text-[15px] leading-[1.75] max-w-xl mx-auto mt-5">
            Located in the heart of downtown San Francisco, steps from BART
            and surrounded by the best the city has to offer.
          </p>
        </div>

        <div ref={cRef} className={`reveal ${cVis ? 'vis' : ''}`}>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-xl shadow-dark/10 ring-1 ring-dark/5">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086160891286!2d-122.39997892392032!3d37.78779997197611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807d8db0fc4d%3A0x4fab00e40e0c534e!2sFinancial%20District%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1707400000000!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0, minHeight: 400 }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="flex flex-col gap-5">
              {[
                {
                  icon: 'M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z',
                  icon2: 'M12 10m-3 0a3 3 0 106 0 3 3 0 10-6 0',
                  title: 'Address',
                  lines: ['100 California Street', 'Financial District', 'San Francisco, CA 94111'],
                },
                {
                  icon: 'M12 2a10 10 0 100 20 10 10 0 000-20z',
                  icon2: 'M12 6v6l4 2',
                  title: 'Hours',
                  lines: ['Mon-Fri: 7 AM — 10 PM', 'Sat-Sun: 9 AM — 6 PM'],
                },
                {
                  icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z',
                  title: 'Contact',
                  lines: ['+1 (415) 555-0123', 'hello@office-sf.com'],
                },
              ].map(card => (
                <div key={card.title} className="group relative rounded-2xl p-7 flex-1 transition-all duration-300 gradient-mesh-dark text-white overflow-hidden hover:shadow-xl hover:shadow-gold/[0.05]">
                  {/* Gradient border top accent */}
                  <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold/30 to-transparent group-hover:via-gold/60 transition-all duration-500" />

                  <div className="w-10 h-10 rounded-full flex items-center justify-center mb-4 bg-gradient-to-br from-gold/15 to-gold/5">
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="text-gold">
                      <path d={card.icon} strokeLinecap="round" strokeLinejoin="round" />
                      {card.icon2 && <path d={card.icon2} strokeLinecap="round" strokeLinejoin="round" />}
                    </svg>
                  </div>
                  <h3 className="text-[15px] font-medium mb-2">{card.title}</h3>
                  {card.lines.map((l, i) => (
                    <p key={i} className="text-white/40 text-[13px] leading-relaxed">{l}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
