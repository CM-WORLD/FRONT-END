import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import MyCommonContent from "../../common";
import { AUTH_ITC, HOST_URL } from "../../../../common/Request";
import {
  CmsApplyDetail,
  ImgDetail,
  CmsPayDetail,
} from "../../../../common/interface";

import "./style.scss";

const MyCmsApplyDetail = () => {
  const applyId = useParams().cmsApplyId || "";
  const [data, setData] = useState<CmsApplyDetail | null>(null);
  const [imgList, setImgList] = useState([]);
  const [payment, setPayment] = useState<CmsPayDetail | null>(null);

  useEffect(() => {
    AUTH_ITC.get("/validate/token").then((resp) => {
      if (resp.data.status === 200) {
        axios
          .get(HOST_URL + "/apply/detail", {
            params: {
              cmsApplyId: applyId,
            },
          })
          .then((resp) => {
            console.log(resp.data);
            if (resp.data) {
              setData(resp.data.data);
            }

            if (resp.data.imgList) {
              setImgList(resp.data.imgList);
            }

            if (resp.data.payment) {
              setPayment(resp.data.payment);
            }
          });
      } else {
        //404page
      }
    });
  }, []);

  const content = () => {
    if (!data) return <>존재하지 않는 커미션 id입니다.</>;

    const images = () => {
      
      if (imgList.length < 1) return <></>;
      return imgList.map((item: ImgDetail, idx) => {
        return (
          <>
            <div key={`cms-apply-img-${idx}`}>
              <img src={item.imgUrl} alt="img" />
            </div>
          </>
        );
      });
    };

    const payReceipt = () => {
      if (!payment) return <></>;
      return (
        <>
          <div>
            <div>결제 요청 금액: {payment.payAmt}</div>
            <div>결제 코멘트: {payment.comment}</div>
            <div>결제 요청 날짜: {payment.regDate}</div>
          </div>
        </>
      );
    };

    return (
      <>
      <div className="py-4">
        <div className="font-bold text-lg text-rose-400">{data.cmsDto.name} </div>
        <div className="font-bold text-2xl">{data.title}</div>
      </div>
        <div className="px-4 py-8 bg-gray-100 rounded-sm">{data.content}</div>

        <div className="mt-5 px-4 py-4 bg-teal-100 rounded-sm">상태: {data.statusNm}</div>
      {data.id}
        <div>상태: {data.statusNm}</div>
        <div>커미션 타입: {data.cmsTypeNm && data.cmsTypeNm}</div>
        <div>등록날짜: {data.regDate}</div>
      
         {images()}
         <div>
           <hr />
         </div>
         <div>
           <h1>결제 영수증</h1>
         </div>
         {payReceipt()}
         {/* TODO:: 추후 타임라인을 최상단 또는 최하단에 추가해야 함. */}
       </>
    );
  };


  return (
<>
    <MyCommonContent content={content()} />
    </>
  );
};

export default MyCmsApplyDetail;
