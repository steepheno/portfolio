import styles from './AuthDetail.module.scss';
import SourceCodeCard from '@/shared/ui/SourceCodeCard';
import AuthCarousel from './AuthCarousel';

export default function AuthenticationDetail() {
  return (
    <>
      {/* 초기 구현 */}
      <h3 className={styles.title}>1) 초기 구현 방향</h3>
      <div className={styles.description}>
        <li>
          개발 초기 로그인 흐름은 세션 만료 시 401 에러와 함께 사용자가 다시 로그인하는
          방식이었습니다.
        </li>
        <li>
          이 구조는 쿠키에 담겨 있는 <strong>refreshToken을 활용하지 못하</strong>면서도{' '}
          <strong>XSS 공격에 취약</strong>함을 파악했습니다.
        </li>
        <li>
          따라서 refreshToken으로 <strong>로그인 세션을 자동으로 갱신</strong>하도록 리팩토링을
          수행했습니다.
        </li>

        {/* 코드 이미지 */}
        <div className={styles.solutionRow}>
          <SourceCodeCard
            fileName="axiosInstance.ts"
            imageSrc="/images/cna/refactor.png"
          />
          <div className={styles.description}>
            <li>
              요청 처리 대상 필터링을 위해 <strong>401이 아닌 에러</strong>와{' '}
              <strong>재시도한 요청</strong>에 대해서는 인터셉터가 개입하지 않도록 설정했습니다.
            </li>
            <li>
              accessToken이 만료되면 로그아웃 API 요청이 401 응답을 받으므로, 의도치 않은 동작
              방지를 위해 <strong>로그아웃 시에는 갱신 요청을 보내지 않도록</strong> 하였습니다.
            </li>
            <li>
              <strong>refreshToken 만료</strong> 시 갱신 요청을 보내면 401 응답을 받으므로, 별도의{' '}
              <strong>갱신 요청 없이 로그아웃</strong> 하도록 설정했습니다.
            </li>
            <li>
              갱신 성공 후 원래 요청을 재시도했을 때 401이 발생하면 요청 무한루프에 빠질 수
              있으므로, 갱신 시도 전 <strong>_retry = true</strong>로 설정하여 무한루프를
              방지했습니다.
            </li>
          </div>
        </div>
      </div>

      {/* 트러블슈팅 */}
      <h3 className={styles.title}>2) 문제 해결 과정</h3>
      <div className={styles.description}>
        <li>리팩토링 도중 로그아웃 관련 2가지 문제 상황을 마주했습니다.</li>

        {/* Carousel */}
        <AuthCarousel />
      </div>

      <h3 className={styles.title}>3) 성과</h3>
      <div className={styles.description}>
        <li>
          accessToken 만료 시{' '}
          <strong style={{ color: '#22d3ee' }}>자동으로 로그인 세션이 연장</strong>되도록
          하였습니다.
        </li>
        <li>
          로그아웃 시 accessToken과 refreshToken이 모두 클라이언트 쿠키에서 삭제되어{' '}
          <strong style={{ color: '#22d3ee' }}>토큰 탈취 가능성을 차단</strong>했습니다.
        </li>
        <li>
          미인증 상태에서 보호 페이지 접근 시 로그인이 성공적으로 이루어지면 원래 이동하려던
          페이지로 자동 복귀되도록 함으로써 <strong style={{ color: '#22d3ee' }}>UX를 향상</strong>
          시켰습니다.
        </li>
      </div>
    </>
  );
}
