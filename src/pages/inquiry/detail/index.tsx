import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BbsDetail, ReplyDetail } from "../../../common/interface";
import { API } from "../../../common/Request";
import MyCommonContent from "../../myPage/common";

import "./style.scss";


const InquiryDetail = () => {
  const idx = useParams().inqId;

  const [data, setData] = useState<BbsDetail>();
  const [replyList, setReplyList] = useState<ReplyDetail[]>();

  useEffect(() => {
    API.get("/bbs/BS02/" + idx).then(resp => {
      if (resp.status == 200 && resp.data) {
        setData(resp.data.data);
      }
    });

    API.get("/reply/list/" + idx).then(resp=> {
        if(resp.status == 200 && resp.data) {
            setReplyList(resp.data.data);
        }
    })
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
  const replies = () => {
    if(!replyList) return <>댓글이 존재하지 않습니다.</>
    return <>
        {replyList.map((item: ReplyDetail, idx) => {
            return <>
                <div key={`inq-reply-${idx}`}>
                    <div>
                        {item.content}
                    </div>
                    <div>
                        {item.nickName}
                    </div>
                    <div>
                        {item.regDate}
                    </div>
                </div>
            </>
        })}
    </>;
  }

  const page = (
    <>
      {inquiryContent()}
      {replies()}
    </>
  );

  return (
    <>
      <MyCommonContent title="문의 상세" content={page} />
    </>
  );
};

export default InquiryDetail;
