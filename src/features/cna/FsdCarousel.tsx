import styles from './FsdCarousel.module.scss';
import Carousel from '@/shared/ui/Carousel';

/* ── 레이어 데이터 ── */
interface FsdLayer {
  label: string;
  description: string;
  details: string[];
  image: string;
}

const FSD_LAYERS: FsdLayer[] = [
  {
    label: 'App',
    description: '애플리케이션 진입점 및 전역 설정',
    details: [
      '라우팅 설정 파일 위치',
      '전역 스타일 및 CSS 변수 관리',
      'AuthGuard를 통한 인증 기반 라우트 보호',
    ],
    image: '/images/cna/fsd/app.png',
  },
  {
    label: 'Pages',
    description: '페이지 단위 라우팅을 담당하는 최상위 컴포넌트',
    details: [
      '하나의 페이지 = 하나의 슬라이스(기능)',
      '로그인, 메인페이지, 마이페이지, 장바구니 등',
      '페이지 전용 UI와 props 상태 관리',
      'Features와 Widgets를 조합하여 구성',
    ],
    image: '/images/cna/fsd/pages.png',
  },
  {
    label: 'Widgets',
    description: 'features의 조합으로서 재사용되는 복합 UI 블록',
    details: [
      'Features 레이어의 기능을 조합하여 구성',
      'Header - 전체 페이지 상단 네비게이션',
      'Footer - 하단 정보 영역',
      'MainBanner - 쇼핑몰 대표 이미지 배너',
    ],
    image: '/images/cna/fsd/widgets.png',
  },
  {
    label: 'Features',
    description: '독립된 하나의 기능',
    details: [
      'address - 배송지 데이터 관리 (조회, 수정, 삭제)',
      'coupon - 쿠폰번호 입력 및 등록',
      'login - 로그인 기능 구현',
    ],
    image: '/images/cna/fsd/features.png',
  },
  {
    label: 'Entities',
    description: '비즈니스 도메인의 핵심 데이터 모델',
    details: [
      '도메인 로직 없는 순수한 표현 계층',
      'address - 배송지 데이터 관리',
      'order - 주문 데이터 관리',
    ],
    image: '/images/cna/fsd/entities.png',
  },
  {
    label: 'Shared',
    description: '도메인과 무관한 공통 인프라 요소',
    details: [
      'config - 환경 변수, 상수 관리',
      'lib/axios - API 인터셉터 설정',
      'lib/cookie - 쿠키 유틸리티 함수',
      'ui - 공통 UI 컴포넌트 (ex. Button, Input 등)',
    ],
    image: '/images/cna/fsd/shared.png',
  },
];

/* ── 컴포넌트 ── */
export default function FsdCarousel() {
  return (
    <Carousel
      items={FSD_LAYERS}
      getSlideLabel={layer => `${layer.label} 레이어로 이동`}
      renderSlide={layer => (
        <div className={styles.slideContainer}>
          {/* 이미지 */}
          <div className={styles.imageSection}>
            <img
              src={layer.image}
              alt={`${layer.label} layer folder structure`}
              className={styles.layerImage}
            />
          </div>

          {/* 설명 */}
          <div className={styles.descriptionSection}>
            <h3 className={styles.layerName}>{layer.label}</h3>
            <p className={styles.layerDescription}>{layer.description}</p>
            <ul className={styles.detailList}>
              {layer.details.map((detail, i) => (
                <li key={i} className={styles.detailItem}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    />
  );
}