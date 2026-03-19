import styles from './BoardDetail.module.scss';
import SourceCodeCard from '@/shared/ui/SourceCodeCard';

export default function BoardDetail() {
  return (
    <>
      {/* 최초 구현 및 문제 상황 */}
      <h3 className={styles.title}>1) 최초 구현 및 문제 상황</h3>
      <div className={styles.description}>
        <li>
          staleTime이 5분으로, refetchInterval는 설정되지 않아 5분이 지나기 전에는 게시글 데이터
          갱신이 이루어지지 않았습니다.
        </li>
        <li>
          게시글 등록 API가 Tanstack-Query 캐시와 연결되지 않아, 게시글 등록 성공 후 캐시 무효화가
          이루어지지 않았습니다.
        </li>
        <li>
          이로 인해 새로운 글이 게시되어도 수동 새로고침 없이는{' '}
          <strong>게시판 목록에 반영되지 않는 문제</strong>가 있었습니다.
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
