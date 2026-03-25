import styles from './ChoiceAndAppear.module.scss';
import useRevealOnScroll from '@/shared/hooks/useRevealOnScroll';
import Introduce from '@/widgets/projects/cna/Introduce';
import Features from '@/widgets/projects/cna/Features';

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
export default function ChoiceAndAppear() {
  const pageRef = useRevealOnScroll(styles.reveal, styles.visible);

  return (
    <div
      className={styles.page}
      ref={pageRef}
    >
      {/* ===== HERO ===== */}
      <Introduce />

      {/* ==== 메인페이지 영상 ==== */}
      <section className={styles.mainPreview}>
        <div className={`${styles.mainPreviewFrame} ${styles.reveal}`}>
          <div className={styles.mainPreviewBar}>
            <WindowDots className={styles.mainPreviewDot} />
            <div className={styles.mainPreviewUrl}>choice-and-appear.com</div>
          </div>
          <video
            className={styles.mainPreviewImg}
            src="/images/cna/cna_main.mp4"
            autoPlay
            loop
            muted
            playsInline
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
            <li>기간: 2025.11 ~ (진행 중)</li>
            <li>인원: FE 1명, BE 2명</li>
            <li>역할: 프론트엔드 총괄 (기여도 100%)</li>
          </ul>

          <ul className={`${styles.overviewText} ${styles.reveal}`}>
            <h3>Front-End 기술 스택</h3>
            <li>Core - React, TypeScript</li>
            <li>상태관리 - Zustand, Tanstack-Query</li>
            <li>스타일링 - SCSS Modules, Ant Design, Lucide React</li>
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
          FSD 아키텍처를 적용하여 <strong>기능별 유지보수 및 확장에 유리</strong>한 폴더구조를
          구축했습니다.
        </li>
        <li>
          서비스 이용자에게 안전하고 편리한 로그인 환경을 제공하여{' '}
          <strong>보안 안전성을 높였</strong>습니다.
        </li>
        <li>
          미인증 상태에서 보호 페이지 접근 시 로그인 후 원래 페이지로 자동 복귀되도록 함으로써{' '}
          <strong>사용자 경험을 향상</strong>시켰습니다.
        </li>
      </div>

      {/* ===== ARCHITECTURE ===== */}
      {/* <section className={styles.section}>
        <SectionHeader
          label="04 — Architecture"
          title="프로젝트 아키텍처"
        />
        <div className={`${styles.archDiagram} ${styles.reveal}`}>
          <div className={styles.archFlow}>
            <img
              src="/images/dorolaw/architecture.png"
              alt="Dorolaw 아키텍처"
            />
          </div>
          <div className={styles.archDetail}>
            <li>
              배포 서버는 AWS EC2 2개로, 영상 분석용 AI 서버와 게시판 및 변호사 매칭 기능을 담당하는
              백엔드 서버가 있습니다.
            </li>
            <li>외부 서비스로는 카카오 소셜로그인, FCM 알림 기능이 있습니다.</li>
            <li>
              Database는 CRUD가 잦은 게시판 및 상담 매칭 기능의 특성에 맞는 MySQL을 선택하였습니다.
            </li>
            <li>
              Nginx는 들어온 요청을 처리 가능한 내부 서비스로 전달하는 리버스 프록시 역할을
              수행합니다.
            </li>
          </div>
        </div>
      </section> */}
    </div>
  );
}
