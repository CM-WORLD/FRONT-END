import { Suspense, useEffect, useState } from "react";

import CommonLoading from "../../../components/loading";
import BadRequest from "../../../error/badRequest";
import { ApiClient } from "../../../libs/ApiClient";

const SignOutLoading = () => {
  const [isLogOut, setIsLogOut] = useState(true);

  useEffect(() => {
    ApiClient.getInstance().post(
      "/sign/out",
      {},
      (data) => {},
      (data) => {}
    );
    // ApiClient.getInstance().post(
    //   "/invalidate/token",
    //   {},
    //   () => {
    //     localStorage.removeItem("atk");
    //     localStorage.removeItem("rtk");
    //     localStorage.removeItem("referer");
    //     localStorage.removeItem("nick");

    //     window.location.href = "/"; //최종적으로 메인으로 이동
    //   },
    //   () => {
    //     setIsLogOut(false);
    //   }
    // );
  }, []);

  return (
    <Suspense fallback={<CommonLoading />}>
      {isLogOut ? (
        <CommonLoading desc="로그아웃 처리 중입니다." />
      ) : (
        <BadRequest desc="이미 로그아웃 되어 있습니다" />
      )}
    </Suspense>
  );
};

export default SignOutLoading;
