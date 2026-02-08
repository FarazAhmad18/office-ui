import useReveal from '../hooks/useReveal';
import { useBooking } from '../context/BookingContext';

const plans = [
  { name: 'Remote Worker', desc: 'Coworking access, high-speed internet, community events', price: 'Rs. 22,000', tag: 'Starter' },
  { name: 'Outlying Worker', desc: 'Dedicated desk, meeting rooms, mail handling, phone booth', price: 'Rs. 43,000', tag: 'Popular' },
  { name: 'Resident', desc: 'Private office, 24/7 access, all amenities, priority support', price: 'Rs. 78,000', tag: 'Premium' },
];

export default function Memberships() {
  const [tRef, tVis] = useReveal();
  const [lRef, lVis] = useReveal(0.1);
  const { openBooking } = useBooking();

  return (
    <section id="membership" aria-label="Membership pricing plans" className="relative py-28 lg:py-40 overflow-hidden gradient-mesh-dark text-white">
      {/* Single subtle orb */}
      <div className="glow-orb w-[500px] h-[500px] bg-gold/[0.03] top-[-15%] right-[-10%]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div ref={tRef} className={`text-center mb-20 reveal ${tVis ? 'vis' : ''}`}>
          <span className="text-[12px] tracking-[0.25em] uppercase text-gold font-semibold">Pricing</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.08] mt-4 text-white">
            Our<br /><em className="not-italic">Memberships</em>
          </h2>
        </div>

        <div ref={lRef} className={`max-w-4xl mx-auto stagger ${lVis ? 'vis' : ''}`}>
          {plans.map((p, i) => (
            <div key={p.name} onClick={openBooking}
              className={`group flex flex-col sm:flex-row sm:items-center justify-between py-9 lg:py-11 px-2 hover:px-6 rounded-xl transition-all duration-300 ease-out cursor-pointer hover:bg-white/[0.02] ${
                i < plans.length - 1 ? 'border-b border-white/[0.06]' : ''
              }`}>
              <div className="mb-3 sm:mb-0">
                <div className="flex items-center gap-3 mb-1.5">
                  <h3 className="font-serif text-xl lg:text-2xl text-white group-hover:text-white/80 transition-colors duration-300">{p.name}</h3>
                  {p.tag === 'Popular' && (
                    <span className="text-[10px] tracking-[0.15em] uppercase font-semibold px-3 py-1 rounded-full bg-white/[0.06] text-white/50">{p.tag}</span>
                  )}
                </div>
                <p className="text-white/30 text-[13px]">{p.desc}</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-3xl lg:text-4xl font-serif text-shine whitespace-nowrap">{p.price}</span>
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"
                  className="text-white/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button onClick={openBooking}
            className="text-[13px] tracking-[0.05em] font-medium text-dark px-10 py-4 rounded-full transition-all duration-300 ease-out border-none bg-gold hover:bg-gold-light hover:shadow-lg hover:shadow-gold/15">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}
