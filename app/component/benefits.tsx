import React from 'react';
import Image from 'next/image';
import './benefits.css';

const benefits = [
  {
    id: 1,
    title: 'For Developers',
    desc: 'Publish & monetize games easily',
    icon: 'code',
  },
  {
    id: 2,
    title: 'For Organizers',
    desc: 'Host tournaments seamlessly',
    icon: 'trophy',
  },
  {
    id: 3,
    title: 'For Gaming Cafes',
    desc: 'Connect with thousands of gamers',
    icon: 'location',
  },
  {
    id: 4,
    title: 'For Players',
    desc: 'Discover unlimited gaming experiences',
    icon: 'users',
  },
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

export default function Benefits() {
  return (
    <section className="benefits-section">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-main-title">Benefits From ShipTap</h2>
          <p className="benefits-subtitle">One platform, unlimited opportunities for everyone</p>
        </div>
        <div className="benefits-grid">
          {benefits.map((b) => (
            <article className="benefit-card" key={b.id}>
              <div className="icon-col">
                <div className="pulse" aria-hidden="true" />
                <div className="icon">
                  <Icon name={b.icon} />
                </div>
              </div>
              <div className="content-col">
                <h3 className="benefit-title">{b.title}</h3>
                <p className="benefit-desc">{b.desc}</p>
              </div>
            </article>
          ))}
        </div>
        <Image src="/benefits.png" alt="Benefits" className="benefits-image" width={200} height={200} />
      </div>
    </section>
  );
}
