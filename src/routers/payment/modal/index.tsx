import { ReactNode } from "react";
import "./style.scss";

interface PaymentModalProps {
  paymentData: ReactNode;
  display: boolean;
  onClick?: () => void;
}
const PaymentModal = (props: PaymentModalProps) => {
  const paymentContent = (
    <>
      <div className="payment-modal-content">
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
        <button className="social-link cancel" onClick={props.onClick}>
          결제 취소
        </button>
      </div>
    </>
  );
  return (
    <>
      {/* <Modal
        title="결제 정보"
        display={props.display}
        content={paymentContent}
      /> */}
    </>
  );
};

export default PaymentModal;
