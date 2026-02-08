import { useEffect, useState } from 'react';
import { useBooking } from '../context/BookingContext';

const links = ['About', 'Membership', 'Feature', 'Location'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <nav aria-label="Main navigation" className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
      scrolled
        ? 'py-2 bg-white/80 backdrop-blur-2xl shadow-lg shadow-black/[0.04] border-b border-dark/[0.06]'
        : 'py-4 bg-white/60 backdrop-blur-xl'
    }`}>
      {/* Top accent — thin gold gradient line */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 bg-dark group-hover:shadow-md group-hover:shadow-dark/20 group-hover:scale-105">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-white">
              <rect x="3" y="3" width="7" height="7" rx="1.5" fill="currentColor" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.4" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.4" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" fill="currentColor" />
            </svg>
          </div>
          <span className="font-serif text-[1.4rem] tracking-tight text-dark font-semibold">
            Office<span className="text-gold">.</span>
          </span>
        </a>

        {/* Desktop links — pill hover bg */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className="text-[13px] tracking-[0.04em] uppercase font-medium text-dark/45 hover:text-dark px-4 py-2 rounded-full hover:bg-dark/[0.04] transition-all duration-300 ease-out">
                {l}
              </a>
            </li>
          ))}
        </ul>

        {/* Book Now — elevated CTA */}
        <button onClick={openBooking}
          className="hidden md:inline-flex items-center gap-2 text-[13px] tracking-[0.03em] font-semibold bg-dark text-white px-7 py-2.5 rounded-full transition-all duration-300 ease-out border-none hover:bg-dark/85 hover:shadow-lg hover:shadow-dark/15 hover:scale-[1.02]">
          Book Now
          <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Mobile hamburger */}
        <button className="md:hidden w-7 h-5 relative flex flex-col justify-between bg-transparent border-none" aria-label="Menu" onClick={() => setOpen(!open)}>
          <span className={`block w-full h-[2px] bg-dark rounded transition-all duration-300 origin-center ${open ? 'translate-y-[9px] rotate-45' : ''}`} />
          <span className={`block w-full h-[2px] bg-dark rounded transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-full h-[2px] bg-dark rounded transition-all duration-300 origin-center ${open ? '-translate-y-[9px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden bg-white/95 backdrop-blur-2xl border-t border-dark/5 transition-all duration-300 ${open ? 'max-h-80' : 'max-h-0'}`}>
        <div className="px-6 py-5 space-y-1">
          {links.map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={() => setOpen(false)}
              className="block text-[15px] font-medium text-dark/50 hover:text-dark hover:bg-dark/[0.03] px-4 py-3 rounded-xl transition-all duration-300">{l}</a>
          ))}
          <button onClick={() => { setOpen(false); openBooking(); }}
            className="block w-full bg-dark text-white text-sm font-semibold px-6 py-3.5 rounded-full text-center border-none mt-3">
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
}
