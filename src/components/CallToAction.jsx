import bgImg from '../assets/media/unsplash_eHD8Y1Znfpk.png';
import useReveal from '../hooks/useReveal';
import { useBooking } from '../context/BookingContext';

export default function CallToAction() {
  const [ref, vis] = useReveal(0.2);
  const { openBooking } = useBooking();

  return (
    <section id="book" aria-label="Book a workspace tour" className="relative py-36 lg:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${bgImg})` }} />
      <div className="absolute inset-0 bg-dark/85" />

      <div ref={ref} className={`relative z-10 max-w-3xl mx-auto px-6 lg:px-10 text-center reveal ${vis ? 'vis' : ''}`}>
        <span className="text-[12px] tracking-[0.3em] uppercase text-gold font-semibold">Schedule A Visit</span>
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4.5rem] leading-[1.08] text-white mt-4 mb-10">
          Ready To Visit<br /><em className="not-italic text-shine">In Person?</em>
        </h2>
        <button onClick={openBooking}
          className="inline-flex items-center gap-3 text-[13px] tracking-[0.05em] font-semibold px-10 py-4 rounded-full transition-all duration-300 ease-out group border-none bg-gold text-dark hover:bg-gold-light hover:shadow-lg hover:shadow-gold/20">
          Book A Tour
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"
            className="group-hover:translate-x-1 transition-transform duration-300">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
