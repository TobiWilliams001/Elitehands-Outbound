import { useScrollReveal } from '../hooks/useScrollReveal';

const problems = [
  {
    num: '01',
    title: 'Feast and famine',
    body: "When you're delivering work, business development stops. When projects end, you start from scratch. Referrals are great when they happen and unreliable when you need them.",
  },
  {
    num: '02',
    title: 'No time to build presence',
    body: "You know you should be more visible. But turning your expertise into consistent content that reaches the right people takes time you don't have.",
  },
  {
    num: '03',
    title: 'Warm interest going cold',
    body: "People engage, read your profile, move on. The interest was there. Nobody followed up. The conversation never started. That's the gap we close.",
  },
];

export const Problem = () => {
  const ref = useScrollReveal();

  return (
    <section className="problem-section" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">The problem</div>
          <h2 className="section-title">
            Most B2B founders have a pipeline problem,
            <br />
            not a quality problem.
          </h2>
          <p className="section-sub">
            You're good at what you do. The people who've worked with you know it. The problem is
            getting enough of the right people to find out about you, consistently, without
            depending on referrals or cold outreach that goes nowhere.
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((p, i) => (
            <div key={p.num} className={`problem-card reveal reveal-delay-${i + 1}`}>
              <div className="problem-num">{p.num}</div>
              <div className="problem-title">{p.title}</div>
              <p className="problem-body">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
