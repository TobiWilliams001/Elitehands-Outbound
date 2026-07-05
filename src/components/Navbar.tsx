import { useEffect, useState } from 'react';

const links = [
  { href: '#how', label: 'How it works' },
  { href: '#offer', label: 'What we offer' },
  { href: '#results', label: 'Results' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#" className="nav-logo">Elite<span>hands</span></a>
      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
      <a href="#cta" className="nav-cta">Book a call</a>
      <button
        className={`nav-toggle${open ? ' open' : ''}`}
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-scrim${open ? ' open' : ''}`} onClick={() => setOpen(false)} />

      <div className={`nav-mobile${open ? ' open' : ''}`}>
        <ul>
          {links.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
          ))}
        </ul>
        <a href="#cta" className="nav-cta" onClick={() => setOpen(false)}>Book a call</a>
      </div>
    </nav>
  );
};
