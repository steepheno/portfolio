import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollRestoration() {
  const { pathname } = useLocation();
  const prevPath = useRef(pathname);

  // 스크롤할 때마다 현재 경로의 위치 저장
  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem(`scroll:${pathname}`, String(window.scrollY));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // 경로 변경 시 복원
  useEffect(() => {
    if (prevPath.current !== pathname) {
      prevPath.current = pathname;

      const saved = sessionStorage.getItem(`scroll:${pathname}`);
      if (saved) {
        requestAnimationFrame(() => {
          window.scrollTo(0, Number(saved));
        });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname]);

  return null;
}
