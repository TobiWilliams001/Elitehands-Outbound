import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav>
      <a href="#" className="nav-logo">
        Elite<span>hands</span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#how">How it works</a>
        </li>
        <li>
          <a href="#offer">What we offer</a>
        </li>
        <li>
          <a href="#results">Results</a>
        </li>
      </ul>
      <a href="#cta" className="nav-cta">
        Book a call
      </a>
    </nav>
  );
};
