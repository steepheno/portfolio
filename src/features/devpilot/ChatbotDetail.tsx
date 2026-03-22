import styles from './ChatbotDetail.module.scss';
import SourceCodeCard from '@/shared/ui/SourceCodeCard';

export default function ChatbotDetail() {
  return (
    <>
      {/* 최초 구현 및 문제 상황 */}
      <h3 className={styles.title}>1) 최초 구현 및 문제 상황</h3>
      <div className={styles.description}>
        <li>
          addMessage 함수 하나로 전송과 수신 메시지를 모두 처리하고, isBot 플래그로 발신자를
          구분했습니다.
        </li>
        <li>
          message.map( )으로 배열을 순회하며 isBot 값에 따라{' '}
          <strong>봇 메시지는 회색 좌측 정렬</strong>,{' '}
          <strong>사용자 메시지는 파란색 우측 정렬</strong>을 적용했습니다.
        </li>
        <li>
          메시지가 여러 줄로 입력되면 textarea가 채팅창 전체 영역을 벗어나{' '}
          <strong>레이아웃이 깨지는 문제</strong>가 발생했습니다.
        </li>
      </div>

      {/* 문제 해결 과정 */}
      <h3 className={styles.title}>2) 문제 해결 과정</h3>
      <div className={styles.solutionRow}>
        <SourceCodeCard
          fileName="ChatbotContents.tsx"
          imageSrc="/images/devpilot/chatbot_code1.png"
        />

        <SourceCodeCard
          fileName="ChatbotContents.tsx"
          imageSrc="/images/devpilot/chatbot_code2.png"
        />
      </div>
      <div className={styles.description}>
        <li>
          useRef로 DOM에 직접 접근하여 입력값이 변경될 때마다{' '}
          <strong>scrollHeight 기준으로 높이를 동적으로 조절</strong>하였습니다.
        </li>
        <li>
          채팅 입력창이 확장된 경우 <strong>채팅 영역 높이를 비례적으로 감소</strong>시켜 전체
          레이아웃을 500px로 유지했습니다.
        </li>
        <li>
          새 메시지 추가 시 별도의 useEffect로 <strong>스크롤이 최하단으로 이동</strong>하도록
          구현했습니다.
        </li>
      </div>

      {/* 성과 */}
      <h3 className={styles.title}>3) 성과</h3>
      <div className={styles.description}>
        <li>
          입력 내용 길이와 관계없이{' '}
          <strong style={{ color: '#22d3ee' }}>레이아웃이 깨지지 않는 안정적인 채팅 UI</strong>를
          구현했습니다.
        </li>
        <li>
          서비스 이용 도중 어려움을 마주한 사용자가{' '}
          <strong style={{ color: '#22d3ee' }}>AI 챗봇을 통해 문제를 해결</strong>할 수 있도록
          하였습니다.
        </li>
      </div>
    </>
  );
}
