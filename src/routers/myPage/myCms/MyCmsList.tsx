import React, { useState, useEffect } from "react";

import WriteRvwModal from "../../review/modal";
import PaymentModal from "../../payment/modal";
import MyCommonContent from "../common";
import Pagination from "../../../components/pagnation";
import Button from "../../../components/button";

import { CmsApplyDetail, CmsPayDetail, EApiStatus } from "../../../defines/api";
import Locale from "../../../components/locale";
import { ApiClient } from "../../../libs/ApiClient";
import { CommissionStatus } from "../../../defines/globalCode";
import { NoAuthRedirect } from "../../../libs/request";
import { useNavigate } from "react-router-dom";

const MyCmsList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [cmsApplyId, setCmsApplyId] = useState<string>("");
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
  };

  useEffect(() => {
    ApiClient.getInstance().get(
      "/apply/member/history",
      {
        params: {
          page: pageObj.number,
          size: 10,
        },
      },
      (data) => {
        cmsHistoryCallback(data);
      },
      (data) => {
        if (data.status === EApiStatus.NoAuth) { //로그인 필요
          NoAuthRedirect();
        } else {
          alert(data.message); // 에러 메세지 alert
        }
      }
    );
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
                  <li
                    className="border-t border-gray-200"
                    key={`cms-history-${idx}`}
                  >
                    <a href={`/mypage/cms/${item.id}`}>
                      <div className="w-full p-3 sm:px-6">
                        <div className="flex items-center justify-between py-2">
                          <h3 className="text-lg leading-6 font-medium text-gray-900">
                            {item.title}
                          </h3>
                          <p className="max-w-2xl text-sm text-gray-500">
                            {item.regDate}
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="flex text-base text-gray-500">
                            <Locale k="status" /> :
                            <span className="pl-1 text-yellow-600">
                              {item.statusNm}
                            </span>
                          </p>
                          <div>
                            {item.status === CommissionStatus.PaymentPending && (
                              <Button
                                color="Blue"
                                onClick={(e) => {
                                  e.preventDefault();
                                  navigate("/payment", {state: {cmsApplyId: item.id}});
                                }}
                              >
                                <Locale k="payment" />
                              </Button>
                            )}
                            {item.status === CommissionStatus.Completed && (
                              <Button
                                color="Green"
                                className="ml-3"
                                onClick={(e) => {
                                  e.preventDefault();
                                  setCmsApplyId(item.id);
                                  serRvwMdDisplay(!rvwMdDisplay);
                                }}
                              >
                                <Locale k="review" />
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </a>
                  </li>
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


  return (
    <>
      <PaymentModal
        paymentData={paymentData}
        display={payMdDisplay}
        onClick={() => setPayMdDisplay(!payMdDisplay)}
      />
      <WriteRvwModal
        cmsApplyId={cmsApplyId}
        display={rvwMdDisplay}
        onClick={() => serRvwMdDisplay(!rvwMdDisplay)}
      />
      <MyCommonContent
        title={<Locale k="cms_apply_history" />}
        content={content}
        btnLink="/commissions"
        btnTxt={<Locale k="cms_apply" />}
      />
    </>
  );
};

export default MyCmsList;
