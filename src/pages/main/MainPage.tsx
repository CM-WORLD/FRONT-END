import SlideShow from "./components/slides";
import "./style.scss";

const MainPage = () => {
  return (
    <>
      <div className="main-wrapper">
        <SlideShow />
        <h1 className="info-header">INFORMATION</h1>
        <div className="center-text">
          <div>안녕하세요. SD 일러스트를 그리는 개발자 걍진입니다.</div>
          <div>
            현재 카페, 트위터, 인스타 등을 통해서 SD 일러스트 작업을 하고
            있습니다.
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
