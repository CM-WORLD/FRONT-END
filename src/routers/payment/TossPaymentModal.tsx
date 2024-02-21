import { useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";

import Modal from "../../components/modal";
import Locale from "../../components/locale";
import Button from "../../components/button";

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
    <div id="App" className="fixed w-full h-full inset-0 z-50 bg-white">
      {/* <div id="App"> */}
      <div className="text-center font-bold py-5 text-2xl">주문서</div>
      가격은?{price}
      <div id="payment-widget" />
      <Button
        color="Primary"
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
        <Locale k="payment" />
        {/* 결제하기 */}
      </Button>
      <Button color="LightGray" textColor="Dark" onClick={props.onClose}>
        <Locale k="cancel" />
      </Button>
    </div>
  );

  // return (
  //   // <Modal
  //   //   title={<Locale k="toss_payment" />}
  //   //   display={props.display}
  //   //   content={modalContent}
  //   //   onClose={props.onClose}
  //   // />
  // );
  return <>{modalContent}</>;
};

export default TossPaymentModal;
