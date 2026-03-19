import styles from './AiAnalysisDetail.module.scss';
import SourceCodeCard from '@/shared/ui/SourceCodeCard';

export default function AiAnalysisDetail() {
  return (
    <>
      {/* 최초 구현 및 문제 상황 */}
      <h3 className={styles.title}>1) 최초 구현 및 문제 상황</h3>
      <div className={styles.description}>
        <li>
          사용자가 입력한 데이터인 게시글 제목, 영상 파일, 공개 여부 등의 상태를 useState로 개별
          관리했습니다.
        </li>
        <li>
          컴포넌트 분리 과정에서, 데이터 입력 컴포넌트와 분석 요청 버튼 컴포넌트가 분리되어{' '}
          <strong>props drilling</strong> 문제가 발생했습니다.
        </li>
        <li>
          사용자가 첨부한 파일에 대한 검증 로직이 없어 <strong>모든 형식의 파일이 첨부</strong>되는
          문제가 발생했습니다.
        </li>
      </div>

      {/* 문제 해결 및 성과 */}
      <h3 className={styles.title}>2) 문제 해결 및 성과</h3>
      <div className={styles.solutionRow}>
        <SourceCodeCard
          fileName="useUploadStore.ts"
          imageSrc="/images/dorolaw/useUploadStore.png"
        />
        <div className={styles.description}>
          <li>
            Zustand 전역 스토어 useUploadStore를 도입하여 사용자가 입력한 데이터를{' '}
            <strong>중앙 관리</strong>하도록 재설계하였습니다.
          </li>
          <li>
            스토어의 복합 액션에서 <strong>MIME 타입 검증</strong>을 수행하도록 구현하여, video
            타입이 아닌 경우 사용자에게 알리도록 하였습니다.
          </li>
          <li>
            데이터 입력 컴포넌트와 분석 요청 버튼 컴포넌트가 동일한 스토어를 참조하게 되어{' '}
            <strong style={{ color: '#22d3ee' }}>props drilling 없는 데이터 흐름을 구현</strong>
            했습니다.
          </li>
          <li>
            영상 파일 업로드 실패 시 게시글 관련 데이터를 저장하지 않도록 복합 액션을 구현하여,{' '}
            <strong style={{ color: '#22d3ee' }}>영상 없는 게시글 생성 문제를 방지</strong>했습니다.
          </li>
        </div>
      </div>
    </>
  );
}
