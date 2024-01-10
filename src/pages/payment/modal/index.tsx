import Modal from "../../../common/modal";
import "./style.scss";

interface PaymentModalProps {
  display: boolean;
  onClick?: () => void;
}
const PaymentModal = (props: PaymentModalProps) => {
  const paymentContent = (
    <>
      <div className="payment-modal-content">
        <p>*결제 수단을 선택해 주세요</p>
        <a className="social-link toss" href="/">
          토스로 결제
        </a>
        <a className="social-link bank" href="/">
          계좌이체
        </a>
        <button className="social-link cancel" onClick={props.onClick}>결제 취소</button>
      </div>
    </>
  );
  return (
    <>
      <Modal title="결제" display={props.display} content={paymentContent} />
    </>
  );
};

export default PaymentModal;
