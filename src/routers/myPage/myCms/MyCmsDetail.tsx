import { useEffect, useState } from "react";
import { useParams } from "react-router";

import MyCommonContent from "../common";

import { CmsApplyDetail, ImgDetail } from "../../../defines/api";
import { ApiClient } from "../../../libs/ApiClient";

import Locale from "../../../components/locale";
import Stepper from "../../../components/stepper";
import ApplyInfoModal from "../../apply/ApplyInfoModal";
import Button from "../../../components/button";
import BankTransferModal from "../../payment/modal/BankTransferModal";

export interface MyCmsDetailType {
  appliedImageList: ImgDetail[];
  applyDto: CmsApplyDetail;
  completeImageList: ImgDetail[];
  paymentList: any[];
  stepperList: any[];
}

const MyCmsDetail = () => {
  const applyId = useParams().cmsApplyId || "";
  const [data, setData] = useState<MyCmsDetailType>(null);

  const [infoMdDisplay, setInfoMdDisplay] = useState(false);
  const [bankModalDisplay, setBankModalDisplay] = useState(false);

  const applyHistoryCallback = (data: any) => {
    if (data) {
      console.log(data, "test");
      setData(data.data);
    }
  };

  const renderImgList = (imgList) => {
    if (imgList === null || imgList.length < 1) return <></>;
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

  useEffect(() => {
    ApiClient.getInstance().get(
      "/apply/detail",
      { params: { cmsApplyId: applyId } },
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

    const { applyDto, completeImageList, paymentList } = data;

    const renderPaymentList = () => {
      if (paymentList.length < 1) {
        return (
          <>
            <div>결제 정보가 존재하지 않습니다.</div>
          </>
        );
      }
      return paymentList.map((item, idx) => {
        return (
          // <div key={`cms-apply-payment-${idx}`}>
          //   <div>{item.payAmt}</div>

          //   <div>{item.regDate}</div>
          //   <div>{item.comment}</div>
          // </div>
          <>
            {/* content */}
            <div key={`cms-apply-payment-${idx}`}>
              <Locale k="payment_amount" />:{" "}
              <span className="font-bold text-rose-600">
                {/* {cmsPayDto.payAmt}원 */}
                {item.payAmt}
              </span>
            </div>
            <div className="flex gap-2">
              <Button color="Blue">
                <Locale k="toss_payment" />
              </Button>
              <Button
                color="Emerald"
                onClick={() => {
                  setBankModalDisplay(true);
                }}
              >
                <Locale k="bank_transfer" />
              </Button>
            </div>
            <div className="pb-3 font-bold text-md">결제 메세지</div>
            <div className="px-4 py-8 bg-gray-100 rounded-sm">
              {/* {cmsPayDto.comment} ({cmsPayDto.regDate}) */}
              걍진이 2024.02.16
            </div>
          </>
        );
      });
    };

    return (
      <>
        <div className="min-f-full">
          <div className="py-4">
            <div className="font-bold text-lg text-rose-400">
              {applyDto.cmsName}
            </div>
            <div className="mt-1 flex items-center">
              <div className="font-bold text-2xl">{applyDto.title}</div>
              <div className="ml-5 px-3 py-2 bg-teal-100 rounded-md">
                <div className="font-bold text-teal-500">
                  {data.applyDto.statusNm}
                </div>
              </div>
              <button
                className="ml-5 px-3 py-2 bg-white border border-primary rounded-md"
                onClick={() => {
                  setInfoMdDisplay(true);
                }}
              >
                <div className="font-bold text-primary">신청서 보기</div>
              </button>
            </div>
            <p className="pt-3 text-gray-500">신청 ID: {data.applyDto.id}</p>
            <p className="pt-1 text-gray-500">
              신청일: {data.applyDto.regDate}
            </p>
          </div>
          {completeImageList && completeImageList.length > 0 && (
            <div className="my-5 mb-8">
              <div className="pt-3 pb-3 font-bold text-md">완성 이미지</div>
              <div className="px-4 py-8 bg-gray-100 rounded-sm">
                <div className="pb-8"></div>
                <div className="flex gap-3">
                  {renderImgList(completeImageList)}
                </div>
              </div>
            </div>
          )}
          {paymentList && (
            <>
              <div className="">
                <div className="py-5">
                  <div className="pb-3 font-bold text-md">
                    <Locale k="payment" />
                  </div>
                  <div className="px-4 py-8 bg-gray-100 rounded-sm">
                    {renderPaymentList()}
                  </div>
                </div>
              </div>
            </>
          )}
          <Stepper timeLineList={data.stepperList} />
        </div>
      </>
    );
  };

  return (
    <>
      {data && (
        <ApplyInfoModal
          display={infoMdDisplay}
          data={data}
          // content={"test"}
          onClose={() => {
            setInfoMdDisplay(false);
          }}
        />
      )}
      <BankTransferModal
        display={bankModalDisplay}
        onClose={() => setBankModalDisplay(false)}
      />
      <MyCommonContent content={content()} />
    </>
  );
};

export default MyCmsDetail;
