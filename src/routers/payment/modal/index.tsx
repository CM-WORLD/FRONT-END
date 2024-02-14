import Modal from "../../../components/modal";
import Locale from "../../../components/locale";

import { CmsPayDetail } from "../../../defines/api";
import Button from "../../../components/button";

interface PaymentModalProps {
  paymentData: CmsPayDetail;
  // 그리고 결제 타입별로 다른 api를 호출해서 처리를 해서 message를 띄운 alert를 처리하는 게 맞아.
  display: boolean;
  onClick?: () => void;
}
const PaymentModal = (props: PaymentModalProps) => {
  const paymentContent = (
    <>
      <div
        className="min-w-96"
        // className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8"
      >
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
                <Button color="Blue">
                  <Locale k="toss_payment" />
                </Button>
                <Button color="Emerald" className="ml-3">
                  <Locale k="bank_transfer" />
                </Button>
              </td>
            </tr>
          </tfoot>
        </table>
        <hr />
        <div className="mt-5 mb-8">
          <h2 className="text-lg font-bold mb-4 text-gray-700">작가 코멘트</h2>
          <div className="p-4 bg-gray-100">
            <div className="text-gray-700 mb-2">
              추가금 관련 문의는 문의 게시판 이용
              부탁드립니다.ㄴㄴㄴㅁㅁㅁㄴㄴㄴㄴㄴㄴㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㄴㄴㄴ
            </div>
          </div>
        </div>
      </div>

      {/* <div className="payment-modal-content">
        <p>{props.paymentData}</p>
        <p>*결제 수단을 선택해 주세요</p>
        <div className="bnk-info">
          <h4>하나은행 / 32591038729807</h4>
          <h4>예금주: 남궁진</h4>
        </div>
        <a className="social-link bank" href="/">
          계좌이체 후 알림 보내기
        </a>
        <a className="social-link toss" href="/">
          토스로 결제
        </a>
      </div> */}
    </>
  );
  return (
    <>
      <Modal
        title={<Locale k="payment_detail" />}
        display={props.display}
        content={paymentContent}
        onClose={props.onClick}
        onSubmit={() => {}}
      />
    </>
  );
};

export default PaymentModal;
