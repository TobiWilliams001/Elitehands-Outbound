import { useScrollReveal } from '../hooks/useScrollReveal';

const tiers = [
  {
    tier: 'Tailored plan',
    name: 'Custom',
    featured: false,
    desc: "Every business is different. We scope a plan around what you actually need, whether that's more content, more outreach, or a different mix altogether.",
    price: "Let's talk",
    priceSmall: true,
    priceNote: 'Scoped to your goals',
    features: [
      'Starts with a short call about your goals',
      'Mix and match content, outreach, and booking',
      'Scales up or down as your needs change',
    ],
    btnLabel: 'Talk to us',
    btnClass: 'offer-btn outline',
  },
  {
    tier: 'You handle content',
    name: 'The System',
    featured: false,
    desc: "We build and run the outreach and qualification engine. You keep creating and posting your own content. Warm interest gets qualified and booked straight into your calendar.",
    price: '£950',
    priceNote: 'Includes full setup',
    priceSuffix: '/mo',
    features: [
      'LinkedIn profile written and optimised for your ICP',
      'Outreach and qualification system built and run for you',
      'Booking flow configured to your calendar',
      'You keep creating and posting your own content',
    ],
    btnLabel: 'Start with the system',
    btnClass: 'offer-btn outline',
  },
  {
    tier: 'Fully hands-off',
    name: 'Fully Managed',
    featured: true,
    desc: "Hands-off, from setup to booked calls. We build it, we write and post the content, we run the outreach. You just show up to calls already on your calendar.",
    price: '£1,400',
    priceNote: 'Includes full setup',
    priceSuffix: '/mo',
    features: [
      'LinkedIn profile built and optimised',
      '3-4 posts per week, every week, written and posted for you',
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
            Three ways to work with us.
          </h2>
          <p className="section-sub" style={{ color: 'var(--slate)' }}>
            You choose how involved you want to be. We handle the rest.
          </p>
        </div>

        <div className="offer-grid">
          {tiers.map((t, i) => (
            <div key={t.name} className={`offer-card reveal reveal-delay-${i + 1}${t.featured ? ' featured' : ''}`}>
              {t.featured && <div className="offer-featured-tag">Most popular</div>}
              <div className="offer-tier">{t.tier}</div>
              <div className="offer-name">{t.name}</div>
              <p className="offer-desc">{t.desc}</p>

              <div className={`offer-price${t.priceSmall ? ' small' : ''}`}>
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
