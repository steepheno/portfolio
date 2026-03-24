import { useState, useCallback } from 'react';
import styles from './Carousel.module.scss';
import type { ReactNode } from 'react';

/* ── Props ── */
interface CarouselProps<T> {
  /** 슬라이드에 표시할 아이템 배열 */
  items: T[];

  /** 각 아이템을 어떻게 렌더링할지 정의 */
  renderSlide: (item: T, index: number) => ReactNode;

  /** dot 네비게이션에 표시할 aria-label 생성 (선택) */
  getSlideLabel?: (item: T, index: number) => string;

  /** 추가 className (선택) */
  className?: string;
}

export default function Carousel<T>({
  items,
  renderSlide,
  getSlideLabel,
  className,
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === items.length - 1;

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex(prev => Math.min(prev + 1, items.length - 1));
  }, [items.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  }, []);

  if (items.length === 0) return null;

  return (
    <div className={`${styles.carousel} ${className ?? ''}`}>
      {/* 슬라이드 영역 */}
      <div className={styles.slideWrapper} key={currentIndex}>
        {renderSlide(items[currentIndex], currentIndex)}
      </div>

      {/* 네비게이션 */}
      {items.length > 1 && (
        <div className={styles.navigation}>
          <button
            className={`${styles.arrowBtn} ${isFirst ? styles.disabled : ''}`}
            onClick={goPrev}
            disabled={isFirst}
            aria-label="이전 슬라이드"
          >
            ←
          </button>

          <div className={styles.dotContainer}>
            {items.map((item, index) => (
              <button
                key={index}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => goTo(index)}
                aria-label={
                  getSlideLabel
                    ? getSlideLabel(item, index)
                    : `슬라이드 ${index + 1}로 이동`
                }
              >
                <span className={styles.dotCircle} />
              </button>
            ))}
          </div>

          <button
            className={`${styles.arrowBtn} ${isLast ? styles.disabled : ''}`}
            onClick={goNext}
            disabled={isLast}
            aria-label="다음 슬라이드"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}