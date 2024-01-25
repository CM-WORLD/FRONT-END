import { useEffect, useState } from "react";

import { BbsDetail } from "../../../defines/api";
import { ApiClient } from "../../../libs/ApiClient";

import ReplyForm from "../../bbs/common/reply/ReplyForm";
import ReplyList from "./reply/ReplyList";
import { globalCode } from "../../../libs/Const";

interface BbsDetailProps {
  breadCrumb: string;
  style?: string;
  bbsId: string; // 게시글 번호
  bbsCode: string; // 게시판 코드
  isPublic: boolean; // 전체공개인지 회원공개인지
}

const BbsDetailComponent = (props: BbsDetailProps) => {
  const idx = props.bbsId;

  const fetchReplyList = () => {
    ApiClient.getInstance().get(
      "/reply/" + props.bbsId,
      {},
      (data) => {
        console.log(data);
        setReplyList(data.data);
      },
      (data) => {
        alert("댓글 조회 중 오류가 발생했습니다");
      }
    );
  };

  const [data, setData] = useState<BbsDetail>();
  const [replyList, setReplyList] = useState([]);
  const [replyFormIdx, setReplyFormIdx] = useState<number>(0);

  useEffect(() => {
    ApiClient.getInstance().get(
      "/bbs/inquiry/" + idx,
      {},
      (data) => {
        setData(data.data);
      },
      (data) => {
        alert("게시글 조회 중 오류가 발생했습니다");
      }
    );
    fetchReplyList();
  }, []);

  const page = () => {
    if (!data) return <>존재하지 않는 게시글입니다.</>;
    return (
      <>
        <div
          className={
            "border border-gray-200 rounded p-7 relative m-auto max-w-2xl my-10"
          }
        >
          <div className="flex items-center gap-2 text-mint font-bold">
            게시판
            <svg
              className={`w-3 h-3 rtl:rotate-180`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            {props.breadCrumb}
          </div>
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
          <div className="min-h-60 py-5">{data.content}</div>
          {/* 신규 루트 댓글 작성 */}
          <ReplyForm bbsId={idx} status={globalCode.reply.new} />
          <div className="">
            <div className="font-bold">댓글</div>
            <ReplyList
              replyList={replyList}
              formIdx={replyFormIdx}
              setFormIdx={(formIdx) => setReplyFormIdx(formIdx)}
            />
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      {page()}
      {/* <MyCommonContent title="" content={page()} /> */}
    </>
  );
};

export default BbsDetailComponent;
