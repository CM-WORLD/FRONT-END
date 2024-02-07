import { useEffect } from "react";

import CommonLoading from "../../../components/loading";
import { ApiClient } from "../../../libs/ApiClient";
import { signinCallback } from "../../../libs/request";

const SigninTwitterLoading = () => {
  useEffect(() => {
    const oauthToken = new URL(window.location.href).searchParams.get(
      "oauth_token"
    );
    const oauthVerifier = new URL(window.location.href).searchParams.get(
      "oauth_verifier"
    );
    ApiClient.getInstance().post(
      "/process/twitter",
      {
        oauthToken: oauthToken,
        oauthVerifier: oauthVerifier,
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

export default SigninTwitterLoading;
