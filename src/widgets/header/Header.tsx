import { useEffect, useState, useCallback } from 'react';
import styles from './Header.module.scss';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navLogo}>
        <span>&lt;</span> JS.dev <span>/&gt;</span>
      </div>
      <ul className={styles.navLinks}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}