import img1 from '../assets/media/unsplash_eHD8Y1Znfpk.png';
import img2 from '../assets/media/unsplash_r7V-18Zr_OY.png';
import img3 from '../assets/media/unsplash_nC6CyrVBtkU.png';
import img4 from '../assets/media/unsplash_TpGIpUF67po.png';
import useReveal from '../hooks/useReveal';

const spaces = [
  { img: img1, label: 'Ready To Move', alt: 'Move-in ready furnished office space available for immediate occupancy' },
  { img: img2, label: 'One & Two Year Lease', alt: 'Long-term private office lease options with dedicated workspace' },
  { img: img3, label: '30+ People Workspace', alt: 'Large open workspace suitable for teams of 30 or more people' },
  { img: img4, label: 'Creative & Recreation', alt: 'Creative recreation area designed for relaxation and brainstorming' },
];

export default function SuitYourNeeds() {
  const [tRef, tVis] = useReveal();
  const [gRef, gVis] = useReveal(0.05);

  return (
    <section className="relative pt-6 lg:pt-8 pb-28 lg:pb-40 gradient-warm-reverse overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={tRef} className={`text-center mb-20 reveal ${tVis ? 'vis' : ''}`}>
          <span className="text-[12px] tracking-[0.25em] uppercase text-gold font-semibold">Our Offerings</span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.08] text-dark mt-4">
            Space To Suit<br /><em className="not-italic font-semibold">Your Needs</em>
          </h2>
        </div>

        <div ref={gRef} className={`grid sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger ${gVis ? 'vis' : ''}`}>
          {spaces.map((s, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4] shadow-lg shadow-dark/8">
                <img src={s.img} alt={s.alt} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out" />
                {/* Stronger bottom gradient for caption readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />

                {/* Caption — consistent alignment */}
                <div className="absolute bottom-0 inset-x-0 px-5 pb-5 pt-8">
                  <span className="text-white text-[15px] font-medium leading-snug">{s.label}</span>
                </div>

                {/* Subtle ring on hover */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/0 group-hover:ring-white/20 transition-all duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
