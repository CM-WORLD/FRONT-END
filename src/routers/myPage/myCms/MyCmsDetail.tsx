import { useEffect, useState } from "react";
import { useParams } from "react-router";

import MyCommonContent from "../common";

import { CmsApplyDetail, ImgDetail, PaymentDetail } from "../../../defines/api";
import { ApiClient } from "../../../libs/ApiClient";

import Locale from "../../../components/locale";
import Stepper from "../../../components/stepper";
import Button from "../../../components/button";

import ApplyInfoModal from "../../apply/ApplyInfoModal";
import BankTransferModal from "../../payment/modal/BankTransferModal";
import TossPaymentModal from "../../payment/TossPaymentModal";
import { PaymentStatus } from "../../../defines/payment";

export interface MyCmsDetailType {
  appliedImageList: ImgDetail[];
  applyDto: CmsApplyDetail;
  completeImageList: ImgDetail[];
  paymentList: PaymentDetail[];
  stepperList: any[];
}

const MyCmsDetail = () => {
  const applyId = useParams().cmsApplyId || "";
  const [data, setData] = useState<MyCmsDetailType>(null);
  const [tossMdDisplay, setTossMdDisplay] = useState(false);

  const [infoMdDisplay, setInfoMdDisplay] = useState(false);
  const [bankModalDisplay, setBankModalDisplay] = useState(false);

  const [currentPaymentId, setCurrentPaymentId] = useState(0);

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
        <a
          href={item.imgUrl}
          target="_blank"
          className="w-1/3"
          rel="noreferrer"
        >
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
        console.log("apply/detail error: ", data);
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
      const statusStyle = (status) => {
        switch (status) {
          case PaymentStatus.PAYMENT_PENDING:
            return "bg-orange-100 text-orange-600 border-orange-600";
          case PaymentStatus.PAYMENT_COMPLETE:
            return "bg-green-100 text-green-600 border-green-600";
          case PaymentStatus.PAYMENT_CANCEL:
            return "bg-gray-100 text-gray-600 border-gray-600";
          case PaymentStatus.PAYMENT_REFUND:
            return "bg-red-100 text-red-600 border-red-600";

          default:
            return "bg-gray-100 text-gray-600 border-gray-600";
        }
      };
      return paymentList.map((item, idx) => {
        return (
          <div>
            <div key={`cms-apply-payment-${idx}`} className="flex items-center">
              <div>
                <div className="text-base text-gray-600">{item.regDate}</div>
                <span className="font-bold pt-1">{item.title}</span>
                <span
                  className={`ml-3 bg-white border border-blue-600 px-3 py-1 rounded-full ${statusStyle(
                    item.status
                  )}`}
                >
                  {item.statusNm}
                </span>
              </div>
            </div>
            <span className="">
              <span className="font-bold">{item.amount}</span>원
            </span>
            <div className=" bg-gray-100 rounded-sm">{item.message}</div>
            {item.status === PaymentStatus.PAYMENT_PENDING && (
              <div className="flex gap-2 py-3">
                <Button
                  color="Blue"
                  onClick={() => {
                    setTossMdDisplay(true);
                  }}
                >
                  <Locale k="toss_payment" />
                </Button>
                <Button
                  color="Emerald"
                  onClick={() => {
                    setCurrentPaymentId(item.id);
                    setBankModalDisplay(true);
                  }}
                >
                  <Locale k="bank_transfer" />
                </Button>
              </div>
            )}
          </div>
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
              <div className="font-bold text-2xl">{data.applyDto.title}</div>
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
            <div className="">
              <div className="">
                <div className="py-5">
                  <div className="pb-3 font-bold text-md">
                    <Locale k="payment" />
                  </div>
                  <div className="px-4 py-8 bg-gray-100 rounded-sm flex flex-col gap-5">
                    {renderPaymentList()}
                  </div>
                </div>
              </div>
            </div>
          )}
          <Stepper timeLineList={data.stepperList} />
        </div>
      </>
    );
  };

  const sendBankTransferAlert = () => {
    if (data) {
      ApiClient.getInstance().post(
        "/alert/bankTransfer",
        {
          applyTitle: data.applyDto.title,
          applyId: data.applyDto.id,
          paymentId: currentPaymentId,
        },
        (data) => {
          alert("입금안내가 발송되었습니다.");
        },
        (data) => {
          alert("입금안내 발송에 실패했습니다.");
        }
      );
    }
  };

  return (
    <>
      {data && (
        <ApplyInfoModal
          display={infoMdDisplay}
          data={data}
          onClose={() => {
            setInfoMdDisplay(false);
          }}
        />
      )}
      {data && (
        <TossPaymentModal
          display={tossMdDisplay}
          onClose={() => setTossMdDisplay(false)}
        />
      )}
      <BankTransferModal
        display={bankModalDisplay}
        onSubmit={() => sendBankTransferAlert()}
        onClose={() => setBankModalDisplay(false)}
      />
      <MyCommonContent content={content()} />
    </>
  );
};

export default MyCmsDetail;
