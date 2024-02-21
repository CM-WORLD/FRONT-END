import { useEffect, useRef } from "react";
import { nanoid } from "nanoid";
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";

import Locale from "../../components/locale";
import Button from "../../components/button";
import { PaymentDetail } from "../../defines/api";
import { useLocation } from "react-router-dom";

const TossPayment = () => {
  const data = useLocation().state.data as PaymentDetail;
  console.log(data, "data");
  const clientKey = import.meta.env.VITE_REACT_APP_TOSS_TEST_CLIENT_KEY;

  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const customerKey = nanoid();

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);
      paymentWidget.renderPaymentMethods("#payment-widget", data.amount);
      paymentWidgetRef.current = paymentWidget;
    })();
  }, []);

  return (
    <div
      id="App"
      className="fixed w-full h-full inset-0 z-50 bg-white overflow-y-scroll"
    >
      {/* <div id="App"> */}
      <div className="text-center font-bold py-5 text-2xl">주문서</div>
      <div className="text-center font-bold">
        결제 항목: <span className="ml-2">{data.title}</span>
      </div>
      <div className="text-center">결제 금액: {data.amount}</div>
      <div className="text-center py-3">{data.message}</div>
      <div id="payment-widget" />
      <div className="flex justify-center">
        <Button
          color="Primary"
          className="px-10 mb-5"
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
      </div>
    </div>
  );
};

export default TossPayment;
