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

  useEffect(() => {
    // axios.get(HOST_URL + "/apply/cnt/processing").then((resp) => {
    //   if (resp.data) setPrsCnt(resp.data.cnt);
    // });
    // axios.get(HOST_URL + "/apply/cnt/reserved").then((resp) => {
    //   if (resp.data) setRsvCnt(resp.data.cnt);
    // });
  }, []);

  return (
    <>
      <LoginModal
        display={isModalHidden}
        onClick={() => setIsModalHidden(false)}
      />
      <Modal title="결제 확인" content={<>인보이스 날라간다...</>} display={false}/>
      <div className="base-padding">
        <ApplyNoticeBbs />
        <CmsItems />
      </div>
    </>
  );
};

export default CmsList;
