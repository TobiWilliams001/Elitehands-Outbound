import { useEffect, useRef, useState } from 'react';
import { IconLike, IconComment, IconConnect, IconCalendar } from './icons';

interface Signal {
  id: string;
  type: 'like' | 'comment' | 'connect' | 'book';
  name: string;
  desc: string;
  badge: string;
  cls: string;
  time: string;
}

const TEMPLATES = [
  { type: 'like'    as const, name: 'James Carter',   desc: 'Engaged with your post on B2B content strategy',   badge: 'Right fit',   cls: 'icp',    time: 'Just now'    },
  { type: 'comment' as const, name: 'Priya Anand',     desc: '"This is exactly what we\'ve been dealing with"',  badge: 'Right fit',   cls: 'icp',    time: '2 min ago'   },
  { type: 'connect' as const, name: 'Daniel Osei',     desc: 'Accepted your connection request',                  badge: 'In progress', cls: 'review', time: '5 min ago'   },
  { type: 'comment' as const, name: 'Laura Bennett',   desc: "Replied and confirmed they're preparing to raise", badge: 'Qualifying',  cls: 'qual',   time: '8 min ago'   },
  { type: 'book'    as const, name: 'Michael Thorne',  desc: 'Call confirmed, Thursday 2pm',                     badge: 'Booked',      cls: 'booked', time: '12 min ago'  },
];

const ICON_STYLES: Record<string, { bg: string; color: string; Icon: typeof IconLike }> = {
  like:    { bg: 'rgba(13,148,136,0.18)',  color: '#14B8A8', Icon: IconLike },
  comment: { bg: 'rgba(99,102,241,0.18)',  color: '#818CF8', Icon: IconComment },
  connect: { bg: 'rgba(168,85,247,0.18)',  color: '#C084FC', Icon: IconConnect },
  book:    { bg: 'rgba(22,163,74,0.18)',   color: '#4ADE80', Icon: IconCalendar },
};

let uid = 0;
const createSignal = (t: typeof TEMPLATES[0]): Signal => ({ ...t, id: `${t.name}-${++uid}` });

export const SignalPanel = () => {
  const [items, setItems] = useState<Signal[]>([]);
  const idxRef = useRef(4);

  useEffect(() => {
    // Staggered initial load
    TEMPLATES.forEach((t, i) => {
      setTimeout(() => setItems(prev => [...prev, createSignal(t)]), i * 220);
    });

    const interval = setInterval(() => {
      idxRef.current = (idxRef.current + 1) % TEMPLATES.length;
      setItems(prev => {
        const next = [...prev];
        if (next.length >= 5) next.shift();
        next.push(createSignal(TEMPLATES[idxRef.current]));
        return next;
      });
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="signal-panel">
      <div className="signal-header">
        <div className="signal-header-left">
          <div className="signal-dot" />
          <span className="signal-header-text">Live activity</span>
        </div>
        <span className="signal-count">{items.length} signals</span>
      </div>

      <div className="signal-feed">
        {items.map((item, i) => {
          const style = ICON_STYLES[item.type];
          const Icon = style.Icon;
          return (
            <div
              key={item.id}
              className="signal-item"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className="signal-icon"
                style={{ background: style.bg, color: style.color }}
              >
                <Icon />
              </div>
              <div className="signal-body">
                <div className="signal-name">{item.name}</div>
                <div className="signal-desc">{item.desc}</div>
                <div className="signal-time">{item.time}</div>
              </div>
              <span className={`signal-badge ${item.cls}`}>{item.badge}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
