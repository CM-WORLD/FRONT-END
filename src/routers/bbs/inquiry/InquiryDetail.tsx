import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { globalCode } from "../../../libs/Const";
import { ApiClient } from "../../../libs/ApiClient";

import BbsDetailComponent from "../common/BbsDetailComponent";
import MyCommonContent from "../../myPage/common";
import ReplyForm from "../common/reply/ReplyForm";
import ReplyList from "../common/reply/ReplyList";
import { EApiStatus } from "../../../defines/api";

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
        // console.log(data);
        if (data.status === EApiStatus.NoAuth) {
          // NoAuthRedirect();
          setReplyList([]);
        }

        // alert("댓글 조회 중 오류가 발생했습니다");
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
              <ReplyForm
                hideForm={() => setReplyFormIdx(-1)}
                bbsId={Number(idx)}
                status={globalCode.reply.new}
                callFetch={() => setFetchReply(true)}
              />
              <div className="">
                <div className="font-bold">댓글</div>
                <ReplyList
                  callFetch={() => setFetchReply(true)}
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
