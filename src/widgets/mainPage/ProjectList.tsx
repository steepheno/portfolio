import styles from './ProjectList.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* ── 데이터 ── */
interface Project {
  number: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  image: string;
}

const PROJECTS: Project[] = [
  {
    number: 'PROJECT 01',
    title: 'Choice & Appear 쇼핑몰 제작 프로젝트',
    slug: 'choice-and-appear',
    description: '사업자 등록 완료된 온라인 쇼핑몰로 운영될 웹 서비스',
    tags: ['React', 'TypeScript', 'Zustand', 'TanStack Query', 'SCSS Modules', 'FSD Architecture'],
    image: '/images/cna/cna.png',
  },
  {
    number: 'PROJECT 02',
    title: 'DOROLAW',
    slug: 'dorolaw',
    description: 'AI 기반 교통사고 과실 비율 분석 및 변호사 상담 매칭 플랫폼',
    tags: [
      'React',
      'TypeScript',
      'TanStack Query',
      'Zustand',
      'Tailwind CSS',
      'AI 분석 레포트 제공',
    ],
    image: '/images/dorolaw/dorolaw.png',
  },
  {
    number: 'PROJECT 03',
    title: 'DevPilot',
    slug: 'devpilot',
    description: '1인 개발자 및 CI/CD 초보자들을 위한 파이프라인 구축 및 배포 자동화 서비스',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Dashboard'],
    image: '/images/devpilot/devpilot.png',
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>(0.1, index * 120);
  const navigate = useNavigate();

  const cardClass = [
    styles.projectCard,
    index % 2 === 1 ? styles.reverse : '',
    isVisible ? styles.visible : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={ref}
      className={cardClass}
      onClick={() => navigate(`/projects/${project.slug}`)}
    >
      <div className={styles.projectPreview}>
        <div className={styles.previewPlaceholder}>
          <div className={styles.previewGrid} />
          <img
            src={project.image}
            alt={project.title}
            className={styles.previewImage}
          />
        </div>
      </div>

      <div className={styles.projectInfo}>
        <div className={styles.projectTop}>
          <span className={styles.projectNumber}>{project.number}</span>
          <span className={styles.projectArrow}>↗</span>
        </div>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <p className={styles.projectDesc}>{project.description}</p>
        <div className={styles.projectTags}>
          {project.tags.map(tag => (
            <span
              key={tag}
              className={styles.projectTag}
            >
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
    <section
      className={styles.projectsSection}
      id="projects"
    >
      <SectionHeader
        number="02"
        title="Project List"
      />

      <div className={styles.projectsGrid}>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}
