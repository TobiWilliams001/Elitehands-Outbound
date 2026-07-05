import { useScrollReveal } from '../hooks/useScrollReveal';
import { IconPen, IconZap, IconSearch, IconComment, IconCalendar } from './icons';

const steps = [
  {
    num: '01',
    title: 'We build your presence',
    body: 'Your LinkedIn profile, written to speak directly to the people you want to work with. Positioned around the outcome you produce, not your job title.',
  },
  {
    num: '02',
    title: 'We create the content',
    body: '3-4 posts per week in your voice, your expertise, your perspective, your stories. Content designed to reach your ideal client and build trust before any conversation starts.',
  },
  {
    num: '03',
    title: 'Warm interest becomes conversations',
    body: "When the right people engage with your content, we start a natural, personalised conversation. No cold outreach. No forms. Just a real back-and-forth that qualifies them.",
  },
  {
    num: '04',
    title: 'Qualified calls land in your calendar',
    body: "Once someone is qualified, they get your booking link directly in the conversation. You're notified when a call is confirmed. That's the first moment you need to think about it.",
  },
];

const pipeline = [
  { Icon: IconPen,     label: 'Content published',    desc: 'Reaches your ideal client on LinkedIn'                   },
  { Icon: IconZap,     label: 'Interest detected',    desc: 'Someone engages: like, comment, connection'              },
  { Icon: IconSearch,  label: 'Right fit confirmed',  desc: 'We check they match who you actually work with'          },
  { Icon: IconComment, label: 'Conversation started', desc: 'Personalised message, natural back-and-forth, qualified' },
  { Icon: IconCalendar, label: 'Call confirmed',      desc: 'Booking link sent. Calendar updated. You\'re notified.'  },
];

export const HowItWorks = () => {
  const ref = useScrollReveal();

  return (
    <section className="how-section" id="how" ref={ref as React.RefObject<HTMLElement>}>
      <div className="container">
        <div className="reveal">
          <div className="section-label">How it works</div>
          <h2 className="section-title">
            A quiet engine that runs
            <br />
            while you're doing the work.
          </h2>
        </div>

        <div className="how-grid">
          {/* Steps */}
          <div className="how-steps reveal reveal-delay-1">
            {steps.map((s) => (
              <div className="how-step" key={s.num}>
                <div className="step-num">{s.num}</div>
                <div>
                  <div className="step-title">{s.title}</div>
                  <p className="step-body">{s.body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pipeline visual */}
          <div className="how-visual reveal reveal-delay-2">
            {pipeline.map((node, i) => (
              <div className="pipe-node" key={i}>
                <div className="pipe-icon"><node.Icon /></div>
                <div>
                  <div className="pipe-label">{node.label}</div>
                  <p className="pipe-desc">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
