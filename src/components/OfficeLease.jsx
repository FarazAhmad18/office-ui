import useReveal from '../hooks/useReveal';

const features = [
  { icon: 'M5 12.55a11 11 0 0114 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01', text: 'High Speed Internet' },
  { icon: 'M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3', text: 'Kitchen & Coffee Bar' },
  { icon: 'M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2M6 14h12v8H6z', text: 'Printing & Scanning' },
  { icon: 'M19 11H5a2 2 0 00-2 2v7a2 2 0 002 2h14a2 2 0 002-2v-7a2 2 0 00-2-2zM7 11V7a5 5 0 0110 0v4', text: '24/7 Secure Access' },
  { icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75', text: 'Meeting Room Access' },
  { icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zM22 6l-10 7L2 6', text: 'Mail Handling Service' },
  { icon: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z', text: 'Phone Booth Access' },
  { icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', text: 'Community Events' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', text: 'Building Security' },
  { icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', text: 'Electricity & AC Included' },
];

export default function OfficeLease() {
  const [tRef, tVis] = useReveal();
  const [lRef, lVis] = useReveal(0.05);

  return (
    <section id="feature" aria-label="Office amenities and features included in lease" className="relative pt-10 lg:pt-14 pb-28 lg:pb-40 gradient-mesh-light overflow-hidden section-divider-top">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div ref={tRef} className={`reveal-left ${tVis ? 'vis' : ''}`}>
          <span className="text-[12px] tracking-[0.25em] uppercase text-gold font-semibold">Amenities</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.08] text-dark mt-4 mb-16">
            Included In Your<br /><em className="not-italic font-semibold">Office Lease</em>
          </h2>
        </div>

        <div ref={lRef} className={`grid sm:grid-cols-2 gap-x-20 stagger ${lVis ? 'vis' : ''}`}>
          {features.map(f => (
            <div key={f.text} className="group flex items-center gap-5 py-5 border-b border-dark/[0.06] hover:border-dark/[0.12] transition-all duration-300 ease-out">
              <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-dark/[0.03] group-hover:bg-dark/[0.06] transition-colors duration-300">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-dark/40 group-hover:text-dark/60 transition-colors duration-300">
                  <path d={f.icon} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[14px] text-dark/60 group-hover:text-dark group-hover:translate-x-1 transition-all duration-300 ease-out">{f.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
