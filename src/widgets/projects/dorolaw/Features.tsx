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
  desc: string;
  mediaLabel: string;
  detail: ReactNode;
  // mediaSrc?: string;
  codeItems?: CodeItem[];
}

// ===== Data =====
const FEATURES: FeatureItem[] = [
  {
    icon: '🎥',
    title: 'AI 과실비율 분석',
    desc: '블랙박스/CCTV 영상을 업로드하면 AI 모델이 사고 상황을 분석하고 과실비율을 자동으로 산출합니다.',
    mediaLabel: 'GIF · 영상 업로드 → AI 분석 흐름',
    detail: <AiAnalysisDetail />,
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
    title: '분석 게시판 구현',
    desc: 'AI 분석 결과를 게시판에서 공유하고, 법률상담 게시판에서 다른 사용자와 경험을 나눌 수 있습니다.',
    mediaLabel: 'GIF · 게시판 CRUD & 검색',
    detail: <BoardDetail />,
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
    title: 'AI 분석 레포트 PDF 저장',
    desc: 'FCM 기반 푸시 알림으로 분석 완료, 상담 예약 확정 등 주요 이벤트를 실시간으로 전달합니다.',
    mediaLabel: 'GIF · FCM 푸시 알림 동작',
    detail: <SavePdf />,
    codeItems: [
      {
        filename: 'firebase-messaging.js',
        title: 'FCM Push Notification — 실시간 알림',
        desc: 'Firebase Cloud Messaging을 활용한 푸시 알림 초기화 및 토큰 등록, 포그라운드 메시지 수신 처리',
      },
    ],
  },
];

// ===== Sub Components =====
function MediaPlaceholder({ icon, label }: { icon: string; label: string }) {
  return (
    <div className={styles.featureCardMediaPlaceholder}>
      <div className={styles.placeholderIcon}>{icon}</div>
      <span className={styles.placeholderText}>{label}</span>
    </div>
  );
}

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
                {/* 이미지가 준비되면 아래 주석을 해제하고 mediaSrc 필드를 활성화하세요 */}
                {/* <img src={feature.mediaSrc} alt={`${feature.title} 데모`} /> */}
                <MediaPlaceholder
                  icon={feature.icon}
                  label={feature.mediaLabel}
                />
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
