import styles from './Header.module.scss';
import { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/#projects', label: 'Projects' },
  { href: '/resume', label: 'Resume' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 80);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const [pathName, hash] = href.split('#');
    const targetPath = pathName || '/';

    if (location.pathname === targetPath && hash) {
      // 이미 홈에 있으면 바로 스크롤
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
    } else if (hash) {
      // 다른 페이지에 있으면 먼저 이동
      navigate(targetPath);

      // DOM 렌더링 후 스크롤 실행
      setTimeout(() => {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // 홈에서 Home 버튼 클릭 시
      navigate(targetPath);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // 최상단으로 이동
    }
  };

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.navLogo}>
        <span>&lt;</span> JS.dev <span>/&gt;</span>
      </div>
      <ul className={styles.navLinks}>
        {NAV_LINKS.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={e => handleNavClick(e, href)}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
