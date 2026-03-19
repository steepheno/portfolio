import styles from './DoroLaw.module.scss';
import useRevealOnScroll from '@/shared/hooks/useRevealOnScroll';
import Introduce from '@/widgets/projects/dorolaw/Introduce';
import Features from '@/widgets/projects/dorolaw/Features';

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
export default function DoroLaw() {
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
            <div className={styles.mainPreviewUrl}>dorolaw.com</div>
          </div>
          <video
            className={styles.mainPreviewImg}
            src="/images/dorolaw/dorolaw_main.mp4"
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
            <li>기간: 2025.02 ~ 2025.04 (7주)</li>
            <li>인원: FE 2명, BE 2명, AI 2명</li>
            <li>역할: 프론트엔드 리드 (기여도 50%)</li>
            <li>주제: AI 영상처리</li>
          </ul>

          <ul className={`${styles.overviewText} ${styles.reveal}`}>
            <h3>Front-End 기술 스택</h3>
            <li>Core - React, TypeScript</li>
            <li>상태관리 - Zustand, Tanstack-Query</li>
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
          교통사고 영상 업로드 후 약 20초가 지나면 AI가 분석한 과실 비율 결과를 확인할 수 있습니다.
        </li>
        <li>
          AI 분석 결과를 PDF 파일 형태의 레포트로 저장할 수 있어 사용자의 인터넷 환경과 무관하게
          레포트 확인이 가능합니다.
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
      </section>
    </div>
  );
}
