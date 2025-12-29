import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import './home.css';

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-04-03T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="home-section">
      <video className="home-video" autoPlay loop muted>
        <source src="/video/home.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="home-overlay"></div>
      <div className="home-content">
        <h1>India&apos;s First All-in-One Gaming Ecosystem</h1>
        <h2>Grow Your Gaming Business With ShipTap</h2>
        <p>Bridging game creators, esports organizers, gaming zones, and players in one unified platform</p>
        <div className="countdown-timer">
          <div className="launch-date">Launch Date: April 3, 2026</div>
          <div className="timer-display">
            <div className="time-unit">
              <div className="time-value">{timeLeft.days}</div>
              <div className="time-label">Days</div>
            </div>
            <div className="time-unit">
              <div className="time-value">{timeLeft.hours}</div>
              <div className="time-label">Hours</div>
            </div>
            <div className="time-unit">
              <div className="time-value">{timeLeft.minutes}</div>
              <div className="time-label">Minutes</div>
            </div>
            <div className="time-unit">
              <div className="time-value">{timeLeft.seconds}</div>
              <div className="time-label">Seconds</div>
            </div>
          </div>
        </div>
        <Link href="/wishlist">
          <button>Join Wishlist</button>
        </Link>
      </div>
    </section>
  );
};

export default Home;
