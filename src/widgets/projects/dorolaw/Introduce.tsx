import styles from './Introduce.module.scss';

export default function Introduce() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>Portfolio Project</div>
        <h1 className={styles.heroProjectLabel}>
          <span>DOROLAW</span>
        </h1>
        <p className={styles.heroTagline}>
          자동차 블랙박스 영상을 업로드하면
          <br />
          <em>AI가 교통사고 과실 비율을 분석</em>하고, 변호사 상담까지 연결합니다.
        </p>
        <blockquote className={styles.heroQuote}>
          "교통사고 해결의 새로운 길, DOROLAW가 함께합니다."
        </blockquote>
      </div>

      <div className={styles.heroScrollCue}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
