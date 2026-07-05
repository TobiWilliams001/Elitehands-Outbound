import React from 'react';

export const Offer: React.FC = () => {
  return (
    <section className="offer-section" id="offer">
      <div className="container">
        <div className="section-label">What we offer</div>
        <h2 className="section-title" style={{ color: 'var(--navy)' }}>
          Two ways to work with us.
        </h2>
        <p className="section-sub" style={{ color: 'var(--slate)' }}>
          You choose how involved you want to be. We handle the rest.
        </p>
        <div className="offer-grid">
          <div className="offer-card">
            <div className="offer-tier">Tier 1</div>
            <div className="offer-name">The System</div>
            <p className="offer-desc">We build and set up everything that turns warm interest into booked calls — then hand it over to you to run. You keep control. You handle the posting and conversations. The engine is yours.</p>
            <div className="offer-price">£2,500</div>
            <div className="offer-price-note">One-time build</div>
            <ul className="offer-list">
              <li>LinkedIn profile written and optimised for your ICP</li>
              <li>First 4 weeks of content written in your voice</li>
              <li>Full outreach and qualification system set up</li>
              <li>Booking flow configured to your calendar</li>
              <li>Full handover session — you run it from here</li>
            </ul>
            <a href="#cta" className="offer-btn outline">
              Start with the system
            </a>
          </div>

          <div className="offer-card featured">
            <div className="offer-featured-tag">Most popular</div>
            <div className="offer-tier">Tier 2</div>
            <div className="offer-name">Fully Managed</div>
            <p className="offer-desc">We build it and we run it. Content posted every week in your voice. Outreach and conversations handled. Calls confirmed and landed in your calendar. You show up. Everything else is ours.</p>
            <div className="offer-price">
              £1,400
              <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--slate)' }}>/mo</span>
            </div>
            <div className="offer-price-note">3-month minimum · includes full setup</div>
            <ul className="offer-list">
              <li>LinkedIn profile built and optimised</li>
              <li>3-4 posts per week, every week — written and posted for you</li>
              <li>Outreach and qualification handled end to end</li>
              <li>Calls confirmed directly into your calendar</li>
              <li>Call prep briefing before every meeting</li>
              <li>Monthly performance report and strategy call</li>
            </ul>
            <a href="#cta" className="offer-btn">
              Get fully managed
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
