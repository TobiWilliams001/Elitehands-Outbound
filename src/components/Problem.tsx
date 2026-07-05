import React from 'react';

export const Problem: React.FC = () => {
  return (
    <section className="problem-section">
      <div className="container">
        <div className="section-label">The problem</div>
        <h2 className="section-title" style={{ color: 'var(--navy)' }}>
          Most B2B founders have a pipeline problem,
          <br />
          not a quality problem.
        </h2>
        <p className="section-sub" style={{ color: 'var(--slate)' }}>
          You're good at what you do. The people who've worked with you know it. The problem is getting enough of the right people to find out about you — consistently, without depending on referrals or cold outreach that goes nowhere.
        </p>
        <div className="problem-grid">
          <div className="problem-card">
            <div className="problem-num">01</div>
            <div className="problem-title">Feast and famine</div>
            <p className="problem-body">
              When you're delivering work, business development stops. When projects end, you start from scratch. Referrals are great when they happen and unreliable when you need them.
            </p>
          </div>
          <div className="problem-card">
            <div className="problem-num">02</div>
            <div className="problem-title">No time to build presence</div>
            <p className="problem-body">
              You know you should be more visible. But turning your expertise into consistent content that reaches the right people takes time you don't have.
            </p>
          </div>
          <div className="problem-card">
            <div className="problem-num">03</div>
            <div className="problem-title">Warm interest going cold</div>
            <p className="problem-body">
              People engage, read your profile, move on. The interest was there. Nobody followed up. The conversation never started. That's the gap we close.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
