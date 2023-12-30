import ApplyNoticeBbs from "./components/notice";
import CmsItems from "./components/cmsItem";

import "./CmsList.scss";
import LoginModal from "../signIn/modal";
import { useState } from "react";

const CmsList = () => {
  //로그인 모달 display 처리
  const [isModalHidden, setIsModalHidden] = useState(true);

  return (
    <>
      <LoginModal
        display={isModalHidden}
        onClick={() => setIsModalHidden(false)}
      />
      <div className="base-padding">
        <ApplyNoticeBbs />
        <CmsItems />
      </div>
    </>
  );
};

export default CmsList;
