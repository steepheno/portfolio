import { Link } from 'react-router-dom';
import styles from './Contents.module.scss';

export default function Contents() {
  return (
    <div className={styles.contents}>
      {/* 학력 */}
      <div className={styles.section}>
        <h2>학력</h2>
        <div className={styles.sectionBody}>
          <div className={styles.entry}>
            <div className={styles.entryPeriod}>2017.03 ~ 2024.08</div>
            <div className={styles.entryDetail}>
              <strong>숭실대학교</strong>
              <span>정보사회학과</span>
              <span>정보통계·보험수리학과 (복수전공)</span>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.entryPeriod}>2014.03 ~ 2017.02</div>
            <div className={styles.entryDetail}>
              <strong>경문고등학교</strong>
              <span>졸업</span>
            </div>
          </div>
        </div>
      </div>

      {/* 수상 및 자격사항 */}
      <div className={styles.section}>
        <h2>수상 및 자격사항</h2>
        <div className={styles.sectionBody}>
          <div className={styles.entry}>
            <div className={styles.entryPeriod}>2025.12</div>
            <div className={styles.entryDetail}>
              <strong>정보처리기사</strong>
              <span>한국산업인력공단</span>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.entryPeriod}>2025.03</div>
            <div className={styles.entryDetail}>
              <strong>TOEIC Speaking</strong>
              <span>IM3, YBM 토익위원회</span>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.entryPeriod}>2022.06</div>
            <div className={styles.entryDetail}>
              <strong>ADsP</strong>
              <span>한국데이터산업진흥원</span>
            </div>
          </div>
          <div className={styles.entry}>
            <div className={styles.entryPeriod}>2021.11</div>
            <div className={styles.entryDetail}>
              <strong>🏆소상공인을 위한 청년 디지털 튜터링</strong>
              <span>장려상(4위) / 한국지능정보사회진흥원</span>
            </div>
          </div>
        </div>
      </div>

      {/* 전공 프로젝트 */}
      <div className={styles.section}>
        <h2>전공 프로젝트</h2>
        <div className={styles.sectionBody}>
          <div className={styles.entry}>
            <div className={styles.entryPeriod}>2021-2학기 전공</div>
            <div className={styles.entryDetail}>
              <strong>뉴스 기사 제목 텍스트마이닝을 활용한 연도별 최저임금 이슈 분석</strong>
              <span>전산통계1 기말 프로젝트 (3인 1팀)</span>
            </div>
          </div>
        </div>
        <div className={styles.actDetail}>
          <p>
            2017~2021년 최저임금 의결 시기의 뉴스 제목 5,000건을 수집하여 텍스트마이닝 수행 결과를
            워드클라우드로 시각화한 경험이 있습니다. <br />
            문재인 정부 당시 최저임금이 매년 7월 중순에 의결된 것을 고려하여 연도별 7월 한 달간
            ‘최저임금’을 키워드로 한 뉴스 제목을 분석 대상으로 설정했습니다. <br />
            분석 결과, 정책 초기에는 '대통령', '정부 인사' 중심 키워드가 두드러졌으나, 시간이 지남에
            따라 '자영업자', '경총' 등의 이해관계자 관련 키워드 비중이 증가하며 갈등이 심화되는
            흐름을 확인했습니다. 2020년에는 코로나19로 인한 경기 침체로 역대 최저 수준의 인상률을
            보였음에도 키워드 언급량이 감소하며 이슈 주목도가 낮아지는 특징이 나타났습니다. <br />
            <br />
            또한 2014~2017년 평균 인상률(7.425%, 표준편차 0.457)과 비교해 2018~2021년 평균
            인상률(7.34%)은 유사하지만, 표준편차(6.205)가 크게 증가한 것을 확인했습니다. 이를 통해{' '}
            <strong>연도별 인상률 변동성 확대가 키워드 분포 변화에 영향을 미쳤다</strong>고
            해석했습니다.
          </p>
        </div>
      </div>

      {/* 교육 */}
      <div className={styles.section}>
        <h2>교육 활동</h2>
        <div className={styles.sectionBody}>
          <div className={styles.entry}>
            <div className={styles.entryPeriod}>2024.07 - 2025.06</div>
            <div className={styles.entryDetail}>
              <strong>삼성 청년 SW 아카데미(SSAFY) 12기</strong>
              <span>삼성전자</span>
            </div>
          </div>
          <div className={styles.eduDetail}>
            <p>
              Java 기초 문법과 알고리즘 구현 방법을 학습하고, Spring과 Vue 프레임워크를 학습하며 웹
              개발 흐름 이해도를 높였습니다. 6인 1팀 프로젝트에서는 React, TypeScript 환경에서
              프론트엔드 개발을 수행했습니다. <br />
              Git을 통해 코드 형상 관리, 기능 구현을 위한 코드 병합을 수행하며 팀원들과 원활한
              협업을 이루었습니다. Jira Automation 기능을 적용하여 일정 관리와 작업 완료 여부를 팀원
              모두가 실시간으로 확인할 수 있는 메커니즘을 구축했습니다.
            </p>
          </div>
        </div>
        <div className={styles.sectionBody}>
          <div className={styles.entry}>
            <div className={styles.entryPeriod}>2023.02 - 2023.08</div>
            <div className={styles.entryDetail}>
              <strong>데이터 애널리시스 트랙 29기</strong>
              <span>엔코아 플레이데이터</span>
            </div>
          </div>
          <div className={styles.eduDetail}>
            <p>
              Python 기초 문법과 Numpy, Pandas 라이브러리를 활용한 데이터 분석 방법론, pytorch를
              이용한 머신러닝/딥러닝 기초 이론을 학습했습니다. HTML, CSS, JavaScript의 원리에
              대해서도 학습하며 Web 환경 이해를 위한 기초 지식을 쌓았습니다. <br />
              의약품 정보 및 병용금기약물 안내 서비스 '
              <Link
                className={styles.link}
                to={'https://github.com/steepheno/Playdata_FinalProject_2023'}
              >
                뭔약이유
              </Link>
              ' 개발 프로젝트에서는 데이터 전처리 및 화면 UI 구현 역할을 맡았습니다. AI Hub와 의약품
              안전나라 e약은요에서 수집한 의약품 데이터를 Data frame으로 구축하였고, 서비스 화면은
              HTML, CSS 템플릿을 활용하여 구현했습니다.
            </p>
          </div>
        </div>
      </div>

      {/* 대외활동 */}
      <div className={styles.section}>
        <h2>대외활동</h2>
        <div className={styles.sectionBody}>
          <div className={styles.entry}>
            <div className={styles.entryPeriod}>2021.08 ~ 2021.10</div>
            <div className={styles.entryDetail}>
              <strong>
                ICT를 통한 착한 상상 프로젝트 <br /> - 소상공인을 위한 청년 디지털 튜터링
              </strong>
              <span>에이블런 / 한국지능정보사회진흥원</span>
            </div>
          </div>
        </div>
        <div className={styles.actDetail}>
          <p>
            '소상공인을 위한 청년 디지털 튜터링' 공모전에 팀장으로 참여하여 언급량 데이터 시각화
            방법과 Excel을 활용한 기초 통계량 출력 방법을 학습했습니다. 학습 내용을 토대로
            “MZ세대에게 사회 혁신이란?” 질문에 대하여 '사회 문제와 위기를 해결하고 사회에 기여하기
            위해, 변화를 이끌어 함께 성장하는 것'이라고 정의함으로써 노코드 데이터 분석을
            수행했습니다. <br />
            <br />
            본선 진출 후 은평구에서 디저트 가게를 운영하는 소상공인과 매칭되어 인구 데이터 기반 주
            고객층과 잠재 고객층 파악, 디저트 산업 이슈 키워드 '건강'을 발견하여 저당, 단백질 관련
            신메뉴와 가족 대상 패키지 상품 개발을 제안했습니다. <br />
            본선에 진출한 <strong>20개 팀 중 4위</strong>로{' '}
            <strong style={{ color: 'green' }}>장려상을 수상</strong>했습니다.
          </p>
        </div>
      </div>
    </div>
  );
}
