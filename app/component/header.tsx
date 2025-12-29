import Image from "next/image";
import Link from "next/link";
import logo from "../image/logo.png";
import "./header.css";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Header() {
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
        <nav className="header-nav">
          <a href="#home" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
          <Link href="/about" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</Link>
          <Link href="/features" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Features</Link>
          <Link href="/contacts" className="nav-link" onClick={(e) => { e.preventDefault(); scrollToSection('contacts'); }}>Contacts</Link>
        </nav>
      </div>
    </header>
  );
}
