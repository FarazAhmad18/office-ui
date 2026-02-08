import useReveal from '../hooks/useReveal';

const cards = [
  {
    num: '01',
    title: 'Resourceful Members',
    desc: 'Connect with a diverse community of professionals who bring unique skills and perspectives.',
  },
  {
    num: '02',
    title: 'Coworking Available',
    desc: 'Flexible coworking spaces designed for collaboration and focus, available whenever you need them.',
  },
  {
    num: '03',
    title: 'Facility Services',
    desc: 'Premium facilities including high-speed internet, printing, kitchen, and 24/7 security access.',
  },
];

export default function Community() {
  const [tRef, tVis] = useReveal();
  const [cRef, cVis] = useReveal(0.1);

  return (
    <section id="about" aria-label="About our coworking community" className="relative gradient-mesh-dark text-white py-28 lg:py-40 overflow-hidden">
      {/* Gradient orbs */}
      <div className="glow-orb w-[600px] h-[600px] bg-gold/[0.03] top-[-20%] left-[-10%]" />

      {/* Concentric circles — left */}
      <div className="absolute left-[-80px] top-1/2 -translate-y-1/2 hidden lg:block">
        <div className="w-64 h-64 border border-white/[0.04] rounded-full flex items-center justify-center">
          <div className="w-44 h-44 border border-white/[0.06] rounded-full flex items-center justify-center">
            <div className="w-24 h-24 border border-white/[0.08] rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-white/[0.06] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div ref={tRef} className={`text-center mb-20 reveal ${tVis ? 'vis' : ''}`}>
          <span className="text-[12px] tracking-[0.25em] uppercase text-gold font-semibold">Who We Are</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.08] mt-4 text-white">
            A Community<br /><em className="not-italic">At Work</em>
          </h2>
        </div>

        <div ref={cRef} className={`grid md:grid-cols-3 gap-[1px] rounded-2xl overflow-hidden stagger ${cVis ? 'vis' : ''}`}
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02), rgba(255,255,255,0.04))' }}>
          {cards.map(c => (
            <div key={c.num} className="group bg-[#161616] hover:bg-[#1a1a1a] transition-all duration-300 ease-out p-10 lg:p-12 relative hover:-translate-y-[2px]">
              {/* Top accent on hover */}
              <div className="absolute top-0 inset-x-0 h-px bg-white/0 group-hover:bg-white/[0.08] transition-all duration-300" />

              <span className="text-[12px] tracking-[0.2em] text-white/20 font-medium">{c.num}</span>
              <h3 className="text-xl font-medium mt-4 mb-3 text-white group-hover:text-white/90 transition-colors duration-300">{c.title}</h3>
              <p className="text-white/35 text-[14px] leading-relaxed mb-8">{c.desc}</p>
              <a href="#" className="inline-flex items-center gap-2 text-[13px] text-white/40 hover:text-white/70 transition-colors duration-300 group/a">
                Learn More
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  className="group-hover/a:translate-x-1 transition-transform duration-300">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
