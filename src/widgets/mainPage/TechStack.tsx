import styles from './TechStack.module.scss';
import type { IconType } from 'react-icons';
import { useEffect, useRef, useState } from 'react';
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiSass,
  SiTailwindcss,
  SiReactquery,
  SiAxios,
  SiMysql,
  SiGit,
  SiVercel,
  SiJirasoftware,
} from 'react-icons/si';

/* ── 데이터 ── */
interface TechItem {
  name: string;
  icon: IconType | string; // IconType → react-icons, string → 이미지 경로
  color: string;
  primary?: boolean;
}

interface TechCategory {
  label: string;
  items: TechItem[];
}

const TECH_STACK: TechCategory[] = [
  {
    label: 'Core',
    items: [
      { name: 'React', icon: SiReact, color: '#61DAFB', primary: true },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        color: '#3178C6',
        primary: true,
      },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
    ],
  },
  {
    label: 'Styling',
    items: [
      { name: 'CSS3', icon: SiCss, color: '#1572B6', primary: true },
      { name: 'SCSS Modules', icon: SiSass, color: '#CC6699' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    ],
  },
  {
    label: 'State & Database',
    items: [
      { name: 'Zustand', icon: '/icons/zustand.svg', color: '#433E38', primary: true },
      {
        name: 'TanStack Query',
        icon: SiReactquery,
        color: '#FF4154',
        primary: true,
      },
      { name: 'Axios', icon: SiAxios, color: '#5A29E4' },
      { name: 'MySQL', icon: SiMysql, color: '#00758F' },
    ],
  },
  {
    label: 'Tools & Collaboration',
    items: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Vite', icon: '/icons/vite.svg', color: '#646CFF', primary: true },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff' },
      { name: 'Atlassian Jira', icon: SiJirasoftware, color: '#0052CC' },
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
      { threshold }
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

/* ── 카드 컴포넌트 ── */
function TechCard({ item }: { item: TechItem }) {
  return (
    <div className={`${styles.techCard} ${item.primary ? styles.primary : ''}`}>
      <div className={styles.techIconWrap}>
        {typeof item.icon === 'string' ? (
          <img
            src={item.icon}
            alt={item.name}
            className={styles.techImg}
          />
        ) : (
          <item.icon
            className={styles.techIcon}
            style={{ color: item.color }}
          />
        )}
      </div>
      <span className={styles.techName}>{item.name}</span>
    </div>
  );
}

/* ── 메인 컴포넌트 ── */
export default function TechStack() {
  return (
    <section
      className={styles.techSection}
      id="tech"
    >
      <SectionHeader
        number="01"
        title="Tech Stack"
      />

      <RevealBlock>
        <div className={styles.techGrid}>
          {TECH_STACK.map(cat => (
            <div
              key={cat.label}
              className={styles.techCategory}
            >
              <div className={styles.techCategoryLabel}>{cat.label}</div>
              <div className={styles.techItems}>
                {cat.items.map(item => (
                  <TechCard
                    key={item.name}
                    item={item}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </RevealBlock>
    </section>
  );
}
