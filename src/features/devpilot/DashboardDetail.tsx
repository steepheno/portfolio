import styles from './DashboardDetail.module.scss';

export default function DashboardDetail() {
  return (
    <>
      {/* 상세 설명 */}
      <h3 className={styles.title}>1) 구현 과정 및 성과</h3>
      <div className={styles.description}>
        <li>
          CI/CD를 처음 구축하는 개발자를 주 이용자로 설정하여,{' '}
          <strong>로컬 환경에서 간단한 배포 경험</strong>을 할 수 있도록 진입 장벽을 낮췄습니다.
        </li>
        <li>
          추후 Jenkins로 CI/CD 파이프라인을 재구축할 때 학습 비용을 줄일 수 있도록{' '}
          <strong>Jenkins GUI</strong>와 비슷하게 구현했습니다.
        </li>
        <li>
          Jenkins GUI의 날씨 아이콘 대신 <strong>빌드 현황을 직관적으로 구분</strong>하는 아이콘을
          적용하여 <strong style={{ color: '#22d3ee' }}>사용자 경험을 개선</strong>했습니다.
        </li>
      </div>
    </>
  );
}
