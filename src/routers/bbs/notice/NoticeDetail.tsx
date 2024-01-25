import { useState } from "react";
import { useParams } from "react-router-dom";

import BbsDetailComponent from "../common/BbsDetailComponent";
import { globalCode } from "../../../libs/Const";

const NoticeDetail = () => {
  const idx = useParams().noticeId;

  return (
    <BbsDetailComponent
      bbsCode={globalCode.bbs.notice}
      bbsId={idx}
      breadCrumb="신청 공지"
    />
  );
};

export default NoticeDetail;
