import useReveal from '../hooks/useReveal';

export default function Footer() {
  const [ref, vis] = useReveal(0.1);

  return (
    <footer aria-label="Site footer" className="relative bg-darker text-white pt-20 pb-8 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-white/[0.06]" />

      <div ref={ref} className={`max-w-7xl mx-auto px-6 lg:px-10 relative z-10 stagger ${vis ? 'vis' : ''}`}>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <a href="#" className="font-serif text-2xl tracking-tight mb-5 inline-block">
              Office<span className="text-gold">.</span>
            </a>
            <p className="text-white/30 text-[14px] leading-relaxed">
              Modern workspaces designed for productivity, creativity, and community.
            </p>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-medium mb-5">Interested?</h4>
            <ul className="space-y-3 text-[14px] text-white/30">
              {['About Us', 'Memberships', 'Careers', 'Blog'].map(t => (
                <li key={t}><a href="#" className="hover:text-white/70 transition-colors duration-300">{t}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-medium mb-5">Find Us</h4>
            <address className="not-italic text-[14px] text-white/30 leading-relaxed">
              100 California Street<br />Financial District<br />San Francisco, CA 94111
            </address>
          </div>

          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-white/40 font-medium mb-5">Contact</h4>
            <div className="text-[14px] text-white/30 space-y-2">
              <p>hello@office-sf.com</p>
              <p>+1 (415) 555-0123</p>
            </div>
            <div className="flex gap-3 mt-5">
              {[
                'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z',
                'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z',
              ].map((d, i) => (
                <a key={i} href="#" className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 bg-white/[0.04] text-white/30 hover:bg-white/[0.08] hover:text-white/60">
                  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d={d} /></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/[0.04] pt-7 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-[12px] text-white/20">&copy; 2026 Office. All rights reserved.</p>
          <div className="flex gap-6 text-[12px] text-white/20">
            <a href="#" className="hover:text-white/40 transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white/40 transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
