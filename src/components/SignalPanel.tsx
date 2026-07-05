import React, { useState, useEffect, useRef } from 'react';

interface Signal {
  id: string;
  icon: string;
  type: string;
  name: string;
  desc: string;
  badge: string;
  cls: string;
  time: string;
}

const signalsTemplate = [
  { icon: '👍', type: 'like', name: 'Sarah Chen', desc: 'Engaged with your post on B2B content strategy', badge: 'Right fit', cls: 'icp', time: 'Just now' },
  { icon: '💬', type: 'comment', name: 'Anas Hidaoui', desc: '"This is exactly what we\'ve been dealing with"', badge: 'Right fit', cls: 'icp', time: '2 min ago' },
  { icon: '🔗', type: 'connect', name: 'Victoria Ilori', desc: 'Accepted your connection request', badge: 'In progress', cls: 'review', time: '5 min ago' },
  { icon: '💬', type: 'comment', name: 'Joffrey Berti', desc: "Replied and confirmed they're preparing to raise", badge: 'Qualifying', cls: 'qual', time: '8 min ago' },
  { icon: '📅', type: 'book', name: 'Sintu Singh', desc: 'Call confirmed — Thursday 2pm', badge: 'Booked ✓', cls: 'booked', time: '12 min ago' },
];

export const SignalPanel: React.FC = () => {
  const [items, setItems] = useState<Signal[]>([]);
  const idxRef = useRef(0);
  const counterRef = useRef(0);

  // Helper to create a new signal item with unique ID
  const createSignal = (template: typeof signalsTemplate[0]): Signal => {
    counterRef.current += 1;
    return {
      ...template,
      id: `${template.name}-${counterRef.current}`,
    };
  };

  useEffect(() => {
    // Staggered load of first 5 signals
    signalsTemplate.forEach((s, idx) => {
      setTimeout(() => {
        setItems((prev) => [...prev, createSignal(s)]);
      }, idx * 200);
    });

    idxRef.current = 4; // Start rotating after the 5th item

    // Interval to cycle items
    const interval = setInterval(() => {
      setItems((prev) => {
        const nextIdx = (idxRef.current + 1) % signalsTemplate.length;
        idxRef.current = nextIdx;
        const newSignal = createSignal(signalsTemplate[nextIdx]);

        // Keep at most 5 items, removing the first one
        if (prev.length >= 5) {
          return [...prev.slice(1), newSignal];
        }
        return [...prev, newSignal];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="signal-panel">
      <div className="signal-header">
        <div className="signal-dot"></div>
        <span className="signal-header-text">Live activity</span>
      </div>
      <div className="signal-feed" id="signalFeed">
        {items.map((item) => (
          <div key={item.id} className="signal-item">
            <div className="signal-icon like" style={{ backgroundColor: item.type === 'like' ? 'rgba(13,148,136,.15)' : item.type === 'comment' ? 'rgba(59,130,246,.15)' : item.type === 'connect' ? 'rgba(168,85,247,.15)' : 'rgba(22,163,74,.15)', color: item.type === 'like' ? 'var(--teal)' : item.type === 'comment' ? '#60A5FA' : item.type === 'connect' ? '#C084FC' : '#4ADE80' }}>
              {item.icon}
            </div>
            <div className="signal-body">
              <div className="signal-name">{item.name}</div>
              <div className="signal-desc">{item.desc}</div>
              <div className="signal-time">{item.time}</div>
            </div>
            <span className={`signal-badge ${item.cls}`}>{item.badge}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
