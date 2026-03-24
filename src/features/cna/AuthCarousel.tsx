import styles from './AuthCarousel.module.scss';
import type { ReactNode } from 'react';
import Carousel from '@/shared/ui/Carousel';
import SourceCodeCard from '@/shared/ui/SourceCodeCard';

interface AuthStep {
  label: string;
  details: ReactNode;
  codeImg: ReactNode;
}

const AUTH_STEPS: AuthStep[] = [
  {
    label: '1. 로그아웃 후 쿠키에 존재하는 refreshToken',
    details: (
      <>
        <li>
          세션 만료 시점과는 달리, 로그아웃을 하면 모든 토큰이 백엔드에서 블랙리스트 처리되므로
          클라이언트 측에서도 삭제되어야 했습니다.
        </li>
        <li>
          최초 구현 시에는 authApi에 로그아웃 API 함수를 정의했음에도 실제로는 Zustand 상태만
          초기화되어 refreshToken이 쿠키에 남아 있었습니다.
        </li>
        <li>
          이 토큰으로 refresh 요청을 보내면 <strong>accessToken이 새로 발급</strong>될 수 있다는{' '}
          <strong>보안 취약점</strong>이 존재했습니다.
        </li>
        <li>
          이를 해결하고자 커스텀 훅 useLogout을 구현하여 <strong>refreshToken을 만료 처리</strong>
          하고, 클라이언트에서 <strong>쿠키 삭제 및 로그인 상태 초기화</strong>되도록 구현했습니다.
        </li>
      </>
    ),
    codeImg: (
      <SourceCodeCard
        fileName="useLogout.ts"
        imageSrc="/images/cna/useLogout.png"
      />
    ),
  },
  {
    label: '2. 로그아웃 후 로그인 페이지로 redirect 되는 문제',
    details: (
      <>
        <li>
          보호된 페이지에서 로그아웃을 하면 메인 페이지로 이동해야 하지만, 현재 경로를 기억한 채로
          로그인 페이지로 redirect 되었습니다.
        </li>
        <li>
          문제의 원인은 Zustand의 로그인 상태가 변경되면서 PrivateRoute가 리렌더링 되어 useNavigate(
          ) 라우팅보다 <strong>로그인 페이지로의 redirect가 먼저 실행</strong>된다는 점이었습니다.
        </li>
        <li>
          이를 해결하기 위해 <strong>window.location.replace( )</strong>로 페이지를 새로 로드하여
          PrivateRoute 리렌더링이 개입하지 않도록 설정했습니다.
        </li>
      </>
    ),
    codeImg: (
      <SourceCodeCard
        fileName="useLogout.ts"
        imageSrc="/images/cna/privateRoute.png"
      />
    ),
  },
];

export default function AuthCarousel() {
  return (
    <Carousel
      items={AUTH_STEPS}
      getSlideLabel={step => `${step.label}로 이동`}
      renderSlide={step => (
        <div className={styles.slideContainer}>
          <div className={styles.imageSection}>{step.codeImg}</div>
          <div className={styles.descriptionSection}>
            <h3 className={styles.layerName}>{step.label}</h3>
            <ul className={styles.detailList}>{step.details}</ul>
          </div>
        </div>
      )}
    />
  );
}
