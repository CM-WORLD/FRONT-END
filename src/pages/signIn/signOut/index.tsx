import { Suspense, useEffect, useState } from "react";
import axios from "axios";

import CommonLoading from "../../../components/loading";
import BadRequest from "../../../components/error/badRequest";

import { AUTH_ITC, HOST_URL, getRtk } from "../../../common/Request";

import "./style.scss";

const SignOutLoading = () => {
  const [isLogOut, setIsLogOut] = useState(true);

  useEffect(() => {
    AUTH_ITC.get("/validate/token").then((resp) => {
      if (!(resp.data.status === 200 || resp.data.status === 205)) {
        setIsLogOut(false);
      } else {
        axios
          .post(HOST_URL + "/invalidate/token", null, {
            headers: {
              WithCredentials: true,
              RefreshToken: getRtk(),
            },
          })
          .then((resp) => {
            if (resp.data.status === 200) {
              localStorage.removeItem("atk");
              localStorage.removeItem("rtk");
              localStorage.removeItem("referer");
              localStorage.removeItem("nick");

              window.location.href = "/"; //최종적으로 메인으로 이동
            }
          });
      }
    });
  }, []);

  return (
    <Suspense fallback={<CommonLoading />}>
      {isLogOut 
      ? <CommonLoading desc="로그아웃 처리 중입니다." />
      : <BadRequest desc="이미 로그아웃 되어 있습니다" />}
    </Suspense>
  );
};

export default SignOutLoading;
