import styles from './ValidationDetail.module.scss';
import SourceCodeCard from '@/shared/ui/SourceCodeCard';

export default function ValidationDetail() {
  return (
    <>
      {/* 최초 구현 및 문제 상황 */}
      <h3 className={styles.title}>1) 최초 구현 및 문제 상황</h3>
      <div className={styles.description}>
        <li>
          required로 HTML 기본 유효성 검사만 수행하였고, 검증 실패 시 :invalid 셀렉터로 첫 번째
          미입력 필드로 포커스가 이동되도록 구현했습니다.
        </li>
        <li>
          포트 번호 입력 필드가 <strong>기본값으로 0을 반환</strong>하고 있어 미입력 여부를 정확히
          판단하지 못했습니다.
        </li>
        <li>
          프론트엔드 환경 선택 옵션의 기본값 '선택하세요'가 문자열로 인식되어{' '}
          <strong>기본값으로도 required 검증을 그대로 통과</strong>했습니다.
        </li>
        <li>
          특정 <strong>필드를 건드리지 않고 '다음' 버튼을 클릭</strong>하면 에러 메시지가 표시되지
          않고 다음 단계로 넘어갔습니다.
        </li>
      </div>

      {/* 문제 해결 과정 */}
      <h3 className={styles.title}>2) 문제 해결 과정</h3>
      <div className={styles.solutionRow}>
        <SourceCodeCard
          fileName="DockerSettingsPage.tsx"
          imageSrc="/images/devpilot/validation_code.png"
        />

        <SourceCodeCard
          fileName="RepositoryForm.tsx"
          imageSrc="/images/devpilot/untouch_field.png"
        />
      </div>
      <div className={styles.description}>
        <li>
          reportValidity( ) 통과 후 브라우저가 잡지 못하는 케이스를 store 상태값 기반으로{' '}
          <strong>커스텀 검증 단계를 추가</strong>했습니다.
        </li>
        <li>
          포트번호 미입력은 <strong>falsy 체크</strong>로, 기본값 선택 상태는{' '}
          <strong>'option'과의 일치 비교 연산</strong>을 통해 감지하도록 구현했습니다.
        </li>
        <li>
          각 입력 필드에는 <strong>isTry</strong> 플래그를 두어 validateUntouchedFields( ) 함수로{' '}
          <strong>터치되지 않은 필드만 추가로 검증</strong>하도록 구현했습니다.
        </li>
      </div>

      {/* 성과 */}
      <h3 className={styles.title}>3) 성과</h3>
      <div className={styles.description}>
        <li>
          검증 실패 시 해당 필드로{' '}
          <strong style={{ color: '#22d3ee' }}>포커스가 자동으로 이동</strong>되어 사용자가 누락된
          입력값을 즉시 인지하도록 개선했습니다.
        </li>
        <li>
          필수값 미입력 상태에서 다음 단계로 넘어가는 것을 방지하여{' '}
          <strong style={{ color: '#22d3ee' }}>
            Dockerfile, Jenkinsfile이 잘못 생성되지 않도록
          </strong>{' '}
          설정했습니다.
        </li>
      </div>
    </>
  );
}
