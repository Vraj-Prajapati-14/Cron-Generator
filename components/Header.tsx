'use client';

import { Clock, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Generator' },
    { href: '/guide', label: 'Guide' },
    { href: '/features', label: 'Features' },
    { href: '/examples', label: 'Examples' },
    { href: '/reference', label: 'Reference' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo} aria-label="Cron Generator Online - Home">
          <Clock size={28} aria-hidden="true" />
          <span>Cron Pro</span>
        </Link>
        
        <button 
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          type="button"
        >
          {isMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>

        <nav 
          id="main-navigation"
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href} 
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
              aria-label={`Navigate to ${link.label} page`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
