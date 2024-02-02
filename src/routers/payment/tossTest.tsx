import { loadTossPayments } from "@tosspayments/payment-sdk";
import {
  loadPaymentWidget,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";
import { nanoid } from "nanoid";
import { useEffect, useRef } from "react";
import Button from "../../components/button";

const TossTest = (subject) => {
  const clientKey = "test_ck_DnyRpQWGrNqXaKo12WmeVKwv1M9E";
  const clientSecret = "test_sk_6bJXmgo28ePAmodRWE7jrLAnGKWx"; //절대 올리지 말것

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

  return (
    <div className="mt-11">
      <div className="App">
        <h1>주문서</h1>
        <div id="payment-widget" />
      <button
      onClick={async () => {
        const paymentWidget = paymentWidgetRef.current

        try {
          await paymentWidget?.requestPayment({
          	orderId: nanoid(),
            orderName: "토스 티셔츠 외 2건",
            customerName: "김토스",
            customerEmail: "customer123@gmail.com",
            successUrl: `http://localhost:3000/toss/success`,
            failUrl: `${window.location.origin}/fail`,
        }) 
        } catch (err) {
          	console.log(err)
        }
     }}
  >
  	결제하기
  </button>
      </div>
    </div>
  );
};

export default TossTest;
