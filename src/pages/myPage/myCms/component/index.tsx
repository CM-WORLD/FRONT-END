import React, { Suspense, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import MyCommonContent from "../../common";
import { AUTH_ITC, HOST_URL } from "../../../../common/Request";
import {
  CmsApplyDetail,
  ImgDetail,
  CmsPayDetail,
} from "../../../../common/interface";
import Button from "../../../../components/button";


const MyCmsDetailComponent = () => {
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
    if (!data) return <></>;

    const images = () => {
      if (imgList.length < 1) return <></>;
      return imgList.map((item: ImgDetail, idx) => {
        return (
          <a href={item.imgUrl} target="_blank">
            <div className="w-1/3" key={`cms-apply-img-${idx}`}>
              <img src={item.imgUrl} alt="img" />
            </div>
          </a>
        );
      });
    };

    return (
      <>
        <div className="py-4">
          <div className="font-bold text-lg text-rose-400">
            {data.cmsDto.name}
          </div>
          <div className="mt-1 flex items-center">
            <div className="font-bold text-2xl">{data.title}</div>
            <div className="ml-5 px-3 py-2 bg-teal-100 rounded-md">
              <div className="font-bold text-teal-500">{data.statusNm}</div>
            </div>
          </div>
          <p className="pt-3 text-gray-500">신청 ID: {data.id}</p>
          <p className="pt-1 text-gray-500">신청일: {data.regDate}</p>
        </div>
        <div className="pt-3 pb-3 font-bold text-md">요청사항</div>
        <div className="px-4 py-8 bg-gray-100 rounded-sm">
          <div className="pb-8">{data.content}</div>
          {images()}
        </div>
        {/* <div>커미션 타입: {data.cmsTypeNm && data.cmsTypeNm}</div> */}
        {payment && (
          <>
            <div className="my-10">
              <div className="font-bold text-2xl">결제 요청서 </div>
              <div className="py-5">
                <div className="pb-3 font-bold text-md">결제 수단</div>
                <div className="px-4 py-8 bg-gray-100 rounded-sm">
                  <div>
                    총 결제 금액:{" "}
                    <span className="font-bold text-rose-600">
                      {payment.payAmt}원
                    </span>
                  </div>
                  <div className="py-5">
                    하나은행{" "}
                    <span className="font-bold text-gray-800">
                      32591038729807
                    </span>{" "}
                    / 남궁진
                  </div>
                  <div className="flex gap-2">
                    <Button color="Blue" value="토스로 결제" />
                    <Button color="Rose" value="계좌이체" />
                  </div>
                  <p className="pt-3 text-stone-500">
                    *토스 결제가 어려우신 분들은 위 계좌로 이체 후 계좌이체
                    버튼을 눌러주세요.
                  </p>
                </div>
              </div>
              <div className="pb-3 font-bold text-md">작가 코멘트</div>
              <div className="px-4 py-8 bg-gray-100 rounded-sm">
                {payment.comment} ({payment.regDate})
              </div>
            </div>
          </>
        )}
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

export default MyCmsDetailComponent;
