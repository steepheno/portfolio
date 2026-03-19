import styles from './SavePdfDetail.module.scss';
import SourceCodeCard from '@/shared/ui/SourceCodeCard';

export default function SavePdfDetail() {
  return (
    <>
      {/* 최초 구현 및 문제 상황 */}
      <h3 className={styles.title}>1) 최초 구현 및 문제 상황</h3>
      <div className={styles.description}>
        <li>
          AI 분석 레포트를 PDF로 저장할 때, 스크롤을 내려야 보이는 하단 콘텐츠가 PDF 파일에 담기지
          않았습니다.
        </li>
        <li>
          react-to-pdf 라이브러리는 내부적으로 html2canvas를 사용하여 DOM을 캡처하는데, overflow:
          hidden 속성과 고정 height 높이 스타일 때문에 <strong>화면에 보이는 영역만 캡처</strong>
          되고 있었습니다.
        </li>
      </div>

      {/* 문제 해결 및 성과 */}
      <h3 className={styles.title}>2) 문제 해결 및 성과</h3>
      <div className={styles.solutionRow}>
        <SourceCodeCard
          fileName="AnalysisReportTab.tsx"
          imageSrc="/images/dorolaw/save-pdf-style.png"
        />
        <div className={styles.description}>
          <li>
            PDF 생성 직전 컴포넌트의 기존 스타일을 저장할 자료구조 Map을 생성하고,{' '}
            <strong>PDF 출력용 임시 스타일을 적용</strong>했습니다.
          </li>
          <li>
            최상위 요소만 변경하면 중첩된 자식 요소 스타일의 제약이 남아있을 수 있어,{' '}
            <strong>재귀함수</strong>로 모든 하위 요소에 <strong>동일한 임시 스타일을 적용</strong>
            했습니다.
          </li>
          <li>
            PDF 생성 후에는 성공/실패 여부와 관계 없이 기존 스타일로 복원하면서 Map.clear() 함수로
            메모리 누수를 방지했습니다.
          </li>
          <li>
            결과적으로 UI 깨짐 현상이나 메모리 누수 현상 없이 AI 분석 레포트를{' '}
            <strong style={{ color: '#22d3ee' }}>PDF 파일로 저장하여 사용자 편의성을 확보</strong>
            하였습니다.
          </li>
        </div>
      </div>
    </>
  );
}
