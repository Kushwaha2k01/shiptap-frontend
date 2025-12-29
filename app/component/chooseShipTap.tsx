import React from 'react';
import './chooseShipTap.css';

const bullets = [
  'Zero upfront costs - Start earning from day one',
  'Access to millions of active gamers across India',
  'Advanced analytics & insights dashboard',
  '24/7 dedicated support for partners',
  'Marketing & promotional support included',
  'Secure payment gateway with instant settlements',
];

export default function ChooseShipTap() {
  return (
    <section className="choose-shiptap-section">
      <div className="choose-shiptap-container">
        <div className="left">
          <h2 className="title">Why Gaming Businesses Choose ShipTap</h2>
          <ul className="features-list" aria-hidden={false}>
            {bullets.map((b, i) => (
              <li key={i} className="feature-item">
                <span className="check" aria-hidden="true">✓</span>
                <span className="feature-text">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="right">
          <div className="stats-card" role="region" aria-label="ShipTap impact stats">
            <div className="stat-row stat-1">
              <div className="stat-title">📈 <strong>Average Revenue Growth</strong></div>
              <div className="stat-number">3.5x</div>
              <div className="stat-desc">in first 6 months</div>
            </div>

            <div className="stat-row stat-2">
              <div className="stat-title">⚡ <strong>Setup Time</strong></div>
              <div className="stat-number">24 Hours</div>
              <div className="stat-desc">to go live on platform</div>
            </div>

            <div className="stat-row stat-3">
              <div className="stat-title">🌟 <strong>Partner Satisfaction</strong></div>
              <div className="stat-number">98%</div>
              <div className="stat-desc">would recommend us</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
