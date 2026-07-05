import React from 'react';

export const HowItWorks: React.FC = () => {
  return (
    <section className="how-section" id="how">
      <div className="container">
        <div className="section-label">How it works</div>
        <h2 className="section-title">
          A quiet engine that runs
          <br />
          while you're doing the work.
        </h2>
        <div className="how-grid">
          <div className="how-steps">
            <div className="how-step">
              <div className="step-num">01</div>
              <div>
                <div className="step-title">We build your presence</div>
                <p className="step-body">Your LinkedIn profile, written to speak directly to the people you want to work with. Positioned around the outcome you produce, not your job title.</p>
              </div>
            </div>
            <div className="how-step">
              <div className="step-num">02</div>
              <div>
                <div className="step-title">We create the content</div>
                <p className="step-body">3-4 posts per week in your voice — your expertise, your perspective, your stories. Content designed to reach your ideal client and build trust before any conversation starts.</p>
              </div>
            </div>
            <div className="how-step">
              <div className="step-num">03</div>
              <div>
                <div className="step-title">Warm interest becomes conversations</div>
                <p className="step-body">When the right people engage with your content, we start a natural, personalised conversation with them. No cold outreach. No forms. Just a real back-and-forth that qualifies them.</p>
              </div>
            </div>
            <div className="how-step">
              <div className="step-num">04</div>
              <div>
                <div className="step-title">Qualified calls land in your calendar</div>
                <p className="step-body">Once someone is qualified, they get your booking link directly in the conversation. You're notified when a call is confirmed. That's the first moment you need to think about it.</p>
              </div>
            </div>
          </div>

          <div className="how-visual">
            <div className="pipe-node">
              <div className="pipe-icon">✍</div>
              <div>
                <div className="pipe-label">Content published</div>
                <p className="pipe-desc">Reaches your ideal client on LinkedIn</p>
              </div>
            </div>
            <div className="pipe-node">
              <div className="pipe-icon">⚡</div>
              <div>
                <div className="pipe-label">Interest detected</div>
                <p className="pipe-desc">Someone engages — like, comment, connection</p>
              </div>
            </div>
            <div className="pipe-node">
              <div className="pipe-icon">🔍</div>
              <div>
                <div className="pipe-label">Right fit confirmed</div>
                <p className="pipe-desc">We check they match who you actually work with</p>
              </div>
            </div>
            <div className="pipe-node">
              <div className="pipe-icon">💬</div>
              <div>
                <div className="pipe-label">Conversation started</div>
                <p className="pipe-desc">Personalised message, natural back-and-forth, qualified</p>
              </div>
            </div>
            <div className="pipe-node">
              <div className="pipe-icon">📅</div>
              <div>
                <div className="pipe-label">Call confirmed</div>
                <p className="pipe-desc">Booking link sent. Calendar updated. You're notified.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
