import styles from './Introduce.module.scss';
import { GithubButton } from '@/shared/ui/GithubButton';

export default function Introduce() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>Portfolio Project</div>
        <h1 className={styles.heroProjectLabel}>
          <span>DEVPILOT</span>
        </h1>
        <p className={styles.heroSubtitle}>CI / CD Pipeline Automation Assistant</p>
        <p className={styles.heroTagline}>
          CI/CD 파이프라인을 처음 구축하는 개발자를 위한 <em>배포 자동화 지원 서비스</em>로,
          <br />
          <em>빌드 모니터링 대시보드</em>와 <em>AI 챗봇</em> 가이드를 제공합니다.
        </p>
        <div className={styles.heroGithub}>
          <GithubButton url={'https://github.com/steepheno/DevPilot'} />
        </div>
      </div>

      <div className={styles.heroScrollCue}>
        <span>Scroll</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
