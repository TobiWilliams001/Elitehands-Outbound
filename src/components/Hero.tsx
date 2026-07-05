import React from 'react';
import { SignalPanel } from './SignalPanel';

export const Hero: React.FC = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2.5rem' }}>
      <div className="hero">
        <div>
          <div className="hero-eyebrow">B2B client acquisition</div>
          <h1>
            You do the work.
            <br />
            <em>We fill your calendar.</em>
          </h1>
          <p className="hero-sub">
            Qualified clients — people who already know what you do and are ready to talk — booked directly into your calendar. You show up. We handle everything that gets them there.
          </p>
          <div className="hero-actions">
            <a href="#cta" className="btn-primary">
              Book a discovery call
            </a>
            <a href="#how" className="btn-ghost">
              See how it works →
            </a>
          </div>
        </div>

        <SignalPanel />
      </div>
    </div>
  );
};
