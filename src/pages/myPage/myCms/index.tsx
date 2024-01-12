import { useState, useEffect } from "react";
import axios from "axios";

import { CmsApplyDetail, CmsPayDetail } from "../../../common/interface";
import { getRtk, getAtk, AUTH_ITC, HOST_URL } from "../../../common/Request";
import WriteRvwModal from "../../review/modal";
import PaymentModal from "../../payment/modal";
import MyCommonContent from "../common";
import Pagination from "../../../components/pagnation";
import Button from "../../../components/button";

import "./style.scss";

const MyCmsList = () => {
  const [data, setData] = useState([]);
  const [paymentData, setPaymentData] = useState<CmsPayDetail>();
  const [rvwMdDisplay, serRvwMdDisplay] = useState(false);
  const [payMdDisplay, setPayMdDisplay] = useState(false);

  useEffect(() => {
    const params = {
      page: 0,
      size: 10,
    };

    AUTH_ITC.get(HOST_URL + "/validate/token").then((resp: any) => {
      if (resp.data.status === 200 || resp.data.staus === 205) {
        axios
          .get(HOST_URL + "/apply/history", {
            params,
            headers: {
              Authorization: `Bearer ${getAtk()}`,
              RefreshToken: getRtk(),
            },
          })
          .then((resp) => {
            console.log(resp.data.data);
            if (resp.data.data.content) {
              setData(resp.data.data.content);
            }
          });
      }
    });
  }, []);

  /** 리뷰 작성 제출 */
  const submitForm = () => {};
  const content = (
    <>
      <div className="my-cms-history">
        {
          <ul className="bg-white shadow overflow-hidden sm:rounded-md mx-auto w-xl">
            {data.map((item: CmsApplyDetail, idx) => {
              return (
                <>
                  <li
                    className="border-t border-gray-200"
                    key={`cms-history-${idx}`}
                  >
                    <div className="px-4 py-5 sm:px-6">
                      <div className="flex items-center justify-between pb-5">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          <a href={`/mypage/cms/${item.id}`}>{item.title}</a>
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          {item.regDate}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center justify-between">
                        <p className="text-md font-medium text-gray-500">
                          Status:
                          <span className="pl-1 text-yellow-600">
                            {item.statusNm}
                          </span>
                        </p>
                        <div>
                          {item.status === "CM02" && (
                            <Button
                              value="결제"
                              color="blue"
                              onClick={(e) => {
                                setPaymentData(item.cmsPayDto);
                                e.preventDefault();
                                setPayMdDisplay(!payMdDisplay);
                              }}
                            />
                          )}
                          {item.status === "CM08" && (
                            <Button
                              value="리뷰"
                              color="rose"
                              className="ml-3"
                              onClick={(e) => {
                                e.preventDefault();
                                serRvwMdDisplay(!rvwMdDisplay);
                              }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        }
      </div>
      <Pagination />
    </>
  );

  const payData = () => {
    if (!paymentData) return <></>;
    else
      return (
        <>
          <div>
            <div>결제 금액: </div>
            <div>{paymentData.payAmt}</div>
          </div>
          <div>
            <div>코멘트: </div>
            <div>{paymentData.comment}</div>
          </div>
        </>
      );
  };
  return (
    <>
      <PaymentModal
        paymentData={payData()}
        display={payMdDisplay}
        onClick={() => setPayMdDisplay(!payMdDisplay)}
      />
      <WriteRvwModal
        display={rvwMdDisplay}
        onClick={() => serRvwMdDisplay(!rvwMdDisplay)}
        onSubmit={submitForm}
      />
      <MyCommonContent
        title="커미션 신청 내역"
        content={content}
        btnLink="/commissions"
        btnTxt="커미션 신청하기"
      />
    </>
  );
};

export default MyCmsList;
