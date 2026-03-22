import styles from './DevPilot.module.scss';
import useRevealOnScroll from '@/shared/hooks/useRevealOnScroll';
import Features from '@/widgets/projects/devpilot/Features';
import Introduce from '@/widgets/projects/devpilot/Introduce';

// ===== Sub Components =====
function SectionHeader({ label, title }: { label: string; title: string }) {
  return (
    <div className={styles.reveal}>
      <div className={styles.sectionLabel}>{label}</div>
      <h2 className={styles.sectionTitle}>{title}</h2>
    </div>
  );
}

function WindowDots({ className }: { className?: string }) {
  return (
    <>
      <div className={className} />
      <div className={className} />
      <div className={className} />
    </>
  );
}

// ===== Main Component =====
export default function DevPilot() {
  const pageRef = useRevealOnScroll(styles.reveal, styles.visible);

  return (
    <div
      className={styles.page}
      ref={pageRef}
    >
      {/* ===== HERO ===== */}
      <Introduce />

      {/* ==== 메인페이지 이미지 ==== */}
      <section className={styles.mainPreview}>
        <div className={`${styles.mainPreviewFrame} ${styles.reveal}`}>
          <div className={styles.mainPreviewBar}>
            <WindowDots className={styles.mainPreviewDot} />
            <div className={styles.mainPreviewUrl}>devpilot_main</div>
          </div>
          <img
            className={styles.mainPreviewImg}
            src="/images/devpilot/devpilot.png"
          />
        </div>
      </section>

      {/* ===== OVERVIEW ===== */}
      <section className={styles.section}>
        <SectionHeader
          label="01 — Overview"
          title="프로젝트 개요"
        />
        <div className={styles.overview}>
          <ul className={`${styles.overviewText} ${styles.reveal}`}>
            <li>기간: 2025.04 ~ 2025.05 (6주)</li>
            <li>인원: FE 2명, BE 4명</li>
            <li>역할: 프론트엔드 리드 (기여도 50%)</li>
            <li>주제: 오픈소스 SW 개발</li>
          </ul>

          <ul className={`${styles.overviewText} ${styles.reveal}`}>
            <h3>Front-End 기술 스택</h3>
            <li>Core - React, TypeScript</li>
            <li>상태관리 - Zustand</li>
            <li>스타일링 - Tailwind CSS, Shadcn, Lucide React</li>
          </ul>
        </div>
      </section>

      {/* ===== FEATURES ===== */}
      <Features />

      {/* ===== STATS ===== */}
      <div className={styles.statsSection}>
        <SectionHeader
          label="03 — Impact"
          title="프로젝트 성과"
        />

        <li>
          배포 경험이 없는 개발자가 <strong>로컬 환경에서 CI/CD 파이프라인 구축을 쉽게 시작</strong>
          할 수 있도록 진입 장벽을 낮췄습니다.
        </li>
        <li>
          오픈소스 배포를 목표로 개발하며 <strong>외부 공개를 고려한 구조 설계</strong>와 개발
          프로세스를 경험했습니다.
        </li>
      </div>

      {/* ===== ARCHITECTURE ===== */}
      <section className={styles.section}>
        <SectionHeader
          label="04 — Architecture"
          title="프로젝트 아키텍처"
        />
        <div className={`${styles.archDiagram} ${styles.reveal}`}>
          <div className={styles.archFlow}>
            <img
              src="/images/devpilot/architecture.png"
              alt="DevPilot 아키텍처"
            />
          </div>
          <div className={styles.archDetail}>
            <li>
              DevPilot은 사용자의 EC2에 Jenkins를 설치하여, 사용자로부터 입력받은 정보와 Jenkins
              API를 통해 파이프라인 구축을 돕습니다.
            </li>
            <li>
              결과적으로 EC2에는 Spring, React, Nginx, Redis나 MySQL로 개발된 내용이 각각 컨테이너로
              빌드됩니다.
            </li>
            <li>
              Wails 부분은 Desktop 애플리케이션 환경에서 React와 Spring이 요청을 주고받는
              부분입니다.
            </li>
            <li>FastAPI는 AI 챗봇 서버 구축에 사용되었습니다.</li>
          </div>
        </div>
      </section>
    </div>
  );
}
