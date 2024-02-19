import { useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";

import Modal from "../../components/modal";

interface TossPaymentProps {
  display: boolean;
  onClose: () => void;
}

const TossPaymentModal = (props: TossPaymentProps) => {
  const clientKey = import.meta.env.VITE_REACT_APP_TOSS_TEST_CLIENT_KEY;

  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const price = 50_000;
  const customerKey = nanoid();

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      paymentWidget.renderPaymentMethods("#payment-widget", price);

      paymentWidgetRef.current = paymentWidget;
    })();
  }, []);

  const modalContent = (
    <>
      <div className="mt-11">
        <div className="App">
          <h1>주문서</h1>
          <div id="payment-widget" />
          <button
            onClick={async () => {
              const paymentWidget = paymentWidgetRef.current;

              try {
                await paymentWidget?.requestPayment({
                  orderId: nanoid(),
                  orderName: "토스 티셔츠 외 2건",
                  customerName: "김토스",
                  customerEmail: "customer123@gmail.com",
                  successUrl: `http://localhost:3000/toss/success`,
                  failUrl: `${window.location.origin}/fail`,
                });
              } catch (err) {
                console.log(err);
              }
            }}
          >
            결제하기
          </button>
        </div>
      </div>
    </>
  );

  return (
    <Modal
      display={props.display}
      content={modalContent}
      onClose={props.onClose}
    />
  );
};

export default TossPaymentModal;
