import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// import { CmsPayDetail } from "../../defines/api";

import Button from "../../components/button";
import Locale from "../../components/locale";
import Modal from "../../components/modal";

const PaymentInvoice = () => {
  const location = useLocation();
  const { cmsApplyId } = location.state;

  const [data, setData] = useState();
  const [bankModalDisplay, setBankModalDisplay] = useState(false);

  useEffect(() => {
    // cmsApplyId로 결제 정보 조회 후, setData 처리
  }, []);

  return (
    <>
      <div className="w-10/12 relative m-auto py-5 pb-20 min-f-full">
        <h1 className="font-bold text-2xl my-4 text-center text-dark">
          결제 요청서
        </h1>
        <div className="min-w-96">
          <div className="flex justify-between mb-6">
            <div className="text-gray-700">
              <div>결제 ID: INV12345</div>
              <div>결제 요청 날짜: 01/05/2023</div>
            </div>
          </div>
          <table className="w-full mb-8">
            <thead>
              <tr>
                <th className="text-left font-bold text-gray-700">항목</th>
                <th className="text-right font-bold text-gray-700">금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-left text-gray-700">장식 추가금</td>
                <td className="text-right text-gray-700">100.00</td>
              </tr>
              <tr>
                <td className="text-left text-gray-700">이펙트 추가금</td>
                <td className="text-right text-gray-700">50.00</td>
              </tr>
              <tr>
                <td className="text-left text-gray-700"></td>
                <td className="text-right text-gray-700">75.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td className="text-left font-bold text-gray-700">
                  <Locale k="payment_amount" />
                </td>
                <td className="text-right font-bold text-gray-700">225.00</td>
              </tr>
              <tr className="">
                <td className="text-left font-bold text-gray-700 py-5">
                  <Locale k="payment_type" />
                </td>
                <td className="text-right font-bold text-gray-700">
                  <Button color="Blue" onClick={() => {}}>
                    <Locale k="toss_payment" />
                  </Button>
                  <Button
                    color="Emerald"
                    className="ml-3"
                    onClick={() => setBankModalDisplay(!bankModalDisplay)}
                  >
                    <Locale k="bank_transfer" />
                  </Button>
                </td>
              </tr>
            </tfoot>
          </table>
          <hr />
          <div className="mt-5 mb-8">
            <h2 className="text-lg font-bold mb-4 text-gray-700">
              작가 코멘트
            </h2>
            <div className="p-4 bg-gray-100">
              <div className="text-gray-700 mb-2">
                추가금 관련 문의는 문의 게시판 이용 부탁드립니다.
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            color="LightGray"
            textColor="Dark"
            className="px-10"
            onClick={() => history.back()}
          >
            <Locale k="go_back" />
          </Button>
        </div>
      </div>

      {/* 은행 계좌 modal  */}
      {/* 토스 주문서 제작 모달 */}
    </>
  );
};

export default PaymentInvoice;
