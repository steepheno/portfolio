import styles from './Features.module.scss';
import type { ReactNode } from 'react';
import useRevealOnScroll from '@/shared/hooks/useRevealOnScroll';

import FsdDetail from '@/features/cna/FsdDetail';
import FsdCarousel from '@/features/cna/FsdCarousel';
import AuthDetail from '@/features/cna/AuthDetail';

// ===== Types =====
interface FeatureItem {
  title: string;
  desc: ReactNode;
  detail: ReactNode;
  mediaSrc: ReactNode;
  fullMedia?: boolean; // true이면 aspect-ratio 해제, 내부 스크롤 허용
}

// ===== Data =====
const FEATURES: FeatureItem[] = [
  {
    title: '01. FSD 아키텍처 폴더구조 구축',
    desc: (
      <>
        <strong className={styles.highlight}>도메인별 경계가 명확</strong>한 프론트엔드 구조 확립을
        위해 FSD 아키텍처를 선택했습니다.
      </>
    ),
    detail: <FsdDetail />,
    mediaSrc: <FsdCarousel />,
    fullMedia: true,
  },
  {
    title: '02. 인증 아키텍처 구현',
    desc: (
      <>
        쿠키 기반 인증 아키텍처를 통해 <strong className={styles.highlight}>XSS 공격에 대응</strong>{' '}
        가능한 로그인 환경을 구현했습니다.
      </>
    ),
    detail: <AuthDetail />,
    mediaSrc: (
      <video
        src="/images/cna/cna_login.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    ),
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
            <div className={styles.featureCard}>
              {/* 타이틀 및 설명 */}
              <div className={styles.featureCardBody}>
                <div className={styles.featureCardTitle}>{feature.title}</div>
                <div className={styles.featureCardDesc}>{feature.desc}</div>
              </div>

              {/* 미디어 영역 */}
              <div
                className={`${styles.featureCardMedia} ${feature.fullMedia ? styles.fullMedia : ''}`}
              >
                {feature.mediaSrc}
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
