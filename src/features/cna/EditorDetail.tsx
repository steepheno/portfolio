import styles from './EditorDetail.module.scss';
import EditorCarousel from './EditorCarousel';
import EditorTroubleShooting from './EditorTroubleShooting';

function WindowDots({ className }: { className?: string }) {
  return (
    <>
      <div className={className} />
      <div className={className} />
      <div className={className} />
    </>
  );
}

export default function EditorDetail() {
  return (
    <>
      {/* 초기 구현 */}
      <h3 className={styles.title}>1) 라이브러리 선택 이유</h3>
      <div className={styles.description}>
        <li>
          에디터 구현을 위해 사용할 수 있는 라이브러리로 Tiptap, Toast UI Editor, Quill 3가지가
          있었습니다.
        </li>
        <li>
          Toast UI Editor는 Vanilla JS 기반으로 개발되어 React와의 궁합이 좋지 않았고, 쇼핑몰
          게시판의 특성을 살려줄 Markdown 모드를 지원하지 않았습니다. 그리고 Quill은 수 년째
          유지보수가 멈춰 있었습니다.
        </li>
        <li>
          따라서 <strong>React를 공식 지원</strong>하면서 <strong>TypeScript로 개발</strong>된
          Tiptap 라이브러리를 선택하였습니다.
        </li>
        <li>
          또한 기능만 제공하고 UI를 직접 구성하는 <strong>헤드리스 아키텍처</strong>가 FSD
          아키텍처의 <strong>컴포넌트 분리 원칙과도 잘 맞는다</strong>고 판단하여 Tiptap
          라이브러리로 구현했습니다.
        </li>
      </div>

      <h3 className={styles.title}>2) 구현 과정</h3>
      <div className={styles.description}>
        {/* 설명 Carousel */}
        <EditorCarousel />
      </div>

      {/* 트러블슈팅 */}
      <h3 className={styles.title}>3) 문제 해결 과정</h3>
      <div className={styles.description}>
        <li>
          React Developer Tools로 에디터 성능을 점검하던 중, 키 입력 때마다{' '}
          <strong>전체 컴포넌트 트리가 리렌더링되는 문제</strong>를 발견했습니다.
        </li>
        <li>
          <strong style={{ color: 'orange' }}>한글 20자 입력 시 58번의 리렌더링</strong>이
          발생했습니다.
        </li>

        {/* 리렌더링 영상 */}
        <div className={styles.mainPreview}>
          <div className={`${styles.mainPreviewFrame} ${styles.reveal}`}>
            <div className={styles.mainPreviewBar}>
              <WindowDots className={styles.mainPreviewDot} />
              <div className={styles.mainPreviewUrl}>rendering_trouble</div>
            </div>
            <video
              className={styles.mainPreviewImg}
              src="/images/cna/rendering_bug.mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
        </div>

        {/* Carousel */}
        <EditorTroubleShooting />
      </div>

      <h3 className={styles.title}>4) 성과</h3>
      <div className={styles.description}>
        <li>
          useState를 useRef로 전환하여 키보드 입력 시 발생하던{' '}
          <strong style={{ color: '#22d3ee' }}>58회의 리렌더링을 제거</strong>했습니다.
        </li>
        <li>
          useCallback으로 함수 참조를 안정시켜 다른 state 추가 시에도 에디터 하위 트리에{' '}
          <strong style={{ color: '#22d3ee' }}>불필요한 리렌더링이 전파되지 않도록 방지</strong>
          했습니다.
        </li>
      </div>
    </>
  );
}
