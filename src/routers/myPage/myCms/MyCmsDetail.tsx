import { useEffect, useState } from "react";
import { useParams } from "react-router";

import MyCommonContent from "../common";
import Button from "../../../components/button";

import { CmsApplyDetail, ImgDetail } from "../../../defines/api";

import { REQUEST_GET } from "../../../libs/request";
import Locale from "../../../components/locale";
import { ApiClient } from "../../../libs/ApiClient";
import Stepper from "../../../components/stepper";

interface MyCmsDetail {
  appliedImageList: ImgDetail[];
  applyDto: CmsApplyDetail;
  completeImageList: ImgDetail[];
  invoiceList: any[];
  stepperList: any[];
}

const MyCmsDetailComponent = () => {
  const applyId = useParams().cmsApplyId || "";
  const [data, setData] = useState<MyCmsDetail>(null);

  const [completImgList, setCompleteImgList] = useState([]);
  const [applyImgList, setApplyImgList] = useState([]);

  const applyHistoryCallback = (data: any) => {
    if (data) {
      console.log(data, "test");
      setData(data.data);
    }
  };

  useEffect(() => {
    ApiClient.getInstance().get(
      "/apply/detail",
      {params: {cmsApplyId: applyId}},
      (data) => {
        applyHistoryCallback(data);
      },
      (data) => {
        console.log("error: ", data);
      }
    );
  }, []);

  const content = () => {
    if (!data) return <></>;

    // const { cmsPayDto } = data;

    const renderImgList = (imgList) => {
      if (imgList.length < 1) return <></>;
      return imgList.map((item: ImgDetail, idx) => {
        return (
          <a href={item.imgUrl} target="_blank" className="w-1/3">
            <div key={`cms-apply-img-${idx}`}>
              <img src={item.imgUrl} alt="img" />
            </div>
          </a>
        );
      });
    };

    return (
      <>
      <div className="min-f-full">

        <div className="py-4">
          <div className="font-bold text-lg text-rose-400">{data.applyDto.cmsName}</div>
          <div className="mt-1 flex items-center">
            <div className="font-bold text-2xl">{data.applyDto.title}</div>
            <div className="ml-5 px-3 py-2 bg-teal-100 rounded-md">
              <div className="font-bold text-teal-500">{data.applyDto.statusNm}</div>
            </div>
          </div>
          <p className="pt-3 text-gray-500">신청 ID: {data.applyDto.id}</p>
          <p className="pt-1 text-gray-500">신청일: {data.applyDto.regDate}</p>
        </div>
        {/* {completImgList.length > 0 && (
          <div className="my-5 mb-8">
            <div className="pt-3 pb-3 font-bold text-md">완성 이미지</div>
            <div className="px-4 py-8 bg-gray-100 rounded-sm">
              <div className="pb-8"></div>

              <div className="flex gap-3">{renderImgList(completImgList)}</div>
            </div>
          </div>
        )} */}
        <div className="pt-3 pb-3 font-bold text-md">요청사항</div>
        <div className="px-4 py-8 bg-gray-100 rounded-sm">
          <div className="pb-8">{data.applyDto.content}</div>
          {/* <div className="flex gap-3">{renderImgList(applyImgList)}</div> */}
        </div>
        <Stepper timeLineList={data.stepperList} />
      </div>

        {/* {cmsPayDto && (
          <>
            <div className="my-10">
              <div className="font-bold text-2xl">결제 요청서 </div>
              <div className="py-5">
                <div className="pb-3 font-bold text-md">결제 정보</div>
                <div className="px-4 py-8 bg-gray-100 rounded-sm">
                  <div>
                    <Locale k="payment_amount" />:{" "}
                    <span className="font-bold text-rose-600">
                      {cmsPayDto.payAmt}원
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
                    <Button color="Blue">
                      <Locale k="toss_payment" />
                    </Button>
                    <Button color="Rose">
                      <Locale k="bank_transfer" />
                    </Button>
                  </div>
                  <p className="pt-3 text-stone-500">
                    *토스 결제가 어려우신 분들은 위 계좌로 이체 후 계좌이체
                    버튼을 눌러주세요.
                  </p>
                </div>
              </div>
              <div className="pb-3 font-bold text-md">작가 코멘트</div>
              <div className="px-4 py-8 bg-gray-100 rounded-sm">
                {cmsPayDto.comment} ({cmsPayDto.regDate})
              </div>
            </div>
          </>
        )} */}
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
