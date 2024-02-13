import { useEffect } from "react";

import { ApiClient } from "../../../libs/ApiClient";
import { signinCallback } from "../../../libs/request";

import CommonLoading from "../../../components/loading";

const SigninKakaoLoading = () => {
  /** 카카오 인가 코드 */
  const code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    // axios.post(HOST_URL + "/process/kakao", { code: code }).then((resp) => {
    //   const { nick } = resp.data;
    //   const { accessToken, refreshToken } = resp.data.tokens;

    //   if (accessToken && refreshToken && nick) {
    //     localStorage.setItem("atk", accessToken);
    //     localStorage.setItem("rtk", refreshToken);
    //     localStorage.setItem("nick", nick);
    //   }

    //   const referer = localStorage.getItem("referer");
    //   if (
    //     referer === null ||
    //     referer === "/login/kakao" ||
    //     referer === "/sign/in"
    //   ) {
    //     window.location.href = "/";
    //   } else window.location.href = referer;
    // });

    ApiClient.getInstance().post(
      "/process/kakao",
      { code: code },
      (data) => {
        const { nick, provider,  tokens: { accessToken, refreshToken } } = data.data;
        signinCallback(accessToken, refreshToken, nick, provider);
      },
      (data) => {
        console.log(data);
      }
    );
  }, []);
  return <CommonLoading desc="로그인 처리 중입니다." />;
};

export default SigninKakaoLoading;
