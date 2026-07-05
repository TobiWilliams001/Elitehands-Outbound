import { useRef } from 'react';

export const useMagnetic = (strength = 0.3) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
  };

  return { ref, onMouseMove, onMouseLeave };
};
