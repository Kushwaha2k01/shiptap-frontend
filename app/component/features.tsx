import React from 'react';
import './features.css';

const Features: React.FC = () => {
  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <h2 className="features-title">Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3 className="feature-title">Game Store</h3>
            <p className="feature-description">
              Empower indie developers and studios to publish, distribute, and monetize their games with ease. Reach millions of players without traditional barriers.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Esports Tournaments</h3>
            <p className="feature-description">
              Host and manage tournaments seamlessly. Make competitive gaming accessible to players of all skill levels with powerful organizing tools.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Gaming Zones</h3>
            <p className="feature-description">
              Connect local gaming cafes and zones with eager players. Enable digital discovery for neighborhood gaming spaces and grow your business.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Gaming Card</h3>
            <p className="feature-description">
              Revolutionary gaming card providing seamless access, exclusive rewards, and benefits across the entire ShipTap ecosystem.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Community Building</h3>
            <p className="feature-description">
              Create a connected gaming culture where players find their community, creators find their audience, and everyone finds growth.
            </p>
          </div>
          <div className="feature-card">
            <h3 className="feature-title">Innovation</h3>
            <p className="feature-description">
              Continuously evolving platform with cutting-edge features that make gaming more social, rewarding, and enjoyable for everyone.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
