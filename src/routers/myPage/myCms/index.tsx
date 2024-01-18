import React, { useState, useEffect } from "react";

import WriteRvwModal from "../../review/modal";
import PaymentModal from "../../payment/modal";
import MyCommonContent from "../common";
import Pagination from "../../../components/pagnation";
import Button from "../../../components/button";

import { CmsApplyDetail, CmsPayDetail } from "../../../defines/api";
import { REQUEST_GET} from "../../../libs/request";

const MyCmsList = () => {
  const [data, setData] = useState([]);
  const [paymentData, setPaymentData] = useState<CmsPayDetail>();
  const [rvwMdDisplay, serRvwMdDisplay] = useState(false);
  const [payMdDisplay, setPayMdDisplay] = useState(false);

  const [pageObj, setPageObj] = useState({
    number: 0,
    first: true,
    last: true,
    size: 10,
    totalPages: 1,
    totalElements: 1,
    empty: true,
  });

  const cmsHistoryCallback = (data: any) => {
    const respData = data.data;

    if (respData) {
      setData(respData.content);
      setPageObj({
        first: respData.first,
        last: respData.last,
        number: respData.number,
        size: respData.size,
        totalPages: respData.totalPages,
        totalElements: respData.totalElements,
        empty: respData.empty,
      });
    }
  }

  useEffect(() => {
    REQUEST_GET("/apply/history",  {params: {
      page: pageObj.number,
      size: 10,
    }}, (data) => {cmsHistoryCallback(data)}, "private", true);
  }, [pageObj.number]);

  const updatePage = (page: number) => {
    setPageObj({ ...pageObj, number: page });
  };

  /** 리뷰 작성 제출 */
  const submitForm = () => {};
  const content = (
    <>
      <div className="">
        {
          <ul className="bg-white shadow overflow-hidden sm:rounded-md mx-auto w-xl">
            {data.map((item: CmsApplyDetail, idx) => {
              return (
                <>
                  <li
                    className="border-t border-gray-200"
                    key={`cms-history-${idx}`}
                  >
                    <a href={`/mypage/cms/${item.id}`}>
                      <div className="p-3 sm:px-6">
                        <div className="flex items-center justify-between py-2">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {item.title}
                          </h3>
                          <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            {item.regDate}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
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
                    </a>
                  </li>
                </>
              );
            })}
          </ul>
        }
      </div>
      <Pagination
        pageObj={pageObj}
        onClick={(page: number) => updatePage(page)}
      />
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
