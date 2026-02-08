import { useEffect, useRef, useState } from 'react';
import { useBooking } from '../context/BookingContext';

const TIMES = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

const initial = { name: '', email: '', phone: '', date: '', time: '', visitors: '1', message: '' };

export default function BookingModal() {
  const { open, closeBooking } = useBooking();
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);        // 1 = form, 2 = success
  const [submitting, setSubmitting] = useState(false);
  const overlayRef = useRef(null);
  const firstInput = useRef(null);

  // Lock body scroll & focus trap
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstInput.current?.focus(), 200);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  });

  function handleClose() {
    closeBooking();
    setTimeout(() => { setForm(initial); setErrors({}); setStep(1); }, 400);
  }

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.date) e.date = 'Pick a date';
    if (!form.time) e.time = 'Pick a time';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length > 0) return;

    setSubmitting(true);
    // Simulate network request
    setTimeout(() => {
      setSubmitting(false);
      setStep(2);
    }, 1500);
  }

  function set(field) {
    return (e) => {
      setForm(f => ({ ...f, [field]: e.target.value }));
      if (errors[field]) setErrors(er => { const n = { ...er }; delete n[field]; return n; });
    };
  }

  // Today's date in YYYY-MM-DD for min attr
  const today = new Date().toISOString().split('T')[0];

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => { if (e.target === overlayRef.current) handleClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm animate-[fadeIn_0.3s_ease]" />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto modal-scroll animate-[slideUp_0.4s_cubic-bezier(0.22,1,0.36,1)]">

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-light flex items-center justify-center text-muted hover:text-dark hover:bg-dark/10 transition-all duration-200 z-10 border-none"
          aria-label="Close"
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        {step === 1 ? (
          <form onSubmit={handleSubmit} noValidate>
            {/* Header with gradient accent */}
            <div className="relative px-8 pt-10 pb-6 border-b border-dark/[0.06]">
              <div className="absolute top-0 inset-x-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-gold-dark via-gold-light to-gold-dark" />
              <span className="text-[11px] tracking-[0.2em] uppercase text-gold font-medium">Schedule</span>
              <h2 className="font-serif text-3xl lg:text-4xl text-dark mt-1">Book A Tour</h2>
              <p className="text-muted text-[14px] mt-2">Fill in your details and we'll confirm your visit within 24 hours.</p>
            </div>

            {/* Fields */}
            <div className="px-8 py-8 space-y-5">
              {/* Name */}
              <Field label="Full Name" error={errors.name}>
                <input ref={firstInput} type="text" placeholder="John Doe" value={form.name} onChange={set('name')}
                  className={inputClass(errors.name)} />
              </Field>

              {/* Email + Phone row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Email" error={errors.email}>
                  <input type="email" placeholder="john@example.com" value={form.email} onChange={set('email')}
                    className={inputClass(errors.email)} />
                </Field>
                <Field label="Phone" error={errors.phone}>
                  <input type="tel" placeholder="+1 (415) 000-0000" value={form.phone} onChange={set('phone')}
                    className={inputClass(errors.phone)} />
                </Field>
              </div>

              {/* Date + Time row */}
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Preferred Date" error={errors.date}>
                  <input type="date" min={today} value={form.date} onChange={set('date')}
                    className={inputClass(errors.date)} />
                </Field>
                <Field label="Preferred Time" error={errors.time}>
                  <select value={form.time} onChange={set('time')} className={inputClass(errors.time)}>
                    <option value="">Select time</option>
                    {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </Field>
              </div>

              {/* Visitors */}
              <Field label="Number of Visitors">
                <select value={form.visitors} onChange={set('visitors')} className={inputClass()}>
                  {[1,2,3,4,5,'6+'].map(n => <option key={n} value={n}>{n} {n === 1 ? 'person' : 'people'}</option>)}
                </select>
              </Field>

              {/* Message */}
              <Field label="Message (optional)">
                <textarea rows="3" placeholder="Any specific requirements or questions..." value={form.message} onChange={set('message')}
                  className={inputClass() + ' resize-none'} />
              </Field>
            </div>

            {/* Submit */}
            <div className="px-8 pb-8">
              <button
                type="submit"
                disabled={submitting}
                className="w-full text-[14px] font-medium tracking-wide py-4 rounded-full transition-all duration-400 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 border-none bg-gradient-to-r from-dark via-dark to-dark/90 text-white hover:from-gold hover:via-gold-light hover:to-gold hover:text-dark hover:shadow-xl hover:shadow-gold/15"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" className="opacity-20" />
                      <path d="M12 2a10 10 0 019.7 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                    Submitting...
                  </>
                ) : 'Confirm Booking'}
              </button>
            </div>
          </form>
        ) : (
          /* Success state */
          <div className="px-8 py-16 text-center relative">
            <div className="absolute top-0 inset-x-0 h-[3px] rounded-t-3xl bg-gradient-to-r from-green-400 via-green-300 to-green-400" />
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, rgba(34,197,94,0.1), rgba(34,197,94,0.05))' }}>
              <svg width="32" height="32" fill="none" stroke="#22c55e" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="font-serif text-3xl text-dark mb-3">Booking Confirmed!</h2>
            <p className="text-muted text-[14px] leading-relaxed max-w-xs mx-auto mb-2">
              Thank you, <strong className="text-dark">{form.name}</strong>. We've received your tour request.
            </p>
            <div className="inline-flex items-center gap-4 rounded-xl px-6 py-4 mt-4 mb-8 text-left" style={{ background: 'linear-gradient(135deg, #f8f7f4, #f5f0e8)' }}>
              <div>
                <p className="text-[12px] text-muted uppercase tracking-wider">Date & Time</p>
                <p className="text-dark text-[15px] font-medium">
                  {new Date(form.date + 'T00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric' })} at {form.time}
                </p>
              </div>
            </div>
            <p className="text-muted text-[13px] mb-8">A confirmation email has been sent to <strong className="text-dark">{form.email}</strong></p>
            <button
              onClick={handleClose}
              className="text-[14px] font-medium px-10 py-3.5 rounded-full transition-all duration-300 border-none bg-gradient-to-r from-dark to-dark/90 text-white hover:from-gold hover:to-gold-dark hover:text-dark"
            >
              Done
            </button>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(30px) scale(0.97); } to { opacity: 1; transform: none; } }
      `}</style>
    </div>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-dark mb-1.5">{label}</label>
      {children}
      {error && <p className="text-red-500 text-[12px] mt-1">{error}</p>}
    </div>
  );
}

function inputClass(error) {
  return `w-full bg-light border ${error ? 'border-red-300 focus:border-red-400' : 'border-transparent focus:border-gold/40'} rounded-xl px-4 py-3 text-[14px] text-dark placeholder:text-dark/25 outline-none transition-all duration-200 focus:ring-2 ${error ? 'focus:ring-red-100' : 'focus:ring-gold/10'}`;
}
