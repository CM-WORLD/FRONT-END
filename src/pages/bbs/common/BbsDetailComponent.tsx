import { useEffect, useState } from "react";
import axios from "axios";

import { BbsDetail, ReplyDetail } from "../../../common/interface";
import { AUTH_ITC, HOST_URL } from "../../../common/Request";
import MyCommonContent from "../../myPage/common";

import ReplyForm from "../../bbs/common/reply/ReplyForm";
import ReplyList from "../../bbs/common/reply/ReplyList";

interface BbsDetailProps {
   bbsId: string; // 게시글 번호
   bbsCode: string; // 게시판 코드
}

const BbsDetailComponent = (props: BbsDetailProps) => {
  const idx = props.bbsId;

  const [data, setData] = useState<BbsDetail>();
  const [replyList, setReplyList] = useState<ReplyDetail[]>();

  useEffect(() => {
    AUTH_ITC.get(HOST_URL + "/validate/token").then((resp) => {
      if (resp.data.status === 200 || resp.data.staus === 205) {
        axios.get(HOST_URL + `/bbs/${props.bbsCode}/` + idx).then((resp) => {
          if (resp.status === 200 && resp.data) {
            setData(resp.data.data);
          }
        });
        axios.get(HOST_URL + "/reply/list/" + idx).then((resp) => {
          if (resp.status === 200 && resp.data) {
            setReplyList(resp.data.data);
          }
        });
      }
    });
  }, []);

  const page = () => {
    if (!data) return <>존재하지 않는 게시글입니다.</>;
    return (
      <>
        <div className={"border border-gray-200 rounded p-7"}>
          <div className="text-2xl mb-3">{data.title}</div>
          <div className="flex items-center gap-4">
            <div className="">
              <img
                className="w-10 h-10 rounded-full"
                src={
                  "https://jvk-world.s3.ap-northeast-2.amazonaws.com/apply/1705024099133_test_01.jpg"
                }
              />
            </div>
            <div className="">
              <div className="font-bold text-gray-900">
                {data.memberDto.nickName}
              </div>
              <div className="text-gray-500 text-sm">{data.regDate}</div>
            </div>
          </div>
          <div className="min-h-80 py-5">{data.content}</div>
          <ReplyForm />
          <div className="">
            <div className="font-bold">댓글</div>
            <ReplyList replyList={replyList} />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <MyCommonContent title="" content={page()} />
    </>
  );
};

export default BbsDetailComponent;
