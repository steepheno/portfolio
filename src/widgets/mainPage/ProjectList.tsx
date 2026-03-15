import { useEffect, useRef, useState } from 'react';
import styles from './ProjectList.module.scss';

/* ── 데이터 ── */

interface Project {
  number: string;
  title: string;
  description: string;
  tags: string[];
  mockLayout: 'grid' | 'sidebar' | 'list';
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    number: 'PROJECT 01',
    title: 'Shopping Mall',
    description:
      'FSD 아키텍처 기반 쇼핑몰 프로젝트. JWT 인증, 주소 관리 CRUD, 주문 내역 조회, 페이지네이션 등 실무 수준의 기능을 구현했습니다.',
    tags: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'SCSS Modules', 'FSD'],
    mockLayout: 'grid',
    featured: true,
  },
  {
    number: 'PROJECT 02',
    title: 'AI 사고 분석 서비스',
    description:
      '교통사고 영상 기반 과실 분석 플랫폼. 프론트엔드 리드로 EC2 영상 업로드, PDF 생성, 실시간 알림을 구현했습니다.',
    tags: ['React', 'TanStack Query', 'Zustand', 'RabbitMQ'],
    mockLayout: 'sidebar',
  },
  {
    number: 'PROJECT 03',
    title: 'DevPilot',
    description:
      'CI/CD 배포 자동화 대시보드. FastAPI + Jenkins API 연동으로 배포 파이프라인을 시각화했습니다.',
    tags: ['React', 'FastAPI', 'Jenkins', 'Dashboard'],
    mockLayout: 'list',
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

function MockBrowser({ layout }: { layout: 'grid' | 'sidebar' | 'list' }) {
  return (
    <div className={styles.mockBrowser}>
      <div className={styles.mockBar}>
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
        <span className={styles.mockDot} />
      </div>
      <div className={styles.mockContent}>
        {layout === 'grid' && (
          <>
            <div className={`${styles.mockLine} ${styles.w60}`} />
            <div className={`${styles.mockLine} ${styles.w80}`} />
            <div className={styles.mockBlocks}>
              <div className={styles.mockBlock} />
              <div className={styles.mockBlock} />
              <div className={styles.mockBlock} />
            </div>
            <div className={styles.mockBlocks}>
              <div className={styles.mockBlock} />
              <div className={styles.mockBlock} />
              <div className={styles.mockBlock} />
            </div>
          </>
        )}
        {layout === 'sidebar' && (
          <>
            <div className={`${styles.mockLine} ${styles.w40}`} />
            <div className={styles.mockSidebarLayout}>
              <div className={styles.mockSidebar}>
                {[0, 1, 2, 3].map((i) => (
                  <div key={i} className={styles.mockSidebarItem} />
                ))}
              </div>
              <div className={styles.mockMainArea}>
                <div className={styles.mockMainBlock} />
                <div className={`${styles.mockLine} ${styles.w70}`} />
              </div>
            </div>
          </>
        )}
        {layout === 'list' && (
          <>
            <div className={`${styles.mockLine} ${styles.w80}`} />
            <div className={`${styles.mockLine} ${styles.w60}`} />
            <div className={styles.mockBlocks}>
              <div className={styles.mockBlock} />
              <div className={styles.mockBlock} />
            </div>
            <div className={`${styles.mockLine} ${styles.w40}`} />
          </>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1, index * 120);

  const cardClass = [
    styles.projectCard,
    project.featured ? styles.featured : '',
    isVisible ? styles.visible : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={cardClass}>
      {project.featured && (
        <div className={styles.projectPreview}>
          <div className={styles.previewPlaceholder}>
            <div className={styles.previewGrid} />
            <div className={styles.previewMock}>
              <MockBrowser layout={project.mockLayout} />
            </div>
          </div>
        </div>
      )}

      <div className={styles.projectInfo}>
        <div className={styles.projectTop}>
          <span className={styles.projectNumber}>{project.number}</span>
          <span className={styles.projectArrow}>↗</span>
        </div>

        {!project.featured && (
          <div className={styles.projectPreview}>
            <div className={styles.previewPlaceholder}>
              <div className={styles.previewGrid} />
              <div className={styles.previewMock}>
                <MockBrowser layout={project.mockLayout} />
              </div>
            </div>
          </div>
        )}

        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>
        <div className={styles.projectTags}>
          {project.tags.map((tag) => (
            <span key={tag} className={styles.projectTag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── 메인 컴포넌트 ── */

export default function ProjectList() {
  return (
    <section className={styles.projectsSection} id="projects">
      <SectionHeader number="02" title="Selected Projects" />

      <div className={styles.projectsGrid}>
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}