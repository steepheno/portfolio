import styles from './Features.module.scss';
import type { ReactNode } from 'react';
import useRevealOnScroll from '@/shared/hooks/useRevealOnScroll';

import DashboardDetail from '@/features/devpilot/DashboardDetail';
import ValidationDetail from '@/features/devpilot/ValidationDetail';
import ChatbotDetail from '@/features/devpilot/ChatbotDetail';

// ===== Types =====
interface FeatureItem {
  title: string;
  desc: ReactNode;
  detail: ReactNode;
  imgSrc: string;
}

// ===== Data =====
const FEATURES: FeatureItem[] = [
  {
    title: '01. 빌드한 프로젝트 조회 대시보드',
    desc: (
      <>
        프로젝트별 가장 최근에 실행된 빌드 결과를{' '}
        <strong className={styles.highlight}>Jenkins GUI와 유사</strong>하게 구현했습니다.{' '}
      </>
    ),
    detail: <DashboardDetail />,
    imgSrc: '/images/devpilot/devpilot.png',
  },
  {
    title: '02. 입력 폼 유효성 검사 구현',
    desc: (
      <>
        원활한 Dockerfile, Jenkinsfile 생성을 위해{' '}
        <strong className={styles.highlight}>사용자 입력 오류 방지 UX</strong>를 설계했습니다.
      </>
    ),
    detail: <ValidationDetail />,
    imgSrc: '/images/devpilot/validation.png',
  },
  {
    title: '03. AI 챗봇 연동',
    desc: (
      <>
        챗봇 <strong className={styles.highlight}>채팅창 UI 구현</strong>과 FastAPI로 개발된{' '}
        <strong className={styles.highlight}>챗봇 서버 API 연동</strong> 작업을 수행했습니다.
      </>
    ),
    detail: <ChatbotDetail />,
    imgSrc: '/images/devpilot/chatbot.png',
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
                <img src={feature.imgSrc} />
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
