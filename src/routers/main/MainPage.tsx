import Locale from "../../components/locale";

import SlideShow from "./SlideShow";
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
        <h1 className="info-header contact">CONTACT</h1>
        <div className="center-text">
          <h3>Developer</h3>
          <h4>jinvicky</h4>
          <div>
            <a href="https://github.com/jinvicky">Github</a> /<a href="https://velog.io/@jinvicky/posts"> Velog</a> /<a href=""> Notion</a>
          </div>
          <h4>wkdu0723</h4>
          <div>Github / Velog / Notion</div>
        </div>
        <div className="center-text mt-4">
          <h3>Illustrator</h3>
          <div>Twitter / Cafe / Instagram</div>
        </div>
      </div>
    </>
  );
};

export default MainPage;
