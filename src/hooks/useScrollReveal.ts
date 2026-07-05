import { useEffect, useRef } from 'react';

// Shared hook for scroll-reveal
export const useScrollReveal = () => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal').forEach((node) => {
            (node as HTMLElement).classList.add('visible');
          });
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
};
