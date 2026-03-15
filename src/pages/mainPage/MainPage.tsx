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
            확장성을 고려한 개발 환경 구축과 직관적인 UI 구현,
            <br />
            사용자 경험 극대화를 추구하며 개발합니다.
            <br />
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
          </p>
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
