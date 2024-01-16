import { useState, useEffect } from "react";
import axios from "axios";

import { HOST_URL } from "../../libs/Const";
import CmsItems from "./components/cmsItem";
import ApplyNoticeBbs from "./components/notice";
import Modal from "../../common/modal";
import LoginModal from "../signIn/modal";

import "./CmsList.scss";

const CmsList = () => {
  const [isModalHidden, setIsModalHidden] = useState(false);

  const [prsCnt, setPrsCnt] = useState(2);
  const [rsvCnt, setRsvCnt] = useState(2);

  useEffect(() => {
    axios.get(HOST_URL + "/apply/cnt/processing").then((resp) => {
      if (resp.data) setPrsCnt(resp.data.cnt);
    });
    axios.get(HOST_URL + "/apply/cnt/reserved").then((resp) => {
      if (resp.data) setRsvCnt(resp.data.cnt);
    });
  }, []);

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
      <Modal title="결제 확인" content={<>인보이스 날라간다...</>} display={false}/>
      <div className="base-padding">
        <ApplyNoticeBbs />
        {countList}
        <CmsItems />
      </div>
    </>
  );
};

export default CmsList;
