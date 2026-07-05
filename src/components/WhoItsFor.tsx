import { useScrollReveal } from '../hooks/useScrollReveal';

const yesItems = [
  'You sell a B2B service or expertise above £2,000',
  'Your pipeline is inconsistent or referral-dependent',
  'You have real expertise and real results but no content system',
  "You close well when you're in the right conversation, you just need more of them",
  "You're willing to spend 15–20 minutes a week reviewing content before it goes live",
];

const noItems = [
  'You sell a product or B2C service',
  'Your offer is under £2,000',
  "You don't have a clearly defined ideal client",
  'You want results in week one without building a presence first',
  "You're not willing to show up to the calls we book",
];

export const WhoItsFor = () => {
  const ref = useScrollReveal();

  return (
    <section className="for-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Who this is for</div>
          <h2 className="section-title" style={{ color: 'var(--navy)' }}>
            The fit matters as much
            <br />
            to us as it does to you.
          </h2>
        </div>

        <div className="for-grid">
          {/* Yes column */}
          <div className="reveal reveal-delay-1">
            <div className="for-header yes">This is for you if</div>
            <div className="for-list">
              {yesItems.map((item) => (
                <div className="for-item" key={item}>
                  <span className="check">✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="for-divider" />

          {/* No column */}
          <div className="reveal reveal-delay-2">
            <div className="for-header no">This isn't for you if</div>
            <div className="for-list">
              {noItems.map((item) => (
                <div className="for-item" key={item}>
                  <span className="cross">✗</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
