import styles from './Features.module.scss';
import type { ReactNode } from 'react';
import useRevealOnScroll from '@/shared/hooks/useRevealOnScroll';

import AiAnalysisDetail from '@/features/dorolaw/AiAnalysisDetail';
import BoardDetail from '@/features/dorolaw/BoardDetail';
import SavePdfDetail from '@/features/dorolaw/SavePdfDetail';

// ===== Types =====
interface CodeItem {
  filename: string;
  title: string;
  desc: string;
  imageSrc?: string;
}

interface FeatureItem {
  title: string;
  desc: ReactNode;
  detail: ReactNode;
  imgSrc?: string;
  mediaSrc?: string;
  codeItems?: CodeItem[];
}

// ===== Data =====
const FEATURES: FeatureItem[] = [
  {
    title: '01. 영상 업로드를 위한 Zustand 상태 관리',
    desc: (
      <>
        게시글 제목, 영상 첨부 상태, Drag & Drop 여부를{' '}
        <strong className={styles.highlight}>전역 스토어</strong>로 관리하도록 구현했습니다.
      </>
    ),
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
    title: '02. 게시판 구현',
    desc: (
      <>
        Tanstack-Query의 캐시 무효화 및 자동 갱신 기능을 통해 게시글 데이터의{' '}
        <strong className={styles.highlight}>최신 상태 동기화</strong>를 구현했습니다.
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
    title: '03. AI 분석 레포트 저장',
    desc: (
      <>
        AI 분석 결과 내용을 <strong className={styles.highlight}>PDF 파일로 저장</strong>할 수 있어
        언제 어디서나 쉽게 확인할 수 있습니다.
      </>
    ),
    detail: <SavePdfDetail />,
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
