import styles from './Features.module.scss';
import type { ReactNode } from 'react';
import useRevealOnScroll from '@/shared/hooks/useRevealOnScroll';

import FsdDetail from '@/features/cna/FsdDetail';
import FsdCarousel from '@/features/cna/FsdCarousel';
import AuthenticationDetail from '@/features/cna/AuthenticationDetail';

// ===== Types =====
interface FeatureItem {
  title: string;
  desc: ReactNode;
  detail: ReactNode;
  imgSrc?: string;
  mediaSrc?: string;
  carousel?: boolean;
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
    carousel: true,
  },
  {
    title: '02. 인증 아키텍처 구현',
    desc: (
      <>
        HttpOnly 쿠키 기반 인증 아키텍처를 통해{' '}
        <strong className={styles.highlight}>XSS, CSRF 공격에 대응</strong> 가능한 로그인 환경을
        구현했습니다.
      </>
    ),
    detail: <AuthenticationDetail />,
    carousel: true,
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
              <div
                className={`${styles.featureCardMedia} ${feature.carousel ? styles.carouselMedia : ''}`}
              >
                {feature.carousel ? (
                  <FsdCarousel />
                ) : feature.mediaSrc ? (
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
