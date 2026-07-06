import { SignalPanel } from './SignalPanel';

export const Hero = () => {
  return (
    <>
      <div className="bg-orbs" aria-hidden="true">
        <div className="hero-blob" />
        <div className="bg-orb bg-orb-2" />
      </div>

      <div className="hero-wrapper">
        <div className="hero-vertical-mark" aria-hidden="true">
          Elitehands &mdash; B2B Client Acquisition
        </div>

        <div className="hero-grid">
          <div>
            <div className="hero-kicker">You do the work.</div>

            <h1 className="hero-headline">
              We fill your <em>calendar</em>.
            </h1>

            <p className="hero-sub">
              Qualified clients, people who already know what you do and are ready to talk, booked directly into your calendar. You show up. We handle everything that gets them there.
            </p>

            <div className="hero-actions">
              <a href="#cta" className="btn-primary">Book a discovery call</a>
              <a href="#how" className="link-arrow">See how it works<span>→</span></a>
            </div>

            <div className="hero-trust">
              <div className="hero-avatars">
                {['M', 'J', 'A', 'V'].map((letter) => (
                  <div className="hero-avatar" key={letter}>{letter}</div>
                ))}
              </div>
              <p className="hero-trust-text">
                <strong>Trusted by B2B founders</strong>
              </p>
            </div>
          </div>

          <SignalPanel />
        </div>
      </div>
    </>
  );
};
