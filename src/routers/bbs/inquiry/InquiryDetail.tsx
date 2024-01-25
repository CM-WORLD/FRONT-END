import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { globalCode } from "../../../libs/Const";
import { ApiClient } from "../../../libs/ApiClient";

import BbsDetailComponent from "../common/BbsDetailComponent";
import MyCommonContent from "../../myPage/common";
import ReplyForm from "../common/reply/ReplyForm";
import ReplyList from "../common/reply/ReplyList";

const InquiryDetail = () => {
  const idx = useParams().inqId;

  const [replyList, setReplyList] = useState([]);
  const [fetchReply, setFetchReply] = useState<boolean>(false); // 댓글 조회 여부
  const [replyFormIdx, setReplyFormIdx] = useState<number>(0);

  const fetchReplyList = () => {
    ApiClient.getInstance().get(
      "/reply/" + idx,
      {},
      (data) => {
        setReplyList(data.data);
      },
      (data) => {
        alert("댓글 조회 중 오류가 발생했습니다");
      }
    );
  };

  useEffect(() => {
    fetchReplyList();
    setFetchReply(false);
  }, [fetchReply]);

  return (
    <MyCommonContent
      content={
        <BbsDetailComponent
          bbsCode={globalCode.bbs.inquiry}
          bbsId={idx}
          breadCrumb="문의 상세"
          replyList={
            <>
              <ReplyForm bbsId={idx} status={globalCode.reply.new} />
              <div className="">
                <div className="font-bold">댓글</div>
                <ReplyList
                  replyList={replyList}
                  formIdx={replyFormIdx}
                  setFormIdx={(formIdx) => setReplyFormIdx(formIdx)}
                />
              </div>
            </>
          }
        />
      }
    ></MyCommonContent>
  );
};

export default InquiryDetail;
