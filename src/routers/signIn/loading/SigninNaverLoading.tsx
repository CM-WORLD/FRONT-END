import { useEffect } from "react";

import CommonLoading from "../../../components/loading";
import { ApiClient } from "../../../libs/ApiClient";

const SigninNaverLoading = () => {
  useEffect(() => {
    const code = new URL(window.location.href).searchParams.get(
      "code"
    );
    const state = new URL(window.location.href).searchParams.get(
      "state"
    );
    ApiClient.getInstance().post(
      "/process/naver",
      {
        code: code,
        state: state,
      },
      (data) => {
        console.log("success", data);

        window.location.href = "/";
        // const referer = localStorage.getItem("referer");
      // if (
      //   referer === null ||
      //   referer === "/login/kakao" ||
      //   referer === "/sign/in"
      // ) {
      //   window.location.href = "/";
      // } else window.location.href = referer;
      },
      (data) => {
        console.log("error: ", data);
      }
    );
  }, []);
  return <CommonLoading desc="로그인 처리 중입니다." />;
};

export default SigninNaverLoading;
