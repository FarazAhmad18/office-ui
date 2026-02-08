import { useEffect, useState } from 'react';

export default function useCounter(end, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  const numericEnd = parseInt(end, 10) || 0;

  useEffect(() => {
    if (!start) return;

    let raf;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * numericEnd));

      if (progress < 1) {
        raf = requestAnimationFrame(step);
      }
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [start, numericEnd, duration]);

  return count;
}
