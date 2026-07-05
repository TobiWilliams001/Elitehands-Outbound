import React from 'react';

export const Results: React.FC = () => {
  return (
    <section className="results-section" id="results">
      <div className="container">
        <div className="section-label">Results</div>
        <h2 className="section-title">
          What changes when
          <br />
          the pipeline works.
        </h2>
        <div className="results-grid">
          <div className="result-card">
            <p className="result-quote">"We looked at my last two months of LinkedIn activity. There were people who engaged and went cold — people who matched exactly who I work with. This system would have caught all of them."</p>
            <div className="result-meta">
              <div className="result-avatar">M</div>
              <div>
                <div className="result-name">Matthew Otor</div>
                <div className="result-role">B2B Video Marketing Consultant, London</div>
              </div>
            </div>
          </div>
          <div className="result-card">
            <p className="result-quote">"I came in with zero LinkedIn presence and a very specific type of client I needed to reach. Within weeks there was a profile, consistent content, and conversations starting with the right people."</p>
            <div className="result-meta">
              <div className="result-avatar">J</div>
              <div>
                <div className="result-name">Joys Alabi</div>
                <div className="result-role">Fintech Commercial Strategy Consultant</div>
              </div>
            </div>
          </div>
        </div>
        <div className="stat-row">
          <div className="stat-item">
            <div className="stat-num">48h</div>
            <div className="stat-label">From warm signal to conversation started</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">£2K+</div>
            <div className="stat-label">Minimum offer we work with</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">3 mo</div>
            <div className="stat-label">Typical time to a consistent call flow</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">0</div>
            <div className="stat-label">Cold outreach required from you</div>
          </div>
        </div>
      </div>
    </section>
  );
};
