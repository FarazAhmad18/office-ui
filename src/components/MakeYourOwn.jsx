import img1 from '../assets/media/unsplash_p_kICQCOM4s.png';
import img2 from '../assets/media/unsplash_FV3GConVSss.png';
import useReveal from '../hooks/useReveal';

export default function MakeYourOwn() {
  const [lRef, lVis] = useReveal();
  const [rRef, rVis] = useReveal();

  return (
    <section aria-label="Customizable flexible workspace options" className="relative pt-10 lg:pt-14 pb-8 lg:pb-10 gradient-warm overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text */}
          <div ref={lRef} className={`reveal-left ${lVis ? 'vis' : ''}`}>
            <span className="text-[12px] tracking-[0.25em] uppercase font-semibold text-gold">Flexible Spaces</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.08] text-dark mt-4 mb-6">
              A Space<br />To Make<br /><em className="not-italic font-semibold">Your Own</em>
            </h2>
            <p className="text-muted text-[15px] leading-[1.75] max-w-md mb-10">
              Customize your workspace to fit your brand and workflow. From private
              offices to open desks, create an environment that feels uniquely yours.
            </p>
            <a href="#"
              className="inline-flex items-center gap-3 text-[13px] tracking-[0.05em] font-medium text-white px-8 py-3.5 rounded-full transition-all duration-300 ease-out group bg-dark hover:bg-gold hover:text-dark hover:shadow-lg hover:shadow-dark/10">
              Explore
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Images with stagger offset */}
          <div ref={rRef} className={`reveal-right ${rVis ? 'vis' : ''}`}>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-6 overflow-hidden rounded-2xl shadow-xl shadow-dark/8 group">
                <img src={img1} alt="Open-plan coworking space with collaborative work areas and ergonomic furniture" className="w-full h-[22rem] lg:h-[28rem] object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
              </div>
              <div className="col-span-6 overflow-hidden rounded-2xl mt-12 shadow-xl shadow-dark/8 group">
                <img src={img2} alt="Modern office lounge area with comfortable seating for informal meetings" className="w-full h-[22rem] lg:h-[28rem] object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
