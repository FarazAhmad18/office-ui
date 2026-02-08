import { createContext, useContext, useState } from 'react';

const Ctx = createContext();

export function BookingProvider({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <Ctx.Provider value={{ open, openBooking: () => setOpen(true), closeBooking: () => setOpen(false) }}>
      {children}
    </Ctx.Provider>
  );
}

export function useBooking() {
  return useContext(Ctx);
}
