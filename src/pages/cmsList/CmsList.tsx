import ApplyNoticeBbs from "./components/notice";
import CmsItems from "./components/cmsItem";

import "./CmsList.scss";
import LoginModal from "../signIn/modal";
import { useState } from "react";

const CmsList = () => {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const [prsCnt, setPrsCnt] = useState(0);
  const [rsvCnt, setRsvCnt] = useState(0);

  const countList = (
    <div className="list-cnt">
      <div>
        현재 신청자 <b>{prsCnt}</b>명
      </div>
      <div>
        예약 대기자 <b>{rsvCnt}</b>명
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
