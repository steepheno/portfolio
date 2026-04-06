import styles from './EditorCarousel.module.scss';
import type { ReactNode } from 'react';
import Carousel from '@/shared/ui/Carousel';
import SourceCodeCard from '@/shared/ui/SourceCodeCard';

interface EditorTroubleStep {
  label: string;
  details: ReactNode;
  codeImg: ReactNode;
}

const EDITOR_TROUBLE_STEPS: EditorTroubleStep[] = [
  {
    label: '1. 문제 발생 원인',
    details: (
      <>
        <li>
          문제의 원인은 PostWritePage의 setContent로 인한 state 변경으로, 키보드 입력에 따른{' '}
          <strong>setContent 호출이 트리 전체 리렌더링을 유발</strong>하고 있었습니다.
        </li>
      </>
    ),
    codeImg: (
      <SourceCodeCard
        fileName="React Developer Tools"
        imageSrc="/images/cna/PostWrite1.webp"
      />
    ),
  },
  {
    label: '2. 해결 과정',
    details: (
      <>
        <li>
          React가 기본 제공하는 Profiler 컴포넌트로 PostEditor를 감싸 렌더링 횟수와 소요 시간을
          console에 기록하여 문제를 재확인했습니다.
        </li>
        <li>
          <strong>useState를 useRef로 전환</strong>하여 값은 저장하되, 리렌더링을 유발하지 않도록
          변경했습니다.
        </li>
        <li>
          onChange 함수를 useCallback으로 감싸 함수 참조를 안정시킴으로써 하위 컴포넌트의 불필요한
          리렌더링을 방지했습니다.
        </li>
        <li>
          코드 수정 후 동일 조건으로 재측정한 결과 <strong>리렌더링이 발생하지 않았</strong>습니다.
        </li>
      </>
    ),
    codeImg: (
      <SourceCodeCard
        fileName="src/pages/board/ui/PostWritePage.tsx"
        imageSrc="/images/cna/PostWrite2.png"
      />
    ),
  },
];

export default function EditorTroubleShooting() {
  return (
    <Carousel
      items={EDITOR_TROUBLE_STEPS}
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
