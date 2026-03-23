import styles from './AuthenticationDetail.module.scss';

export default function AuthenticationDetail() {
  return (
    <>
      {/* 초기 구현 */}
      <h3 className={styles.title}>1) 초기 구현 및 문제 상황</h3>
      <div className={styles.description}>
        <li>
          마이페이지 내 사이드바는 widgets 레이어에, 로그인과 회원가입 기능은 features/auth
          슬라이스에 배치했습니다.
        </li>
        <li>
          그러나 마이페이지의 사이드바는 Header나 Footer처럼 전역에서 쓰이는{' '}
          <strong>복합 UI 블록과는 성격이 다르다</strong>는 문제를 인식했습니다.
        </li>
        <li>
          또한 로그인/회원가입은 '인증' 도메인에 속하지만, 독립적인 페이지와 API를 가지므로{' '}
          <strong>하나의 슬라이스로 묶기에는 결합도가 낮다</strong>고 판단했습니다.
        </li>
      </div>

      {/* 문제 해결 및 성과 */}
      <h3 className={styles.title}>2) 문제 해결 및 성과</h3>
      <div className={styles.description}>
        <li>
          widgets, features, entities 레이어에 대한 혼란을 줄이고자 다음과 같은 규칙을 정해
          리팩토링을 수행했습니다.
        </li>
        <img
          src="/images/cna/fsd/fsd_rule.png"
          alt="FSD 아키텍처 규칙"
        />
        <li>
          마이페이지 내 사이드바는 <strong>features 레이어로 이동</strong>하였고, 로그인과
          회원가입은 각각 <strong>다른 슬라이스로 분리</strong>했습니다.
        </li>
        <li>
          레이어 배치 규칙 수립 후,{' '}
          <strong style={{ color: '#22d3ee' }}>기능 추가 시 일관된 프로젝트 구조를 유지</strong>할
          수 있었습니다.
        </li>
        <li>
          슬라이스를 독립적으로 배치하여 기능 간 의존성이 제거되어{' '}
          <strong style={{ color: '#22d3ee' }}>
            개별 기능의 수정이 다른 기능에 영향을 주지 않게
          </strong>{' '}
          되었습니다.
        </li>
      </div>
    </>
  );
}
