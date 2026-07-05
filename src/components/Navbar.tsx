import { useEffect, useState } from 'react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">Elite<span>hands</span></a>
      <ul className="nav-links">
        <li><a href="#how">How it works</a></li>
        <li><a href="#offer">What we offer</a></li>
        <li><a href="#results">Results</a></li>
      </ul>
      <a href="#cta" className="nav-cta">Book a call</a>
    </nav>
  );
};
