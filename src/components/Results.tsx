import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Animated counter that counts up when triggered
const AnimatedStat = ({ label, value }: { label: string; value: string }) => {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stat-item" ref={ref}>
      <div className={`stat-num ${started ? 'stat-visible' : ''}`}>{value}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const testimonials = [
  {
    initials: 'M',
    quote: '"We looked at my last two months of LinkedIn activity. There were people who engaged and went cold, people who matched exactly who I work with. This system would have caught all of them."',
    name: 'Matthew Otor',
    role: 'B2B Video Marketing Consultant, London',
  },
  {
    initials: 'J',
    quote: '"I came in with zero LinkedIn presence and a very specific type of client I needed to reach. Within weeks there was a profile, consistent content, and conversations starting with the right people."',
    name: 'Joys Alabi',
    role: 'Fintech Commercial Strategy Consultant',
  },
];

const stats = [
  { value: '48h',  label: 'From warm signal to conversation started' },
  { value: '3 mo', label: 'Typical time to a consistent call flow' },
  { value: '0',    label: 'Cold outreach required from you' },
];

export const Results = () => {
  const ref = useScrollReveal();

  return (
    <section className="results-section" id="results" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">Results</div>
          <h2 className="section-title">
            What changes when
            <br />
            the pipeline works.
          </h2>
        </div>

        <div className="results-grid">
          {testimonials.map((t, i) => (
            <div key={t.name} className={`result-card reveal reveal-delay-${i + 1}`}>
              <p className="result-quote">{t.quote}</p>
              <div className="result-meta">
                <div className="result-avatar">{t.initials}</div>
                <div>
                  <div className="result-name">{t.name}</div>
                  <div className="result-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stat-row">
          {stats.map((s) => (
            <AnimatedStat key={s.value} value={s.value} label={s.label} />
          ))}
        </div>
      </div>
    </section>
  );
};
