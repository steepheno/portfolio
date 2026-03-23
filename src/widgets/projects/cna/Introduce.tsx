import styles from './Introduce.module.scss';
import { GithubButton } from '@/shared/ui/GithubButton';

export default function Introduce() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>Portfolio Project</div>
        <h1 className={styles.heroProjectLabel}>
          <img
            src="/images/cna/cna_logo.png"
            alt="cna 로고"
          />
        </h1>
        <p className={styles.heroTagline}>
          사업자 등록이 완료된 <em>온라인 쇼핑몰</em>로
          <br />
          <em className={styles.highlight}>실제 운영을 목표</em>로 개발 중인 웹 사이트입니다.
        </p>
        <div className={styles.heroGithub}>
          <GithubButton url={'https://github.com/Choice-Appear/Choice-Appear-Frontend'} />
        </div>
      </div>

      <div className={styles.heroScrollCue}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
