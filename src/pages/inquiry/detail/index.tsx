import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { BbsDetail, ReplyDetail } from "../../../common/interface";
import { AUTH_ITC, HOST_URL } from "../../../common/Request";
import MyCommonContent from "../../myPage/common";
import "./style.scss";
import axios from "axios";

const InquiryDetail = () => {
  const idx = useParams().inqId;

  const [data, setData] = useState<BbsDetail>();
  const [replyList, setReplyList] = useState<ReplyDetail[]>();

  useEffect(() => {
    AUTH_ITC.get(HOST_URL + "/validate/token").then((resp) => {
      if (resp.data.status === 200) {
        axios.get(HOST_URL + "/bbs/BS02/" + idx).then((resp) => {
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

  const replies = () => {
    if (!replyList) return <>댓글이 존재하지 않습니다.</>;
    return (
      <>
        {replyList.map((item: ReplyDetail, idx) => {
          return (
            <>
              <div key={`inq-reply-${idx}`}>
                <div>{item.content}</div>
                <div>{item.nickName}</div>
                <div>{item.regDate}</div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  const page = () => {
    if (!data) return <>존재하지 않는 게시글입니다.</>;
    return (
      <>
        <div className="border border-gray-200 rounded p-5">
          <div className="font-bold text-2xl">{data.title}</div>
          <div className="flex">
            <div className=" ">
              <img src={import.meta.env.PUBLIC_URL + "/bnr_test.jpg"} />
            </div>
            <div className="">
              <div>{data.memberDto.nickName}</div>
              <div className="text-gray-500">{data.regDate}</div>
            </div>
          </div>
          <div className="py-5">{data.content}</div>
          {replies()}
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

export default InquiryDetail;
