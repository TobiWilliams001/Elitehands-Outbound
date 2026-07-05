import { useEffect, useRef, useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

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

const whatWorks = [
  {
    title: 'Content that reaches the right people',
    desc: 'Posts written around your expertise and positioned to reach your ideal client, not a general audience. Engagement is a signal, not a vanity metric.',
  },
  {
    title: 'Conversations that qualify themselves',
    desc: 'Warm engagement becomes a natural conversation. Only the people who match who you actually work with ever reach your calendar.',
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
          {whatWorks.map((w, i) => (
            <div key={w.title} className={`result-card reveal reveal-delay-${i + 1}`}>
              <div className="result-title">{w.title}</div>
              <p className="result-desc">{w.desc}</p>
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
