'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar after scrolling down 100px
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`navbar ${isVisible ? 'navbar-visible' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <button
          onClick={() => scrollToSection('hero')}
          className="navbar-logo"
        >
          <Image
            src="/navigation.png"
            alt="Injury Claim Connect"
            width={160}
            height={40}
            priority
          />
        </button>

        {/* Navigation Links */}
        <div className="navbar-links">
          <button
            onClick={() => scrollToSection('hero')}
            className="navbar-link"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('faq')}
            className="navbar-link"
          >
            FAQ
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="navbar-link"
          >
            Contact
          </button>
        </div>

        {/* CTA Button */}
        <div className="navbar-cta">
          <button
            onClick={() => scrollToSection('contact')}
            className="navbar-cta-button"
          >
            Get Started
            <svg
              className="button-arrow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
