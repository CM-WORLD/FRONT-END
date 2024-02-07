import { useEffect } from "react";

import CommonLoading from "../../../components/loading";
import { ApiClient } from "../../../libs/ApiClient";
import { signinCallback } from "../../../libs/request";

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
        console.log(data);

        const { nick, tokens: { accessToken, refreshToken } } = data.data;
        signinCallback(accessToken, refreshToken, nick);
      },
      (data) => {
        console.log("error: ", data);
      }
    );
  }, []);
  return <CommonLoading desc="로그인 처리 중입니다." />;
};

export default SigninNaverLoading;
