"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../image/logo.png";
import "./header.css";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-left">
          <Image
            src={logo}
            alt="ShipTap Logo"
            width={40}
            height={40}
            className="logo-image"
          />
          <span className="brand-name">ShipTap</span>
        </div>
        <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); closeMenu(); }}>Home</a>
          <Link href="/about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); closeMenu(); }}>About</Link>
          <Link href="/features" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('features'); closeMenu(); }}>Features</Link>
          <Link href="/contacts" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contacts'); closeMenu(); }}>Contacts</Link>
        </nav>
        <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>
    </header>
  );
}
