import React from 'react';
import './normal.css';

const stats = [
  { key: 1, number: '100M+', label: 'Target Gamers by 2030', icon: 'users' },
  { key: 2, number: '500+', label: 'Tournaments Monthly', icon: 'trophy' },
  { key: 3, number: '1000+', label: 'Gaming Zones to Connect', icon: 'location' },
  { key: 4, number: '10K+', label: 'Game Developers', icon: 'code' },
];

const Icon: React.FC<{ name: string }> = ({ name }) => {
  switch (name) {
    case 'users':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M16 11c1.657 0 3-1.567 3-3.5S17.657 4 16 4s-3 1.567-3 3.5S14.343 11 16 11zM8 11c1.657 0 3-1.567 3-3.5S9.657 4 8 4 5 5.567 5 7.5 6.343 11 8 11zM2 20c0-3.314 4.03-6 9-6s9 2.686 9 6v1H2v-1z" />
        </svg>
      );
    case 'trophy':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M6 3v2a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4V3H6zm-3 2h2a3 3 0 0 1-1 2 6 6 0 0 0-1 3v2h2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3h2v-2a6 6 0 0 0-1-3 3 3 0 0 1-1-2h2v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V5z" />
        </svg>
      );
    case 'location':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M3 6h18v2H3V6zm0 4h12v2H3v-2zm0 4h18v2H3v-2z" />
        </svg>
      );
  }
};

export default function Normal() {
  return (
    <section className="normal-section">
      <div className="normal-container">
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.key}>
              <div className="icon-wrap">
                <div className="pulse" aria-hidden="true" />
                <div className="icon">
                  <Icon name={s.icon} />
                </div>
              </div>
              <div className="number">{s.number}</div>
              <div className="label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
