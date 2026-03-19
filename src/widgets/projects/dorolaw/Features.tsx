import styles from './Features.module.scss';
import type { ReactNode } from 'react';
import useRevealOnScroll from '@/shared/hooks/useRevealOnScroll';

import AiAnalysisDetail from '@/features/dorolaw/AiAnalysisDetail';
import BoardDetail from '@/features/dorolaw/BoardDetail';
import SavePdf from '@/features/dorolaw/SavePdf';

// ===== Types =====
interface CodeItem {
  filename: string;
  title: string;
  desc: string;
  imageSrc?: string;
}

interface FeatureItem {
  icon: string;
  title: string;
  desc: string | ReactNode;
  detail: ReactNode;
  imgSrc?: string;
  mediaSrc?: string;
  codeItems?: CodeItem[];
}

// ===== Data =====
const FEATURES: FeatureItem[] = [
  {
    icon: '🎥',
    title: '01. AI 과실비율 분석',
    desc: '블랙박스 영상을 업로드하면 AI 모델이 사고 상황 분석 결과와 과실 비율을 알려드립니다.',
    detail: <AiAnalysisDetail />,
    mediaSrc: '/images/dorolaw/analysis.mp4',
    codeItems: [
      {
        filename: 'axiosInstance.js',
        title: 'Axios Interceptor — 토큰 자동 갱신',
        desc: '401 응답 시 Refresh Token으로 Access Token을 자동 갱신하고, _retry 플래그로 무한 루프를 방지하는 방어적 코딩',
      },
    ],
  },
  {
    icon: '📊',
    title: '02. 게시판 구현',
    desc: (
      <>
        <strong className={styles.highlight}>AI 분석 게시판</strong>,{' '}
        <strong className={styles.highlight}>법률 상담 게시판</strong> 2종류가 있어 다른 사용자의
        분석 결과와 상담 내용을 함께 확인할 수 있습니다.
      </>
    ),
    detail: <BoardDetail />,
    imgSrc: '/images/dorolaw/board.png',
    codeItems: [
      {
        filename: 'router/guard.js',
        title: 'Route Guard — 인증 기반 라우팅',
        desc: '인증 상태에 따라 접근을 제어하고, 미인증 사용자를 로그인 페이지로 리다이렉트하는 네비게이션 가드',
      },
    ],
  },
  {
    icon: '🔔',
    title: '03. AI 분석 레포트 저장',
    desc: (
      <>
        AI 분석 결과 내용을 <strong className={styles.highlight}>PDF 파일로 저장</strong>할 수 있어
        언제 어디서나 쉽게 확인할 수 있습니다.
      </>
    ),
    detail: <SavePdf />,
    mediaSrc: '/images/dorolaw/report.mp4',
    codeItems: [
      {
        filename: 'firebase-messaging.js',
        title: 'FCM Push Notification — 실시간 알림',
        desc: 'Firebase Cloud Messaging을 활용한 푸시 알림 초기화 및 토큰 등록, 포그라운드 메시지 수신 처리',
      },
    ],
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
        <h2 className={styles.sectionTitle}>핵심 기능</h2>
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
                <div className={styles.featureCardIcon}>{feature.icon}</div>
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
