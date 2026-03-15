import { useEffect, useRef, useState } from 'react';
import styles from './TechStack.module.scss';

/* ── 데이터 ── */

interface TechCategory {
  label: string;
  items: { name: string; primary?: boolean }[];
}

const TECH_STACK: TechCategory[] = [
  {
    label: 'Core',
    items: [
      { name: 'React', primary: true },
      { name: 'TypeScript', primary: true },
      { name: 'JavaScript (ES6+)' },
      { name: 'HTML5' },
    ],
  },
  {
    label: 'Styling',
    items: [
      { name: 'CSS3', primary: true },
      { name: 'SCSS Modules' },
      { name: 'Tailwind CSS' },
      { name: 'Responsive Design' },
    ],
  },
  {
    label: 'State & Data',
    items: [
      { name: 'Zustand', primary: true },
      { name: 'TanStack Query', primary: true },
      { name: 'Axios' },
      { name: 'REST API' },
    ],
  },
  {
    label: 'Architecture & Tools',
    items: [
      { name: 'FSD Architecture', primary: true },
      { name: 'Git / GitHub' },
      { name: 'Vite' },
      { name: 'Vercel' },
      { name: 'Figma' },
    ],
  },
];

/* ── 스크롤 Reveal 훅 ── */

function useScrollReveal<T extends HTMLElement>(threshold = 0.15, delay = 0) {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, delay]);

  return { ref, isVisible };
}

/* ── 서브 컴포넌트 ── */

function SectionHeader({ number, title }: { number: string; title: string }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}
    >
      <span className={styles.sectionNumber}>{number}</span>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.sectionLine} />
    </div>
  );
}

function RevealBlock({ children }: { children: React.ReactNode }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${isVisible ? styles.visible : ''}`}
    >
      {children}
    </div>
  );
}

/* ── 메인 컴포넌트 ── */

export default function TechStack() {
  return (
    <section className={styles.techSection} id="tech">
      <SectionHeader number="01" title="Tech Stack" />

      <RevealBlock>
        <div className={styles.techGrid}>
          {TECH_STACK.map((cat) => (
            <div key={cat.label} className={styles.techCategory}>
              <div className={styles.techCategoryLabel}>{cat.label}</div>
              <div className={styles.techItems}>
                {cat.items.map((item) => (
                  <span
                    key={item.name}
                    className={`${styles.techItem} ${item.primary ? styles.primary : ''}`}
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealBlock>
    </section>
  );
}