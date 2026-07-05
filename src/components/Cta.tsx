import { IconLock } from './icons';

export const Cta = () => {
  return (
    <section className="cta-section" id="cta">
      <div className="cta-inner">
        <div className="section-label" style={{ justifyContent: 'center' }}>Get started</div>
        <h2 className="section-title">
          Ready to stop worrying about where
          <br />
          the next client comes from?
        </h2>
        <p className="section-sub">
          Book a 30-minute call. We'll look at where you are, who you're trying to reach,
          and whether this is the right fit.
        </p>
        <div className="cta-actions">
          <a href="#" className="btn-cta-primary">Book a discovery call →</a>
        </div>
        <p className="cta-note"><IconLock /> No pitch. No pressure. If it's not the right fit, we'll tell you.</p>
      </div>
    </section>
  );
};
