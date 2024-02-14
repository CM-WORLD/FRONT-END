import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import InvoiceComponent from "./Invoice";
import { CmsPayDetail } from "../../defines/api";
import Button from "../../components/button";
import Locale from "../../components/locale";

const PaymentInvoice = () => {
  const location = useLocation();
  const { cmsApplyId } = location.state;

  const [data, setData] = useState<CmsPayDetail>();

  useEffect(() => {
    // cmsApplyId로 결제 정보 조회
  }, []);

  return (
    <>
      <div className="w-10/12 relative m-auto py-5 pb-20 min-f-full">
        <h1 className="font-bold text-2xl my-4 text-center text-dark">
          결제 요청서
        </h1>
        <InvoiceComponent paymentData={data} />
        {/* <h4>하나은행 / 32591038729807</h4> */}

        <div className="flex justify-center">

        <Button color="LightGray" textColor="Dark" className="px-10">
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
