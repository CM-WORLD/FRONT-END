import { useState, useEffect } from "react";

import CmsItems from "./components/cmsItem";
import ApplyNoticeBbs from "./components/notice";
import LoginModal from "../signIn/modal";
import Modal from "../../components/modal";

import "./CmsList.scss";

const CmsList = () => {
  const [isModalHidden, setIsModalHidden] = useState(false);

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
