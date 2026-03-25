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
          초기 게시글 CRUD API가 Tanstack-Query 캐시와 연결되지 않아, 게시글 등록 성공 후 캐시
          무효화가 이루어지지 않았습니다.
        </li>
        <li>
          이로 인해 새로운 글이 게시되어도{' '}
          <strong>수동 새로고침 없이 게시판 목록에 반영되지 않는 문제</strong>가 있었습니다.
        </li>
      </div>

      {/* 문제 해결 및 성과 */}
      <h3 className={styles.title}>2) 문제 해결 및 성과</h3>
      <div className={styles.solutionRow}>
        <SourceCodeCard
          fileName="queries.ts"
          imageSrc="/images/dorolaw/queries.png"
        />
        <div className={styles.description}>
          <li>
            <strong>staleTime = 0</strong>으로 설정하여 데이터를 즉시 stale 상태로 마킹하고,
            refetchInterval을 30초로 설정하였습니다.
          </li>
          <li>
            게시글 등록 API를 useMutation과 연동하고, onSuccess 콜백에서{' '}
            <strong>invalidateQueries를 호출</strong>하여 기존 캐시 데이터를 무효화했습니다.
          </li>
          <li>
            이를 통해 페이지 복귀, 탭 전환, 네트워크 재연결된 경우와 더불어{' '}
            <strong style={{ color: '#22d3ee' }}>30초 주기 자동 갱신</strong>이 이루어지도록
            개선했습니다.
          </li>
          <li>
            또한 페이지 전환 시 이전 데이터를 유지하도록 placeholderData에 keepPreviousData를
            적용하여 <strong style={{ color: '#22d3ee' }}>깜박임 없는 페이지네이션</strong>을
            구현했습니다.
          </li>
        </div>
      </div>
    </>
  );
}
