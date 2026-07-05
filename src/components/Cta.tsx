import React from 'react';

export const Cta: React.FC = () => {
  return (
    <section className="cta-section" id="cta">
      <div className="container">
        <div className="section-label">Get started</div>
        <h2 className="section-title">Ready to stop worrying about where the next client comes from?</h2>
        <p className="section-sub">Book a 30-minute call. We'll look at where you are, who you're trying to reach, and whether this is the right fit.</p>
        <a href="#" className="btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
          Book a discovery call
        </a>
        <p className="cta-note">No pitch. No pressure. If it's not the right fit, we'll tell you.</p>
      </div>
    </section>
  );
};
