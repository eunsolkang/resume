import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="page sans">
          <header>
              <h1 className="page-title">Software Engineer : 강은솔</h1>
              <p className="page-description"></p>
          </header>
          <div className="page-body">
              <div className="column-list" style={{ display: 'flex' }}>
                  <div style={{ width: '25%' }} className="column">
                      <figure className="image">
                          <a href="Software%20Engineer%20%E1%84%80%E1%85%A1%E1%86%BC%E1%84%8B%E1%85%B3%E1%86%AB%E1%84%89%E1%85%A9%E1%86%AF%2021630f30d66c47cf8c4bf4b49741be63/Untitled.jpeg">
                              <img
                                  style={{ width: '192px' }}
                                  src="/profile.jpeg"
                                  alt="Profile"
                              />
                          </a>
                      </figure>
                  </div>
                  <div style={{ width: '75%' }} className="column">
                      <p>Email: <a href="mailto:eunsol2953@gmail.com">eunsol2953@gmail.com</a></p>
                      <p>Github: <a href="https://github.com/eunsolkang">https://github.com/eunsolkang</a></p>
                      <p>Blog: <a href="https://jerry-dev.tistory.com/">https://jerry-dev.tistory.com/</a></p>
                      <p>LinkedIn: <a href="https://www.linkedin.com/in/eunsol-kang-6b1904186/">https://www.linkedin.com/in/eunsol-kang-6b1904186/</a></p>
                      <p>Phone: 01026632953</p>
                  </div>
              </div>
              <p>안녕하세요 세상에 필요한것이 있다면 곧바로 공부해서 만들어내는 엔지니어 강은솔입니다.</p>
              <h1>업무</h1>
              <div className="column-list" style={{ display: 'flex' }}>
                  <div style={{ width: '31.25%' }} className="column">
                      <h3>화이트블록</h3>
                      <p><mark className="highlight-gray">2021 07 ~ 2022 06</mark></p>
                  </div>
                  <div style={{ width: '68.75%' }} className="column">
                      <p><strong>앱 개발자</strong></p>
                      <p>Flutter 앱 서비스 완성 후 운영</p>
                      <p>MVVP 에서 BLoC 패턴으로 전환</p>
                      <p>Flutter Web Beta 기반 Lottie 랜더링 최적화</p>
                      <p><strong>웹 개발자</strong></p>
                      <p>Angular StoryBooks 디자인 시스템 제작</p>
                      <p>Angular 프로젝트 NextJS 로 전환</p>
                  </div>
              </div>
              <h1>기술 프로젝트</h1>
              <div className="column-list" style={{ display: 'flex' }}>
                  <div style={{ width: '37.5%' }} className="column">
                      <h3>블록체인 기반 교육 플랫폼 Block Plate</h3>
                      <p><mark className="highlight-gray">2023 03 ~ 2023 07</mark></p>
                  </div>
                  <div style={{ width: '62.5%' }} className="column">
                      <ul>
                          <li>NodeJS, React, Chrome Extension</li>
                          <li>지갑 확장프로그램, Web3 서비스 개발</li>
                          <li>퍼블릭 블록체인 내부 합의 시스템, 블록 뷰어 제작</li>
                      </ul>
                  </div>
              </div>
              <div className="column-list" style={{ display: 'flex' }}>
                  <div style={{ width: '37.5%' }} className="column">
                      <h3>딥러닝 기반 태풍 예측 대시보드 Stop right there</h3>
                      <p><mark className="highlight-gray">2023 03 ~ 2023 07</mark></p>
                  </div>
                  <div style={{ width: '62.5%' }} className="column">
                      <ul>
                          <li>React, Nasa Open API</li>
                          <li>HTML Canvas 태풍 경로 추적 대시보드 제작</li>
                          <li>세종대 캡스톤 경진대회 대상</li>
                      </ul>
                  </div>
              </div>
              <div className="column-list" style={{ display: 'flex' }}>
                  <div style={{ width: '37.5%' }} className="column">
                      <h3>블록체인 기반 진급 심사 시스템 Keep your Endeavor</h3>
                      <p><mark className="highlight-gray">2022 09 ~ 2022 12</mark></p>
                  </div>
                  <div style={{ width: '62.5%' }} className="column">
                      <ul>
                          <li>NodeJS, Docker, Flutter, React, Arduino, kafka</li>
                          <li>아두이노로 수집된 정보를 블록체인으로 검증</li>
                          <li>Kafka 기반 프라이빗 블록체인 개발</li>
                          <li>군생활중 육군 참모총장상 수상</li>
                      </ul>
                  </div>
              </div>
              <h1>역량</h1>
              <p><strong>웹 개발</strong></p>
              <ul>
                  <li>Javascript / Typescript 에 대한 이해</li>
                  <li>JQuery, ES5 부터 ES7 까지 기술에 대한 꾸준한 관심</li>
                  <li>Redux-saga 부터 RTK, ContextAPI 등 다양한 상태관리 시스템 적용</li>
              </ul>
              <p><strong>서버 / 인프라</strong></p>
              <ul>
                  <li>REST API 를 만들고 NoSQL/RDB/GraphDB 기반의 데이터베이스 설계</li>
                  <li>WebSocket, Kafka, MQTT 실시간 시스템 개발</li>
                  <li>블록체인 개발을 위한 Docker-compose, Nginx, Linux</li>
              </ul>
              <p><strong>기타역량</strong></p>
              <ul>
                  <li>Canvas API 를 활용하여 웹 기반 그래픽 서비스를 개발할 수 있습니다.</li>
              </ul>
              <h1>학력</h1>
              <div className="column-list" style={{ display: 'flex' }}>
                  <div style={{ width: '25%' }} className="column">
                      <h3>선린인터넷고등학교</h3>
                      <p>소프트웨어학과</p>
                      <p><mark className="highlight-gray">2016 ~ 2018(졸업)</mark></p>
                  </div>
                  <div style={{ width: '75%' }} className="column">
                      <p><strong>수상 : </strong>선린해커톤, 디지털콘텐츠대회, 모바일콘텐츠대회</p>
                      <p><strong>동아리</strong>: 소프트웨어 개발 동아리 EDCAN 웹 개발 교육</p>
                      <p><strong>활동</strong>: 소프트웨어 교육봉사 Hello Coding 강사</p>
                  </div>
              </div>
              <div className="column-list" style={{ display: 'flex' }}>
                  <div style={{ width: '25%' }} className="column">
                      <h3>세종대학교</h3>
                      <p>소프트웨어학과</p>
                      <p><mark className="highlight-gray">2019 ~ 2024(재학)</mark></p>
                  </div>
                  <div style={{ width: '75%' }} className="column">
                      <p><strong>수상: </strong>창업경진대회, 창의학습공동체, 코딩경진대회</p>
                      <p><strong>동아리</strong>: 프로그래밍 중앙동아리 인터페이스 교육 학술부장</p>
                      <p><strong>활동</strong>: 데이터베이스 연구실 학부연구생</p>
                  </div>
              </div>
              <h1>기타</h1>
              <h3><strong>병역</strong></h3>
              <p><mark className="highlight-gray">2021 07 ~ 2023 01</mark></p>
              <ul>
                  <li>정보체계관리병 / 정보보호병 복무</li>
              </ul>
              <h3>교육</h3>
              <p><mark className="highlight-gray">2023 06 ~</mark></p>
              <ul>
                  <li>컴키드 홈스쿨 프로그래밍 지도교사 (2023 ~ )</li>
              </ul>
              <h3>프리랜서</h3>
              <p><mark className="highlight-gray">2019 ~ </mark></p>
              <ul>
                  <a href={"https://kmong.com/@ZEG"}><li>크몽에서 50건+ 웹/앱 서비스 개발 진행</li></a>
              </ul>
          </div>
      </div>
  );
}

export default App;
