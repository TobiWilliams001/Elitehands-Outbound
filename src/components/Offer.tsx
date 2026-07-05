import { useScrollReveal } from '../hooks/useScrollReveal';

const tiers = [
  {
    tier: 'Tier 1',
    name: 'The System',
    featured: false,
    desc: "We build and set up everything that turns warm interest into booked calls — then hand it over to you to run. You keep control. You handle the posting and conversations. The engine is yours.",
    price: '£2,500',
    priceNote: 'One-time build',
    features: [
      'LinkedIn profile written and optimised for your ICP',
      'First 4 weeks of content written in your voice',
      'Full outreach and qualification system set up',
      'Booking flow configured to your calendar',
      'Full handover session — you run it from here',
    ],
    btnLabel: 'Start with the system',
    btnClass: 'offer-btn outline',
  },
  {
    tier: 'Tier 2',
    name: 'Fully Managed',
    featured: true,
    desc: "We build it and we run it. Content posted every week in your voice. Outreach and conversations handled. Calls confirmed and landed in your calendar. You show up. Everything else is ours.",
    price: '£1,400',
    priceNote: '3-month minimum · includes full setup',
    priceSuffix: '/mo',
    features: [
      'LinkedIn profile built and optimised',
      '3–4 posts per week, every week — written and posted for you',
      'Outreach and qualification handled end to end',
      'Calls confirmed directly into your calendar',
      'Call prep briefing before every meeting',
      'Monthly performance report and strategy call',
    ],
    btnLabel: 'Get fully managed',
    btnClass: 'offer-btn',
  },
];

export const Offer = () => {
  const ref = useScrollReveal();

  return (
    <section className="offer-section" id="offer" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">What we offer</div>
          <h2 className="section-title" style={{ color: 'var(--navy)' }}>
            Two ways to work with us.
          </h2>
          <p className="section-sub" style={{ color: 'var(--slate)' }}>
            You choose how involved you want to be. We handle the rest.
          </p>
        </div>

        <div className="offer-grid">
          {tiers.map((t, i) => (
            <div key={t.tier} className={`offer-card reveal reveal-delay-${i + 1}${t.featured ? ' featured' : ''}`}>
              {t.featured && <div className="offer-featured-tag">Most popular</div>}
              <div className="offer-tier">{t.tier}</div>
              <div className="offer-name">{t.name}</div>
              <p className="offer-desc">{t.desc}</p>

              <div className="offer-price">
                {t.price}
                {t.priceSuffix && (
                  <span style={{ fontSize: '1rem', fontWeight: 400, color: 'var(--slate)' }}>
                    {t.priceSuffix}
                  </span>
                )}
              </div>
              <div className="offer-price-note">{t.priceNote}</div>
              <div className="offer-divider" />

              <ul className="offer-list">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <a href="#cta" className={t.btnClass}>
                {t.btnLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
