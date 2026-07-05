import React from 'react';

export const WhoItsFor: React.FC = () => {
  return (
    <section className="for-section">
      <div className="container">
        <div className="section-label">Who this is for</div>
        <h2 className="section-title" style={{ color: 'var(--navy)' }}>
          The fit matters as much
          <br />
          to us as it does to you.
        </h2>
        <div className="for-grid">
          <div>
            <div className="for-header yes">This is for you if</div>
            <div className="for-list">
              <div className="for-item">
                <span className="check">✓</span> You sell a B2B service or expertise above £2,000
              </div>
              <div className="for-item">
                <span className="check">✓</span> Your pipeline is inconsistent or referral-dependent
              </div>
              <div className="for-item">
                <span className="check">✓</span> You have real expertise and real results but no content system
              </div>
              <div className="for-item">
                <span className="check">✓</span> You close well when you're in the right conversation — you just need more of them
              </div>
              <div className="for-item">
                <span className="check">✓</span> You're willing to spend 15-20 minutes a week reviewing content before it goes live
              </div>
            </div>
          </div>
          <div className="for-divider"></div>
          <div>
            <div className="for-header no">This isn't for you if</div>
            <div className="for-list">
              <div className="for-item">
                <span className="cross">✗</span> You sell a product or B2C service
              </div>
              <div className="for-item">
                <span className="cross">✗</span> Your offer is under £2,000
              </div>
              <div className="for-item">
                <span className="cross">✗</span> You don't have a clearly defined ideal client
              </div>
              <div className="for-item">
                <span className="cross">✗</span> You want results in week one without building a presence first
              </div>
              <div className="for-item">
                <span className="cross">✗</span> You're not willing to show up to the calls we book
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
