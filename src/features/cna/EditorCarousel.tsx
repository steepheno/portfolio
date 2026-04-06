import styles from './EditorCarousel.module.scss';
import type { ReactNode } from 'react';
import Carousel from '@/shared/ui/Carousel';
import SourceCodeCard from '@/shared/ui/SourceCodeCard';

interface EditorStep {
  label: string;
  details: ReactNode;
  codeImg: ReactNode;
}

const EDITOR_STEPS: EditorStep[] = [
  {
    label: '1. 커스텀 훅 useRichTextEditor.ts',
    details: (
      <>
        <li>
          Tiptap의 헤드리스 특성을 활용하여 커스텀 훅에서 <strong>에디터 기능만 정의</strong>
          하고 UI는 별도 컴포넌트에서 구현하도록 설계했습니다.
        </li>
        <li>
          StarterKit을 기반으로 텍스트 스타일, 표/미디어/링크 삽입 등의 Extension을 조합하여{' '}
          <strong>에디터의 기능을 모듈 단위로 구성</strong>했습니다.
        </li>
        <li>
          onUpdate 콜백에서 getHTML( )로 <strong>에디터 내용을 HTML로 변환</strong>하여 상위
          컴포넌트로 전달합니다.
        </li>
      </>
    ),
    codeImg: (
      <SourceCodeCard
        fileName="src/shared/lib/tiptap/useRichTextEditor.ts"
        imageSrc="/images/cna/useRichTextEditor.png"
      />
    ),
  },
  {
    label: '2. 뷰어 렌더링',
    details: (
      <>
        <li>
          전달받은 HTML 콘텐츠는 뷰어 컴포넌트에서 <strong>DOMPurify의 sanitize</strong>를 거쳐{' '}
          <strong>XSS 공격을 방어</strong>한 후 렌더링됩니다.
        </li>
      </>
    ),
    codeImg: (
      <SourceCodeCard
        fileName="src/shared/ui/richTextEditor/EditorViewer.tsx"
        imageSrc="/images/cna/EditorViewer.png"
      />
    ),
  },
];

export default function EditorCarousel() {
  return (
    <Carousel
      items={EDITOR_STEPS}
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
