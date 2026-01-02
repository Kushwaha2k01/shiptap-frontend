import React from 'react';
import Image from 'next/image';
import './about.css';

const About: React.FC = () => {
  return (
    <section id="about" className="about-section">
      <h2>What is ShipTap?</h2>
      <p>ShipTap is more than just a gaming platform - it&apos;s a movement to democratize gaming in India. Born from the vision of creating an inclusive gaming ecosystem, ShipTap serves as the bridge between game creators and players, between competitive esports and casual gaming, between digital experiences and physical gaming zones.</p>
      <button className="watch-video-btn">Watch Video</button>
    </section>
  );
};

export default About;
