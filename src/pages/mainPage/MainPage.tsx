import styles from './MainPage.module.scss';
import Github from '@/shared/assets/github.png';
import Mail from '@/shared/assets/mail.png';

import Header from '@/widgets/header/Header';
import TechStack from '@/widgets/mainPage/TechStack';
import ProjectList from '@/widgets/mainPage/ProjectList';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <>
      {/* NAV */}
      <Header />

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGridBg} />
        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>
          <p className={styles.heroTag}>Frontend Portfolio</p>
          <h1 className={styles.heroTitle}>
            프론트엔드 개발자
            <br />
            <span className={styles.titleLine2}>
              <span className={styles.titleHighlight}>유준선 입니다</span>
            </span>
          </h1>
          <p className={styles.heroDesc}>
            통계학 복수전공을 통해 데이터 구조와 특성을 이해하는 역량을 쌓았으며,
            <br />
            이를 바탕으로 서버–클라이언트 간 데이터 흐름을 설계하는
            <br />
            <strong>데이터 친화적 프론트엔드 개발자</strong>입니다.
            <br />
            <br />
            AI를 적극 활용하여 문제를 효율적으로 해결하고,
            <br />
            최소한의 코드로 필요한 기능을 완성하는 개발을 지향합니다.
            <br />
            또한 확장성을 고려한 개발 환경을 구축하고, 사용자 경험 극대화를 추구합니다.
          </p>
          <div className={styles.contact}>
            <img
              src={Mail}
              alt="이메일"
            />
            <p>rjs7289@naver.com</p>
          </div>
          <div className={styles.contact}>
            <img
              src={Github}
              alt="깃허브"
            />
            <Link to={'https://github.com/steepheno'}>steepheno</Link>
          </div>
          <div className={styles.heroCta}>
            <a
              href="#projects"
              className={styles.btnPrimary}
            >
              프로젝트 보기
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
            <a
              href="/resume"
              className={styles.btnGhost}
            >
              이력서
            </a>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <TechStack />

      {/* PROJECTS */}
      <ProjectList />
    </>
  );
}
