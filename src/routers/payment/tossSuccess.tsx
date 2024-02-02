import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const TossSuccess = () => {
  const params = new URL(window.location.href).searchParams;

  useEffect(() => {
    axios
      .post("http://localhost:8089/toss/confirm", { // test용으로 webflux-basic 포트로 테스트
          paymentType: params.get("paymentType"),
          paymentKey: params.get("paymentKey"),
          orderId: params.get("orderId"),
          amount: params.get("amount"),
      })
      .then((resp) => {
        console.log("success", resp);
      })
      .catch((resp) => {
        console.log("fail", resp);
      });
  }, []);

  return <div className="mt-11">토스에 결제 요청 중입니다. 잠시만 기다려 주세요..</div>;
};

export default TossSuccess;
