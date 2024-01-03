import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API } from "../../../apis/Request";
import { BbsDetail } from "../../../common/interface";

import MyCommonContent from "../../myPage/common";
import "./style.scss";


const InquiryDetail = () => {
  const idx = useParams().inqId;

  const [data, setData] = useState<BbsDetail>();

  useEffect(() => {
    API.get("/bbs/BS02/" + idx).then((resp) => {
      if (resp.status == 200 && resp.data) {
        setData(resp.data.data);
      }
    });
  }, []);

  const inquiryContent = () => {
    if(!data) return <>존재하지 않는 게시글입니다.</>;
    return <>
        <div>
            <h2>{data.title}</h2>
            <p>{data.nickName}</p>

            <div>
                {data.content}
            </div>
        </div>
    </>;
  }
  const replyList = <></>;

  const page = (
    <>
      {inquiryContent()}
      {replyList}
    </>
  );

  return (
    <>
      <MyCommonContent title="문의 상세" content={page} />
    </>
  );
};

export default InquiryDetail;
