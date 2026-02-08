import { useEffect, useState } from 'react';
import heroImg from '../assets/media/unsplash_U2BI3GMnSSE.png';
import useReveal from '../hooks/useReveal';
import useCounter from '../hooks/useCounter';

const stats = [
  { val: 40, suf: '', label: 'Offices' },
  { val: 54, suf: '+', label: 'Meeting Rooms' },
  { val: 77, suf: '', label: 'Members' },
  { val: 24, suf: '', label: 'Hours Access' },
];

function Stat({ val, suf, label, go, last }) {
  const n = useCounter(val, 2200, go);
  return (
    <div className={`flex-1 text-center py-1 ${!last ? 'border-r border-dark/[0.08]' : ''}`}>
      <span className="block font-serif text-[2.4rem] lg:text-[3.2rem] leading-none text-dark tracking-tight">{n}{suf}</span>
      <span className="block text-[10px] tracking-[0.14em] uppercase text-dark/35 mt-2.5 font-medium">{label}</span>
    </div>
  );
}

export default function Hero() {
  const [on, setOn] = useState(false);
  const [sRef, sVis] = useReveal(0.3);
  useEffect(() => { setTimeout(() => setOn(true), 150); }, []);

  return (
    <section aria-label="Premium coworking workspace hero" className="relative min-h-screen flex items-end lg:items-center pb-20 pt-28 lg:pt-24 gradient-mesh-light overflow-hidden">
      {/* Ambient glow orbs */}
      <div className="glow-orb w-[500px] h-[500px] bg-gold/[0.05] top-[-10%] right-[-10%]" />
      <div className="glow-orb w-[400px] h-[400px] bg-gold/[0.03] bottom-[10%] left-[-8%]" />

      {/* Faint dot grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{ backgroundImage: 'radial-gradient(#c9a96e 1px,transparent 1px)', backgroundSize: '32px 32px' }} />

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-end lg:items-center">

          {/* Text — 5 cols */}
          <div className="lg:col-span-5 space-y-8">
            <div className={`transition-all duration-[1.1s] delay-100 ${on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="font-serif text-[3.4rem] sm:text-[4.2rem] lg:text-[5.5rem] leading-[1.02] tracking-[-0.02em] text-dark">
                Your<br />Future<br />
                <em className="not-italic text-shine">Office</em>
              </h1>
            </div>

            <p className={`text-muted text-[15px] leading-[1.75] max-w-sm transition-all duration-[1.1s] delay-300 ${on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Discover a workspace designed to inspire productivity and creativity.
              Modern offices for teams that move fast.
            </p>

            <div ref={sRef} className={`flex stagger ${sVis ? 'vis' : ''}`}>
              {stats.map((s, i) => <Stat key={s.label} {...s} go={sVis} last={i === stats.length - 1} />)}
            </div>
          </div>

          {/* Image — 7 cols */}
          <div className={`lg:col-span-7 relative transition-all duration-[1.2s] delay-200 ${on ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <img src={heroImg} alt="Premium coworking office space with modern furniture and natural lighting in San Francisco Financial District"
                className="w-full h-[55vh] lg:h-[82vh] object-cover" />

              {/* Gradient veil */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/25 via-transparent to-transparent" />

              {/* Inner glow edge */}
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            {/* Decorative accents */}
            <div className="absolute -bottom-5 -left-5 w-28 h-28 rounded-full float hidden lg:block border border-dark/[0.06]" />
            <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full float-d hidden lg:block border border-dark/[0.04]" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${on ? 'opacity-100' : 'opacity-0'}`}>
        <span className="text-[10px] tracking-[0.2em] uppercase text-dark/30">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-dark/20 to-transparent" />
      </div>
    </section>
  );
}
