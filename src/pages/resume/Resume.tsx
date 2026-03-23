import styles from './Resume.module.scss';
import Profile from '@/widgets/resume/Profile';
import Contents from '@/widgets/resume/Contents';

export default function Resume() {
  return (
    <section className={styles.container}>
      <h1>이력서</h1>

      {/* 상단 프로필 */}
      <Profile />

      {/* 하단 컨텐츠 */}
      <Contents />
    </section>
  );
}
