import styles from './Features.module.scss';
import type { ReactNode } from 'react';
import useRevealOnScroll from '@/shared/hooks/useRevealOnScroll';

import AiAnalysisDetail from '@/features/dorolaw/AiAnalysisDetail';
import BoardDetail from '@/features/dorolaw/BoardDetail';
import SavePdfDetail from '@/features/dorolaw/SavePdfDetail';

// ===== Types =====
interface FeatureItem {
  title: string;
  desc: ReactNode;
  detail: ReactNode;
  imgSrc?: string;
  mediaSrc?: string;
}

// ===== Data =====
const FEATURES: FeatureItem[] = [
  {
    title: '01. 영상 업로드를 위한 Zustand 상태 관리',
    desc: (
      <>
        게시글 제목, 영상 첨부 상태, Drag & Drop 여부를{' '}
        <strong className={styles.highlight}>전역 스토어로 관리</strong>하도록 구현했습니다.
      </>
    ),
    detail: <AiAnalysisDetail />,
    mediaSrc: '/images/dorolaw/analysis.mp4',
  },
  {
    title: '02. 게시판 구현',
    desc: (
      <>
        Tanstack-Query의 캐시 무효화 및 자동 갱신 기능을 통해{' '}
        <strong className={styles.highlight}>게시글 데이터의 최신 상태 동기화</strong>를
        구현했습니다.
      </>
    ),
    detail: <BoardDetail />,
    imgSrc: '/images/dorolaw/board.png',
  },
  {
    title: '03. AI 분석 레포트 저장',
    desc: (
      <>
        react-to-pdf 라이브러리를 활용하여 분석 레포트 컴포넌트를{' '}
        <strong className={styles.highlight}>PDF 파일로 저장</strong>하는 기능을 구현했습니다.
      </>
    ),
    detail: <SavePdfDetail />,
    mediaSrc: '/images/dorolaw/report.mp4',
  },
];

// ===== Main =====
export default function Features() {
  const sectionRef = useRevealOnScroll(styles.reveal, styles.visible);

  return (
    <section
      className={styles.section}
      ref={sectionRef}
    >
      <div className={styles.reveal}>
        <div className={styles.sectionLabel}>02 — Features</div>
        <h2 className={styles.sectionTitle}>구현 내용</h2>
      </div>

      <div className={styles.featuresGrid}>
        {FEATURES.map(feature => (
          <div
            key={feature.title}
            className={`${styles.featureItem} ${styles.reveal}`}
          >
            {/* 기능 카드 */}
            <div className={styles.featureCard}>
              {/* 타이틀 및 설명 */}
              <div className={styles.featureCardBody}>
                <div className={styles.featureCardTitle}>{feature.title}</div>
                <div className={styles.featureCardDesc}>{feature.desc}</div>
              </div>

              {/* 기능 동작 이미지 */}
              <div className={styles.featureCardMedia}>
                {feature.mediaSrc ? (
                  <video
                    src={feature.mediaSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img src={feature.imgSrc} />
                )}
              </div>

              {/* 구현 과정 */}
              <div className={styles.detail}>{feature.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
