import { SignalPanel } from './SignalPanel';

export const Hero = () => {
  return (
    <>
      {/* Floating background orbs */}
      <div className="bg-orbs" aria-hidden="true">
        <div className="bg-orb bg-orb-1" />
        <div className="bg-orb bg-orb-2" />
        <div className="bg-orb bg-orb-3" />
      </div>

      <div className="hero-wrapper">
        <div className="hero-grid">
          {/* Left: Copy */}
          <div>
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-dot" />
              B2B Client Acquisition
            </div>

            <h1 className="hero-headline">
              You do the work.
              <br />
              <em>We fill your calendar.</em>
            </h1>

            <p className="hero-sub">
              Qualified clients — people who already know what you do and are ready to talk — booked directly into your calendar. You show up. We handle everything that gets them there.
            </p>

            <div className="hero-actions">
              <a href="#cta" className="btn-primary">Book a discovery call</a>
              <a href="#how" className="btn-ghost">See how it works →</a>
            </div>

            <div className="hero-trust">
              <div className="hero-avatars">
                {['M', 'J', 'A', 'V'].map((letter) => (
                  <div className="hero-avatar" key={letter}>{letter}</div>
                ))}
              </div>
              <p className="hero-trust-text">
                <strong>Trusted by B2B founders</strong>
                <br />
                consistently closing £2K+ service contracts
              </p>
            </div>
          </div>

          {/* Right: Signal Panel */}
          <SignalPanel />
        </div>
      </div>
    </>
  );
};
