import ApplyNoticeBbs from "./components/notice";
import CmsItems from "./components/cmsItem";

import "./CmsList.scss";
import LoginModal from "../signIn/modal";
import { useState } from "react";

const CmsList = () => {
  //로그인 모달 display 처리
  const [isModalHidden, setIsModalHidden] = useState(false);

  const countList = (
    <div className="list-cnt">
      <div>
        현재 신청자 <b>10</b>명
      </div>
      <div>
        예약 대기자 <b>5</b>명
      </div>
    </div>
  );

  return (
    <>
      <LoginModal
        display={isModalHidden}
        onClick={() => setIsModalHidden(false)}
      />
      <div className="base-padding">
        <ApplyNoticeBbs />
        {countList}
        <CmsItems />
      </div>
    </>
  );
};

export default CmsList;
